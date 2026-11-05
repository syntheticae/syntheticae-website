"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroVideo } from "@/components/HeroVideo";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AppSwitcher } from "@/components/AppSwitcher";
import { ManifestoSection } from "@/components/ManifestoSection";
import { StudioSection } from "@/components/StudioSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { AppModalSheet } from "@/components/AppModalSheet";
import { AppItem } from "@/data/apps";

export default function Home() {
  const [modalApp, setModalApp] = useState<AppItem | null>(null);

  const handleOpenDetails = (app: AppItem) => {
    setModalApp(app);
  };

  const handleSelectApp = (appId: string) => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0908] text-[#EDEAE4] overflow-x-hidden selection:bg-[#e85a2a] selection:text-white">
      {/* Wide Liquid Glass Floating Pill Navbar (Appears in Section 2) */}
      <Navbar />

      <main>
        {/* Section 1: Hero with Canyon Waves Texture */}
        <HeroVideo />

        {/* Marquee Section (Between Hero and Section 2) */}
        <MarqueeSection />

        {/* Section 2: Selected Inventions (Dark Canyon Tone, Screen-Fitted, Trouvaille Photo Frames) */}
        <AppSwitcher onOpenDetails={handleOpenDetails} />

        {/* Section 2.5: The Atelier Creed & Editorial Manifesto */}
        <ManifestoSection />

        {/* Section 3: The Studio & Process Movements */}
        <StudioSection />

        {/* Section 5: Common Questions Accordion */}
        <FaqSection />
      </main>

      {/* Section 6: Contact & Mega Architectural Footer (Deep Ink #1B1814) */}
      <Footer onSelectApp={handleSelectApp} />

      {/* Trouvaille Split-View Folio Inspection Modal */}
      <AppModalSheet app={modalApp} onClose={() => setModalApp(null)} />
    </div>
  );
}
