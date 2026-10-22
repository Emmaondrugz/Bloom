"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const desktopPath =
  "M 850 12 C 805 154 748 283 670 408 C 595 516 445 612 300 650 C 175 718 81 682 80 574 C 78 467 141 409 207 421 C 284 432 303 516 283 617 C 249 764 83 824 -95 865";

const mobilePath =
  "M 520 10 C 501 120 470 211 418 310 C 335 405 225 478 120 531 C 46 583 12 554 15 477 C 18 403 67 363 120 378 C 187 397 197 478 176 562 C 146 682 38 744 -90 770";

export default function StepOneLine() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const card = root?.parentElement;
      if (!root || !card) return;

      const paths = root.querySelectorAll<SVGPathElement>("path");
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const context = gsap.context(() => {
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: motion.matches ? 0 : length,
          });

          if (!motion.matches) {
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 1.4,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
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
        className="absolute -left-[300px] -top-[230px] hidden h-[1000px] w-[1000px] overflow-visible sm:block"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <path
          d={desktopPath}
          stroke="#FEA8F1"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute -left-[120px] -top-[210px] h-[850px] w-[600px] overflow-visible sm:hidden"
        viewBox="0 0 600 850"
        fill="none"
      >
        <path
          d={mobilePath}
          stroke="#FEA8F1"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
