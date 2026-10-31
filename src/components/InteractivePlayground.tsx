"use client";

import { useState } from "react";
import { Sparkles, BarChart3, MessageSquare } from "lucide-react";
import { AnalyticsDashboardPreview } from "./AnalyticsDashboardPreview";
import { PlaygroundPreview } from "./PlaygroundPreview";

export function InteractivePlayground() {
  const [activeView, setActiveView] = useState<"playground" | "analytics">("playground");

  return (
    <section id="playground" className="py-10 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            Live Platform Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Experience Yedii in action
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
            Try the real Yedii Agent Playground with dynamic thinking steps, or explore live analytics powered by Recharts.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setActiveView("playground")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeView === "playground"
                ? "bg-[#141C2E] text-white shadow-xs ring-1 ring-[#141C2E]/20"
                : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Agent Playground</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-normal">
              Interactive
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView("analytics")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeView === "analytics"
                ? "bg-[#141C2E] text-white shadow-xs ring-1 ring-[#141C2E]/20"
                : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Live Analytics</span>
          </button>
        </div>

        {/* VIEW 1: EXACT APP.YEDII.COM/PLAYGROUND */}
        {activeView === "playground" && (
          <div className="transition-opacity duration-200">
            <PlaygroundPreview />
          </div>
        )}

        {/* VIEW 2: EXACT APP.YEDII.COM/ANALYTICS POWERED BY RECHARTS */}
        {activeView === "analytics" && (
          <div className="transition-opacity duration-200">
            <AnalyticsDashboardPreview />
          </div>
        )}
      </div>
    </section>
  );
}
