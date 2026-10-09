"use client"
import Step from "../ui/step";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Steps: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate header
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.3,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);
    return (
        <div className="py-16">
            <div className="flex flex-col justify-center items-center gap-16 py-16" id="steps">
                {/* section header */}
                <div ref={headerRef} className="flex flex-col gap-6 text-center">
                    <div className="flex items-center font-medium justify-center gap-2 text-[#1f514c]">
                        <div className="w-2 h-2 bg-[#1f514c] rounded-full">
                            <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
                        </div>
                        <p>How it works</p>
                    </div>
                    <div className="sm:text-5xl leading-[120%] text-black text-4xl max-w-[600px] hedvig">
                        A proven process to maximize your business
                    </div>

                    <Link href={'/Authentication'}>
                        <div className="bg-[#1f514c] gap-2 text-white py-1 pl-5 pr-1 w-fit mx-auto rounded-full hidden lg:flex justify-end items-center">
                            <p>Launch store</p>
                            <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                            </div>
                        </div >
                    </Link>

                </div>

                {/* main */}
                <div className="w-full flex justify-center">
                    <Step />
                </div>
            </div>
        </div>
    )
}

export default Steps