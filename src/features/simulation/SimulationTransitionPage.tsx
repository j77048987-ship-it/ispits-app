import { useTranslation } from "react-i18next";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";

interface SimulationTransitionPageProps {
  finishedSubjectLabel: string;
  nextSubjectLabel: string;
  nextTimeLimitSeconds: number;
  isRTL: boolean;
  onContinue: () => void;
}

export function SimulationTransitionPage({
  finishedSubjectLabel,
  nextSubjectLabel,
  nextTimeLimitSeconds,
  isRTL,
  onContinue
}: SimulationTransitionPageProps) {
  const { t } = useTranslation();
  const minutes = Math.round(nextTimeLimitSeconds / 60);

  return (
    <div className="space-y-4 text-center pt-8">
      <CheckCircle2 size={40} className="mx-auto text-emerald-500" />
      <div>
        <div className="font-display text-lg font-bold">{finishedSubjectLabel}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{t("practice.yourScore")} ✓</div>
      </div>
      <Card>
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("nav.simulation")}</div>
        <div className="font-display text-base font-bold">{nextSubjectLabel}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{minutes} min</div>
      </Card>
      <Button variant="secondary" onClick={onContinue}>
        {nextSubjectLabel}
        {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </Button>
    </div>
  );
}
