"use client";

import Image from "next/image"
import Timeline from "./timeline"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface StepAnimationOptions {
    stepRef: React.RefObject<HTMLDivElement | null>;
    timelineRef: React.RefObject<HTMLDivElement | null>;
    imageIndex: number;
    textIndex: number;
}

export default function Step() {
    const containerRef = useRef<HTMLDivElement>(null);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const timeline1Ref = useRef<HTMLDivElement>(null);
    const timeline2Ref = useRef<HTMLDivElement>(null);
    const timeline3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animateStep = ({ stepRef, timelineRef, imageIndex, textIndex }: StepAnimationOptions) => {
            const elements = stepRef.current?.children;
            if (!elements) return;

            const imageContainer = elements[imageIndex];
            const image = imageContainer?.querySelector(".image");
            const text = elements[textIndex];
            const timeline = timelineRef.current;

            /* -------- IMAGE -------- */
            if (image) {
                gsap.fromTo(
                    image,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: image,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            /* -------- TEXT -------- */
            if (text) {
                gsap.fromTo(
                    text,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: text,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            /* -------- TIMELINE -------- */
            if (timeline && imageContainer) {
                const dot = timeline.querySelector(".dot");
                const lines = timeline.querySelectorAll(".line");

                if (dot) {
                    gsap.fromTo(
                        dot,
                        { opacity: 0, scale: 0 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: imageContainer,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }

                if (lines.length) {
                    gsap.fromTo(
                        lines,
                        { scaleY: 0, transformOrigin: "top" },
                        {
                            scaleY: 1,
                            duration: 0.8,
                            delay: 0.3,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: imageContainer,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }
            }
        };

        /* ---- RUN STEPS ---- */

        animateStep({
            stepRef: step1Ref,
            timelineRef: timeline1Ref,
            imageIndex: 0,
            textIndex: 2,
        });

        animateStep({
            stepRef: step2Ref,
            timelineRef: timeline2Ref,
            imageIndex: 2,
            textIndex: 0,
        });

        animateStep({
            stepRef: step3Ref,
            timelineRef: timeline3Ref,
            imageIndex: 0,
            textIndex: 2,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        // Remove from hidden when active
        <div className="flex justify-between items-center" ref={containerRef}>
            {/* Timeline for mobile view */}
            <div className="lg:hidden flex self-stretch">
                <Timeline />
            </div>
            <div className="flex-col gap-y-10 lg:gap-0 flex items-center">
                <div className="flex gap-10 items-center flex-col lg:flex-row justify-between" ref={step1Ref}>
                    {/* image box */}
                    <div className="lg:flex-1 lg:max-w-[430px] md:w-[600px] w-[85%] rounded-3xl bg-[#fafafa] h-[295px]">
                        <Image
                            width={500}
                            height={500}
                            src="/sign-up.jpg"
                            alt=""
                            className="w-full h-full image object-cover rounded-3xl"
                        />
                    </div>

                    {/* Time line */}
                    <div className="lg:flex hidden flex-col h-auto overflow-hidden relative items-center gap-3 self-stretch" ref={timeline1Ref}>
                        <div className="line bg-[#1f514c] opacity-15 h-[45px] w-[2.5px] overflow-hidden relative" style={{
                            background: "linear-gradient(180deg, #fff 0%, #1f514c 100%)"
                        }}></div>
                        <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] relative overflow-hidden">
                            <div>01</div>
                        </div>
                        <div className="line bg-[#1f514c] opacity-15 flex-1 w-[2.5px] h-px overflow-hidden relative"></div>
                    </div>

                    {/* Text */}
                    <div className="flex justify-between gap-y-14 flex-col items-start md:max-w-[700px] w-[85%] lg:max-w-[450px] lg:flex-1">
                        <div className="flex flex-col gap-2">
                            <div className="text-[28px] font-normal tracking-tighter text-black">Create Account</div>
                            <p className="text-gray-700">
                                Sign up in seconds - just your name, email, and store details. No complex or technical setup or coding required.
                                Generate a your very own store
                            </p>
                        </div>

                        <Link href={'/Authentication'}>
                            <div className="flex gap-2 items-center">
                                <button className="cursor-pointer">Start now</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-10 items-center lg:flex-row flex-col-reverse justify-between" ref={step2Ref}>
                    {/* Text */}
                    <div className="flex justify-between gap-y-14 flex-col items-start w-[85%] md:max-w-[700px] lg:max-w-[410px]">
                        <div className="flex flex-col gap-2">
                            <div className="text-[28px] font-normal tracking-tighter text-black">Add Your Products</div>
                            <p className="text-gray-700">
                                Upload digital products, courses, or services with ease. Set prices, descriptions,
                                and media — Bloom handles the rest.
                            </p>
                        </div>

                        <Link href={'/Authentication'}>
                            <div className="flex gap-2 items-center">
                                <button className="cursor-pointer">Start now</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                            </div>
                        </Link>
                    </div>


                    {/* Time line */}
                    <div className="lg:flex hidden flex-col items-center relative  gap-3 self-stretch" ref={timeline2Ref}>
                        <div className="line bg-[#1f514c] opacity-15 w-[2.5px] h-[45px] overflow-hidden relative"></div>
                        <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] relative overflow-hidden">
                            <div>02</div>
                        </div>
                        <div className="line bg-[#1f514c] opacity-15 flex-1 w-[2.5px] h-px overflow-hidden relative"></div>
                    </div>

                    {/* image box */}
                    <div className="lg:flex-1 lg:max-w-[430px] md:w-[600px] w-[85%] rounded-3xl bg-[#fafafa] h-[295px] border-none">
                        <Image
                            width={500}
                            height={500}
                            src="/add-product.jpg"
                            alt=""
                            className="w-full h-full object-cover image rounded-3xl"
                        />
                    </div>

                </div>
                <div className="flex gap-10 items-center flex-col lg:flex-row justify-between" ref={step3Ref}>
                    {/* image box */}
                    <div className="lg:w-[430px] md:w-[600px] w-[85%]  rounded-3xl bg-[#fafafa] h-[295px] border-none">
                        <Image
                            width={500}
                            height={500}
                            src="/start-selling.jpg"
                            alt=""
                            className="w-full h-full object-cover image rounded-3xl"
                        />
                    </div>

                    {/* Time line */}
                    <div className="flex-col h-[295px] lg:flex hidden  items-center gap-3 self-stretch" ref={timeline3Ref}>
                        <div className="line bg-[#1f514c] opacity-15 w-[2.5px] h-[45px] overflow-hidden relative"></div>
                        <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] relative overflow-hidden">
                            <div>03</div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex justify-between gap-y-14 flex-col items-start md:max-w-[700px] w-[85%] lg:max-w-[450px]">
                        <div className="flex flex-col gap-2">
                            <div className="text-[28px] font-normal tracking-tighter text-black">Start selling</div>
                            <p className="text-gray-700">
                                Go live instantly with your own store link. Share it anywhere — Instagram bio,
                                WhatsApp, TikTok — and start making sales right away.
                            </p>
                        </div>

                        <Link href={'/Authentication'}>
                            <div className="flex gap-2 items-center">
                                <button className="cursor-pointer">Start now</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}