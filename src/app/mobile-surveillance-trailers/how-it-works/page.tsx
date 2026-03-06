'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import ContactForm from '@/components/ContactForm';
import PhoneCTA from '@/components/PhoneCTA';
import { CheckCircleIcon } from '@/components/Icons';

const steps = [
  {
    number: '01',
    title: 'Contact & Consultation',
    description:
      'Call 239-334-7447 or submit a request. Our deployment team responds within 2 hours during business hours.',
  },
  {
    number: '02',
    title: 'Free Site Assessment',
    description:
      'A security specialist visits your site to evaluate terrain, access points, power availability, and camera placement.',
  },
  {
    number: '03',
    title: 'Custom Solution Design',
    description:
      'We design your surveillance layout — number of cameras, trailer positioning, monitoring schedule, and alert protocols.',
  },
  {
    number: '04',
    title: 'Delivery & Setup',
    description:
      'Our technicians deliver and position the trailer, aim cameras, test connectivity, and activate monitoring.',
  },
  {
    number: '05',
    title: '24/7 Monitoring Begins',
    description:
      'Your site is now under continuous professional surveillance with real-time alerts sent to your phone.',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description:
      'Regular maintenance, camera adjustments, and system checks. Relocate the trailer as your needs change.',
  },
];

const faqs = [
  {
    question: 'How fast can you deploy?',
    answer:
      'In most cases, we can have a trailer on-site within 24 hours of assessment. Emergency same-day deployments are available for urgent situations.',
  },
  {
    question: 'Do I need power on-site?',
    answer:
      'No. Our trailers run on solar with battery storage and generator backup. They operate completely autonomously — no external power required.',
  },
  {
    question: 'Can I view the cameras myself?',
    answer:
      'Yes. You get full remote access via mobile app and web dashboard to view live feeds, playback recordings, and manage alert settings.',
  },
  {
    question: 'What happens when the trailer detects activity?',
    answer:
      'Our monitoring center verifies the alert and can trigger alarms, contact police, or use two-way audio to address trespassers directly.',
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ════════════════════════════════════════════ HERO */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-navy bg-grid-pattern" />
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-electric-blue mb-4">
            Our Process
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6">
            How It <span className="text-electric-blue text-glow-blue">Works</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto leading-relaxed">
            From first call to full operation — our streamlined deployment
            process gets you protected fast.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ 6-STEP TIMELINE */}
      <section className="relative bg-charcoal py-20 md:py-28 bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Step by Step"
            title="6 Steps to Full Protection"
            subtitle="A proven process refined over 25+ years of security deployments."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/50 via-electric-blue/20 to-border-dark" />

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-electric-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,180,216,0.3)]">
                    <span className="text-navy font-mono font-extrabold text-sm md:text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="glass-card p-6 md:p-8 flex-1 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ MINI FAQ */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Common Questions"
            title="Quick Answers"
            subtitle="The most common questions about our deployment process."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-navy/50 transition-colors"
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-electric-blue flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-medium-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ CTA */}
      <section className="relative bg-charcoal py-20 md:py-28 border-t border-border-dark bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Request a Free Site Assessment
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed mb-8">
                Our security specialist will visit your site, evaluate your
                needs, and recommend the best deployment strategy — completely
                free, no obligation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'No obligation site assessment',
                  'Custom deployment plan',
                  'Transparent pricing — no hidden fees',
                  'Emergency deployment available',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-electric-blue" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              <PhoneCTA />
            </div>
            <ContactForm
              formType="deployment"
              title="Request Site Assessment"
              subtitle="We'll respond within 2 hours during business hours."
            />
          </div>
        </div>
      </section>
    </>
  );
}
