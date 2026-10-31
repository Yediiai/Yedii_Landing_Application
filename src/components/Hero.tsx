"use client";

import Link from "next/link";
import { ArrowRight, Bot, Sparkles, Shield, Zap, Layers, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 overflow-hidden">
      {/* Background radial gradients for subtle glow (Peec AI / ElevenLabs feel) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-zinc-200/50 via-zinc-100/60 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge (Peec AI Style) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-8 backdrop-blur-sm transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-800">
            Yedii 2.0 is Live
          </span>
          <span className="text-zinc-300">|</span>
          <span className="text-xs text-zinc-500 font-medium inline-flex items-center gap-1">
            Build & Deploy Autonomous Agents in Minutes
            <ArrowRight className="w-3 h-3 text-zinc-700" />
          </span>
        </div>

        {/* Hero Main Headline (Peec AI high-contrast typography) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.08] sm:leading-[1.08] max-w-4xl mx-auto">
          Autonomous AI agents for fast-moving teams
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Build, ground, and deploy production-ready AI agents across customer support, sales qualification, and team operations.
        </p>

        {/* Peec AI Interactive Metric/Capability Pills */}
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
            <Bot className="w-3 h-3 text-emerald-500" />
            Human-in-the-Loop Inbox
          </span>
        </div>

        {/* Hero Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://app.yedii.com/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs active:scale-[0.99] group"
          >
            <Sparkles className="w-4 h-4 text-zinc-300 group-hover:rotate-12 transition-transform" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            SOC2 Type II & GDPR Ready
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
