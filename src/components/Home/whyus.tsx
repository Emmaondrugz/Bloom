"use client";
import Ui from "../ui/why-us-ui";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Whyus: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const uiRef = useRef<HTMLDivElement>(null);

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

        // Animate UI - scale in
        if (uiRef.current) {
            gsap.fromTo(
                uiRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 0.4,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: uiRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-16 py-16">
            {/* section header */}
            <div ref={headerRef} className="flex flex-col gap-6 text-center">
                <div className="flex items-center font-medium justify-center gap-2 text-[#1f514c]">
                    <div className="w-2 h-2 bg-[#1f514c] rounded-full">
                        <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
                    </div>
                    <p className="text-sm">Why choose us</p>
                </div>
                <div className="sm:text-5xl leading-[120%] text-4xl max-w-[600px] hedvig text-black">
                    Gain customers with your online store
                </div>
            </div>

            {/* main */}
            <div ref={uiRef} className="w-full flex justify-center">
                <Ui />
            </div>
        </div>
    )
}

export default Whyus