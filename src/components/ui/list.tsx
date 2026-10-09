export function ListOne() {
    const pains = [
        {
            title: "Limited Reach",
            text: "Your customers are tied to your physical location — sales stop when foot traffic slows.",
        },
        {
            title: "Lost Sales Opportunities",
            text: "People who would buy from you online simply can’t. They move on to competitors with online stores.",
        },
        {
            title: "Customer Inconvenience",
            text: "Buyers have to walk or drive out just to make a simple purchase. Some wont want to.",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {pains.map((item, index) => (
                <div key={index}>
                    {/* Title row */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-[#fafafa] h-7 w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="#1f514c"
                            >
                                <path d="M404.67-406.67 650-652q9.67-9.67 23.33-9.67 13.67 0 23.34 9.67 9.66 9.67 9.66 23.33 0 13.67-9.66 23.34L428-336.67q-10 10-23.33 10-13.34 0-23.34-10L272.67-445.33Q263-455 263-468.67q0-13.66 9.67-23.33 9.66-9.67 23.33-9.67 13.67 0 23.33 9.67l85.34 85.33Z" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-[#1f514c]">{item.title}</p>
                    </div>

                    {/* Description */}
                    <p className="pl-10 pt-2 text-[15px] text-gray-600 leading-relaxed">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    );
}


export function ListTwo() {
    const points = [
        {
            title: "Wider Reach",
            text: "Reach customers beyond your local area — your store is open to anyone, anywhere, 24/7.",
        },
        {
            title: "Seamless Experience",
            text: "Your audience can browse and buy in seconds, without leaving their comfort zone.",
        },
        {
            title: "Faster Growth",
            text: "Turn one-time buyers into loyal customers with effortless online engagement.",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {points.map((item, index) => (
                <div key={index}>
                    {/* Heading Row */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-[#1f514c] h-7 w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="#fff"
                            >
                                <path d="M404.67-406.67 650-652q9.67-9.67 23.33-9.67 13.67 0 23.34 9.67 9.66 9.67 9.66 23.33 0 13.67-9.66 23.34L428-336.67q-10 10-23.33 10-13.34 0-23.34-10L272.67-445.33Q263-455 263-468.67q0-13.66 9.67-23.33 9.66-9.67 23.33-9.67 13.67 0 23.33 9.67l85.34 85.33Z" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-[#1f514c]">{item.title}</p>
                    </div>

                    {/* Description */}
                    <p className="pl-10 pt-2 text-[15px] text-gray-600 leading-relaxed">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    );
}