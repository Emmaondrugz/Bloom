"use client";
import { useState, useEffect } from "react";
import Hero from "../components/Home/hero";
import Whyus from "../components/Home/whyus";
import Steps from "../components/Home/steps";
import Features from "../components/Home/features";
import Price_section from "../components/Home/price_section";
import Comments from "../components/Home/comments";
import Faq from "../components/Home/faq";
import Footer from "../components/Home/footer";
import SideNav from "../components/Home/sidenav";

export default function Home() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center overflow-hidden justify-center bg-white text-black">
      <Hero onToggleSideNav={toggleSideNav} />
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <div className="max-w-[1200px] w-full px-4">
        <Whyus />
        <Steps />
      </div>
      <div className="w-full px-4 bg-[#ffff] flex justify-center">
        <Features />
      </div>
      <div className="max-w-[1200px] w-full px-4">
        <Price_section />
      </div>
      <Comments />
      <div className="max-w-[1200px] w-full px-4">
        <Faq />
      </div>
      <div className="max-w-[1200px] w-full px-4">
        <Footer />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#1f514c] hover:bg-[#2a6b63] text-white w-12 h-12 rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-50 group ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
