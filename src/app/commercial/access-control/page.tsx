import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
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
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        <Image
          src="/images/access-control.jpg"
          alt="Commercial access control system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Access Control
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            EMPLOYEE ACCESS CONTROL
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            Control who enters, when they enter, and where they can go. Simplify security management.
          </p>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Key Features"
            title="Complete Control Over Your Facility"
            subtitle="Modern access control that eliminates traditional key headaches."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ClockIcon className="w-8 h-8" />}
              title="Custom Business Hours"
              description="Automatic lock and unlock schedules. Doors secure themselves after hours — no human error."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="Employee User Control"
              description="Individual credentials for every employee. Know exactly who accessed what, and when."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8" />}
              title="Employee Safety"
              description="Know who is in the building at all times. Critical for emergencies and roll-call situations."
            />
            <FeatureCard
              icon={<LockIcon className="w-8 h-8" />}
              title="Simplify Turnover"
              description="Deactivate credentials instantly when employees leave. No re-keying, no security gaps."
            />
            <FeatureCard
              icon={<ChartIcon className="w-8 h-8" />}
              title="Access Levels"
              description="Restrict sensitive areas — server rooms, storage, executive offices — to authorized personnel only."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="Keyless Entry"
              description="Cards, fobs, mobile credentials, and biometric options. No more lost keys or lock changes."
            />
            <FeatureCard
              icon={<ChartIcon className="w-8 h-8" />}
              title="Audit Trail"
              description="Complete log of all access events. Invaluable for compliance, investigations, and HR management."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="Remote Management"
              description="Lock or unlock doors, manage credentials, and review access logs from anywhere via the app."
            />
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
            <div className="rounded-lg overflow-hidden border border-border-dark">
              <Image
                src="/images/entry-system.jpg"
                alt="Commercial entry system"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-dark-surface">
                <h3 className="text-white font-bold">Commercial Entry Systems</h3>
                <p className="text-medium-gray text-sm mt-1">Touchscreen panels, card readers, and intercom systems for main entrances.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border-dark">
              <Image
                src="/images/keyless-entry.jpg"
                alt="Keyless entry system"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-dark-surface">
                <h3 className="text-white font-bold">Keyless Entry Solutions</h3>
                <p className="text-medium-gray text-sm mt-1">Mobile credentials, fob readers, and biometric options for every door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-charcoal">
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
