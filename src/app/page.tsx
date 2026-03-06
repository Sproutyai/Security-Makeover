import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import ClientLogoGrid from '@/components/ClientLogoGrid';
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/trailer-hero.jpg"
          alt="All American Alarm Mobile Surveillance Trailer"
          fill
          className="object-cover"
          priority
        />
        {/* Lightened gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/95" />

        {/* Radial accent glow behind heading */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[600px] radial-glow-blue" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <span className="inline-block text-electric-blue text-sm font-semibold uppercase tracking-widest mb-6 text-glow-blue">
            Southwest Florida&apos;s #1 Mobile Surveillance Provider
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            Mobile Surveillance.{' '}
            <span className="text-electric-blue text-glow-blue">Deployed in Minutes.</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-10 leading-relaxed">
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

        {/* Stats strip with vertical dividers */}
        <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-md border-t border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 text-center">
            {[
              { value: '24/7', label: 'Monitoring' },
              { value: '< 24hr', label: 'Deployment' },
              { value: 'Since 2001', label: 'Est.' },
              { value: 'FL Licensed', label: '& Insured' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 ${i < 3 ? 'border-r border-border-dark max-md:border-r-0' : ''} ${i === 1 ? 'max-md:border-r-0' : ''} ${i < 2 ? 'max-md:border-b max-md:border-border-dark max-md:pb-4 max-md:mb-4' : ''}`}
              >
                <div className="text-xl md:text-2xl font-extrabold text-electric-blue font-mono">
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
      <section className="section-dark bg-grid-pattern py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            {/* Image with premium treatment */}
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl border border-border-dark overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/trailer-vs-guard.png"
                  alt="Mobile Surveillance Trailer vs Guard Service comparison"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative glow behind image */}
              <div className="absolute -inset-4 radial-glow-blue -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SERVICES GRID ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-navy) 50%, var(--color-charcoal) 100%)' }}>
        {/* Background gradient decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] radial-glow-blue opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Commercial Security Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FEATURED: Mobile Surveillance — spans 2 cols on md+ */}
            <div className="md:col-span-2 glass-card featured-glow border-electric-blue/30 rounded-2xl p-8 group relative overflow-hidden hover:border-electric-blue/60 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 text-electric-blue w-16 h-16 flex items-center justify-center bg-electric-blue/10 rounded-2xl">
                  <TruckIcon />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">
                      Mobile Surveillance Trailers
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                  <p className="text-medium-gray leading-relaxed text-[15px] max-w-xl">
                    Rapid-deploy trailer units with PTZ cameras, solar power, and LTE connectivity. On-site in under 24 hours. Our flagship solution for construction sites and events.
                  </p>
                  <a href="/mobile-surveillance-trailers" className="mt-4 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide hover:underline">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Remaining service cards with glass-card styling */}
            {[
              {
                icon: <CameraIcon />,
                title: 'Video Surveillance & AI',
                description: 'NDAA-compliant cameras with AI-powered analytics, cloud backup, and remote viewing from any device.',
                href: '/commercial/video-surveillance',
              },
              {
                icon: <LockIcon />,
                title: 'Access Control',
                description: 'Custom business hours, employee management, keyless entry, and multi-level access control.',
                href: '/commercial/access-control',
              },
              {
                icon: <ShieldIcon />,
                title: 'Alarm Systems',
                description: 'Commercial-grade DMP alarm systems with 24/7 Five Diamond monitoring. Used in government and banking.',
                href: '/commercial/alarm-systems',
              },
              {
                icon: <FireIcon />,
                title: 'Fire Alarm Systems',
                description: 'Installation, monitoring, and inspection for education, healthcare, retail, and government facilities.',
                href: '/commercial/fire-alarms',
              },
              {
                icon: <BoltIcon />,
                title: 'Integrated Solutions',
                description: 'One-stop-shop: security, fire, surveillance, access, networking, and cloud — all working together.',
                href: '/commercial/integrated-solutions',
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="glass-card rounded-2xl p-8 group relative overflow-hidden hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-electric-blue mb-5 w-12 h-12 flex items-center justify-center bg-electric-blue/10 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: HOW IT WORKS ===== */}
      <section className="section-dark bg-grid-pattern py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="From Call to Deployment in 3 Steps"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-electric-blue/0 via-electric-blue/30 to-electric-blue/0" />

            {[
              {
                step: '01',
                title: 'Free Site Assessment',
                description:
                  'Our deployment team evaluates your location and security needs within 24 hours.',
                offset: 'md:mt-0',
              },
              {
                step: '02',
                title: 'Custom Security Design',
                description:
                  'We design a tailored solution — whether it\u2019s a mobile trailer, fixed cameras, or integrated system.',
                offset: 'md:mt-8',
              },
              {
                step: '03',
                title: 'Rapid Deployment',
                description:
                  'Professional installation and activation. Mobile trailers can be operational same-day.',
                offset: 'md:mt-16',
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`relative glass-card rounded-2xl p-8 text-center hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-1 ${item.offset}`}
              >
                {/* Large step number */}
                <div className="text-7xl font-black text-electric-blue/40 mb-4 font-mono leading-none">
                  {item.step}
                </div>
                {/* Step dot on the connecting line */}
                <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-navy border-2 border-electric-blue/50 z-10" />
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
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-navy/80 border-b border-border-dark">
                <div className="px-6 py-5 text-sm font-bold text-medium-gray uppercase tracking-wide">
                  Feature
                </div>
                <div className="px-6 py-5 text-sm font-bold text-electric-blue uppercase tracking-wide text-center">
                  All American
                </div>
                <div className="px-6 py-5 text-sm font-bold text-medium-gray uppercase tracking-wide text-center">
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
                    i % 2 === 0 ? 'bg-dark-surface/40' : 'bg-navy/30'
                  } border-b border-border-dark/50 last:border-b-0 hover:bg-electric-blue/5 transition-colors duration-200`}
                >
                  <div className="px-6 py-4 text-sm text-white font-medium flex items-center">
                    {feature}
                  </div>
                  <div className="px-6 py-4 text-center flex items-center justify-center">
                    <span className="text-emerald-400 text-2xl font-bold">✓</span>
                  </div>
                  <div className="px-6 py-4 text-center flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red/10 text-red text-sm font-bold">
                      ✗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CLIENT LOGOS ===== */}
      <ClientLogoGrid />

      {/* ===== SECTION 7: TESTIMONIAL + CTA ===== */}
      <section className="section-dark bg-grid-pattern py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Testimonial in glass card */}
          <div className="relative glass-card rounded-2xl p-10 md:p-16 max-w-3xl mx-auto mb-16 overflow-hidden">
            {/* Giant decorative quote mark */}
            <div className="absolute top-4 left-6 text-[12rem] leading-none font-serif text-electric-blue/10 pointer-events-none select-none">
              &ldquo;
            </div>
            <div className="relative z-10">
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
          </div>

          {/* CTA with gradient border */}
          <div className="relative gradient-border glass-card rounded-2xl p-10 md:p-16 max-w-2xl mx-auto overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 radial-glow-blue opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Ready to Secure Your Site?
              </h2>
              <p className="text-medium-gray text-lg mb-8 leading-relaxed">
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
                  className="text-electric-blue font-semibold hover:underline text-glow-blue"
                >
                  239-334-7447
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
