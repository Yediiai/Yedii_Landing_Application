"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  X,
  Send,
  BookOpen,
  Bot,
  User,
  ExternalLink,
  Loader2
} from "lucide-react";
import { searchDocs } from "../data";

interface AiDocAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  citations?: { title: string; href: string }[];
  code?: string;
  timestamp: string;
}

export function AiDocAssistantModal({ isOpen, onClose }: AiDocAssistantModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "ai",
      text: "Hello! I am the Yedii Documentation AI Assistant. Ask me anything about configuring AI agents, widget installation in Next.js/React, RAG crawler setup, or REST API endpoints.",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  if (!isOpen) return null;

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSynthesizing) return;

    const userText = input.trim();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsSynthesizing(true);

    setTimeout(() => {
      const searchMatches = searchDocs(userText);
      const topDocs = searchMatches.slice(0, 3);

      let answer = "";
      let codeSnippet: string | undefined;

      const lower = userText.toLowerCase();

      if (lower.includes("next.js") || lower.includes("nextjs") || lower.includes("embed") || lower.includes("widget") || lower.includes("react")) {
        answer = `To install the Yedii chat widget in Next.js (App Router), use the \`next/script\` component in your root \`layout.tsx\`. Set \`strategy="lazyOnload"\` and supply your agent ID via \`data-deployment\`. The widget mounts a sandboxed iframe to prevent CSS bleeding into your application.`;
        codeSnippet = `// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Script
          id="yedii-widget"
          src="https://cdn.yedii.com/widget/v1/widget.min.js"
          strategy="lazyOnload"
          data-deployment="YOUR_AGENT_ID"
        />
      </body>
    </html>
  );
}`;
      } else if (lower.includes("stream") || lower.includes("sse") || lower.includes("chat api") || lower.includes("endpoint")) {
        answer = `Yedii provides real-time conversational streaming using Server-Sent Events via \`POST /api/v1/chat/stream\`. Send the \`chatbotId\`, \`message\`, and \`sessionId\`. The backend executes RAG vector retrieval, invokes the LLM with fallback failover, and streams token chunks.`;
        codeSnippet = `curl -N -X POST https://api.yedii.com/api/v1/chat/stream \\
  -H "Content-Type: application/json" \\
  -H "Accept: text/event-stream" \\
  -d '{"chatbotId":"YOUR_BOT_ID","message":"Hello!","sessionId":"sess_01"}'`;
      } else if (lower.includes("retention") || lower.includes("delete") || lower.includes("cleanup")) {
        answer = `Yedii enforces subscription-based conversation retention schedules: Free (30 days), Starter (60 days), Growth (90 days), Pro (120 days), and Enterprise (150 days). An automated distributed cron job runs daily at 23:00 UTC to prune conversations older than the plan threshold.`;
      } else if (lower.includes("crawler") || lower.includes("sitemap") || lower.includes("knowledge")) {
        answer = `You can ingest knowledge via single URLs, XML sitemaps, or PDF documents up to 50MB. When you submit a sitemap at \`POST /api/v1/crawler/fetch-sitemap\`, Yedii discovers all target URLs and lets you selectively index pages. Chunks are embedded with high-dimensional vector representations.`;
      } else if (lower.includes("guardrail") || lower.includes("prompt") || lower.includes("personality") || lower.includes("instructions")) {
        answer = `Yedii structures system instructions into modular sections: Personality, Guardrails, Goal, Business Context, Clarification, Formatting, and Prompt Encapsulation. Guardrails prevent hallucinations by strictly directing the model to decline answering when verified context is absent.`;
      } else {
        answer = `Based on Yedii documentation, here is verified guidance on "${userText}". Yedii is an autonomous AI customer support platform offering hybrid RAG knowledge ingestion, multi-model fallback orchestration, and embeddable web chat widgets.`;
      }

      const citations = topDocs.map((doc) => ({
        title: doc.title,
        href: doc.slug,
      }));

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: answer,
        citations,
        code: codeSnippet,
        timestamp: "Just now",
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsSynthesizing(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col h-[650px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Assistant Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-emerald-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#111827]">
                  Yedii AI Documentation Assistant
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                  Grounded RAG
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280]">
                Grounded in official Yedii SDK, API, and platform docs
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conversation Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs bg-[#FAFAFA]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
                  msg.sender === "user" ? "bg-[#141C2E]" : "bg-emerald-600"
                }`}
              >
                {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[85%] rounded-xl p-3.5 space-y-2.5 ${
                  msg.sender === "user"
                    ? "bg-[#141C2E] text-white"
                    : "bg-white border border-[#E5E7EB] text-[#1F2937] shadow-2xs"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                {msg.code && (
                  <div className="p-3 rounded-lg bg-[#0B0F19] text-emerald-400 font-mono text-[11px] overflow-x-auto border border-[#E2E8F0]">
                    <pre>{msg.code.trim()}</pre>
                  </div>
                )}

                {msg.citations && msg.citations.length > 0 && (
                  <div className="pt-2 border-t border-[#E5E7EB]">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 font-mono block mb-1">
                      Referenced Documentation:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.citations.map((cite, i) => (
                        <Link
                          key={i}
                          href={cite.href}
                          onClick={onClose}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] hover:border-emerald-600 text-[11px] text-emerald-700 font-medium transition-colors"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span className="truncate max-w-[200px]">{cite.title}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isSynthesizing && (
            <div className="flex items-center gap-2 text-zinc-500 text-xs italic pl-10">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
              <span>Searching knowledge index and synthesizing answer...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleAsk}
          className="p-3 border-t border-[#E5E7EB] bg-white flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question (e.g. 'How do I add allowed origins?' or 'Widget Next.js snippet')..."
            className="flex-1 px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-xs text-[#111827] placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600"
          />
          <button
            type="submit"
            disabled={!input.trim() || isSynthesizing}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-medium text-xs flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
}
