import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import PhoneCTA from '@/components/PhoneCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Trailer Deployment',
  description: 'Request a mobile surveillance trailer deployment from All American Alarm. Same-day emergency deployment available. Call 239-334-7447.',
};

export default function DeploymentPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
            Rapid Response
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            REQUEST TRAILER DEPLOYMENT
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Need a mobile surveillance trailer on-site fast? Tell us about your location and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Trailer Image + Info */}
          <div>
            <div className="rounded-lg overflow-hidden border border-border-dark mb-8">
              <Image
                src="/images/trailer-product-1.png"
                alt="All American Alarm Mobile Surveillance Trailer"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'On-site in under 24 hours',
                'Solar-powered — no external power needed',
                '360° PTZ camera coverage',
                '24/7 professional monitoring',
                'LTE connectivity — works anywhere',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Emergency Callout */}
            <div className="bg-red/10 border border-red/30 rounded-lg p-6">
              <h3 className="text-red font-bold text-lg mb-2">🚨 Emergency Deployment?</h3>
              <p className="text-medium-gray mb-3">
                Same-day deployment available for urgent situations. Call us directly for immediate assistance.
              </p>
              <PhoneCTA className="text-xl" />
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <ContactForm
              formType="deployment"
              title="Deployment Details"
              subtitle="Our team will contact you within 2 hours during business hours."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
