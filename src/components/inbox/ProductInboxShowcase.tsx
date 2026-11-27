"use client";

import React, { useState } from "react";
import { Search, Send, CheckCircle2, Clock, Sparkles } from "lucide-react";

interface InboxMsg {
  id: string;
  sender: "customer" | "ai" | "agent";
  text: string;
  time: string;
}

interface ConversationThread {
  id: string;
  customer: string;
  email: string;
  country: string;
  agentName: string;
  status: "Open" | "Resolved";
  sentiment: "Positive" | "Neutral" | "Negative";
  unread: boolean;
  lastTime: string;
  summary: string;
  messages: InboxMsg[];
}

const INITIAL_THREADS: ConversationThread[] = [
  {
    id: "conv-1",
    customer: "Aarav Mehta",
    email: "aarav@fintechflow.io",
    country: "India",
    agentName: "Customer Support",
    status: "Open",
    sentiment: "Positive",
    unread: true,
    lastTime: "2m ago",
    summary:
      "Customer inquired about SSO configuration on the Growth plan and received step-by-step SAML setup instructions.",
    messages: [
      {
        id: "m1",
        sender: "customer",
        text: "Hi, can we enable Okta SAML SSO for our support workspace?",
        time: "10:14 AM",
      },
      {
        id: "m2",
        sender: "ai",
        text: "Yes! SAML SSO with Okta is supported. Go to Workspace Settings → Security → Single Sign-On to upload your metadata XML.",
        time: "10:14 AM",
      },
      {
        id: "m3",
        sender: "customer",
        text: "Great, can a specialist verify our callback URL before we switch it on?",
        time: "10:16 AM",
      },
    ],
  },
  {
    id: "conv-2",
    customer: "Elena Rostova",
    email: "elena@nordicretail.se",
    country: "Sweden",
    agentName: "Sales Inbound",
    status: "Resolved",
    sentiment: "Positive",
    unread: false,
    lastTime: "18m ago",
    summary:
      "Answered multi-currency billing and annual seat-discount questions; conversation marked resolved automatically.",
    messages: [
      {
        id: "m4",
        sender: "customer",
        text: "Do annual subscriptions support VAT invoicing for EU companies?",
        time: "09:42 AM",
      },
      {
        id: "m5",
        sender: "ai",
        text: "Yes. Our Merchant of Record (Paddle) automatically generates VAT-compliant invoices with your EU VAT ID at checkout.",
        time: "09:42 AM",
      },
    ],
  },
  {
    id: "conv-3",
    customer: "Marcus Vance",
    email: "mvance@cloudops.dev",
    country: "United States",
    agentName: "Technical Specialist",
    status: "Open",
    sentiment: "Neutral",
    unread: true,
    lastTime: "41m ago",
    summary:
      "Developer asked about webhook retry intervals and signature verification headers.",
    messages: [
      {
        id: "m6",
        sender: "customer",
        text: "What header does Yedii use to sign outgoing webhook payloads?",
        time: "09:15 AM",
      },
      {
        id: "m7",
        sender: "ai",
        text: "Every webhook request includes an `X-Yedii-Signature` HMAC-SHA256 header computed with your workspace signing secret.",
        time: "09:15 AM",
      },
    ],
  },
];

