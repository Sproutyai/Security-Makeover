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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Where We Serve
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            SERVICE AREAS
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            Proudly serving Southwest Florida — Fort Myers, Naples, Cape Coral, and beyond.
          </p>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Southwest Florida"
            title="Primary Service Areas"
            subtitle="We provide mobile surveillance trailers, commercial security, access control, alarm systems, and fire alarms across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-dark-surface border border-border-dark rounded-lg p-8 hover:border-electric-blue transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-electric-blue flex-shrink-0">
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{area.name}</h3>
                      {area.highlight && (
                        <span className="text-xs font-semibold uppercase tracking-wider bg-electric-blue/20 text-electric-blue px-2 py-0.5 rounded-full">
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
      <section className="py-16 bg-navy border-y border-border-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-medium-gray">
            Don&apos;t see your area?{' '}
            <strong className="text-white">
              We serve all of Lee and Collier counties.
            </strong>{' '}
            Call us to confirm coverage for your location.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
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
