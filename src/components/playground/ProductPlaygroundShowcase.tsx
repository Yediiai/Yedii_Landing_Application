"use client";

import React, { useState, useMemo } from "react";
import {
  Plus,
  History,
  SlidersHorizontal,
  Search,
  X,
  ArrowUp,
  Copy,
  Check,
  RotateCcw,
  ArrowLeftRight,
  Trash2,
} from "lucide-react";
import { MODEL_CATALOG } from "@/components/plans/modelCatalog";

export interface ShowcaseModel {
  id: string;
  name: string;
  provider: string;
  logo?: string;
  latencyLabel: string;
  summaryStyle: string;
}

const PROVIDER_FILTERS = [
  "All",
  "OpenAI",
  "Anthropic",
  "Google",
  "DeepSeek",
  "Meta",
  "Mistral",
  "Qwen",
  "Moonshot AI",
] as const;

const MAX_COMPARE_MODELS = 4;

const PROVIDER_LOGO_MAP: Record<string, string> = {
  OpenAI: "/images/providers/openai.svg",
  Anthropic: "/images/providers/anthropic.svg",
  Google: "/images/providers/gemini.svg",
  DeepSeek: "/images/providers/deepseek.svg",
  Meta: "/images/providers/meta.svg",
  Mistral: "/images/providers/mistral.svg",
};

// Build showcase catalog reusing existing MODEL_CATALOG entries plus supported multi-provider models
const SHOWCASE_MODELS: ShowcaseModel[] = [
  ...MODEL_CATALOG.filter((m) =>
    ["openai-gpt-4o", "openai-gpt-4o-mini", "google-gemini-2-5-pro", "deepseek-chat", "kimi-k2", "qwen-max"].includes(
      m.id
    )
  ).map((m) => {
    const providerMap: Record<string, string> = {
      openai: "OpenAI",
      "google-gemini": "Google",
      deepseek: "DeepSeek",
      kimi: "Moonshot AI",
      qwen: "Qwen",
      grok: "Grok",
    };
    const provider = providerMap[m.provider] || "OpenAI";
    return {
      id: m.id,
      name: m.name,
      provider,
      logo: PROVIDER_LOGO_MAP[provider],
      latencyLabel: m.tier === "fast" ? "0.7s" : m.tier === "balanced" ? "1.1s" : "1.8s",
      summaryStyle: m.useCase,
    };
  }),
  {
    id: "anthropic-claude-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic",
    logo: PROVIDER_LOGO_MAP.Anthropic,
    latencyLabel: "1.2s",
    summaryStyle: "Structured, empathetic, policy-accurate support responses",
  },
  {
    id: "meta-llama-3-3-70b",
    name: "Llama 3.3 70B",
    provider: "Meta",
    logo: PROVIDER_LOGO_MAP.Meta,
    latencyLabel: "0.9s",
    summaryStyle: "Fast open-weight reasoning for high-volume workflows",
  },
  {
    id: "mistral-large-2",
    name: "Mistral Large",
    provider: "Mistral",
    logo: PROVIDER_LOGO_MAP.Mistral,
    latencyLabel: "1.0s",
    summaryStyle: "Concise multilingual responses for European & global teams",
  },
  {
    id: "google-gemma-3-27b",
    name: "Gemma 3 27B",
    provider: "Google",
    logo: PROVIDER_LOGO_MAP.Google,
    latencyLabel: "0.6s",
    summaryStyle: "Lightweight, low-latency triage and FAQ resolution",
  },
];

const SAMPLE_PROMPT =
  "Explain how AI can improve customer support for an e-commerce business.";

function buildModelResponse(model: ShowcaseModel, prompt: string, temperature: number): string {
  const toneNote =
    temperature <= 0.3
      ? "Grounded, deterministic policy-first response"
      : temperature <= 0.7
      ? "Balanced conversational & structured response"
      : "Expressive, customer-engaging response";

  if (model.provider === "OpenAI") {
    return `AI transforms e-commerce support by resolving repetitive order, shipping, and return inquiries in seconds:\n\n1. Instant order & tracking lookup across Shopify or WooCommerce.\n2. 24/7 sizing and product availability answers grounded in your catalog.\n3. Automatic escalation to human agents when sentiment drops.\n\n(${toneNote} · ${model.name})`;
  }
  if (model.provider === "Anthropic") {
    return `For e-commerce teams, AI agents act as a reliable first line of support without sacrificing brand tone:\n\n• Deflects up to 70% of WISMO ("Where is my order?") and refund-policy tickets.\n• Cites exact return windows and warranty terms directly from your help docs.\n• Hands off complex disputes to your inbox with a full summary.\n\n(${toneNote} · ${model.name})`;
  }
  if (model.provider === "Google") {
    return `AI improves e-commerce customer support across three measurable areas:\n\n• Speed: Sub-second replies across web chat and WhatsApp during peak sales.\n• Accuracy: Retrieval-augmented generation (RAG) prevents off-policy promises.\n• Conversion: Guides shoppers to the right variant before cart abandonment.\n\n(${toneNote} · ${model.name})`;
  }
  return `With ${model.name}, e-commerce brands automate high-volume support while keeping answers accurate:\n\n• Answers delivery, exchange, and promo-code questions in 95+ languages.\n• Reduces queue backlogs during flash sales and holiday spikes.\n• Surfaces recurring product issues in real-time analytics.\n\n(${toneNote} · Prompt: "${prompt.slice(0, 48)}${prompt.length > 48 ? "..." : ""}")`;
}

