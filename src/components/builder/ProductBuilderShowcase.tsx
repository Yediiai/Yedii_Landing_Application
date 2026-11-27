"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  SquarePen,
  History,
  Maximize2,
  X,
  Paperclip,
  Mic,
  ArrowUp,
  MessageSquare,
  RotateCcw,
  Check,
  Copy,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

type SectionKey =
  | "palette"
  | "header"
  | "launcher"
  | "typography"
  | "style"
  | "startScreen"
  | "composer"
  | "footer"
  | "messageActions"
  | "reset";

const DEFAULT_QUESTIONS = [
  "What is the Nidan AI-Powered Face Scan?",
  "How does Nidan use face scans to revolutionize triage?",
  "Where can I learn more about Nidan?",
];

const ACCENT_COLORS = ["#141C2E", "#2563EB", "#0F766E", "#4F46E5"] as const;

export function ProductBuilderShowcase() {
  // Builder configuration state (matches BuilderConfig in Yedii_Application)
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  const [accentColor, setAccentColor] = useState<string>("#141C2E");
  const [headerTitle, setHeaderTitle] = useState("https://nidan.ai/");
  const [showHeaderActions, setShowHeaderActions] = useState(true);
  const [showLauncher, setShowLauncher] = useState(true);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
  const [radius, setRadius] = useState<"sharp" | "rounded" | "pill">("rounded");
  const [greeting, setGreeting] = useState("Hi there! 👋");
  const [subtitle, setSubtitle] = useState(
    "I'm here to help you with any questions or issues. Whether you need assistance, have a question about a product, or just want to learn more, I'm happy to help."
  );
  const [promptLead, setPromptLead] = useState("What can I help you with today?");
  const [placeholder, setPlaceholder] = useState("Ask a question...");
  const [showAttachments, setShowAttachments] = useState(true);
  const [showMic, setShowMic] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [footerText, setFooterText] = useState("Powered by Yedii");
  const [showMessageActions, setShowMessageActions] = useState(true);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  // Accordion state (matches BuilderSidebar.tsx)
  const [openSection, setOpenSection] = useState<SectionKey | null>("palette");

  // Preview interaction state
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  const radiusPx = radius === "sharp" ? "6px" : radius === "pill" ? "20px" : "14px";
  const isDark = colorScheme === "dark";

  const markDirty = () => {
    setHasUnsavedChanges(true);
    setSavedNotice(false);
  };

  const handleToggle = (key: SectionKey) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const handleSend = (text?: string) => {
    const msg = (text ?? inputText).trim();
    if (!msg) return;
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: msg },
      {
        sender: "bot",
        text: `Here is a grounded answer based on ${headerTitle} knowledge sources. Everything in this preview reflects your live Builder configuration.`,
      },
    ]);
    if (!text) setInputText("");
  };

  const handleResetAll = () => {
    setColorScheme("light");
    setAccentColor("#141C2E");
    setHeaderTitle("https://nidan.ai/");
    setShowHeaderActions(true);
    setShowLauncher(true);
    setFontFamily("Inter");
    setFontSize("md");
    setRadius("rounded");
    setGreeting("Hi there! 👋");
    setSubtitle(
      "I'm here to help you with any questions or issues. Whether you need assistance, have a question about a product, or just want to learn more, I'm happy to help."
    );
    setPromptLead("What can I help you with today?");
    setPlaceholder("Ask a question...");
    setShowAttachments(true);
    setShowMic(true);
    setShowFooter(true);
    setFooterText("Powered by Yedii");
    setShowMessageActions(true);
    setMessages([]);
    setIsChatOpen(true);
    setHasUnsavedChanges(false);
  };

  const handleSave = () => {
    setHasUnsavedChanges(false);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 1800);
  };

  return (
    <div className="product-showcase-scope w-full rounded-2xl border border-[#EAEAEC] bg-white shadow-sm overflow-hidden text-[#17181C]">
      {/* Top Builder Header Bar */}
      <div className="bg-white border-b border-[#EAEAEC] px-5 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-semibold text-[#17181C]">Builder</span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F4F5F7] border border-[#E4E5E8] text-[#6B7280]">
            {hasUnsavedChanges ? "Unsaved changes" : savedNotice ? "Saved" : "Live config"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {hasUnsavedChanges && (
            <button
              type="button"
              onClick={handleResetAll}
              className="h-[30px] px-3 rounded-lg border border-[#E4E5E8] bg-white hover:bg-[#F9FAFB] text-xs font-medium text-[#565C66] cursor-pointer"
            >
              Discard
            </button>
          )}
          <button
            type="button"
            onClick={handleSave}
            className="h-[30px] px-3.5 rounded-lg bg-[#141C2E] hover:bg-black text-white text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{savedNotice ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Main Split: Center Preview Canvas + Right BuilderSidebar */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Center Canvas (Matches BuilderPreview.tsx) */}
        <div className="flex-1 min-w-0 bg-[#F9FAFB] p-6 sm:p-10 relative flex items-center justify-center">
          {/* Chat Widget Card */}
          {isChatOpen ? (
            <div
              className={`w-full max-w-[380px] border shadow-[0_12px_36px_rgba(16,24,40,0.08)] overflow-hidden flex flex-col transition-colors ${
                isDark
                  ? "bg-[#111318] border-zinc-800 text-zinc-100"
                  : "bg-white border-[#E8E9EC] text-[#17181C]"
              }`}
              style={{
                borderRadius: radiusPx,
                fontFamily: fontFamily === "System UI" ? "system-ui, sans-serif" : undefined,
              }}
            >
              {/* PreviewHeader */}
              <div
                className={`px-4 py-3.5 border-b flex items-center justify-between gap-2 ${
                  isDark ? "border-zinc-800" : "border-[#F0F1F3]"
                }`}
              >
                <span className="text-[13.5px] font-semibold truncate">{headerTitle}</span>
                {showHeaderActions && (
                  <div className="flex items-center gap-2 text-[#6B7280] shrink-0">
                    <button
                      type="button"
                      onClick={() => setMessages([])}
                      aria-label="New chat"
                      className="hover:text-[#17181C] cursor-pointer"
                    >
                      <SquarePen className="w-3.5 h-3.5" />
                    </button>
                    <History className="w-3.5 h-3.5" />
                    <Maximize2 className="w-3.5 h-3.5" />
                    <button
                      type="button"
                      onClick={() => setIsChatOpen(false)}
                      aria-label="Close widget"
                      className="hover:text-[#17181C] cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Body: Start Screen OR Messages */}
              <div className="p-4 sm:p-5 space-y-4 h-[350px] overflow-y-auto">
                {messages.length === 0 ? (
                  <>
                    <div className="space-y-2">
                      <h3
                        className={`font-semibold tracking-tight ${
                          fontSize === "sm" ? "text-base" : fontSize === "lg" ? "text-xl" : "text-lg"
                        }`}
                      >
                        {greeting}
                      </h3>
                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-zinc-400" : "text-[#6B7280]"
                        } ${fontSize === "sm" ? "text-xs" : "text-[13px]"}`}
                      >
                        {subtitle}
                      </p>
                      <p
                        className={`font-medium pt-0.5 ${
                          fontSize === "sm" ? "text-xs" : "text-[13px]"
                        }`}
                      >
                        {promptLead}
                      </p>
                    </div>

                    {/* Quick Questions */}
                    <div className="space-y-2 pt-1">
                      {DEFAULT_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => handleSend(q)}
                          className={`w-full px-3.5 py-2.5 border text-left text-[12.5px] flex items-center gap-2 transition-colors cursor-pointer ${
                            isDark
                              ? "bg-zinc-900 border-zinc-800 text-zinc-200 hover:border-zinc-700"
                              : "bg-white border-[#E4E5E8] text-[#17181C] hover:bg-[#F9FAFB]"
                          }`}
                          style={{ borderRadius: radiusPx }}
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#8A9099] shrink-0" />
                          <span className="truncate">{q}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    {messages.map((m, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className="max-w-[85%] px-3 py-2 text-xs leading-relaxed"
                            style={{
                              borderRadius: radiusPx,
                              backgroundColor:
                                m.sender === "user"
                                  ? accentColor
                                  : isDark
                                  ? "#1F2430"
                                  : "#F4F5F7",
                              color:
                                m.sender === "user" ? "#FFFFFF" : isDark ? "#F4F4F5" : "#17181C",
                            }}
                          >
                            {m.text}
                          </div>
                        </div>
                        {m.sender === "bot" && showMessageActions && (
                          <div className="flex items-center gap-2 text-[#9AA0A8] pl-1">
                            <Copy className="w-3 h-3" />
                            <ThumbsUp className="w-3 h-3" />
                            <ThumbsDown className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PreviewComposer */}
              <div className="px-4 pb-3">
                <div
                  className={`border p-2.5 space-y-2 ${
                    isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-[#E4E5E8]"
                  }`}
                  style={{ borderRadius: radiusPx }}
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                    placeholder={placeholder}
                    className="w-full text-xs bg-transparent focus:outline-none placeholder:text-[#9AA0A8] px-1"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2.5 text-[#8A9099] px-1">
                      {showAttachments && <Paperclip className="w-3.5 h-3.5" />}
                      {showMic && <Mic className="w-3.5 h-3.5" />}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSend()}
                      aria-label="Send message"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white cursor-pointer transition-opacity"
                      style={{
                        backgroundColor: inputText.trim() ? accentColor : "#E5E7EB",
                        color: inputText.trim() ? "#FFFFFF" : "#9CA3AF",
                      }}
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              {showFooter && (
                <div className="pb-3 text-center text-[11px] text-[#8A9099]">
                  {footerText}
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs text-[#6B7280]">
              Click the launcher bubble to reopen the chat widget.
            </div>
          )}

          {/* Floating Launcher Bubble (Matches PreviewLauncherWidget.tsx) */}
          {showLauncher && (
            <button
              type="button"
              onClick={() => setIsChatOpen((prev) => !prev)}
              aria-label="Toggle chat launcher"
              className="absolute bottom-5 right-5 w-11 h-11 rounded-full text-white shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
              style={{ backgroundColor: accentColor }}
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Right Accordion Sidebar (Matches BuilderSidebar.tsx) */}
        <aside className="w-full lg:w-[340px] bg-white border-t lg:border-t-0 lg:border-l border-[#EAEAEC] divide-y divide-[#F0F1F3] text-[13px] shrink-0">
          {/* 1. Palette */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("palette")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Palette</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "palette" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "palette" && (
              <div className="px-5 pb-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {(["light", "dark"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        setColorScheme(mode);
                        markDirty();
                      }}
                      className={`py-1.5 rounded-lg border text-xs font-medium capitalize cursor-pointer ${
                        colorScheme === mode
                          ? "bg-[#141C2E] border-[#141C2E] text-white"
                          : "bg-white border-[#E4E5E8] text-[#565C66]"
                      }`}
                    >
                      {mode} mode
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#565C66]">Accent color</span>
                  <div className="flex items-center gap-1.5">
                    {ACCENT_COLORS.map((hex) => (
                      <button
                        key={hex}
                        type="button"
                        onClick={() => {
                          setAccentColor(hex);
                          markDirty();
                        }}
                        aria-label={`Color ${hex}`}
                        className={`w-5 h-5 rounded-full cursor-pointer border ${
                          accentColor === hex ? "ring-2 ring-offset-1 ring-[#141C2E]" : "border-zinc-200"
                        }`}
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Header */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("header")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Header</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "header" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "header" && (
              <div className="px-5 pb-4 space-y-2.5">
                <input
                  type="text"
                  value={headerTitle}
                  onChange={(e) => {
                    setHeaderTitle(e.target.value);
                    markDirty();
                  }}
                  className="w-full h-[34px] px-3 rounded-lg border border-[#E4E5E8] text-xs"
                />
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Show header actions</span>
                  <input
                    type="checkbox"
                    checked={showHeaderActions}
                    onChange={(e) => {
                      setShowHeaderActions(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* 3. Launcher */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("launcher")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Launcher</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "launcher" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "launcher" && (
              <div className="px-5 pb-4">
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Show floating launcher</span>
                  <input
                    type="checkbox"
                    checked={showLauncher}
                    onChange={(e) => {
                      setShowLauncher(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* 4. Typography */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("typography")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Typography</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "typography" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "typography" && (
              <div className="px-5 pb-4 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-[#565C66]">Font family</span>
                  <select
                    value={fontFamily}
                    onChange={(e) => {
                      setFontFamily(e.target.value);
                      markDirty();
                    }}
                    className="h-[30px] px-2 rounded-md border border-[#E4E5E8] text-xs"
                  >
                    <option>Inter</option>
                    <option>System UI</option>
                  </select>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-[#565C66]">Font size</span>
                  <select
                    value={fontSize}
                    onChange={(e) => {
                      setFontSize(e.target.value as "sm" | "md" | "lg");
                      markDirty();
                    }}
                    className="h-[30px] px-2 rounded-md border border-[#E4E5E8] text-xs"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 5. Style */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("style")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Style</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "style" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "style" && (
              <div className="px-5 pb-4 flex items-center justify-between gap-2">
                <span className="text-xs text-[#565C66]">Corner radius</span>
                <div className="flex gap-1">
                  {(["sharp", "rounded", "pill"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => {
                        setRadius(r);
                        markDirty();
                      }}
                      className={`px-2 py-1 rounded-md text-[11px] capitalize cursor-pointer border ${
                        radius === r
                          ? "bg-[#141C2E] border-[#141C2E] text-white"
                          : "bg-white border-[#E4E5E8] text-[#565C66]"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 6. Start screen */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("startScreen")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Start screen</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "startScreen" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "startScreen" && (
              <div className="px-5 pb-4 space-y-2">
                <input
                  type="text"
                  value={greeting}
                  onChange={(e) => {
                    setGreeting(e.target.value);
                    markDirty();
                  }}
                  className="w-full h-[32px] px-2.5 rounded-lg border border-[#E4E5E8] text-xs"
                />
                <textarea
                  rows={2}
                  value={subtitle}
                  onChange={(e) => {
                    setSubtitle(e.target.value);
                    markDirty();
                  }}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#E4E5E8] text-xs resize-none"
                />
              </div>
            )}
          </div>

          {/* 7. Composer */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("composer")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Composer</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "composer" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "composer" && (
              <div className="px-5 pb-4 space-y-2">
                <input
                  type="text"
                  value={placeholder}
                  onChange={(e) => {
                    setPlaceholder(e.target.value);
                    markDirty();
                  }}
                  className="w-full h-[32px] px-2.5 rounded-lg border border-[#E4E5E8] text-xs"
                />
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Allow attachments</span>
                  <input
                    type="checkbox"
                    checked={showAttachments}
                    onChange={(e) => {
                      setShowAttachments(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Voice input button</span>
                  <input
                    type="checkbox"
                    checked={showMic}
                    onChange={(e) => {
                      setShowMic(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* 8. Footer */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("footer")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Footer</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "footer" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "footer" && (
              <div className="px-5 pb-4 space-y-2">
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Show footer</span>
                  <input
                    type="checkbox"
                    checked={showFooter}
                    onChange={(e) => {
                      setShowFooter(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
                <input
                  type="text"
                  value={footerText}
                  onChange={(e) => {
                    setFooterText(e.target.value);
                    markDirty();
                  }}
                  className="w-full h-[32px] px-2.5 rounded-lg border border-[#E4E5E8] text-xs"
                />
              </div>
            )}
          </div>

          {/* 9. Message actions */}
          <div>
            <button
              type="button"
              onClick={() => handleToggle("messageActions")}
              className="w-full px-5 py-3.5 flex items-center justify-between font-medium text-[#17181C] hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span>Message actions</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8A9099] transition-transform ${
                  openSection === "messageActions" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "messageActions" && (
              <div className="px-5 pb-4">
                <label className="flex items-center justify-between text-xs text-[#565C66] cursor-pointer">
                  <span>Copy &amp; feedback icons</span>
                  <input
                    type="checkbox"
                    checked={showMessageActions}
                    onChange={(e) => {
                      setShowMessageActions(e.target.checked);
                      markDirty();
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* 10. Reset */}
          <div className="px-5 py-4 space-y-2.5 bg-[#FAFAFA]/60">
            <div className="text-xs font-medium text-[#17181C]">Reset</div>
            <div className="text-[11.5px] text-[#6B7280]">Reset all settings to default</div>
            <button
              type="button"
              onClick={handleResetAll}
              className="w-full h-[34px] rounded-lg border border-[#E4E5E8] bg-white hover:bg-[#F4F5F7] text-xs font-medium text-[#17181C] cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
