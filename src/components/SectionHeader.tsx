interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const eyebrowColor = light ? 'text-electric-blue' : 'text-electric-blue';
  const titleColor = light ? 'text-navy' : 'text-white';
  const subtitleColor = light ? 'text-navy/70' : 'text-medium-gray';

  return (
    <div className={`${alignClass} mb-16`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-[0.3em] ${eyebrowColor} mb-4 block`}>
          {eyebrow}
        </span>
      )}
      {align === 'center' && (
        <div className="flex justify-center mb-6">
          <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
        </div>
      )}
      {align === 'left' && (
        <div className="mb-6">
          <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black ${titleColor} leading-[1.1] tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg md:text-xl ${subtitleColor} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
