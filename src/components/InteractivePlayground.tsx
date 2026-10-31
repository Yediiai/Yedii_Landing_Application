"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bot,
  Send,
  Database,
  Sliders,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  FileText,
  Globe,
  RefreshCw,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Zap,
  Cpu
} from "lucide-react";

interface AgentPersona {
  id: string;
  name: string;
  role: string;
  model: string;
  temperature: number;
  sources: { title: string; type: "pdf" | "web" | "crm"; status: string }[];
  initialMessages: { sender: "user" | "agent"; text: string; citations?: string[]; latency?: string }[];
  suggestedPrompts: string[];
  systemPrompt: string;
}

const PERSONAS: AgentPersona[] = [
  {
    id: "support",
    name: "Aura Support Bot",
    role: "Tier-1 Customer Support & Troubleshooting",
    model: "Claude 3.5 Sonnet",
    temperature: 0.2,
    sources: [
      { title: "Knowledge_Base_v3.pdf", type: "pdf", status: "14 Chunks active" },
      { title: "https://docs.yedii.online", type: "web", status: "Indexed 10m ago" },
      { title: "Zendesk Solved Tickets", type: "crm", status: "4,200 Vectors" }
    ],
    initialMessages: [
      {
        sender: "user",
        text: "Hi, how does human handoff work if the customer gets frustrated?"
      },
      {
        sender: "agent",
        text: "Yedii continuously evaluates user sentiment and confidence scores. If sentiment drops below threshold or if requested by the user, the agent triggers an instant webhook to escalate the thread directly to your team's Zendesk, Slack, or Yedii Shared Inbox with full conversation context and summary.",
        citations: ["Docs: Handover Protocols", "Zendesk Integration v2"],
        latency: "118ms"
      }
    ],
    suggestedPrompts: [
      "Can I connect Yedii to WhatsApp & Slack?",
      "How is my customer data protected?",
      "Can I customize the agent's tone and greetings?"
    ],
    systemPrompt: "You are Aura, an empathetic, accurate support copilot. Always cite official documentation."
  },
  {
    id: "sales",
    name: "Nexus SDR Agent",
    role: "Inbound Lead Qualification & Meeting Booking",
    model: "GPT-4o",
    temperature: 0.4,
    sources: [
      { title: "Product_Catalog_2026.pdf", type: "pdf", status: "22 Chunks active" },
      { title: "Pricing_Tiers_Master.xlsx", type: "pdf", status: "Updated today" },
      { title: "HubSpot CRM Pipeline", type: "crm", status: "Sync active" }
    ],
    initialMessages: [
      {
        sender: "user",
        text: "We are an enterprise with 50 support agents. What plan fits us best?"
      },
      {
        sender: "agent",
        text: "For a 50-agent deployment handling high concurrency, our Enterprise Tier is optimal. It offers dedicated VPC hosting, custom SLA (99.99%), unlimited knowledge grounding, and SOC2 Type II compliance reports. Would you like me to schedule a 15-minute briefing with our solutions engineer?",
        citations: ["Pricing: Enterprise Tier Sheet", "SLA Guarantees 2026"],
        latency: "142ms"
      }
    ],
    suggestedPrompts: [
      "What are the volume discounts for >500k queries?",
      "Does Yedii support custom Paddle or Stripe billing?",
      "Schedule a demo for tomorrow at 2 PM"
    ],
    systemPrompt: "You are Nexus, a helpful AI SDR. Qualify company size, use-case, and guide towards booking."
  },
  {
    id: "internal",
    name: "Atlas Internal Copilot",
    role: "Engineering & Internal Knowledge Assistant",
    model: "Claude 3.5 Sonnet",
    temperature: 0.1,
    sources: [
      { title: "Notion Engineering Wiki", type: "web", status: "Real-time sync" },
      { title: "Security_Policies_2026.pdf", type: "pdf", status: "Audited" },
      { title: "GitHub Architecture Repos", type: "web", status: "Branch: main" }
    ],
    initialMessages: [
      {
        sender: "user",
        text: "Where do I find the API key rotation policy for production clusters?"
      },
      {
        sender: "agent",
        text: "According to SEC-POL-402, production API keys must be rotated every 90 days via HashiCorp Vault. The automation pipeline runs on the first Monday of each quarter. Ensure environment overrides are staged in Kubernetes secrets before triggering.",
        citations: ["Notion: Security Policy #402", "Infra: Vault Architecture"],
        latency: "96ms"
      }
    ],
    suggestedPrompts: [
      "What is the deployment procedure for microservices?",
      "How do we configure MCP server connectors?",
      "Show me the Dockerfile staging template"
    ],
    systemPrompt: "You are Atlas, the internal engineering copilot. Provide exact references to architecture docs."
  }
];

