import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';
import { CameraIcon, LockIcon, ShieldIcon, FireIcon, BoltIcon, CheckCircleIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Commercial Security Solutions',
  description:
    'Comprehensive commercial security for Southwest Florida businesses — video surveillance, access control, alarm systems, fire alarms, and integrated solutions.',
};

const services = [
  {
    icon: <CameraIcon className="w-10 h-10" />,
    title: 'Video Surveillance & AI',
    description: 'NDAA-compliant cameras with AI-powered analytics, cloud backup, and remote viewing from any device.',
    href: '/commercial/video-surveillance',
  },
  {
    icon: <LockIcon className="w-10 h-10" />,
    title: 'Access Control',
    description: 'Custom business hours, employee management, keyless entry, and multi-level access control.',
    href: '/commercial/access-control',
  },
  {
    icon: <ShieldIcon className="w-10 h-10" />,
    title: 'Alarm Systems',
    description: 'Commercial-grade DMP alarm systems with 24/7 Five Diamond monitoring. Used in government and banking.',
    href: '/commercial/alarm-systems',
  },
  {
    icon: <FireIcon className="w-10 h-10" />,
    title: 'Fire Alarm Systems',
    description: 'Installation, monitoring, and inspection for education, healthcare, retail, and government facilities.',
    href: '/commercial/fire-alarms',
  },
  {
    icon: <BoltIcon className="w-10 h-10" />,
    title: 'Integrated Solutions',
    description: 'One-stop-shop: security, fire, surveillance, access, networking, and cloud — all working together.',
    href: '/commercial/integrated-solutions',
  },
  {
    icon: <CheckCircleIcon className="w-10 h-10" />,
    title: '24/7 Professional Monitoring',
    description: 'Five Diamond certified monitoring center with rapid response. Your business is never unprotected.',
    href: '/commercial/alarm-systems',
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <Image
          src="/images/commercial-surveillance.jpg"
          alt="Commercial security surveillance system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/95" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-electric-blue mb-4">
            Protect Your Business
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white leading-[1.05] mb-6">
            Commercial Security{' '}
            <span className="text-electric-blue text-glow-blue">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            Comprehensive security for Southwest Florida businesses. From surveillance to access control, fire alarms to fully integrated systems — one trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact/quote" size="lg">
              Get a Free Quote
            </CTAButton>
            <CTAButton href="#services" variant="outline" size="lg">
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── Services Grid (6 cards = clean 3x2) ── */}
      <section id="services" className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Commercial Services"
            title="Everything Your Business Needs — Under One Roof"
            subtitle="We design, install, monitor, and maintain every system. One vendor, one point of contact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-electric-blue mb-5 w-14 h-14 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
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

      {/* ── Why All American ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Built on 25+ Years of Trust"
            subtitle="Southwest Florida businesses choose All American Alarm because we deliver results, not excuses."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '25+', label: 'Years in Business' },
              { value: '5,000+', label: 'Systems Installed' },
              { value: '24/7', label: 'Monitoring Center' },
              { value: '100%', label: 'In-House Technicians' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-electric-blue mb-2">{stat.value}</div>
                <div className="text-medium-gray text-sm uppercase tracking-wide font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 Steps Section ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="Your New System in 2 Steps"
            subtitle="We handle everything so you can focus on running your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="glass-card p-8 relative border-t-4 border-t-electric-blue">
              <div className="absolute -top-5 left-8 bg-electric-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg shadow-[0_0_20px_rgba(0,180,216,0.3)]">
                1
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Expert Analysis</h3>
              <p className="text-medium-gray leading-relaxed">
                Our security specialists conduct a thorough assessment of your facility, identify vulnerabilities, and design a customized solution tailored to your business.
              </p>
            </div>
            {/* Step 2 */}
            <div className="glass-card p-8 relative border-t-4 border-t-electric-blue">
              <div className="absolute -top-5 left-8 bg-electric-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg shadow-[0_0_20px_rgba(0,180,216,0.3)]">
                2
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Get Your System</h3>
              <p className="text-medium-gray leading-relaxed">
                Professionally designed, configured, installed, and supported by our in-house veteran technician team. No subcontractors, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact Form ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Get Started"
            title="Request a Free Quote"
            subtitle="Tell us about your business and we'll design a custom security solution — no obligation."
          />
          <ContactForm
            formType="quote"
            title="Get Your Free Quote"
            subtitle="We'll respond within 24 hours with a custom recommendation."
          />
        </div>
      </section>
    </>
  );
}
