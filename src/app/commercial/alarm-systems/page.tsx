import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            DMP Alarm Systems
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            COMMERCIAL ALARM SYSTEMS
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            DMP (Digital Monitoring Products) — American-made security trusted by government and banking facilities.
          </p>
        </div>
      </section>

      {/* ── DMP Spotlight ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Product Spotlight"
            title="Why We Choose DMP"
            subtitle="When the Pentagon, major banks, and Fortune 500 companies need alarm systems, they choose DMP. We bring that same level of protection to Southwest Florida businesses."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="American Made"
              description="Manufactured in Springfield, Missouri. No overseas components or supply chain concerns."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8" />}
              title="Government & Banking Grade"
              description="Used in government facilities, banks, and Fortune 500 companies. The highest standard of security."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="LTE Cellular Connectivity"
              description="No phone line required. Secure LTE communication ensures your system stays connected even if lines are cut."
            />
            <FeatureCard
              icon={<BoltIcon className="w-8 h-8" />}
              title="Hardwired & Wireless Zones"
              description="Flexible zone configuration — mix hardwired and wireless sensors for the perfect fit."
            />
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
            <FeatureCard
              icon={<LockIcon className="w-8 h-8" />}
              title="Zone Takeover"
              description="Upgrade your existing system without rewiring. DMP integrates with your current sensors and wiring."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="Patented Redundancy"
              description="DMP's patented technology ensures your system stays operational even if individual components fail."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="IOS & Android App"
              description="Arm, disarm, and monitor your system from anywhere. Get real-time alerts on your phone."
            />
            <FeatureCard
              icon={<ClockIcon className="w-8 h-8" />}
              title="24/7 Five Diamond Monitoring"
              description="Professional American-based monitoring center watches your system around the clock with rapid response."
            />
          </div>
        </div>
      </section>

      {/* ── Why DMP Callout ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-dark-surface border border-electric-blue/30 rounded-lg p-10 md:p-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
              The DMP Difference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
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
