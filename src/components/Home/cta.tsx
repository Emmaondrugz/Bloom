"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SplitArrowAction from "../ui/split-arrow-action";
import RevealWords from "./reveal-words";

export default function Cta() {
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const line = lineRef.current;
    if (!card || !line) return;

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    let animation: Animation | undefined;

    const drawLine = () => {
      animation = line.animate(
        [{ strokeDashoffset: `${length}` }, { strokeDashoffset: "0" }],
        {
          duration: 1000,
          delay: 500,
          easing: "ease-in-out",
          fill: "forwards",
        },
      );
      animation.onfinish = () => {
        line.style.strokeDashoffset = "0";
        animation?.cancel();
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          drawLine();
        }
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 0 },
    );

    observer.observe(card);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, []);

  return (
    <section className="w-full px-4 pt-20 sm:px-8 sm:pt-36 sm:pb-6 pb-5">
      <div className="mx-auto flex w-full max-w-350 flex-col gap-5 md:flex-row">
        <div
          ref={cardRef}
          className="relative flex min-h-160 w-full flex-col overflow-hidden rounded-3xl bg-[#1c1a19] px-5 pb-5 pt-52 text-[#f9f8f7] sm:px-8 sm:pb-8 md:w-110 md:shrink-0"
        >
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-46 w-full"
            viewBox="0 0 500 185"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M-15 173C58 180 137 180 155 130C179 64 130 37 101 57C62 84 109 115 202 118C324 122 455 62 505 -9"
              stroke="#f5a0ea"
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          <div className="flex flex-1 flex-col">
            <h2
              data-section-heading
              className="sans_serif text-6xl font-bold leading-[0.98] tracking-[-0.065em] sm:text-6xl"
            >
              <RevealWords lines={["Handle", "sales from", "anywhere"]} />
            </h2>
            <p className="sans_serif mt-7 max-w-90 text-lg leading-[1.32] text-[#c9c5c3] sm:text-[20px]">
              Bloom helps you create a storefront, share what you make, and turn
              your ideas into sales.
            </p>

            <div className="mt-auto pt-12">
              <SplitArrowAction
                href="#pricing"
                tone="light"
                size="large"
                className="w-full sans_serif text-xl"
              >
                Start selling
              </SplitArrowAction>
            </div>
          </div>
        </div>
        <div className="relative min-h-100 w-full overflow-hidden rounded-3xl md:min-h-160 md:min-w-0 md:flex-1">
          <Image
            src="/cta-woman-phone.webp"
            alt="Woman smiling while using her phone on a sofa"
            fill
            sizes="(min-width: 1440px) 900px, (min-width: 768px) 60vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
    </section>
  );
}
