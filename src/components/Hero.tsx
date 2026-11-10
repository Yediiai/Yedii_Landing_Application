"use client";

import Link from "next/link";
import { ArrowRight, Bot, Zap, Layers, PlayCircle, Check } from "lucide-react";

export function Hero() {
  const signupUrl =
    process.env.NEXT_PUBLIC_SIGNUP_URL ||
    `${process.env.NEXT_PUBLIC_APP_BASE_URL || "https://app.yedii.com"}/signup`;

  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 overflow-hidden bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Main Headline (Formatted in two clean lines) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-zinc-950 leading-[1.22] sm:leading-[1.18] max-w-4xl mx-auto">
          <span className="block">AI that understands your business.</span>
          <span className="block">Support that understands your customers.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Yedii transforms your business knowledge into intelligent AI agents that guide customers, answer questions, and help resolve problems.
        </p>

        {/* Capability Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-600 font-normal">
          <span>powered by key systems like</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-zinc-200/80 text-zinc-800 font-medium text-xs shadow-xs hover:border-zinc-300 transition-colors">
            <Zap className="w-3 h-3 text-amber-500" />
            Instant Vector RAG
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-zinc-200/80 text-zinc-800 font-medium text-xs shadow-xs hover:border-zinc-300 transition-colors">
            <Layers className="w-3 h-3 text-blue-500" />
            Multi-Model Orchestration
          </span>
          <span>and</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-zinc-200/80 text-zinc-800 font-medium text-xs shadow-xs hover:border-zinc-300 transition-colors">
            <Bot className="w-3 h-3 text-zinc-700" />
            Inbox
          </span>
        </div>

        {/* Hero Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={signupUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs active:scale-[0.99] group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/enterprise"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs active:scale-[0.99]"
          >
            <PlayCircle className="w-4 h-4 text-zinc-500" />
            <span>Talk to Sales</span>
          </Link>
        </div>

        {/* Micro Social Proof & Security Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-zinc-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-zinc-400" />
            Setup in &lt; 5 minutes
          </span>
        </div>
      </div>
    </section>
  );
}
