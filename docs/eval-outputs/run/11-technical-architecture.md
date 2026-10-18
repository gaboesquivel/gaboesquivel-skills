LegalAgent is a React Native Expo app with a multimodal assistant: text chat and voice in one client. Chat runs on the Vercel AI SDK; voice uses OpenAI's Realtime API with realtime transcription and speech synthesis. The UI uses Tailwind on the Expo side.

RAG backs case context, document summaries, and procedural guidance in Spanish and English. Retrieval quality depends on how documents are categorized upstream.

An internal admin dashboard (TanStack Start) handles Microsoft SSO, system prompt management, and document categorization for RAG. The source does not specify authorization beyond SSO for the dashboard, session handling for attorneys in the mobile app, or production reliability targets (retries, fallbacks, observability).

After attorney sessions, persona and tool calling in the Expo client were adjusted from their feedback—a direct loop from usage back into client behavior.
