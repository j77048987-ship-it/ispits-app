import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-teal-600 text-white active:bg-teal-700",
  secondary: "bg-amber-500 text-slate-900 active:bg-amber-600",
  outline: "border border-slate-300 dark:border-slate-700 bg-transparent",
  danger: "border border-rose-500/40 text-rose-500 bg-transparent"
};

export function Button({ variant = "primary", className = "", children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-full rounded-2xl font-semibold py-3.5 flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100 ${VARIANT_CLASSES[variant]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
