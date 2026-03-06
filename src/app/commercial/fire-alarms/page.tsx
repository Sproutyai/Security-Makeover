import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import { FireIcon, ShieldIcon, ClockIcon, CheckCircleIcon, BuildingIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Fire Alarm Systems',
  description:
    'Commercial fire alarm installation, monitoring, testing, and inspection for education, healthcare, retail, and government facilities in Southwest Florida.',
};

export default function FireAlarmsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Fire Protection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            COMMERCIAL FIRE ALARM SYSTEMS
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            Installation, monitoring, testing, and inspection for all commercial environments.
          </p>
        </div>
      </section>

      {/* ── Services Offered ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Fire Alarm Solutions"
            subtitle="From new installations to ongoing compliance — we handle every aspect of commercial fire protection."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FireIcon className="w-8 h-8" />}
              title="System Installation"
              description="New construction and retrofit installations. We design and install systems that meet all local and national fire codes."
            />
            <FeatureCard
              icon={<ClockIcon className="w-8 h-8" />}
              title="24/7 Fire Monitoring"
              description="Professional monitoring center watches your fire alarm system around the clock, dispatching fire services immediately."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8" />}
              title="Annual Testing & Inspection"
              description="Required annual inspections performed by our certified technicians. Stay compliant and keep your people safe."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="Code Compliance Support"
              description="We work with local fire marshals and building departments to ensure your system meets all regulatory requirements."
            />
          </div>
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Fire Protection for Every Environment"
            subtitle="Different industries have different fire code requirements. We know them all."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏫',
                title: 'Education',
                desc: 'Schools and universities — complex multi-building systems with mass notification capabilities.',
              },
              {
                icon: '🏥',
                title: 'Healthcare',
                desc: 'Hospitals, clinics, and assisted living facilities — life safety systems for vulnerable populations.',
              },
              {
                icon: '🏢',
                title: 'Real Estate',
                desc: 'Commercial buildings and HOAs — multi-tenant systems with centralized monitoring and management.',
              },
              {
                icon: '🏪',
                title: 'Retail & Restaurant',
                desc: 'Storefronts, kitchens, and commercial cooking areas — specialized suppression and detection systems.',
              },
              {
                icon: '🏛️',
                title: 'Government',
                desc: 'Municipal, state, and federal buildings — systems meeting the strictest government compliance standards.',
              },
              {
                icon: '⛪',
                title: 'Houses of Worship',
                desc: 'Churches, temples, and community centers — protecting large gathering spaces and historic buildings.',
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className="bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Professional Monitoring ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-dark-surface border border-border-dark rounded-lg p-10 md:p-14">
            <BuildingIcon className="w-12 h-12 text-electric-blue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Why Professional Fire Monitoring Matters
            </h2>
            <p className="text-medium-gray text-lg leading-relaxed max-w-2xl mx-auto">
              Every second counts during a fire. Professional 24/7 monitoring means the fire department is dispatched the moment your alarm triggers — even if no one is in the building. Don&apos;t leave life safety to chance.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Protect Your People"
            title="Schedule a Fire Alarm Consultation"
            subtitle="Whether you need a new installation or an upgrade to an existing system, we're here to help."
          />
          <ContactForm
            formType="quote"
            title="Request a Fire Alarm Quote"
            subtitle="We'll assess your facility and recommend the right fire protection solution."
          />
        </div>
      </section>
    </>
  );
}
