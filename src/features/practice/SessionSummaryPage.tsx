import { useTranslation } from "react-i18next";
import type { Attempt } from "../../core/entities/Attempt";
import { ProgressRing } from "../../shared/components/ProgressRing";
import { Button } from "../../shared/components/Button";
import { Card } from "../../shared/components/Card";

interface SessionSummaryPageProps {
  attempts: Attempt[];
  onRetry: () => void;
  onBackToDashboard: () => void;
}

export function SessionSummaryPage({ attempts, onRetry, onBackToDashboard }: SessionSummaryPageProps) {
  const { t } = useTranslation();
  const correct = attempts.filter((a) => a.isCorrect).length;
  const pct = attempts.length ? Math.round((correct / attempts.length) * 100) : 0;
  const hasMistakes = attempts.some((a) => !a.isCorrect);

  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <ProgressRing percent={pct} size={120} strokeWidth={10} colorClassName={pct >= 50 ? "text-emerald-500" : "text-rose-500"} />
      </div>
      <div>
        <div className="font-display text-2xl font-bold">
          {correct} <span className="text-base font-normal text-slate-500 dark:text-slate-400">{t("common.of")} {attempts.length}</span>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{t("practice.yourScore")}</div>
      </div>
      {hasMistakes && <Card soft className="text-xs">{t("practice.reviewMistakesCta")}</Card>}
      <div className="flex gap-2">
        <Button onClick={onRetry}>{t("common.retry")}</Button>
        <Button variant="outline" onClick={onBackToDashboard}>
          {t("nav.dashboard")}
        </Button>
      </div>
    </div>
  );
}
