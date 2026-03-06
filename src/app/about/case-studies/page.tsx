import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Case Studies & Gallery',
  description:
    'See All American Alarm mobile surveillance trailers and commercial security systems in action. Real project results from Southwest Florida.',
};

const galleryImages = [
  { src: '/images/trailer-hero.jpg', alt: 'Mobile Surveillance Trailer deployed at construction site', span: 'md:col-span-2' },
  { src: '/images/trailer-product-1.png', alt: 'Trailer unit with PTZ cameras and solar panel', span: '' },
  { src: '/images/trailer-product-2.png', alt: 'All American Alarm mobile unit', span: '' },
  { src: '/images/industrial-perimeter.jpg', alt: 'Industrial perimeter protection', span: '' },
  { src: '/images/commercial-surveillance.jpg', alt: 'Commercial surveillance system', span: '' },
  { src: '/images/trailer-brochure.png', alt: 'Mobile Surveillance brochure', span: 'md:col-span-2' },
];

const caseStudies = [
  {
    title: 'Construction Site — Fort Myers',
    challenge: 'Material theft costing $50K+ per quarter',
    solution: 'Two mobile surveillance trailers covering 10-acre site',
    result: 'Zero theft incidents in 6 months of deployment',
    icon: '🏗️',
  },
  {
    title: 'Event Security — Lee County',
    challenge: 'Festival with 5,000+ attendees needing temporary surveillance',
    solution: '3-day deployment of mobile trailer with crowd monitoring',
    result: 'Full coverage, real-time coordination with event staff',
    icon: '🎪',
  },
  {
    title: 'Retail Parking — Cape Coral',
    challenge: 'Vehicle break-ins and vandalism in shopping center lot',
    solution: 'Permanent trailer deployment with LPR cameras',
    result: '87% reduction in parking lot incidents',
    icon: '🏪',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            Real Results
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            CASE STUDIES &amp; PROJECT GALLERY
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            See our mobile surveillance trailers and commercial security systems in action.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Work"
            title="Project Gallery"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[16/10] rounded-2xl overflow-hidden group glass-card p-1 ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-navy relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Proven Results"
            title="Case Studies"
            subtitle="Real-world security challenges solved with mobile surveillance and commercial systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{study.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-red block mb-1">
                        Challenge
                      </span>
                      <p className="text-medium-gray text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric-blue block mb-1">
                        Solution
                      </span>
                      <p className="text-medium-gray text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="glass-card p-3 bg-green-400/5 border-green-400/20">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 block mb-1">
                        Result
                      </span>
                      <p className="text-white text-sm font-semibold leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Have a Security Challenge?
            </h2>
            <p className="text-medium-gray text-lg">
              Let&apos;s build your case study. Tell us about your site and we&apos;ll design a solution.
            </p>
          </div>
          <ContactForm
            formType="quote"
            title="Get Started"
            subtitle="We'll respond within 24 hours with a custom recommendation."
          />
        </div>
      </section>
    </>
  );
}
