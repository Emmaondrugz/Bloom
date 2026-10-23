"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "./testimonials-data";
import SplitArrowAction from "../ui/split-arrow-action";
import RevealWords from "./reveal-words";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VERTICAL_SCROLL_DRIFT = 0.35;

function RatingStars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className="flex size-6 items-center justify-center rounded-[4px] bg-[#FFA451] text-white"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
            <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.8l-6.3 3.3 1.2-6.9-5-4.9 7-1L12 2Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 640px)", () => {
      const scrollDistance = () => track.scrollWidth - track.clientWidth;
      if (scrollDistance() <= 0) return;

      let previousProgress = 0;

      ScrollTrigger.create({
        trigger: carousel,
        start: "top bottom",
        end: "top top",
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          track.scrollLeft +=
            (self.progress - previousProgress) *
            scrollDistance() *
            VERTICAL_SCROLL_DRIFT;
          previousProgress = self.progress;
        },
        onRefresh: (self) => {
          previousProgress = self.progress;
        },
      });
    });

    return () => media.revert();
  }, []);

  return (
    <section id="testimonials" className="flex w-full flex-col items-center gap-12 pt-20 pb-20 sm:gap-16 sm:pt-28 sm:pb-20">
      <div data-micro-group className="flex  max-w-350 w-full items-center px-4 sm:px-8 justify-between gap-8">
        <div className="flex flex-col items-start gap-3 text-left">
          <span data-micro-item="bounce" className="rounded-full bg-[#FEA8F1] px-4 py-1.5 text-base font-medium text-[#222]">
            Testimonials
          </span>
          <h2
            data-section-heading
            className="bricolage relative z-20 max-w-170 text-left text-[46px] leading-none tracking-tight text-[#111] sm:text-6xl"
          >
            <RevealWords lines={["Loved by sellers", "and founders"]} />
          </h2>
        </div>

        <p className="hidden max-w-120 text-right text-xl text-[#222] lg:block">
          From first product to first thousand sales, these are the stories of
          creators who chose Bloom to power their business
        </p>
      </div>

      <div
        ref={carouselRef}
        className="relative w-full min-w-0 max-w-screen rounded-[28px] bg-white"
      >
        <ul
          ref={trackRef}
          className="testimonial-track flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 py-4 sm:snap-none sm:gap-5 sm:px-7 sm:py-6"
          aria-label="Seller testimonials"
          tabIndex={0}
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.image}
              className="flex min-h-[440px] w-[min(88vw,340px)] shrink-0 snap-center rounded-[24px] bg-[#f9f9f9] p-5 sm:min-h-[410px] sm:w-[600px] sm:p-5"
            >
              <article className="flex min-w-0 flex-1 gap-5">
                <div className="relative hidden w-[220px] shrink-0 overflow-hidden rounded-[16px] sm:block">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    fill
                    sizes="220px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col items-start">
                  <RatingStars />
                  <div className="mt-10 sm:mt-12">
                    <h3 className="bricolage text-[24px] leading-[1.15] font-semibold tracking-tight text-[#1c1917] sm:text-[26px]">
                      {testimonial.title}
                    </h3>
                    <p className="mt-4 text-[17px] leading-[1.4] text-[#56514e] sm:text-[18px]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:hidden">
                      <Image
                        src={testimonial.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#1c1917] sm:text-[20px]">
                        {testimonial.name}
                      </p>
                      <p className="text-[15px] text-[#817c78] sm:text-[16px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center w-[80%] sm:w-fit mx-auto gap-5 text-center ">
        <div className="text-[16px] text-[#1c1917] sm:text-[18px] max-w-100">
          Bloom helped them turn a side hustle into a store that sells
          consistently.
        </div>

        <SplitArrowAction href="/about" className="w-[300px] text-lg sm:w-[380px]">
          More About us
        </SplitArrowAction>
      </div>
    </section>
  );
}
