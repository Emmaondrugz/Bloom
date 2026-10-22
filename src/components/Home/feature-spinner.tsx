"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FeatureSpinner() {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const spinner = spinnerRef.current;
    const section = spinner?.closest("section");
    if (!spinner || !section) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        spinner,
        { y: 0 },
        {
          y: -180,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => media.revert();
  }, []);

  return (
    <div
      ref={spinnerRef}
      className="pointer-events-none absolute -top-9 -right-5 z-20 size-28 sm:-top-12 sm:-right-8 sm:size-36 lg:-top-14 lg:-right-10 lg:size-40"
      aria-hidden="true"
    >
      <Image
        src="/step-spinner-green.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 160px, (min-width: 640px) 144px, 112px"
        className="object-contain"
      />
    </div>
  );
}
