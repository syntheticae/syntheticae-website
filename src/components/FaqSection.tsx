"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How do you build iOS software without a Mac?",
    a: "Syntheticae leverages a modern high-performance cloud toolchain: Capacitor 8, React 19, Vite, and automated headless build runners. This allows us to architect pixel-perfect iOS applications with native hardware bridging, 60fps tactile touch physics, and zero legacy CocoaTouch bloat.",
  },
  {
    q: "Why are all apps offline-first and telemetry-free?",
    a: "We believe privacy is an architectural principle, not an optional settings toggle. Accrual, Rimba, and Noticed keep 100% of your financial transactions, reading notes, and focus logs in local encrypted vaults. There are zero third-party analytics trackers, no advertising SDKs, and no background tracking.",
  },
  {
    q: "Is TTS Bareng currently live on the Apple App Store?",
    a: "Yes. TTS Bareng (Teka Teki Silang) is available today on the iOS App Store. It is a quiet, beautifully crafted multiplayer Indonesian crossword experience featuring daily curated boards, real-time cooperative play, and zero intrusive interstitial ads.",
  },
  {
    q: "Are there subscription traps or in-app advertising?",
    a: "Never. We build enduring software for people who value quiet luxury and mental clarity. Our apps use either a single one-time lifetime unlock or simple, transparent patronage. No dark patterns, no guilt-trip notifications, and no artificial streaks.",
  },
  {
    q: "Can I collaborate or commission custom studio engineering?",
    a: "Syntheticae takes on a very limited number of select architectural and software design engagements per quarter. If you have an unhurried, ambitious digital project that demands depth and restraint, write directly to thesyntheticae@gmail.com.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      style={{
        background:
          "radial-gradient(circle at 12% 35%, rgba(232, 90, 42, 0.06), transparent 45%), #0A0908",
      }}
      className="relative w-full text-[#EDEAE4] py-24 sm:py-36 px-6 sm:px-10 lg:px-14 border-b border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Sticky Header (Meraki Pattern with Reveal Motion) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28 space-y-4"
        >
          <div className="eyebrow" style={{ color: "rgba(237,234,228,0.6)" }}>
            <span className="dot" style={{ background: "#e85a2a" }} />
            <span>(N&deg;04) &bull; FAQ</span>
          </div>

          <h2 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white">
            Common<br />
            <em className="font-serif italic font-light text-[#e85a2a] tracking-tight">
              questions.
            </em>
          </h2>

          <p className="text-sm sm:text-base text-[#EDEAE4]/60 font-sans font-light leading-relaxed max-w-sm pt-2">
            Details regarding our technical architecture, offline data vaults, and software distribution standards.
          </p>
        </motion.div>

        {/* Right Accordion List with Silky Spring Motion */}
        <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 text-left flex items-center justify-between gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-xl sm:text-2xl text-white group-hover:text-[#e85a2a] tracking-tight transition-colors">
                    {item.q}
                  </span>

                  {/* Circular Pill Indicator with Spring Rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#e85a2a] text-white border-[#e85a2a] shadow-[0_0_16px_rgba(232,90,42,0.35)]"
                        : "border-white/20 text-white/70 bg-white/[0.03] group-hover:border-white/50 group-hover:text-white"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3 h-3"
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Smooth Expand / Collapse Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-10 text-sm sm:text-base text-[#EDEAE4]/70 font-sans font-light leading-relaxed">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
