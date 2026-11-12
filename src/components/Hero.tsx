"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Zap, Layers, Check } from "lucide-react";

export function Hero() {
  const signupUrl =
    process.env.NEXT_PUBLIC_SIGNUP_URL ||
    `${process.env.NEXT_PUBLIC_APP_BASE_URL || "https://app.yedii.com"}/signup`;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-transparent">
      {/* Floating LLM Provider Badges (Exact 5 positions matching reference) */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Top-Left: OpenAI */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 absolute left-4 sm:left-6 md:left-10 lg:left-14 top-16 md:top-20 hover:scale-105 hover:bg-white transition-all select-none pointer-events-auto">
          <Image
            src="/images/providers/openai.svg"
            alt="OpenAI"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <span>OpenAI</span>
        </div>

        {/* 2. Top-Right: Claude 3.5 */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 absolute right-4 sm:right-6 md:right-10 lg:right-14 top-16 md:top-20 hover:scale-105 hover:bg-white transition-all select-none pointer-events-auto">
          <Image
            src="/images/providers/claude.svg"
            alt="Claude"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <span>Claude 3.5</span>
        </div>

        {/* 3. Center-Left (on flow ribbon): DeepSeek */}
        <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 absolute left-[12%] xl:left-[16%] top-[45%] hover:scale-105 hover:bg-white transition-all select-none pointer-events-auto z-10">
          <Image
            src="/images/providers/deepseek.svg"
            alt="DeepSeek"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <span>DeepSeek</span>
        </div>

        {/* 4. Bottom-Right: Google Gemini */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 absolute right-6 sm:right-10 md:right-16 lg:right-24 bottom-12 md:bottom-16 hover:scale-105 hover:bg-white transition-all select-none pointer-events-auto">
          <Image
            src="/images/providers/gemini.svg"
            alt="Google Gemini"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <span>Gemini 1.5</span>
        </div>

        {/* 5. Bottom-Left: Meta Llama */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 absolute left-4 sm:left-8 md:left-14 lg:left-20 bottom-6 md:bottom-8 hover:scale-105 hover:bg-white transition-all select-none pointer-events-auto">
          <Image
            src="/images/providers/meta.svg"
            alt="Meta Llama"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
          <span>Llama 3.3</span>
        </div>
      </div>

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