export function ProductInboxShowcase() {
  const [threads, setThreads] = useState<ConversationThread[]>(INITIAL_THREADS);
  const [selectedId, setSelectedId] = useState<string>(INITIAL_THREADS[0].id);
  const [filterStatus, setFilterStatus] = useState<"All" | "Open" | "Resolved">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");
  const [detailsTab, setDetailsTab] = useState<"details" | "summary">("details");

  const filteredThreads = threads.filter((t) => {
    if (filterStatus !== "All" && t.status !== filterStatus) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.customer.toLowerCase().includes(q) ||
      t.agentName.toLowerCase().includes(q) ||
      t.messages.some((m) => m.text.toLowerCase().includes(q))
    );
  });

  const activeThread =
    threads.find((t) => t.id === selectedId) ?? filteredThreads[0] ?? threads[0];

  const handleSelectThread = (id: string) => {
    setSelectedId(id);
    setThreads((prev) =>
      prev.map((t) => (t.id === id ? { ...t, unread: false } : t))
    );
  };

  const handleToggleStatus = () => {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeThread.id
          ? { ...t, status: t.status === "Open" ? "Resolved" : "Open" }
          : t
      )
    );
  };

  const handleSendReply = () => {
    const trimmed = replyText.trim();
    if (!trimmed) return;
    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeThread.id
          ? {
              ...t,
              lastTime: "Just now",
              messages: [
                ...t.messages,
                { id: `m-${Date.now()}`, sender: "agent", text: trimmed, time: "Just now" },
              ],
            }
          : t
      )
    );
    setReplyText("");
  };

  return (
    <div className="product-showcase-scope w-full rounded-2xl border border-[#E8E9EC] bg-white shadow-sm overflow-hidden text-[#17181C]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* A. Left Column: Conversation Sidebar */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#EAEAEC] flex flex-col">
          <div className="p-4 border-b border-[#F0F1F3] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#141C2E]">Inbox</span>
              <div className="flex items-center gap-1">
                {(["All", "Open", "Resolved"] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilterStatus(st)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium cursor-pointer ${
                      filterStatus === st
                        ? "bg-[#141C2E] text-white"
                        : "text-[#6B7280] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#8A9099] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full h-[34px] pl-8 pr-3 rounded-lg border border-[#E4E5E8] text-xs bg-[#FAFAFA] focus:outline-none focus:border-[#141C2E]"
              />
            </div>
          </div>

          <div className="divide-y divide-[#F4F5F7] overflow-y-auto flex-1">
            {filteredThreads.map((thread) => {
              const active = thread.id === activeThread.id;
              const lastMsg = thread.messages[thread.messages.length - 1];
              return (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => handleSelectThread(thread.id)}
                  className={`w-full p-3.5 text-left transition-colors cursor-pointer flex items-start gap-3 ${
                    active ? "bg-[#F4F5F7]" : "hover:bg-[#FAFAFA]"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#141C2E] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                    {thread.customer
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#17181C] truncate flex items-center gap-1.5">
                        {thread.customer}
                        {thread.unread && (
                          <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block" />
                        )}
                      </span>
                      <span className="text-[10.5px] text-[#8A9099] shrink-0">
                        {thread.lastTime}
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#6B7280] truncate mt-0.5">
                      {lastMsg?.text}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span
                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${
                          thread.status === "Resolved"
                            ? "bg-[#EAF8EE] text-[#15803D]"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {thread.status}
                      </span>
                      <span className="text-[10.5px] text-[#8A9099] truncate">
                        {thread.agentName}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* B. Middle Column: Conversation Workspace */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#EAEAEC] flex flex-col bg-[#FAFAFA]">
          <div className="bg-white px-4 py-3 border-b border-[#F0F1F3] flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-semibold text-[#17181C]">{activeThread.customer}</div>
              <div className="text-[11px] text-[#6B7280]">{activeThread.email}</div>
            </div>
            <button
              type="button"
              onClick={handleToggleStatus}
              className={`h-[30px] px-2.5 rounded-lg text-[11px] font-semibold inline-flex items-center gap-1 cursor-pointer border ${
                activeThread.status === "Resolved"
                  ? "bg-[#EAF8EE] border-emerald-200 text-[#15803D]"
                  : "bg-white border-[#E4E5E8] text-[#141C2E] hover:bg-[#F4F5F7]"
              }`}
            >
              {activeThread.status === "Resolved" ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resolved</span>
                </>
              ) : (
                <>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mark Resolved</span>
                </>
              )}
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[340px]">
            {activeThread.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "customer" ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === "customer"
                      ? "bg-white border border-[#E8E9EC] text-[#17181C]"
                      : "bg-[#141C2E] text-white"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#8A9099] mt-1 px-1">
                  {msg.sender === "customer"
                    ? activeThread.customer
                    : msg.sender === "ai"
                    ? "Yedii AI"
                    : "Team Member"}{" "}
                  · {msg.time}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-[#F0F1F3] flex items-center gap-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendReply();
              }}
              placeholder="Reply to conversation..."
              className="flex-1 h-[36px] px-3 rounded-lg border border-[#E4E5E8] text-xs bg-[#FAFAFA] focus:outline-none focus:border-[#141C2E]"
            />
            <button
              type="button"
              onClick={handleSendReply}
              className="h-[36px] px-3.5 rounded-lg bg-[#141C2E] text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </div>
        </div>

        {/* C. Right Column: Customer Details & AI Summary Panel */}
        <div className="lg:col-span-3 p-4 bg-white space-y-4">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#F4F5F7]">
            <button
              type="button"
              onClick={() => setDetailsTab("details")}
              className={`flex-1 py-1 rounded-md text-[11px] font-semibold cursor-pointer ${
                detailsTab === "details" ? "bg-white text-[#141C2E] shadow-2xs" : "text-[#6B7280]"
              }`}
            >
              Details
            </button>
            <button
              type="button"
              onClick={() => setDetailsTab("summary")}
              className={`flex-1 py-1 rounded-md text-[11px] font-semibold cursor-pointer inline-flex items-center justify-center gap-1 ${
                detailsTab === "summary" ? "bg-white text-[#141C2E] shadow-2xs" : "text-[#6B7280]"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>AI Summary</span>
            </button>
          </div>

          {detailsTab === "details" ? (
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E9EC] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Status</span>
                  <span className="font-semibold text-[#17181C]">{activeThread.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Sentiment</span>
                  <span
                    className={`font-semibold ${
                      activeThread.sentiment === "Positive"
                        ? "text-[#1B7A57]"
                        : activeThread.sentiment === "Negative"
                        ? "text-[#DC2626]"
                        : "text-[#4B5563]"
                    }`}
                  >
                    {activeThread.sentiment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Assigned Agent</span>
                  <span className="font-medium text-[#17181C]">{activeThread.agentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Country</span>
                  <span className="font-medium text-[#17181C]">{activeThread.country}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E8E9EC] space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Conversation Summary
              </div>
              <p className="text-xs text-[#374151] leading-relaxed">{activeThread.summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
