# Writing comparisons and validation

October 18, 2026. These are actual single-run samples from two separate evaluation agents: one received the original skill at commit `1044f5c3095903d3176ee44f8ecaf18fb5827e6f`, the other received the revised skill. Neither read the other's outputs or the research. Both received the same eight prompts, approved positioning fixture, and LegalAgent fixture, plus the identity available in their respective skill versions. The original skill also received the new brief, so the comparison does not attribute additional source material to better style.

Each agent generated and graded its own outputs in a shared context across cases. This is not a blind or statistically controlled benchmark, and the platform's higher-priority instructions also apply. The observations below are editorial judgments, not measured conversion, authenticity, or performance scores. Source fixtures are accepted as task facts, not independently reverified biography. No sample was published or substituted for approved website copy.

## Eight comparable samples

### 1. Personal website introduction

**Shared prompt:** Write a fresh personal website introduction for Gabo, up to 90 words, for founders and product leaders. Use the approved positioning as reference; do not replace or edit the approved copy.

**Before**

I'm Gabo Esquivel, an Agentic Product Engineer. I build software with attention to the people using it, the agents accessing it, and the team operating it. My work spans product, design, and architecture, with 15+ years shipping software and 12+ years building 0→1 products. At LegalAgent, I shipped voice and chat for attorneys and built the controls for managing prompts and retrieval.

**After**

I’m Gabo Esquivel, an Agentic Product Engineer. I help shape products around what people need to accomplish, how agents can participate, and what it takes to run the software well. Those decisions belong together: agent access should serve the same purpose as the human experience. At LegalAgent, I built voice and chat for attorneys alongside retrieval and administrative controls. I bring that product perspective to work across design, engineering, and architecture.

**Assessment:** The revised version explains why the product concerns belong together. The baseline already communicated all three and was shorter. This is an improvement in rationale, not a dramatic change in warmth.

### 2. Professional biography

**Shared prompt:** Write a third-person professional biography for Gabo, up to 110 words, for a product conference. Include one relevant verified project.

**Before**

Gabo Esquivel is an Agentic Product Engineer based in Costa Rica, with 15+ years building software and 12+ years leading 0→1 product work. He works across product, design, and architecture, with a focus on human experience, agent access, and operations. At LegalAgent, he shipped bilingual voice and chat in a React Native Expo app. He built retrieval for case context, document summaries, and procedural guidance, along with an admin dashboard for managing prompts and document categorization.

**After**

Gabo Esquivel is an Agentic Product Engineer with 15+ years building software and 12+ years leading 0→1 product work. He connects human experience, appropriate agent access, and efficient operations as responsibilities of the same product. At LegalAgent, he shipped a voice and chat assistant for attorneys in a React Native Expo app, with retrieval for case context, document summaries, and procedural guidance in Spanish and English. His approach combines technical depth with design sensibility and iteration informed by feedback.

**Assessment:** The revised biography closes on product judgment and feedback instead of administrative implementation. Both remain accurate and technical; a less technical conference could benefit from even less stack detail.

### 3. LinkedIn About

**Shared prompt:** Write a LinkedIn About section for Gabo in 140–200 words. Explain his product philosophy and relevant experience for founders and collaborators.

**Before**

I build useful and delightful software products. I'm an Agentic Product Engineer with 15+ years shipping software and 12+ years building 0→1 products for startups and growth-stage teams across FinTech, Web3, and AI.

I work across product, design, and architecture. I want the human experience, agent access, and operations to make sense together. That means thinking about what people need before choosing an implementation, then using feedback to decide what changes next. An API, CLI, or MCP server can be part of that design when it fits the product.

At LegalAgent, I shipped voice and chat in a React Native Expo app. Retrieval supplied case context, document summaries, and procedural guidance in Spanish and English. I adjusted persona and tool calling after attorney sessions, and built an admin dashboard for prompt management and document categorization.

I also led engineering for Wink, Costa Rica's first neobank, from architecture to launch. I'm based in Costa Rica and work with distributed teams across the Americas and globally.

**After**

I’m Gabo Esquivel, an Agentic Product Engineer. I work across product, design, and architecture, with 15+ years building software and 12+ years leading 0→1 product work for startups and growth-stage teams.

