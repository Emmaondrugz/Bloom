"use client"
import Feature_box from "../ui/feature_box"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JSX } from "react/jsx-dev-runtime";

type FeatureEntry = {
    id: number;
    name: string;
    description: string;
    icon: JSX.Element;
};

const Features: React.FC = () => {
    const features: FeatureEntry[] = [
        {
            id: 1,
            name: "Fashion & Apparel",
            description:
                "Showcase your clothing line, shoes, and more to style-conscious customers.",
            icon: (
                <path d="M213.33-226.67h533.34L480-435.33 213.33-226.67Zm199-462.66q-3.66 9-11.5 15-7.83 6-18.83 6-14.33 0-23.83-9.5-9.5-9.5-9.5-23.84 0-3.66.16-6.83.17-3.17 2.17-6.5 17-38 52-61.5t77-23.5q58 0 99 40.5t41 98.5q0 48.33-29.83 85.67Q560.33-538 513.33-524v30.67L866.67-220q6.66 5 10 11.83 3.33 6.84 3.33 14.84 0 14.33-9.5 23.83-9.5 9.5-23.83 9.5H113.33Q99-160 89.5-169.5 80-179 80-193.33q0-8 3.33-14.84 3.34-6.83 10-11.83l353.34-273.33v-60q0-13.67 9.66-23.5 9.67-9.84 23.34-9.84 31 0 52.33-21.66Q553.33-630 553.33-661q0-30.33-21.5-51.33t-51.83-21q-22 0-40.33 11.83-18.34 11.83-27.34 32.17Z" />
            ),
        },
        {
            id: 2,
            name: "E-Books & Courses",
            description:
                "Monetize your knowledge with digital courses, e-books, or educational contents.",
            icon: (
                <path d="M120-263.33V-564q0-28.07 21.17-47.37 21.16-19.3 49.16-17.3 83.67 9.34 155.84 50.5Q418.33-537 480-478.67q61.67-58.33 133.83-99.5 72.17-41.16 155.84-50.5 28-2 49.16 17.3Q840-592.07 840-564v300.67q0 26-17.67 44.83-17.66 18.83-43.66 20.83-70 7.34-136 34.34-66 27-121.34 69.66-9 7.67-19.36 11.17T480-79q-11.61 0-21.97-3.5t-19.36-11.17q-55.34-42.66-121.34-69.66t-136-34.34q-26-2-43.66-20.83Q120-237.33 120-263.33ZM480-146q68.33-49.67 142.33-79.33 74-29.67 151-38V-562q-69.66 11.67-143.5 53.83Q556-466 480-392.67q-80.67-76-152.17-117.16Q256.33-551 186.67-562v298.67q77 8.33 151 38 74 29.66 142.33 79.33Zm2-462q-65.33 0-110.67-45.33Q326-698.67 326-764t45.33-110.67Q416.67-920 482-920t110.67 45.33Q638-829.33 638-764t-45.33 110.67Q547.33-608 482-608Zm.11-66.67q36.89 0 63.06-26.27 26.16-26.27 26.16-63.17 0-36.89-26.27-63.06-26.27-26.16-63.17-26.16-36.89 0-63.06 26.27-26.16 26.27-26.16 63.17 0 36.89 26.27 63.06 26.27 26.16 63.17 26.16ZM482-764Zm-2 371.33Z" />
            ),
        },
        {
            id: 3,
            name: "Food & Beverages",
            description:
                "Bring fresh produce, packaged snacks, and ingredients directly to customers daily.",
            icon: (
                <path d="M561-389.33q-26-49.67-88.5-75.84-62.5-26.16-129.83-26.16-67.34 0-129.84 26.16-62.5 26.17-89.16 75.84H561ZM343-558q48.33 0 96.17 11.17 47.83 11.16 88.33 35.16 40.5 24 69.5 61t39.67 88q3.33 15.67-6.62 27.84-9.96 12.16-25.72 12.16H81q-15.76 0-25.71-12.16-9.96-12.17-6.62-27.84 10.66-51 39.83-88 29.17-37 69.67-61t88.5-35.16Q294.67-558 343-558ZM73.33-184q-14.16 0-23.75-9.62Q40-203.23 40-217.45q0-14.22 9.58-23.72 9.59-9.5 23.75-9.5H612q14.17 0 23.75 9.62t9.58 23.83q0 14.22-9.58 23.72-9.58 9.5-23.75 9.5H73.33ZM786-40h-40.67q-14.16 0-23.75-9.62Q712-59.23 712-73.45q0-14.22 9.58-23.72 9.59-9.5 23.75-9.5H788L844.67-680H483.33q-14.33 0-23.5-9.62-9.16-9.61-9.16-23.83 0-14.22 9.58-23.72 9.58-9.5 23.75-9.5h163.33v-140q0-14.16 9.62-23.75 9.62-9.58 23.83-9.58 14.22 0 23.72 9.58 9.5 9.59 9.5 23.75v140h169.33q15 0 25.17 10.84Q918.67-725 916.67-710L853.33-99.33q-3.06 25.57-22.44 42.45Q811.51-40 786-40Zm-74-66.67h76-76ZM73.33-40q-14.16 0-23.75-9.62Q40-59.23 40-73.45q0-14.22 9.58-23.72 9.59-9.5 23.75-9.5H612q14.17 0 23.75 9.62t9.58 23.83q0 14.22-9.58 23.72Q626.17-40 612-40H73.33Zm269.34-349.33Z" />
            ),
        },
        {
            id: 4,
            name: "Events & Tickets",
            description:
                "Sell event tickets, memberships, and exclusive access passes to audiences with ease.",
            icon: (
                <path d="m480-400.67 64 50q9.67 7.67 20 .5 10.33-7.16 6.67-19.16l-25.34-80 66.34-54q9-7.67 5.33-18.84-3.67-11.16-15.67-11.16h-78.66l-27-79.67q-4.34-11.33-15.67-11.33T464.33-613l-27 79.67h-79q-12 0-15.5 11.16-3.5 11.17 5.5 18.84l65.67 54L388.67-369Q385-357 395-349.83q10 7.16 20-.5l65-50.34ZM146.67-160Q119-160 99.5-179.5T80-226.67v-133q0-10.33 6-18 6-7.66 15.67-10.33 28.66-10 45.5-36Q164-450 164-480q0-29.33-16.83-55.67Q130.33-562 101.67-572 92-574.67 86-582.33q-6-7.67-6-18v-133Q80-761 99.5-780.5t47.17-19.5h666.66q27.67 0 47.17 19.5t19.5 47.17v133q0 10.33-6 18-6 7.66-15.67 10.33-28.66 10-45.5 36.33Q796-509.33 796-480q0 30 16.83 56 16.84 26 45.5 36 9.67 2.67 15.67 10.33 6 7.67 6 18v133q0 27.67-19.5 47.17T813.33-160H146.67Zm0-66.67h666.66v-106.66Q775.67-358 752.5-396.17q-23.17-38.16-23.17-83.83t23.17-83.83q23.17-38.17 60.83-62.84v-106.66H146.67v106.66Q185-602 207.83-563.83q22.84 38.16 22.84 83.83t-22.84 83.83Q185-358 146.67-333.33v106.66ZM480-480Z" />
            ),
        },
        {
            id: 5,
            name: "Electronics & Gadgets",
            description:
                "Sell smartphones, laptops, tablets, and smart devices to eager tech enthusiasts.",
            icon: (
                <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-306.67h400V-760H280v453.33ZM280-826.67h400V-840q0-10-6.67-16.67-6.66-6.66-16.66-6.66H303.33q-10 0-16.67 6.66Q280-850 280-840v13.33ZM280-120v120-120Zm0-706.67V-840v13.33Z" />
            ),
        },
        {
            id: 6,
            name: "Handmade Crafts",
            description:
                "Share your artistic creations from handwoven to custom jewelry with craft lovers everywhere.",
            icon: (
                <path d="M434.67-126 165.33-391.67q-18.66-18.66-20-44Q144-461 160.67-481L300-651q9-11.75 22.5-18.04 13.5-6.29 28.83-6.29h259.34q15.33 0 28.83 6.29Q653-662.75 662-651l140 170q16.67 20 15.33 45.67-1.33 25.66-20 44.33L528-126q-19.21 19-46.77 19-27.56 0-46.56-19Zm-311-667q10-10 24-10t24 10L200-764.33q9.33 10 9.67 23.5.33 13.5-9.67 23.5-9.33 9.33-23.17 9.66-13.83.34-23.83-9l-28.67-29q-10-10-10.33-23.66-.33-13.67 9.67-23.67Zm357.78-87q14.22 0 23.72 9.58 9.5 9.59 9.5 23.75V-806q0 14.17-9.62 23.75t-23.83 9.58q-14.22 0-23.72-9.58-9.5-9.58-9.5-23.75v-40.67q0-14.16 9.62-23.75 9.61-9.58 23.83-9.58Zm355.13 87.14q10.09 10.15 9.59 23.67-.5 13.52-10.5 23.52l-28.67 29q-10 9.34-23.33 9.34-13.34 0-23.34-9.9-10-9.89-10-23.5 0-13.6 10-23.6L789-793q10.04-10 23.86-10 13.81 0 23.72 10.14ZM247.33-404l234 230.67 234-230.67h-468Zm-9-66.67h486l-113.66-138H352l-113.67 138Z" />
            ),
        },
    ];

    const headerRef = useRef<HTMLDivElement>(null);
    const featureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animate header
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.6,
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

        // Animate each feature box individually with delay AFTER header animation
        featureBoxRefs.current.forEach((boxRef, index) => {
            if (boxRef) {
                gsap.fromTo(
                    boxRef,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        delay: 0.6 + 0.8 + (index * 0.1), // header delay + duration + stagger
                        // 0.6 (header delay) + 0.8 (header duration) = 1.4
                        // Then: 1.4, 1.6, 1.8, 2.0, 2.2, 2.4...
                        scrollTrigger: {
                            trigger: headerRef.current, // Use header as trigger instead
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <div className="flex flex-col max-w-[1200px] justify-center items-center gap-16 py-16" id="features">
            {/* section's header */}
            <div ref={headerRef} className="flex flex-col gap-6 text-center">
                <div className="flex items-center font-medium justify-center gap-2 text-[#1f514c]">
                    <div className="w-2 h-2 bg-[#1f514c] rounded-full">
                        <div className="w-2 h-2 bg-[#1f514c] rounded-full animate-ping"></div>
                    </div>
                    <p className="text-sm">Features</p>
                </div>
                <div className="sm:text-5xl leading-[120%] text-4xl max-w-[600px] hedvig">
                    Whatever you make, you can sell it here
                </div>
            </div>


            {/* products types */}
            <div className="flex gap-18 flex-wrap justify-center">
                {features.map((feature, i) => {
                    const FeatureBoxComponent = Feature_box as unknown as React.ForwardRefExoticComponent<
                        { feature: FeatureEntry; index: number } & React.RefAttributes<HTMLDivElement>
                    >;
                    return (
                        <FeatureBoxComponent
                            ref={(el: HTMLDivElement | null) => {
                                featureBoxRefs.current[i] = el;
                            }}
                            feature={feature}
                            index={i}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    )
}


export default Features