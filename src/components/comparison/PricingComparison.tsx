import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";

export function PricingComparison({ comparison }: { comparison: CompetitorComparison }) {
  const { yedii, competitor, summary } = comparison.pricing;

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-200/80">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Cost Transparency
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Pricing &amp; Total Cost of Ownership
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Verified pricing structures based on official published documentation. No hidden surcharges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Yedii Pricing Card */}
        <div className="bg-white border-2 border-[#141C2E] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Predictable Flat Rates
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Verified {yedii.verificationDate}</span>
            </div>

            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-serif">
                {yedii.startingPrice}
              </span>
              <span className="text-xs text-zinc-500 ml-1.5 font-sans">/ month starting</span>
            </div>

            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              {yedii.billingPeriod}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-6 text-xs text-zinc-700">
              <div className="font-semibold text-zinc-900 mb-1">Pricing Model:</div>
              <p className="text-zinc-600 leading-snug">{yedii.aiPricingModel}</p>

              <div className="pt-2 font-semibold text-zinc-900">Key Advantages:</div>
              {yedii.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/pricing"
            className="w-full py-2.5 rounded-xl bg-[#141C2E] text-white text-xs font-semibold hover:bg-black transition-colors text-center inline-flex items-center justify-center gap-1.5"
          >
            <span>View All Yedii Plans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Competitor Pricing Card */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md">
                {competitor.platformName} Published Pricing
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Verified {competitor.verificationDate}</span>
            </div>

            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-serif">
                {competitor.startingPrice}
              </span>
            </div>

            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              {competitor.billingPeriod}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-6 text-xs text-zinc-700">
              <div className="font-semibold text-zinc-900 mb-1">AI Pricing Model:</div>
              <p className="text-zinc-600 leading-snug">{competitor.aiPricingModel}</p>

              <div className="pt-2 font-semibold text-zinc-900">Plan Notes &amp; Restrictions:</div>
              <p className="text-zinc-600 leading-snug">{competitor.planRestrictions}</p>

              {competitor.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200/80 rounded-xl text-[11px] text-zinc-500 text-center font-mono">
            Source: Official {competitor.platformName} pricing documentation ({competitor.verificationDate})
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-950 leading-relaxed flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Economic Summary: </span>
          {summary}
        </div>
      </div>
    </section>
  );
}
