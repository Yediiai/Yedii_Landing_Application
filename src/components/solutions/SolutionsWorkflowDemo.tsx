"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Cpu,
  CreditCard,
  UserCheck,
  CheckCircle2,
  Search,
  Sparkles,
  Bot,
  User,
  ArrowRight,
} from "lucide-react";

interface WorkflowScenario {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  intent: string;
  retrievedSource: string;
  toolAction: string;
  customerQuery: string;
  agentResponse: string;
  keyHighlight: string;
}

const WORKFLOW_SCENARIOS: WorkflowScenario[] = [
  {
    id: "ecommerce",
    tabLabel: "E-commerce Order Support",
    icon: ShoppingBag,
    title: "E-commerce: Order Status & Shipping Inquiry",
    subtitle: "Automate delivery inquiries by combining vector policy chunks with connected carrier webhooks.",
    intent: "Order Tracking (WISMO)",
    retrievedSource: "Shipping Policies v4.2 & Carrier SLA Handbook",
    toolAction: "Orders API webhook lookup via order #89421",
    customerQuery: "Where is my order? I placed it three days ago.",
    agentResponse:
      "Your order #89421 is currently in transit with FedEx Express and is scheduled to arrive tomorrow, Thursday by 4:00 PM. You can view the live GPS tracking route directly via the link below.",
    keyHighlight: "Illustrative simulation with verified carrier integration guardrail.",
  },
  {
    id: "saas",
    tabLabel: "SaaS Technical Troubleshooting",
    icon: Cpu,
    title: "SaaS: Developer API & Webhook Debugging",
    subtitle: "Code-aware parsing of HMAC header signatures and endpoint authentication errors.",
    intent: "API Integration Error (HTTP 401)",
    retrievedSource: "Developer Documentation: Webhook Verification Specifications",
    toolAction: "Cryptographic signature validation rule engine",
    customerQuery: "Our endpoint keeps returning 401 Unauthorized when receiving your webhook events.",
    agentResponse:
      "A 401 Unauthorized on webhook events indicates header signature verification failed. Ensure you compute the HMAC SHA-256 digest using the raw unparsed request payload buffer rather than a formatted JSON string.",
    keyHighlight: "Delivers syntactically accurate code guidance with zero hallucination.",
  },
  {
    id: "billing",
    tabLabel: "Subscription & Billing",
    icon: CreditCard,
    title: "Billing: Mid-Cycle Upgrade & Invoicing",
    subtitle: "Transparent calculations for prorated charges, tax receipts, and payment method swaps.",
    intent: "Billing Plan Upgrade & Proration",
    retrievedSource: "Subscription Pricing & Merchant Terms (Paddle / Stripe)",
    toolAction: "Proration calculator hook & invoice PDF generator",
    customerQuery: "How does billing work if I upgrade from Starter to Growth in the middle of the month?",
    agentResponse:
      "When upgrading mid-cycle, you are only charged the prorated difference for the remaining days of your billing month. Your existing unused Starter credit is immediately applied toward the Growth tier.",
    keyHighlight: "Prevents customer billing confusion and dispute chargebacks.",
  },
  {
    id: "onboarding",
    tabLabel: "Customer Onboarding",
    icon: UserCheck,
    title: "Success: Workspace Setup & Member Provisioning",
    subtitle: "Step-by-step guidance to train AI agents, import company docs, and configure team roles.",
    intent: "Knowledge Base Setup & Member Invites",
    retrievedSource: "Admin Workspace Onboarding Playbook",
    toolAction: "Workspace permission checklist inspection",
    customerQuery: "How do I import our Zendesk knowledge base and invite our support leads?",
    agentResponse:
      "To import your knowledge base, navigate to Knowledge Base > Add Source and select Zendesk. Enter your sub-domain to automatically index articles. Then head to Settings > Members to invite team leads with Manager roles.",
    keyHighlight: "Reduces time-to-value from days to minutes for new deployments.",
  },
];

