"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Comment {
    title: string;
    description: string;
    image: string;
}

interface CommentBoxProps {
    comment: Comment;
    isActive: boolean;
    position: 'left' | 'center' | 'right';
}

const Comment_box: React.FC<CommentBoxProps> = ({ comment, isActive }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const image = imageRef.current;
        const title = titleRef.current;
        const description = descriptionRef.current;
        const overlay = overlayRef.current;

        if (!isActive) {
            // Reset states when not active
            if (image) gsap.set(image, { opacity: 1, scale: 1 });
            if (title) gsap.set(title, { opacity: 0.3, y: 10 });
            if (description) gsap.set(description, { opacity: 0.3, y: 10 });
            return;
        }

        // Create a timeline for smooth sequential animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Reset initial states
        gsap.set([image, title, description], { opacity: 0 });
        gsap.set(image, { scale: 1.1 });
        gsap.set(title, { y: 20 });
        gsap.set(description, { y: 20 });

        // Animate when card becomes active
        tl.to(image, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
        })
        .to(overlay, {
            opacity: 1,
            duration: 0.6,
        }, "-=0.4")
        .to(title, {
            y: 0,
            opacity: 1,
            duration: 0.7,
        }, "-=0.3")
        .to(description, {
            y: 0,
            opacity: 1,
            duration: 0.7,
        }, "-=0.5");

        // Add subtle hover effect and glow
        const handleMouseEnter = () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(card, {
                boxShadow: "0 25px 50px -12px rgba(31, 81, 76, 0.4)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(card, {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        // Add subtle glow pulse for active card
        const glowAnimation = gsap.to(card, {
            boxShadow: "0 25px 50px -12px rgba(31, 81, 76, 0.3)",
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        });

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            glowAnimation.kill();
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            tl.kill();
        };
    }, [isActive]);

    return (
        <div 
            ref={cardRef}
            className={`relative flex sm:w-[650px] w-[340px] h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}
        >
            {/* Image */}
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={comment.image}
                    alt={comment.title}
                    fill
                    className="object-cover"
                />
                {/* Gradient overlay */}
                <div 
                    ref={overlayRef}
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" 
                />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 max-w-[95%] sm:max-w-[80%] left-0 right-0 p-8 text-white">
                <h3 ref={titleRef} className="sm:text-3xl text-xl font-normal mb-3">
                    {comment.title}
                </h3>
                <p ref={descriptionRef} className="text-base leading-relaxed opacity-90">
                    {comment.description}
                </p>
            </div>
        </div>
    );
};


export default Comment_box