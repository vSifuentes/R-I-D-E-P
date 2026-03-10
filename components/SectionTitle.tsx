interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div id={id} className="mb-12 md:mb-14 scroll-mt-28 space-y-3">
      <h1 className="text-3xl md:text-4xl font-bold text-[#003366] leading-tight max-w-4xl">{title}</h1>
      {subtitle && <p className="content-lead max-w-3xl">{subtitle}</p>}
    </div>
  );
}

