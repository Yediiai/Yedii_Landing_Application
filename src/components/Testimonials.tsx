"use client";

import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

interface Review {
  name: string;
  role: string;
  avatarBg: string;
  avatarText: string;
  type: "trustpilot" | "standard";
  headline: string;
  body: string;
  badgeRight?: "quote" | "trustpilot";
  linkText?: string;
  linkHref?: string;
}

export function Testimonials() {
  const reviews: Review[] = [
    {
      name: "Siddhartha",
      role: "Founder",
      avatarBg: "bg-rose-500",
      avatarText: "S",
      type: "trustpilot",
      badgeRight: "trustpilot",
      headline: "“Yedii replaced 3 tools in our stack — support ticketing, internal wiki bot, and deflection”",
      body: "Great. Yedii is built for the shift from Google-only to AI-driven discovery and operations, and it's clear the team is technically deep. Our tier-1 tickets dropped by 74% within two weeks.",
      linkText: "Read reviews on Trustpilot",
      linkHref: "https://www.trustpilot.com",
    },
    {
      name: "Patryk",
      role: "Manager",
      avatarBg: "bg-amber-600",
      avatarText: "P",
      type: "standard",
      badgeRight: "quote",
      headline: "Patryk Studio",
      body: "Yedii works perfectly. Grounding answers directly on our Notion documentation and PDF handbooks completely eliminated inaccurate responses. I will be happy to hear about new tools, especially if they work for site ranking and autonomous workflows.",
    },
    {
      name: "Elena Rostova",
      role: "VP of Customer Experience",
      avatarBg: "bg-indigo-600",
      avatarText: "E",
      type: "standard",
      badgeRight: "quote",
      headline: "Automated 74% of tier-1 support across 40 countries",
      body: "Deploying across WhatsApp and our web portal was shockingly simple. The shared inbox with sentiment detection ensures our human team steps in only when high empathy is needed. CSAT jumped from 88% to 98.6%.",
    },
    {
      name: "Marcus Chen",
      role: "Head of Engineering",
      avatarBg: "bg-emerald-600",
      avatarText: "M",
      type: "trustpilot",
      badgeRight: "trustpilot",
      headline: "“Zero hallucinations across 40,000 real customer chats”",
      body: "The grounded RAG accuracy is unbelievable. Our support engineers gained back hundreds of deep-work hours. The Model Context Protocol (MCP) integration makes Yedii miles ahead of everything else.",
      linkText: "Read reviews on Trustpilot",
      linkHref: "https://www.trustpilot.com",
    },
    {
      name: "David Sterling",
      role: "Chief Operating Officer",
      avatarBg: "bg-blue-600",
      avatarText: "D",
      type: "standard",
      badgeRight: "quote",
      headline: "Zero compliance breaches across 2.5 million financial transactions",
      body: "Strict financial compliance required tenant data isolation, zero model training retention, and automatic sentiment-triggered human handover for sensitive banking disputes. Yedii delivered flawlessly.",
    },
    {
      name: "Rachel Vance",
      role: "Director of Digital Operations",
      avatarBg: "bg-teal-600",
      avatarText: "R",
      type: "trustpilot",
      badgeRight: "trustpilot",
      headline: "“Scaling Black Friday customer service with 24/7 WhatsApp AI agents”",
      body: "Handling a 400% surge in seasonal order tracking and returns without hiring temporary support contractors. Our customers loved the instant WhatsApp responses at 2 AM on holiday weekends.",
      linkText: "Read reviews on Trustpilot",
      linkHref: "https://www.trustpilot.com",
    },
  ];

  // Duplicated for a seamless, continuous 360-degree auto-scrolling loop
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section id="customers" className="py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111827] leading-[1.15]">
              What our customers say?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B7280] max-w-2xl leading-relaxed">
              Brands that deploy autonomous agents with Yedii resolve support tickets faster, eliminate hallucinations, and scale operations effortlessly.
            </p>
          </div>

        </div>
      </div>

      {/* Infinite Horizontal Auto-Moving Slider */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient edge masks for smooth fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#FAFAFA] to-transparent" />

        {/* Moving Track */}
        <div className="animate-marquee-testimonials flex items-stretch gap-6 px-4">
          {marqueeReviews.map((rev, idx) => (
            <div
              key={`${rev.name}-${idx}`}
              className="w-[340px] sm:w-[380px] md:w-[420px] shrink-0 bg-white rounded-[18px] border border-[#E5E7EB] p-6 sm:p-7 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#D1D5DB] transition-all"
            >
              <div>
                {/* Header: User Avatar + Name + Top Right Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#111827] leading-tight">
                        {rev.name}
                      </div>
                      <div className="text-[12px] text-[#6B7280] mt-0.5">
                        {rev.role}
                      </div>
                    </div>
                  </div>

                  {rev.badgeRight === "trustpilot" ? (
                    <span className="text-[#00B67A] text-xl font-bold select-none leading-none">
                      ★
                    </span>
                  ) : (
                    <span className="text-3xl text-zinc-300 font-serif leading-none select-none">
                      ”
                    </span>
                  )}
                </div>

                {/* Rating Display */}
                <div className="mb-3.5">
                  {rev.type === "trustpilot" ? (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 bg-[#00B67A] rounded-[2px] flex items-center justify-center text-white text-[11px] leading-none"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#374151]">
                        5/5
                      </span>
                    </div>
                  )}
                </div>

                {/* Headline Quote */}
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111827] leading-snug mb-2">
                  {rev.headline}
                </h3>

                {/* Body Text */}
                <p className="text-[13px] sm:text-[13.5px] text-[#4B5563] leading-relaxed">
                  {rev.body}
                </p>
              </div>

              {/* Bottom Link (Optional for Trustpilot reviews) */}
              {rev.linkText && rev.linkHref && (
                <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={rev.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#111827] hover:text-black transition-colors"
                  >
                    <span>{rev.linkText}</span>
                    <ExternalLink className="w-3 h-3 text-[#6B7280]" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
