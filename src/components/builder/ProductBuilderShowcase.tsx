"use client";

import React, { useState } from "react";
import {
  Palette,
  Sliders,
  Database,
  Play,
  Code2,
  Check,
  Copy,
  Send,
  RotateCcw,
  Sun,
  Moon,
  Globe,
  FileText,
} from "lucide-react";

type WorkspaceTab = "appearance" | "agent" | "knowledge" | "test" | "deploy";

const FONT_OPTIONS = ["Inter", "System UI", "Plus Jakarta Sans"] as const;
const RADIUS_OPTIONS = [
  { id: "sharp", label: "Sharp", px: "4px" },
  { id: "rounded", label: "Rounded", px: "12px" },
  { id: "pill", label: "Soft", px: "18px" },
] as const;

const ACCENT_PRESETS = ["#141C2E", "#2563EB", "#0F766E", "#4F46E5"] as const;

const KNOWLEDGE_SOURCES = [
  { name: "https://docs.yedii.com/sitemap.xml", type: "Website", pages: "42 pages", status: "Ready" },
  { name: "product-handbook-2026.pdf", type: "PDF", pages: "18 pages", status: "Ready" },
  { name: "Support SLA & Refund Guidelines", type: "Text", pages: "Coming soon", status: "Planned" },
  { name: "Notion Help Center Wiki", type: "Notion", pages: "Coming soon", status: "Planned" },
  { name: "Google Docs Onboarding FAQ", type: "Google Docs", pages: "Coming soon", status: "Planned" },
];

