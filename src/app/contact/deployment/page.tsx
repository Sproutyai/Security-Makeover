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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-navy via-navy to-charcoal bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            Rapid Response
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            REQUEST TRAILER DEPLOYMENT
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Need a mobile surveillance trailer on-site fast? Tell us about your location and timeline.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Trailer Image + Info */}
            <div>
              <div className="glass-card p-1 overflow-hidden mb-8">
                <Image
                  src="/images/trailer-product-1.png"
                  alt="All American Alarm Mobile Surveillance Trailer"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent rounded-xl pointer-events-none" />
              </div>

              {/* Key Benefits — Glass Cards */}
              <div className="space-y-3 mb-8">
                {[
                  'On-site in under 24 hours',
                  'Solar-powered — no external power needed',
                  '360° PTZ camera coverage',
                  '24/7 professional monitoring',
                  'LTE connectivity — works anywhere',
                ].map((benefit) => (
                  <div key={benefit} className="glass-card flex items-center gap-4 p-4 hover:border-electric-blue/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 group-hover:border-electric-blue/60 transition-colors">
                      <svg className="w-4 h-4 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Emergency Callout — Pulse/Glow */}
              <div className="glass-card p-6 border-red/40 relative overflow-hidden animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-red font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-red shadow-[0_0_12px_rgba(230,57,70,0.6)] animate-pulse" />
                    🚨 Emergency Deployment?
                  </h3>
                  <p className="text-medium-gray mb-4">
                    Same-day deployment available for urgent situations. Call us directly for immediate assistance.
                  </p>
                  <a
                    href="tel:239-334-7447"
                    className="inline-flex items-center gap-2 text-2xl font-black text-red hover:text-red-hover transition-colors"
                    style={{ textShadow: '0 0 20px rgba(230,57,70,0.4), 0 0 40px rgba(230,57,70,0.2)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    239-334-7447
                  </a>
                </div>
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
      </section>
    </>
  );
}
