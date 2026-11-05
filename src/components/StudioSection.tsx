"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Practice {
  idx: string;
  title: [string, string];
  body: string;
  tags: string[];
}

const PRACTICES: Practice[] = [
  {
    idx: "S/01",
    title: ["Software", "engineering"],
    body: "Zero-telemetry iOS software engineered with Capacitor 8, React 19, and cloud build runners. Built to outlive trend cycles with zero legacy CocoaTouch bloat.",
    tags: ["Capacitor 8", "React 19", "Offline-First", "Cloud CI/CD", "AES-256"],
  },
  {
    idx: "S/02",
    title: ["Tactile", "physics"],
    body: "60fps native touch physics, bespoke typography, unhurried spring dynamics, and tactile haptics. Software that feels like an enduring physical instrument.",
    tags: ["60fps Dynamics", "Tactile Haptics", "Bespoke Type", "Spatial 3D", "Fluid Motion"],
  },
  {
    idx: "S/03",
    title: ["Private", "intelligence"],
    body: "Deterministic ledgers, receipt OCR, Monte Carlo forecasting, and air-gapped local databases. Zero third-party analytics trackers, zero advertising SDKs.",
    tags: ["Local Ledgers", "Receipt OCR", "Monte Carlo", "NFC E-Money", "Air-Gapped"],
  },
  {
    idx: "S/04",
    title: ["Quiet", "atelier"],
    body: "Digital sanctuaries, focus timers where trees grow in real-time, curated Indonesian crosswords, and field notebooks designed for deep human attention.",
    tags: ["Voxel Sanctuary", "Crosswords", "Field Notebook", "Zen Reading", "Patronage"],
  },
];

export function StudioSection() {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

  return (
    <section
      id="studio"
      aria-label="Studio Practices"
      style={{
        background:
          "radial-gradient(circle at 85% 20%, rgba(232, 90, 42, 0.08), transparent 45%), #0E0C0B",
      }}
      className="relative w-full text-[#EDEAE4] py-20 sm:py-32 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Meraki-Style Section Header with Reveal Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="eyebrow" style={{ color: "rgba(237,234,228,0.6)" }}>
              <span className="dot" style={{ background: "#e85a2a" }} />
              <span>(N&deg;03) &bull; WHAT WE DO</span>
            </div>

            <h2 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white">
              Four practices,<br />
              <em className="font-serif italic font-light text-[#e85a2a] tracking-tight">
                one perspective.
              </em>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#EDEAE4]/65 leading-relaxed font-light">
            We engage on full-scope projects across these four areas. Smaller, focused engagements happen by referral&mdash;get in touch and we&rsquo;ll talk.
          </p>
        </motion.div>

        {/* Meraki-Style 2x2 Services Grid (Interactive Spotlight Focus) */}
        <div
          onMouseLeave={() => setHoveredIdx(null)}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10"
        >
          {PRACTICES.map((practice, index) => {
            const isOdd = index % 2 === 0;
            const isHovered = hoveredIdx === practice.idx;
            const isOtherHovered = hoveredIdx !== null && !isHovered;

            return (
              <motion.article
                key={practice.idx}
                onMouseEnter={() => setHoveredIdx(practice.idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                className={`group flex flex-col justify-between py-10 sm:py-14 px-4 sm:px-8 lg:px-10 border-b border-white/10 transition-all duration-500 cursor-default ${
                  isOdd ? "md:border-r border-white/10 md:pr-10" : "md:pl-10"
                } ${
                  isHovered
                    ? "bg-white/[0.035] opacity-100 shadow-[inset_0_0_80px_rgba(232,90,42,0.08)]"
                    : isOtherHovered
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                <div className="space-y-5">
                  {/* Practice Index */}
                  <span className={`font-sans text-xs tracking-[0.2em] uppercase font-medium block transition-colors duration-300 ${
                    isHovered ? "text-[#e85a2a]" : "text-white/50"
                  }`}>
                    {practice.idx}
                  </span>

                  {/* Title: Sans Bold Word + Serif Italic Word */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white flex items-baseline gap-2 flex-wrap">
                    <span className="font-sans font-medium tracking-tight group-hover:text-[#e85a2a] transition-colors">
                      {practice.title[0]}
                    </span>
                    <em className="font-serif italic font-light text-[#e85a2a]">
                      {practice.title[1]}
                    </em>
                  </h3>

                  {/* Description Paragraph */}
                  <p className="font-sans text-sm sm:text-base text-[#EDEAE4]/70 font-light leading-relaxed max-w-lg">
                    {practice.body}
                  </p>
                </div>

                {/* Pill Strip Tags */}
                <div className="pt-8">
                  <ul className="flex flex-wrap gap-2">
                    {practice.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`px-3.5 py-1.5 rounded-full border text-[11px] sm:text-xs font-sans tracking-wide uppercase transition-all duration-300 ${
                          isHovered
                            ? "bg-white/[0.08] border-[#e85a2a]/50 text-white"
                            : "bg-white/[0.04] border-white/10 text-white/70"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
