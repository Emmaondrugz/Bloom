"use client";

import { useState } from "react";
import Image from "next/image";
import NumberFlow from "@number-flow/react";
import SplitArrowAction from "../ui/split-arrow-action";
import RevealWords from "./reveal-words";

const plans = [
  {
    name: "Starter",
    description: "Best for new creators & small shops",
    monthlyPrice: 1499,
    features: [
      "1 storefront",
      "Up to 20 products",
      "Order & payment tracking",
      "Basic sales insights",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Advance",
    description: "Best for growing brands & full-time sellers",
    monthlyPrice: 5999,
    features: [
      "Unlimited storefronts",
      "Unlimited products",
      "Order & payment tracking",
      "Full sales insights",
      "Priority support",
    ],
    featured: true,
  },
] as const;

const YEARLY_DISCOUNT = 0.2;

function yearlyTotal(monthlyPrice: number) {
  return Math.round(monthlyPrice * 12 * (1 - YEARLY_DISCOUNT) * 100) / 100;
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [hasSwitched, setHasSwitched] = useState(false);

  const selectPeriod = (nextYearly: boolean) => {
    if (nextYearly === yearly) return;
    setYearly(nextYearly);
    setHasSwitched(true);
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="w-full bg-white px-4 max-w-350 py-20 sm:py-36 text-[#1d1918] sm:px-6 lg:px-5"
    >
      <div className="mx-auto grid w-full max-w-[1700px] gap-5 md:grid-cols-2 xl:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,1fr))]">
        <div className="flex min-w-0 flex-col justify-between gap-12 md:col-span-2 xl:col-span-1">
          <div>
            <span className="rounded-full bg-[#FEA8F1] px-4 py-1.5 text-base font-medium text-[#222]">
              Pricing
            </span>
            <h2
              id="pricing-heading"
              data-section-heading
              className="bricolage mt-6 text-[clamp(2.5rem,9vw,4.5rem)] leading-[0.99] tracking-[-0.065em] sm:text-6xl"
            >
              <RevealWords lines={["Flexible pricing", "for every stage"]} />
            </h2>
            <div
              role="group"
              aria-label="Billing period"
              className="relative mt-6 grid w-full max-w-[360px] grid-cols-2 rounded-full bg-[#f7f7f7] p-1"
            >
              <span
                key={yearly ? "yearly" : "monthly"}
                aria-hidden="true"
                className={`billing-switch-thumb ${yearly ? "billing-switch-thumb--right" : ""} ${hasSwitched ? (yearly ? "billing-switch-thumb--bounce-right" : "billing-switch-thumb--bounce-left") : ""}`}
              />
              <button
                type="button"
                aria-pressed={!yearly}
                onClick={() => selectPeriod(false)}
                className={`relative z-10 min-h-10 rounded-full text-lg font-semibold transition-colors sm:text-[18px] ${!yearly ? "text-[#1d1918]" : "text-[#5a5552]"}`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={yearly}
                onClick={() => selectPeriod(true)}
                className={`relative z-10 flex min-h-10 items-center justify-center gap-2 rounded-full transition-colors ${yearly ? "text-[#1d1918]" : "text-[#5a5552]"}`}
              >
                <span className="text-lg sm:text-[18px]">Yearly</span>
                <span className="text-[11px] font-semibold tracking-[0.05em] text-[#827c79] sm:text-sm">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="flex w-full max-w-[460px] items-center gap-4 rounded-2xl bg-[#f7f7f7] p-2.5 text-left transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1918]"
          >
            <span className="relative flex size-[70px] shrink-0 items-end rounded-[21px] bg-[#a78bfa]">
              <Image
                src="/profile1.jpg"
                alt=""
                width={100}
                height={100}
                className="size-full rounded-2xl object-cover"
              />
              <span className="absolute -top-1 -right-1 size-5 rounded-full border-2 border-[#f7f7f7] bg-[#94f57d]" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-[15px] leading-tight font-medium sm:text-[18px]">
                Need custom Website?
              </span>
              <span className="text-sm leading-tight text-[#827c79] sm:text-[16px]">
                Contact the dev
              </span>
            </span>
            <span className="flex p-2 shrink-0 self-start items-center justify-center rounded-full bg-[#e8e6e5]">
              <ArrowIcon />
            </span>
          </button>
        </div>

        {plans.map((plan) => (
          <article
            data-micro-group
            key={plan.name}
            className={`flex min-w-0 flex-col rounded-[40px] p-[15px] ${plan.featured ? "bg-[#1d1918] text-[#f7f7f7]" : "bg-[#f7f7f7] text-[#1d1918]"}`}
          >
            <div
              className={`min-h-[152px] rounded-[30px] p-5 ${plan.featured ? "bg-[#45413e]" : "bg-white"}`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="bricolage text-[25px] leading-tight font-bold tracking-[-0.045em]">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span
                    data-micro-item="spin"
                    className="mt-1 rounded-full bg-[#fea8f1] px-2.5 py-1 text-sm leading-none font-medium text-[#1d1918]"
                  >
                    POPULAR
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-sm leading-snug  ${plan.featured ? "text-[#d8d4d2]" : "text-[#827c79]"}`}
              >
                {plan.description}
              </p>
              <p className="mt-6 flex items-end gap-1 bricolage text-[clamp(1.75rem,8vw,3rem)] leading-none font-bold md:text-[clamp(1.75rem,5vw,3rem)]">
                <NumberFlow
                  value={yearly ? yearlyTotal(plan.monthlyPrice) : plan.monthlyPrice}
                  locales="en-NG"
                  prefix="₦"
                  format={{
                    minimumFractionDigits: yearly ? 2 : 0,
                    maximumFractionDigits: yearly ? 2 : 0,
                  }}
                  className="whitespace-nowrap tabular-nums"
                />
                <span className="mb-1 shrink-0 text-sm font-semibold tracking-normal sm:text-base">
                  /{yearly ? "YR" : "MO"}
                </span>
              </p>
              <p
                className={`mt-2 text-sm ${plan.featured ? "text-[#d8d4d2]" : "text-[#827c79]"}`}
              >
                {yearly
                  ? `₦${(plan.monthlyPrice * (1 - YEARLY_DISCOUNT)).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo equivalent · billed yearly`
                  : "Billed monthly"}
              </p>
            </div>
            <ul className="flex flex-1 flex-col gap-5 px-5 pt-9 pb-10 text-sm leading-snug sm:text-base">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3.5">
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-[#aa8bf9] text-[#1d1918]" : "bg-[#d0ccca] text-[#f7f7f7]"}`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3.5"
                    >
                      <path d="m3.5 8 3 3 6-6" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <SplitArrowAction
              size="large"
              tone={plan.featured ? "light" : "dark"}
              className="w-full bricolage text-xl font-bold tracking-[-0.04em]"
            >
              Get {plan.name} Plan
            </SplitArrowAction>
          </article>
        ))}
      </div>
    </section>
  );
}
