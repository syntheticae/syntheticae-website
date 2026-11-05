"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine hover capability
    if (window.matchMedia("(hover: none)").matches) return;

    let isFirst = true;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (isFirst) {
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        isFirst = false;
        setVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let rafId: number;
    const tick = () => {
      // Smooth lerp interpolation for the outer ring (Trouvaille / Meraki physics)
      const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
      ringPos.current.x = lerp(ringPos.current.x, target.current.x, 0.16);
      ringPos.current.y = lerp(ringPos.current.y, target.current.y, 0.16);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // Interactive element hover detection
    const onOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl || !targetEl.closest) return;

      // 1. Inspect badge hover (Trouvaille project cards)
      const inspectEl = targetEl.closest('[data-cursor="inspect"]');
      if (inspectEl) {
        setCursorText("INSPECT");
        document.body.classList.add("cursor-inspect");
        document.body.classList.remove("cursor-hover");
        return;
      }

      // 2. Regular interactive elements
      const interactiveSel =
        'a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor="hover"], .faq-q, .service-card, .btn-pill';
      if (targetEl.closest(interactiveSel)) {
        setCursorText(null);
        document.body.classList.add("cursor-hover");
        document.body.classList.remove("cursor-inspect");
        return;
      }

      // 3. Normal area
      setCursorText(null);
      document.body.classList.remove("cursor-hover", "cursor-inspect");
    };

    const onOut = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl || !targetEl.closest) return;

      const interactiveSel =
        'a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor="hover"], [data-cursor="inspect"], .faq-q, .service-card, .btn-pill';
      if (targetEl.closest(interactiveSel)) {
        setCursorText(null);
        document.body.classList.remove("cursor-hover", "cursor-inspect");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-hover", "cursor-inspect");
    };
  }, []);

  return (
    <>
      {/* Outer Lerping Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform flex items-center justify-center transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="cursor-label font-sans font-medium text-[9px] tracking-[0.2em] text-white uppercase select-none animate-fadeIn"
          >
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
