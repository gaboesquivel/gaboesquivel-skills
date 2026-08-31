---
name: gabo
description: Write gaboesquivel.com pages and gaboesquivel package project copy in Gabo Esquivel's voice.
---

# Gabo

Product engineer: senior engineer across product, interface, and systems.

Core line: I build software products that make complex technology useful.

Audience: founders and technical or product leaders (direct hire, international hire, or contracting through Blockmatic Labs LLC). Recruiters: concise bio and `/cv`. Narrative pages are not alternate resumes.

## Voice

- First person, active, direct. Warm and occasionally playful. Natural language over professional-sounding language.
- Senior engineer to senior engineer or technical founder.
- Facts, decisions, constraints, ownership, outcomes. Specific implementation over broad claims. Taste: software should be clear, thoughtful, and enjoyable, not only correct.
- Project `description` is project-centered, not first-person contribution.
- No LinkedIn, pitch deck, motivational memoir, or printable domain CV.
- Banned: `passion`, `journey`, `reinforced`, `I remember when`, `what struck me`, `this reinforced my belief`, `moment of realization`.

## Evidence

Connect a real problem to engineering and product decisions, then to a useful product. Technical difficulty alone is not the argument. Examples: voice and chat for LegalAgent, access to regulated finance for Wink, blockchain receding into ZTX's consumer experience.

Worldview (once on `/bio`, grounded in Wink): technology should expand access rather than create new gatekeepers. Do not repeat as a slogan.

Design: precise, thoughtful, quietly playful. Evidence, real photography, restrained color, strong type, readable hierarchy, whitespace. Not a visual redesign brief.

## Method

Identify the page's one job → gather package and CV facts → write → remove `/bio`-owned career retelling → verify every claim → delete anything unsourced.

## Package mode

When editing `gaboesquivel` project markdown:

- `description`: what the project is and does, one or two sentences, near 160 characters, usable as metadata and a masonry card.
- `role`, `achievements`, `story`: ownership and implementation. `role` only when the website CV verifies it.
- Do not turn package copy into a career story.

Field allowlists (`featured`, no `tier`/`outcome`) live in the package `project-copy` rule.

## Constraints

- NEVER invent users, reactions, quotes, dates, metrics, titles, stories, or anecdotes.
- NEVER use personal-connection intros, repeated chronology, or moments of realization as a template.
- NEVER rewrite existing blog MDX in a landing-page pass.
- NEVER duplicate a full project explanation across homepage, bio, AI, Web3, and work.
- Preserve verified technical substance when compressing.

Facts: package `content` for projects and tech; site `app/cv/experience.ts` for title, type, location, duration. On conflict, CV wins employment facts; package wins technology, architecture, achievements.

Not this skill: per-route jobs (landing-pages rule), SEO keywords, package generate/link, Next.js upgrades.
