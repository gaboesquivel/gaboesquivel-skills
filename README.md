# gaboesquivel-skills

[Agent Skills](https://agentskills.io) catalog for Gabo Esquivel's voice and writing method. Install with the [skills CLI](https://github.com/vercel-labs/skills).

## Install

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo
bunx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo
```

**List without installing:**

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --list
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --list
bunx skills@latest add gaboesquivel/gaboesquivel-skills --list
```

From a local clone: `npx skills@latest add . --skill gabo` (or `pnpm dlx` / `bunx`)

Local consumers (`gaboesquivel.com`, `gaboesquivel`): `bun link` this package, add it as a `devDependency`, then `bun run skills:install`.

## Flags

| Intent | Example |
| --- | --- |
| Cursor only | `-a cursor` |
| Cursor + Claude Code | `-a cursor -a claude-code` |
| Skip prompts | `-y` |

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -a cursor -a claude-code -y
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -a cursor -a claude-code -y
bunx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -a cursor -a claude-code -y
```

Canonical copies land in `.agents/skills/gabo/`. Validate before pushing:

```bash
bun run validate
```

Distribution is GitHub only. Do not publish this catalog to npm.
