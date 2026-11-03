"use client";

import { useState } from "react";
import { Code2, Copy, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function DeveloperSection() {
  const [activeTab, setActiveTab] = useState<"ts" | "python" | "curl" | "widget">("ts");
  const [copied, setCopied] = useState(false);

  const snippets = {
    ts: `import { YediiClient } from "@yedii/sdk";

// Initialize authenticated client
const yedii = new YediiClient({
  apiKey: process.env.YEDII_API_KEY,
});

// Run autonomous agent session
const response = await yedii.agents.chat({
  agentId: "agt_prod_902f1a",
  message: "Provide a summary of our enterprise SLA commitments",
  userId: "usr_8829",
  stream: true,
});

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}`,
    python: `from yedii import YediiClient
import os

# Initialize Yedii Python Client
client = YediiClient(api_key=os.environ.get("YEDII_API_KEY"))

# Invoke agent with grounded RAG
stream = client.agents.chat(
    agent_id="agt_prod_902f1a",
    message="What is the refund turnaround time for EMEA customers?",
    user_id="usr_8829",
    stream=True
)

for chunk in stream:
    print(chunk.text, end="", flush=True)`,
    curl: `curl -X POST "https://api.yedii.online/api/v1/agents/agt_prod_902f1a/chat" \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Verify account tier and active addons",
    "userId": "usr_8829",
    "metadata": { "platform": "web" }
  }'`,
    widget: `<!-- Paste anywhere inside <body> or layout.tsx -->
<script
  src="https://cdn.yedii.online/widget.v2.js"
  data-agent-id="agt_prod_902f1a"
  data-theme="light"
  data-primary-color="#141C2E"
  defer
></script>`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 md:py-12 bg-white border-y border-[#E8E9EC] text-[#141C2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
              <Code2 className="w-3.5 h-3.5 text-[#141C2E]" />
              Built for Developers
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] leading-tight">
              Integrate in seconds with idiomatic SDKs
            </h2>

            <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
              Every Yedii agent exposes a streaming REST API, WebSocket hooks, and lightweight TypeScript & Python SDKs. Drop in pre-built UI components or run fully headless.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A4049]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Zero-latency edge streaming (SSE & WebSockets)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Strict TypeScript schemas with end-to-end type safety</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Standardized Model Context Protocol (MCP) server support</span>
              </li>
            </ul>

            <div className="pt-1">
              <Link
                href="https://github.com/Yediiai/Yedii_Landing_Application"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141C2E] hover:text-black transition-colors group"
              >
                <span>Explore the API Documentation</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Clean Light-Mode Code Window */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E8E9EC] bg-[#FBFBFC] shadow-xs overflow-hidden">
              {/* Window Header with Tabs */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E8E9EC] flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {(["ts", "python", "curl", "widget"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors uppercase cursor-pointer ${activeTab === tab
                          ? "bg-[#141C2E] text-white font-semibold shadow-2xs"
                          : "text-[#6B7280] hover:text-[#141C2E] hover:bg-zinc-100"
                        }`}
                    >
                      {tab === "ts" ? "TypeScript" : tab === "widget" ? "Embed Script" : tab}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#141C2E] bg-white border border-[#E4E5E8] hover:bg-zinc-50 rounded-md transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6B7280]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre */}
              <div className="p-4 sm:p-5 overflow-x-auto bg-[#FBFBFC]">
                <pre className="font-mono text-xs text-[#1F2937] leading-relaxed">
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
