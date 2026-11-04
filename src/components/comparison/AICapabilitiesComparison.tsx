import React from "react";
import { Brain, CheckCircle2 } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";

export function AICapabilitiesComparison({ comparison }: { comparison: CompetitorComparison }) {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-200/80">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Core AI Benchmark
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          AI Capabilities &amp; Architecture
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Comparing the actual AI engineering underneath: ingestion, LLM routing, and response grounding.
        </p>
      </div>

      <div className="space-y-6">
        {comparison.aiCapabilities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#141C2E]" />
                <h3 className="font-bold text-sm sm:text-base text-zinc-950">
                  {item.dimension}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                {item.verdict}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-3.5 bg-emerald-50/30 rounded-xl border border-emerald-100/80">
                <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yedii Experience
                </div>
                <p className="text-zinc-700 leading-relaxed">{item.yedii}</p>
              </div>

              <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200/80">
                <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-400" /> {comparison.name} Experience
                </div>
                <p className="text-zinc-600 leading-relaxed">{item.competitor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
