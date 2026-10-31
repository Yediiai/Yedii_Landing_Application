"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Shield,
  Zap,
  CheckCircle2,
  Send,
  Loader2,
  Globe,
  MessageSquare,
  ChevronRight,
  Headphones,
  FileText,
  UserCheck,
  ExternalLink,
  Flame,
  Check,
  Star
} from "lucide-react";

interface AgentPreset {
  id: string;
  name: string;
  url: string;
  badge: string;
  query: string;
  answer: string;
  sources: string;
  latency: string;
  confidence: string;
}

const PRESETS: AgentPreset[] = [
  {
    id: "stripe",
    name: "FinTech Support",
    url: "https://stripe.com/docs",
    badge: "Payments & Invoicing",
    query: "How do I handle automated dispute evidence submission via API?",
    answer: "You can submit dispute evidence programmatically by updating the Dispute object with evidence parameters (`evidence[customer_signature]`, `evidence[receipt]`). Yedii automatically syncs chargeback webhooks to your finance dashboard.",
    sources: "Stripe Docs API v2 • Disputes Guide #402",
    latency: "89ms",
    confidence: "99.8%"
  },
  {
    id: "ecommerce",
    name: "Shopify Storefront",
    url: "https://shop.allbirds.com",
    badge: "WhatsApp Order Tracking",
    query: "Can I exchange my order #84910 for a size 10 if already shipped?",
    answer: "Yes! Order #84910 shipped via DHL Express today. We can initiate an instant size exchange without returning to warehouse first. Would you like me to hold size 10 in Wool Runners for you right now?",
    sources: "Shopify Orders Sync • Exchange Policy 2026",
    latency: "112ms",
    confidence: "99.4%"
  },
  {
    id: "linear",
    name: "SaaS Dev Copilot",
    url: "https://linear.app/features",
    badge: "Linear / GitHub Sync",
    query: "Does Yedii support human agent takeover if a customer asks for a live rep?",
    answer: "Absolutely. When sentiment score dips below 0.75 or customer requests a human, Yedii immediately triggers a live handoff alert to your shared team inbox and Slack, preserving the entire conversation context.",
    sources: "Human Escalation Engine • Slack Bot Integration",
    latency: "94ms",
    confidence: "99.6%"
  }
];