export function SolutionsWorkflowDemo() {
  const [activeTab, setActiveTab] = useState<string>("ecommerce");

  const currentScenario =
    WORKFLOW_SCENARIOS.find((s) => s.id === activeTab) || WORKFLOW_SCENARIOS[0];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#EAEAEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11.5px] font-semibold text-[#8A9099] uppercase tracking-wider">
            Real-World Orchestration
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141C2E] mt-2">
            See how Yedii works in real-world scenarios
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] leading-relaxed">
            From understanding customer intent to delivering accurate answers, Yedii helps businesses create better support experiences.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {WORKFLOW_SCENARIOS.map((scenario) => {
            const Icon = scenario.icon;
            const isActive = activeTab === scenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveTab(scenario.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#141C2E] text-white shadow-xs"
                    : "bg-[#F9FAFB] text-[#4B5563] hover:text-[#141C2E] hover:bg-[#F2F3F6] border border-[#EAEAEC]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#8A9099]"}`} />
                <span>{scenario.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Workflow Interactive Stage */}
        <div className="rounded-[16px] border border-[#EAEAEC] bg-[#FAFAFC] p-4 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: AI Decision & Grounding Stepper (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                Agent Execution Pipeline
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#141C2E]">
              {currentScenario.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              {currentScenario.subtitle}
            </p>

            {/* Step Milestones */}
            <div className="space-y-3 pt-2">
              {/* Step 1: Intent */}
              <div className="p-3 rounded-[10px] bg-white border border-[#EAEAEC] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#141C2E] block">1. Intent Classified</span>
                  <span className="text-[#6B7280] font-mono text-[11px]">{currentScenario.intent}</span>
                </div>
              </div>

              {/* Step 2: Knowledge Retrieval */}
              <div className="p-3 rounded-[10px] bg-white border border-[#EAEAEC] flex items-start gap-3">
                <Search className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#141C2E] block">2. Vector Grounding Retrieved</span>
                  <span className="text-[#6B7280] text-[11px]">{currentScenario.retrievedSource}</span>
                </div>
              </div>

              {/* Step 3: Tool Execution */}
              <div className="p-3 rounded-[10px] bg-white border border-[#EAEAEC] flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#141C2E] block">3. Integration Tool Triggered</span>
                  <span className="text-[#6B7280] text-[11px]">{currentScenario.toolAction}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8A9099] italic">
              {currentScenario.keyHighlight}
            </div>
          </div>

          {/* Right Column: Conversational Simulation UI (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-[14px] border border-[#EAEAEC] shadow-sm p-4 sm:p-6 flex flex-col justify-between min-h-[380px]">
            {/* Simulation Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F0F1F3]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-[6px] bg-[#141C2E] text-white flex items-center justify-center text-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-[#141C2E]">Yedii Support Agent</span>
              </div>
              <span className="text-[11px] text-[#8A9099] font-mono">Simulated Webhook Session</span>
            </div>

            {/* Conversation Messages */}
            <div className="py-6 space-y-4 flex-1">
              {/* Customer Message */}
              <div className="flex items-start justify-end gap-2.5">
                <div className="max-w-[85%] rounded-[14px] bg-[#141C2E] text-white px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
                  {currentScenario.customerQuery}
                </div>
                <div className="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#565C66] shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Agent Response */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-[8px] bg-[#141C2E] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="max-w-[85%] space-y-2">
                  <div className="rounded-[14px] bg-[#F9FAFB] border border-[#E4E5E8] text-[#17181C] px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
                    {currentScenario.agentResponse}
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] text-[#8A9099] pl-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Verified against source documentation • 0.98 confidence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-3 border-t border-[#F0F1F3] flex items-center justify-between text-[11px] text-[#8A9099]">
              <span>Illustrative demonstration — connects with your actual business tools.</span>
              <span className="font-medium text-[#141C2E]">Omnichannel Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
