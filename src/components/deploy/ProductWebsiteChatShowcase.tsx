"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  Check,
  Copy,
  Send,
  Globe,
  Code2,
  ExternalLink,
  Sun,
  Moon,
  MessageSquare,
} from "lucide-react";

interface ChatbotItem {
  id: string;
  name: string;
  status: "Live" | "Draft";
  workspace: string;
  domain: string;
  welcome: string;
}

const INITIAL_CHATBOTS: ChatbotItem[] = [
  {
    id: "yedii_pub_support_01",
    name: "Website Support",
    status: "Live",
    workspace: "Production Workspace",
    domain: "yedii.com",
    welcome: "Hi there! How can Yedii help you today?",
  },
  {
    id: "yedii_pub_sales_02",
    name: "Sales & Pricing Guide",
    status: "Live",
    workspace: "Growth Team",
    domain: "yedii.com/pricing",
    welcome: "Ask me anything about Yedii plans, models, or enterprise limits.",
  },
  {
    id: "yedii_pub_docs_03",
    name: "Developer Docs Helper",
    status: "Draft",
    workspace: "Engineering",
    domain: "docs.yedii.com",
    welcome: "Need help with API keys, webhooks, or widget installation?",
  },
];

const QUICK_PROMPTS = [
  "How do I install the widget?",
  "Which AI models are supported?",
  "How does RAG grounding work?",
];

