"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FloatingImage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const media = gsap.matchMedia();
    media.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(wrapper, {
          y: () => -ScrollTrigger.maxScroll(window) * 0.75,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: () => ScrollTrigger.maxScroll(window) || 1,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute -top-10 -right-2 z-10 w-24 sm:-top-12 sm:-right-4 sm:w-32 lg:-top-14 lg:-right-8 lg:w-40"
    >
      <Image
        src="/step-spinner-pink.png"
        alt=""
        width={240}
        height={212}
        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        className={`h-auto w-full origin-center transition-[scale,opacity] duration-700 ease-[cubic-bezier(0.2,1.4,0.4,1)] motion-reduce:transition-none ${isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      />
    </div>
  );
}
