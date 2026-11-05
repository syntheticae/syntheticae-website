"use client";

import React from "react";
import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section
      aria-label="Studio Creed & Manifesto"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(232, 90, 42, 0.05), transparent 65%), #090807",
      }}
      className="relative w-full text-[#EDEAE4] py-24 sm:py-36 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex items-center justify-center gap-2.5 text-xs font-sans uppercase tracking-[0.22em] text-white/55"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]" />
          <span>(MMXXVI) &bull; THE SYNTHETICAE CREED</span>
        </motion.div>

        {/* Big Editorial Manifesto Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-sans font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.15] tracking-[-0.025em] text-white/95 max-w-4xl mx-auto"
        >
          &ldquo;We architect sovereign software instruments &mdash; built with the{" "}
          <em className="font-serif italic font-light text-[#e85a2a] not-italic-desktop">
            tactile weight
          </em>{" "}
          of physical objects, and the{" "}
          <em className="font-serif italic font-light text-[#e85a2a]">
            quiet patience
          </em>{" "}
          of an enduring workshop.&rdquo;
        </motion.blockquote>

        {/* Atelier Tenets Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="pt-6 sm:pt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] text-white/40 border-t border-white/10 max-w-2xl mx-auto"
        >
          <span>Sovereign Software</span>
          <span className="text-white/20 hidden sm:inline">&bull;</span>
          <span>Zero Telemetry &bull; Air-Gapped</span>
          <span className="text-white/20 hidden sm:inline">&bull;</span>
          <span>MMXXVI</span>
        </motion.div>

      </div>
    </section>
  );
}
