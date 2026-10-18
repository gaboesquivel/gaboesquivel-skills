LegalAgent ships as a React Native Expo app with chat and voice paths. Text chat uses the Vercel AI SDK; voice runs on OpenAI's Realtime API with realtime transcription and speech synthesis. Tailwind covers the multimodal UI. RAG supplies case context, document summaries, and procedural guidance in Spanish and English.

Internal tooling is a TanStack Start admin dashboard. Microsoft SSO gates access; admins manage system prompts and document categorization that shapes RAG retrieval. After attorney sessions, feedback drove changes to persona and tool calling in the Expo client.

The source material does not specify reliability targets, degraded behavior for voice or chat, or authorization on the mobile client beyond the admin SSO story—I would treat those as open design questions rather than assume them.
