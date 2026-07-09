interface ProgressRingProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  colorClassName?: string;
  trackClassName?: string;
  label?: string;
}

export function ProgressRing({
  percent,
  size = 88,
  strokeWidth = 8,
  colorClassName = "text-teal-500",
  trackClassName = "text-slate-700/30",
  label
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90 absolute inset-0" role="img" aria-label={label ?? `${Math.round(clamped)}%`}>
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} className={trackClassName} stroke="currentColor" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className={colorClassName}
          stroke="currentColor"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.7s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-lg font-bold">{Math.round(clamped)}%</span>
      </div>
    </div>
  );
}
