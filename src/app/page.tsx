"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Home/header";
import Hero from "@/components/Home/hero";
import Problems from "@/components/Home/problems";
import Steps from "@/components/Home/steps";
import "@/app/globals.css";
import Features from "@/components/Home/features";
import Testimonials from "@/components/Home/testimonials";
import Pricing from "@/components/Home/pricing";
import Faq from "@/components/Home/faq";
import Cta from "@/components/Home/cta";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DESKTOP_MOTION_QUERY =
  "(min-width: 1300px) and (prefers-reduced-motion: no-preference)";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const root = pageRef.current;
        const headings = root?.querySelectorAll<HTMLElement>(
          "[data-section-heading]",
        );

        headings?.forEach((heading) => {
          const words = heading.querySelectorAll<HTMLElement>(
            "[data-heading-word]",
          );
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

        root
          ?.querySelectorAll<HTMLElement>("[data-micro-group]")
          .forEach((group) => {
            const items =
              group.querySelectorAll<HTMLElement>("[data-micro-item]");
            items.forEach((item, index) => {
              const style = item.dataset.microItem;
              const stepSpin = style === "step-spin";
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  scale: stepSpin ? 0.65 : style === "spin" ? 0.7 : 0.85,
                  rotation: stepSpin ? -75 : style === "spin" ? -35 : 0,
                  y: style === "bounce" ? 12 : 0,
                },
                {
                  opacity: 1,
                  scale: 1,
                  rotation: 0,
                  y: 0,
                  duration: stepSpin ? 0.5 : style === "bounce" ? 0.65 : 0.45,
                  delay: index * 0.08,
                  ease: stepSpin
                    ? "power3.out"
                    : style === "bounce"
                      ? "bounce.out"
                      : "back.out(1.5)",
                  scrollTrigger: {
                    trigger: group,
                    start: "top 85%",
                    once: true,
                  },
                },
              );
            });
          });
      });

      media.add(DESKTOP_MOTION_QUERY, () => {
        const root = pageRef.current;
        const hero = root?.querySelector<HTMLElement>("[data-hero-section]");
        const cart = root?.querySelector<HTMLImageElement>(
          "[data-hero-scene='cart']",
        );
        const coin = root?.querySelector<HTMLImageElement>(
          "[data-hero-scene='coin']",
        );
        if (!hero || !cart || !coin) return;

        gsap.to([cart, coin], {
          y: () => -window.innerHeight * 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="flex flex-col poppins items-center overflow-x-clip justify-center bg-white text-black"
    >
      <Header />
      <Hero />
      <Problems />
      <Steps />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  );
}
