"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StepImagePanel({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panel = panelRef.current;
    const row = panel?.closest("[data-step-row]");
    if (!panel || !row) return;

    const media = gsap.matchMedia();
    media.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          panel,
          { y: 0 },
          {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div ref={panelRef} className={className}>
      {children}
    </div>
  );
}
