# gaboesquivel-skills

**Moved.** The `gabo` skill now lives in [`skills/gabo/`](https://github.com/gaboesquivel/gaboesquivel/tree/master/skills/gabo) of [gaboesquivel/gaboesquivel](https://github.com/gaboesquivel/gaboesquivel), next to the `gaboesquivel` package's verified facts. This repository is kept for compatibility and is no longer updated.

Install from the new location (same skill name, same `/gabo` invocation):

```bash
npx skills@latest add gaboesquivel/gaboesquivel --skill gabo -y
```

Global install:

```bash
npx skills@latest add gaboesquivel/gaboesquivel --skill gabo -g -y
```

To switch an existing project, remove the old entry and add the new one:

```bash
npx skills@latest remove gabo -y
npx skills@latest add gaboesquivel/gaboesquivel --skill gabo -y
```

Skill layout, checks, and maintenance steps: [AGENTS.md in gaboesquivel/gaboesquivel](https://github.com/gaboesquivel/gaboesquivel/blob/master/AGENTS.md).
