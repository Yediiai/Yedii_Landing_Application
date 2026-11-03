"use client";

import React from "react";
import { MessageSquare, ShieldCheck, Zap, Gauge } from "lucide-react";

export function SocialProof() {
  const brandLogos = [
    {
      name: "Notion",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-800">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.875c-.466-.373-.933-.56-1.726-.466L3.992 2.62c-.56.047-.653.373-.466.56l.933 1.027zm.7 4.013v11.944c0 .84.42 1.12 1.353 1.027l12.42-.746c.933-.047 1.027-.606 1.027-1.213V7.334c0-.653-.327-.98-.84-.933l-13.12.793c-.56.046-.84.373-.84 1.027zm11.758 1.493c.093.42 0 .84-.42.887l-.7.14v7.792c-.373.233-.746.373-1.12.373-.653 0-.98-.28-1.54-.933l-4.2-6.206v5.88c.56.093.886.186.886.606 0 .42-.28.466-.886.466l-2.427.14c-.093-.373 0-.746.373-.84.466-.093.746-.233.746-.653v-6.953c0-.466-.28-.606-.84-.653-.373 0-.56-.233-.56-.606 0-.327.233-.42.746-.466l2.94-.187c.886-.047 1.353.28 1.82.933l3.873 5.88v-5.46c-.513-.093-.793-.187-.793-.607 0-.42.28-.466.84-.466l2.286-.14c.093.373 0 .746-.373.84z" />
        </svg>
      )
    },
    {
      name: "Linear",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-zinc-800">
          <path d="M3.568 2.378a2.535 2.535 0 0 0-.84 1.83v15.584c0 .69.28 1.348.777 1.83l9.09-9.09a2.535 2.535 0 0 0 0-3.585L3.568 2.378zm1.905-.722l9.089 9.09a2.535 2.535 0 0 1 3.585 0l4.085-4.085a2.536 2.536 0 0 0-1.83-.84H5.473a2.53 2.53 0 0 0 0 .002zm16.717 3.585l-4.085 4.085a2.535 2.535 0 0 1 0 3.585l4.085 4.085c.497-.482.777-1.14.777-1.83V7.07c0-.69-.28-1.348-.777-1.83zM18.19 13.25l-9.09 9.088c.482.497 1.14.778 1.83.778h10.362a2.535 2.535 0 0 0 1.83-.84l-4.932-4.932a2.535 2.535 0 0 1 0-3.585z" />
        </svg>
      )
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-900">
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      )
    },
    {
      name: "Stripe",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-800">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.443.5 7.027.5 3.427 3.23 3.427 7.787c0 4.417 3.328 6.166 6.843 7.424 2.23.8 3.018 1.488 3.018 2.457 0 .97-.83 1.545-2.227 1.545-2.202 0-5.034-.984-6.862-2.062l-.916 5.568c1.699.984 4.887 1.781 8.277 1.781 5.626 0 9.294-2.615 9.294-7.464 0-4.636-3.21-6.195-6.88-7.886z" />
        </svg>
      )
    },
    {
      name: "Retool",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-zinc-800">
          <path d="M3 3h7.2v4.8H3V3zm10.8 0H21v4.8h-7.2V3zM3 9.6h7.2v4.8H3V9.6zm10.8 0H21v4.8h-7.2V9.6zM3 16.2h7.2V21H3v-4.8zm10.8 0H21V21h-7.2v-4.8z" />
        </svg>
      )
    },
    {
      name: "Ramp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-800">
          <path d="M3 17.5h6L15 4h6l-6 13.5H3z" />
        </svg>
      )
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-emerald-600">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.43 14.286a.396.396 0 0 0 .313.632H12v8.686a.396.396 0 0 0 .716.233l10.854-13.847a.396.396 0 0 0-.208-.636z" />
        </svg>
      )
    }
  ];

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
    <section className="py-12 md:py-16 my-2 border-y border-[#E8E9EC] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logos Header */}
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A9099] mb-7">
          Trusted by high-growth startups and global enterprise teams
        </p>

        {/* Authentic SVG Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 group cursor-pointer text-[#374151] hover:text-[#111827] transition-colors"
              title={brand.name}
            >
              <div className="transition-transform group-hover:scale-110">
                {brand.icon}
              </div>
              <span className="text-[15px] sm:text-[16px] font-bold tracking-tight text-[#1F2937] group-hover:text-black">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

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
