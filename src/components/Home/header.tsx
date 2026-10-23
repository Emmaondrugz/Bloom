"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Steps", href: "#steps" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isMenuOpen) return;

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
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsVisible(true);
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <header
        inert={!isVisible && !isMenuOpen}
        className={`poppins fixed top-3 left-1/2 z-50 w-[calc(100%_-_1.5rem)] max-w-370 -translate-x-1/2 rounded-[26px] bg-[#1c1917] p-1.5 text-white transition-[translate,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:flex lg:items-center lg:justify-between lg:rounded-full lg:px-3 lg:py-3 ${isVisible || isMenuOpen ? "translate-y-0" : "pointer-events-none -translate-y-[calc(100%_+_0.75rem)]"}`}
      >
        <div className="flex h-11 items-center justify-between px-1.5 lg:h-auto lg:px-0">
          <Link
            href="/"
            className="flex items-center gap-1.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-[#fea8f1] lg:size-9">
              <Image
                src="/icons/logo.webp"
                alt=""
                width={32}
                height={32}
                className="size-7 rounded-full lg:size-8"
              />
            </span>
            <span className="bricolage text-2xl leading-none lg:text-3xl">
              Bloom
            </span>
          </Link>

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className={`relative flex size-8 items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fea8f1] lg:hidden ${isMenuOpen ? "bg-[#fea8f1] text-[#1c1917]" : "text-white"}`}
          >
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${isMenuOpen ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${isMenuOpen ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>

        <div
          id="mobile-navigation"
          inert={!isMenuOpen}
          aria-hidden={!isMenuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="mt-1 rounded-[20px] bg-white px-4 py-3 text-[#1c1917]"
            >
              {navigation.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-menu-link block rounded-xl px-1 py-2.5 text-[20px] font-medium focus-visible:outline-2 focus-visible:outline-[#aa94ff] ${isMenuOpen ? "mobile-menu-link--open" : ""}`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 55 + 90}ms`
                      : "0ms",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:+2348029886673"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 flex h-13 items-center gap-1 rounded-full text-[#1c1917] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fea8f1]"
            >
              <span className="flex h-full flex-1 items-center rounded-full bg-white pl-6 text-xl font-medium">
                Book a call
              </span>
              <span
                className="flex size-11 items-center justify-center rounded-full bg-[#fea8f1]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M5 19 19 5M8 5h11v11" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 lg:flex"
        >
          {navigation.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden h-9 w-full max-w-[100px] items-center justify-center rounded-full bg-white text-black lg:flex">
          Login
        </div>
      </header>
    </>
  );
}
