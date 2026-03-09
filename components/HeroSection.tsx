import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white pt-[180px] pb-0">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Column */}
        <div className="md:w-[55%] w-full">
          <h1 className="font-[var(--font-jakarta)] text-[42px] md:text-[58px] font-extrabold text-black leading-[1.1] mb-6">
            Website Design &amp; Marketing Systems For Local Service Businesses
          </h1>
          <div className="font-[var(--font-opensans)] text-[20px] md:text-[23px] text-gray-text leading-relaxed space-y-4 mb-8">
            <p>Get and keep more customers on autopilot.</p>
            <p>
              <strong>Website</strong> + <strong>CRM</strong> + <strong>Automated Follow Up</strong>.
            </p>
            <p>
              One simple system that captures leads 24/7 while you focus on the work you do best.
            </p>
          </div>
          <Link
            href="#faq"
            className="inline-block bg-cta-blue text-white font-[var(--font-jakarta)] text-base rounded-full px-6 py-4 hover:opacity-90 transition-opacity"
          >
            Book A Call
          </Link>
        </div>

        {/* Right Column */}
        <div className="md:w-[45%] w-full flex justify-center">
          {/* Rabbit/bunny SVG placeholder */}
          <svg
            width="444"
            height="418"
            viewBox="0 0 444 418"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[444px] h-auto"
          >
            {/* Rabbit silhouette in blue outline style */}
            <ellipse cx="222" cy="280" rx="120" ry="130" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Head */}
            <circle cx="222" cy="170" r="65" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Left ear */}
            <ellipse cx="185" cy="80" rx="20" ry="60" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Right ear */}
            <ellipse cx="259" cy="80" rx="20" ry="60" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Left eye */}
            <circle cx="200" cy="162" r="8" fill="#2166FF" />
            {/* Right eye */}
            <circle cx="244" cy="162" r="8" fill="#2166FF" />
            {/* Nose */}
            <ellipse cx="222" cy="185" rx="6" ry="4" fill="#2166FF" />
            {/* Mouth lines */}
            <path d="M216 192 Q222 200 228 192" stroke="#2166FF" strokeWidth="2" fill="none" />
            {/* Left whisker */}
            <line x1="160" y1="180" x2="200" y2="185" stroke="#2166FF" strokeWidth="1.5" />
            <line x1="162" y1="190" x2="200" y2="188" stroke="#2166FF" strokeWidth="1.5" />
            {/* Right whisker */}
            <line x1="244" y1="185" x2="284" y2="180" stroke="#2166FF" strokeWidth="1.5" />
            <line x1="244" y1="188" x2="282" y2="190" stroke="#2166FF" strokeWidth="1.5" />
            {/* Left paw */}
            <ellipse cx="160" cy="370" rx="30" ry="18" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Right paw */}
            <ellipse cx="284" cy="370" rx="30" ry="18" stroke="#2166FF" strokeWidth="3" fill="none" />
            {/* Belly line */}
            <path d="M180 260 Q222 310 264 260" stroke="#2166FF" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
