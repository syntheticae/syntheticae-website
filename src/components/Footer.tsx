"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { motion } from "framer-motion";

interface FooterProps {
  onSelectApp?: (appId: string) => void;
}

export function Footer({ onSelectApp }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      aria-label="Studio Contact & Directory"
      style={{
        background:
          "radial-gradient(circle at 75% 20%, rgba(232, 90, 42, 0.08), transparent 35%), radial-gradient(circle at 50% 95%, rgba(232, 90, 42, 0.12), transparent 50%), #040303",
      }}
      className="relative w-full text-[#EDEAE4] border-t border-white/10 pt-20 sm:pt-32 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Contact Header Block (Meraki Pattern with Reveal Motion) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="space-y-8 max-w-5xl"
        >
          <div className="eyebrow" style={{ color: "rgba(237,234,228,0.6)" }}>
            <span className="dot" style={{ background: "#e85a2a" }} />
            <span>(N&deg;05) &bull; GET IN TOUCH &bull; BOOKING 2026</span>
          </div>

          <h2 className="font-sans font-medium text-[clamp(44px,8.5vw,120px)] leading-[0.9] tracking-[-0.04em] text-white">
            Let&rsquo;s make<br />
            something <em className="font-serif italic font-light text-[#e85a2a]">quiet</em><br />
            and permanent.
          </h2>

          <div className="pt-2">
            <a
              href="mailto:thesyntheticae@gmail.com"
              className="group inline-flex items-center gap-4 px-7 sm:px-9 py-4 sm:py-5 rounded-full bg-white text-[#040303] hover:bg-[#e85a2a] hover:text-white font-sans text-base sm:text-lg font-medium tracking-tight transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>thesyntheticae@gmail.com</span>
              <span className="w-8 h-8 rounded-full bg-[#040303] text-white group-hover:bg-white group-hover:text-[#040303] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* 4-Column Directory Grid (Meraki .contact-grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14 pt-14 border-t border-white/15">
          
          {/* Column 1: Inventions */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#e85a2a] font-medium">
              01 &bull; Inventions
            </h4>
            <ul className="space-y-3 font-sans text-sm sm:text-base font-normal text-[#EDEAE4]/80">
              <li>
                <button
                  onClick={() => onSelectApp ? onSelectApp("accrual") : scrollTo("work")}
                  className="hover:text-[#e85a2a] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                >
                  <span>Accrual</span>
                  <span className="text-[10px] font-sans text-white/40 border border-white/15 rounded-full px-2 py-0.5">Finance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectApp ? onSelectApp("rimba") : scrollTo("work")}
                  className="hover:text-[#e85a2a] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                >
                  <span>Rimba</span>
                  <span className="text-[10px] font-sans text-white/40 border border-white/15 rounded-full px-2 py-0.5">Focus</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectApp ? onSelectApp("tts-bareng") : scrollTo("work")}
                  className="hover:text-[#e85a2a] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                >
                  <span>TTS Bareng</span>
                  <span className="text-[10px] font-sans bg-[#e85a2a]/20 text-[#e85a2a] border border-[#e85a2a]/40 rounded-full px-2 py-0.5 font-medium">Live</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectApp ? onSelectApp("noticed") : scrollTo("work")}
                  className="hover:text-[#e85a2a] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                >
                  <span>Noticed</span>
                  <span className="text-[10px] font-sans text-white/40 border border-white/15 rounded-full px-2 py-0.5">Notes</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#e85a2a] font-medium">
              02 &bull; Studio
            </h4>
            <ul className="space-y-3 font-sans text-sm sm:text-base font-normal text-[#EDEAE4]/80">
              <li>
                <button
                  onClick={() => scrollTo("studio")}
                  className="hover:text-[#e85a2a] transition-colors text-left cursor-pointer block"
                >
                  About Syntheticae
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("studio")}
                  className="hover:text-[#e85a2a] transition-colors text-left cursor-pointer block"
                >
                  Four Practices
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("faq")}
                  className="hover:text-[#e85a2a] transition-colors text-left cursor-pointer block"
                >
                  Common Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#e85a2a] font-medium">
              03 &bull; Privacy
            </h4>
            <ul className="space-y-3 font-sans text-sm sm:text-base font-normal text-[#EDEAE4]/80">
              <li>
                <Link
                  href="/privacy/accrual"
                  className="hover:text-[#e85a2a] transition-colors block"
                >
                  Accrual Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/rimba"
                  className="hover:text-[#e85a2a] transition-colors block"
                >
                  Rimba Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/tts-bareng"
                  className="hover:text-[#e85a2a] transition-colors block"
                >
                  TTS Bareng Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/noticed"
                  className="hover:text-[#e85a2a] transition-colors block"
                >
                  Noticed Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Elsewhere */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#e85a2a] font-medium">
              04 &bull; Elsewhere
            </h4>
            <ul className="space-y-3 font-sans text-sm sm:text-base font-normal text-[#EDEAE4]/80">
              <li>
                <a
                  href="https://instagram.com/synthetic.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e85a2a] transition-colors inline-flex items-center gap-2"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#e85a2a]" />
                  <span>Instagram, @synthetic.ae</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thesyntheticae@gmail.com"
                  className="hover:text-[#e85a2a] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-white/40" />
                  <span>Direct &bull; thesyntheticae@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mega Wordmark (Solid White, Safe Clamp, Meraki Display Font) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="select-none text-center overflow-hidden pt-12 sm:pt-20 pb-4"
          style={{
            fontFamily: '"Geist", "Inter", -apple-system, sans-serif',
            fontSize: "clamp(52px, 16.5vw, 270px)",
            fontWeight: 500,
            letterSpacing: "-0.05em",
            lineHeight: 0.82,
            whiteSpace: "nowrap",
          }}
        >
          <span className="text-white">
            syntheticae
          </span>
        </motion.div>

        {/* Bottom Status Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs uppercase tracking-[0.16em] text-[#EDEAE4]/50">
          <span>&copy; syntheticae studio, MMXXVI</span>
          <span className="hidden md:inline">A small studio &bull; with a quiet craft</span>
          <button
            onClick={() => scrollTo("top")}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-[#e85a2a]"
          >
            <span>Back to top &uarr;</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