export function ProductBuilderShowcase() {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("appearance");

  // Builder appearance state (mirrors BuilderConfig)
  const [isDark, setIsDark] = useState(false);
  const [accentColor, setAccentColor] = useState<string>("#141C2E");
  const [headerTitle, setHeaderTitle] = useState("Yedii Support Agent");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi! I'm your Yedii AI agent. Ask me anything based on our verified knowledge."
  );
  const [fontFamily, setFontFamily] = useState<(typeof FONT_OPTIONS)[number]>("Inter");
  const [radiusId, setRadiusId] = useState<"sharp" | "rounded" | "pill">("rounded");
  const [language, setLanguage] = useState("English (US)");
  const [country, setCountry] = useState("Global");
  const [hasUnsaved, setHasUnsaved] = useState(false);

  // Agent & model config state
  const [agentName, setAgentName] = useState("Customer Support");
  const [agentRole, setAgentRole] = useState("Customer Support");
  const [primaryModel, setPrimaryModel] = useState("GPT-4o (OpenAI)");
  const [systemPrompt, setSystemPrompt] = useState(
    "You are Yedii's customer support agent. Answer concisely using verified documentation and escalate billing disputes to a human specialist."
  );

  // Preview chat state
  const [previewInput, setPreviewInput] = useState("");
  const [previewMsgs, setPreviewMsgs] = useState<{ sender: "bot" | "user"; text: string }[]>([
    {
      sender: "bot",
      text: "Hi! I'm your Yedii AI agent. Ask me anything based on our verified knowledge.",
    },
  ]);

  // Deploy state
  const [deployMethod, setDeployMethod] = useState<"js" | "hosted" | "iframe">("js");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const activeRadius = RADIUS_OPTIONS.find((r) => r.id === radiusId)?.px ?? "12px";

  const deploySnippet =
    deployMethod === "js"
      ? `<script>\n  (function () {\n    const script = document.createElement("script");\n    script.src = "https://chat.yedii.com/widget.js";\n    script.async = true;\n    script.onload = function () {\n      window.Yedii.init({\n        agentId: "yedii_builder_demo_01"\n      });\n    };\n    document.head.appendChild(script);\n  })();\n</script>`
      : deployMethod === "hosted"
      ? `https://chat.yedii.com/yedii_builder_demo_01`
      : `<iframe\n  src="https://chat.yedii.com/embed/yedii_builder_demo_01"\n  width="100%"\n  height="600"\n  frameborder="0"\n  allow="clipboard-write"\n  title="Yedii AI Chatbot"\n></iframe>`;

  const handleSendPreview = (quickText?: string) => {
    const msg = (quickText ?? previewInput).trim();
    if (!msg) return;
    setPreviewMsgs((prev) => [
      ...prev,
      { sender: "user", text: msg },
      {
        sender: "bot",
        text: `[Demo · ${primaryModel}] Based on your indexed docs, ${agentName} responds in ${language} (${country}) using your configured tone.`,
      },
    ]);
    if (!quickText) setPreviewInput("");
  };

  const handleReset = () => {
    setIsDark(false);
    setAccentColor("#141C2E");
    setHeaderTitle("Yedii Support Agent");
    setWelcomeMessage(
      "Hi! I'm your Yedii AI agent. Ask me anything based on our verified knowledge."
    );
    setRadiusId("rounded");
    setHasUnsaved(false);
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(deploySnippet);
    }
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 1600);
  };

  return (
    <div className="product-showcase-scope w-full rounded-2xl border border-[#E8E9EC] bg-[#F9FAFB] shadow-sm overflow-hidden text-[#17181C]">
      {/* Builder Top Header */}
      <div className="bg-white border-b border-[#EAEAEC] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-semibold text-[#141C2E]">Yedii Builder</span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F4F5F7] border border-[#E4E5E8] text-[#6B7280]">
            {hasUnsaved ? "Draft (Unsaved)" : "Published"}
          </span>
          <span className="text-[11px] text-[#8A9099] hidden md:inline">
            · Interactive Demo (Sample Data)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="h-[32px] px-3 rounded-lg border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-xs font-medium text-[#6B7280] hover:text-[#17181C] cursor-pointer inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={() => setHasUnsaved(false)}
            className="h-[32px] px-3.5 rounded-lg bg-[#141C2E] hover:bg-black text-white text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Save &amp; Publish</span>
          </button>
        </div>
      </div>

      {/* Builder Area Tabs */}
      <div className="bg-white border-b border-[#EAEAEC] px-4 sm:px-6 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
        {[
          { id: "appearance", label: "Appearance & Branding", Icon: Palette },
          { id: "agent", label: "Agent & AI Model", Icon: Sliders },
          { id: "knowledge", label: "Knowledge Sources", Icon: Database },
          { id: "test", label: "Test Playground", Icon: Play },
          { id: "deploy", label: "Deploy & Embed", Icon: Code2 },
        ].map((tab) => {
          const Icon = tab.Icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as WorkspaceTab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                active
                  ? "bg-[#141C2E] text-white"
                  : "text-[#6B7280] hover:text-[#141C2E] hover:bg-[#F4F5F7]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split: Left Config Sidebar + Right Live Builder Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Sidebar Controls */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#EAEAEC] bg-white p-5 sm:p-6 space-y-5">
          {activeTab === "appearance" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsDark(false);
                    setHasUnsaved(true);
                  }}
                  className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer ${
                    !isDark
                      ? "border-[#141C2E] bg-[#F4F5F7] text-[#141C2E]"
                      : "border-[#E8E9EC] text-[#6B7280]"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light Theme</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsDark(true);
                    setHasUnsaved(true);
                  }}
                  className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer ${
                    isDark
                      ? "border-[#141C2E] bg-[#141C2E] text-white"
                      : "border-[#E8E9EC] text-[#6B7280]"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark Theme</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-medium text-[#17181C] mb-2">Brand Accent Color</div>
                <div className="flex items-center gap-2.5">
                  {ACCENT_PRESETS.map((hex) => (
                    <button
                      key={hex}
                      type="button"
                      onClick={() => {
                        setAccentColor(hex);
                        setHasUnsaved(true);
                      }}
                      aria-label={`Select color ${hex}`}
                      className={`w-7 h-7 rounded-full cursor-pointer border-2 transition-transform ${
                        accentColor === hex ? "border-[#141C2E] scale-110" : "border-white shadow-xs"
                      }`}
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Header Title
                  </label>
                  <input
                    type="text"
                    value={headerTitle}
                    onChange={(e) => {
                      setHeaderTitle(e.target.value);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Typography
                  </label>
                  <select
                    value={fontFamily}
                    onChange={(e) => {
                      setFontFamily(e.target.value as (typeof FONT_OPTIONS)[number]);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#17181C] block mb-1">
                  Start Screen Welcome Message
                </label>
                <textarea
                  rows={2}
                  value={welcomeMessage}
                  onChange={(e) => {
                    setWelcomeMessage(e.target.value);
                    setPreviewMsgs([{ sender: "bot", text: e.target.value }]);
                    setHasUnsaved(true);
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-[#E0E2E6] text-xs bg-white resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Corner Style
                  </label>
                  <select
                    value={radiusId}
                    onChange={(e) => {
                      setRadiusId(e.target.value as "sharp" | "rounded" | "pill");
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  >
                    {RADIUS_OPTIONS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  >
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>German</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Country / Region
                  </label>
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  >
                    <option>Global</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>European Union</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === "agent" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => {
                      setAgentName(e.target.value);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#17181C] block mb-1">
                    Agent Role
                  </label>
                  <select
                    value={agentRole}
                    onChange={(e) => {
                      setAgentRole(e.target.value);
                      setHasUnsaved(true);
                    }}
                    className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                  >
                    <option>Customer Support</option>
                    <option>Technical Specialist</option>
                    <option>Sales Assistant</option>
                    <option>Internal Knowledge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#17181C] block mb-1">
                  Primary AI Model
                </label>
                <select
                  value={primaryModel}
                  onChange={(e) => {
                    setPrimaryModel(e.target.value);
                    setHasUnsaved(true);
                  }}
                  className="w-full h-[36px] px-3 rounded-lg border border-[#E0E2E6] text-xs bg-white"
                >
                  <option>GPT-4o (OpenAI)</option>
                  <option>Claude 3.7 Sonnet (Anthropic)</option>
                  <option>Gemini 2.5 Pro (Google)</option>
                  <option>DeepSeek Chat (DeepSeek)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-[#17181C] block mb-1">
                  System Prompt Instructions
                </label>
                <textarea
                  rows={4}
                  value={systemPrompt}
                  onChange={(e) => {
                    setSystemPrompt(e.target.value);
                    setHasUnsaved(true);
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-[#E0E2E6] text-xs bg-white resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === "knowledge" && (
            <div className="space-y-3">
              <div className="text-xs font-medium text-[#6B7280]">
                Connected &amp; Supported Knowledge Sources
              </div>
              <div className="space-y-2">
                {KNOWLEDGE_SOURCES.map((src) => (
                  <div
                    key={src.name}
                    className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E9EC] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {src.type === "Website" ? (
                        <Globe className="w-4 h-4 text-[#141C2E] shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-[#141C2E] shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#17181C] truncate">
                          {src.name}
                        </div>
                        <div className="text-[11px] text-[#6B7280]">
                          {src.type} · {src.pages}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[10.5px] font-medium px-2 py-0.5 rounded-md shrink-0 ${
                        src.status === "Ready"
                          ? "bg-[#EAF8EE] text-[#15803D]"
                          : "bg-[#F0F1F3] text-[#6B7280]"
                      }`}
                    >
                      {src.status === "Ready" ? "Trained" : "Coming soon"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "test" && (
            <div className="space-y-4">
              <div className="text-xs text-[#6B7280] leading-relaxed">
                Send a sample prompt to test how <strong>{agentName}</strong> ({primaryModel})
                responds with your live branding and welcome settings on the right.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "How do I reset my API key?",
                  "What is your refund window?",
                  "Can I connect Okta SSO?",
                ].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSendPreview(q)}
                    className="px-3 py-1.5 rounded-lg bg-[#F4F5F7] hover:bg-[#E8E9EC] text-xs font-medium text-[#141C2E] cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "deploy" && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "js", label: "JavaScript Embed" },
                  { id: "hosted", label: "Hosted Chat Page" },
                  { id: "iframe", label: "Inline Embed / iframe" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setDeployMethod(tab.id as "js" | "hosted" | "iframe")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                      deployMethod === tab.id
                        ? "bg-[#141C2E] text-white"
                        : "bg-[#F4F5F7] text-[#565C66]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative rounded-xl bg-[#0F1117] text-zinc-200 p-4 font-mono text-[11px] leading-relaxed overflow-x-auto">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[10.5px] font-sans font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet ? "Copied" : "Copy"}</span>
                </button>
                <pre className="pr-16">{deploySnippet}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Right Live Builder Preview (Mirrors BuilderPreview.tsx) */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex items-center justify-center bg-[#F4F5F7]/70">
          <div
            className={`w-full max-w-[360px] border shadow-lg overflow-hidden flex flex-col transition-colors ${
              isDark
                ? "bg-[#111318] border-zinc-800 text-zinc-100"
                : "bg-white border-[#E4E5E8] text-[#17181C]"
            }`}
            style={{ borderRadius: activeRadius }}
          >
            <div
              className="px-4 py-3.5 text-white flex items-center justify-between"
              style={{ backgroundColor: accentColor }}
            >
              <div>
                <div className="text-xs font-semibold">{headerTitle || "Yedii Support"}</div>
                <div className="text-[10.5px] text-white/80 mt-0.5">
                  {agentRole} · {language}
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/80">Live Preview</span>
            </div>

            <div className="p-4 space-y-3 h-[240px] overflow-y-auto">
              {previewMsgs.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] px-3 py-2 text-xs leading-relaxed"
                    style={{
                      borderRadius: activeRadius,
                      backgroundColor:
                        m.sender === "user"
                          ? accentColor
                          : isDark
                          ? "#1F2430"
                          : "#F4F5F7",
                      color: m.sender === "user" ? "#FFFFFF" : isDark ? "#F4F4F5" : "#17181C",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`p-3 border-t flex items-center gap-2 ${
                isDark ? "border-zinc-800" : "border-[#EAEAEC]"
              }`}
            >
              <input
                type="text"
                value={previewInput}
                onChange={(e) => setPreviewInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendPreview();
                }}
                placeholder="Message your agent..."
                className={`flex-1 h-[34px] px-3 rounded-lg text-xs focus:outline-none ${
                  isDark
                    ? "bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500"
                    : "bg-[#FAFAFA] border border-[#E4E5E8] text-[#17181C]"
                }`}
              />
              <button
                type="button"
                onClick={() => handleSendPreview()}
                aria-label="Send test message"
                className="h-[34px] w-[34px] rounded-lg text-white flex items-center justify-center cursor-pointer shrink-0"
                style={{ backgroundColor: accentColor }}
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
