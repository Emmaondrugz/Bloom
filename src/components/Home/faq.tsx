"use client";

import { useState } from "react";
import RevealWords from "./reveal-words";

const faqs = [
  {
    question: "What is Bloom?",
    answer:
      "Bloom is a simple storefront builder. Create your online store, add products, and start selling in minutes, with no coding required.",
  },
  {
    question: "What can I sell on Bloom?",
    answer:
      "Digital downloads, courses, ebooks, templates, services, and physical products.",
  },
  {
    question: "How much does Bloom cost?",
    answer:
      "You can start for free. Bloom only takes a small fee when you make a sale.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Customers pay at checkout and your earnings go to your connected bank account. Withdraw anytime from your dashboard.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. Connect a custom domain to your store, or use your free Bloom link.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full bg-white px-4 py-20 sm:px-8 sm:py-36"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-12 sm:gap-16">
        <h2
          id="faq-heading"
          data-section-heading
          className="bricolage max-w-170 text-center text-[43px] leading-[100%] tracking-tight text-[#111] sm:text-6xl"
        >
          <RevealWords lines={["Frequently Asked", "Questions"]} />
        </h2>

        <div className="sans_serif flex w-full max-w-200 flex-col gap-4 sm:gap-5">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                data-micro-group
                key={question}
                className="rounded-[20px] bg-[#f7f7f7] px-5 py-5 sm:px-6 sm:py-5"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl bg-[#f7f7f7] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58cff]"
                  >
                    <span className="text-xl font-semibold leading-snug tracking-tight text-[#222] sm:text-2xl">
                      {question}
                    </span>
                    <span data-micro-item="pop" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#a58cff] text-white">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="size-6"
                      >
                        {isOpen ? (
                          <path d="M5 5l14 14M19 5 5 19" />
                        ) : (
                          <path d="M12 4v16M4 12h16" />
                        )}
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pt-5 sm:pr-10 text-lg text-[#3b3b3b] sm:text-2xl sm:leading-[130%]">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
