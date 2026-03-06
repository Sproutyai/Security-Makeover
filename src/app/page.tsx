import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import ServiceCard from '@/components/ServiceCard';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import StatCounter from '@/components/StatCounter';
import {
  TruckIcon,
  CameraIcon,
  LockIcon,
  ShieldIcon,
  FireIcon,
  BoltIcon,
} from '@/components/Icons';

export default function HomePage() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/trailer-hero.jpg"
          alt="All American Alarm Mobile Surveillance Trailer"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <span className="inline-block text-electric-blue text-sm font-semibold uppercase tracking-widest mb-6">
            Southwest Florida&apos;s #1 Mobile Surveillance Provider
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            Mobile Surveillance.{' '}
            <span className="text-electric-blue">Deployed in Minutes.</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-10">
            24/7 AI-powered monitoring for construction sites, events, and commercial
            properties across Southwest Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact/deployment" variant="primary" size="lg">
              Request Deployment
            </CTAButton>
            <CTAButton
              href="/mobile-surveillance-trailers/how-it-works"
              variant="outline"
              size="lg"
            >
              See How It Works
            </CTAButton>
          </div>
        </div>

        {/* Stats strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm border-t border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Monitoring' },
              { value: '< 24hr', label: 'Deployment' },
              { value: 'Since 2001', label: 'Est.' },
              { value: 'FL Licensed', label: '& Insured' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-2xl font-extrabold text-electric-blue">
                  {stat.value}
                </div>
                <div className="text-xs text-medium-gray uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PROBLEM / SOLUTION ===== */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionHeader
                eyebrow="Why Mobile Surveillance?"
                title="Smarter Than Guard Services. More Flexible Than Fixed Cameras."
                align="left"
              />
              <p className="text-medium-gray text-lg leading-relaxed">
                Traditional security guards cost $15-25/hour and can&apos;t be
                everywhere. Fixed cameras take weeks to install and can&apos;t move
                when your project does. Our mobile surveillance trailers deploy in
                under 24 hours, provide 360° AI-powered monitoring, and cost a
                fraction of manned security.
              </p>
              <div className="mt-8">
                <CTAButton href="/mobile-surveillance-trailers" variant="secondary">
                  Learn More About Trailers
                </CTAButton>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/images/trailer-vs-guard.png"
                alt="Mobile Surveillance Trailer vs Guard Service comparison"
                width={600}
                height={450}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SERVICES GRID ===== */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Commercial Security Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<TruckIcon />}
              title="Mobile Surveillance Trailers"
              description="Rapid-deploy trailer units with PTZ cameras, solar power, and LTE connectivity. On-site in under 24 hours."
              href="/mobile-surveillance-trailers"
            />
            <ServiceCard
              icon={<CameraIcon />}
              title="Video Surveillance & AI"
              description="NDAA-compliant cameras with AI-powered analytics, cloud backup, and remote viewing from any device."
              href="/commercial/video-surveillance"
            />
            <ServiceCard
              icon={<LockIcon />}
              title="Access Control"
              description="Custom business hours, employee management, keyless entry, and multi-level access control."
              href="/commercial/access-control"
            />
            <ServiceCard
              icon={<ShieldIcon />}
              title="Alarm Systems"
              description="Commercial-grade DMP alarm systems with 24/7 Five Diamond monitoring. Used in government and banking."
              href="/commercial/alarm-systems"
            />
            <ServiceCard
              icon={<FireIcon />}
              title="Fire Alarm Systems"
              description="Installation, monitoring, and inspection for education, healthcare, retail, and government facilities."
              href="/commercial/fire-alarms"
            />
            <ServiceCard
              icon={<BoltIcon />}
              title="Integrated Solutions"
              description="One-stop-shop: security, fire, surveillance, access, networking, and cloud — all working together."
              href="/commercial/integrated-solutions"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: HOW IT WORKS ===== */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="From Call to Deployment in 3 Steps"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Free Site Assessment',
                description:
                  'Our deployment team evaluates your location and security needs within 24 hours.',
              },
              {
                step: '02',
                title: 'Custom Security Design',
                description:
                  'We design a tailored solution — whether it\u2019s a mobile trailer, fixed cameras, or integrated system.',
              },
              {
                step: '03',
                title: 'Rapid Deployment',
                description:
                  'Professional installation and activation. Mobile trailers can be operational same-day.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-dark-surface border border-border-dark rounded-lg p-8 text-center hover:border-electric-blue/50 transition-colors"
              >
                <div className="text-5xl font-black text-electric-blue/20 mb-4 font-mono">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-medium-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: COMPARISON TABLE ===== */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The All American Difference"
            title="Why Choose All American Alarm?"
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-surface border border-border-dark rounded-lg overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-navy border-b border-border-dark">
                <div className="px-6 py-4 text-sm font-bold text-medium-gray uppercase tracking-wide">
                  Feature
                </div>
                <div className="px-6 py-4 text-sm font-bold text-electric-blue uppercase tracking-wide text-center">
                  All American
                </div>
                <div className="px-6 py-4 text-sm font-bold text-medium-gray uppercase tracking-wide text-center">
                  Others
                </div>
              </div>
              {/* Table rows */}
              {[
                'Customized Security Solutions',
                'Written Guarantees',
                'Live, Local Technicians (No Subcontractors)',
                'Speak Directly to the Owner',
                '24/7 Five Diamond Monitoring',
                'American Made Products (DMP)',
                'Rapid Mobile Trailer Deployment',
                'One-Stop Security + Fire + Surveillance + Access',
              ].map((feature, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 ${
                    i % 2 === 0 ? 'bg-dark-surface' : 'bg-navy/50'
                  } border-b border-border-dark last:border-b-0`}
                >
                  <div className="px-6 py-4 text-sm text-white font-medium">
                    {feature}
                  </div>
                  <div className="px-6 py-4 text-center text-green-400 text-lg">
                    ✓
                  </div>
                  <div className="px-6 py-4 text-center text-red text-lg">✗</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CLIENT LOGOS ===== */}
      <ClientLogoGrid />

      {/* ===== SECTION 7: TESTIMONIAL + CTA ===== */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Testimonial */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed mb-6">
              &ldquo;Your company is the one rare gem in our community.&rdquo;
            </blockquote>
            <div className="text-medium-gray">
              <span className="font-semibold text-white">Tracy Galloway</span>{' '}
              — CCMI
            </div>
          </div>

          {/* CTA */}
          <div className="bg-dark-surface border border-border-dark rounded-lg p-10 md:p-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Secure Your Site?
            </h2>
            <p className="text-medium-gray text-lg mb-8">
              Get a free quote and site assessment — no obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact/quote" variant="primary" size="lg">
                Get a Free Quote
              </CTAButton>
            </div>
            <p className="mt-6 text-medium-gray text-sm">
              Or call us directly:{' '}
              <a
                href="tel:239-334-7447"
                className="text-electric-blue font-semibold hover:underline"
              >
                239-334-7447
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
