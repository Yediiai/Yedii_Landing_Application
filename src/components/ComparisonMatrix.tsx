"use client";

import { Check, X, AlertCircle } from "lucide-react";

export function ComparisonMatrix() {
  const comparisonItems = [
    {
      feature: "Time to First Deployed Agent",
      yedii: "< 5 minutes (No-code + SDK)",
      traditional: "Weeks of flow-chart programming",
      diy: "2-3 months of custom engineering"
    },
    {
      feature: "Proprietary Knowledge Grounding",
      yedii: "Automated vector RAG with citations",
      traditional: "Rigid static FAQ keywords",
      diy: "Requires custom vector DB infra"
    },
    {
      feature: "Multi-Model Intelligence",
      yedii: "Claude 3.5 Sonnet, GPT-4o, Llama 3",
      traditional: "Outdated proprietary NLP",
      diy: "Locked to single API provider"
    },
    {
      feature: "Human-in-the-Loop Handover",
      yedii: "Real-time sentiment alerts & team inbox",
      traditional: "Basic ticket escalation only",
      diy: "Complex WebSocket engineering"
    },
    {
      feature: "Omnichannel Deployment",
      yedii: "Web Widget, WhatsApp, Slack & MCP",
      traditional: "Limited to web embed",
      diy: "Separate integrations per channel"
    },
    {
      feature: "Zero Data Retention Guarantee",
      yedii: "SOC2 Type II + GDPR Enterprise ready",
      traditional: "Varies by vendor",
      diy: "Full compliance audit burden"
    }
  ];

  return (
    <section id="enterprise" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold mb-3">
            Clear Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Why teams choose Yedii
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Compare Yedii with legacy rule-based chatbots and brittle in-house LLM wrappers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  <th className="py-4 px-6 min-w-[220px]">Capability</th>
                  <th className="py-4 px-6 min-w-[240px] bg-slate-100/70 border-x border-slate-200 text-[#141C2E] font-bold">
                    <div className="flex items-center gap-2">
                      <span>Yedii Platform</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 min-w-[220px]">Traditional Bots</th>
                  <th className="py-4 px-6 min-w-[220px]">In-House DIY Wrapper</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-zinc-900">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-emerald-950 bg-emerald-50/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.yedii}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-zinc-300 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-500">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{item.diy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
