"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Logo from "./logo"

interface LoaderProps {
    onComplete?: () => void
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const iconRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLParagraphElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const duration = 5000
        const interval = 50
        const increment = (100 / duration) * interval

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment
                if (next >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return next
            })
        }, interval)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.to(iconRef.current, { opacity: 1, y: 0, duration: 0.8 })
            .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
            .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
    }, [])

    useEffect(() => {
        if (progress >= 100) {
            const tl = gsap.timeline({
                defaults: { ease: "power3.in" },
                onComplete: onComplete
            })

            tl.to(iconRef.current, { opacity: 0, y: -30, duration: 0.6 })
                .to(titleRef.current, { opacity: 0, y: -30, duration: 0.6 }, "-=0.4")
                .to(subtitleRef.current, { opacity: 0, y: -30, duration: 0.6 }, "-=0.4")
        }
    }, [progress, onComplete])

    return (
        <div className="fixed top-0 left-0 w-full h-svh pointer-events-none overflow-hidden flex items-center justify-center bg-linear-to-b from-[#ffff] via-[#ffff] to-[#edffe3]">
            <div className="gap-3 flex items-center flex-col justify-center">
                <div
                    ref={iconRef}
                    style={{ opacity: 0, transform: "translateY(30px)" }}
                    className="w-14 h-14 rounded-lg p-1.5 flex justify-center items-center"
                >
                    <div className="animate-spin transition-all duration-100s">
                        <Logo />
                    </div>
                </div>
                <p
                    ref={titleRef}
                    style={{ opacity: 0, transform: "translateY(30px)" }}
                    className="sm:text-5xl text-3xl tracking-tight text-black hedvig pt-1"
                >
                    Bloom
                </p>
                <p
                    ref={subtitleRef}
                    style={{ opacity: 0, transform: "translateY(30px)" }}
                    className="sm:text-lg max-w-[400px] text-md text-center text-gray-700 px-4"
                >
                    Sell anything. Sell anywhere.<br /> Welcome to endless possibilities.
                </p>
            </div>
        </div>
    )
}

export default Loader
