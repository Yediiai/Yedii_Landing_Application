"use client";

import { useState, useEffect } from "react";
import { AnalyticsDashboardPreview } from "./AnalyticsDashboardPreview";
import { PlaygroundPreview } from "./PlaygroundPreview";

export function InteractivePlayground() {
  const [activeView, setActiveView] = useState<"playground" | "analytics">("playground");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveView((prev) => (prev === "playground" ? "analytics" : "playground"));
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="playground" className="py-10 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold mb-2">
            Live Platform Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Experience Yedii in action
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
            Watch the real Yedii Agent Playground and live real-time Analytics cycle dynamically.
          </p>
        </div>

        {/* Rock-Solid Fixed Height Container: Absolute Inset Crossfade Prevents Layout Shift */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[620px] sm:h-[650px] lg:h-[670px] rounded-2xl"
        >
          {/* 1. Playground View Layer */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              activeView === "playground"
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-[0.98] pointer-events-none z-0"
            }`}
          >
            <PlaygroundPreview />
          </div>

          {/* 2. Analytics View Layer */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              activeView === "analytics"
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-[0.98] pointer-events-none z-0"
            }`}
          >
            <AnalyticsDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