I think human experience, agent access, and operations belong in the same product conversation. People need software that helps them accomplish something worthwhile. Agents need clear access to appropriate capabilities. Teams need to understand and operate what they ship. A good decision in one area should support the others.

At LegalAgent, I built voice and chat for attorneys, with retrieval for case context, document summaries, and procedural guidance in Spanish and English. I also built administrative controls for prompts and document categorization. Attorney sessions informed changes to persona and tool calling in the app. My experience also includes leading engineering for Wink from architecture to launch.

I value ownership, design sensibility, and practical tradeoffs. For founders and collaborators, that means starting with the product’s purpose, choosing the capabilities it needs, and learning from real feedback as we build.

**Assessment:** Both meet the requested length because explicit instructions override defaults. The revised version gives the product viewpoint more space and connects it to collaboration. The baseline already expresses the philosophy reasonably well.

### 4. Product launch announcement

**Shared prompt:** Draft a retrospective product launch announcement about Gabo’s LegalAgent voice and chat work for a mixed product and engineering audience, up to 120 words. Do not invent a release date or availability.

**Before**

At LegalAgent, I shipped voice and chat so attorneys could access case context, documents, and procedural guidance in Spanish and English. The assistant ran in a React Native Expo app, with the Vercel AI SDK for chat and OpenAI's Realtime API for voice.

I built retrieval for case context and document summaries, along with an internal admin dashboard for managing system prompts and document categorization. Voice included realtime transcription and speech synthesis. After attorney sessions, I adjusted the persona and tool calling in the Expo client.

**After**

At LegalAgent, I shipped voice and chat for attorneys to access case context, document summaries, and procedural guidance in Spanish and English.

The assistant ran in a React Native Expo app, using the Vercel AI SDK for chat and OpenAI’s Realtime API for voice. Retrieval supplied the case and document context. I also built a TanStack Start admin dashboard with Microsoft SSO, prompt management, and document categorization.

Attorney sessions informed changes to persona and tool calling in the app. That feedback was part of the implementation, alongside the interface and the controls behind it.

**Assessment:** Both are factual retrospective recaps. The revised version makes feedback part of the product story, but still spends substantial space on implementation. Neither proves stronger launch appeal; no new availability was supplied.

### 5. Agentic product concept

**Shared prompt:** Explain Gabo’s idea of designing software for humans and agents to a nontechnical product leader, up to 160 words. Use one clearly hypothetical example; distinguish the design proposal from shipped work.

**Before**

I think about human experience, agent access, and operations as parts of the same product. Someone using a screen and an agent acting on their behalf both need a clear way to get work done.

Imagine a hypothetical appointment product. A person could choose a time on a calendar, while an agent could use a defined interface to request that same booking. The design would need to make available times and booking results clear to both. The team running it would also need a way to understand and resolve failed bookings.

That's a design proposal, not a product I'm claiming to have shipped. At LegalAgent, my shipped work included voice and chat for attorneys, retrieval for case context, and administrative controls for prompts and document categorization.

**After**

Gabo’s idea is to design one product with three connected responsibilities: help people do something useful, give agents appropriate ways to help, and make the whole thing practical to run.

Imagine a hypothetical appointment service. A person could see available times and choose one. An agent could check those same times and propose a booking, with confirmation required before committing it. The team would need to see failed requests and prevent duplicate bookings. The interface, agent permissions, and operational controls all support the same outcome.

That is a design proposal, not a description of something Gabo shipped. His LegalAgent work provides a concrete example of connecting an interface with supporting systems: voice and chat for attorneys, retrieval for case context, and administrative controls. The source does not establish that LegalAgent used the hypothetical booking permissions or reliability measures.

**Assessment:** Both use an understandable hypothetical appointment service. The revised version makes permission and duplicate-booking concerns concrete, but overexplains that the example was not shipped. This is a remaining editorial weakness, not a reason to add another universal rule.

### 6. Technical architecture explanation

