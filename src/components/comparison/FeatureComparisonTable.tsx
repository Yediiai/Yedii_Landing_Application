import React from "react";
import { Check, X, AlertCircle } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";
import { CompetitorLogo, YediiLogo } from "./CompetitorLogos";

export function FeatureComparisonTable({ comparison }: { comparison: CompetitorComparison }) {
  return (
    <section id="features-table" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Side-By-Side Audit
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Detailed Feature Comparison
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Comprehensive feature availability verified against official {comparison.name} documentation as of 2026.
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-2xs">
        {/* Horizontal scroll container with scroll hint on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/80 text-xs text-zinc-500 uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold w-2/5">Capability (14 Points)</th>
                <th className="py-4 px-5 font-bold text-[#141C2E] bg-emerald-50/40 border-x border-emerald-100 w-3/10">
                  <div className="flex items-center gap-2">
                    <YediiLogo className="w-5 h-5 text-[10px]" />
                    <span>Yedii Platform</span>
                  </div>
                </th>
                <th className="py-4 px-5 font-semibold text-zinc-700 w-3/10">
                  <div className="flex items-center gap-2">
                    <CompetitorLogo id={comparison.id} className="w-5 h-5" />
                    <span>{comparison.name}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-xs">
              {comparison.featureTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                  {/* Feature Name */}
                  <td className="py-4 px-5 align-top">
                    <div className="font-semibold text-zinc-900 text-[13px]">{row.name}</div>
                  </td>

                  {/* Yedii Column */}
                  <td className="py-4 px-5 align-top bg-emerald-50/20 border-x border-emerald-100/60">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900">{row.yedii.label}</div>
                        {row.yedii.detail && (
                          <div className="text-[11.5px] text-zinc-600 mt-0.5 leading-snug">
                            {row.yedii.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Competitor Column */}
                  <td className="py-4 px-5 align-top">
                    <div className="flex items-start gap-2">
                      {row.competitor.supported === true ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      ) : row.competitor.supported === "partial" || row.competitor.supported === "addon" ? (
                        <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-zinc-900">{row.competitor.label}</div>
                        {row.competitor.detail && (
                          <div className="text-[11.5px] text-zinc-600 mt-0.5 leading-snug">
                            {row.competitor.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Fully Supported
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Add-on or Limited
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400" /> Not Native
            </span>
          </div>
          <span>Swipe horizontally on mobile to view all columns →</span>
        </div>
      </div>
    </section>
  );
}
