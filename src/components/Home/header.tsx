"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < 4) return;

      setIsVisible(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      inert={!isVisible}
      className={`pointer-events-auto fixed top-3 left-1/2 z-50 flex w-[calc(100%_-_1.5rem)] max-w-370 -translate-x-1/2 items-center justify-between rounded-full bg-[#1C1917] px-3 py-3 text-white poppins transition-transform duration-300 ease-out motion-reduce:transition-none ${isVisible ? "translate-y-0" : "-translate-y-[calc(100%_+_0.75rem)] pointer-events-none"}`}
    >
      {/* Logo container */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center gap-2 bg-[#FEA8F1] rounded-full w-9 h-9">
          <a href="/">
            <img src="/icons/logo.webp" alt="" className="w-8 rounded-full" />
          </a>
        </div>

        {/* text */}
        <div className="bricolage text-3xl">
          <a href="/">Bloom</a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="lg:flex hidden items-center gap-10">
        <a href="/">Steps</a>
        <a href="/">About us</a>
        <a href="#pricing">Pricing</a>
        <a href="/">Contact</a>
      </div>

      <div className="max-w-[100px] bg-white h-9 text-black lg:flex hidden items-center justify-center w-full rounded-full">
        Login
      </div>

      {/* Hamburger menu button */}
      <div className="lg:hidden flex w-10 h-10 justify-center pr-5 flex-col gap-2">
        <div className="w-full h-[2px] rounded-full bg-white" />
        <div className="w-full h-[2px] rounded-full bg-white" />
      </div>
    </div>
  );
}
