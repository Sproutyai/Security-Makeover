import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-navy bg-grid-pattern" />
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Fire Protection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
            Commercial Fire{' '}
            <span className="text-electric-blue text-glow-blue">Alarm Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            Installation, monitoring, testing, and inspection for all commercial environments.
          </p>
        </div>
      </section>

      {/* ── Services Offered ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Fire Alarm Solutions"
            subtitle="From new installations to ongoing compliance — we handle every aspect of commercial fire protection."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FireIcon className="w-8 h-8" />, title: 'System Installation', description: 'New construction and retrofit installations. We design and install systems that meet all local and national fire codes.' },
              { icon: <ClockIcon className="w-8 h-8" />, title: '24/7 Fire Monitoring', description: 'Professional monitoring center watches your fire alarm system around the clock, dispatching fire services immediately.' },
              { icon: <CheckCircleIcon className="w-8 h-8" />, title: 'Annual Testing & Inspection', description: 'Required annual inspections performed by our certified technicians. Stay compliant and keep your people safe.' },
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'Code Compliance Support', description: 'We work with local fire marshals and building departments to ensure your system meets all regulatory requirements.' },
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
                accent: 'border-t-electric-blue',
              },
              {
                icon: '🏥',
                title: 'Healthcare',
                desc: 'Hospitals, clinics, and assisted living facilities — life safety systems for vulnerable populations.',
                accent: 'border-t-red',
              },
              {
                icon: '🏢',
                title: 'Real Estate',
                desc: 'Commercial buildings and HOAs — multi-tenant systems with centralized monitoring and management.',
                accent: 'border-t-gold',
              },
              {
                icon: '🏪',
                title: 'Retail & Restaurant',
                desc: 'Storefronts, kitchens, and commercial cooking areas — specialized suppression and detection systems.',
                accent: 'border-t-electric-blue',
              },
              {
                icon: '🏛️',
                title: 'Government',
                desc: 'Municipal, state, and federal buildings — systems meeting the strictest government compliance standards.',
                accent: 'border-t-red',
              },
              {
                icon: '⛪',
                title: 'Houses of Worship',
                desc: 'Churches, temples, and community centers — protecting large gathering spaces and historic buildings.',
                accent: 'border-t-gold',
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className={`glass-card p-6 border-t-4 ${industry.accent} hover:shadow-[0_8px_32px_rgba(0,180,216,0.12)] transition-all duration-500 hover:-translate-y-2 group`}
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{industry.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Professional Monitoring ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card p-10 md:p-14 featured-glow">
            <BuildingIcon className="w-12 h-12 text-electric-blue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
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
