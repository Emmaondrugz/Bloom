"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FaqItem {
    question: string;
    answer: string;
}

const Faq: React.FC = () => {
    const faqData: FaqItem[] = [
        {
            question: "How do I receive payments from my customers?",
            answer: "Payments are processed securely and deposited into your wallet within 24-48 hours. You can withdraw funds to your bank account anytime."
        },
        {
            question: "What are the withdrawal fees?",
            answer: "We charge 0.5% per withdrawal. No fees for keeping funds in your wallet, so you can accumulate and withdraw to minimize costs."
        },
        {
            question: "What is the minimum withdrawal?",
            answer: "The minimum withdrawal is $10 with no maximum limit. Withdraw as much as you have available."
        },
        {
            question: "Can I receive payments in foreign currencies?",
            answer: "Yes! Enable multi-currency in settings. Funds are held in the original currency and you can withdraw or convert to local currency."
        },
        {
            question: "What payment methods can my customers use?",
            answer: "Credit/debit cards, bank transfers, mobile money, and digital wallets. Enable or disable methods in your store settings."
        },
        {
            question: "How long does it take to set up my online store?",
            answer: "Minutes! Sign up, input store details, add products, and get your unique store link immediately."
        },
        {
            question: "Can I customize my store link?",
            answer: "Yes! Customize your URL to eg. Myphonestore.com (Available on paid premium)."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animate each FAQ item individually with increasing delay
        faqItemRefs.current.forEach((itemRef, index) => {
            if (itemRef) {
                gsap.fromTo(
                    itemRef,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: itemRef,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-16 py-16">
            {/* section's header */}
            <div className="flex flex-col gap-6 text-center">
                <div className="flex items-center font-medium justify-center gap-2 text-[#1f514c]">
                    <div className="w-2 h-2 bg-[#1f514c] rounded-full">
                        <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
                    </div>
                    <p className="text-sm">FAQ</p>
                </div>
                <div className="sm:text-5xl leading-[130%] text-4xl max-w-[600px] hedvig">
                    Answers to your most common questions
                </div>
            </div>

            {/* Frequently asked questions */}
            <div className="w-full max-w-3xl px-4">
                {faqData.map((faq, index) => (
                    <div
                        ref={(el) => {
                            faqItemRefs.current[index] = el;
                        }}
                        key={index}
                        className="border-b border-gray-200 last:border-b-0"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full py-5 flex items-center justify-between text-left gap-4 hover:text-[#1f514c] transition-colors"
                        >
                            <span className="sm:text-lg font-medium pr-4">
                                {faq.question}
                            </span>

                            <div className="bg-[#1f514c] flex items-center justify-center p-1 rounded-full text-white">
                                <svg
                                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>

                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mb-6" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;