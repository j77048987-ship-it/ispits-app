# Official exam format: what's confirmed vs. assumed

The Official Simulation mode tries to match the real ISPITS written exam as closely as possible.
This file exists so every detail it's built on is traceable to a source and honestly labeled —
nothing here is invented and presented as fact. Format changes year to year for reasons entirely
outside this project's control (a new ministerial *note de service* can change any of it), so
**always re-verify against the current year's official announcement before a real sitting.**

## What multiple independent sources agree on (high confidence)

Corroborated across several independent education-news/orientation sites describing the
2025/2026 and 2026/2027 sessions (dreamjob.ma, orientation-chabab.com, neosvt.com,
orientationmaroc.net — cross-referenced, not a single source):

- The written exam (2nd stage, after file-based pre-selection) has **two papers**:
  1. A subject tied to the candidate's track — **SVT, Physique, Chimie, Mathématiques,
     Philosophie, or Sociologie** depending on filière/specialty — **1h30, coefficient 2**.
  2. **French — 1h, coefficient 1.**
- Each paper is scored **0–20**; **any paper below 5/20 is eliminatory**, regardless of the
  candidate's other results.
- After the written exam: a 3rd stage, an **entretien d'aptitude** (oral interview) — not
  simulated by this app (out of scope: an oral can't be meaningfully practiced as an MCQ app).
- Questions are described as generally being **QCM** (multiple-choice) in format.

`src/core/services/SimulationService.ts` (`EXAM_RULES`) implements exactly the four numeric facts
above (coefficients 2/1, /20 scale, 5/20 threshold) — these are the best-corroborated details and
the ones the grading math actually depends on.

## What's mentioned by only one source (lower confidence, used cautiously)

- One source (orientationmaroc.net) describes the French paper as involving **"une épreuve de
  traduction ou d'analyse"** (translation or text-analysis) rather than only grammar/vocabulary.
  This is reflected in the question bank by including a "Compréhension de texte" unit in
  `src/data/questions/francais.ts`, but is not treated as confirming an exact exercise format
  beyond that.
- Subject order (science paper before French) is implied by the order these sources describe the
  two papers in, not by an explicit "paper 1 / paper 2" official statement.

## What is genuinely unknown, and is *not* faked

No source found (and no copyrighted past-exam PDF was fetched or scraped to check — see
docs/DATA_MODEL.md for why) confirms:

- The exact number of questions per paper
- Exact page layout, question numbering style, or answer-sheet format
- The exact wording of official candidate instructions
- Whether any of the above has changed between exam years

Rather than inventing these to look convincingly "official," the app makes the minimum
assumptions needed for a usable simulation and labels them as such, both here and inside the app
(`simulation.introBody`, the Instructions screen):

| Detail | What the app does | Status |
|---|---|---|
| Question numbering | Continuous across both sections (Q1…Qn) | Reasonable convention, **not verified** |
| Answer format | Single-choice, 4 options, tap to mark, changeable until "next" | Standard QCM convention, **not verified against an ISPITS answer sheet specifically** |
| Instant feedback | **Off** during Official Simulation (matches how a real exam works: you don't learn the answer until results are published) | Follows logically from it being a real exam, not from a specific format document |
| Candidate instructions text | Generic, standard exam instructions (see `InstructionsPage`) | Written to be plausible and useful, explicitly **not claimed to be the official wording** |
| Number of questions per paper in Official mode | Uses every question currently in the bank for that paper | Will only become exam-realistic once the bank is much larger; see docs/ROADMAP.md |

## Practice Mode is deliberately not held to any of this

Per the original request's own distinction: Practice Mode is free-form (choose subject, lesson,
difficulty, count) and intentionally not constrained to the exam format. Only "Official
Simulation" tries to mirror the real thing.
