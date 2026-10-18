LegalAgent runs as a React Native Expo app with two interaction modes. Text chat goes through the Vercel AI SDK; voice uses OpenAI's Realtime API with realtime transcription and speech synthesis. The multimodal UI is built with Tailwind. A RAG layer supplies case context, document summaries, and procedural guidance in Spanish and English.

Internal ops live in a TanStack Start admin dashboard. Microsoft SSO controls access; admins manage system prompts and document categorization that shapes RAG retrieval. After attorney sessions, feedback drove updates to persona and tool calling in the Expo client.

The source material does not spell out reliability targets, degradation behavior, or authorization for the mobile app beyond what the product team chose for admin—I would treat those as open questions rather than assume them.
