/* eslint-disable @next/next/no-img-element */
const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-16 pt-42 pb-16">
            <div className="sm:max-w-[350px] w-[80%] flex flex-col justify-center text-center gap-5">
                {/* logo */}
                <div className="flex items-center justify-center gap-3">
                    <img src="/icons/icon.png" alt="logo" className="w-8" />
                    <p className="md:text-2xl text-[24px] tracking-tight text-black font-medium hedvig pt-1">Bloom</p>
                </div>
                <div>
                    Optimize your business strategy with your very own online store front.
                </div>
                <div className="flex mx-auto text-xs gap-2 py-[5px] rounded-lg px-[10px] items-center">
                    <p>© 2025 Bloom</p>
                    <div className="w-1.5 h-1.5 bg-[#1f514c] rounded-full"></div>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
}

export default Footer