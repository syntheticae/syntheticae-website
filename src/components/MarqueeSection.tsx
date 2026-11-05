"use client";

import React from "react";

export function MarqueeSection() {
  const items = [
    "SYNTHETICAE ATELIER",
    "LOGIC & IMAGINATION",
    "FOUR STANDALONE INSTRUMENTS",
    "OFFLINE-FIRST ARCHITECTURES",
    "ZERO TELEMETRY",
    "ACCRUAL • PRIVATE FINANCE",
    "RIMBA • 3D FOCUS",
    "TTS BARENG • CROSSWORD LIVE",
    "NOTICED • READING ATELIER",
    "CAPACITOR 8 & REACT",
    "EST. MMXXVI",
  ];

  // Duplicate for infinite continuous ticker
  const loopItems = [...items, ...items, ...items];

  return (
    <div
      aria-label="Studio Marquee"
      className="relative w-full overflow-hidden py-3 sm:py-4 bg-[#0A0908] text-[#edeae4] border-y border-white/10 select-none z-20"
    >
      <div className="flex w-max animate-marquee space-x-8 sm:space-x-12 items-center">
        {loopItems.map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8 sm:space-x-12 shrink-0">
            <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[0.24em] font-medium text-white/70 hover:text-white transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
