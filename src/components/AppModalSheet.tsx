"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AppItem } from "@/data/apps";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AppModalSheetProps {
  app: AppItem | null;
  onClose: () => void;
}

export function AppModalSheet({ app, onClose }: AppModalSheetProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(app?.shot || null);
  }, [app]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (app) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  const currentImage = activeImage || app.shot;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container (Trouvaille & Meraki Split View) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0E0D0C] text-[#EDEAE4] border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex flex-col no-scrollbar"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto max-h-[92vh]">
            
            {/* Left Column: Photo Showcase & Gallery Switcher */}
            <div className="lg:col-span-6 relative bg-[#161412] min-h-[380px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden flex flex-col justify-between">
              <picture>
                <source srcSet={currentImage} type="image/webp" />
                <img
                  src={currentImage}
                  alt={app.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </picture>
              <div className="vignette" />

              {/* Category & Status Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md font-sans text-[11px] uppercase tracking-[0.18em] text-white border border-white/15">
                  {app.category} &bull; {app.platform}
                </span>
              </div>

              {/* Gallery Mini Carousel Thumbnails */}
              {app.gallery && app.gallery.length > 1 && (
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-2.5 p-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 overflow-x-auto no-scrollbar">
                  {app.gallery.map((item, idx) => {
                    const isSelected = currentImage === item.src;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(item.src)}
                        className={`relative w-12 h-14 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-[#e85a2a] scale-105 shadow-[0_0_12px_rgba(232,90,42,0.4)]"
                            : "border-white/20 opacity-55 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    );
                  })}
                  <span className="text-[10px] font-sans uppercase tracking-widest text-white/50 pl-1 shrink-0 hidden sm:inline">
                    {app.gallery.length} Views
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Editorial Specifications & Blueprint */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Header & Close Button */}
                <div className="flex items-center justify-between">
                  <div className="eyebrow" style={{ color: "rgba(237,234,228,0.6)" }}>
                    <span className="dot" style={{ background: "#e85a2a" }} />
                    <span>Invention Archive</span>
                  </div>

                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all flex items-center justify-center text-xs font-sans cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif font-light text-4xl sm:text-5xl tracking-[-0.02em] text-white">
                    {app.name}<span className="text-[#e85a2a]">.</span>
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[#e85a2a] mt-1">
                    {app.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#EDEAE4]/75 font-sans font-light leading-relaxed">
                  {app.description}
                </p>

                {/* Tactile Blueprint Architecture Matrix */}
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-widest text-white/50 block">
                      Engineering Blueprint
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#e85a2a] font-medium">
                      Verified Sovereign
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-white/45 block">Binary Engine</span>
                      <span className="text-white font-medium block">Capacitor 8 &bull; React 19</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-white/45 block">Data Vault</span>
                      <span className="text-white font-medium block">Local AES-256 Vault</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-white/45 block">Telemetry</span>
                      <span className="text-[#34d399] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                        0 SDKs &bull; Air-Gapped
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-white/45 block">Distribution</span>
                      <span className="text-white font-medium block">Lifetime Sovereign</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-white/50 block">
                    Core Capabilities
                  </span>
                  <div className="space-y-2">
                    {app.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-sans"
                      >
                        <div className="font-medium text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-[#EDEAE4]/65 mt-1 font-light leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {app.webUrl && (
                    <a
                      href={app.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#e85a2a] hover:bg-[#d44e20] text-white font-sans text-xs uppercase tracking-wider font-medium transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Launch Web App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 text-white/85 hover:text-white border border-white/15 font-sans text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                    </a>
                  )}
                </div>

                <Link
                  href={app.privacyUrl}
                  onClick={onClose}
                  className="font-sans text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e85a2a]" />
                  <span>Privacy Policy</span>
                </Link>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
