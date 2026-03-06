import ContactForm from '@/components/ContactForm';
import { CheckCircleIcon } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Request a free, no-obligation security quote from All American Alarm. Mobile surveillance trailers, video surveillance, access control, and more.',
};

const steps = [
  {
    number: '1',
    title: 'Submit Your Info',
    description: 'Tell us about your property and security needs.',
  },
  {
    number: '2',
    title: 'Free Site Assessment',
    description: 'We schedule a visit to evaluate your location.',
  },
  {
    number: '3',
    title: 'Receive Your Quote',
    description: 'Custom quote delivered within 48 hours.',
  },
];

const trustSignals = [
  { label: 'Best Value Guaranteed', icon: '💰' },
  { label: 'No Subcontractors', icon: '🔧' },
  { label: 'Owner-Operated Since 2001', icon: '🏢' },
  { label: 'FL Licensed & Insured', icon: '🛡️' },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-navy via-navy to-charcoal bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            No Obligation
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            GET A FREE QUOTE
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Tell us about your security needs and we&apos;ll design a custom solution. No obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-30" />
        <div className="relative max-w-3xl mx-auto px-6">
          {/* 3-Step Process — Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {steps.map((step, i) => (
              <div key={step.number} className="glass-card p-6 text-center hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,180,216,0.1)] relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent group-hover:via-electric-blue transition-all duration-500" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 border-2 border-electric-blue/50 flex items-center justify-center mx-auto mb-4 group-hover:border-electric-blue group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300">
                  <span className="text-electric-blue font-black text-xl">{step.number}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-medium-gray text-sm">{step.description}</p>
                {/* Connector arrow (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-electric-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm formType="quote" />

          {/* Trust Signals — Visually Impactful */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="glass-card p-4 text-center hover:border-electric-blue/40 transition-all duration-300">
                <div className="text-2xl mb-2">{signal.icon}</div>
                <span className="text-medium-gray text-sm font-semibold block">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
