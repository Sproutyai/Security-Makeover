import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { CameraIcon, LockIcon, ShieldIcon, FireIcon, BoltIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Commercial Security Solutions',
  description:
    'Comprehensive commercial security for Southwest Florida businesses — video surveillance, access control, alarm systems, fire alarms, and integrated solutions.',
};

export default function CommercialPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Protect Your Business
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            COMMERCIAL SECURITY SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            Comprehensive security for Southwest Florida businesses. From surveillance to access control, fire alarms to integrated systems.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Commercial Services"
            title="Everything Your Business Needs — Under One Roof"
            subtitle="We design, install, monitor, and maintain every system. One vendor, one point of contact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<CameraIcon className="w-10 h-10" />}
              title="Video Surveillance & AI"
              description="NDAA-compliant cameras with AI-powered analytics, cloud backup, and remote viewing from any device."
              href="/commercial/video-surveillance"
            />
            <ServiceCard
              icon={<LockIcon className="w-10 h-10" />}
              title="Access Control"
              description="Custom business hours, employee management, keyless entry, and multi-level access control."
              href="/commercial/access-control"
            />
            <ServiceCard
              icon={<ShieldIcon className="w-10 h-10" />}
              title="Alarm Systems"
              description="Commercial-grade DMP alarm systems with 24/7 Five Diamond monitoring. Used in government and banking."
              href="/commercial/alarm-systems"
            />
            <ServiceCard
              icon={<FireIcon className="w-10 h-10" />}
              title="Fire Alarm Systems"
              description="Installation, monitoring, and inspection for education, healthcare, retail, and government facilities."
              href="/commercial/fire-alarms"
            />
            <ServiceCard
              icon={<BoltIcon className="w-10 h-10" />}
              title="Integrated Solutions"
              description="One-stop-shop: security, fire, surveillance, access, networking, and cloud — all working together."
              href="/commercial/integrated-solutions"
            />
          </div>
        </div>
      </section>

      {/* ── 2 Steps Section ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Simple Process"
            title="Your New System in 2 Steps"
            subtitle="We handle everything so you can focus on running your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8 relative">
              <div className="absolute -top-5 left-8 bg-electric-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Expert Analysis</h3>
              <p className="text-medium-gray leading-relaxed">
                Our security specialists conduct a thorough assessment of your facility, identify vulnerabilities, and design a customized solution tailored to your business.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8 relative">
              <div className="absolute -top-5 left-8 bg-electric-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg">
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
      <section className="py-20 md:py-28 bg-charcoal">
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
