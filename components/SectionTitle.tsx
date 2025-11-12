interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-dark/70">{subtitle}</p>}
    </div>
  );
}

