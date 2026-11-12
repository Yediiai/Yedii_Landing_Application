"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";

const LLM_PROVIDERS = [
  {
    name: "OpenAI",
    src: "/images/providers/openai.svg",
    alt: "OpenAI",
    positionClass: "lg:top-2 lg:left-1 xl:left-4",
  },
  {
    name: "Claude 3.5",
    src: "/images/providers/claude.svg",
    alt: "Claude",
    positionClass: "lg:top-16 lg:right-2 xl:right-6",
  },
  {
    name: "DeepSeek",
    src: "/images/providers/deepseek.svg",
    alt: "DeepSeek",
    positionClass: "lg:top-[44%] lg:left-6 xl:left-12",
  },
  {
    name: "Gemini 1.5",
    src: "/images/providers/gemini.svg",
    alt: "Google Gemini",
    positionClass: "lg:bottom-16 lg:right-0 xl:right-4",
  },
  {
    name: "Llama 3.3",
    src: "/images/providers/meta.svg",
    alt: "Meta Llama",
    positionClass: "lg:bottom-2 lg:left-2 xl:left-6",
  },
] as const;

export function Hero() {
  const signupUrl =
    process.env.NEXT_PUBLIC_SIGNUP_URL ||
    `${process.env.NEXT_PUBLIC_APP_BASE_URL || "https://app.yedii.com"}/signup`;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Side: Hero Headline, Subtitle, CTA & Trust Badges */}
          <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Hero Main Headline (Formatted in two clean lines) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.16] max-w-3xl">
              <span className="block">AI that understands your business.</span>
              <span className="block">Support that understands your customers.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
              Yedii transforms your business knowledge into intelligent AI agents that guide customers, answer questions, and help resolve problems.
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <Link
                href={signupUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs active:scale-[0.99] group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Micro Social Proof & Security Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-500 font-medium">
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

          {/* Right Side: All 5 LLM Provider Badges */}
          <div className="lg:col-span-4 flex flex-wrap items-center justify-center gap-2.5 lg:block lg:relative lg:h-[340px] w-full">
            {LLM_PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-xs font-semibold text-zinc-800 lg:absolute hover:scale-105 hover:bg-white transition-all select-none ${provider.positionClass}`}
              >
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
                <span>{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
