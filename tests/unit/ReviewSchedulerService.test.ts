import { describe, it, expect } from "vitest";
import { ReviewSchedulerService } from "../../src/core/services/ReviewSchedulerService";
import type { Question } from "../../src/core/entities/Question";
import type { Attempt } from "../../src/core/entities/Attempt";

const scheduler = new ReviewSchedulerService();

function question(id: string): Question {
  return {
    id,
    subject: "svt",
    unit: "Test",
    lesson: "Test",
    type: "qcm",
    difficulty: "medium",
    text: `Question ${id}`,
    options: [{ id: "a", text: "A" }, { id: "b", text: "B" }],
    correctOptionId: "a",
    correctExplanation: "Because A.",
    wrongExplanations: { b: "B is wrong." },
    keywords: [],
    suggestedTimeSeconds: 30,
    estimatedFrequency: "unknown",
    references: [],
    sourceType: "original"
  };
}

function attempt(questionId: string, isCorrect: boolean, timestamp: string): Attempt {
  return {
    id: `${questionId}-${timestamp}`,
    questionId,
    subject: "svt",
    sessionId: "s1",
    mode: "practice",
    selectedOptionId: isCorrect ? "a" : "b",
    isCorrect,
    timeSpentSeconds: 20,
    timestamp
  };
}

describe("ReviewSchedulerService.buildQueue", () => {
  it("drops a question once its most recent attempt was correct", () => {
    const q1 = question("q1");
    const attempts = [attempt("q1", false, "2026-01-01T00:00:00Z"), attempt("q1", true, "2026-01-02T00:00:00Z")];
    expect(scheduler.buildQueue([q1], attempts)).toHaveLength(0);
  });

  it("ignores questions that were never attempted", () => {
    expect(scheduler.buildQueue([question("q1")], [])).toHaveLength(0);
  });

  it("keeps currently-missed questions, ordered by miss streak (worst first)", () => {
    const q1 = question("q1");
    const q2 = question("q2");
    const q3 = question("q3");
    const attempts = [
      attempt("q1", false, "2026-01-01T00:00:00Z"), // missStreak 1
      attempt("q2", false, "2026-01-01T00:00:00Z"),
      attempt("q2", false, "2026-01-02T00:00:00Z"), // missStreak 2
      attempt("q3", true, "2026-01-01T00:00:00Z") // mastered, excluded
    ];
    const queue = scheduler.buildQueue([q1, q2, q3], attempts);
    expect(queue.map((e) => e.question.id)).toEqual(["q2", "q1"]);
    expect(queue[0]!.missStreak).toBe(2);
    expect(queue[1]!.missStreak).toBe(1);
  });
});
