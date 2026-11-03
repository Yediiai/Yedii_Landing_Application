"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { AnalyticsDashboardPreview } from "./AnalyticsDashboardPreview";
import { PlaygroundPreview } from "./PlaygroundPreview";

export function InteractivePlayground() {
  const [activeView, setActiveView] = useState<"playground" | "analytics">("playground");
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      // 1. Smoothly fade out and scale down
      setIsVisible(false);

      // 2. Switch view halfway through transition
      setTimeout(() => {
        setActiveView((prev) => (prev === "playground" ? "analytics" : "playground"));
        // 3. Smoothly fade in and scale back up to 1
        setIsVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="playground" className="py-10 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            Live Platform Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Experience Yedii in action
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
            Watch the real Yedii Agent Playground and live real-time Analytics cycle dynamically.
          </p>
        </div>

        {/* Animated Container: 5-second Loop with Opacity 0 -> 1 & Scale 0.98 -> 1 */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.98] translate-y-1 pointer-events-none"
          }`}
        >
          {activeView === "playground" ? (
            <PlaygroundPreview />
          ) : (
            <AnalyticsDashboardPreview />
          )}
        </div>
      </div>
    </section>
  );
}
