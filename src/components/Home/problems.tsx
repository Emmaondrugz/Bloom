"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealWords from "./reveal-words";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const problems = [
  {
    text: "Expensive website builders that take weeks to set up",
    position: "left-[4%] min-[900px]:left-[5%]",
    tilt: -7,
    drift: 32,
  },
  {
    text: "Social media followers who never become paying customers",
    position: "right-[3%] min-[900px]:right-[5%]",
    tilt: 6,
    drift: -38,
  },
  {
    text: "Payment links scattered across DMs and bio pages",
    position: "left-[8%] min-[900px]:left-[12%]",
    tilt: -4,
    drift: 44,
  },
  {
    text: "Customers who ask for prices and then disappear",
    position: "right-[7%] min-[900px]:right-[10%]",
    tilt: 8,
    drift: -28,
  },
  {
    text: "Messy order tracking across WhatsApp and spreadsheets",
    position: "left-[5%] min-[900px]:left-[25%]",
    tilt: -5,
    drift: 36,
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLLIElement[]>([]);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const section = sectionRef.current;
        const stage = stageRef.current;
        const heading = headingRef.current;
        if (!section || !stage || !heading || cardsRef.current.length !== problems.length)
          return;

        gsap.set(cardsRef.current, { autoAlpha: 0 });

        const animateTheme = (dark: boolean) => {
          gsap.to([section, stage], {
            backgroundColor: dark ? "#1C1917" : "#ffffff",
            duration: 0.55,
            ease: "power2.inOut",
            overwrite: true,
          });
          gsap.to(heading, {
            color: dark ? "#ffffff" : "#111111",
            duration: 0.55,
            ease: "power2.inOut",
            overwrite: true,
          });
        };
        const transitionStart = () =>
          `bottom bottom+=${Math.round(window.innerHeight * 0.75)}`;
        const firstCard = cardsRef.current[0];
        let firstCardNearView = false;
        const syncEntranceTheme = () => {
          const nearView = firstCard.getBoundingClientRect().top <= window.innerHeight + 32;
          if (nearView === firstCardNearView) return;

          firstCardNearView = nearView;
          animateTheme(nearView);
        };

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: transitionStart,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(cardsRef.current, { autoAlpha: 1, duration: 0.05 }, 0.2);

        cardsRef.current.forEach((card, index) => {
          const problem = problems[index];
          const icon = card.querySelector<HTMLElement>("[data-problem-icon]");
          timeline.fromTo(
            card,
            {
              y: () => stage.clientHeight * 0.7 + card.offsetHeight,
              x: -problem.drift,
              rotation: problem.tilt,
            },
            {
              y: () => -stage.clientHeight * 0.7 - card.offsetHeight,
              x: problem.drift,
              rotation: -problem.tilt * 0.45,
              ease: "none",
              duration: 0.56,
              onUpdate: index === 0 ? syncEntranceTheme : undefined,
            },
            0.25 + index * 0.2,
          );
          if (icon) {
            timeline.fromTo(
              icon,
              { scale: 0.7, rotation: -30 },
              { scale: 1, rotation: 0, duration: 0.1, ease: "back.out(1.5)" },
              0.4 + index * 0.2,
            );
          }
        });

        const exitTrigger = ScrollTrigger.create({
          trigger: section,
          start: transitionStart,
          end: "+=1",
          onEnter: () => animateTheme(false),
          onEnterBack: () => animateTheme(true),
        });

        return () => {
          gsap.killTweensOf([section, stage, heading]);
          exitTrigger.kill();
          timeline.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="problems"
      aria-labelledby="problems-heading"
      className="relative z-30 w-full bg-white pb-20 motion-safe:h-[450svh] motion-reduce:bg-[#1C1917]"
    >
      <div
        ref={stageRef}
        className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-white px-5 py-20 motion-safe:sticky motion-safe:top-0 motion-safe:h-dvh motion-safe:py-0 motion-reduce:bg-[#1C1917]"
      >
        <h2
          ref={headingRef}
          id="problems-heading"
          data-section-heading
          className="bricolage relative z-20 max-w-130 tracking-tight text-center text-5xl sm:text-7xl leading-[120%] text-[#111] sm:leading-[100%] motion-reduce:text-white"
        >
          <RevealWords lines={["Making sales", "shouldn't be", "this hard."]} />
        </h2>

        <ul className="mt-12 grid w-full max-w-3xl gap-4 motion-safe:absolute motion-safe:inset-0 motion-safe:z-30 motion-safe:mt-0 motion-safe:block motion-safe:max-w-none">
          {problems.map((problem, index) => (
            <li
              key={problem.text}
              ref={(card) => {
                if (card) cardsRef.current[index] = card;
              }}
              className={`flex min-h-40 w-full flex-col justify-between gap-6 rounded-xl bg-[#44403C] p-5 text-white motion-safe:absolute motion-safe:top-1/2 motion-safe:w-[min(78vw,350px)] motion-safe:translate-y-[120dvh] sm:p-6 ${problem.position}`}
            >
              <span
                data-problem-icon
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFA952]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#44403C"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
              <p className="text-xl font-semibold leading-snug sm:text-2xl">
                {problem.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
