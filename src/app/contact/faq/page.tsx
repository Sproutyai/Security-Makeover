'use client';

import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: 'Mobile Surveillance Trailers',
    items: [
      {
        question: 'How quickly can you deploy a trailer?',
        answer: 'In most cases, we can have a trailer on-site within 24 hours of completing a site assessment. Emergency deployments may be available same-day.',
      },
      {
        question: 'Do I need power or internet at the site?',
        answer: 'No. Our trailers are fully autonomous with solar panels, battery storage, and generator backup. They connect via LTE cellular, so no internet connection is needed.',
      },
      {
        question: 'How does monitoring work?',
        answer: 'Our professional monitoring center watches your cameras 24/7. When activity is detected, they verify the alert and can trigger alarms, contact police, or use two-way audio to address trespassers.',
      },
      {
        question: 'Can I view the cameras myself?',
        answer: 'Yes. You get full remote access via mobile app and web dashboard to view live feeds, playback recordings, and manage alerts.',
      },
      {
        question: 'What if my project moves to a new location?',
        answer: "That's the beauty of mobile surveillance. We'll relocate the trailer to your new site — just give us a call.",
      },
      {
        question: 'How much does it cost?',
        answer: 'Pricing depends on the number of trailers, cameras, monitoring level, and deployment duration. Contact us for a free quote. In most cases, mobile surveillance costs significantly less than hiring security guards.',
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve all of Southwest Florida including Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, and Lehigh Acres. Contact us to confirm coverage for your specific location.',
      },
    ],
  },
  {
    title: 'Commercial Security',
    items: [
      {
        question: 'What brands do you use?',
        answer: 'We use DMP (Digital Monitoring Products) for alarm systems — American-made and trusted by government and banking facilities. All our surveillance cameras are NDAA-compliant.',
      },
      {
        question: 'Do you offer monitoring?',
        answer: 'Yes. We provide 24/7 Five Diamond monitoring through our American-based monitoring center.',
      },
      {
        question: 'Can you upgrade my existing system?',
        answer: 'Absolutely. DMP systems support zone takeover, meaning we can integrate with your existing wiring and sensors while upgrading the panel and monitoring.',
      },
      {
        question: 'Do you use subcontractors?',
        answer: 'Never. All our technicians are in-house employees — no subcontractors.',
      },
      {
        question: 'What if I need multiple services?',
        answer: "We're a one-stop-shop. Security, fire, surveillance, access control, networking, and cloud — all from one team with one point of contact.",
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        question: 'How long have you been in business?',
        answer: 'All American Alarm was founded in 2001. Our owner, Sy Ali, has been in the security business since 1992 — over 30 years of experience.',
      },
      {
        question: 'Are you licensed?',
        answer: 'Yes. We hold Florida licenses #EF20002028 and #EG13000164.',
      },
      {
        question: 'Do you offer financing?',
        answer: 'Yes, financing options are available for qualifying businesses. Ask us during your consultation.',
      },
    ],
  },
];

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-dark rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-dark-surface/50 transition-colors"
      >
        <span className="text-white font-semibold text-lg pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-electric-blue flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-medium-gray leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Everything you need to know about our mobile surveillance trailers and commercial security services.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-electric-blue uppercase tracking-wide mb-6">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-dark-surface border border-border-dark rounded-lg p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-medium-gray text-lg mb-6">
            Call us at <a href="tel:239-334-7447" className="text-electric-blue font-semibold">239-334-7447</a> or send us a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="primary">
              Contact Us
            </CTAButton>
            <CTAButton href="/contact/quote" variant="secondary">
              Get a Free Quote
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
