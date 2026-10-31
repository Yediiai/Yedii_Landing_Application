"use client";

import { useState } from "react";
import { Code2, Copy, Check, Terminal, Sparkles, ArrowRight } from "lucide-react";
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
  data-primary-color="#09090b"
  defer
></script>`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 md:py-12 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-semibold border border-zinc-800">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              Built for Developers
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Integrate in seconds with idiomatic SDKs
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every Yedii agent exposes a streaming REST API, WebSocket hooks, and lightweight TypeScript & Python SDKs. Drop in pre-built UI components or run fully headless.
            </p>

            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero-latency edge streaming (SSE & WebSockets)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Strict TypeScript schemas with end-to-end type safety</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Standardized Model Context Protocol (MCP) server support</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="https://github.com/Yediiai/Yedii_Landing_Application"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors group"
              >
                <span>Explore the API Documentation</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Code Window */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Window Header with Tabs */}
              <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto">
                  {(["ts", "python", "curl", "widget"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors uppercase ${
                        activeTab === tab
                          ? "bg-zinc-800 text-white font-semibold"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {tab === "ts" ? "TypeScript" : tab === "widget" ? "Embed Script" : tab}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 rounded-md transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="font-mono text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
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
