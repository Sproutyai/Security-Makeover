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
  'Best Value Guaranteed',
  'No Subcontractors',
  'Owner-Operated Since 2001',
  'FL Licensed & Insured',
];

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
            No Obligation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            GET A FREE QUOTE
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Tell us about your security needs and we&apos;ll design a custom solution. No obligation, no pressure.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-electric-blue/10 border-2 border-electric-blue flex items-center justify-center mx-auto mb-4">
                <span className="text-electric-blue font-extrabold text-xl">{step.number}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-medium-gray text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <ContactForm formType="quote" />

        {/* Trust Signals */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-2 justify-center">
              <CheckCircleIcon className="w-5 h-5 text-electric-blue flex-shrink-0" />
              <span className="text-medium-gray text-sm font-medium">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
