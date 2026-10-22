"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const desktopPath =
  "M 1001 0 C 928 30 776 127 750 277 C 726 417 849 374 895 329 C 911 313 925 289 912 280 C 902 272 881 293 875 321 C 863 373 877 477 987 596 C 1015 626 1055 645 1090 655";

const mobilePath =
  "M 338 220 C 311 241 255 316 245 428 C 236 533 282 501 299 466 C 305 454 311 436 306 430 C 302 424 294 440 291 461 C 287 500 292 578 334 667 C 342 685 351 696 360 702";

export default function StepThreeLine() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const row = root?.parentElement;
      if (!root || !row) return;

      const paths = root.querySelectorAll<SVGPathElement>("path");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const context = gsap.context(() => {
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: reducedMotion.matches ? 0 : length,
          });

          if (!reducedMotion.matches) {
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 1.4,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
              },
            });
          }
        });
      }, root);

      return () => context.revert();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 -top-8 hidden h-[660px] w-screen -translate-x-1/2 overflow-visible lg:block"
        viewBox="0 0 1000 660"
        preserveAspectRatio="xMaxYMid meet"
        fill="none"
      >
        <path
          d={desktopPath}
          stroke="#AA94FF"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        className="absolute right-8 -top-4 h-[calc(100%+4rem)] w-[min(72vw,300px)] overflow-visible lg:hidden"
        viewBox="0 0 300 700"
        preserveAspectRatio="xMaxYMin meet"
        fill="none"
      >
        <path
          d={mobilePath}
          stroke="#AA94FF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
