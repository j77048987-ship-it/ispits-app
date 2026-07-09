import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Question, Difficulty } from "../../core/entities/Question";
import { KNOWN_SUBJECTS } from "../../core/entities/Question";
import { Button } from "../../shared/components/Button";

const DIFFICULTIES: (Difficulty | "all")[] = ["all", "easy", "medium", "hard"];

interface PracticeSetupPageProps {
  allQuestions: Question[];
  onStart: (pool: Question[]) => void;
}

export function PracticeSetupPage({ allQuestions, onStart }: PracticeSetupPageProps) {
  const { t } = useTranslation();
  const [subject, setSubject] = useState(KNOWN_SUBJECTS[0]?.id ?? "svt");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const pool = useMemo(
    () => allQuestions.filter((q) => q.subject === subject && (difficulty === "all" || q.difficulty === difficulty)),
    [allQuestions, subject, difficulty]
  );

  return (
    <div className="space-y-5">
      <h2 className="font-display text-lg font-bold">{t("practice.chooseSubject")}</h2>

      <div className="grid grid-cols-2 gap-3">
        {KNOWN_SUBJECTS.map((s) => {
          const count = allQuestions.filter((q) => q.subject === s.id).length;
          const active = subject === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSubject(s.id)}
              className={`rounded-2xl border p-4 text-start ${
                active ? "border-teal-500 bg-teal-500/10" : "bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800"
              }`}
            >
              <div className="font-semibold text-sm">{t(s.labelKey)}</div>
              <div className="text-[11px] mt-1 text-slate-500 dark:text-slate-400">{count}</div>
            </button>
          );
        })}
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">{t("practice.difficulty")}</div>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                difficulty === d ? "bg-teal-600 text-white" : "bg-stone-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              {t(`common.${d}`)}
            </button>
          ))}
        </div>
      </div>

      <Button disabled={!pool.length} onClick={() => onStart(pool)}>
        {t("practice.startSession")} ({pool.length})
      </Button>
    </div>
  );
}
