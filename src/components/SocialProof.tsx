"use client";

import { MessageSquare, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export function SocialProof() {
  const logos = [
    { name: "Attio", label: "Attio" },
    { name: "Linear", label: "Linear" },
    { name: "Ramp", label: "Ramp" },
    { name: "Notion", label: "Notion" },
    { name: "Retool", label: "Retool" },
    { name: "Vercel", label: "Vercel" },
    { name: "Paddle", label: "Paddle" }
  ];

  const stats = [
    {
      value: "14M+",
      label: "Conversations Automated",
      highlight: "Across 40+ countries",
      icon: MessageSquare,
      badge: "+100% YoY",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60"
    },
    {
      value: "74%",
      label: "Deflection Rate",
      highlight: "Without human intervention",
      icon: Zap,
      badge: "Industry High",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60"
    },
    {
      value: "< 120ms",
      label: "Time-to-First-Token",
      highlight: "Edge-cached retrieval",
      icon: TrendingUp,
      badge: "Sub-second",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60"
    },
    {
      value: "99.4%",
      label: "Accuracy & Grounding",
      highlight: "Verified against source docs",
      icon: ShieldCheck,
      badge: "Zero Hallucination",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60"
    }
  ];

  return (
    <section className="py-12 md:py-16 my-2 border-y border-[#E8E9EC] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logos Row */}
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A9099] mb-6">
          Trusted by high-growth startups and global enterprise teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-base sm:text-lg font-bold tracking-tight text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>

        {/* 14M+ Stats Cards Grid (Clean, Aligned White Cards) */}
        <div className="mt-12 pt-8 border-t border-[#F0F1F3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-[#FAFAFA] hover:bg-white rounded-[14px] border border-[#E8E9EC] hover:border-[#D0D3D9] p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-[10px] bg-white border border-[#E8E9EC] flex items-center justify-center text-[#141C2E] shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-[#141C2E]" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E]">
                    {s.value}
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#141C2E] leading-snug">
                    {s.label}
                  </div>
                  <div className="text-[12px] text-[#6B7280]">
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
