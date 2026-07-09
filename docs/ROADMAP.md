# Roadmap: what's done, what's next

This file exists so nothing here is ever mistaken for more finished than it is. It maps directly
onto the original request's checklist.

## Done in this v1 foundation

- [x] Clean Architecture skeleton (entities / repository interfaces / services / infrastructure / features)
- [x] Offline-first storage (Dexie/IndexedDB), PWA manifest + service worker precaching
- [x] i18n: Arabic (RTL), French, English — full UI string coverage, matching key sets verified (69 keys × 3 languages)
- [x] Dark/light mode
- [x] Dashboard: totals, accuracy, streak, per-subject mastery rings, progress chart
- [x] Practice mode: subject + difficulty filters, instant feedback + explanations (by design — see docs/EXAM_FORMAT.md for why Practice and Official Simulation deliberately behave differently)
- [x] **Official Simulation mode**, rebuilt for realism: candidate-instructions screen, two
      sections run and timed independently in sequence (science subject, then French) with a
      transition screen between them, continuous question numbering across both sections, **no
      instant right/wrong feedback during the exam** (matches how a real exam actually works —
      you only see your result at the end), free to change an answer before moving on. Every
      assumption behind this is written down with its source in docs/EXAM_FORMAT.md.
- [x] Smart Review mode: Leitner-style queue of currently-missed questions
- [x] Settings: language, theme, AI provider + API key, backup export/import, data reset
- [x] PDF export of a simulation report (jsPDF, fully client-side)
- [x] AI layer: local-first with silent fallback, OpenAI/Claude/Gemini strategy implementations
- [x] **132-question seed bank (66 SVT + 66 Français)**, full metadata schema, structurally
      validated, zero duplicate question text, spread across 5 SVT units and 5 French units —
      growing toward 500+500 in tracked batches (see below)
- [x] Unit tests for the scoring/streak/review logic (see docs/ARCHITECTURE.md#validation-performed)
- [x] Capacitor Android wrapper configuration + build documentation

## Question bank progress toward 500 SVT + 500 Français

| Batch | SVT | Français | Running total | Notes |
|---|---|---|---|---|
| 1 (v1 foundation) | 16 | 16 | 32 | Génétique, Immunologie, Neurophysiologie, Reproduction, Géologie / Grammaire, Conjugaison, Vocabulaire, Connecteurs, Compréhension |
| 2 | +50 | +50 | 132 | Deepened all 5 units each side; zero duplicate question text; full explanation coverage |
| 3+ | — | — | — | Next batches: continue in the same 50–100/side increments requested, same units, going deeper into sub-lessons before adding new units |

Every batch keeps the same non-negotiables: original content only (`sourceType: "original"`),
every wrong option explained, `scripts/validate-questions.ts` passing, no duplicate question
text, and a real subject-matter teacher review recommended before this is relied on for actual
exam prep (see "content-review note" below — still true at 132 questions, and will stay true at
1000).

## Deliberately not done yet, and why

- [ ] **The remaining ~868 questions to reach 500+500.** Continuing in tracked batches per the
      table above, not generated all at once, to keep every question individually reasoned
      through rather than templated filler.
- [ ] **A bulk-scraped past-exam archive** (ISPITS.net/Moutamadris indexes, PDF Drive, Internet
      Archive, Facebook groups, Instagram, TikTok, etc.). See docs/DATA_MODEL.md for the
      copyright and feasibility reasons this wasn't automated, and the responsible alternative.
- [ ] **A compiled, signed APK/AAB and a live Play Store listing.** This sandbox has no Android
      SDK/Studio, and `npx cap add android` needs network access this sandbox doesn't have —
      confirmed by testing it directly (see docs/ANDROID_BUILD.md), not assumed. Every *web-side*
      file Capacitor's CLI reads (`capacitor.config.ts`, `package.json`, icons) is ready; the
      `android/` folder itself is intentionally not hand-fabricated — see
      docs/ANDROID_BUILD.md for why that specific choice was made instead of faking it.
- [ ] **`npm install` / a real build / a real test run.** Same root cause: no package-registry
      access in this sandbox — verified by testing it directly. Every file was validated as far
      as possible without installing dependencies (see docs/ARCHITECTURE.md#validation-performed);
      run the real toolchain yourself as the first step.
- [ ] **Full WCAG audit, full security audit, physical low-end-device performance testing,
      end-to-end/integration test coverage beyond the unit-tested services.** All realistic
      next steps, none of them meaningfully checkable without real browsers/devices/tooling.
- [ ] **Hardware back-button handling on Android** during an active timed session (the
      `@capacitor/app` dependency is already included for this — wire up its `backButton` listener
      to show a confirm dialog instead of silently leaving mid-simulation).
- [ ] **A designer-made app icon/splash screen.** `public/icons/` has a simple generated
      placeholder (teal + graduation cap) so the manifest/Android build aren't blocked, not a
      final brand asset.
- [ ] **Verifying the exact number of questions per real exam paper, page layout, and official
      candidate-instructions wording.** No source found confirms these; docs/EXAM_FORMAT.md
      documents exactly what's assumed instead and why, per instruction not to present
      unconfirmed details as fact.

## An important content-review note

Every question in the seed bank is **original** — written from the official curriculum topics,
not copied or paraphrased from any real exam. That's the right call for copyright reasons, but it
also means none of it has been checked against the real exam by someone who has actually seen real
ISPITS papers. Before treating this as authoritative prep material: have a qualified SVT/French
teacher familiar with the actual concours review the question bank for accuracy, difficulty
calibration, and fit with the real exam's style.
