"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroVideo() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cinematic scroll parallax: background drifts down gently while text descends & dissolves
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "36%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="top"
      aria-label="Syntheticae Hero"
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:px-14 lg:py-12 overflow-hidden select-none"
    >
      {/* Background Image: Canyon Waves Texture with Scroll Parallax */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0 will-change-transform">
        <picture>
          <source
            srcSet="/assets/hero-canyon-2560.webp"
            media="(min-width: 1920px)"
            type="image/webp"
          />
          <source
            srcSet="/assets/hero-canyon-1920.webp"
            media="(min-width: 1080px)"
            type="image/webp"
          />
          <source
            srcSet="/assets/hero-canyon-1080.webp"
            type="image/webp"
          />
          <img
            src="/assets/hero-canyon.jpg"
            alt="Syntheticae Canyon Wave Texture"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Ambient Darkened Gradient for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70 pointer-events-none" />
      </motion.div>

      {/* Top Header: Pure Quiet Atelier Studio Bar (No redundant duplicate menu) */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative z-10 w-full pt-2 flex items-center justify-between text-xs font-sans uppercase tracking-[0.22em] text-white/80"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]" />
          <span className="font-medium text-white">Syntheticae Studio</span>
        </div>
        <div className="hidden xs:flex items-center gap-4 text-white/60">
          <span>MMXXVI</span>
        </div>
      </motion.header>

      {/* Bottom Block: Tagline + Massive SYNTHETICAE Wordmark with Scroll Parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl pb-2 sm:pb-4 space-y-4 will-change-transform"
      >
        {/* Tagline text with smooth slide-up reveal */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-white leading-snug tracking-tight max-w-2xl drop-shadow-md"
        >
          At the intersection of logic and imagination. Creating a new reality through the power of synthesis.
        </motion.p>

        {/* Giant architectural SYNTHETICAE wordmark directly matching reference mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          className="pt-1 sm:pt-2"
        >
          <h1 className="font-sans font-bold text-[clamp(44px,14.5vw,220px)] leading-[0.82] tracking-[-0.035em] text-white uppercase select-none drop-shadow-2xl">
            SYNTHETICAE
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
