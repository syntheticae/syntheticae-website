"use client";

import React from "react";
import { APPS_DATA, AppItem } from "@/data/apps";
import { ArrowUpRight } from "lucide-react";

interface FeatureCard {
  appId: string;
  appName: string;
  category: string;
  icon: string;
  iconFallback: string;
  title: string;
  accent: string;
  highlight: string;
}

const FEATURES: FeatureCard[] = [
  {
    appId: "accrual",
    appName: "Accrual",
    category: "Finance",
    icon: "/assets/accrual-icon.webp",
    iconFallback: "/assets/accrual-icon.jpg",
    title: "Voice to transaction",
    accent: "#454a54",
    highlight: "#94a3b8",
  },
  {
    appId: "accrual",
    appName: "Accrual",
    category: "Finance",
    icon: "/assets/accrual-icon.webp",
    iconFallback: "/assets/accrual-icon.jpg",
    title: "Monte Carlo & FIRE foresight",
    accent: "#454a54",
    highlight: "#94a3b8",
  },
  {
    appId: "rimba",
    appName: "Rimba",
    category: "Focus",
    icon: "/assets/rimba-icon.webp",
    iconFallback: "/assets/rimba-icon.jpg",
    title: "Co-op planting with friends",
    accent: "#1f7a4a",
    highlight: "#34d399",
  },
  {
    appId: "rimba",
    appName: "Rimba",
    category: "Focus",
    icon: "/assets/rimba-icon.webp",
    iconFallback: "/assets/rimba-icon.jpg",
    title: "Living 3D forest island",
    accent: "#1f7a4a",
    highlight: "#34d399",
  },
  {
    appId: "tts-bareng",
    appName: "TTS Bareng",
    category: "Game",
    icon: "/assets/tts-icon.webp",
    iconFallback: "/assets/tts-icon.jpg",
    title: "Live co-op board by link/QR",
    accent: "#9a2238",
    highlight: "#fb7185",
  },
  {
    appId: "tts-bareng",
    appName: "TTS Bareng",
    category: "Game",
    icon: "/assets/tts-icon.webp",
    iconFallback: "/assets/tts-icon.jpg",
    title: "1v1 Arena & 90s Daily Rush",
    accent: "#9a2238",
    highlight: "#fb7185",
  },
  {
    appId: "noticed",
    appName: "Noticed",
    category: "Notes",
    icon: "/assets/noticed-icon.webp",
    iconFallback: "/assets/noticed-icon.jpg",
    title: "3D spatial buckram bookshelf",
    accent: "#7a4d2a",
    highlight: "#fbbf24",
  },
  {
    appId: "noticed",
    appName: "Noticed",
    category: "Notes",
    icon: "/assets/noticed-icon.webp",
    iconFallback: "/assets/noticed-icon.jpg",
    title: "Zen Reading Mode",
    accent: "#7a4d2a",
    highlight: "#fbbf24",
  },
];

interface FeatureStripProps {
  onSelectApp: (app: AppItem) => void;
}

export function FeatureStrip({ onSelectApp }: FeatureStripProps) {
  const handleClick = (appId: string) => {
    const app = APPS_DATA.find((a) => a.id === appId);
    if (app) {
      onSelectApp(app);
    }
  };

  return (
    <section
      id="inside"
      aria-label="Inside the apps"
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full"
    >
      <div className="mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#edeae4]">
          Small features, <i className="font-serif-italic">made to be felt.</i>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#edeae4]/60 font-light max-w-lg">
          Tactile micro-details crafted for clarity, focus, and quiet daily delight.
        </p>
      </div>

      {/* Grid of tactile feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {FEATURES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(item.appId)}
            className="group relative p-5 rounded-2xl border border-white/10 hover:border-white/30 text-left transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between aspect-[16/10] overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${item.accent}33 0%, #0d0d10 80%)`,
            }}
          >
            {/* Ambient hover glow */}
            <div
              className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: item.highlight }}
            />

            {/* Top row: App Name & Icon */}
            <div className="flex items-start justify-between w-full">
              <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">
                {item.appName}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-white/15 shadow-sm shrink-0">
                <picture>
                  <source srcSet={item.icon} type="image/webp" />
                  <img
                    src={item.iconFallback}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Bottom Title */}
            <div className="relative z-10 flex items-end justify-between w-full">
              <h3 className="text-base sm:text-lg font-normal text-white/90 group-hover:text-white transition-colors leading-snug">
                {item.title}
              </h3>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
