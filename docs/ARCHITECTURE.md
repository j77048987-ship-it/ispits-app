# Architecture

## Why a PWA + Capacitor, not a separate native app

The spec explicitly asks for both a PWA and an Android app, and separately asks that technical
decisions favor whatever is "most professional, fastest, safest, and most scalable." Maintaining
one TypeScript/React codebase that runs in the browser, installs as a PWA, and gets wrapped by
Capacitor for Android is what actually satisfies both requirements at once: one set of business
logic, one test suite, one place to fix bugs — instead of a parallel Kotlin app that would
duplicate (and inevitably drift from) the web app's scoring/review/analytics logic. Capacitor
gives native access (haptics, deep links, splash screen, notifications) when needed, without
forking the codebase.

## Layers (Clean Architecture)

```
core/            <- pure TypeScript, zero framework or IO imports
  entities/       Question, Attempt, Settings — plain data shapes
  repositories/    interfaces only (IQuestionRepository, IAttemptRepository, ISettingsRepository)
  services/        AnalyticsService, ReviewSchedulerService, SimulationService, BackupService,
                    AIExplanationService — pure logic, receive data, return data

infrastructure/  <- the only layer allowed to touch the outside world
  db/             Dexie schema + concrete repository implementations
  ai/             AIProvider interface, LocalProvider + OpenAI/Claude/Gemini providers, registry
  i18n/           react-i18next setup + locale JSON
  container.ts     composition root: the only file that imports concrete repository classes

features/        <- one folder per screen, imports core + infrastructure, never the other way
shared/          <- components/hooks/utils used by 2+ features
```

Dependencies only point inward: `features` depends on `core` and `infrastructure`; `core` depends
on nothing else in the app. Swapping Dexie for another storage engine, or adding a native SQLite
plugin, means rewriting `infrastructure/db/` and `container.ts` — no feature code changes.

## Design patterns used (per the spec's list) and where

| Pattern | Where | Why |
|---|---|---|
| Repository | `core/repositories/*` + `infrastructure/db/*` | features never see Dexie directly |
| Dependency Injection | `infrastructure/container.ts` | one composition root, swappable implementations |
| Strategy | `infrastructure/ai/AIProvider.ts` + providers | every AI backend is interchangeable |
| Factory | `infrastructure/ai/registry.ts` (`resolveProvider`) | turns settings into a live provider |
| Observer-ish | Dexie's `useLiveQuery` (`shared/hooks/useLive*`) | UI reacts to DB changes automatically |
| Composition over inheritance | `shared/components/QuestionSessionRunner` | one runner powers practice/simulation/review |

SOLID/DRY/KISS in practice: the three modes (practice, simulation, review) share one
`QuestionSessionRunner` instead of three near-duplicate screens; `AnalyticsService` and
`SimulationService` are pure functions of `Attempt[]` so there is exactly one source of truth
(the attempts table) and no counter can ever drift out of sync with it.

## Offline-first strategy

Every read/write goes through Dexie (IndexedDB) — see `infrastructure/db/database.ts`. There is no
network call anywhere in the core data path. `vite-plugin-pwa` precaches the app shell with a
service worker so the installed app opens with zero connectivity. The **only** features that ever
touch the network are opt-in: a remote AI provider (Settings → AI provider) and the
placeholder `cloudSyncEnabled` flag in `AppSettings` for a future optional sync layer. Both are off
by default (`local` provider, sync disabled), and both fail silently back to fully-local behavior
— see `AIExplanationService` for the fallback implementation of the spec's "never show an error,
never stop working offline" requirement.

## AI layer

`AIProvider` (Strategy) defines one interface; `LocalProvider` (always available, zero network) is
the default; `OpenAIProvider`/`ClaudeProvider`/`GeminiProvider` are bring-your-own-API-key
implementations of the same interface. `AIExplanationService.explain()` is the single place that
tries the configured provider with a timeout and falls back to `LocalProvider` on **any** failure
— offline, missing key, provider outage, timeout, whatever. Adding DeepSeek/Grok/Mistral/Ollama
later is one new file implementing `AIProvider` plus one line in `registry.ts`.

Note the spec's own list of AI providers assumes a bring-your-own-key model for a shipped app:
there is no server component here to hold a shared API key safely, so remote AI explanations only
work once the user pastes their own key into Settings. This is disclosed in-app
(`settings.apiKeyHelp`).

## Validation performed (and not performed) in this sandbox {#validation-performed}

This project was written in a sandbox with **no package-registry access** (`npm install` fails —
verified, not assumed). That means the following were **not** run: `npm install`, `npm run build`,
`npm run dev`, `npm run lint`, `npm run test` via the real `vitest` binary, or anything requiring
Android Studio/Gradle. Treat those as the first thing to run locally.

What **was** actually verified, offline, before this was handed to you:

- Every `.ts`/`.tsx` file individually passed an esbuild syntax/transform check.
- The entire local import graph (every relative import across the whole `src/` tree, starting
  from `main.tsx`) was bundle-checked with esbuild — every relative path resolves and every named
  import matches a real export. Only third-party packages were treated as external/unchecked.
- `AnalyticsService`, `ReviewSchedulerService`, and `SimulationService` — the app's actual scoring,
  streak, and review-queue logic — were imported and exercised directly (no mocking needed, since
  they're pure functions) with the same assertions now committed as `tests/unit/*.test.ts`. All
  passed, including the exam-grading math (2:1 coefficients, 5/20 eliminatory threshold).
- The 32-question seed bank passed a structural check (unique ids, 4 options each, every
  non-correct option has an explanation) via `scripts/validate-questions.ts`.
- The three locale files (`ar.json`/`fr.json`/`en.json`) were checked to have identical key sets.
- A companion single-file React prototype covering the same core flows (see the artifact shared
  alongside this project) was rendered server-side for every screen/state combination as a smoke
  test, and one real bug it caught (a stale-closure timer bug affecting timed sessions) was fixed
  in both the prototype and mirrored here in `QuestionSessionRunner`.

What this does **not** replace: real browser/device testing, an actual `npm run build`, a real
`vitest` run, accessibility auditing with a screen reader, or a security review. Do all of those
before shipping.
