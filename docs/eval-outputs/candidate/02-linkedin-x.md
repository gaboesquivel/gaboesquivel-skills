Hero image: /images/2026/10/legal-agent.webp

## LinkedIn

Attorneys do not need another chat window—they need case context, document summaries, and procedural guidance while they are already in the workflow. On LegalAgent I added voice and chat to their React Native Expo app so those answers stay in the client instead of becoming a separate research task.

Chat runs through the Vercel AI SDK; voice uses OpenAI’s Realtime API, with Tailwind on the multimodal UI. Retrieval covers case context, documents, and procedures in Spanish and English. The meaningful iteration was attorney feedback on persona and tool calling in the Expo client—the assistant had to match how people practice, not how a demo script reads.

Behind the app I built an internal admin dashboard with TanStack Start: Microsoft SSO, system prompt management, and document categorization for retrieval, so the team can tune knowledge without redeploying mobile.

Write-up: https://gaboesquivel.com/blog/2026-10-legal-agent

## X

LegalAgent: voice + chat in Expo, RAG for case/docs/procedures in ES & EN, persona and tools tuned after attorney sessions. https://gaboesquivel.com/blog/2026-10-legal-agent
