import { forwardRef, type ReactNode } from "react";

interface FeatureBoxProps {
    feature: {
        icon: ReactNode;
        name: string;
        description: string;
    };
    index: number;
}

const Feature_box = forwardRef<HTMLDivElement, FeatureBoxProps>(function Feature_box({ feature, index }, ref) {
    return (
        <div ref={ref} key={index} className="max-w-[300px] md:max-w-[280px] h-min flex items-center  flex-col gap-7">
            <div style={{
                backgroundColor: "var(--token-2799aae5-8748-4b1f-b085-6820f7d5f7c3, rgb(31, 81, 76))",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 24px 0px, rgba(255, 255, 255, 0.28) 0px 0px 4px 1px inset"
            }} className="w-14 h-14 rounded-2xl p-3 flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27px"
                    viewBox="0 -960 960 960"
                    width="27px"
                    fill="#fff"
                >
                    {feature.icon}
                </svg>
            </div>

            {/* details */}
            <div className="flex flex-col items-center text-center gap-2">
                <div className="sm:text-xl text-lg font-medium">
                    {feature.name}
                </div>
                <div className="text-gray-800">
                    {feature.description}
                </div>
            </div>
        </div >
    )
});

export default Feature_box;