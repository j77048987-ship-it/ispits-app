import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  soft?: boolean;
}

export function Card({ children, soft = false, className = "", ...rest }: CardProps) {
  const base = soft
    ? "bg-stone-100 dark:bg-slate-900/60 border-stone-200 dark:border-slate-800"
    : "bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800";
  return (
    <div className={`rounded-2xl border p-4 ${base} ${className}`} {...rest}>
      {children}
    </div>
  );
}
