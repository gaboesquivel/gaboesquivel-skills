# AGENTS.md

Gabo Esquivel Agent Skills catalog: how its skills are laid out, added, changed, and checked. Install commands for people: [README.md](README.md).

## Layout

- One skill per directory: `skills/<name>/SKILL.md`
- No root `SKILL.md` (the CLI would treat the repo as a single skill)
- A `references/` file is reached by a when-to-read line in `SKILL.md`
- Evals: `evals/evals.json` holds prompts and expectations; `evals/trigger-queries.json` holds queries that should and should not trigger the skill
- [skills.sh.json](skills.sh.json) groups skills on [skills.sh](https://skills.sh); it does not change install behavior

## Adding a skill

1. Scaffold: `npx skills@latest init skills/<name>`. Spec: [agentskills.io/specification](https://agentskills.io/specification). Authoring: [skill-creation best practices](https://agentskills.io/skill-creation/best-practices). Done when the folder name matches frontmatter `name` (kebab-case).
2. Frontmatter: required `name` and single-line `description` (what + when, ≤1024 chars; no YAML `|` or `>` blocks). Done when both fields are set on one line.
3. Register `<name>` in [skills.sh.json](skills.sh.json). Done when the name appears in a grouping.
4. `bun run validate`. Done when the command prints Catalog OK.
5. Local check: `npx skills@latest add . --skill <name> --list`. Done when the skill appears in the list.

## Changing a skill

- Behavior: update `SKILL.md` and the `references/` it discloses. Update `evals/evals.json` when expected output changes.
- Triggers: update the frontmatter `description` and `evals/trigger-queries.json`.
- Before pushing a change that adds, moves, or removes a rule or method step, or edits the description, run `evals/evals.json` against the previous version. Done when every expectation passes and a description edit still matches `trigger-queries.json`.
- gaboesquivel.com and the gaboesquivel package record installed skills in `skills-lock.json`. After pushing, run `bunx skills@latest update gabo -p -y` in each writing repo and commit the lock. A global install updates with `bunx skills@latest update gabo -g -y`.

Voice, identity, and method live in this catalog. Site routes, page jobs, and package field rules live in those repos' docs, starting at their `AGENTS.md`.

## Checks

`bun run validate` checks every `SKILL.md`: `name` matches its folder, `description` is one line of at most 1024 characters, no `@cursor/skills` paths, and `skills.sh.json` lists exactly the skills under `skills/`. Skill links stay catalog-relative. It does not check links, evals, `references/`, or prose. Run it before pushing skill changes.

## Git

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject` (for example `docs: clarify catalog layout in AGENTS.md`, `feat(gabo): add channel reference`). Common types: `docs`, `feat`, `fix`, `chore`.
