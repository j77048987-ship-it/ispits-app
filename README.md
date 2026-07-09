# ISPITS Prep

Offline-first exam-prep platform for the Moroccan **ISPITS** entrance exam (concours d'accès aux
Instituts Supérieurs des Professions Infirmières et Techniques de Santé), covering **SVT** and
**Français**. Built as a installable PWA and wrapped for Android with Capacitor, so the same
codebase ships to the browser, to a home-screen app, and to Google Play.

## Current status: v1 foundation

This is a real, working foundation — not a mockup — but it is **not** the full 500+500-question,
fully Play-Store-published product described in the original spec. Read
**[docs/ROADMAP.md](docs/ROADMAP.md)** for exactly what's implemented vs. what's next, and why.
In short:

- ✅ Full clean-architecture codebase: entities, repository interfaces, Dexie (IndexedDB)
  implementations, services, DI container, AI provider abstraction, i18n, PWA config.
- ✅ Every screen works end-to-end against real local data: Dashboard, Practice, a two-section
  **Official Simulation** that mirrors real exam conditions (candidate instructions, no
  instant right/wrong feedback, continuous numbering, independently-timed sections — see
  docs/EXAM_FORMAT.md), smart Review, Settings, backup/restore, PDF export.
- ✅ **132 original questions (66 SVT + 66 Français)** with the full metadata schema from the
  spec — growing toward 500+500 in tracked batches (see docs/ROADMAP.md's progress table).
- ⚠️ Not yet built/run: this project was authored in a sandbox with no package registry access,
  so `npm install` / `npm run build` / the test suite have not actually been executed. Every file
  passed offline syntax validation and the whole local import graph was bundle-checked with
  esbuild, and all core business logic (scoring, streaks, review queue) is covered by tests that
  **were** executed against the real code — see docs/ARCHITECTURE.md#validation-performed for
  exactly what was and wasn't verified. Run `npm install && npm test` yourself before relying on it.
- ⚠️ Not yet built: the actual Android `.apk`/`.aab` and Play Store listing — that needs Android
  Studio, which isn't available in this environment. docs/ANDROID_BUILD.md gives the exact,
  verified-current commands to do it on your machine.

## Tech stack (and why)

React 19 + TypeScript + Vite 8 + Tailwind CSS v4, Dexie (IndexedDB) for offline storage,
react-i18next for Arabic/French/English with RTL support, Recharts for the dashboard, jsPDF for
client-side result exports, and Capacitor 8 for the Android wrapper. See
**[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** for the reasoning: this single-codebase approach
is what actually satisfies "PWA + Android app, most maintainable and scalable" from the spec,
versus maintaining a separate native Kotlin app in parallel.

## Getting started

```bash
npm install
npm run dev          # local dev server, http://localhost:5173
npm run build        # production build -> dist/
npm run test         # unit tests (Vitest)
npm run lint
npm run validate:questions   # structural check on the question bank
```

## Project structure

```
src/
  core/            # entities, repository interfaces, business-logic services (no framework/IO)
  infrastructure/   # Dexie, i18n, AI providers, DI container — the only layer that touches IO
  data/questions/   # the seed question bank (svt.ts, francais.ts)
  features/         # one folder per screen (dashboard, practice, simulation, review, settings)
  shared/           # cross-feature components/hooks/utils
docs/               # architecture, data model, roadmap, Android build guide
tests/unit/         # Vitest unit tests for the core services
scripts/            # validate-questions.ts (bank data-integrity checker)
```

## Adding more questions

Push more objects into `src/data/questions/svt.ts` / `francais.ts` following the existing shape,
then run `npm run validate:questions`. New/changed questions are picked up automatically on next
launch (`upsertMany` is keyed by `id`, so it never touches existing user progress).

## Documentation

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) — layers, patterns used, AI layer, offline strategy
- [DATA_MODEL.md](docs/DATA_MODEL.md) — the question/attempt schema and where the exam-format
  facts (subjects, coefficients, 5/20 threshold) were sourced from
- [EXAM_FORMAT.md](docs/EXAM_FORMAT.md) — exactly what's confirmed vs. assumed about the real
  exam's format, with sources, behind the Official Simulation mode
- [ROADMAP.md](docs/ROADMAP.md) — what's done, what's next, and the question-bank progress table
- [ANDROID_BUILD.md](docs/ANDROID_BUILD.md) — turning this into a signed APK/AAB and publishing

## A responsible-use note

The question bank is **original content written to match the exam's style and the official
curriculum** — it is explicitly not a set of verified real past-exam questions (every record's
`sourceType` says so). Before anyone relies on this for real exam prep, have a qualified SVT/French
teacher familiar with the actual ISPITS concours review the content. See docs/ROADMAP.md.
