import { useTranslation } from "react-i18next";
import { Timer } from "lucide-react";
import type { SimulationPlan } from "../../core/services/SimulationService";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";

interface SimulationIntroPageProps {
  plan: SimulationPlan;
  onStart: () => void;
}

function formatMinutes(totalSeconds: number): string {
  return `${Math.round(totalSeconds / 60)} min`;
}

export function SimulationIntroPage({ plan, onStart }: SimulationIntroPageProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Timer size={18} className="text-amber-500" />
          <h2 className="font-display text-lg font-bold">{t("simulation.introTitle")}</h2>
        </div>
        <p className="text-sm leading-relaxed">{t("simulation.introBody")}</p>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {plan.sections.map((section) => (
          <Card key={section.subject}>
            <div className="font-semibold text-sm">{t(`subject.${section.subject}`, section.subject)}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {section.questions.length} · {formatMinutes(section.timeLimitSeconds)}
            </div>
          </Card>
        ))}
      </div>

      <Button variant="secondary" onClick={onStart}>
        {t("simulation.startSimulation")}
      </Button>
    </div>
  );
}
