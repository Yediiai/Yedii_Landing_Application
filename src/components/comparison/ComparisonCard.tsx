import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";
import { CompetitorLogo, YediiLogo } from "./CompetitorLogos";

export function ComparisonCard({ item }: { item: CompetitorComparison }) {
  return (
    <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Header with dual logos and VS badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <YediiLogo className="w-8 h-8 text-xs font-bold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              vs
            </span>
            <CompetitorLogo id={item.id} className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
            AI Comparison
          </span>
        </div>

        {/* Competitor Title */}
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">
          Yedii vs {item.name}
        </h3>

        <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mt-2.5 mb-5 line-clamp-3">
          {item.shortDescription}
        </p>

        {/* Highlights List */}
        <ul className="space-y-2 pt-4 border-t border-zinc-100 mb-6">
          {item.cardHighlights.slice(0, 3).map((h, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-zinc-700 leading-snug"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Link
        href={`/compare/${item.slug}`}
        className="w-full py-2.5 px-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-semibold hover:bg-[#141C2E] hover:text-white hover:border-[#141C2E] transition-all flex items-center justify-center gap-1.5 group-hover:border-zinc-300"
      >
        <span>Explore Comparison</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

