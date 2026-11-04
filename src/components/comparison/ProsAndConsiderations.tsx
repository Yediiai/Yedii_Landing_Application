import React from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";

export function ProsAndConsiderations({ comparison }: { comparison: CompetitorComparison }) {
  const { yediiPros, yediiConsiderations, competitorPros, competitorConsiderations } =
    comparison.prosAndConsiderations;

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-200/80">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Balanced Evaluation
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Pros &amp; Considerations
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          An honest assessment of where each platform excels and which use cases each serves best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Yedii Column */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h3 className="font-bold text-sm text-zinc-950">Yedii Advantages</h3>
            </div>
            <ul className="space-y-2 text-xs text-zinc-700">
              {yediiPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-zinc-500" />
              <h4 className="font-bold text-sm text-zinc-700">Yedii Considerations</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-600">
              {yediiConsiderations.map((con, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Competitor Column */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-sm text-zinc-950">{comparison.name} Advantages</h3>
            </div>
            <ul className="space-y-2 text-xs text-zinc-700">
              {competitorPros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-zinc-500" />
              <h4 className="font-bold text-sm text-zinc-700">{comparison.name} Considerations</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-600">
              {competitorConsiderations.map((con, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