export function Hero() {
  const [selectedPreset, setSelectedPreset] = useState<AgentPreset>(PRESETS[0]);
  const [urlInput, setUrlInput] = useState(PRESETS[0].url);
  const [customQuestion, setCustomQuestion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeStep, setActiveStep] = useState<"ready" | "crawling" | "indexing" | "chatting">("chatting");
  const [simulatedReply, setSimulatedReply] = useState<{
    query: string;
    answer: string;
    sources: string;
    latency: string;
    confidence: string;
  }>({
    query: PRESETS[0].query,
    answer: PRESETS[0].answer,
    sources: PRESETS[0].sources,
    latency: PRESETS[0].latency,
    confidence: PRESETS[0].confidence
  });

  const handleSelectPreset = (preset: AgentPreset) => {
    setSelectedPreset(preset);
    setUrlInput(preset.url);
    setIsGenerating(true);
    setActiveStep("crawling");

    setTimeout(() => {
      setActiveStep("indexing");
    }, 400);

    setTimeout(() => {
      setSimulatedReply({
        query: preset.query,
        answer: preset.answer,
        sources: preset.sources,
        latency: preset.latency,
        confidence: preset.confidence
      });
      setActiveStep("chatting");
      setIsGenerating(false);
    }, 800);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsGenerating(true);
    setActiveStep("crawling");

    setTimeout(() => {
      setActiveStep("indexing");
    }, 500);

    setTimeout(() => {
      let domain = "your company docs";
      try {
        const u = new URL(urlInput.startsWith("http") ? urlInput : `https://${urlInput}`);
        domain = u.hostname;
      } catch {
        domain = urlInput;
      }

      setSimulatedReply({
        query: `How does our customer support team automate Tier-1 inquiries from ${domain}?`,
        answer: `Yedii has parsed and vector-indexed documentation from ${domain}. Your autonomous agent is now grounded to answer customer questions accurately with zero hallucinations, while escalating edge cases to your team inbox.`,
        sources: `${domain} Index • 142 vectors synthesized`,
        latency: "105ms",
        confidence: "99.7%"
      });
      setActiveStep("chatting");
      setIsGenerating(false);
    }, 950);
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim() || isGenerating) return;

    const q = customQuestion;
    setIsGenerating(true);

    setTimeout(() => {
      let answer = `I searched across your grounded vector base and verified this request with 99.5% confidence against our documented knowledge.`;
      let sources = `${selectedPreset.name} Knowledge Base`;

      if (q.toLowerCase().includes("price") || q.toLowerCase().includes("cost") || q.toLowerCase().includes("plan")) {
        answer = `Yedii plans start at $19/mo for Starter (1 agent, 500 credits), $49/mo for Growth (3 agents, 2,000 credits), and dedicated single-tenant VPC for Enterprise. Yearly billing saves 2 months free.`;
        sources = `Yedii Pricing Architecture 2026`;
      } else if (q.toLowerCase().includes("whatsapp") || q.toLowerCase().includes("phone") || q.toLowerCase().includes("sms")) {
        answer = `Yes! You can connect your official WhatsApp Business Cloud API in 1 click. Yedii handles incoming WhatsApp chats 24/7 with instant rich media replies.`;
        sources = `WhatsApp Cloud API Protocol v2`;
      } else if (q.toLowerCase().includes("slack") || q.toLowerCase().includes("team") || q.toLowerCase().includes("human")) {
        answer = `When a query requires human intervention, Yedii posts a webhook payload directly into your Slack or Zendesk channel with complete user history and sentiment rating.`;
        sources = `Real-time Escalation Matrix`;
      }

      setSimulatedReply({
        query: q,
        answer,
        sources,
        latency: `${Math.floor(Math.random() * 35 + 85)}ms`,
        confidence: "99.6%"
      });
      setCustomQuestion("");
      setIsGenerating(false);
    }, 550);
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#FAFAFC] to-white">
      {/* Background radial glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-100/30 via-sky-100/20 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 -z-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Curiosity Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mb-6 backdrop-blur-sm transition-all hover:border-zinc-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-zinc-900 tracking-tight">
            Yedii 2.0 Engine Live
          </span>
          <span className="text-zinc-300">|</span>
          <span className="text-xs text-zinc-600 font-medium inline-flex items-center gap-1">
            Test any website URL below in real time
            <ArrowRight className="w-3 h-3 text-zinc-500" />
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141C2E] leading-[1.08] max-w-4xl mx-auto">
          Autonomous AI agents that resolve{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
            74% of requests
          </span>{" "}
          instantly
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#555C68] max-w-2xl mx-auto font-normal leading-relaxed">
          Ground intelligent agents on your company docs, Notion, and website. Deploy in 2 minutes to WhatsApp, Web Widget, and Slack with real human escalation.
        </p>

        {/* Primary CTA Row */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://app.yedii.com/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-sm hover:bg-black transition-all shadow-[0_2px_8px_rgba(20,28,46,0.15)] active:scale-[0.99] group"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span>Create Your Agent Free</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="https://app.yedii.com/signin"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs active:scale-[0.99]"
          >
            <Bot className="w-4 h-4 text-zinc-500" />
            <span>Log in to Dashboard</span>
          </Link>
        </div>

        {/* Trust Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-[#717680] font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            SOC2 Type II &amp; GDPR Ready
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Deploy in &lt; 2 minutes
          </span>
        </div>

        {/* =========================================================================
            HIGH CURIOSITY ENGINE: LIVE INTERACTIVE URL TESTER & AGENT SIMULATOR
            Gives the visitor instant tactile curiosity — they test live reasoning right here!
           ========================================================================= */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          {/* Outer Glass Card */}
          <div className="rounded-[20px] border border-[#E4E5E8] bg-white p-4 sm:p-6 shadow-[0_16px_48px_-12px_rgba(16,24,40,0.08),0_2px_8px_rgba(16,24,40,0.02)] transition-all">
            
            {/* Top Bar: Live URL Ingestion Bar */}
            <div className="space-y-3 pb-4 border-b border-[#F0F1F3]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-semibold">
                    1
                  </span>
                  <span className="text-xs font-bold text-[#141C2E] tracking-tight">
                    Instant Agent Generator: Enter your URL or pick a demo
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Auto-crawls &amp; grounds in 120ms</span>
                </div>
              </div>

              {/* URL Input Form */}
              <form onSubmit={handleUrlSubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9CA3AF]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Enter your website or docs URL (e.g. yourcompany.com/docs)..."
                    className="w-full pl-9 pr-3 h-[42px] rounded-[10px] border border-[#E4E5E8] bg-[#F9FAFB] text-xs sm:text-sm text-[#141C2E] placeholder:text-[#9CA3AF] focus:outline-none focus:bg-white focus:border-[#141C2E] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="h-[42px] px-4 rounded-[10px] bg-[#141C2E] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span className="hidden sm:inline">Indexing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Test Agent</span>
                    </>
                  )}
                </button>
              </form>

              {/* Preset Chips */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <span className="text-[11px] text-[#8A9099] font-medium">Try instant presets:</span>
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                      selectedPreset.id === p.id
                        ? "bg-zinc-900 text-white shadow-2xs"
                        : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-zinc-900"
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className="text-[10px] opacity-70">({p.badge})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Middle Section: Live Reasoning Simulator */}
            <div className="py-4">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-[6px] bg-zinc-900 text-white flex items-center justify-center text-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#141C2E]">
                    Live Grounded Reasoning Output
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">
                    ⚡ {simulatedReply.latency}
                  </span>
                  <span className="text-[10px] font-mono text-sky-700 bg-sky-50 border border-sky-200/60 px-1.5 py-0.5 rounded hidden sm:inline-block">
                    {simulatedReply.confidence} accuracy
                  </span>
                </div>
                <div className="text-[11px] text-[#8A9099] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Zero Hallucination Guaranteed</span>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="rounded-[12px] bg-[#F9FAFB] border border-[#E9ECEF] p-3.5 sm:p-4 min-h-[140px] flex flex-col justify-center space-y-3">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center py-5 gap-2 text-xs text-[#6B7280]">
                    <Loader2 className="w-5 h-5 text-[#141C2E] animate-spin" />
                    <span>
                      {activeStep === "crawling" && "Crawling website structure and help center docs..."}
                      {activeStep === "indexing" && "Embedding vector chunks and building RAG index..."}
                      {activeStep === "chatting" && "Synthesizing answer with verified citations..."}
                    </span>
                  </div>
                ) : (
                  <>
                    {/* User Question Bubble */}
                    <div className="flex items-start justify-end gap-2">
                      <div className="bg-[#141C2E] text-white text-xs sm:text-[13px] px-3.5 py-2 rounded-[12px] rounded-br-xs max-w-[85%] leading-relaxed shadow-2xs">
                        {simulatedReply.query}
                      </div>
                    </div>

                    {/* Agent Verified Answer */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-[6px] bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="bg-white border border-[#E5E7EB] text-[#1F2937] text-xs sm:text-[13px] p-3 rounded-[12px] rounded-bl-xs leading-relaxed shadow-2xs">
                          {simulatedReply.answer}
                        </div>

                        {/* Citation tag & latency */}
                        <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#6B7280] px-1">
                          <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded inline-flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {simulatedReply.sources}
                          </span>
                          <span>•</span>
                          <span className="text-[#4B5563]">Escalates to team on sentiment drop</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Custom Follow-Up Question Input */}
              <form onSubmit={handleAskQuestion} className="mt-3 flex items-center gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Ask a follow-up (e.g. 'Can this deploy to WhatsApp?' or 'What about refunds?')..."
                  className="flex-1 h-[38px] px-3 rounded-[8px] border border-[#E4E5E8] bg-white text-xs text-[#141C2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#141C2E]"
                />
                <button
                  type="submit"
                  disabled={!customQuestion.trim() || isGenerating}
                  className="h-[38px] px-3 rounded-[8px] bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold flex items-center gap-1 transition-colors disabled:opacity-40 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ask</span>
                </button>
              </form>
            </div>

            {/* Bottom Curiosity Trigger: Claim this agent banner */}
            <div className="mt-3 pt-3.5 border-t border-[#F0F1F3] bg-gradient-to-r from-emerald-50/60 via-sky-50/40 to-transparent p-3 rounded-[12px] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-emerald-100" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">
                    Want this exact agent live on your WhatsApp &amp; Website?
                  </div>
                  <div className="text-[11px] text-zinc-600">
                    Takes 60 seconds to configure. Sign up free, no credit card required.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="https://app.yedii.com/signup"
                  className="flex-1 sm:flex-none h-[36px] px-4 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs transition-colors shrink-0"
                >
                  <span>Claim &amp; Deploy Agent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://app.yedii.com/signin"
                  className="h-[36px] px-3 rounded-[8px] bg-white border border-[#E4E5E8] hover:bg-zinc-50 text-zinc-800 text-xs font-semibold flex items-center justify-center shrink-0"
                >
                  Log In
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Live Social Proof Avatars under hero */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#6B7280]">
          <div className="flex -space-x-2 overflow-hidden">
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-zinc-900 text-white font-bold text-[10px] flex items-center justify-center">
              Y
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-700 text-white font-bold text-[10px] flex items-center justify-center">
              A
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-indigo-700 text-white font-bold text-[10px] flex items-center justify-center">
              L
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-amber-600 text-white font-bold text-[10px] flex items-center justify-center">
              R
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-zinc-900">4.9/5</span>
            <span>from 1,200+ fast-moving teams automating 14M+ chats</span>
          </div>
        </div>

      </div>
    </section>
  );
}
