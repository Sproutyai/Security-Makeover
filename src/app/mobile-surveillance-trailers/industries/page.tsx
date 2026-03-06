import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import PhoneCTA from '@/components/PhoneCTA';
import { BuildingIcon, CheckCircleIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Mobile surveillance trailers for construction sites, special events, parking lots, government facilities, remote locations, and law enforcement across Southwest Florida.',
};

const industries = [
  {
    emoji: '🏗️',
    title: 'Construction Sites',
    description:
      'Construction theft costs the industry $1 billion+ annually. Our trailers monitor materials, equipment, and perimeters 24/7.',
    useCases: [
      'Material theft prevention',
      'Equipment monitoring',
      'Vandalism deterrence',
      'Site access control',
      'Time-lapse documentation',
    ],
    color: 'from-electric-blue/10 to-transparent',
  },
  {
    emoji: '🎪',
    title: 'Special Events & Festivals',
    description:
      'Temporary events need temporary security. Deploy surveillance for the duration of your event, then we pick it up.',
    useCases: [
      'Crowd monitoring',
      'Parking lot security',
      'VIP areas',
      'Vendor protection',
      'Emergency coordination',
    ],
    color: 'from-red/10 to-transparent',
  },
  {
    emoji: '🏪',
    title: 'Parking Lots & Retail',
    description:
      'Reduce theft, vandalism, and liability in parking areas and retail environments.',
    useCases: [
      'Vehicle theft prevention',
      'Slip-and-fall documentation',
      'Employee safety',
      'Loss prevention',
      'After-hours monitoring',
    ],
    color: 'from-gold/10 to-transparent',
  },
  {
    emoji: '🏛️',
    title: 'Government & Municipal',
    description:
      'Trusted by government facilities for perimeter security and critical infrastructure protection.',
    useCases: [
      'Water treatment plants',
      'Municipal buildings',
      'Utility sites',
      'Public spaces',
      'Infrastructure protection',
    ],
    color: 'from-electric-blue/10 to-transparent',
  },
  {
    emoji: '🌴',
    title: 'Remote Locations & Perimeters',
    description:
      'Oil fields, agricultural sites, mining operations — anywhere that\'s too remote for traditional security.',
    useCases: [
      'Oil & gas sites',
      'Farms & agriculture',
      'Mining operations',
      'Remote construction',
      'Border perimeters',
    ],
    color: 'from-red/10 to-transparent',
  },
  {
    emoji: '🚔',
    title: 'Law Enforcement & Emergency',
    description:
      'Support law enforcement with rapid-deploy surveillance for crime hotspots and emergency situations.',
    useCases: [
      'Crime prevention',
      'Disaster response',
      'Hurricane recovery',
      'Evidence gathering',
      'Community safety',
    ],
    color: 'from-gold/10 to-transparent',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════ HERO */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-electric-blue mb-4">
            Applications
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6">
            Industries We{' '}
            <span className="text-electric-blue">Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto leading-relaxed">
            From construction sites to special events, our mobile surveillance
            protects every environment.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ INDUSTRY CARDS */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`bg-dark-surface border border-border-dark rounded-lg overflow-hidden hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${industry.color} px-8 pt-8 pb-6`}>
                  <span className="text-5xl mb-4 block">{industry.emoji}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">
                    {industry.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="px-8 pb-8 pt-4">
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="border-t border-border-dark pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-electric-blue mb-3">
                      Use Cases
                    </p>
                    <ul className="space-y-2">
                      {industry.useCases.map((uc) => (
                        <li
                          key={uc}
                          className="flex items-center gap-2 text-sm text-white/80"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-electric-blue flex-shrink-0" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ BOTTOM CTA */}
      <section className="bg-navy py-20 md:py-28 border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Not Sure If Mobile Surveillance Is Right for Your Industry?
          </h2>
          <p className="text-medium-gray text-lg mb-10 leading-relaxed">
            Call us — we&apos;ve probably done it. Our team has deployed mobile
            surveillance trailers in environments you wouldn&apos;t expect. If
            you have a site that needs protecting, we have a solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <CTAButton href="/contact/deployment" size="lg">
              Request Deployment
            </CTAButton>
            <CTAButton href="/contact/quote" variant="secondary" size="lg">
              Get a Free Quote
            </CTAButton>
          </div>
          <div className="flex justify-center">
            <PhoneCTA />
          </div>
        </div>
      </section>
    </>
  );
}
