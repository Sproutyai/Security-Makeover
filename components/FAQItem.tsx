"use client";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-muted-purple/20">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-4 text-left focus:outline-none"
      >
        <h4 className="font-[var(--font-inter)] text-lg font-bold text-muted-purple pr-4">
          {question}
        </h4>
        <svg
          className={`w-5 h-5 text-muted-purple flex-shrink-0 chevron ${isOpen ? "rotate" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p className="px-4 pb-5 font-[var(--font-opensans)] text-base text-muted-purple leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
