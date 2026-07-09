# Data model

## Question

See `src/core/entities/Question.ts` for the authoritative type. Field notes beyond the obvious:

| Field | Notes |
|---|---|
| `subject` | Plain string, not a union — adding a new subject (e.g. `"physique-chimie"`) needs zero schema/DB changes. `KNOWN_SUBJECTS` only drives UI ordering. |
| `wrongExplanations` | Required for **every** non-correct option — enforced by `scripts/validate-questions.ts`, matching the spec's "تفسير خطأ جميع الاختيارات الأخرى" requirement. |
| `estimatedFrequency` | `"unknown"` for every seed question. This is deliberate: without a real corpus of authenticated past exams to statistically analyze, claiming a frequency estimate would be fabricating a statistic. Only set this once it's backed by an actual analysis of real papers. |
| `sourceType` | `"original"` for the entire seed bank. `"verified-past-exam"` is reserved for content someone has actually cross-checked against a real exam paper (with `verifiedYear` set); `scripts/validate-questions.ts` errors if `verifiedYear` is set without that source type. |
| `references` | Human-readable grounding notes (e.g. curriculum unit), not citations of specific exam papers, since none of the seed content is copied from one. |

## Attempt

One row per answered question (`src/core/entities/Attempt.ts`). Deliberately append-only and
never aggregated into separate mutable counters — every statistic in the app (`AnalyticsService`,
`ReviewSchedulerService`) is a pure function computed from the full `Attempt[]` history, so a
number on screen can never drift out of sync with the underlying data.

## Where the exam-format facts came from

`SimulationService.EXAM_RULES` (coefficient 2 for the science subject, coefficient 1 for French,
scored out of 20, below 5/20 is eliminatory) and the two-section timed structure it models are
based on the published selection-process description for the ISPITS concours (écrit + entretien,
with the written exam split into the candidate's science subject and French) as summarized by
multiple independent education-news sources reporting on the Ministry of Health's concours
announcement, cross-referenced with the historical exam index sites named in the original
brief (ISPITS.net, Moutamadris). **This was not re-derived from an official ISPITS/ministry PDF
fetched and parsed in this session** — treat it as a well-sourced secondary summary, not a primary
source, and confirm against the current year's official *note de service* before relying on exact
numbers for a real sitting, since concours details can change year to year.

## Why there's no bulk-imported real past-exam archive

The original brief asked for scraping/collecting past exam PDFs from many sources (exam index
sites, forums, social media, PDF-sharing sites) and building a bank from them. That was
deliberately not done here, for two independent reasons:

1. **Copyright/appropriateness.** Past exam papers are typically someone's copyrighted material;
   reproducing them (even via "inspired-by" paraphrase that mirrors their specific facts/structure
   closely) isn't something to automate at scale. Sites primarily known for hosting unauthorized
   copies of copyrighted documents were not used as sources at all.
2. **Feasibility.** Many of the "additional sources" listed (Facebook groups, Instagram, TikTok,
   private forum threads) aren't reachable through web search/fetch tooling in the first place,
   and scraping them isn't something to do even where technically possible.

The responsible path to a much larger, exam-realistic bank: collect real past papers you have the
right to use (e.g. ones a teacher/institution shares directly), have a subject-matter teacher
identify the recurring topics/style, and use that analysis to brief either a human writer or an AI
drafting pass — always landing on **original** questions plus an honestly-labeled
`estimatedFrequency`, reviewed by someone qualified before students rely on it. See ROADMAP.md.
