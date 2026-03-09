"use client";
import { useState } from "react";
import Link from "next/link";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Question 1: Is there a contract?",
    answer:
      "No. We see this way, if it's affordable and works why would we need to lock you in with a contract? If you are happy you will stay. Cancel anytime you want, it's on us to make sure you don't want to in the first place!",
  },
  {
    question: "Question 2: What set up fees are there?",
    answer:
      "Unlike many marketing agencies we actually do not charge any set up fees. We make 100% of our money from just the monthly subscription you pay. We are looking for people that we can help win and grow in business for years...we'd rather you keep more funds available for your business!",
  },
  {
    question:
      "Question 3: Will this help my business appear higher up on google searches? (SEO)",
    answer:
      "Every LeapStack website is built with Google in mind from day one. We handle keyword research, alt tags, meta tags, header titles, SSL certification, and speed optimization so your site is set up to rank. Your actual Google ranking depends on factors like how long your site has been live, local competition, and your Google Business Profile reviews. We also offer blog content to strengthen your search presence. While we don't manage off-page backlinks beyond your social media, we provide ongoing updates to keep your site performing — we don't build it and disappear.",
  },
  {
    question: "Question 4: Can I add my own touches to my site?",
    answer:
      "Part of our value we provide for the monthly subscription payment is ongoing change requests, constant improvement to our systems, and client success support. During onboarding we will ask for photos of your services and business to put on the site as well for any specific requests as well.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-light-lavender py-[60px]">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-center font-[var(--font-jakarta)] text-[30px] md:text-[36px] font-bold text-dark-text mb-10">
          <strong>Frequently Asked Questions</strong>
        </h2>

        <div className="mb-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="font-[var(--font-jakarta)] text-xl text-dark-text mb-6">
            Still have questions?
          </p>
          <Link
            href="#faq"
            className="inline-block bg-bright-blue text-white font-[var(--font-opensans)] text-base font-bold rounded px-8 py-5 tracking-wide hover:opacity-90 transition-opacity"
          >
            Book A Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
