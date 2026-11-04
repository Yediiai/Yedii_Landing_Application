import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CompetitorComparison } from "@/data/comparisons/types";
import { CompetitorLogo, YediiLogo } from "./CompetitorLogos";

export function ComparisonHero({ comparison }: { comparison: CompetitorComparison }) {
  return (
    <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-zinc-200/80">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <Link href="/#compare" className="hover:text-zinc-900 transition-colors">
          Comparisons
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <span className="font-medium text-zinc-900">
          Yedii vs {comparison.name}
        </span>
      </nav>

      {/* Brand Identity Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-3.5 py-1.5 shadow-2xs">
          <YediiLogo className="w-5 h-5 text-[11px]" />
          <span className="text-xs font-bold text-zinc-900">Yedii</span>
          <span className="text-xs font-mono text-zinc-400">vs</span>
          <CompetitorLogo id={comparison.id} className="w-5 h-5" />
          <span className="text-xs font-bold text-zinc-900">{comparison.name}</span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          2026 Comparison
        </span>
      </div>

      {/* Main H1 Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 font-serif leading-tight mb-5">
        {comparison.hero.title}
      </h1>

      <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed mb-8">
        {comparison.hero.subtitle}
      </p>

      {/* Hero CTA buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="https://app.yedii.com/signup"
          className="px-6 py-3 rounded-xl bg-[#141C2E] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shadow-xs inline-flex items-center gap-2"
        >
          <span>Get Started with Yedii</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="#features-table"
          className="px-6 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}
