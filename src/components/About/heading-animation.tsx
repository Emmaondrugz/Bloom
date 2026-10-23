"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeadingAnimation({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heading = containerRef.current?.querySelector<HTMLElement>(
          "[data-section-heading]",
        );
        if (!heading) return;

        const words = heading.querySelectorAll<HTMLElement>("[data-heading-word]");
        gsap.fromTo(
          words,
          { scale: 0, transformOrigin: "center center" },
          {
            scale: 1,
            duration: 0.55,
            delay: 0.1,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "center bottom",
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex min-w-0 flex-col items-start gap-4 text-left">
      {children}
    </div>
  );
}