function ProviderBadge({ provider, logo }: { provider: string; logo?: string }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${provider} logo`}
        className="w-4 h-4 rounded-[4px] object-contain shrink-0"
      />
    );
  }
  return (
    <span className="w-4 h-4 rounded-[4px] bg-[#141C2E] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
      {provider.slice(0, 2).toUpperCase()}
    </span>
  );
}

interface HistoryEntry {
  id: string;
  title: string;
  modelsCount: number;
  time: string;
}

export function ProductPlaygroundShowcase() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "openai-gpt-4o",
    "anthropic-claude-sonnet",
    "google-gemini-2-5-pro",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [providerFilter, setProviderFilter] = useState<string>("All");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const [promptInput, setPromptInput] = useState(SAMPLE_PROMPT);
  const [activePrompt, setActivePrompt] = useState(SAMPLE_PROMPT);
  const [temperature, setTemperature] = useState(0.2);
  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful, accurate Yedii customer support assistant. Answer concisely using verified company knowledge."
  );

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [copiedModelId, setCopiedModelId] = useState<string | null>(null);
  const [regeneratingId, setRegeneratingId] = useState<string | null>(null);
  const [historyItems, setHistoryItems] = useState<HistoryEntry[]>([
    { id: "h1", title: "E-commerce AI support benefits", modelsCount: 3, time: "Just now" },
    { id: "h2", title: "Refund policy escalation rules", modelsCount: 2, time: "14m ago" },
  ]);

  const selectedModels = useMemo(
    () =>
      selectedIds
        .map((id) => SHOWCASE_MODELS.find((m) => m.id === id))
        .filter((m): m is ShowcaseModel => Boolean(m)),
    [selectedIds]
  );

  const filteredModels = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SHOWCASE_MODELS.filter((m) => {
      if (providerFilter !== "All" && m.provider !== providerFilter) return false;
      if (!q) return true;
      return m.name.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q);
    });
  }, [searchQuery, providerFilter]);

  const toggleModel = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least 1 selected
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= MAX_COMPARE_MODELS) return prev;
      return [...prev, id];
    });
  };

  const handleSend = () => {
    const trimmed = promptInput.trim();
    if (!trimmed) return;
    setActivePrompt(trimmed);
    setHistoryItems((prev) => [
      {
        id: `h-${Date.now()}`,
        title: trimmed.slice(0, 38) + (trimmed.length > 38 ? "..." : ""),
        modelsCount: selectedModels.length,
        time: "Just now",
      },
      ...prev.slice(0, 4),
    ]);
  };

  const handleNewConversation = () => {
    setPromptInput("");
    setActivePrompt(SAMPLE_PROMPT);
  };

  const handleCopy = (id: string, text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedModelId(id);
    setTimeout(() => setCopiedModelId(null), 1600);
  };

  const handleRegenerate = (id: string) => {
    setRegeneratingId(id);
    setTimeout(() => setRegeneratingId(null), 450);
  };

  const gridColsClass =
    selectedModels.length === 1
      ? "grid-cols-1"
      : selectedModels.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : selectedModels.length === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="ai-playground-scope w-full rounded-2xl border border-[#E8E9EC] bg-[#F9FAFB] shadow-sm overflow-hidden text-[#17181C]">
      {/* A. Playground Header (Matches PlaygroundTopBar.tsx) */}
      <div className="bg-white border-b border-[#EAEAEC] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#141C2E]">AI Playground</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4F5F7] border border-[#E4E5E8] text-[11px] font-medium text-[#141C2E]">
            <ArrowLeftRight className="w-3 h-3" />
            {selectedModels.length > 1 ? `Compare Mode (${selectedModels.length})` : "Single Model"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsSelectorOpen((prev) => !prev)}
            className={`h-[34px] px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
              isSelectorOpen
                ? "bg-[#141C2E] border-[#141C2E] text-white"
                : "bg-white border-[#E4E5E8] text-[#141C2E] hover:bg-[#F9FAFB]"
            }`}
          >
            <span>Models ({selectedModels.length}/{MAX_COMPARE_MODELS})</span>
          </button>

          <button
            type="button"
            onClick={handleNewConversation}
            className="h-[34px] px-3 rounded-lg border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-xs font-medium text-[#6B7280] hover:text-[#17181C] transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New conversation</span>
          </button>

          <button
            type="button"
            onClick={() => setIsHistoryOpen((prev) => !prev)}
            aria-label="Toggle chat history"
            className={`h-[34px] w-[34px] rounded-lg border border-[#E4E5E8] flex items-center justify-center transition-colors cursor-pointer ${
              isHistoryOpen ? "bg-[#F2F3F6] text-[#17181C]" : "bg-white text-[#6B7280] hover:text-[#17181C]"
            }`}
          >
            <History className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            aria-label="Toggle playground settings"
            className={`h-[34px] px-2.5 rounded-lg border border-[#E4E5E8] flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer ${
              isSettingsOpen ? "bg-[#F2F3F6] text-[#17181C]" : "bg-white text-[#6B7280] hover:text-[#17181C]"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>

      {/* B. Multi-Model Selector Bar + Expandable Picker */}
      <div className="bg-white border-b border-[#EAEAEC] px-4 sm:px-6 py-3 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mr-1">
            Selected:
          </span>
          {selectedModels.map((model) => (
            <span
              key={model.id}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5F7] border border-[#E4E5E8] text-xs font-medium text-[#141C2E]"
            >
              <ProviderBadge provider={model.provider} logo={model.logo} />
              <span>{model.name}</span>
              {selectedModels.length > 1 && (
                <button
                  type="button"
                  onClick={() => toggleModel(model.id)}
                  aria-label={`Remove ${model.name}`}
                  className="text-[#6B7280] hover:text-[#141C2E] cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </span>
          ))}
          {selectedModels.length < MAX_COMPARE_MODELS && (
            <button
              type="button"
              onClick={() => setIsSelectorOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-dashed border-[#D0D5DD] text-xs font-medium text-[#6B7280] hover:text-[#141C2E] hover:border-[#141C2E] cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Add model</span>
            </button>
          )}
        </div>

        {isSelectorOpen && (
          <div className="pt-3 border-t border-[#F0F1F3] space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between">
              <div className="relative flex-1 max-w-xs">
                <Search className="w-3.5 h-3.5 text-[#8A9099] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search models..."
                  className="w-full h-[34px] pl-8 pr-3 rounded-lg border border-[#E4E5E8] text-xs text-[#17181C] bg-white focus:outline-none focus:border-[#141C2E]"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
                {PROVIDER_FILTERS.map((prov) => (
                  <button
                    key={prov}
                    type="button"
                    onClick={() => setProviderFilter(prov)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
                      providerFilter === prov
                        ? "bg-[#141C2E] text-white"
                        : "bg-[#F4F5F7] text-[#565C66] hover:text-[#141C2E]"
                    }`}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[210px] overflow-y-auto pr-1">
              {filteredModels.map((model) => {
                const isSelected = selectedIds.includes(model.id);
                const disabled = !isSelected && selectedIds.length >= MAX_COMPARE_MODELS;
                return (
                  <button
                    key={model.id}
                    type="button"
                    disabled={disabled}
                    onClick={() => toggleModel(model.id)}
                    className={`p-2.5 rounded-xl border text-left transition-colors flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#141C2E] border-[#141C2E] text-white cursor-pointer"
                        : disabled
                        ? "bg-[#FAFAFA] border-[#E8E9EC] text-[#9AA0A8] opacity-55 cursor-not-allowed"
                        : "bg-white border-[#E8E9EC] text-[#17181C] hover:bg-[#F9FAFB] cursor-pointer"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ProviderBadge provider={model.provider} logo={model.logo} />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate">{model.name}</div>
                        <div
                          className={`text-[10.5px] truncate ${
                            isSelected ? "text-zinc-300" : "text-[#6B7280]"
                          }`}
                        >
                          {model.provider}
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Workspace Area (Optional History + Settings + Responses + Composer) */}
      <div className="flex flex-col lg:flex-row">
        {isHistoryOpen && (
          <aside className="lg:w-[240px] lg:shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-[#EAEAEC] p-4 space-y-2.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              Conversation History
            </div>
            <div className="space-y-1.5">
              {historyItems.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setPromptInput(h.title)}
                  className="w-full p-2.5 rounded-lg bg-[#FAFAFA] hover:bg-[#F4F5F7] border border-[#E8E9EC] text-left cursor-pointer transition-colors"
                >
                  <div className="text-xs font-medium text-[#17181C] truncate">{h.title}</div>
                  <div className="text-[10.5px] text-[#6B7280] mt-0.5">
                    {h.modelsCount} models · {h.time}
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}

        <div className="flex-1 min-w-0 p-4 sm:p-6 space-y-5">
          {/* Supported Settings Panel (Temperature + System Prompt) */}
          {isSettingsOpen && (
            <div className="bg-white rounded-xl border border-[#E4E5E8] p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#17181C] mb-1.5">
                  <span>Temperature</span>
                  <span className="font-mono text-[#141C2E]">{temperature.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  aria-label="Temperature"
                  className="w-full accent-[#141C2E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B7280] mt-1">
                  <span>More deterministic</span>
                  <span>More expressive</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#17181C] block mb-1.5">
                  System Prompt
                </label>
                <textarea
                  rows={2}
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E4E5E8] text-xs text-[#17181C] bg-[#FAFAFA] resize-none focus:outline-none focus:border-[#141C2E]"
                />
              </div>
            </div>
          )}

          {/* Active User Prompt Bubble */}
          <div className="flex justify-end">
            <div className="max-w-2xl rounded-2xl bg-[#141C2E] text-white px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs">
              {activePrompt}
            </div>
          </div>

          {/* D. Multi-Model Response Comparison Grid */}
          <div className={`grid ${gridColsClass} gap-4`}>
            {selectedModels.map((model) => {
              const responseText = buildModelResponse(model, activePrompt, temperature);
              const isRegen = regeneratingId === model.id;
              return (
                <div
                  key={model.id}
                  className="bg-white rounded-xl border border-[#E8E9EC] p-4 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0F1F3]">
                      <div className="flex items-center gap-2 min-w-0">
                        <ProviderBadge provider={model.provider} logo={model.logo} />
                        <span className="text-xs font-semibold text-[#17181C] truncate">
                          {model.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-[#6B7280]">
                        <span className="text-emerald-600 font-sans font-medium">
                          {isRegen ? "Generating..." : "Complete"}
                        </span>
                        <span>·</span>
                        <span>{model.latencyLabel}</span>
                      </div>
                    </div>

                    <div className="text-xs text-[#374151] leading-relaxed whitespace-pre-line">
                      {isRegen ? "Regenerating response..." : responseText}
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#F0F1F3] flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(model.id, responseText)}
                      className="px-2.5 py-1 rounded-md border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-[11px] font-medium text-[#565C66] hover:text-[#17181C] cursor-pointer inline-flex items-center gap-1"
                    >
                      {copiedModelId === model.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRegenerate(model.id)}
                      className="px-2.5 py-1 rounded-md border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-[11px] font-medium text-[#565C66] hover:text-[#17181C] cursor-pointer inline-flex items-center gap-1"
                    >
                      <RotateCcw className={`w-3 h-3 ${isRegen ? "animate-spin" : ""}`} />
                      <span>Regenerate</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* C. Prompt Composer */}
          <div className="bg-white rounded-xl border border-[#E4E5E8] p-3 shadow-2xs space-y-2.5">
            <textarea
              rows={2}
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask anything to compare responses across selected models..."
              className="w-full px-2 py-1 text-xs sm:text-sm text-[#17181C] placeholder:text-[#9AA0A8] bg-transparent resize-none focus:outline-none"
            />
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#F0F1F3]">
              <div className="flex items-center gap-3 text-[11px] text-[#8A9099]">
                <span className="font-mono">{promptInput.length} chars</span>
                <span className="hidden sm:inline">Enter to send · Shift+Enter for newline</span>
              </div>

              <div className="flex items-center gap-2">
                {promptInput && (
                  <button
                    type="button"
                    onClick={() => setPromptInput("")}
                    className="h-[32px] px-2.5 rounded-lg border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-xs font-medium text-[#6B7280] hover:text-[#17181C] cursor-pointer inline-flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!promptInput.trim()}
                  className="h-[32px] px-3.5 rounded-lg bg-[#141C2E] hover:bg-black text-white text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5 disabled:opacity-40"
                >
                  <span>Send</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
