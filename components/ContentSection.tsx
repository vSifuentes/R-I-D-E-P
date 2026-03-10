import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  intro?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  introClassName?: string;
}

export default function ContentSection({
  title,
  intro,
  children,
  id,
  className = "",
  introClassName = "",
}: ContentSectionProps) {
  return (
    <section id={id} className={`content-section scroll-mt-28 ${className}`.trim()}>
      <div className="space-y-3">
        <h2 className="content-heading">{title}</h2>
        {intro && <p className={`content-lead ${introClassName}`.trim()}>{intro}</p>}
      </div>
      {children}
    </section>
  );
}