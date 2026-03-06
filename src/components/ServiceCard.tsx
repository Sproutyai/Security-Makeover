import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block bg-dark-surface border border-border-dark rounded-lg p-8 hover:border-electric-blue transition-all duration-300 hover:-translate-y-1">
      <div className="text-electric-blue mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">{title}</h3>
      <p className="text-medium-gray leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide">
        Learn More →
      </span>
    </Link>
  );
}
