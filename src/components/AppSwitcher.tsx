"use client";

import React, { useState } from "react";
import { APPS_DATA, AppItem } from "@/data/apps";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AppSwitcherProps {
  onOpenDetails: (app: AppItem) => void;
  selectedAppId?: string;
}

interface AppLayoutConfig {
  colSpan: string;
  aspect: string;
  objectPosition: string;
}

const LAYOUT_CONFIGS: Record<string, AppLayoutConfig> = {
  accrual: {
    colSpan: "md:col-span-5",
    aspect: "aspect-[3/4]", // Tall portrait: shows the phone and balance sheet
    objectPosition: "object-[center_16%]",
  },
  rimba: {
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/13]", // Generous wide: gives enough vertical height for trees & timer
    objectPosition: "object-[center_22%]",
  },
  "tts-bareng": {
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/13]", // Generous wide: displays the crossword grid & clues
    objectPosition: "object-[center_20%]",
  },
  noticed: {
    colSpan: "md:col-span-5",
    aspect: "aspect-[3/4]", // Tall portrait: displays reader view and paper context
    objectPosition: "object-[center_16%]",
  },
};

export function AppSwitcher({ onOpenDetails }: AppSwitcherProps) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Finance", "Focus", "Game", "Notes"];

  const filteredApps =
    filter === "All"
      ? APPS_DATA
      : APPS_DATA.filter((app) => app.category.toLowerCase() === filter.toLowerCase());

  return (
    <section
      id="work"
      aria-label="Selected Inventions — Trouvaille Asymmetrical Architecture"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgba(232, 90, 42, 0.05), transparent 35%), #080706",
      }}
      className="relative w-full text-[#EDEAE4] py-20 sm:py-32 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Trouvaille Section Header with Reveal Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10"
        >
          <div className="space-y-4 max-w-3xl">
            <div className="eyebrow" style={{ color: "rgba(237,234,228,0.6)" }}>
              <span className="dot" style={{ background: "#e85a2a" }} />
              <span>(N&deg;02) &bull; SELECTED INVENTIONS</span>
            </div>

            <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-white">
              Four standalone apps,<br />
              <span className="it text-[#e85a2a]">shaped for a quieter life</span>.
            </h2>
          </div>

          <p className="max-w-sm font-sans text-xs sm:text-sm text-[#EDEAE4]/60 leading-relaxed font-light">
            A minimal archive of sovereign software instruments. Each designed as its own quiet world with zero telemetry, tactile touch response, and lasting restraint.
          </p>
        </motion.div>

        {/* Trouvaille Category Filter Strip */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-2 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-medium shadow-md scale-102"
                      : "bg-transparent text-white/60 hover:text-white border border-white/15 hover:border-white/35"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="font-sans text-xs uppercase tracking-[0.18em] text-white/40">
            Showing {filteredApps.length} of {APPS_DATA.length}
          </span>
        </div>

        {/* Trouvaille Asymmetrical 12-Column Grid with Layout Springs */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 gap-y-14 sm:gap-y-20 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app, index) => {
              const config =
                filteredApps.length === 1
                  ? { colSpan: "md:col-span-8 md:col-start-3", aspect: "aspect-[16/11]", objectPosition: "object-[center_20%]" }
                  : LAYOUT_CONFIGS[app.id] || { colSpan: "md:col-span-6", aspect: "aspect-[4/3]", objectPosition: "object-[center_20%]" };

              return (
                <motion.article
                  layout
                  key={app.id}
                  data-cursor="inspect"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                  onClick={() => onOpenDetails(app)}
                  className={`group cursor-pointer flex flex-col space-y-4 col-span-1 ${config.colSpan}`}
                >
                  {/* Trouvaille Photo Frame with Dynamic Aspect Ratio */}
                  <div
                    className={`relative w-full ${config.aspect} rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#161412] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.65)] transition-shadow duration-500 group-hover:shadow-[0_35px_80px_rgba(232,90,42,0.18)]`}
                  >
                    <picture>
                      <source srcSet={app.shot} type="image/webp" />
                      <img
                        src={app.shotFallback}
                        alt={app.name}
                        className={`w-full h-full object-cover ${config.objectPosition} transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-104`}
                      />
                    </picture>
                    <div className="vignette" />

                    {/* Top-Left Category Badge (Trouvaille Signature) */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-sans uppercase tracking-[0.18em] text-white/90 border border-white/15 transition-colors group-hover:border-white/30">
                        {app.category}
                      </span>
                      {app.isLive && (
                        <span className="px-3 py-1.5 rounded-full bg-[#e85a2a]/90 backdrop-blur-md text-[10px] font-sans uppercase tracking-[0.18em] text-white border border-[#e85a2a]">
                          Live
                        </span>
                      )}
                    </div>

                    {/* Bottom-Right Arrow Reticle Button with Hover Rotation */}
                    <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-[#e85a2a] group-hover:text-white group-hover:border-[#e85a2a] group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Metadata Line */}
                  <div className="flex items-baseline justify-between gap-4 pt-1">
                    <h3 className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight group-hover:text-[#e85a2a] transition-colors">
                      {app.name}<span className="text-[#e85a2a]">.</span>
                    </h3>
                    <span className="font-sans text-xs uppercase tracking-widest text-white/45">
                      {app.platform} &bull; {app.isLive ? "Available" : "2026"}
                    </span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm font-sans font-light text-[#EDEAE4]/65 leading-relaxed max-w-xl">
                    {app.description}
                  </p>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