**Shared prompt:** Explain the shipped LegalAgent architecture to a senior engineer, up to 220 words. Preserve the app, chat and voice technologies, retrieval responsibilities and languages, admin controls, and feedback loop. Flag any unspecified reliability or authorization details instead of inventing them.

**Before**

At LegalAgent, I shipped a multimodal assistant in a React Native Expo app. Chat used the Vercel AI SDK, voice used OpenAI's Realtime API, and I used Tailwind on the multimodal UI. The voice work included realtime transcription and speech synthesis.

RAG supplied case context, document summaries, and procedural guidance in Spanish and English. The supplied project record doesn't specify the retrieval store, indexing pipeline, or how retrieved context entered each chat or voice request.

I also built an internal admin dashboard with TanStack Start. It included Microsoft SSO, system prompt management, and document categorization for RAG retrieval. Microsoft SSO is the specified authentication integration; the record doesn't describe authorization rules or tenant and case isolation.

Attorney sessions informed changes to persona and tool calling in the Expo client. The record doesn't specify retry behavior, failure recovery, monitoring, or reliability guarantees.

**After**

LegalAgent’s client was a React Native Expo app with a Tailwind multimodal UI. Gabo implemented chat with the Vercel AI SDK and voice with OpenAI’s Realtime API, including bilingual voice, realtime transcription, and speech synthesis.

RAG supplied case context, document summaries, and procedural guidance in Spanish and English. An internal TanStack Start admin dashboard provided Microsoft SSO, system prompt management, and document categorization for retrieval. Attorney sessions fed back into changes to persona and tool calling in the Expo client.

The source identifies those components and responsibilities but does not specify the retrieval store, indexing pipeline, or deployment topology. It also leaves reliability mechanisms such as retries, failure recovery, and monitoring unspecified. Microsoft SSO is documented; authorization roles, case-level access rules, and tool-execution permissions are not. Those details would need confirmation before treating this as a complete architecture or security description.

**Assessment:** Both preserve the component boundaries and distinguish missing authorization/reliability details. The revised version keeps Tailwind and all required admin details. Technical credibility is maintained; no measured quality gain is claimed.

### 7. Short social post

**Shared prompt:** Write one short social post in Gabo’s voice about LegalAgent voice and chat, under 280 characters including this exact link: https://gaboesquivel.com/blog/2026-10-legal-agent

**Before**

I shipped voice and chat in LegalAgent's React Native Expo app, with case context, document summaries, and procedural guidance in Spanish and English.
https://gaboesquivel.com/blog/2026-10-legal-agent

**After**

At LegalAgent, I built voice and chat for attorneys to access case context, document summaries, and procedural guidance in Spanish and English. Attorney feedback shaped the assistant. https://gaboesquivel.com/blog/2026-10-legal-agent

**Assessment:** The revised post foregrounds attorneys and feedback; the original foregrounds the app. Both fit the limit and preserve the link. Audience relevance improves modestly without a manufactured result.

### 8. Professional outreach

**Shared prompt:** Write a professional outreach message to Alex, under 100 words, responding to their question about what Gabo works on and inviting an exchange of notes on agent-friendly products. This is a peer conversation, not a hiring pitch.

**Before**

Hey Alex, I work across product, design, and architecture, with a focus on software that works for people and agents. At LegalAgent, I shipped voice and chat for attorneys and built retrieval for case context and documents. I'm also thinking about how agent access fits alongside the human interface and day-to-day operations. I'd like to exchange notes on how you're approaching agent-friendly products.

**After**

Hi Alex — I work across product, design, and engineering, building software for people and agents. I’m interested in how agent access can serve the product’s purpose while keeping the experience intuitive and the operations manageable. At LegalAgent, that work included voice and chat for attorneys, retrieval for case context, and administrative controls. I’d be glad to exchange notes on what makes a product useful and accessible to agents. How are you thinking about that?

**Assessment:** Both respect the explicit peer-conversation brief. The revised question gives Alex an easier opening to respond. This demonstrates permission for a useful question, not evidence that the old skill always made outreach cold.

## Assessment across the requested qualities

