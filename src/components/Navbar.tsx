"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [hidden, setHidden] = useState(true); // Default hidden on Hero
  const [inSectionTwo, setInSectionTwo] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [progress, setProgress] = useState(0);
  const lastScrollY = useRef(0);

  // Scroll tracking: Navbar appears only from Section 2 onwards
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(p);

      // Hero threshold: When user scrolls past 65% of viewport height
      const heroThreshold = window.innerHeight * 0.65;
      const pastHero = currentScrollY >= heroThreshold;

      setInSectionTwo(pastHero);

      if (!pastHero) {
        // In Section 1 (Hero): Navbar is always hidden
        setHidden(true);
      } else {
        // In Section 2 and below:
        // If just crossed from Hero into Section 2, reveal navbar immediately
        if (lastScrollY.current < heroThreshold) {
          setHidden(false);
        } else if (currentScrollY > lastScrollY.current + 10) {
          // Scrolling down
          setHidden(true);
        } else if (currentScrollY < lastScrollY.current - 6) {
          // Scrolling up
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;

      // Active section spy
      const sections = ["top", "work", "studio", "faq", "contact"];
      const scrollPos = currentScrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top 2px Scroll Progress Bar (Reveals past Hero) */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2px] z-[120] pointer-events-none transition-opacity duration-300 ${
          inSectionTwo ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-[#e85a2a] transition-all duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Wide Full-Screen Floating Pill Navbar — Appears in Section 2 */}
      <header
        className={`fixed z-50 top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[94vw] sm:w-[96vw] max-w-[1400px] transition-all duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          hidden || !inSectionTwo
            ? "-translate-y-28 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
      >
        {/* Dark Liquid Glass Wide Pill Navbar */}
        <nav
          aria-label="Main Navigation"
          className="w-full flex items-center justify-between px-4 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-300 bg-[#0A0908]/90 backdrop-blur-2xl border border-white/15 shadow-[0_14px_44px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] text-[#EDEAE4]"
        >
          {/* Left: Brand Link */}
          <button
            onClick={() => scrollTo("top")}
            className="flex items-center gap-2 pl-1 pr-3 py-1.5 rounded-full hover:bg-white/10 transition-all group cursor-pointer"
            aria-label="Syntheticae Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-[-0.015em] text-white">
              Syntheticae<span className="text-[#e85a2a]">.</span>
            </span>
            <span className="font-serif italic font-light text-xs text-white/50 hidden xs:inline">
              atelier
            </span>
          </button>

          {/* Center: Section Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => scrollTo("work")}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === "work"
                  ? "bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Inventions
            </button>

            <button
              onClick={() => scrollTo("studio")}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === "studio"
                  ? "bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Studio
            </button>

            <button
              onClick={() => scrollTo("faq")}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === "faq"
                  ? "bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Right: Contact CTA Button */}
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#e85a2a] hover:bg-[#d44e20] text-white transition-all text-xs sm:text-sm font-medium cursor-pointer shadow-md"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </button>
        </nav>
      </header>
    </>
  );
}
