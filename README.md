# gaboesquivel-skills

[Agent Skills](https://agentskills.io) catalog for Gabo Esquivel's voice and writing method. Install with the [skills CLI](https://github.com/vercel-labs/skills).

## Install

**Project** (this repo, recorded in `skills-lock.json`):

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
bunx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
```

**Global** (every project on the machine):

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -g -y
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -g -y
bunx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -g -y
```

A global install can still print `PromptScript does not support global skill installation`. The copy in `~/.agents/skills/gabo` is installed. PromptScript has no global directory, and `skills add -g -y` still targets it ([vercel-labs/skills#1352](https://github.com/vercel-labs/skills/issues/1352)).

**List without installing:**

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --list
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --list
bunx skills@latest add gaboesquivel/gaboesquivel-skills --list
```

Canonical copies land in `.agents/skills/gabo/` for a project install and `~/.agents/skills/gabo/` for a global install. Distribution is GitHub only.

Layout, authoring, and checks for maintainers: [AGENTS.md](AGENTS.md).
