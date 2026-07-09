import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Award } from "lucide-react";
import type { Question } from "../../core/entities/Question";
import type { Attempt } from "../../core/entities/Attempt";
import { ReviewSchedulerService } from "../../core/services/ReviewSchedulerService";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";

const scheduler = new ReviewSchedulerService();

interface ReviewPageProps {
  allQuestions: Question[];
  attempts: Attempt[];
  onStart: (pool: Question[]) => void;
}

export function ReviewPage({ allQuestions, attempts, onStart }: ReviewPageProps) {
  const { t } = useTranslation();
  const queue = useMemo(() => scheduler.buildQueue(allQuestions, attempts), [allQuestions, attempts]);

  if (!queue.length) {
    return (
      <Card className="p-8 text-center">
        <Award size={28} className="mx-auto text-amber-500 mb-2" />
        <div className="text-sm font-medium">{t("review.empty")}</div>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-bold">{t("review.title")}</h2>
      {queue.slice(0, 5).map((entry) => (
        <Card key={entry.question.id} soft className="flex items-center justify-between">
          <div className="text-sm">{entry.question.text.slice(0, 60)}{entry.question.text.length > 60 ? "…" : ""}</div>
          <span className="text-[11px] text-rose-500 shrink-0 ms-2">{t("review.missStreak", { count: entry.missStreak })}</span>
        </Card>
      ))}
      <Button onClick={() => onStart(queue.map((e) => e.question))}>
        {t("common.start")} ({queue.length})
      </Button>
    </div>
  );
}