| Quality | Observation |
| --- | --- |
| Clarity | Both versions are understandable. The revision more often explains the relationship among the product concerns. |
| Authenticity | Both use supported facts. The revision allows stated beliefs without manufacturing memories; only Gabo can ultimately judge whether the phrasing feels like him. |
| Product thinking | More explicit reasoning about human use, agent access, operations, and feedback in the revised introduction and About section. |
| Human connection | Modest improvement in the peer outreach invitation; no broad or measurable uplift established. |
| Technical credibility | Both retain the architecture and acknowledge missing implementation details. The required facts remain in the revised samples. |
| Confidence | The revision permits a stated viewpoint; neither version needs unsupported superlatives. |
| Distinctiveness | Comes from supported work and judgment. Repeating the three pillars across this test set can still feel formulaic; prompts deliberately emphasized them. |
| Conciseness | All eight sample limits pass in both versions. More words sometimes add useful rationale; the revised concept explanation also includes an unnecessary defensive ending. |
| Audience appropriateness | The clearest behavioral improvement is separate LinkedIn and X drafts. Technical and public modes now have explicit room to differ. |

## Behavioral test record

The original six evals passed all 38 original expectations. The revised 16 evals passed all 65 revised expectations in the evaluator's run. The suites differ: these counts cannot be compared as a gain in pass rate. Original factual checks remain, while lexical bans and rigid channel assumptions were intentionally changed. Exact prompts, fixture paths, and current assertions are in [evals.json](../skills/gabo/evals/evals.json); the original definitions remain available at the baseline commit.

| Case | Original result | Revised result | Relevant observation |
| --- | --- | --- | --- |
| 1. Pitch rewrite | 6/6 | 6/6 | Unsupported 60% claim removed; verified LegalAgent and Wink work retained. |
| 2. LinkedIn and X | 9/9 | 8/8 | Intentional change from one shared short draft to separate versions. |
| 3. Spoken line | 5/5 | 5/5 | Concrete voice details preserved in sayable prose. |
| 4. Hero and CTA | 7/7 | 6/6 | Verified capabilities and booking CTA retained. |
| 5. Humanize | 6/6 | 6/6 | Unsupported autobiography and false domain claims removed. |
| 6. Stacked technical paragraph | 5/5 | 5/5 | All specified technologies, retrieval responsibilities, languages, and feedback retained. |
| 7–14. Eight formats above | Shared sample constraints pass | 24/24 | Observed results and limits discussed above. |
| 15. Punctuation-only reflection | Not run | 3/3 | Qualifier, question, and user's reflection preserved. |
| 16. Approved website copy | Not run | 2/2 | Exact paragraphs returned without added commentary. |

The initial semantic review matched 24 of 25 trigger cases. The remaining query said “my usual voice” without identifying whose; the fixture was clarified to name Gabo. The evaluator rechecked that query after the edit: all 25 now match semantically. This is a fixture-context correction, not evidence of deployed automatic routing performance.

## Other checks

- `bun run validate`: **Catalog OK**, one skill, valid frontmatter, registration in sync.
- `npx skills@latest add . --skill gabo --list`: **gabo listed**. Registry access required a retry outside the network-restricted sandbox. This was a listing check, not an installation into consumer repos.
- Local relative reference links and every eval fixture path resolve.
- Approved title/philosophy and website paragraphs remain intact; the philosophy and paragraphs were checked for exact string preservation.
- Production entrypoint and references contain no local absolute paths, deleted tells reference, or external personality/company style reference.
- `git diff --check`: passed at review.
- Supplemental skill-creator Python validator could not start because its environment lacks PyYAML. The repository validator and direct structural checks above ran successfully; no Python dependency was added to this catalog.

## Additional output evidence

The following unchanged outputs preserve evidence for the six original cases and revised cases not already shown above. Job/input annotations in the original run are process notes, not the evaluated copy.

### Original six outputs

#### 1 — Pitch draft rewrite

Job: Preserve the draft's verified work while removing promotional and unsupported claims. Input: author draft rewrite.

At LegalAgent, I shipped a voice and chat assistant in a React Native Expo app. I built RAG for case context, document summaries, and procedural guidance. I also led engineering for Wink, Costa Rica's first neobank, from architecture to launch.

#### 2 — LinkedIn and X

