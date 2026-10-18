Hero image: /images/2026/10/legal-agent.webp

## LinkedIn

Legal work runs on context—cases, documents, procedures—and most tools still make people hunt for it. On LegalAgent I shipped a voice and chat assistant inside their React Native app so attorneys can ask questions in flow instead of leaving the client.

The assistant uses the Vercel AI SDK for chat and OpenAI’s Realtime API for voice, with retrieval for case context, document summaries, and procedural guidance in Spanish and English. Persona and tool calling changed after feedback from attorney sessions, which is the part I care about: the model is only useful if it matches how people actually practice.

I also built an internal admin dashboard with TanStack Start—Microsoft SSO, system prompt management, and document categorization for retrieval—so the product team can tune what the assistant knows without redeploying the app.

More on the stack and tradeoffs: https://gaboesquivel.com/blog/2026-10-legal-agent

## X

Voice and chat for legal case work in Expo—RAG for context, bilingual guidance, persona tuned with attorneys after real sessions. https://gaboesquivel.com/blog/2026-10-legal-agent
