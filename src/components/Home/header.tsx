"use client";
import Logo from "./logo";
import Link from "next/link";

interface HeaderProps {
    onToggleSideNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSideNav }) => {
    // Handle navigation on wide screens
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className="flex z-1000 items-center justify-between sm:pb-4 sm:px-0 px-1.5 pt-5">
            {/* logo */}
            <div className="flex items-center justify-center gap-[5px]">
                <Logo />
                <p className="md:text-3xl text-[24px] tracking-tight text-[#222] opacity-90 font-medium hedvig pt-1">Bloom</p>
            </div>

            {/* navigation links :lg */}
            <div className="md:flex hidden items-center gap-7 text-black">
                <a onClick={(e) => handleNavClick(e, 'features')} className="cursor-pointer">Features</a>
                <a onClick={(e) => handleNavClick(e, 'pricing')} className="cursor-pointer">Pricing</a>
                <a onClick={(e) => handleNavClick(e, 'steps')} className="cursor-pointer">How it works</a>
            </div >

            {/* login button */}
            <Link href={'/Authentication'}>
                <div className="bg-[#1f514c] gap-2 text-white py-1 pl-5 pr-1 rounded-full hidden md:flex justify-end items-center">
                    <p>Start Selling</p>
                    <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                    </div>
                </div>
            </Link>

            {/* Hamburger menu md-sm */}
            <button
                onClick={onToggleSideNav}
                className="md:hidden flex flex-col gap-1.5 w-8 h-10 justify-center items-end relative z-30"
                aria-label="Toggle menu"
            >
                <div className="bg-black w-full h-1 rounded-full transition-all duration-300"></div>
                <div className="bg-black w-[60%] h-1 rounded-full transition-all duration-300 "></div>
            </button >
        </div >
    )
}

export default Header;