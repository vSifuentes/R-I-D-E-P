import { ReactNode } from "react";
import SectionTitle from "@/components/SectionTitle";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function PageContainer({
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "",
}: PageContainerProps) {
  return (
    <div className={`w-full pb-20 min-h-screen ${className}`.trim()}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 ${contentClassName}`.trim()}>
        <SectionTitle title={title} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
}