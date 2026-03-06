import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import PhoneCTA from '@/components/PhoneCTA';
import { MapPinIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'All American Alarm serves Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Lehigh Acres, and all of Lee and Collier counties with mobile surveillance and commercial security.',
};

const serviceAreas = [
  {
    name: 'Fort Myers',
    description:
      'Our headquarters city with the fastest response times. Visit us at our office at 2030 Crawford Street.',
    highlight: 'Headquarters',
  },
  {
    name: 'Cape Coral',
    description:
      "Full-service coverage across Cape Coral's residential and commercial districts.",
    highlight: null,
  },
  {
    name: 'Naples',
    description:
      "Serving Naples' luxury commercial and retail properties with premium security solutions.",
    highlight: null,
  },
  {
    name: 'Bonita Springs',
    description:
      'Complete security solutions for Bonita Springs businesses, from surveillance to access control.',
    highlight: null,
  },
  {
    name: 'Estero',
    description:
      'From Coconut Point to Miromar — we cover Estero with full commercial security services.',
    highlight: null,
  },
  {
    name: 'Lehigh Acres',
    description:
      'Growing communities need growing security. Full-service coverage for Lehigh Acres businesses and developments.',
    highlight: null,
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-charcoal bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            Where We Serve
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            SERVICE AREAS
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            Proudly serving Southwest Florida — Fort Myers, Naples, Cape Coral, and beyond.
          </p>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-20 md:py-28 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Southwest Florida"
            title="Primary Service Areas"
            subtitle="We provide mobile surveillance trailers, commercial security, access control, alarm systems, and fire alarms across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent group-hover:via-electric-blue transition-all duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 group-hover:border-electric-blue/60 transition-colors">
                    <MapPinIcon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">{area.name}</h3>
                      {area.highlight && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full border border-electric-blue/30">
                          {area.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-medium-gray leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Coverage */}
      <section className="py-16 bg-navy border-y border-border-dark bg-grid-pattern relative">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card p-8 inline-block">
            <p className="text-lg text-medium-gray">
              Don&apos;t see your area?{' '}
              <strong className="text-white">
                We serve all of Lee and Collier counties.
              </strong>{' '}
              Call us to confirm coverage for your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal to-navy relative overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Protect Your Business?
          </h2>
          <p className="text-medium-gray text-lg mb-8">
            Get a free security assessment for your Southwest Florida property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact/quote" variant="primary" size="lg">
              Get a Free Quote
            </CTAButton>
            <PhoneCTA className="text-xl" />
          </div>
        </div>
      </section>
    </>
  );
}
