"use client";
import Price_box from "../ui/price_box";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface PricingPlan {
  type: string;
  text: string;
  amount: string;
  features: string[];
  button: string;
}

const Price_section: React.FC = () => {
  const pricing: PricingPlan[] = [
    {
      type: "Starter",
      text: "Best for individuals, small businesses and rising creators.",
      amount: "$0.99",
      features: [
        "20 Products",
        "Instant Payouts",
        "Email Support",
        "500MB File & Video Storage Limit",
        "5% fee per sale",
      ],
      button: "Start now",
    },
    {
      type: "Premium",
      text: "Perfect big businesses, content and digital entrepreneurs.",
      amount: "$8.99",
      features: [
        "20 Products",
        "Instant Payouts",
        "Email Support",
        "500MB File & Video Storage Limit",
        "5% fee per sale",
      ],
      button: "Start now",
    },
  ];
  const headerRef = useRef<HTMLDivElement>(null);
  const priceOneRef = useRef<HTMLDivElement>(null);
  const priceTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // Animate price one
    if (priceOneRef.current) {
      gsap.fromTo(
        priceOneRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: priceOneRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Animate price two
    if (priceTwoRef.current) {
      gsap.fromTo(
        priceTwoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: priceTwoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center gap-16 py-16"
      id="pricing"
    >
      {/* section's header */}
      <div ref={headerRef} className="flex flex-col gap-6 text-center">
        <div className="flex items-center font-medium justify-center gap-2 text-[#1f514c]">
          <div className="w-2 h-2 bg-[#1f514c] rounded-full">
            <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
          </div>
          <p className="text-sm">Pricing</p>
        </div>
        <div className="sm:text-5xl leading-[130%] text-4xl max-w-[600px] hedvig">
          Flexible pricing for your business needs
        </div>
      </div>

      {/* pricing boxes */}
      <div className="flex md:justify-between justify-center items-center gap-5 flex-wrap md:flex-nowrap">
        <Price_box detail={pricing[0]} index={0} key={0} ref={priceOneRef} />
        <Price_box detail={pricing[1]} index={1} key={1} ref={priceTwoRef} />
      </div>
    </div>
  );
};

export default Price_section;