Job: Share one verified fact from the supplied article. Input: article repurposing.

Hero image: `/images/2026/10/legal-agent.webp`

I added voice and chat to LegalAgent's React Native app so attorneys could access case context, documents, and procedures.
https://gaboesquivel.com/blog/2026-10-legal-agent

#### 3 — Spoken line

Job: Describe the shipped voice work aloud. Input: verified project facts.

I built LegalAgent's voice assistant with OpenAI's Realtime API in the React Native Expo app. I shipped bilingual voice with realtime transcription and speech synthesis, then adjusted the persona and tool calling after attorney sessions.

#### 4 — Hero and CTA

Job: Make the hero readable and give the reader a direct booking action. Input: existing hero rewrite.

I build the voice and chat people use in an AI product. I also build retrieval and the controls a team needs once the assistant is live. I draw the line between what the model decides and what stays in application logic.

[Book a call](/cal)

#### 5 — Humanize post

Job: Keep the verified attorney interaction and remove the draft's unsupported framing. Input: author draft rewrite.

LegalAgent's attorneys can access case context by voice or chat, in Spanish or English.

#### 6 — Break up stacked paragraph

Job: Split the sentence into spoken units while keeping its facts and order. Input: point edit.

At LegalAgent, I added a voice and chat assistant to their React Native Expo app for case context, documents, and procedures. I implemented the Vercel AI SDK for chat and OpenAI's Realtime API for voice, with Tailwind on the multimodal UI. RAG supplied case context, document summaries, and procedural guidance in Spanish and English. Attorney feedback changed persona and tool calling in that Expo client.


### Revised outputs 1–6, 15–16

#### Case 1

At LegalAgent, I shipped a voice and chat assistant in a React Native Expo app and built retrieval-augmented generation for case context, document summaries, and procedural guidance. My work also includes leading engineering for Wink, Costa Rica’s first neobank, from architecture to launch.

#### Case 2

LinkedIn

At LegalAgent, I added voice and chat to the React Native Expo app so attorneys could work with case context, document summaries, and procedural guidance in Spanish and English.

The work included the assistant and the controls behind it: an internal dashboard for system prompts and document categorization, with Microsoft SSO. Attorney feedback also changed the assistant’s persona and tool calling in the app.

I wrote about those pieces and how they fit together:
https://gaboesquivel.com/blog/2026-10-legal-agent

X

At LegalAgent, I added voice and chat for attorneys to access case context, document summaries, and procedural guidance in Spanish and English. Attorney feedback shaped persona and tool calling.
https://gaboesquivel.com/blog/2026-10-legal-agent

Hero image: /images/2026/10/legal-agent.webp

#### Case 3

At LegalAgent, I added voice to the React Native Expo app using OpenAI’s Realtime API. I shipped bilingual voice with realtime transcription and speech synthesis, and adjusted the assistant’s persona and tool calling after sessions with attorneys.

#### Case 4

AI products people can use and teams can run

I build voice and chat interfaces, retrieval for the context an assistant needs, and the controls a team needs once it’s live. I define what the model can decide and what belongs in application logic.

[Book a call](/cal)

#### Case 5

LegalAgent lets attorneys access case context by voice or chat, in Spanish or English. I built retrieval for case context, document summaries, and procedural guidance, and added the voice and chat assistant to the React Native Expo app. Feedback from attorney sessions shaped the assistant’s persona and tool calling.

#### Case 6

At LegalAgent, I added a voice and chat assistant to their React Native Expo app for case context, documents, and procedures. I used the Vercel AI SDK for chat and OpenAI’s Realtime API for voice, with Tailwind on the multimodal UI.

RAG supplied case context, document summaries, and procedural guidance in Spanish and English. Attorney feedback changed persona and tool calling in the Expo client.

#### Case 15

I often return to one question: how can this feel simpler for the person using it?

#### Case 16

I build useful and delightful software products, designed for humans and agents alike. I work across product, design, and architecture to create intuitive human experiences, agent-friendly interfaces, and efficient operational workflows.

15+ years of shipping software, including 12+ years building 0→1 products for startups and growth-stage teams across FinTech, Web3, and AI.
