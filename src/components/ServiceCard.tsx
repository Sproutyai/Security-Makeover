import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block bg-dark-surface/80 backdrop-blur-sm border border-border-dark rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="text-electric-blue mb-5 w-12 h-12 flex items-center justify-center bg-electric-blue/10 rounded-xl text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">{title}</h3>
        <p className="text-medium-gray leading-relaxed text-[15px]">{description}</p>
        <span className="mt-5 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </span>
      </div>
    </Link>
  );
}
