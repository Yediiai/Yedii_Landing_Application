"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CustomersPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const caseStudies = [
    {
      id: "attio",
      company: "Attio Scale",
      industry: "saas",
      tag: "Enterprise SaaS",
      title: "How Attio automated 74% of tier-1 support across 40 countries",
      summary: "Attio needed an autonomous support agent capable of ingesting their rapidly-evolving 400-page internal Notion handbook and answering technical CRM integration questions without human hallucination.",
      metrics: [
        { label: "Ticket Deflection", value: "74%" },
        { label: "CSAT Score", value: "98.6%" },
        { label: "First Response Time", value: "< 12s" },
      ],
      quote: "Yedii completely transformed our customer operations. Our team can now focus on high-touch enterprise accounts while Yedii effortlessly resolves everyday queries.",
      author: "Elena Rostova",
      role: "VP of Customer Experience, Attio Scale",
    },
    {
      id: "nova",
      company: "Nova FinTech",
      industry: "fintech",
      tag: "Regulated FinTech",
      title: "Zero compliance breaches across 2.5 million financial transactions",
      summary: "Strict financial compliance required strict tenant data isolation, zero model training retention, and automatic sentiment-triggered human handover for sensitive banking disputes.",
      metrics: [
        { label: "Compliance Breaches", value: "0" },
        { label: "Handover Latency", value: "< 5s" },
        { label: "Resolution Speed", value: "3.2x Faster" },
      ],
      quote: "Deploying across WhatsApp and our web portal was shockingly simple. The shared inbox with sentiment detection ensures our human specialists step in with full context.",
      author: "David Sterling",
      role: "Chief Operating Officer, Nova FinTech",
    },
    {
      id: "hypercloud",
      company: "HyperCloud Infra",
      industry: "devtools",
      tag: "Cloud Infrastructure",
      title: "Saving 300+ engineering hours every quarter with MCP integration",
      summary: "HyperCloud connected their GitHub repositories, architecture documentation, and Kubernetes manifests to Yedii using the Model Context Protocol (MCP) to automate developer triage.",
      metrics: [
        { label: "Hours Saved / Qtr", value: "320+ hrs" },
        { label: "First-Contact Resolution", value: "91.8%" },
        { label: "Engineer Escalation", value: "-68%" },
      ],
      quote: "We replaced 4 brittle custom internal microservices with a single Yedii agent. Our engineering team gained back hundreds of deep-work hours.",
      author: "Sofia Al-Mansoor",
      role: "Lead Platform Architect, HyperCloud",
    },
    {
      id: "zenith",
      company: "Zenith Retail",
      industry: "ecommerce",
      tag: "Global E-Commerce",
      title: "Scaling Black Friday customer service with 24/7 WhatsApp AI agents",
      summary: "Handling a 400% surge in seasonal order tracking, return requests, and sizing recommendations without hiring temporary support contractors.",
      metrics: [
        { label: "Peak Surge Handled", value: "400%" },
        { label: "Cart Recovery Rate", value: "+18.4%" },
        { label: "Agent Uptime", value: "100%" },
      ],
      quote: "Our customers loved the instant WhatsApp responses. It felt like chatting with our best store associate at 2 AM on a holiday weekend.",
      author: "Kenji Sato",
      role: "Director of Digital Operations, Zenith Retail",
    },
  ];

  const filteredStudies =
    selectedIndustry === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        {/* 1. Customers Hero */}
        <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
            <Quote className="w-3.5 h-3.5 text-zinc-900" />
            <span>Customer Case Studies • Real Operational Impact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
            How market leaders scale operations with Yedii
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Read how high-growth startups and global enterprises automate support, accelerate sales cycles, and maintain strict data privacy.
          </p>

          {/* Industry Filter Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Stories" },
              { id: "saas", label: "Enterprise SaaS" },
              { id: "fintech", label: "FinTech & Banking" },
              { id: "devtools", label: "Developer Tools" },
              { id: "ecommerce", label: "Global E-Commerce" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedIndustry(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedIndustry === tab.id
                    ? "bg-[#141C2E] text-white shadow-2xs"
                    : "bg-white text-[#6B7280] hover:text-[#141C2E] border border-[#E4E5E8] hover:bg-zinc-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* 2. Deep Dive Case Studies Grid */}
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-[16px] border border-[#E8E9EC] p-6 sm:p-8 shadow-xs hover:border-[#D0D3D9] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Case Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-sm text-[#141C2E]">{study.company}</span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    {study.tag}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#141C2E] leading-snug">
                  {study.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {study.summary}
                </p>

                {/* Quote Box */}
                <div className="p-4 rounded-[12px] bg-[#F8F9FA] border border-[#E8E9EC] text-xs sm:text-[13px] text-[#2A2E36] italic leading-relaxed">
                  &quot;{study.quote}&quot;
                  <div className="mt-2 text-[11px] font-semibold text-[#141C2E] not-italic">
                    — {study.author}
                  </div>
                </div>
              </div>

              {/* Right Metrics Cards */}
              <div className="lg:col-span-5 bg-[#FAFAFA] rounded-[14px] border border-[#E8E9EC] p-5 space-y-3.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8A9099]">
                  Verified Impact Metrics
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 bg-white rounded-[10px] border border-[#E8E9EC] flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-[#6B7280]">{m.label}</span>
                      <span className="text-lg font-bold text-[#141C2E]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="https://app.yedii.com/signup"
                  className="w-full mt-2 py-2.5 px-4 rounded-[8px] bg-[#141C2E] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-black transition-colors"
                >
                  <span>Build an Agent Like {study.company}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* 3. Global Logos & Social Proof */}
        <section className="py-12 border-t border-[#E8E9EC] bg-white mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A9099]">
              Powering automated operations for leading technology companies
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              {["Attio", "Linear", "Ramp", "Notion", "Retool", "Vercel", "Paddle"].map((brand) => (
                <div key={brand} className="text-base sm:text-lg font-bold tracking-tight text-[#141C2E]">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Bottom CTA Card */}
        <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] border border-[#E8E9EC] p-7 sm:p-10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-xl space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#141C2E]">
                Ready to deliver verified, zero-hallucination support?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Connect your documents and deploy your first agent in under 5 minutes with our 14-day free trial.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="https://app.yedii.com/signup"
                className="px-5 py-2.5 rounded-[8px] bg-[#141C2E] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shadow-2xs inline-flex items-center gap-1.5"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
