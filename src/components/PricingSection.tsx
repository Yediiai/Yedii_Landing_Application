"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "Starter",
      tagline: "Ideal for small teams launching their first customer-facing agent.",
      monthlyPrice: 39,
      yearlyPrice: 29,
      highlight: false,
      badge: null,
      metrics: {
        agents: "3 AI Agents",
        credits: "5,000 Credits / mo",
        storage: "100 MB RAG Grounding",
        seats: "3 Team Members"
      },
      features: [
        "Web widget deployment with custom branding",
        "Document ingestion (PDF, Word, TXT, CSV)",
        "GPT-4o mini & Claude 3.5 Haiku models",
        "Community support & API access",
        "Basic analytics & conversation logs"
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaLink: "/signup"
    },
    {
      name: "Growth Pro",
      tagline: "For scaling companies requiring omnichannel deploy and human handoff.",
      monthlyPrice: 109,
      yearlyPrice: 89,
      highlight: true,
      badge: "Most Popular",
      metrics: {
        agents: "10 AI Agents",
        credits: "30,000 Credits / mo",
        storage: "1 GB RAG Grounding",
        seats: "10 Team Members"
      },
      features: [
        "Everything in Starter, plus:",
        "Omnichannel (WhatsApp Business, Slack, Web Widget)",
        "Shared Team Inbox with live human escalation",
        "Advanced models (Claude 3.5 Sonnet & GPT-4o)",
        "Real-time sentiment alert webhooks",
        "Automated website sync & Notion connectors",
        "Priority email & Slack support"
      ],
      ctaText: "Get Started with Pro",
      ctaLink: "/signup"
    },
    {
      name: "Enterprise",
      tagline: "Custom scale, dedicated VPC, custom SLA, and strict data isolation.",
      monthlyPrice: null,
      yearlyPrice: null,
      highlight: false,
      badge: "Dedicated Infra",
      metrics: {
        agents: "Unlimited AI Agents",
        credits: "Custom High-Volume",
        storage: "Unlimited Vectors",
        seats: "Unlimited Seats"
      },
      features: [
        "Everything in Growth Pro, plus:",
        "Dedicated VPC / On-Premise deployment option",
        "Zero Data Retention (ZDR) guarantee",
        "Custom Model Context Protocol (MCP) servers",
        "Role-based access control (RBAC) & SAML SSO",
        "99.99% uptime SLA & 24/7 dedicated engineer",
        "Custom billing via Paddle or Invoicing"
      ],
      ctaText: "Talk to Enterprise Sales",
      ctaLink: "#contact"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Simple, predictable plans for every stage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            No surprise overages. Upgrade, downgrade, or cancel anytime with a 14-day risk-free trial.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-zinc-900 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <span>Yearly billing</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-white px-1.5 py-0.2 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => {
            const price =
              p.monthlyPrice === null
                ? "Custom"
                : billingCycle === "yearly"
                ? `$${p.yearlyPrice}`
                : `$${p.monthlyPrice}`;

            return (
              <div
                key={p.name}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  p.highlight
                    ? "bg-zinc-950 text-white border-2 border-zinc-900 shadow-xl lg:-translate-y-2"
                    : "bg-white text-zinc-900 border border-zinc-200/90 shadow-xs hover:border-zinc-300"
                }`}
              >
                {/* Popular Badge */}
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {p.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                  </div>

                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      p.highlight ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {p.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {price}
                    </span>
                    {p.monthlyPrice !== null && (
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          p.highlight ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        / month {billingCycle === "yearly" && "billed annually"}
                      </span>
                    )}
                  </div>

                  {/* Key Metrics Box */}
                  <div
                    className={`mt-6 p-4 rounded-2xl grid grid-cols-2 gap-2.5 text-xs font-medium ${
                      p.highlight
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-300"
                        : "bg-zinc-50 border border-zinc-100 text-zinc-700"
                    }`}
                  >
                    <div>🤖 {p.metrics.agents}</div>
                    <div>⚡ {p.metrics.credits}</div>
                    <div>💾 {p.metrics.storage}</div>
                    <div>👥 {p.metrics.seats}</div>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        p.highlight ? "text-zinc-400" : "text-zinc-400"
                      }`}
                    >
                      Included Capabilities
                    </span>
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            p.highlight ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span
                          className={p.highlight ? "text-zinc-200" : "text-zinc-700"}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-zinc-200/20">
                  <Link
                    href={p.ctaLink}
                    className={`w-full py-3 px-4 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all ${
                      p.highlight
                        ? "bg-white text-zinc-900 hover:bg-zinc-100 shadow-sm"
                        : "bg-zinc-900 text-white hover:bg-black"
                    }`}
                  >
                    <span>{p.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
