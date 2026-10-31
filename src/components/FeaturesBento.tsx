"use client";

import { useState } from "react";
import {
  Database,
  Sparkles,
  Share2,
  Inbox,
  ShieldCheck,
  Check,
  Layers,
  ArrowRight,
  Code2,
  Sliders,
  ExternalLink,
  MessageSquare,
  Bot
} from "lucide-react";

export function FeaturesBento() {
  const [selectedChannel, setSelectedChannel] = useState<"widget" | "whatsapp" | "slack" | "mcp">("widget");

  const channelData = {
    widget: {
      name: "Custom Web Widget",
      desc: "Floating script with full theme matching, custom avatar & trigger rules.",
      snippet: `<script src="https://cdn.yedii.online/widget.v2.js" data-agent-id="agt_902f1a" defer></script>`
    },
    whatsapp: {
      name: "WhatsApp Business API",
      desc: "Instant 24/7 customer engagement on their preferred messaging channel.",
      snippet: `POST /api/v1/deploy/whatsapp\n{ "phoneNumberId": "wa_98412", "agentId": "agt_902f1a" }`
    },
    slack: {
      name: "Slack Team App",
      desc: "Direct answers in internal #help channels with @Yedii bot mentions.",
      snippet: `// Manifest auto-injected into Slack workspace\nevents: ["app_mention", "message.im"]`
    },
    mcp: {
      name: "Model Context Protocol (MCP)",
      desc: "Expose your agent's knowledge and actions as a standardized MCP server.",
      snippet: `mcp: { "server": "yedii-agent-mcp", "version": "1.0.0" }`
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-zinc-900" />
            Complete Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Everything you need to build & scale production AI agents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            From ingestion of proprietary company documents to omnichannel deployment and live human escalation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Knowledge Hub & RAG (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Data Grounding
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                Unified Knowledge Hub with Real-Time Vector RAG
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                Connect your business documentation in seconds. Yedii handles automated parsing, semantic chunking, vector embedding, and hybrid keyword retrieval so agents never hallucinate.
              </p>
            </div>

            {/* Ingestion Visual Preview */}
            <div className="mt-6 pt-5 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-800">Files & Docs</div>
                <div className="text-[11px] text-zinc-500 mt-1">PDF, DOCX, CSV, Markdown, Sheets</div>
                <span className="inline-block mt-2 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Instant Embedding
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-800">Web Crawling</div>
                <div className="text-[11px] text-zinc-500 mt-1">Auto-sync documentation & help centers</div>
                <span className="inline-block mt-2 text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Scheduled Re-Index
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-800">Apps & CRMs</div>
                <div className="text-[11px] text-zinc-500 mt-1">Notion, Zendesk, Salesforce & Drive</div>
                <span className="inline-block mt-2 text-[10px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  Live Webhook Sync
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Visual Studio (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Agent Studio
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                Persona & Tool Builder
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                Define agent personality, system instructions, temperature, and action tools with a visual playground.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-zinc-900 text-white font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-zinc-800 text-[11px]">
                <span>AGENT CONFIGURATION</span>
                <span className="text-emerald-400 font-sans">Active</span>
              </div>
              <div className="text-zinc-300">
                <span className="text-purple-400">const</span> agent = <span className="text-blue-400">new</span> YediiAgent({`{`}
              </div>
              <div className="pl-4 text-zinc-400">
                model: <span className="text-emerald-300">&quot;claude-3-5-sonnet&quot;</span>,<br />
                guardrails: <span className="text-amber-300">true</span>,<br />
                confidenceThreshold: <span className="text-cyan-300">0.92</span>
              </div>
              <div className="text-zinc-300">{`}`});</div>
            </div>
          </div>

          {/* Card 3: Omnichannel Deployment (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Deploy Anywhere
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                Omnichannel in 1 Click
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                Reach users where they already are. Deploy your agent across web, mobile, messaging, and API.
              </p>
            </div>

            {/* Interactive Channel Picker */}
            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100">
                {(["widget", "whatsapp", "slack", "mcp"] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChannel(ch)}
                    className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all capitalize ${
                      selectedChannel === ch
                        ? "bg-white text-zinc-900 shadow-xs"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70 text-xs">
                <div className="font-semibold text-zinc-900">
                  {channelData[selectedChannel].name}
                </div>
                <div className="text-zinc-500 text-[11px] mt-0.5">
                  {channelData[selectedChannel].desc}
                </div>
                <pre className="mt-2.5 p-2 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-[10px] overflow-x-auto">
                  {channelData[selectedChannel].snippet}
                </pre>
              </div>
            </div>
          </div>

          {/* Card 4: Human-in-the-Loop Shared Inbox (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-5">
                <Inbox className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Seamless Escalation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                Shared Team Inbox & Human Handover
              </h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                Never lose a critical customer. When an agent detects low sentiment or complex edge cases, it smoothly transitions the conversation to your human support agents with full transcript memory.
              </p>
            </div>

            {/* Inbox UI Mockup */}
            <div className="mt-6 rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900">Live Thread: #4912</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-200/60 text-[10px]">
                    Sentiment Alert: Frustrated
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400">12s ago</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-zinc-200/60 text-zinc-700">
                  <span className="font-medium text-zinc-900 mr-1.5">User:</span>
                  &quot;I need to hablar con un humano por favor regarding my enterprise bill.&quot;
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-emerald-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Agent escalated to support specialist <strong>Sarah M.</strong></span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 uppercase">Handover Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
