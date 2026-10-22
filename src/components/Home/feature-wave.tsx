"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

let featureWaveHasAnimated = false;

export default function FeatureWave() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const cards = root?.parentElement;
      if (!root || !cards) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const paths = root.querySelectorAll<SVGPathElement>("path");
      const showFullWave = reducedMotion.matches || featureWaveHasAnimated;
      const drawings = Array.from(paths, (path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: showFullWave ? 0 : length,
        });

        return gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "none",
          paused: true,
        });
      });

      if (showFullWave) return;

      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        featureWaveHasAnimated = true;
        observer.disconnect();
        drawings.forEach((drawing) => drawing.play(0));
      }, {
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.05,
      });
      observer.observe(cards);

      return () => observer.disconnect();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2"
      aria-hidden="true"
    >
      <svg
        className="absolute top-[calc(50%+3.5rem)] left-0 hidden h-[420px] w-full -translate-y-1/2 lg:block"
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M -24 336 C 90 386 180 385 258 276 C 334 170 325 76 457 70 C 592 62 614 246 762 282 C 932 324 1002 70 1170 84 C 1332 97 1398 164 1624 114"
          stroke="#AA94FF"
          strokeWidth="12"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        className="absolute top-[calc(50%+1.5rem)] left-0 h-[360px] w-full -translate-y-1/2 lg:hidden"
        viewBox="0 0 400 360"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M -20 286 C 55 336 88 295 112 185 C 142 68 222 46 256 138 C 294 250 332 262 420 190"
          stroke="#AA94FF"
          strokeWidth="10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
