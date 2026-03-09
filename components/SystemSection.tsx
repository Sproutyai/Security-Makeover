"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Web Design & Development",
    labelItalic: false,
    heading:
      "Get a website that instantly turns leads into text conversations that go DIRECTLY to your phone.",
    bullets: [
      "Responsive website design",
      "Mobile User Optimized (Roughly 70% of visitors)",
      "Simple interface, no fluff",
      "Automated lead capture features",
    ],
  },
  {
    label: "5-Star Magic Review Funnel",
    labelItalic: true,
    heading:
      "Automatically collect 5-star reviews from happy customers and filter out unhappy ones before they go public.",
    bullets: [
      "Automated review request via text",
      "Smart routing based on sentiment",
      "Google review link integration",
      "Review monitoring dashboard",
    ],
  },
  {
    label: "Easy to use CRM",
    labelItalic: false,
    heading:
      "Keep track of every lead, customer, and conversation in one simple dashboard built for busy business owners.",
    bullets: [
      "Contact management",
      "Conversation history tracking",
      "Pipeline & deal stages",
      "Tag and segment contacts",
    ],
  },
  {
    label: "Missed Call Text Back",
    labelItalic: false,
    heading:
      "Never lose a lead to a missed call again. An automatic text is sent the moment you can't pick up.",
    bullets: [
      "Instant text on missed calls",
      "Customizable message templates",
      "Works 24/7 automatically",
      "Captures lead info via text",
    ],
  },
  {
    label: "One Click Marketing Campaigns",
    labelItalic: false,
    heading:
      "Send promotions, updates, and re-engagement campaigns to your entire customer list in one click.",
    bullets: [
      "SMS & email campaigns",
      "Pre-built templates",
      "Audience segmentation",
      "Campaign performance tracking",
    ],
  },
  {
    label: "Ai Voice Agent & Chatbot",
    labelItalic: false,
    heading:
      "Let AI answer your calls and website chats 24/7 so you never miss an opportunity, even at 2am.",
    bullets: [
      "AI-powered phone answering",
      "Website chatbot integration",
      "Appointment booking via AI",
      "Lead qualification on autopilot",
    ],
  },
  {
    label: "Mobile App",
    labelItalic: false,
    heading:
      "Manage your leads, respond to messages, and track your business from anywhere with the LeapStack mobile app.",
    bullets: [
      "iOS & Android compatible",
      "Real-time lead notifications",
      "Respond to leads on the go",
      "Full CRM access from your phone",
    ],
  },
];

export default function SystemSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="system" className="bg-navy py-0">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="font-[var(--font-jakarta)] text-[36px] md:text-[48px] font-bold italic text-white">
          <strong><em>The LeapStack Marketing System™</em></strong>
        </h2>
      </div>

      {/* Two column layout */}
      <div className="max-w-[1200px] mx-auto px-6 pb-[75px] flex flex-col md:flex-row gap-8">
        {/* Left sidebar */}
        <div className="md:w-[40%] w-full flex flex-col gap-1">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-left font-[var(--font-jakarta)] text-lg font-semibold px-6 py-4 rounded-lg transition-all ${
                i === activeTab
                  ? "bg-white text-dark-text"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {tab.labelItalic ? (
                <>
                  5-Star <em>Magic Review Funnel</em>
                </>
              ) : (
                tab.label
              )}
            </button>
          ))}
        </div>

        {/* Right content panel */}
        <div className="md:w-[60%] w-full bg-off-white rounded-[25px] p-8 md:p-10 flex flex-col justify-center min-h-[470px]">
          <h3 className="font-[var(--font-jakarta)] text-[22px] md:text-[26px] font-semibold text-dark-text italic leading-snug mb-8">
            <strong><em>{current.heading}</em></strong>
          </h3>
          <ul className="space-y-4">
            {current.bullets.map((bullet, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-royal-blue flex-shrink-0" />
                <span className="font-[var(--font-opensans)] text-base text-dark-text">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
