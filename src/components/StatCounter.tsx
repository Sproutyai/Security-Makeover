interface StatCounterProps {
  stats: { value: string; label: string }[];
}

export default function StatCounter({ stats }: StatCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-5xl font-extrabold text-electric-blue mb-2 font-mono text-glow-blue">{stat.value}</div>
          <div className="text-medium-gray text-sm uppercase tracking-wide font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
