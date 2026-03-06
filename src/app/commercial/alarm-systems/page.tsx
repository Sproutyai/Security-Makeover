import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { ShieldIcon, WifiIcon, CheckCircleIcon, ClockIcon, LockIcon, BoltIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Commercial Alarm Systems',
  description:
    'DMP commercial alarm systems with 24/7 Five Diamond monitoring — American-made security trusted by government and banking facilities.',
};

export default function AlarmSystemsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-navy bg-grid-pattern" />
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            DMP Alarm Systems
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
            Commercial <span className="text-electric-blue text-glow-blue">Alarm Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            DMP (Digital Monitoring Products) — American-made security trusted by government and banking facilities.
          </p>
        </div>
      </section>

      {/* ── DMP Spotlight ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Product Spotlight"
            title="Why We Choose DMP"
            subtitle="When the Pentagon, major banks, and Fortune 500 companies need alarm systems, they choose DMP. We bring that same level of protection to Southwest Florida businesses."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'American Made', description: 'Manufactured in Springfield, Missouri. No overseas components or supply chain concerns.' },
              { icon: <CheckCircleIcon className="w-8 h-8" />, title: 'Government & Banking Grade', description: 'Used in government facilities, banks, and Fortune 500 companies. The highest standard of security.' },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'LTE Cellular Connectivity', description: 'No phone line required. Secure LTE communication ensures your system stays connected even if lines are cut.' },
              { icon: <BoltIcon className="w-8 h-8" />, title: 'Hardwired & Wireless Zones', description: 'Flexible zone configuration — mix hardwired and wireless sensors for the perfect fit.' },
            ].map((f) => (
              <div key={f.title} className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group">
                <div className="text-electric-blue mb-5 w-14 h-14 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{f.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Features ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Features"
            title="Complete Alarm System Capabilities"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <LockIcon className="w-8 h-8" />, title: 'Zone Takeover', description: 'Upgrade your existing system without rewiring. DMP integrates with your current sensors and wiring.' },
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'Patented Redundancy', description: "DMP's patented technology ensures your system stays operational even if individual components fail." },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'IOS & Android App', description: 'Arm, disarm, and monitor your system from anywhere. Get real-time alerts on your phone.' },
              { icon: <ClockIcon className="w-8 h-8" />, title: '24/7 Five Diamond Monitoring', description: 'Professional American-based monitoring center watches your system around the clock with rapid response.' },
            ].map((f) => (
              <div key={f.title} className="glass-card p-8 border-t-2 border-t-electric-blue/40 hover:border-t-electric-blue transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-electric-blue mb-4 w-12 h-12 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{f.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DMP Callout ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card p-10 md:p-14 featured-glow">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
              The DMP Difference
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              &ldquo;When the Pentagon, major banks, and Fortune 500 companies need alarm systems, they choose DMP.&rdquo;
            </h2>
            <p className="text-medium-gray text-lg leading-relaxed max-w-2xl mx-auto">
              We bring that same level of protection to Southwest Florida businesses — from small offices to large commercial facilities. American-made quality, locally installed and monitored.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Get Protected"
            title="Upgrade to a DMP Alarm System"
            subtitle="We can take over your existing system or design a brand-new solution from scratch."
          />
          <ContactForm
            formType="quote"
            title="Request a Free Quote"
            subtitle="Tell us about your current system and we'll recommend the best DMP solution."
          />
        </div>
      </section>
    </>
  );
}
