import { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "default" | "accent" | "soft";
}

const variantClasses = {
  default: "bg-white shadow-md border border-white/60",
  accent: "bg-white shadow-md border border-slate-200",
  soft: "bg-white/90 shadow-sm border border-slate-200",
};

export default function Card({
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "",
  variant = "default",
}: CardProps) {
  return (
    <div className={`rounded-2xl p-6 md:p-7 !pl-4 md:!pl-4 transition-shadow duration-200 hover:shadow-lg ${variantClasses[variant]} ${className}`.trim()}>
      {title && <h3 className="text-xl font-semibold text-[#003366] mb-2 leading-snug">{title}</h3>}
      {subtitle && <p className="text-sm font-medium uppercase tracking-[0.08em] text-slate-500 mb-4">{subtitle}</p>}
      {children && <div className={`text-gray-600 leading-relaxed space-y-4 ${contentClassName}`.trim()}>{children}</div>}
    </div>
  );
}

