import { useTranslation } from "react-i18next";
import { ClipboardList, Info } from "lucide-react";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";

interface SimulationInstructionsPageProps {
  onConfirm: () => void;
}

export function SimulationInstructionsPage({ onConfirm }: SimulationInstructionsPageProps) {
  const { t } = useTranslation();
  const items = t("simulation.instructionsList", { returnObjects: true }) as string[];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <ClipboardList size={18} className="text-teal-500" />
        <h2 className="font-display text-lg font-bold">{t("simulation.instructionsTitle")}</h2>
      </div>

      <Card>
        <ol className="space-y-2.5 text-sm leading-relaxed list-decimal ps-4">
          {items.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ol>
      </Card>

      <div className="rounded-xl p-3 bg-amber-500/10 border border-amber-500/30 flex gap-2 text-xs text-amber-600 dark:text-amber-400">
        <Info size={15} className="shrink-0 mt-0.5" />
        <span>{t("simulation.instructionsDisclaimer")}</span>
      </div>

      <Button variant="secondary" onClick={onConfirm}>
        {t("simulation.instructionsConfirm")}
      </Button>
    </div>
  );
}
