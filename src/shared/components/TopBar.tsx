import { useTranslation } from "react-i18next";
import { GraduationCap, Moon, Sun, WifiOff } from "lucide-react";
import type { ThemeMode } from "../../core/entities/Settings";

interface TopBarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  isOnline: boolean;
}

export function TopBar({ theme, onToggleTheme, isOnline }: TopBarProps) {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-stone-200 dark:border-slate-800 bg-stone-50/90 dark:bg-slate-950/90 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0">
          <GraduationCap size={18} />
        </div>
        <div>
          <div className="font-display font-bold text-sm leading-tight">{t("app.name")}</div>
          <div className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">{t("app.tagline")}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {!isOnline && <WifiOff size={15} className="text-slate-400" aria-label="offline" />}
        <button
          onClick={onToggleTheme}
          className="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-200 dark:bg-slate-800"
          aria-label="theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </header>
  );
}
