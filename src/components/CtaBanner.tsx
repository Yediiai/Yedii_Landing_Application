"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-8 md:py-10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#141C2E] text-white p-6 sm:p-10 overflow-hidden shadow-lg border border-[#222B3E]">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-emerald-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-2xl pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300 text-[11px] font-medium border border-white/10">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Get started in under 5 minutes</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Ready to automate operations with autonomous AI agents?
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Connect your documentation, customize your persona, and deploy across web, WhatsApp, and Slack today.
              </p>

              <div className="pt-2 flex items-center gap-4 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SOC2 Certified
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  No credit card required
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all shadow-sm active:scale-[0.99] group"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[8px] bg-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/15 transition-all border border-white/15"
              >
                <span>View Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
