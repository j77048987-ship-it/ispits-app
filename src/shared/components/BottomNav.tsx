import { useTranslation } from "react-i18next";
import { LayoutDashboard, BookOpen, Timer, RotateCcw, Settings as SettingsIcon } from "lucide-react";
import type { ComponentType } from "react";

export type NavKey = "dashboard" | "practice" | "simulation" | "review" | "settings";

interface BottomNavProps {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
  isRTL: boolean;
}

const ITEMS: { key: NavKey; icon: ComponentType<{ size?: number; className?: string }>; labelKey: string }[] = [
  { key: "dashboard", icon: LayoutDashboard, labelKey: "nav.dashboard" },
  { key: "practice", icon: BookOpen, labelKey: "nav.practice" },
  { key: "simulation", icon: Timer, labelKey: "nav.simulation" },
  { key: "review", icon: RotateCcw, labelKey: "nav.review" },
  { key: "settings", icon: SettingsIcon, labelKey: "nav.settings" }
];

export function BottomNav({ active, onNavigate, isRTL }: BottomNavProps) {
  const { t } = useTranslation();
  const items = isRTL ? [...ITEMS].reverse() : ITEMS;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 border-t border-stone-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
      <div className="max-w-md mx-auto grid grid-cols-5">
        {items.map(({ key, icon: Icon, labelKey }) => {
          const isActive = active === key;
          return (
            <button key={key} onClick={() => onNavigate(key)} className="flex flex-col items-center gap-0.5 py-2.5">
              <Icon size={19} className={isActive ? "text-teal-500" : "text-slate-500 dark:text-slate-400"} />
              <span className={`text-[10px] ${isActive ? "text-teal-500 font-semibold" : "text-slate-500 dark:text-slate-400"}`}>
                {t(labelKey)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