export function ProductWebsiteChatShowcase() {
  const [chatbots] = useState<ChatbotItem[]>(INITIAL_CHATBOTS);
  const [selectedBotId, setSelectedBotId] = useState(INITIAL_CHATBOTS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Live" | "Draft">("All");

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState(INITIAL_CHATBOTS[0].welcome);
  const [brandTitle, setBrandTitle] = useState("Yedii Support");
  const [language, setLanguage] = useState("English (US)");
  const [installTab, setInstallTab] = useState<"js" | "hosted" | "iframe">("js");
  const [copiedCode, setCopiedCode] = useState(false);

  const [widgetInput, setWidgetInput] = useState("");
  const [widgetMessages, setWidgetMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([{ sender: "bot", text: INITIAL_CHATBOTS[0].welcome }]);

  const selectedBot =
    chatbots.find((b) => b.id === selectedBotId) ?? chatbots[0];

  const filteredBots = chatbots.filter((b) => {
    if (statusFilter !== "All" && b.status !== statusFilter) return false;
    if (!searchQuery.trim()) return true;
    return b.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSelectBot = (bot: ChatbotItem) => {
    setSelectedBotId(bot.id);
    setWelcomeMsg(bot.welcome);
    setWidgetMessages([{ sender: "bot", text: bot.welcome }]);
  };

  const handleSendWidgetMsg = (text?: string) => {
    const msg = (text ?? widgetInput).trim();
    if (!msg) return;
    setWidgetMessages((prev) => [
      ...prev,
      { sender: "user", text: msg },
      {
        sender: "bot",
        text: `Thanks for asking! Based on ${selectedBot.domain} documentation, you can configure and embed ${selectedBot.name} in under 2 minutes.`,
      },
    ]);
    if (!text) setWidgetInput("");
  };

  const snippet =
    installTab === "js"
      ? `<script>\n  (function () {\n    const script = document.createElement("script");\n    script.src = "https://chat.yedii.com/widget.js";\n    script.async = true;\n    script.onload = function () {\n      window.Yedii.init({\n        agentId: "${selectedBot.id}"\n      });\n    };\n    document.head.appendChild(script);\n  })();\n</script>`
      : installTab === "hosted"
      ? `https://chat.yedii.com/${selectedBot.id}`
      : `<iframe\n  src="https://chat.yedii.com/embed/${selectedBot.id}"\n  width="100%"\n  height="600"\n  frameborder="0"\n  allow="clipboard-write"\n  title="Yedii AI Chatbot"\n></iframe>`;

  const handleCopySnippet = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
    }
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1600);
  };

  return (
    <div className="product-showcase-scope w-full rounded-2xl border border-[#E8E9EC] bg-[#F9FAFB] shadow-sm overflow-hidden text-[#17181C]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#EAEAEC] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <MessageSquare className="w-4 h-4 text-[#141C2E]" />
          <span className="text-sm font-semibold text-[#141C2E]">Website Chat &amp; Deploy</span>
          <span className="text-xs text-[#6B7280] hidden sm:inline">
            · {selectedBot.workspace}
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleSelectBot(chatbots[0])}
          className="h-[34px] px-3.5 rounded-lg bg-[#141C2E] hover:bg-black text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create Chatbot</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left & Center: Chatbot List + Configuration + Deployment */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#EAEAEC] p-4 sm:p-6 space-y-6 bg-white">
          {/* A. Chatbot Management */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Chatbots ({filteredBots.length})
              </span>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-[#8A9099] absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search chatbots..."
                    className="h-[32px] pl-8 pr-2.5 rounded-lg border border-[#E4E5E8] text-xs bg-white focus:outline-none focus:border-[#141C2E]"
                  />
                </div>
                {(["All", "Live", "Draft"] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatusFilter(st)}
                    className={`h-[32px] px-2.5 rounded-lg text-xs font-medium cursor-pointer ${
                      statusFilter === st
                        ? "bg-[#141C2E] text-white"
                        : "bg-[#F4F5F7] text-[#565C66] hover:text-[#141C2E]"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {filteredBots.map((bot) => {
                const active = bot.id === selectedBot.id;
                return (
                  <button
                    key={bot.id}
                    type="button"
                    onClick={() => handleSelectBot(bot)}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      active
                        ? "bg-[#141C2E] border-[#141C2E] text-white"
                        : "bg-[#FAFAFA] border-[#E8E9EC] text-[#17181C] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-xs font-semibold truncate">{bot.name}</span>
                      <span
                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${
                          bot.status === "Live"
                            ? active
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-[#EAF8EE] text-[#15803D]"
                            : active
                            ? "bg-white/10 text-zinc-300"
                            : "bg-[#F0F1F3] text-[#6B7280]"
                        }`}
                      >
                        {bot.status}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-1 truncate ${
                        active ? "text-zinc-300" : "text-[#6B7280]"
                      }`}
                    >
                      {bot.workspace}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* B. Chatbot Configuration */}
          <div className="pt-5 border-t border-[#F0F1F3] space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              Appearance &amp; Configuration
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#17181C] block mb-1">
                  Display Title
                </label>
                <input
                  type="text"
                  value={brandTitle}
                  onChange={(e) => setBrandTitle(e.target.value)}
                  className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs text-[#17181C] bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#17181C] block mb-1">
                  Language &amp; Region
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs text-[#17181C] bg-white"
                >
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish (ES)</option>
                  <option>German (DE)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#17181C] block mb-1">
                Welcome Message
              </label>
              <input
                type="text"
                value={welcomeMsg}
                onChange={(e) => {
                  setWelcomeMsg(e.target.value);
                  setWidgetMessages([{ sender: "bot", text: e.target.value }]);
                }}
                className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs text-[#17181C] bg-white"
              />
            </div>

            {/* Light / Dark Theme Selector (Matches TabStyle.tsx) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDarkTheme(false)}
                className={`flex-1 p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer ${
                  !isDarkTheme
                    ? "border-[#141C2E] bg-[#F4F5F7] text-[#141C2E]"
                    : "border-[#E8E9EC] bg-white text-[#6B7280]"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setIsDarkTheme(true)}
                className={`flex-1 p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer ${
                  isDarkTheme
                    ? "border-[#141C2E] bg-[#141C2E] text-white"
                    : "border-[#E8E9EC] bg-white text-[#6B7280]"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark Mode</span>
              </button>
            </div>
          </div>

          {/* D. Website Deployment Methods (Matches DeployInstallStep.tsx) */}
          <div className="pt-5 border-t border-[#F0F1F3] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Website Deployment
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: "js", label: "JavaScript Embed", Icon: Code2 },
                  { id: "hosted", label: "Hosted Chat Page", Icon: ExternalLink },
                  { id: "iframe", label: "Inline Embed / iframe", Icon: Globe },
                ].map((tab) => {
                  const Icon = tab.Icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setInstallTab(tab.id as "js" | "hosted" | "iframe")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium inline-flex items-center gap-1 cursor-pointer ${
                        installTab === tab.id
                          ? "bg-[#141C2E] text-white"
                          : "bg-[#F4F5F7] text-[#565C66] hover:text-[#141C2E]"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-xl bg-[#0F1117] text-zinc-200 p-4 font-mono text-[11px] leading-relaxed overflow-x-auto">
              <button
                type="button"
                onClick={handleCopySnippet}
                className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[10.5px] font-sans font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? "Copied" : "Copy"}</span>
              </button>
              <pre className="pr-16">{snippet}</pre>
            </div>
          </div>
        </div>

        {/* Right: C. Live Chat Widget Preview */}
        <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col items-center justify-center bg-[#F9FAFB]">
          <div
            className={`w-full max-w-[350px] rounded-2xl border shadow-lg overflow-hidden flex flex-col transition-colors ${
              isDarkTheme
                ? "bg-[#111318] border-zinc-800 text-zinc-100"
                : "bg-white border-[#E4E5E8] text-[#17181C]"
            }`}
          >
            {/* Widget Header */}
            <div
              className={`px-4 py-3.5 border-b flex items-center justify-between ${
                isDarkTheme
                  ? "bg-[#141C2E] border-zinc-800 text-white"
                  : "bg-[#141C2E] border-[#141C2E] text-white"
              }`}
            >
              <div>
                <div className="text-xs font-semibold">{brandTitle || "Yedii Support"}</div>
                <div className="text-[10.5px] text-zinc-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online · {language}</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-300">AI Agent</span>
            </div>

            {/* Conversation */}
            <div className="p-4 space-y-3 h-[250px] overflow-y-auto">
              {widgetMessages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-[#141C2E] text-white"
                        : isDarkTheme
                        ? "bg-zinc-800/90 text-zinc-200"
                        : "bg-[#F4F5F7] text-[#17181C]"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp}
                  type="button"
                  onClick={() => handleSendWidgetMsg(qp)}
                  className={`px-2.5 py-1 rounded-full text-[10.5px] font-medium border cursor-pointer transition-colors ${
                    isDarkTheme
                      ? "border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white"
                      : "border-[#E4E5E8] bg-[#FAFAFA] text-[#565C66] hover:text-[#141C2E]"
                  }`}
                >
                  {qp}
                </button>
              ))}
            </div>

            {/* Widget Input */}
            <div
              className={`p-3 border-t flex items-center gap-2 ${
                isDarkTheme ? "border-zinc-800" : "border-[#EAEAEC]"
              }`}
            >
              <input
                type="text"
                value={widgetInput}
                onChange={(e) => setWidgetInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendWidgetMsg();
                }}
                placeholder="Ask a question..."
                className={`flex-1 h-[34px] px-3 rounded-lg text-xs focus:outline-none ${
                  isDarkTheme
                    ? "bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500"
                    : "bg-[#FAFAFA] border border-[#E4E5E8] text-[#17181C]"
                }`}
              />
              <button
                type="button"
                onClick={() => handleSendWidgetMsg()}
                aria-label="Send message"
                className="h-[34px] w-[34px] rounded-lg bg-[#141C2E] text-white flex items-center justify-center cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
