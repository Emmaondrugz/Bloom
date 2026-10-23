"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_MOTION_QUERY =
  "(min-width: 1300px) and (prefers-reduced-motion: no-preference)";

export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MOTION_QUERY);
    let stopLenis: (() => void) | undefined;

    const syncLenis = () => {
      if (media.matches && !stopLenis) {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        const updateScrollTrigger = () => ScrollTrigger.update();
        const tick = (time: number) => lenis.raf(time * 1000);

        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        stopLenis = () => {
          gsap.ticker.remove(tick);
          lenis.off("scroll", updateScrollTrigger);
          lenis.destroy();
          gsap.ticker.lagSmoothing(500, 33);
        };
      } else if (!media.matches && stopLenis) {
        stopLenis();
        stopLenis = undefined;
      }
    };

    media.addEventListener("change", syncLenis);
    syncLenis();

    return () => {
      media.removeEventListener("change", syncLenis);
      stopLenis?.();
    };
  }, []);

  return null;
}
