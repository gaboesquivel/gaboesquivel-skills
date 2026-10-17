# AGENTS.md

Gabo Esquivel Agent Skills catalog: how its skills are laid out, added, changed, and checked. Install commands for people: [README.md](README.md). Do not publish this repo to npm.

## Layout

- One skill per directory: `skills/<name>/SKILL.md`
- No root `SKILL.md` (the CLI would treat the repo as a single skill)
- Optional: `references/` (docs loaded on demand), `scripts/`, `evals/` (test prompts), `assets/` — link from `SKILL.md` with a clear when-to-read line
- Evals use the skill-creator format: `evals/evals.json` holds prompts with expected output, `evals/trigger-queries.json` holds queries that should and should not trigger the skill
- [skills.sh.json](skills.sh.json) groups skills on [skills.sh](https://skills.sh); it does not change install behavior

## Adding a skill

1. Scaffold: `npx skills@latest init skills/<name>` (folder name must match frontmatter `name`, kebab-case)
2. Frontmatter: required `name` and single-line `description` (what + when, ≤1024 chars; no YAML `|` or `>` blocks)
3. Register `<name>` in [skills.sh.json](skills.sh.json)
4. Add a row to the catalog table below
5. `bun run validate`
6. Local check: `npx skills@latest add . --skill <name> --list`

## Changing a skill

- Behavior: update `SKILL.md` and the `references/` it discloses. Update `evals/evals.json` when expected output changes.
- Triggers: update the frontmatter `description` and `evals/trigger-queries.json`.
- gaboesquivel.com and the gaboesquivel package record installed skills in `skills-lock.json`. After pushing, run `bun run skills:update` in each and commit the lock.

Keep consumer-repo rules out of skills. Site routes, page jobs, and package field rules live in those repos' docs, starting at their `AGENTS.md`.

Never use `@cursor/skills` paths in skill files. Do not put catalog skills in `~/.cursor/skills-cursor/` (Cursor-managed internals).

## Checks

`bun run validate` checks every `SKILL.md`: `name` matches its folder, `description` is one line of at most 1024 characters, and there are no `@cursor/skills` paths. It also checks that `skills.sh.json` lists exactly the skills under `skills/`. It does not check links, evals, `references/`, or the catalog table below. Run it before pushing skill changes.

## Git

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject` (for example `docs: clarify catalog layout in AGENTS.md`, `feat(gabo): add channel reference`). Common types: `docs`, `feat`, `fix`, `chore`.

## Skills in this catalog

| Skill | Path |
| --- | --- |
| `gabo` | [skills/gabo/SKILL.md](skills/gabo/SKILL.md) — identity and voice |

Companion (not in this catalog): [human-writing](https://www.skills.sh/factory-ai/factory-plugins/human-writing), installed in consumer repos as a second pass. If it fights `gabo`, `gabo` wins. Do not vendor a copy here.

Spec: [agentskills.io/specification](https://agentskills.io/specification). Authoring: [skill-creation best practices](https://agentskills.io/skill-creation/best-practices).
