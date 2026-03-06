interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean; // true when on light backgrounds
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const eyebrowColor = light ? 'text-electric-blue' : 'text-electric-blue';
  const titleColor = light ? 'text-navy' : 'text-white';
  const subtitleColor = light ? 'text-navy/70' : 'text-medium-gray';

  return (
    <div className={`${alignClass} mb-12`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${eyebrowColor} mb-3 block`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl ${subtitleColor} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
