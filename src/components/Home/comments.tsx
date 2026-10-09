'use client'
import { useState } from "react";
import Comment_box from "../ui/comment_box"
import Founder_comment from "../ui/founder_comment"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Comments: React.FC = () => {

    type Comment = {
        title: string;
        description: string;
        image: string;
    };

    const comments: Comment[] = [
        {
            image: "/one.jpg",
            description:
                "Since I launched my store online, I've doubled my customers and I'm now getting orders from across Africa — even while I sleep!",
            title: "Yoma, New Jersey 🇺🇸",
        },
        {
            image: "/two.jpg",
            description:
                "The platform made it so easy to set up my shop. I started selling within hours and now make sales every day!",
            title: "Bongani, Johannesburg 🇿🇦",
        },
        {
            image: "/three.jpg",
            description:
                "I never thought I could reach customers beyond my neighborhood. Now I ship nationwide and business is booming!",
            title: "David, Abuja 🇳🇬",
        },
        {
            image: "/four.jpg",
            description:
                "Managing my inventory and orders has never been easier. This platform changed my entire business.",
            title: "Aisha, Lagos 🇳🇬",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(1);

    const getCardPosition = (cardIndex: number) => {
        const diff = cardIndex - currentIndex;

        if (diff < -1) return 'far-left';
        if (diff === -1) return 'left';
        if (diff === 0) return 'center';
        if (diff === 1) return 'right';
        return 'far-right';
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < comments.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const indicatorsRef = useRef<HTMLDivElement>(null);
    const navButtonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate header with split text effect
        if (headerRef.current) {
            const badge = headerRef.current.querySelector('.badge-animate');
            const title = headerRef.current.querySelector('.title-animate');

            // Badge animation
            if (badge) {
                gsap.fromTo(
                    badge,
                    { opacity: 0, scale: 0.8, y: -10 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Title animation
            if (title) {
                gsap.fromTo(
                    title,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        delay: 0.2,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }

        // Animate carousel container
        if (carouselRef.current) {
            gsap.fromTo(
                carouselRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 0.4,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Animate navigation buttons
        if (navButtonsRef.current) {
            const buttons = navButtonsRef.current.querySelectorAll('button');
            gsap.fromTo(
                buttons,
                { opacity: 0, scale: 0.5, rotation: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    delay: 0.6,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Animate indicator dots
        if (indicatorsRef.current) {
            const dots = indicatorsRef.current.querySelectorAll('button');
            gsap.fromTo(
                dots,
                { opacity: 0, scale: 0, y: 10 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    delay: 0.8,
                    duration: 0.5,
                    ease: "back.out(2)",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Animate indicator dots when currentIndex changes
    useEffect(() => {
        if (indicatorsRef.current) {
            const dots = indicatorsRef.current.querySelectorAll('button');
            dots.forEach((dot, idx) => {
                if (idx === currentIndex) {
                    gsap.to(dot, {
                        scale: 1.2,
                        duration: 0.3,
                        ease: "back.out(2)",
                    });
                } else {
                    gsap.to(dot, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                }
            });
        }
    }, [currentIndex]);

    return (
        <div className="flex flex-col justify-center items-center gap-16 py-16 lg:min-h-screen">
            {/* Section header */}
            <div ref={headerRef} className="flex flex-col gap-6 text-center">
                <div className="badge-animate flex items-center font-medium justify-center gap-2 text-[#1f514c]">
                    <div className="w-2 h-2 bg-[#1f514c] rounded-full">
                        <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
                    </div>
                    <p className="text-sm">Impact</p>
                </div>
                <div className="title-animate sm:text-5xl leading-[120%] text-4xl max-w-[600px] hedvig">
                    Real results that <br className="sm:hidden flex" /> drive lasting impact
                </div>
            </div>

            {/* 3D Carousel */}
            <div ref={carouselRef} className="relative w-full max-w-[1400px] px-7 sm:px-4">
                <div
                    className="relative flex items-center justify-center h-[450px] sm:min-h-[350px]"
                    style={{
                        perspective: "2000px",
                        perspectiveOrigin: "center center"
                    }}
                >
                    {/* Navigation buttons container */}
                    <div ref={navButtonsRef} className="absolute inset-0 pointer-events-none">
                        {/* Left navigation button */}
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="absolute mt-[180px] -left-6 md:left-0 z-30 w-12 h-12 rounded-full bg-[#1f514c] text-white flex items-center
                             justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2a6b64] disabled:opacity-30
                              disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl pointer-events-auto"
                            aria-label="Previous slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="currentColor"
                            >
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                            </svg>
                        </button>

                        {/* Right navigation button */}
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === comments.length - 1}
                            className="absolute mt-[180px] -right-6 md:right-0 z-30 w-12 h-12 rounded-full bg-[#1f514c] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2a6b64] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl pointer-events-auto"
                            aria-label="Next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="28px"
                                viewBox="0 -960 960 960"
                                width="28px"
                                fill="currentColor"
                            >
                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Carousel container */}
                    <div className="relative w-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                        {comments.map((comment, idx) => {
                            const position = getCardPosition(idx);
                            const isActive = idx === currentIndex;

                            let transformStyle = '';
                            let opacity = 0;
                            let zIndex = 1;
                            let pointerEvents: 'auto' | 'none' = 'none';
                            let visibility: 'visible' | 'hidden' = 'visible';

                            if (position === 'far-left') {
                                transformStyle = 'translateX(-400px) translateZ(-500px) rotateY(45deg) scale(0.6)';
                                opacity = 0;
                                zIndex = 1;
                                visibility = 'hidden';
                            } else if (position === 'left') {
                                transformStyle = 'translateX(-200px) translateZ(-300px) rotateY(35deg) scale(0.75)';
                                opacity = 0.5;
                                zIndex = 5;
                            } else if (position === 'center') {
                                transformStyle = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                                opacity = 1;
                                zIndex = 20;
                                pointerEvents = 'auto';
                            } else if (position === 'right') {
                                transformStyle = 'translateX(200px) translateZ(-300px) rotateY(-35deg) scale(0.75)';
                                opacity = 0.5;
                                zIndex = 5;
                            } else {
                                transformStyle = 'translateX(400px) translateZ(-500px) rotateY(-45deg) scale(0.6)';
                                opacity = 0;
                                zIndex = 1;
                                visibility = 'hidden';
                            }

                            return (
                                <div
                                    key={comment.title}
                                    className="absolute transition-all duration-700 ease-out"
                                    style={{
                                        transform: transformStyle,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        pointerEvents: pointerEvents,
                                        visibility: visibility,
                                        // BUGFIX: Removed transformStyle: "preserve-3d" from here as it conflicts with transform property
                                        // Added willChange for better performance on mobile
                                        willChange: 'transform, opacity'
                                    }}
                                >
                                    <Comment_box
                                        comment={comment}
                                        isActive={isActive}
                                        position={position === 'left' ? 'left' : position === 'center' ? 'center' : 'right'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Indicator dots */}
                <div ref={indicatorsRef} className="flex justify-center gap-3 mt-12">
                    {comments.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                ? 'w-6 h-2 bg-[#1f514c]'
                                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>


            {/* founder comment */}
            <Founder_comment />

        </div>
    );
};

export default Comments;