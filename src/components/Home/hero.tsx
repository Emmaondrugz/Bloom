"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "./header";
import Rating from "../ui/rating"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    onToggleSideNav: () => void;
}

const Hero: React.FC<HeroProps> = ({ onToggleSideNav }) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const ratingRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate header - fade down
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    delay: 0.1
                }
            );
        }

        // Animate rating - fade in
        if (ratingRef.current) {
            gsap.fromTo(
                ratingRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.4
                }
            );
        }

        // Animate title - fade up
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.6
                }
            );
        }

        // Animate description - fade up
        if (descRef.current) {
            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.8
                }
            );
        }

        // Animate buttons - fade up
        if (buttonsRef.current) {
            gsap.fromTo(
                buttonsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 1
                }
            );
        }

        // Animate image - scale and fade
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: 0.5
                }
            );
        }
    }, []);

    // Handles navigation on wide screen
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="pb-16 max-w-[1200px] px-4">
            {/* header component */}
            <div ref={headerRef} className="z-1000 relative">
                <Header onToggleSideNav={onToggleSideNav} />
            </div>

            {/* main */}
            <div className="mt-5 text-white relative items-start lg:items-center gap-x-5 gap-y-11 lg:flex-row flex-col pt-6 lg:pt-3 lg:pb-3 pb-6 flex px-6 lg:px-3 justify-between h-fit lg:h-[83vh] rounded-3xl md:rounded-[28px] w-full bg-[#1f514c]">
                {/* hero - left */}
                <div className="flex flex-col px-0 lg:pl-10 gap-10 md:max-w-[70%]  lg:max-w-1/2">
                    {/* hero banner */}
                    <div className="flex flex-col gap-5">
                        {/* Rating-ui */}
                        <div ref={ratingRef}>
                            <Rating />
                        </div>
                        <div
                            ref={titleRef}
                            className="text-[45px] leading-[110%] md:leading-[100%] md:text-6xl hedvig tracking-tight"
                        >
                            Launch an Online store in minutes.
                        </div>
                        <p
                            ref={descRef}
                            className="max-w-[500px] text-md sm:text-lg"
                        >
                            start selling your products, services, or contents, all under your
                            own online store, no coding required
                        </p>
                    </div>

                    {/* banner buttons */}
                    <div
                        ref={buttonsRef}
                        className="flex gap-5 flex-wrap items-center text-md"
                    >
                        <Link href={'/Authentication'}>
                            <div className="bg-white gap-2 text-white py-1 pl-5 pr-1 rounded-full cursor-pointer flex justify-end items-center">

                                <p className="text-black">Launch store</p>
                                <div className="p-1.5 bg-[#1f514c] rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                                </div>
                            </div >
                        </Link>
                        <a
                            href="#pricing"
                            onClick={(e) => handleNavClick(e, 'pricing')}
                            className="cursor-pointer"
                        >
                            Pricing
                        </a>
                    </div>
                </div>

                {/* hero - right */}
                <div
                    ref={imageRef}
                    className="lg:w-[40%]  w-full h-[450px] md:h-[400px] lg:h-full bg-[#337F74] md:rounded-[20px] rounded-[16px]"
                >
                    <img src="/starbox-hero-pic.png" alt="" className="w-full h-full rounded-[inherit] object-cover relative -z-10" />
                </div>
            </div>
        </div >
    )
}

export default Hero;