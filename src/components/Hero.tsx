"use client";

import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";
import { ModelOrbit } from "./ModelOrbit";

export function Hero() {
  const signupUrl =
    process.env.NEXT_PUBLIC_SIGNUP_URL ||
    `${process.env.NEXT_PUBLIC_APP_BASE_URL || "https://app.yedii.com"}/signup`;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Side: Hero Headline, Subtitle, CTA & Trust Badges */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Hero Main Headline (Formatted in two clean lines) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.16] max-w-3xl">
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

          {/* Right Side: ModelOrbit — animated LLM provider rings */}
          <div className="lg:col-span-5 w-full h-[300px] sm:h-[380px] lg:h-[430px]">
            <ModelOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