export function InteractivePlayground() {
  const [activePersonaId, setActivePersonaId] = useState<string>("support");
  const [messages, setMessages] = useState(PERSONAS[0].initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showConfig, setShowConfig] = useState(true);

  const currentPersona = PERSONAS.find((p) => p.id === activePersonaId) || PERSONAS[0];

  const handleSelectPersona = (persona: AgentPersona) => {
    setActivePersonaId(persona.id);
    setMessages(persona.initialMessages);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user" as const, text }];
    setMessages(newMessages);
    setInputText("");
    setIsTyping(true);

    // Simulate smart response with citations
    setTimeout(() => {
      let reply = "";
      let citations = ["Verified Grounding: Yedii Docs"];

      if (text.toLowerCase().includes("whatsapp") || text.toLowerCase().includes("slack")) {
        reply = "Yes! Yedii supports native 1-click deployments to WhatsApp Business API, Slack workspaces, Web widget embed scripts, and custom REST API webhooks.";
        citations = ["Docs: Omnichannel Deployments", "WhatsApp Cloud API Connector"];
      } else if (text.toLowerCase().includes("data") || text.toLowerCase().includes("protect")) {
        reply = "Your data is strictly isolated within tenant-specific vector partitions. Yedii enforces zero data retention on model training, with AES-256 at rest and TLS 1.3 in transit.";
        citations = ["Security: SOC2 Whitepaper", "Data Privacy Framework"];
      } else if (text.toLowerCase().includes("tone") || text.toLowerCase().includes("customize")) {
        reply = "You have full granular control! In Yedii's Agent Studio, you can tune temperature, system prompt persona, fallback messages, and inject custom guardrail rules.";
        citations = ["Agent Studio: Persona Configuration"];
      } else {
        reply = `I have cross-checked our grounded knowledge base across ${currentPersona.sources.length} active sources. Everything is configured and verified with high confidence.`;
        citations = [currentPersona.sources[0]?.title || "Active Knowledge Source"];
      }

      setMessages([
        ...newMessages,
        {
          sender: "agent",
          text: reply,
          citations,
          latency: `${Math.floor(Math.random() * 50 + 90)}ms`
        }
      ]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <section id="playground" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            Live Interactive Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Experience Yedii in action
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Select an agent persona below or click prompts to test real-time grounded reasoning, knowledge retrieval, and citations.
          </p>
        </div>

        {/* ElevenLabs Style Persona Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PERSONAS.map((p) => {
            const isActive = p.id === activePersonaId;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPersona(p)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-sm ring-2 ring-zinc-900/10"
                    : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50"
                }`}
              >
                <Bot className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-400"}`} />
                <span>{p.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {p.model}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interface Frame (Peec AI / ElevenLabs high-craft mockup) */}
        <div className="rounded-2xl border border-zinc-200/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Top Frame Bar */}
          <div className="px-4 sm:px-6 py-3 border-b border-zinc-100 bg-zinc-50/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-zinc-200 mx-1 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-900">
                  {currentPersona.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live & Grounded
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-600 font-mono text-[11px]">
                <Cpu className="w-3 h-3 text-zinc-400" />
                {currentPersona.model}
              </span>
              <button
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 font-medium cursor-pointer"
              >
                <Sliders className="w-3 h-3" />
                <span className="hidden sm:inline">{showConfig ? "Hide Sources" : "View Sources"}</span>
              </button>
            </div>
          </div>

          {/* Playground Body: 2 Columns (Config/Sources + Live Chat) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Knowledge Sources & Parameters (Collapsible) */}
            {showConfig && (
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-100 p-4 sm:p-5 bg-zinc-50/40 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Persona Bio */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Assigned Persona
                    </span>
                    <p className="text-xs font-medium text-zinc-700 mt-1">
                      {currentPersona.role}
                    </p>
                  </div>

                  {/* Connected Knowledge Bases */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                        <Database className="w-3 h-3" />
                        Grounded Knowledge ({currentPersona.sources.length})
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Synced
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {currentPersona.sources.map((src) => (
                        <div
                          key={src.title}
                          className="flex items-center justify-between p-2 rounded-lg bg-white border border-zinc-200/80 text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {src.type === "pdf" ? (
                              <FileText className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            ) : src.type === "web" ? (
                              <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            ) : (
                              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            )}
                            <span className="font-medium text-zinc-800 truncate">
                              {src.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-400 font-mono shrink-0">
                            {src.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Model Parameters */}
                  <div className="pt-2 border-t border-zinc-200/60 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Inference Settings
                    </span>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-600">Model Temperature</span>
                      <span className="font-mono text-zinc-900 font-semibold">
                        {currentPersona.temperature}
                      </span>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-zinc-900 h-1.5 rounded-full"
                        style={{ width: `${currentPersona.temperature * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Note */}
                <div className="pt-3 border-t border-zinc-200/60 flex items-center gap-2 text-[11px] text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Strict zero-hallucination verification active</span>
                </div>
              </div>
            )}

            {/* Right Column: Live Chat Playground */}
            <div
              className={`${
                showConfig ? "lg:col-span-8" : "lg:col-span-12"
              } flex flex-col justify-between p-4 sm:p-6 bg-white`}
            >
              {/* Messages Area */}
              <div className="space-y-4 overflow-y-auto max-h-[340px] pr-1">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.sender === "user"
                          ? "bg-zinc-900 text-white rounded-br-xs"
                          : "bg-zinc-50 border border-zinc-200/80 text-zinc-800 rounded-bl-xs"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-line">{m.text}</p>
                    </div>

                    {/* Citations & Latency for Agent Messages */}
                    {m.sender === "agent" && (
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 px-1">
                        {m.latency && (
                          <span className="text-[10px] text-zinc-400 font-mono">
                            ⚡ {m.latency}
                          </span>
                        )}
                        {m.citations?.map((c) => (
                          <span
                            key={c}
                            className="inline-flex items-center gap-1 text-[10px] text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200/60 font-medium"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-zinc-400 pl-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-200" />
                    <span>Retrieving context & generating answer...</span>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Area: Prompts + Input */}
              <div className="mt-4 pt-3 border-t border-zinc-100 space-y-3">
                {/* Quick Prompts Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-zinc-400 font-medium mr-1">
                    Try asking:
                  </span>
                  {currentPersona.suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSendMessage(prompt)}
                      className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium transition-colors cursor-pointer truncate max-w-[260px] sm:max-w-none"
                    >
                      &quot;{prompt}&quot;
                    </button>
                  ))}
                </div>

                {/* Text Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={`Ask ${currentPersona.name} any question...`}
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 placeholder:text-zinc-400"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isTyping}
                    className="p-2.5 rounded-xl bg-zinc-900 text-white hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
