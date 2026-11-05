"use client";

import React from "react";

export function PhilosophySection() {
  const stats = [
    { n: "04", suf: ".", label: "Standalone apps completed", sub: "Since 2026" },
    { n: "100", suf: "%.", label: "Offline-first & sovereign", sub: "Local AES-256" },
    { n: "00", suf: ".", label: "Telemetry & tracking SDKs", sub: "Zero surveillance" },
    { n: "01", suf: ".", label: "Exacting standard of craft", sub: "Capacitor 8 & React" },
  ];

  return (
    <section
      id="philosophy"
      aria-label="Studio Philosophy"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full border-b border-[#D9D1BF]"
    >
      {/* Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="eyebrow">
          <span className="dot" />
          <span>(N&deg;01) &bull; Philosophy</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#82796A]">
          A practice, not a portfolio
        </div>
      </div>

      {/* Main Quote */}
      <div className="max-w-4xl mb-16 sm:mb-24">
        <p className="font-serif font-light text-[clamp(30px,4.5vw,62px)] leading-[1.12] tracking-[-0.015em] text-[#1B1814]">
          We are slow on purpose.{" "}
          <span className="it text-[#944E2C]">
            Each app earns its restraint
          </span>{" "}
          &mdash; the financial ledger that requires no cloud account, the quiet focus tree that grows in real time, the words you solve with friends, and the manuscript you read in unhurried silence.
        </p>
      </div>

      {/* 4 Stat Counters (Trouvaille Grid) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-10 border-t border-[#D9D1BF]">
        {stats.map((s, i) => (
          <div key={i} className="space-y-3">
            <div className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-[#1B1814] leading-none">
              <span>{s.n}</span>
              <span className="text-[#B5663F]">{s.suf}</span>
            </div>
            <div className="text-sm font-normal text-[#36312A] leading-snug">
              {s.label}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#82796A]">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
