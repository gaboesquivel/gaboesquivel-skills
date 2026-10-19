import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

// Exercise the CLI against isolated catalogs rather than the real working tree.
const validator = await readFile(new URL('./validate-catalog.mjs', import.meta.url), 'utf8')
for (const [label, name, description, valid] of [
  ['plain', 'example', 'Useful prose.', true],
  ['quoted', 'example', '"Write: clear prose."', true],
  ['double-quoted comment', 'example', '"Useful prose." # routing note', true],
  ['single-quoted comment', 'example', "'Useful prose.' # routing note", true],
  ['folded with chomping', 'example', '>-\n  continued', false],
  ['literal with chomping', 'example', '|-\n  continued', false],
  ['plain continuation', 'example', 'Useful\n  prose.', false],
  ['quoted continuation', 'example', '"Useful\n  prose."', false],
  ['empty description', 'example', '\nlicense: MIT', false],
  ['leading hyphen', '-example', 'Useful prose.', false],
  ['repeated hyphen', 'my--example', 'Useful prose.', false],
  ['trailing hyphen', 'example-', 'Useful prose.', false],
]) {
  test(label, async () => {
    const root = await mkdtemp(join(tmpdir(), 'skill-catalog-'))
    try {
      await mkdir(join(root, 'scripts'))
      await mkdir(join(root, 'skills', name), { recursive: true })
      await writeFile(join(root, 'scripts', 'validate.mjs'), validator)
      await writeFile(join(root, 'skills.sh.json'), JSON.stringify({ groupings: [{ skills: [name] }] }))
      await writeFile(join(root, 'skills', name, 'SKILL.md'), `---\nname: ${name}\ndescription: ${description}\n---\n`)
      const result = spawnSync(process.execPath, [join(root, 'scripts', 'validate.mjs')], { encoding: 'utf8' })
      assert.equal(result.status, valid ? 0 : 1, result.stdout + result.stderr)
    } finally {
      await rm(root, { recursive: true, force: true })
    }
  })
}
