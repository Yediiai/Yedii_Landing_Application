"use client";

import React, { useState, useRef } from "react";
import {
  MessageSquare,
  Database,
  Send,
  Mic,
  ArrowUp,
  Search,
  Lightbulb,
  Loader2,
  Check,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  Settings,
  GitCompare,
  User,
  PanelLeft
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "agent";
  text?: string;
  isThinking?: boolean;
  searchesCount?: number;
  thinkingSeconds?: number;
}

export function PlaygroundPreview() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "user",
      text: "How do I use the Nidan AI face scan?",
    },
    {
      id: "msg-2",
      sender: "agent",
      searchesCount: 2,
      thinkingSeconds: 6,
      text: `Here's how to get started with the Nidan AI face scan — it takes just a few simple steps:

Step 1 – Sign Up
• Register to receive your unique username and password in your email inbox.
• Use these to log in securely to the web or mobile app and begin.

Step 2 – Face Scan
• Create your profile with basic details like age, height, and weight.
• Remove spectacles or accessories such as caps before scanning.
• Make sure you have ambient light and preferably a plain background.
• Follow the on-screen instructions and stay still for about 60 seconds (1 minute).`,
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeModel, setActiveModel] = useState("Deepseek V4.1 Flash");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(1);

  const modelOptions = [
    "Deepseek V4.1 Flash",
    "Claude 3.5 Sonnet",
    "GPT-4o",
    "Llama 3.3 70B",
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isProcessing) return;

    const userMsgId = `user-${idCounterRef.current++}`;
    const agentMsgId = `agent-${idCounterRef.current++}`;

    // 1. Add user message
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: "user", text },
      { id: agentMsgId, sender: "agent", isThinking: true, searchesCount: 2, thinkingSeconds: 2 },
    ];
    setMessages(newMessages);
    setInputText("");
    setIsProcessing(true);

    // 2. Simulate progressive thinking step
    setTimeout(() => {
      let responseText = "";
      const lower = text.toLowerCase();

      if (lower.includes("whatsapp") || lower.includes("slack")) {
        responseText = `Yedii supports 1-click omnichannel deployment:
• WhatsApp Business API: Connect via Meta Cloud API webhook with 24/7 automated routing.
• Slack: Install our verified Slack App to answer inquiries directly inside channels or direct messages.
• Web Embed: A responsive script tag you can paste into any Next.js, HTML, or WordPress site.`;
      } else if (lower.includes("security") || lower.includes("data") || lower.includes("privacy")) {
        responseText = `Yedii operates on an enterprise Zero Data Retention (ZDR) policy:
• Data Isolation: Vectors and documents are stored in customer-specific tenant schemas.
• Compliance: Fully verified for SOC2 Type II, HIPAA, and GDPR.
• Training: Your prompts and files are strictly excluded from foundation model training.`;
      } else if (lower.includes("pricing") || lower.includes("cost") || lower.includes("plan")) {
        responseText = `Our flexible pricing tiers include:
• Starter ($31/mo billed yearly): 2 AI agents, 4,000 credits, and web widget.
• Growth Pro ($79/mo billed yearly): 8 agents, 25,000 credits, WhatsApp, Slack & Shared Team Inbox.
• Scale & Enterprise: Dedicated VPC clusters, custom volume, and SLA guarantee.`;
      } else {
        responseText = `I have searched our active knowledge sources and retrieved the relevant context:
• Knowledge Base: Verified across current documentation chunks.
• Accuracy Score: 98.6% confidence rating.
• Next Steps: You can test further scenarios or export this conversation directly to your team inbox.`;
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === agentMsgId
            ? {
                ...m,
                isThinking: false,
                thinkingSeconds: 4,
                text: responseText,
              }
            : m
        )
      );
      setIsProcessing(false);
    }, 1800);
  };

  return (
    <div className="w-full bg-[#FAFAFA] rounded-2xl border border-[#E8E9EC] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[560px]">
      {/* 1. Left Sidebar (Matching app.yedii.com/playground sidebar) */}
      <div className="w-full md:w-[190px] bg-white border-b md:border-b-0 md:border-r border-[#E8E9EC] p-3.5 flex flex-col justify-between shrink-0">
        <div className="space-y-4">
          {/* Top Brand with Back Arrow */}
          <div className="flex items-center gap-2 px-1">
            <button
              type="button"
              className="w-6 h-6 rounded-[6px] border border-[#E8E9EC] flex items-center justify-center text-[#565C66] hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-[16px] text-[#141C2E]">Yedii</span>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] bg-[#F4F5F7] text-[13px] font-semibold text-[#141C2E] text-left transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#141C2E]" />
              <span>Playground</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium text-[#6B7280] hover:text-[#141C2E] hover:bg-zinc-50 text-left transition-colors"
            >
              <Database className="w-4 h-4 text-[#8A9099]" />
              <span>Data sources</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium text-[#6B7280] hover:text-[#141C2E] hover:bg-zinc-50 text-left transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#8A9099]" />
              <span>Builder</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium text-[#6B7280] hover:text-[#141C2E] hover:bg-zinc-50 text-left transition-colors"
            >
              <Send className="w-4 h-4 text-[#8A9099]" />
              <span>Deploy</span>
            </button>
          </nav>
        </div>

        {/* Bottom Back to Home */}
        <div className="pt-3 border-t border-[#F0F1F3]">
          <span className="text-[12px] font-medium text-[#6B7280] flex items-center gap-1.5 cursor-pointer hover:text-[#141C2E]">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to home</span>
          </span>
        </div>
      </div>

      {/* 2. Main Canvas */}
      <div className="flex-1 flex flex-col justify-between bg-white">
        {/* Top Header Bar */}
        <div className="h-[48px] px-5 border-b border-[#E8E9EC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PanelLeft className="w-4 h-4 text-[#8A9099] hidden sm:block" />
            <h3 className="text-[14px] font-semibold text-[#141C2E]">Playground</h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#141C2E] text-white flex items-center justify-center text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Chat Stream / Message Feed */}
        <div className="flex-1 p-5 sm:p-7 overflow-y-auto space-y-6 max-h-[380px]">
          {messages.map((msg) => (
            <div key={msg.id} className="w-full">
              {msg.sender === "user" ? (
                /* User Message Row */
                <div className="flex items-start justify-end gap-2.5">
                  <div className="max-w-[85%] rounded-[14px] bg-[#141C2E] text-white px-4 py-2.5 text-[13.5px] leading-relaxed shadow-2xs">
                    {msg.text}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#565C66] shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>
              ) : (
                /* Agent Message Row */
                <div className="flex items-start gap-3">
                  {/* Agent Avatar */}
                  <div className="w-7 h-7 rounded-[8px] bg-[#141C2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 space-y-3 max-w-[88%]">
                    {/* Stepper Timeline (Ran searches -> Thinking -> Working) */}
                    <div className="space-y-1.5 py-1 text-xs">
                      {/* Step 1: Ran searches */}
                      <div className="flex items-center gap-2 text-[#3A4049] font-medium">
                        <Search className="w-3.5 h-3.5 text-[#6B7280]" />
                        <span>Ran {msg.searchesCount || 2} searches</span>
                      </div>

                      {/* Vertical line */}
                      <div className="w-px h-2 bg-[#E4E5E8] ml-[7px]" />

                      {/* Step 2: Thinking */}
                      <div className="flex items-center gap-2 text-[#3A4049] font-medium">
                        <Lightbulb className="w-3.5 h-3.5 text-[#6B7280]" />
                        <span>Thinking</span>
                      </div>

                      {/* Vertical line */}
                      <div className="w-px h-2 bg-[#E4E5E8] ml-[7px]" />

                      {/* Step 3: Working for Xs */}
                      <div className="flex items-center gap-2 text-[#3A4049] font-medium">
                        {msg.isThinking ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                            <span className="text-blue-600">Working on response...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Finished in {msg.thinkingSeconds || 4}s</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Formatted Markdown Content */}
                    {!msg.isThinking && msg.text && (
                      <div className="text-[13.5px] text-[#22262E] leading-relaxed whitespace-pre-line pt-1">
                        {msg.text}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Input Area & Model Bar */}
        <div className="p-4 sm:p-5 border-t border-[#F0F1F3] bg-white">
          {/* Quick Prompts Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            <span className="text-[11px] text-[#8A9099] font-medium mr-1">Suggested:</span>
            {[
              "How do I use the Nidan AI face scan?",
              "Can I connect Yedii to WhatsApp & Slack?",
              "What is your enterprise security policy?",
            ].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => handleSendMessage(p)}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F4F5F7] text-[#3A4049] hover:bg-[#E8E9EC] transition-colors cursor-pointer truncate max-w-[240px] sm:max-w-none"
              >
                &quot;{p}&quot;
              </button>
            ))}
          </div>

          {/* Input Box with Mic and Send Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="w-full rounded-[14px] border border-[#E4E5E8] bg-[#FBFBFC] px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xs focus-within:border-[#141C2E] focus-within:bg-white transition-all"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask your agent anything..."
              className="flex-1 text-[13px] text-[#141C2E] placeholder:text-[#8A9099] bg-transparent focus:outline-none"
            />
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#8A9099] hover:text-[#141C2E] transition-colors"
                title="Voice input"
              >
                <Mic className="w-4 h-4" />
              </button>
              <button
                type="submit"
                disabled={!inputText.trim() || isProcessing}
                className="w-7 h-7 rounded-full bg-[#141C2E] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black transition-colors cursor-pointer"
                title="Send"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Model Bar Under Input (Deepseek V4.1 Flash, Settings, Compare) */}
          <div className="flex items-center justify-between mt-2.5 pt-1 text-xs text-[#565C66]">
            {/* Model Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                className="flex items-center gap-1.5 text-[12px] font-medium text-[#141C2E] hover:text-black cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                <span>{activeModel}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8A9099]" />
              </button>

              {isModelDropdownOpen && (
                <div className="absolute left-0 bottom-full mb-1 w-44 rounded-xl bg-white border border-[#E8E9EC] shadow-lg py-1 z-30">
                  {modelOptions.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setActiveModel(m);
                        setIsModelDropdownOpen(false);
                      }}
                      className="w-full px-3 py-1.5 text-left text-xs text-[#141C2E] hover:bg-zinc-50 flex items-center justify-between cursor-pointer"
                    >
                      <span>{m}</span>
                      {activeModel === m && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Tools */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-1 text-[12px] text-[#6B7280] hover:text-[#141C2E] transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Settings</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1 text-[12px] text-[#6B7280] hover:text-[#141C2E] transition-colors"
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Compare</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
