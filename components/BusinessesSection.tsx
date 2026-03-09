import Link from "next/link";

const businesses = [
  { name: "HVAC", color: "#FF8C42" },
  { name: "Plumbers", color: "#4A90D9" },
  { name: "Clinics", color: "#5CBC7B" },
  { name: "Roofing", color: "#E05555" },
  { name: "Auto Detailers", color: "#9B59B6" },
  { name: "TRAINERS", color: "#F39C12" },
  { name: "pest Control", color: "#1ABC9C" },
  { name: "Real estate", color: "#3498DB" },
  { name: "Cleaning Services", color: "#E74C8B" },
];

export default function BusinessesSection() {
  return (
    <section id="businesses" className="bg-navy py-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center font-[var(--font-jakarta)] text-[32px] md:text-[40px] font-bold text-white mb-12">
          Serving These Businesses &amp; More...
        </h2>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[900px] mx-auto mb-12">
          {businesses.map((biz, i) => (
            <div
              key={i}
              className="bg-dark-card border border-slate-gray rounded-sm px-5 py-5 flex items-center gap-3"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: biz.color }}
              />
              <span className="font-[var(--font-jakarta)] text-base font-medium text-light-steel">
                {biz.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#faq"
            className="inline-block bg-bright-blue text-white font-[var(--font-opensans)] text-base font-bold rounded px-8 py-5 tracking-wide hover:opacity-90 transition-opacity"
          >
            Book A Call
          </Link>
        </div>
      </div>
    </section>
  );
}
