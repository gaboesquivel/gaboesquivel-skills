# Gabo identity and writing refactor

October 18, 2026. Baseline: commit `1044f5c3095903d3176ee44f8ecaf18fb5827e6f`. The working tree was clean at the start. Changes are confined to this catalog. Research is in [editorial-research.md](editorial-research.md); writing trials and checks are in [editorial-comparisons.md](editorial-comparisons.md).

## Diagnosis

The original skill had useful editorial judgment, but turned some preferences into universal constraints. Its own six tests passed in a baseline run: it was effective at removing unsupported claims and retaining implementation facts. The problem was coverage and scope, not a wholesale failure of concise or technical writing.

| Original instruction | Observable problem | Decision |
| --- | --- | --- |
| Every claim must trace to an opened file | Excludes an explicit user brief as a source and conflates facts, beliefs, and hypothetical examples | Accept supplied material and distinguish those claim types |
| Preserve the author's order and words for all edits; changes need one of five narrow reasons | Blocks restructuring even when a broader rewrite is requested | Keep narrow point edits; allow justified structure and audience changes for rewrites |
| Specific implementation over broad claims; write to a senior engineer or technical founder | Makes a stack the default proof even for nontechnical readers | Let purpose and audience determine where technical detail belongs |
| Fixed opening sequence, one move per sentence, prescribed medium/short rhythm | Competing formulas can fragment ideas or impose a technical explanation on another genre | Retain clarity and read-aloud review; use natural relationships and varied rhythm |
| Cut every sentence that could appear on another engineer's site | Can reject truthful shared beliefs and even approved positioning | Assess the passage's specificity and meaning rather than its lexical uniqueness |
| Any tell match must be fixed: qualifiers, metaphor verbs, rhetorical questions, reflection, beliefs as endings | Treats valid rhetorical choices as errors; “often” can express honest uncertainty | Remove the blacklist; retain contextual editing and factual guardrails |
| LinkedIn and X share a one-paragraph, under-280-character output | A demonstrable channel mismatch; no separate About guidance | Distinct LinkedIn/X defaults and About guidance |
| Every outreach message includes engagement terms and the calendar ask | Converts peer exchanges and thank-yous into hiring pitches | Include hiring details only when relevant to the purpose |
| Trigger whenever Gabo or Blockmatic is named | Attracts code and third-party comparison tasks | Trigger on representation and writing on Gabo's behalf |
| Package field voice rules repeated in the skill | Duplicates the package's authoritative field guidance | Defer field shape to the destination repo |

The bans on invented outcomes, false urgency, unsupported praise, and fabricated autobiography remain valuable. So do ownership accuracy, plain language, preserving technical details during compression, appropriate source reading, useful title conventions, retaining supplied links, and respecting the author's scope.

## Architecture and scope inspected

The catalog has one skill, `gabo`, not separate identity and writing skills. Its original entrypoint combined method, identity, and voice; two references supplied channels and a mandatory tells checklist. All six original fixtures, six evals, and 19 trigger queries were read. There are no scripts or tool dependencies in the production skill.

The installed `gabo` entrypoint and both references in the `gaboesquivel` package and `gaboesquivel.com` site were byte-identical to the original catalog copies. Their `AGENTS.md` files assign voice, identity, and claims to this catalog, with package employment records owning employment facts and destination docs owning routes and field shapes. Relevant `PRODUCT.md` sections were inspected read-only. The package's implementation-oriented field requirements are appropriate to structured project/technology records; they should not become universal rules for public narrative.

Accessible global writing skills `writing-beats`, `writing-shape`, and `writing-fragments` are explicitly invoked authoring workflows, not dependencies of `gabo`. They permit vignettes, questions, analogies, and personal observations, which the old tells checklist could subsequently erase. Their interactive approval loops belong to those workflows; they are not needed for ordinary drafting with `gabo`. The installed workflow's `w-deslop` concerns code comments, defensive noise, and casts; `w-docs` concerns documentation ownership. Neither establishes a public voice.

