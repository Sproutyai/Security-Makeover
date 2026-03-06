import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import StatCounter from '@/components/StatCounter';
import ContactForm from '@/components/ContactForm';
import PhoneCTA from '@/components/PhoneCTA';
import {
  CameraIcon,
  ShieldIcon,
  SunIcon,
  BoltIcon,
  TruckIcon,
  WifiIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Mobile Surveillance Trailers',
  description:
    'Rapid-deploy mobile surveillance trailers with PTZ cameras, solar power, and 24/7 live monitoring. Operational in under 24 hours across Southwest Florida. Call 239-334-7447.',
};

const stats = [
  { value: '24/7', label: 'Continuous Monitoring' },
  { value: '< 24hr', label: 'Deployment Time' },
  { value: '360°', label: 'Camera Coverage' },
  { value: '100%', label: 'Solar Powered' },
];

const features = [
  {
    icon: <CameraIcon className="w-8 h-8" />,
    title: 'High-Resolution PTZ Cameras',
    description:
      'Pan-tilt-zoom cameras with night vision providing complete 360° coverage of your site.',
  },
  {
    icon: <ShieldIcon className="w-8 h-8" />,
    title: '24/7 Live Monitoring',
    description:
      'Professional monitoring center watches your site around the clock with real-time alerts.',
  },
  {
    icon: <SunIcon className="w-8 h-8" />,
    title: 'Autonomous Solar Power',
    description:
      'Solar panels with generator backup ensure continuous operation without external power.',
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: 'Weatherproof Design',
    description:
      'Built for Florida conditions — hurricane-rated construction withstands extreme weather.',
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    title: 'Rapid Deployment',
    description:
      'Delivered and operational in under 24 hours. Relocate as your project moves.',
  },
  {
    icon: <WifiIcon className="w-8 h-8" />,
    title: 'Real-Time Alerts & Remote Access',
    description:
      'Instant mobile notifications with live viewing from any device, anywhere.',
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8" />,
    title: 'Integrated Communication',
    description:
      'Built-in PA systems and two-way audio for real-time intervention.',
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: 'Scalable Solutions',
    description:
      'Add thermal imaging, license plate recognition, drones, or additional units as needed.',
  },
];

const guardLimitations = [
  'Costs $15–25/hour per guard',
  'Human error — fatigue, distraction, blind spots',
  'Can only be in one place at a time',
  'No recorded evidence for investigations',
  'Scheduling gaps and no-shows',
  'Limited deterrent at night',
];

const trailerAdvantages = [
  '24/7 coverage — never sleeps, never calls in sick',
  '360° PTZ cameras with AI-powered detection',
  'Fraction of the cost of manned security',
  'Recorded evidence for law enforcement',
  'Solar-powered — works anywhere',
  'Relocatable as your project moves',
];

