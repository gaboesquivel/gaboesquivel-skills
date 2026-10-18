# Gabo identity and writing refactor

October 18, 2026. Baseline commits: original skill `1044f5c`; first refactor `42bf11c`; second pass (this document) tightens defaults after compact eval generation. Research stays in [editorial-research.md](editorial-research.md); samples in [editorial-comparisons.md](editorial-comparisons.md).

## First refactor (kept)

- Identity in [skills/gabo/references/identity.md](../skills/gabo/references/identity.md); writing behavior in [skills/gabo/SKILL.md](../skills/gabo/SKILL.md).
- No tell blacklist; factual guardrails; exact approved title, philosophy, and website paragraphs.
- Distinct LinkedIn vs X; conditional hiring/calendar in outreach; trigger on writing on Gabo’s behalf, not mere mentions.

## Second-pass diagnosis

| Issue | Evidence | Change |
| --- | --- | --- |
| Default public outline taught in SKILL | Baseline About/intro listed human → agent → operations | Replaced “purpose → human → agent → expertise” with **lead with what the piece is about**; philosophy via examples, not a standing outline |
| About channel guidance | “Connect role, product philosophy, and experience” invited pillar tours | One POV + supporting experience; close on insight, not a restated trio |
| Eval suite overweight | 16 cases; many overlapped; prompts over-specified behavior | **13** distinct cases in [evals.json](../skills/gabo/evals/evals.json); synthetic personality fixtures; underspecified channel prompts |
| Trigger queries sanitized | Many queries only triggered after adding “Gabo” | Restored **isolated** near-miss queries alongside named variants; routing judged from query wording alone (no ambient user identity) |
| First comparison limitations | Self-graded; explicit length/hiring in prompts | Compact set + separate generation runs; blind review attempted (orchestrator fallback documented) |

## Trigger evaluation assumption

Each query in [trigger-queries.json](../skills/gabo/evals/trigger-queries.json) is evaluated on its own wording. Isolated queries such as “keep it in my usual voice” without naming Gabo are **should_not_trigger** unless the text clearly requests Gabo’s voice or site. Named variants remain **should_trigger**.

## Production files

Three files: `SKILL.md`, `references/identity.md`, `references/channels.md`. No `tells.md`. No external personality as style model in production instructions.

## Eval execution

October 18, 2026. Fresh generators read the skill and the listed fixtures only. They did not read `evals.json`. Outputs are in [docs/eval-outputs/run/](eval-outputs/run/). Grading is against the expectations in [evals.json](../skills/gabo/evals/evals.json), not against the earlier hand-edited About sample in `docs/eval-outputs/candidate/`.

Pitch and the LinkedIn/X post were regenerated after the skill was tightened, because the first run failed. The grades below are the latest files.

| Case | Result | Evidence |
| --- | --- | --- |
| 1 Pitch rewrite | Fail | 60% and the three verified facts are handled. The closer still adds “the work I want more of,” which is not a verified claim. |
| 2 LinkedIn and X | Fail | Hero image, separate lengths, exact URL, and X at 170 characters pass. LinkedIn adds “the same retrieval scope the mobile client needs day to day,” which the post does not say. |
| 3 LinkedIn About | Fail | Length, no hiring CTA, and no pillar-set opening pass. “what the product still gets wrong” is not in the fixtures. |
| 4 Website intro | Pass | Names Gabo and the role, 57 words, does not paste the approved paragraphs. |
| 5 Conference bio | Pass | Third person, title, fixture facts, 123 words. |
| 6 Alex reply | Pass | Answers with LegalAgent facts, no calendar link or W-2 terms, 112 words. |
| 7–8 Observation | Pass | Both keep the capability/work observation and the “finish what they came to do” point, without a pillar essay or a new anecdote. |
| 9 Opinion post | Pass | Keeps the chat opinion and the workflow reason. |
| 10 Disagreement reply | Pass | Agreement, narrow start, and expansion from use are all present. |
| 11 Architecture | Pass | Required technologies and the feedback loop are present; authorization and reliability are named as unspecified; 133 words. |
| 12 Punctuation | Pass | Same words; colon and question mark added. |
| 13 Approved copy | Pass | Both paragraphs verbatim, no commentary. |

Trigger queries were checked against the description wording only. Named Gabo, site, and package-prose queries match `should_trigger: true`. Isolated “my usual voice” queries, code tasks, and writing for someone else match `should_trigger: false`. That is a reading of the description, not a live router measurement.

Two expectations were tightened so they match the review: source posts may not add claims the piece does not state, and an About section may not open or close by listing the three product concerns as its frame. Those checks are what failed in cases 2 and 3. The expectations were not loosened to absorb the failures.

## Remaining uncertainty

- Cases 1–3 still add a sentence the sources do not support. Further instruction after two regenerations did not remove that habit. Those failures stay in the run files.
- Warmth and “sounds like Gabo” still need your review over time.
- Host-level assistant instructions can still bias brevity or tone.
- Consumer repos still pin an older skill until explicitly updated.
