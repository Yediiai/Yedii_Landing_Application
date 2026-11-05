import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allComparisons } from "@/data/comparisons";
import { ComparisonCard } from "./ComparisonCard";

export function ComparisonSection() {
  return (
    <section id="compare" className="py-16 md:py-24 bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3 shadow-2xs">
            <span>Competitive Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 font-serif">
            See How Yedii Compares
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Discover how Yedii compares with leading customer support platforms and find the right AI-powered solution for your business.
          </p>
        </div>

        {/* 4 Competitor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allComparisons.map((item) => (
            <ComparisonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-900">
              Need a custom capability audit or migration consultation?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Our solutions team can review your existing helpdesk content and demonstrate a live AI agent pilot in 48 hours.
            </p>
          </div>
          <Link
            href="/enterprise"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shrink-0 shadow-xs"
          >
            <span>Request Platform Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
