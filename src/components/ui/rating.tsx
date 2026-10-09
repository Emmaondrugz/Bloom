import Image from "next/image";

export default function Ratings() {
    // Mock profile data
    const reviewers = [
        { url: "/profile1.jpg", color: "bg-[#fde68a]" },
        { url: "/profile2.jpg", color: "bg-[#bfdbfe]" },
        { url: "/profile3.jpg", color: "bg-[#fed7aa]" },
    ];

    return (
        <div className="flex flex-col gap-3">
            {/* reviewers profiles */}
            <div className="flex -space-x-3 items-center">
                {reviewers.map((r, i) => (
                    <div
                        key={i}
                        className={`${r.color} sm:w-10 flex sm:h-10 w-8 h-8 rounded-full  items-center justify-center text-sm font-medium text-gray-700 border-2 border-white shadow-sm overflow-hidden`}
                    >
                        <Image
                            width={100}
                            height={0}
                            src={r.url}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* star ratings */}
            <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => {
                    return (
                        <svg
                            key={i}
                            className="sm:w-4 sm:h-4 w-3 h-3 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden
                        >
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788L19.6 24 12 19.897 4.4 24l1.666-8.002L0.132 9.21l8.2-1.192L12 .587z" />
                        </svg>
                    );
                })}
                <p className="ml-5 pt-0.5">Rated 4.9/5</p>
            </div>
        </div>
    )
}