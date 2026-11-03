"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Server,
  Lock,
  Cpu,
  Clock,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function EnterprisePage() {
  // Enterprise ROI Calculator State
  const [ticketVolume, setTicketVolume] = useState<number>(25000);
  const [supportAgents, setSupportAgents] = useState<number>(15);

  const estimatedDeflection = Math.round(ticketVolume * 0.72);
  const hoursSavedPerMonth = Math.round(estimatedDeflection * 0.25);
  const annualSavings = Math.round(hoursSavedPerMonth * 12 * 28);

  const enterprisePillars = [
    {
      title: "Dedicated Single-Tenant VPC",
      desc: "Deploy entirely within your private cloud (AWS, Azure, GCP) or on-premise Kubernetes clusters with customer-managed encryption keys (CMEK).",
      icon: Server,
      badge: "Air-Gapped Ready",
    },
    {
      title: "Zero Data Retention Guarantee",
      desc: "Contractually guaranteed zero data retention. Your customer records, training documents, and chat transcripts are never logged or used for model training.",
      icon: Lock,
      badge: "SOC2 Type II & HIPAA",
    },
    {
      title: "Multi-Model Hybrid Routing",
      desc: "Route confidential queries to private fine-tuned weights and public queries to Claude 3.5 Sonnet or GPT-4o with automated fallback and latency guardrails.",
      icon: Cpu,
      badge: "< 100ms Inference",
    },
    {
      title: "Custom SLA & 24/7 Dedicated Architect",
      desc: "Financial-backed 99.99% uptime guarantee with 15-minute critical response windows and a named enterprise solutions engineer embedded with your team.",
      icon: Clock,
      badge: "99.99% Guaranteed",
    },
  ];

  const complianceBadges = [
    { label: "SOC 2 Type II Certified", status: "Audited Annually" },
    { label: "HIPAA Compliant BAA", status: "Available on Enterprise" },
    { label: "GDPR & CCPA Compliant", status: "EU Data Residency" },
    { label: "ISO 27001 Certified", status: "Global Standard" },
    { label: "SAML 2.0 / Okta / Azure AD", status: "SSO & SCIM Provisioning" },
    { label: "Role-Based Access Control", status: "Granular Team Scopes" },
  ];

  const rolloutTimeline = [
    {
      step: "01",
      title: "Security & Architectural Scope",
      desc: "Our security team coordinates with your SecOps and legal teams to review compliance requirements, vendor assessments, and custom BAA / MSA clauses.",
      timeline: "Days 1 – 3",
    },
    {
      step: "02",
      title: "VPC Peering & Data Ingestion",
      desc: "Private cluster deployment in your dedicated region. Connect internal databases, SharePoint, Notion, and Zendesk via encrypted vector pipelines.",
      timeline: "Days 4 – 7",
    },
    {
      step: "03",
      title: "Guardrail Tuning & Red-Teaming",
      desc: "We simulate 10,000+ edge-case queries, adversarial prompts, and domain scenarios to tune temperature, safety filters, and confidence thresholds.",
      timeline: "Days 8 – 11",
    },
    {
      step: "04",
      title: "Staged Rollout & 24/7 Handover",
      desc: "Soft launch to internal teams, followed by staged customer exposure with live human-in-the-loop fallback and dedicated telemetry monitoring.",
      timeline: "Day 12+",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Enterprise Grade • Private Cloud &amp; VPC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
            Autonomous AI agents built for strict enterprise compliance &amp; scale
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Deploy isolated, high-concurrency AI agent infrastructure with Zero Data Retention, custom VPC peering, financial-backed SLAs, and dedicated security governance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#roi"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs"
            >
              <span>Calculate Enterprise ROI</span>
            </Link>
          </div>
        </section>

        {/* 2. Enterprise Pillars Grid */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {enterprisePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-[14px] border border-[#E8E9EC] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-[#D0D3D9] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[10px] bg-[#F4F5F7] flex items-center justify-center text-[#141C2E]">
                        <Icon className="w-5 h-5 text-[#141C2E]" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#141C2E] bg-[#F4F5F7] border border-[#E0E2E6] px-2.5 py-0.5 rounded-full">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-semibold text-[#141C2E]">
                      {p.title}
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Security, Governance & Compliance Matrix */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] border border-[#E8E9EC] p-6 sm:p-8 shadow-xs">
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Zero Compromise Security
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#141C2E] mt-1">
                Audited, certified, and compliant with global standards
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                Yedii undergoes continuous third-party penetration testing and SOC2 Type II compliance reviews. We provide custom BAA agreements for regulated healthcare and financial institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="p-3.5 rounded-[10px] bg-[#F9FAFB] border border-[#E8E9EC] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-[#141C2E]">{badge.label}</span>
                  </div>
                  <span className="text-[11px] text-[#8A9099] font-medium shrink-0">
                    {badge.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Interactive Enterprise ROI Calculator */}
        <section id="roi" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] border border-[#E8E9EC] p-6 sm:p-8 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Quantifiable Impact
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#141C2E] mt-1">
                Calculate your enterprise support savings
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                See how much time and operational budget your organization can recover with Yedii.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Input */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                    <span className="text-[#141C2E]">Monthly Inbound Tickets / Messages</span>
                    <span className="text-emerald-700 font-mono text-sm">{ticketVolume.toLocaleString("en-US")}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={ticketVolume}
                    onChange={(e) => setTicketVolume(Number(e.target.value))}
                    className="w-full accent-[#141C2E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#8A9099] mt-1">
                    <span>5,000</span>
                    <span>50,000</span>
                    <span>100,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                    <span className="text-[#141C2E]">Current Support / Operations Team Size</span>
                    <span className="text-emerald-700 font-mono text-sm">{supportAgents} agents</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="100"
                    step="1"
                    value={supportAgents}
                    onChange={(e) => setSupportAgents(Number(e.target.value))}
                    className="w-full accent-[#141C2E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#8A9099] mt-1">
                    <span>3 agents</span>
                    <span>50 agents</span>
                    <span>100+ agents</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="lg:col-span-6 bg-[#F8F9FA] rounded-[12px] border border-[#E8E9EC] p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-white rounded-[10px] border border-[#E8E9EC]">
                    <div className="text-[11px] text-[#6B7280] font-medium">Estimated Monthly Deflection</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#141C2E] mt-1">
                      {estimatedDeflection.toLocaleString("en-US")} <span className="text-xs font-normal text-[#8A9099]">(72%)</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-[10px] border border-[#E8E9EC]">
                    <div className="text-[11px] text-[#6B7280] font-medium">Hours Recovered / Month</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#141C2E] mt-1">
                      {hoursSavedPerMonth.toLocaleString("en-US")} hrs
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-[10px] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-emerald-900">Estimated Annual Cost Savings</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-0.5">
                      ${annualSavings.toLocaleString("en-US")}
                    </div>
                  </div>
                  <Link
                    href="https://app.yedii.com/signup"
                    className="px-4 py-2 rounded-[8px] bg-[#141C2E] text-white text-xs font-semibold hover:bg-black transition-colors shrink-0"
                  >
                    Deploy Enterprise
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Staged Enterprise Rollout Timeline */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              Turnkey Implementation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#141C2E] mt-1">
              From security review to production in 14 days
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Our white-glove engineering onboarding team handles the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rolloutTimeline.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[12px] border border-[#E8E9EC] p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-medium text-[#8A9099]">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-[14.5px] font-semibold text-[#141C2E]">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] text-[#6B7280] mt-1.5 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Enterprise Contact CTA Banner */}
        <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] border border-[#E8E9EC] p-7 sm:p-10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-xl space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#141C2E]">
                Talk with our enterprise solutions team
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Receive custom architectural specifications, security questionnaire completion, and a dedicated pilot instance.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="https://app.yedii.com/signup"
                className="px-5 py-2.5 rounded-[8px] bg-[#141C2E] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shadow-2xs"
              >
                Schedule Technical Briefing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
