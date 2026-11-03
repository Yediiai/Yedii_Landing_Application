"use client";

import React from "react";
import { MessageSquare, ShieldCheck, Zap, Gauge } from "lucide-react";

export function SocialProof() {
  const brandLogos = [
    {
      name: "Notion",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.875c-.466-.373-.933-.56-1.726-.466L3.992 2.62c-.56.047-.653.373-.466.56l.933 1.027zm.7 4.013v11.944c0 .84.42 1.12 1.353 1.027l12.42-.746c.933-.047 1.027-.606 1.027-1.213V7.334c0-.653-.327-.98-.84-.933l-13.12.793c-.56.046-.84.373-.84 1.027zm11.758 1.493c.093.42 0 .84-.42.887l-.7.14v7.792c-.373.233-.746.373-1.12.373-.653 0-.98-.28-1.54-.933l-4.2-6.206v5.88c.56.093.886.186.886.606 0 .42-.28.466-.886.466l-2.427.14c-.093-.373 0-.746.373-.84.466-.093.746-.233.746-.653v-6.953c0-.466-.28-.606-.84-.653-.373 0-.56-.233-.56-.606 0-.327.233-.42.746-.466l2.94-.187c.886-.047 1.353.28 1.82.933l3.873 5.88v-5.46c-.513-.093-.793-.187-.793-.607 0-.42.28-.466.84-.466l2.286-.14c.093.373 0 .746-.373.84z" />
        </svg>
      )
    },
    {
      name: "Linear",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path d="M3.568 2.378a2.535 2.535 0 0 0-.84 1.83v15.584c0 .69.28 1.348.777 1.83l9.09-9.09a2.535 2.535 0 0 0 0-3.585L3.568 2.378zm1.905-.722l9.089 9.09a2.535 2.535 0 0 1 3.585 0l4.085-4.085a2.536 2.536 0 0 0-1.83-.84H5.473a2.53 2.53 0 0 0 0 .002zm16.717 3.585l-4.085 4.085a2.535 2.535 0 0 1 0 3.585l4.085 4.085c.497-.482.777-1.14.777-1.83V7.07c0-.69-.28-1.348-.777-1.83zM18.19 13.25l-9.09 9.088c.482.497 1.14.778 1.83.778h10.362a2.535 2.535 0 0 0 1.83-.84l-4.932-4.932a2.535 2.535 0 0 1 0-3.585z" />
        </svg>
      )
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5 text-zinc-900">
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      )
    },
    {
      name: "Stripe",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.443.5 7.027.5 3.427 3.23 3.427 7.787c0 4.417 3.328 6.166 6.843 7.424 2.23.8 3.018 1.488 3.018 2.457 0 .97-.83 1.545-2.227 1.545-2.202 0-5.034-.984-6.862-2.062l-.916 5.568c1.699.984 4.887 1.781 8.277 1.781 5.626 0 9.294-2.615 9.294-7.464 0-4.636-3.21-6.195-6.88-7.886z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      name: "Retool",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path d="M3 3h7.2v4.8H3V3zm10.8 0H21v4.8h-7.2V3zM3 9.6h7.2v4.8H3V9.6zm10.8 0H21v4.8h-7.2V9.6zM3 16.2h7.2V21H3v-4.8zm10.8 0H21V21h-7.2v-4.8z" />
        </svg>
      )
    },
    {
      name: "OpenAI",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-900">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.487a4.485 4.485 0 0 1 2.37-2.02v5.7a.78.78 0 0 0 .392.68l5.843 3.37-2.02 1.168a.076.076 0 0 1-.067 0L4.02 14.59A4.502 4.502 0 0 1 2.34 8.487zm16.597 3.855l-5.833-3.387L15.119 7.8a.076.076 0 0 1 .067 0l4.84 2.796a4.498 4.498 0 0 1-.762 8.363v-5.7a.79.79 0 0 0-.392-.68l-.495-.237zm2.72-4.34a4.48 4.48 0 0 1 .536 3.014l-.142-.085-4.783-2.759a.776.776 0 0 0-.78 0l-5.843 3.369V9.21a.08.08 0 0 1 .033-.062L15.48 6.35a4.5 4.5 0 0 1 6.177 1.652zM10.74 1.57a4.476 4.476 0 0 1 2.876 1.04l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737l-2.02-1.168a.071.071 0 0 1-.038-.052V6.064a4.504 4.504 0 0 1 4.494-4.494zm-1.073 7.82l2.333-1.346 2.333 1.346v2.693l-2.333 1.346-2.333-1.346V9.39z" />
        </svg>
      )
    },
    {
      name: "Ramp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5 text-zinc-900">
          <path d="M3 17.5h6L15 4h6l-6 13.5H3z" />
        </svg>
      )
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-500">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.43 14.286a.396.396 0 0 0 .313.632H12v8.686a.396.396 0 0 0 .716.233l10.854-13.847a.396.396 0 0 0-.208-.636z" />
        </svg>
      )
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
          <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
          <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
          <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
          <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
        </svg>
      )
    },
    {
      name: "Snowflake",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#29B5E8]">
          <path d="M12 0c.4 0 .7.3.7.7v4.6l3.2-3.2c.3-.3.7-.3 1 0 .3.3.3.7 0 1L13.7 6.3l2.8.7 1.4-1.4c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-1.4 1.4.7 2.8 3.2-3.2c.3-.3.7-.3 1 0 .3.3.3.7 0 1L19.2 12l3.2 3.2c.3.3.3.7 0 1-.3.3-.7.3-1 0l-3.2-3.2-.7 2.8 1.4 1.4c.3.3.3.7 0 1-.3.3-.7.3-1 0l-1.4-1.4-2.8.7 3.2 3.2c.3.3.3.7 0 1-.3.3-.7.3-1 0l-3.2-3.2v4.6c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-4.6l-3.2 3.2c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1l3.2-3.2-2.8-.7-1.4 1.4c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1l1.4-1.4-.7-2.8-3.2 3.2c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1L4.8 12 1.6 8.8c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l3.2 3.2.7-2.8-1.4-1.4c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l1.4 1.4 2.8-.7L7.1 3.3c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l3.2 3.2V.7c0-.4.3-.7.7-.7z"/>
        </svg>
      )
    },
    {
      name: "Datadog",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#632CA6]">
          <path d="M22.062 10.42a10.985 10.985 0 0 0-2.483-3.666 11.085 11.085 0 0 0-3.879-2.316C14.33 3.94 12.87 3.738 11.4 3.85c-1.57.12-3.08.68-4.4 1.63a11.16 11.16 0 0 0-3.23 3.79c-.79 1.5-1.17 3.16-1.11 4.83.07 1.67.61 3.29 1.57 4.67 1.05 1.5 2.5 2.65 4.17 3.32 1.67.67 3.5.76 5.23.26a11.1 11.1 0 0 0 4.61-2.67 11.02 11.02 0 0 0 2.82-4.22c.6-1.62.72-3.37.35-5.04h-.34zm-6.24 6.77c-.98.74-2.18 1.18-3.43 1.25-1.26.07-2.5-.24-3.56-.89s-1.89-1.59-2.38-2.73c-.5-1.14-.58-2.41-.23-3.6.35-1.19 1.09-2.23 2.1-2.97 1.01-.74 2.23-1.13 3.48-1.12 1.25.01 2.47.41 3.49 1.14 1.01.73 1.74 1.77 2.08 2.96.34 1.2.24 2.47-.28 3.61-.52 1.14-1.39 2.07-2.47 2.67l1.2 1.68h-.002z" />
        </svg>
      )
    }
  ];

  // Duplicated for perfectly smooth, continuous 360-degree marquee loop
  const marqueeItems = [...brandLogos, ...brandLogos];

  const stats = [
    {
      id: "conversations",
      value: "14M+",
      label: "Conversations Automated",
      highlight: "Across 40+ countries globally",
      icon: MessageSquare,
      badge: "+100% YoY",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
    },
    {
      id: "deflection",
      value: "74%",
      label: "Autonomous Deflection",
      highlight: "Resolved without human intervention",
      icon: Zap,
      badge: "Industry High",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/70"
    },
    {
      id: "latency",
      prefix: "<",
      number: "120",
      unit: "ms",
      label: "Time-to-First-Token",
      highlight: "Edge-cached real-time streaming",
      icon: Gauge,
      badge: "Sub-second",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200/70"
    },
    {
      id: "accuracy",
      value: "99.4%",
      label: "Accuracy & Grounding",
      highlight: "Verified against source documentation",
      icon: ShieldCheck,
      badge: "Zero Hallucination",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70"
    }
  ];

  return (
    <section className="py-12 md:py-16 my-2 border-y border-[#E8E9EC] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logos Header */}
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A9099] mb-8">
          Trusted by high-growth startups and global enterprise teams
        </p>
      </div>

      {/* Infinite Continuous Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right gradient edge masks for seamless entry & exit */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-44 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-44 bg-gradient-to-l from-white to-transparent" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-16">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 shrink-0 group cursor-pointer text-[#374151] hover:text-[#111827] transition-all px-2"
              title={brand.name}
            >
              <div className="transition-transform group-hover:scale-115">
                {brand.icon}
              </div>
              <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#1F2937] group-hover:text-black">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 14M+ Metric Cards Grid (Clean Aligned White Cards with Fixed Formatting) */}
        <div className="mt-12 pt-8 border-t border-[#F0F1F3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-[#FAFAFA] hover:bg-white rounded-[14px] border border-[#E8E9EC] hover:border-[#D0D3D9] p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group"
              >
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-[10px] bg-white border border-[#E8E9EC] flex items-center justify-center text-[#141C2E] shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-[#141C2E]" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>

                {/* Card Content: Numbers & Description */}
                <div className="space-y-1.5">
                  {s.prefix ? (
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] flex items-baseline">
                      <span className="text-lg sm:text-xl font-medium text-[#6B7280] mr-1">
                        &lt;
                      </span>
                      <span>{s.number}</span>
                      <span className="text-sm sm:text-base font-semibold text-[#6B7280] ml-1">
                        {s.unit}
                      </span>
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E]">
                      {s.value}
                    </div>
                  )}

                  <div className="text-[13.5px] font-semibold text-[#141C2E] leading-snug">
                    {s.label}
                  </div>
                  <div className="text-[12px] text-[#6B7280] leading-normal">
                    {s.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
