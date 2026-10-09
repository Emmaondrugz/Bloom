"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Founder_comment() {
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<HTMLDivElement>(null);
    const ratingRef = useRef<HTMLParagraphElement>(null);
    const commentRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const stars = starsRef.current?.querySelectorAll('svg');
        const rating = ratingRef.current;
        const comment = commentRef.current;
        const profile = profileRef.current;
        const badge = badgeRef.current;

        // Create master timeline
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate stars with stagger
        if (stars && stars.length > 0) {
            gsap.set(stars, { opacity: 0, scale: 0, rotation: -180 });
            masterTl.to(stars, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(2)",
                stagger: 0.1,
            });
        }

        // Animate rating text
        if (rating) {
            gsap.set(rating, { opacity: 0, x: -20 });
            masterTl.to(rating, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.3");
        }

        // Animate comment text with split effect
        if (comment) {
            gsap.set(comment, { opacity: 0, y: 30 });
            masterTl.to(comment, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.2");
        }

        // Animate profile section
        if (profile) {
            const profileImage = profile.querySelector('img');
            const profileName = profile.querySelector('p');

            gsap.set(profileImage, { opacity: 0, scale: 0.8, rotation: -10 });
            gsap.set(profileName, { opacity: 0, x: -20 });

            masterTl.to(profileImage, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.7,
                ease: "back.out(1.5)",
            }, "-=0.5")
                .to(profileName, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.4");
        }

        // Animate badge with bounce
        if (badge) {
            gsap.set(badge, { opacity: 0, scale: 0.5, y: 10 });
            masterTl.to(badge, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(2)",
            }, "-=0.3");
        }

        // Cleanup
        return () => {
            masterTl.kill();
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === container) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="max-w-[700px] items-center text-center sm:px-0 px-3 mt-10 flex flex-col gap-10">
            {/* star ratings */}
            <div className="flex items-center space-x-1">
                <div ref={starsRef} className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                        return (
                            <svg
                                key={i}
                                className="sm:w-5 sm:h-5 w-3 h-3 text-black"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden
                            >
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788L19.6 24 12 19.897 4.4 24l1.666-8.002L0.132 9.21l8.2-1.192L12 .587z" />
                            </svg>
                        );
                    })}
                </div>
                <p ref={ratingRef} className="ml-5 pt-0.5">Rated 4.9/5</p>
            </div>

            {/* comment */}
            <div ref={commentRef} className="sm:text-4xl leading-[140%] text-2xl hedvig">
                Bloom has revolutionized our customer businesses, boosting sales like never before.
            </div>

            {/* profile */}
            <div ref={profileRef} className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img src="/profile3.jpg" alt="" className="w-full h-full object-cover rounded-[inherit]" />
                </div>
                <div className="flex items-start flex-col gap-2">
                    <p>Antony Edache</p>
                    <div ref={badgeRef} className="flex text-xs gap-2 py-[5px] rounded-lg px-[10px] bg-[#edffe3] text-[#1f514c] items-center">
                        <p>High conversion</p>
                        <div className="w-1.5 h-1.5 bg-[#1f514c] rounded-full"></div>
                        <p>2x</p>
                    </div>
                </div>
            </div>
        </div>
    )
}