# gaboesquivel-skills

[Agent Skills](https://agentskills.io) catalog for Gabo Esquivel's voice and writing method. Install with the [skills CLI](https://github.com/vercel-labs/skills).

## Install

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
bunx skills@latest add gaboesquivel/gaboesquivel-skills --skill gabo -y
```

**List without installing:**

```bash
npx skills@latest add gaboesquivel/gaboesquivel-skills --list
pnpm dlx skills@latest add gaboesquivel/gaboesquivel-skills --list
bunx skills@latest add gaboesquivel/gaboesquivel-skills --list
```

In writing repos, install [human-writing](https://www.skills.sh/factory-ai/factory-plugins/human-writing) next to `gabo`. It is a second pass; `gabo` wins conflicts.

```bash
npx skills@latest add factory-ai/factory-plugins --skill human-writing -y
```

Canonical copies of `gabo` land in `.agents/skills/gabo/`. Distribution is GitHub only.

Layout, authoring, and checks for maintainers: [AGENTS.md](AGENTS.md).