No ancestor `AGENTS.md` was found at `/`, `/Users`, `/Users/gabo`, or `/Users/gabo/Code`; the checked global `/Users/gabo/.codex/AGENTS.md` and `/Users/gabo/.claude/CLAUDE.md` were absent. This is a bounded inspection, not a claim to have inspected every application setting. Session-level assistant instructions also favor concise communication and constrain some rhetorical framing. A portable skill cannot override higher-priority runtime instructions, so identical output across hosts cannot be guaranteed.

No explicit Grug attribution or dependency was found in the inspected catalog or relevant guidance. Its provenance cannot be inferred from terse prose. The overextension resembles applying engineering minimalism to every genre, but that is an editorial diagnosis, not evidence that Grug caused it. Simplicity, pragmatism, clarity, and avoiding unnecessary abstraction remain valid engineering principles. The revised skill explicitly confines engineering guidance to engineering decisions and allows storytelling and positioning to serve their audience.

## Smallest coherent change

Keep the existing skill and install name. Separate identity into `references/identity.md`, retain the channel reference, and delete `references/tells.md`. The number of production files stays at three. Identity now has one authoritative home; `SKILL.md` owns method and writing behavior. No new skill, framework, runtime dependency, or publishing process was introduced.

The identity reference preserves the exact approved title, philosophy, and two website paragraphs. It connects the three pillars through one product's purpose and adds only values supplied in the brief. Existing biography, technologies, domains, Wink work, languages, engagement terms, and location remain. Mountain Time alignment is preserved as a working arrangement, not treated as a geographic timezone claim. Hypothetical agent interfaces are not recast as shipped project experience.

The writing principles favor audience needs, product purpose, supported judgment, natural warmth, flexible rhythm, and concrete specificity. They permit technical detail, examples, reflection, and qualifying language when useful. Optimism must distinguish demonstrated capability from possibility. This expresses Gabo's approved direction without importing a researched speaker's identity, vocabulary, or accomplishments. Research sources remain outside the production files.

The entrypoint decreased from 976 to 645 whitespace-delimited words (about 34%). Total production instructions decreased from 2,013 to 1,681 words (about 16%), while adding the approved philosophy and copy. These are word counts, not tokenizer measurements. Identity and channel guidance are disclosed when relevant; most personal writing will still need identity.

## Evaluation changes

Original eval prompts 1–6 and their factual fixtures remain. Expectations that enforced word bans and rigid sentence counts now assess factual preservation, unsupported claims, and readable relationships. Eval 2 intentionally changes from a single shared social draft to separate channel drafts; this is a documented behavior change, not a regression disguised as a pass.

Eight comparable sample prompts cover the requested formats. Two additional checks protect punctuation-only editing of a supplied reflection and verbatim approved copy. The shared positioning fixture ensures the old skill also receives the new brief; otherwise an apparent improvement might merely reflect additional facts. The trigger suite now includes explicit author context where formerly ambiguous, plus positive biography/philosophy requests and negative mere-mention cases. These assertions assess routing intent; they do not measure a deployed skill selector's precision.

## Remaining issues

- The strongest remaining test is Gabo's judgment of real drafts over time. Warmth and distinctiveness are not reliably established by a single self-graded generation pass.
- Baseline prompts explicitly request length and peer outreach, so they can override old defaults. Comparisons should not exaggerate how badly the original skill performed.
- Installed consumers still hold the original version. Publication and lock updates are intentionally outside this request, which excludes website and unrelated repository changes. Updating those consumers later should use their existing skills CLI workflow.
- Runtime instructions can still suppress certain choices. Revisit a specific conflicting host instruction only when its effect is observed; do not add more compensating prohibitions to this skill.
- Employment and project records remain the source for future achievements. The philosophy is permission to express a viewpoint, not permission to infer new experience.
