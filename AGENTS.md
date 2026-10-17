# AGENTS.md

Gabo Esquivel Agent Skills catalog. Read this file when adding or editing a catalog skill, changing layout or validation, or registering skills on [skills.sh](https://skills.sh).

Human install commands: [README.md](README.md). Do not publish this repo to npm.

## Git

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject` (for example `docs: clarify catalog layout in AGENTS.md`, `feat(gabo): add channel reference`). Common types: `docs`, `feat`, `fix`, `chore`. Run `bun run validate` before pushing skill changes.

## Layout

- One skill per directory: `skills/<name>/SKILL.md`
- No root `SKILL.md` (the CLI would treat the repo as a single skill)
- Optional: `references/` (docs loaded on demand), `scripts/`, `evals/` (test prompts), `assets/` — link from `SKILL.md` with a clear when-to-read line
- [skills.sh.json](skills.sh.json) groups skills on skills.sh; it does not change install behavior

## Adding a skill

1. Scaffold: `npx skills@latest init skills/<name>` (folder name must match frontmatter `name`, kebab-case)
2. Frontmatter: required `name` and single-line `description` (what + when, ≤1024 chars; no YAML `|` or `>` blocks)
3. Register `<name>` in [skills.sh.json](skills.sh.json)
4. Add a row to the catalog table below
5. `bun run validate`
6. Local check: `npx skills@latest add . --skill <name> --list`

When a skill's behavior changes, update its `SKILL.md` (and disclosed `references/`). When discoverability changes, update frontmatter `description`. Do not duplicate gaboesquivel.com routes or package field rules in skills — those live in each consumer repo's `AGENTS.md`.

Never use `@cursor/skills` paths in skill files. Do not put catalog skills in `~/.cursor/skills-cursor/` (Cursor-managed internals).

## Skills in this catalog

| Skill | Path |
| --- | --- |
| `gabo` | [skills/gabo/SKILL.md](skills/gabo/SKILL.md) — identity and voice |

Companion (not in this catalog): [human-writing](https://www.skills.sh/factory-ai/factory-plugins/human-writing) in consumer repos as a second pass. If it fights `gabo`, `gabo` wins. Install commands: [README.md](README.md).

Spec: [agentskills.io/specification](https://agentskills.io/specification). Authoring: [skill-creation best practices](https://agentskills.io/skill-creation/best-practices).
