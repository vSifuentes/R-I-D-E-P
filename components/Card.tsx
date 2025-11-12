import { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({ title, subtitle, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition ${className}`}>
      {title && <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>}
      {subtitle && <p className="text-dark/70 mb-4 text-sm">{subtitle}</p>}
      {children && <div className="text-dark/70">{children}</div>}
    </div>
  );
}

