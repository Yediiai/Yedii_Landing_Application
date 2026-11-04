import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ComparisonCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-[#141C2E] rounded-3xl p-8 sm:p-14 text-center text-white space-y-5 shadow-lg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Deploy in 5 Minutes
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white max-w-2xl mx-auto">
          Ready to Build Your AI Customer Support Agent?
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Create, train, and deploy your AI-powered support agent with Yedii.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://app.yedii.com/signup"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#141C2E] text-xs sm:text-sm font-bold hover:bg-zinc-100 transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Get Started with Yedii</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ai-playground"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 transition-colors text-center"
          >
            Test in AI Playground
          </Link>
        </div>
      </div>
    </section>
  );
}