export default function MobileSurveillanceTrailersPage() {
  return (
    <>
      {/* ════════════════════════════════════════════ HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Image
          src="/images/trailer-hero.jpg"
          alt="All American Alarm Mobile Surveillance Trailer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-electric-blue mb-4">
            Southwest Florida&apos;s #1 Mobile Surveillance Provider
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] mb-6">
            Mobile Surveillance{' '}
            <span className="text-electric-blue text-glow-blue">Trailers</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            Rapid-deploy security that goes where you need it. Solar-powered,
            AI-monitored, and operational in under 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact/deployment" size="lg">
              Request Deployment
            </CTAButton>
            <CTAButton href="#brochure" variant="outline" size="lg">
              Download Brochure
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ STATS */}
      <section className="bg-charcoal py-16 border-y border-border-dark">
        <div className="max-w-5xl mx-auto px-6">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* ════════════════════════════════════════════ 8 KEY FEATURES */}
      <section className="relative bg-navy py-20 md:py-28 bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Capabilities"
            title="Built for Every Scenario"
            subtitle="Military-grade surveillance technology packaged for rapid commercial deployment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group"
              >
                <div className="text-electric-blue mb-5 w-14 h-14 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {f.title}
                </h3>
                <p className="text-medium-gray leading-relaxed text-[15px]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ TRAILER VS GUARD */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Smarter Choice"
            title="Trailer vs. Guard Service"
            subtitle="Why leading businesses are switching from manned security to mobile surveillance."
          />

          {/* Comparison infographic */}
          <div className="mb-16 flex justify-center">
            <Image
              src="/images/trailer-vs-guard.png"
              alt="Mobile Surveillance Trailer vs Guard Service comparison"
              width={900}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Guard limitations */}
            <div className="glass-card overflow-hidden border-t-4 border-t-red hover:shadow-[0_8px_32px_rgba(230,57,70,0.15)] transition-all duration-500">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/guard-sleeping.jpg"
                  alt="Security guard limitations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,31,58,0.9)] via-[rgba(15,31,58,0.4)] to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-red mb-4">
                  Traditional Guard Services
                </h3>
                <ul className="space-y-3">
                  {guardLimitations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-medium-gray">
                      <svg
                        className="w-5 h-5 text-red mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trailer advantages */}
            <div className="glass-card overflow-hidden border-t-4 border-t-electric-blue featured-glow hover:shadow-[0_8px_32px_rgba(0,180,216,0.25)] transition-all duration-500">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/trailer-product-1.png"
                  alt="All American Alarm Mobile Surveillance Trailer"
                  fill
                  className="object-contain bg-navy/50 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,31,58,0.6)] to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-electric-blue mb-4">
                  Mobile Surveillance Trailer
                </h3>
                <ul className="space-y-3">
                  {trailerAdvantages.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white">
                      <svg
                        className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ BROCHURE DOWNLOAD */}
      <section id="brochure" className="relative bg-navy py-20 md:py-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/30 to-electric-blue/10 rounded-xl blur-sm group-hover:blur-md transition-all" />
                <Image
                  src="/images/trailer-brochure.png"
                  alt="Mobile Surveillance Brochure"
                  width={500}
                  height={650}
                  className="relative rounded-lg shadow-2xl border border-border-dark"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
                Free Download
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Mobile Surveillance Brochure
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed mb-6">
                Get the full breakdown of our mobile surveillance trailer
                capabilities, specifications, and pricing information.
                Everything you need to make an informed decision.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete feature overview',
                  'Technical specifications',
                  'Deployment process',
                  'Industry use cases',
                  'Pricing guidelines',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <CheckCircleIcon className="w-5 h-5 text-electric-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href="/images/trailer-brochure.png" variant="secondary" size="lg">
                Download Brochure
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ PRODUCT GALLERY */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Equipment"
            title="Purpose-Built for Protection"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/trailer-product-1.png"
                  alt="Mobile Surveillance Trailer Unit 1"
                  fill
                  className="object-contain bg-navy/30 p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-semibold text-electric-blue uppercase tracking-wide">Rapid-Deploy Unit</span>
              </div>
            </div>
            <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/trailer-product-2.png"
                  alt="Mobile Surveillance Trailer Unit 2"
                  fill
                  className="object-contain bg-navy/30 p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-semibold text-electric-blue uppercase tracking-wide">Solar-Powered Unit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ DEPLOYMENT CTA */}
      <section className="relative bg-navy py-20 md:py-28 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Ready to Deploy?
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed mb-8">
                Tell us about your site and we&apos;ll have a security specialist
                reach out within 2 hours during business hours. Emergency
                deployments available.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Free site assessment — no obligation',
                  'Deployment in under 24 hours',
                  'Custom monitoring packages',
                  'Month-to-month availability',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-electric-blue" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-medium-gray">
                <span>Or call us directly:</span>
                <PhoneCTA />
              </div>
            </div>
            <ContactForm
              formType="deployment"
              title="Request Deployment"
              subtitle="Our team will contact you within 2 hours during business hours."
            />
          </div>
        </div>
      </section>
    </>
  );
}
