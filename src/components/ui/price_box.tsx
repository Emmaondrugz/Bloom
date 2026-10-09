/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import type { Ref } from "react";

interface PriceBoxProps {
    detail: {
        type: string;
        text: string;
        amount: string;
        features: string[];
    };
    index: number;
    ref?: Ref<HTMLDivElement>;
}

export default function Price_box({ detail, index, ref }: PriceBoxProps) {
    return (
        <div ref={ref} className="border border-[#1f514c0d] text-black p-[4px] rounded-[28px]" >
            <div className={`max-w-[400px] min-h-[570px] rounded-[26px] p-[28px] gap-9 flex flex-col
             ${index === 1 ?
                    'bg-linear-to-b from-[#edffe3] via-[#fff1] to-[#fff0]' :
                    'bg-linear-to-b from-[#edffe34a] via-[#edffe34a] to-[#fff0]'
                }`}>

                {/* pricing heading */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-2xl font-normal">{detail.type}</p>
                        <div className={`text-white bg-[#1f514c] items-center justify-between gap-[3px] pt-[6px] pr-[10px] pb-[6px] pl-[8px] rounded-full 
                            ${index === 1 ? 'flex' : 'hidden'}`}>
                            <div className="w-4">
                                {/* EDIT THIS IMAGE WHEN YOU GET DATA */}
                                <img src="/icons/stars.svg" alt="" className="w-full h-full" />
                            </div>

                            <p className="text-[10px]">Popular</p>
                        </div>
                    </div>

                    <p className="sm:text-lg text-gray-700">{detail.text}</p>
                    <p className="mt-2 hedvig text-4xl sm:text-5xl">{detail.amount}<span className="poppins text-lg">/month</span></p>
                    <Link href={'/Authentication'}>
                        <button className={`rounded-full mt-3 py-3 cursor-pointer  duration-300 transition-all w-full 
                        ${index === 1 ? 'bg-[#1f514c] text-white' :
                                'border border-[#ccc]'}`}>
                            Launch store
                        </button>
                    </Link>
                </div>

                {/* pricing features */}
                <div className="flex flex-col gap-3">
                    {detail.features.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center poppins gap-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30px"
                                viewBox="0 -960 960 960"
                                width="30px"
                                fill="#1f514c"
                            >
                                <path d="M404.67-406.67 650-652q9.67-9.67 23.33-9.67 13.67 0 23.34 9.67 9.66 9.67 9.66 23.33 0 13.67-9.66 23.34L428-336.67q-10 10-23.33 10-13.34 0-23.34-10L272.67-445.33Q263-455 263-468.67q0-13.66 9.67-23.33 9.66-9.67 23.33-9.67 13.67 0 23.33 9.67l85.34 85.33Z" />
                            </svg>
                            <p>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    )
}