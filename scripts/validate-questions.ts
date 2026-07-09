import { ALL_SEED_QUESTIONS } from "../src/data/questions/index";

/**
 * Structural validation only (unique ids, options consistent, every wrong option explained).
 * It cannot and does not check factual/scientific/grammatical accuracy — that still needs a
 * qualified SVT/French teacher's review before this content is relied on for real exam prep,
 * per docs/ROADMAP.md.
 */
function validate(): string[] {
  const errors: string[] = [];
  const seenIds = new Set<string>();

  for (const q of ALL_SEED_QUESTIONS) {
    const tag = `[${q.id}]`;

    if (seenIds.has(q.id)) errors.push(`${tag} duplicate id`);
    seenIds.add(q.id);

    if (q.options.length !== 4) errors.push(`${tag} expected 4 options, got ${q.options.length}`);

    const optionIds = new Set(q.options.map((o) => o.id));
    if (optionIds.size !== q.options.length) errors.push(`${tag} duplicate option ids`);
    if (!optionIds.has(q.correctOptionId)) errors.push(`${tag} correctOptionId not among option ids`);

    for (const opt of q.options) {
      if (opt.id === q.correctOptionId) continue;
      if (!q.wrongExplanations[opt.id]) errors.push(`${tag} missing wrongExplanations for option "${opt.id}"`);
    }

    if (q.text.trim().length < 10) errors.push(`${tag} suspiciously short question text`);
    if (q.correctExplanation.trim().length < 10) errors.push(`${tag} suspiciously short explanation`);
    if (q.suggestedTimeSeconds <= 0) errors.push(`${tag} suggestedTimeSeconds must be positive`);
    if (q.sourceType !== "verified-past-exam" && q.verifiedYear) {
      errors.push(`${tag} has verifiedYear set but sourceType is not "verified-past-exam"`);
    }
  }

  return errors;
}

const errors = validate();
const bySubject = ALL_SEED_QUESTIONS.reduce<Record<string, number>>((acc, q) => {
  acc[q.subject] = (acc[q.subject] ?? 0) + 1;
  return acc;
}, {});

console.log(`Checked ${ALL_SEED_QUESTIONS.length} questions:`, bySubject);
if (errors.length) {
  console.error(`\n${errors.length} issue(s) found:\n` + errors.join("\n"));
  process.exit(1);
}
console.log("All question records are structurally valid.");
