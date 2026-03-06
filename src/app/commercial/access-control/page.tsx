import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { LockIcon, ClockIcon, ShieldIcon, CheckCircleIcon, WifiIcon, ChartIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Access Control',
  description:
    'Commercial access control systems — keyless entry, employee management, audit trails, and remote management for Southwest Florida businesses.',
};

export default function AccessControlPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <Image
          src="/images/access-control.jpg"
          alt="Commercial access control system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Access Control
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
            Employee Access{' '}
            <span className="text-electric-blue text-glow-blue">Control</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            Control who enters, when they enter, and where they can go. Simplify security management.
          </p>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Key Features"
            title="Complete Control Over Your Facility"
            subtitle="Modern access control that eliminates traditional key headaches."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ClockIcon className="w-8 h-8" />, title: 'Custom Business Hours', description: 'Automatic lock and unlock schedules. Doors secure themselves after hours — no human error.' },
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'Employee User Control', description: 'Individual credentials for every employee. Know exactly who accessed what, and when.' },
              { icon: <CheckCircleIcon className="w-8 h-8" />, title: 'Employee Safety', description: 'Know who is in the building at all times. Critical for emergencies and roll-call situations.' },
              { icon: <LockIcon className="w-8 h-8" />, title: 'Simplify Turnover', description: 'Deactivate credentials instantly when employees leave. No re-keying, no security gaps.' },
              { icon: <ChartIcon className="w-8 h-8" />, title: 'Access Levels', description: 'Restrict sensitive areas — server rooms, storage, executive offices — to authorized personnel only.' },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'Keyless Entry', description: 'Cards, fobs, mobile credentials, and biometric options. No more lost keys or lock changes.' },
              { icon: <ChartIcon className="w-8 h-8" />, title: 'Audit Trail', description: 'Complete log of all access events. Invaluable for compliance, investigations, and HR management.' },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'Remote Management', description: 'Lock or unlock doors, manage credentials, and review access logs from anywhere via the app.' },
            ].map((f) => (
              <div key={f.title} className="glass-card p-7 border-t-2 border-t-electric-blue/30 hover:border-t-electric-blue transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group">
                <div className="text-electric-blue mb-4 w-12 h-12 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{f.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Solutions"
            title="Access Control in Action"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="relative">
                <Image
                  src="/images/entry-system.jpg"
                  alt="Commercial entry system"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold group-hover:text-electric-blue transition-colors">Commercial Entry Systems</h3>
                <p className="text-medium-gray text-sm mt-1">Touchscreen panels, card readers, and intercom systems for main entrances.</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="relative">
                <Image
                  src="/images/keyless-entry.jpg"
                  alt="Keyless entry system"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold group-hover:text-electric-blue transition-colors">Keyless Entry Solutions</h3>
                <p className="text-medium-gray text-sm mt-1">Mobile credentials, fob readers, and biometric options for every door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Get Started"
            title="Upgrade Your Access Control"
            subtitle="Let us design a system that fits your facility, your team, and your budget."
          />
          <ContactForm
            formType="quote"
            title="Request a Free Consultation"
            subtitle="We'll evaluate your facility and recommend the right access control solution."
          />
        </div>
      </section>
    </>
  );
}
