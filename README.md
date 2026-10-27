# LinguaFlow (React + TypeScript + Vite + Dexie)
```
npm install
npm run dev      # development
npm test         # unit tests (Vitest)
npm run build    # tsc + production build -> dist/
```
- Data: IndexedDB (Dexie), fully offline. Export/import JSON in Settings.
- Translate button (fr/en fields): `src/lib/translate.ts`, MyMemory public API (no key, ~500 chars/request, daily quota).
  The result is only a suggestion: it is not saved until you press Save, and is tagged "machine/unverified".
  Mozabite is never machine-translated. For heavy use, put your own provider behind a serverless function (never ship API keys in the frontend).
- PWA: `public/manifest.webmanifest` + `public/sw.js` (registered in production builds). Serve over HTTPS (Netlify/Vercel/GitHub Pages).
- Phase status: foundation, vocabulary, search/filter, backup, translate = done. Quiz, SM-2, stats, achievements, reminders = next.
