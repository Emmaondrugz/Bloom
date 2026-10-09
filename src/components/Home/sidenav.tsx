"use client";
import Link from "next/link";
import { useEffect } from "react";

interface SideNavProps {
    isOpen: boolean;
    toggleSideNav: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, toggleSideNav }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        toggleSideNav(); // Close the nav

        // Wait for nav to close before scrolling
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300); // Match the transition duration
    };

    return (
        <div className={`w-full h-screen pb-16 md:hidden pointer-none z-99 fixed top-0 bg-linear-to-b from-[#ffff] via-[#ffff] to-[#edffe3] transition-all duration-300 ${isOpen ? 'left-0' : '-left-full'
            }`}>

            {/* Nav content */}
            <div className="w-full h-full p-5 pt-22 flex flex-col gap-3">
                {/* Divider here */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
                {/* Navigation Links */}
                <div className="flex flex-col pt-5 gap-6 mb-auto text-xl">
                    <a onClick={(e) => handleNavClick(e, 'features')} href="#features" className="gap-2 justify-between text-black hover:text-[#1f514c] transition-colors duration-200 flex items-center cursor-pointer">
                        <p>Features</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z" /></svg>
                    </a>
                    <a onClick={(e) => handleNavClick(e, 'pricing')} href="#pricing" className="gap-2 justify-between text-black hover:text-[#1f514c] transition-colors duration-200 flex items-center cursor-pointer">
                        <p>Pricing</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z" /></svg>
                    </a>
                    <a onClick={(e) => handleNavClick(e, 'steps')} href="#howitworks" className="gap-2 justify-between text-black hover:text-[#1f514c] transition-colors duration-200 flex items-center cursor-pointer">
                        <p>How it works</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z" /></svg>
                    </a>
                    {/* Auth buttons at bottom */}
                    <div className="flex flex-col gap-3 mt-3 text-lg">
                        <Link href={'/Authentication'}>
                            <div className="bg-white border-[#ccc] border gap-2 text-black py-3.5 rounded-xl flex justify-center items-center cursor-pointer">
                                <p>Login</p>
                            </div>
                        </Link>
                        <Link href={'/Authentication'}>
                            <div className="bg-[#1f514c] gap-2 text-white py-3.5 rounded-xl flex justify-center items-center cursor-pointer">
                                <p>Create an Account</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Footer text */}
                <div className="sm:max-w-[350px] w-[80%] mx-auto flex flex-col justify-center text-center gap-5">
                    {/* logo */}
                    <div className="text-gray-600 text-sm">
                        Optimize your business strategy with your very own online store front.
                    </div>
                    <div className="flex mx-auto text-xs gap-2 py-[5px] rounded-lg px-[10px] items-center">
                        <p>© 2025 Bloom</p>
                        <div className="w-1.5 h-1.5 bg-[#1f514c] rounded-full"></div>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default SideNav;