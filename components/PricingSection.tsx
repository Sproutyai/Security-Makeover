import Link from "next/link";

const plans = [
  {
    title: "LeapStack Core",
    description:
      "For service business owners ready to stop missing leads and build a professional online presence. Everything you need to get found, look legit, and never miss a customer again.",
    price: "$197",
    features: [
      "LeapStack Optimized Website",
      "5 Star Magic Review Funnel",
      "Automated Missed Call Text",
      "On-site Local SEO",
    ],
  },
  {
    title: "LeapStack Pro",
    description:
      "For service business owners ready to put their lead follow-up on 24/7 autopilot. Everything in Core plus AI that answers your missed calls, handles your website visitors 24/7, and nurtures leads automatically.",
    price: "$497",
    features: [
      "24/7 AI voice agent",
      "One Click Marketing Campaigns",
      "Mobile app access",
      "AI chatbot and appointment setter",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-[75px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Subheading */}
        <p className="text-center font-[var(--font-opensans)] text-[20px] md:text-[23px] font-medium text-royal-blue tracking-wide mb-3">
          Available LeapStack System plans
        </p>
        {/* Main heading */}
        <h2 className="text-center font-[var(--font-jakarta)] text-[36px] md:text-[44px] font-normal text-dark-text mb-14">
          Affordable Pricing
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-royal-blue rounded-[25px] p-8 md:p-10 flex flex-col flex-1 max-w-[540px]"
            >
              <h3 className="font-[var(--font-jakarta)] text-[28px] md:text-[32px] font-bold text-white mb-4">
                {plan.title}
              </h3>
              <p className="font-[var(--font-opensans)] text-base text-white/90 leading-relaxed mb-6">
                {plan.description}
              </p>
              <p className="font-[var(--font-jakarta)] text-[44px] font-extrabold text-white mb-2">
                {plan.price}
                <span className="text-lg font-normal text-white/70">/mo</span>
              </p>

              <Link
                href="#faq"
                className="block text-center bg-white text-royal-blue font-[var(--font-jakarta)] text-base rounded-full px-6 py-4 mt-4 mb-8 hover:bg-white/90 transition-colors"
              >
                Choose This Plan
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-3 h-3 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="font-[var(--font-opensans)] text-[15px] text-off-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
