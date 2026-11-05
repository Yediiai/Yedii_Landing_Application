"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-6 md:py-8 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-none bg-white text-[#141C2E] p-6 sm:p-8 overflow-hidden shadow-xs border border-[#E8E9EC]">
          {/* Subtle light background sheen */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-zinc-100/80 via-transparent to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-none bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/80">
                <span>Get started in under 5 minutes</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141C2E] leading-tight">
                Ready to automate operations with autonomous AI agents?
              </h2>

              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
                Connect your documentation, customize your persona, and deploy across web, WhatsApp, and Slack today.
              </p>

              <div className="pt-1.5 flex items-center gap-4 text-[11px] text-[#8A9099]">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  No credit card required
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <Link
                href="https://app.yedii.com/signup"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-none bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs active:scale-[0.99] group"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-none bg-white text-[#141C2E] font-medium text-xs sm:text-sm hover:bg-zinc-50 transition-all border border-[#E4E5E8] shadow-2xs"
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
