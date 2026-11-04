import React from "react";
import { Sparkles } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";
import { CompetitorLogo, YediiLogo } from "./CompetitorLogos";

export function PlatformOverview({ comparison }: { comparison: CompetitorComparison }) {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Executive Summary
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Platform Overview
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Understanding the architectural difference between AI-native support and legacy human helpdesks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Yedii Card */}
        <div className="bg-white border-2 border-[#141C2E]/20 rounded-2xl p-6 sm:p-7 shadow-2xs relative">
          <div className="flex items-center gap-2.5 mb-4">
            <YediiLogo className="w-8 h-8 text-xs font-bold" />
            <div>
              <div className="font-bold text-sm text-zinc-900">Yedii Platform</div>
              <div className="text-[11px] text-emerald-700 font-semibold">AI-First Autonomous Support</div>
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
            {comparison.overview.yediiSummary}
          </p>
        </div>

        {/* Competitor Card */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs">
          <div className="flex items-center gap-2.5 mb-4">
            <CompetitorLogo id={comparison.id} className="w-8 h-8" />
            <div>
              <div className="font-bold text-sm text-zinc-900">{comparison.name}</div>
              <div className="text-[11px] text-zinc-500 font-medium">{comparison.tagline}</div>
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
            {comparison.overview.competitorSummary}
          </p>
        </div>
      </div>

      {/* The Core Difference Callout */}
      <div className="bg-[#141C2E] text-white rounded-2xl p-6 sm:p-7 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white mb-1">The Fundamental Difference</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {comparison.overview.coreDifference}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
