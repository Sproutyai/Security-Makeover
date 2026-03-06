interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative bg-dark-surface rounded-xl p-6 border-t-2 border-t-electric-blue/40 border-x border-b border-border-dark hover:border-t-electric-blue transition-all duration-300 group">
      <div className="text-electric-blue text-3xl mb-4 p-2.5 bg-electric-blue/10 rounded-lg inline-block">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{title}</h3>
      <p className="text-medium-gray text-sm leading-relaxed">{description}</p>
    </div>
  );
}
