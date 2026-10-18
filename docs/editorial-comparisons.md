# Second-pass writing comparison

October 18, 2026. Baseline skill snapshot: commit `42bf11c` (pre–second-pass), copied to `/tmp/gabo-skill-baseline` before edits. Candidate skill: [skills/gabo/SKILL.md](../skills/gabo/SKILL.md) after the second pass (lead-with-subject, anti–pillar-tour channel guidance).

## Conditions and limitations

- Thirteen prompts in [evals.json](../skills/gabo/evals/evals.json); full outputs under [docs/eval-outputs/baseline/](eval-outputs/baseline/) and [docs/eval-outputs/candidate/](eval-outputs/candidate/).
- Generation: three isolated subagent runs per version (hard constraints, underspecified channels, personality). No shared chat between those runs.
- Review: blind A/B review was attempted via a separate subagent; the run hit a model limit. Judgments below were written by the orchestrator from anonymized pairs (A/B order swapped per case). They are editorial opinions, not independent validation.
- One sample per case per version unless noted. No statistical significance. Gabo’s taste on warmth and distinctiveness may still differ from these notes.
- `03-linkedin-about.md` (candidate) was regenerated once after adding closer guidance to [channels.md](../skills/gabo/references/channels.md); label that file as a follow-up generation, not the first subagent draft.

## Retained finding from the first comparison (self-graded)

The first-pass self-graded comparison (in git history at `42bf11c`) showed revised samples often opening with human experience → agent access → operations in the same order. That pattern appeared again in baseline outputs for underspecified About and website intro. The second pass targeted that skill-level default, not factual guardrails.

## Blind-style review (representative cases)

### 1. Underspecified LinkedIn About

**Prompt:** Write my LinkedIn About.

**Version A (baseline)**

```text
I'm an Agentic Product Engineer. I care about software that helps people finish what they came to do, gives agents clear ways to use the product when that helps, and stays dependable enough to run every day.
…
If you're building something where human experience, agent access, and operational simplicity have to line up, I'd enjoy comparing notes.
```

**Version B (candidate, after channel closer guidance)**

```text
I am an Agentic Product Engineer. I care most about whether someone can finish what they came to do—whether the product earns that outcome in the details, not on a feature slide.
…
If you are building something where product judgment and iteration show up in the interface, I would like to hear what you are working on.
```

| | Notes |
| --- | --- |
| A strength | Concrete LegalAgent paragraph; Costa Rica line adds useful context. |
| A weakness | Opens and closes with the same three-part frame. |
| B strength | Single through-line (finish what they came to do); project proof without a pillar checklist. |
| B weakness | Drops location line (optional for About). |
| Factual issues | None observed. |
| **Preference** | **B** — same facts, less template repetition. |

### 2. Underspecified website intro

**Version A (baseline)** — explicit “not three separate checklists” still lists all three concerns in sentence one.

**Version B (candidate)** — leads with experience bands, then one LegalAgent example.

**Preference:** **B** — reads like a site intro, not a philosophy outline.

### 3. Alex reply

**Preference:** **Tie** — both answer the question with fixture facts, no `/cal` or W-2, proportionate length. B’s line on iteration vs isolated prompt tuning is slightly stronger; A’s admin-dashboard rationale is slightly more concrete.

### 4. Observation blog rewrite

**Version A (baseline):** shorter, preserves observation.

**Version B (candidate):** “slide deck” contrast adds voice without inventing story.

**Preference:** **B** — more distinctive, still faithful to supplied observation.

### 5. Opinion short post

**Version A (baseline):** two sentences, exact opinion.

**Version B (candidate):** adds “Meet people where they already work…”

**Preference:** **Tie** — A is tighter; B adds a reasonable implication without unsupported claims. Neither is clearly wrong.

### 6. Agent disagreement reply

Both versions preserve agreement, staged rollout, and reason. **Tie.**

### Hard constraints (no blind pair needed)

Pitch rewrite, technical architecture, punctuation-only, and verbatim approved copy: baseline and candidate both satisfy the eval expectations in manual check. No regression observed on LegalAgent component list or gap-flagging.

## What this establishes

- Underspecified channel prompts were the main place the pre-second-pass skill still produced **pillar tours**; instruction changes reduced that in About and intro samples.
- **Personality fixtures** (observation, opinion, disagreement) did not require new prohibitions; preserving supplied material as the point was sufficient when the default outline was removed.
- **Alex outreach** already behaved well under the first refactor when the brief did not ask for hiring language.
- This does **not** prove better conversion, consistent behavior across hosts, or that every future draft will avoid repetition under different models.

## Full outputs

See [eval-outputs/baseline/](eval-outputs/baseline/) and [eval-outputs/candidate/](eval-outputs/candidate/) for complete text of all thirteen cases.
