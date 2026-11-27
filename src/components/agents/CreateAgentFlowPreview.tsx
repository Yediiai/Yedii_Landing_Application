"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Globe,
  FileText,
  Type,
  FileCode,
  Check,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

const ROLES = [
  {
    id: "support",
    name: "Customer Support",
    description: "Resolve customer questions, account issues, and policy inquiries accurately.",
  },
  {
    id: "technical",
    name: "Technical Specialist",
    description: "Troubleshoot APIs, SDKs, integrations, and developer documentation.",
  },
  {
    id: "sales",
    name: "Sales Assistant",
    description: "Qualify inbound leads, answer pricing questions, and book product demos.",
  },
  {
    id: "internal",
    name: "Internal Knowledge",
    description: "Help employees search company handbooks, SOPs, and internal wikis.",
  },
];

const EMBEDDING_OPTIONS = [
  { id: "lite", name: "Yedii Lite", tag: "Fastest", dims: [128, 256, 384, 512], defaultDim: 384 },
  { id: "base", name: "Yedii Base", tag: "Balanced", dims: [256, 512, 768, 1024], defaultDim: 768 },
  { id: "large", name: "Yedii Large", tag: "Highest Precision", dims: [512, 1024, 1536, 3072], defaultDim: 1536 },
];

const TRAINING_STAGES = [
  { name: "Analyzing", title: "Analyzing knowledge sources", desc: "Validating documents and chunking text into semantic passages..." },
  { name: "Vectorizing", title: "Generating vector embeddings", desc: "Running embedding model to generate high-dimensional vectors..." },
  { name: "Indexing", title: "Building semantic search index", desc: "Optimizing index structures for fast nearest-neighbor searches..." },
  { name: "Finalizing", title: "Finalizing agent preparation", desc: "Calibrating retrieval index and setting up agent ready state..." },
];

export function CreateAgentFlowPreview() {
  // Step 1 state
  const [agentName, setAgentName] = useState("Customer Support");
  const [description, setDescription] = useState(
    "Answer customer billing, onboarding, and product troubleshooting questions using verified company docs."
  );
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  // Step 2 state
  const [selectedSource, setSelectedSource] = useState<"website" | "pdf">("website");
  const [websiteMode, setWebsiteMode] = useState<"single" | "sitemap">("sitemap");
  const [websiteUrl, setWebsiteUrl] = useState("https://docs.yedii.com/sitemap.xml");

  // Step 3 state
  const [selectedModelId, setSelectedModelId] = useState("base");
  const [selectedDim, setSelectedDim] = useState(768);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingStageIdx, setTrainingStageIdx] = useState(3);

  const activeModel =
    EMBEDDING_OPTIONS.find((m) => m.id === selectedModelId) ?? EMBEDDING_OPTIONS[1];

  useEffect(() => {
    if (!isTraining) return;
    const t1 = setTimeout(() => setTrainingStageIdx(1), 600);
    const t2 = setTimeout(() => setTrainingStageIdx(2), 1200);
    const t3 = setTimeout(() => setTrainingStageIdx(3), 1800);
    const t4 = setTimeout(() => setIsTraining(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isTraining]);

  const handleStartTraining = () => {
    setTrainingStageIdx(0);
    setIsTraining(true);
  };

  return (
    <div className="create-agent-flow-scope space-y-12 sm:space-y-16 text-[#17181C]">
      {/* ===================================================================== */}
      {/* STEP 1: LEFT BOX (Agent Details) + RIGHT DESCRIPTION                  */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 bg-[#F9FAFB] rounded-2xl border border-[#E8E9EC] p-5 sm:p-6 shadow-xs">
          <div className="bg-white rounded-2xl border border-[#E8E9EC] p-5 space-y-4">
            <div className="text-[11px] font-semibold tracking-[0.75px] uppercase text-[#9AA0A8]">
              Agent details
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#17181C] block mb-1.5">
                Agent name
              </label>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="e.g. Customer Support"
                className="w-full h-[40px] px-3.5 rounded-lg border border-[#E0E2E6] text-[14px] text-[#17181C] bg-white focus:outline-none focus:border-[#141C2E]"
              />
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#17181C] block mb-1.5">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="What should this agent help customers with?"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E0E2E6] text-[14px] text-[#17181C] bg-white resize-none focus:outline-none focus:border-[#141C2E]"
              />
            </div>

            <div className="relative">
              <label className="text-[13.5px] font-medium text-[#17181C] block mb-1.5">
                Role
              </label>
              <button
                type="button"
                onClick={() => setIsRoleOpen((prev) => !prev)}
                className="w-full h-[40px] px-3.5 rounded-lg bg-white border border-[#E0E2E6] hover:border-zinc-400 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-[14px] font-medium text-[#17181C]">
                  {selectedRole.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8A9099] transition-transform ${
                    isRoleOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isRoleOpen && (
                <div className="mt-1.5 bg-white rounded-xl border border-[#E8E9EC] shadow-lg p-1.5 space-y-1">
                  {ROLES.map((r) => {
                    const active = r.id === selectedRole.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => {
                          setSelectedRole(r);
                          setIsRoleOpen(false);
                        }}
                        className={`w-full p-2.5 rounded-lg flex items-center justify-between text-left cursor-pointer ${
                          active ? "bg-[#F5F6F8]" : "hover:bg-[#F9FAFB]"
                        }`}
                      >
                        <div className="pr-3">
                          <div className="text-[13.5px] font-medium text-[#17181C]">{r.name}</div>
                          <div className="text-[12px] text-[#6B7280]">{r.description}</div>
                        </div>
                        <div
                          className={`h-4 w-4 rounded-full border shrink-0 ${
                            active ? "border-[4.5px] border-[#141C2E]" : "border-[#D0D5DD]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3 text-left">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F4F5F7] border border-[#E8E9EC] text-[11px] font-semibold uppercase tracking-wider text-[#141C2E]">
            Step 01 · Agent Details
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] font-sans">
            Create your AI agent
          </h3>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Set up your agent&apos;s name, mission description, and operational role. Choose from
            Customer Support, Technical Specialist, Sales Assistant, or Internal Knowledge presets.
          </p>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* STEP 2: LEFT DESCRIPTION + RIGHT BOX (Add Knowledge)                  */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-6 border-t border-[#E8E9EC]">
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-3 text-left">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F4F5F7] border border-[#E8E9EC] text-[11px] font-semibold uppercase tracking-wider text-[#141C2E]">
            Step 02 · Add Knowledge
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] font-sans">
            Connect websites &amp; PDFs
          </h3>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Pick where your information lives and add it right in the wizard — crawl single pages
            or full sitemaps, upload PDFs, and review extracted page counts before training.
          </p>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 bg-[#F9FAFB] rounded-2xl border border-[#E8E9EC] p-5 sm:p-6 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSelectedSource("website")}
              className={`rounded-2xl bg-white p-4 text-left transition-all cursor-pointer border ${
                selectedSource === "website"
                  ? "border-[1.6px] border-[#141C2E] ring-1 ring-[#141C2E]/10 shadow-xs"
                  : "border-[#E8E9EC] hover:border-zinc-300"
              }`}
            >
              <div className="h-8 w-8 rounded-lg bg-[#F4F5F7] flex items-center justify-center text-[#141C2E]">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-[14px] font-semibold text-[#17181C] mt-2.5">Website</div>
              <div className="text-[12px] text-[#6B7280] mt-0.5">Add pages from your site</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedSource("pdf")}
              className={`rounded-2xl bg-white p-4 text-left transition-all cursor-pointer border ${
                selectedSource === "pdf"
                  ? "border-[1.6px] border-[#141C2E] ring-1 ring-[#141C2E]/10 shadow-xs"
                  : "border-[#E8E9EC] hover:border-zinc-300"
              }`}
            >
              <div className="h-8 w-8 rounded-lg bg-[#F4F5F7] flex items-center justify-center text-[#141C2E]">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-[14px] font-semibold text-[#17181C] mt-2.5">PDF</div>
              <div className="text-[12px] text-[#6B7280] mt-0.5">Upload &amp; choose pages</div>
            </button>

            {[
              { name: "Text", desc: "Paste text directly", Icon: Type },
              { name: "Notion", desc: "Connect Notion space", Icon: FileCode },
              { name: "Google Docs", desc: "Connect shared doc", Icon: FileText },
              { name: "Markdown", desc: "Upload Markdown", Icon: FileCode },
            ].map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white border border-[#E8E9EC] p-4 text-left opacity-75 cursor-not-allowed"
                >
                  <div className="h-8 w-8 rounded-lg bg-[#F4F5F7] flex items-center justify-center text-[#6B7280]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <span className="text-[14px] font-semibold text-[#17181C]">{item.name}</span>
                    <span className="bg-[#F0F1F3] text-[#6B7280] text-[10px] font-medium px-1.5 py-0.5 rounded-md">
                      Soon
                    </span>
                  </div>
                  <div className="text-[12px] text-[#9AA0A8] mt-0.5">{item.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Inline Source Config */}
          <div className="bg-white rounded-xl border border-[#E8E9EC] p-4">
            {selectedSource === "website" ? (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setWebsiteMode("single")}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                      websiteMode === "single"
                        ? "bg-[#141C2E] text-white"
                        : "bg-[#F4F5F7] text-[#565C66]"
                    }`}
                  >
                    Single Page URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setWebsiteMode("sitemap")}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                      websiteMode === "sitemap"
                        ? "bg-[#141C2E] text-white"
                        : "bg-[#F4F5F7] text-[#565C66]"
                    }`}
                  >
                    Sitemap Crawl
                  </button>
                </div>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full h-[38px] px-3 rounded-lg border border-[#E0E2E6] text-xs font-mono text-[#17181C] bg-white"
                />
              </div>
            ) : (
              <div>
                <div className="text-xs font-semibold text-[#17181C]">
                  Attached PDF: product-handbook-2026.pdf
                </div>
                <div className="text-[11.5px] text-[#6B7280] mt-0.5">
                  18 pages extracted · 14,200 words ready for indexing
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* STEP 3: LEFT BOX (Configure & Train) + RIGHT DESCRIPTION              */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-6 border-t border-[#E8E9EC]">
        <div className="lg:col-span-7 bg-[#F9FAFB] rounded-2xl border border-[#E8E9EC] p-5 sm:p-6 shadow-xs">
          <div className="bg-white rounded-2xl border border-[#E8E9EC] p-5 space-y-5">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Embedding model
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {EMBEDDING_OPTIONS.map((model) => {
                  const active = model.id === activeModel.id;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => {
                        setSelectedModelId(model.id);
                        setSelectedDim(model.defaultDim);
                      }}
                      className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                        active
                          ? "bg-[#141C2E] border-[#141C2E] text-white"
                          : "bg-[#FAFAFA] border-[#E8E9EC] text-[#17181C] hover:bg-[#F4F5F7]"
                      }`}
                    >
                      <div className="text-xs font-semibold">{model.name}</div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          active ? "text-zinc-300" : "text-[#6B7280]"
                        }`}
                      >
                        {model.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                  Search dimensions
                </div>
                <div className="inline-flex items-center p-1 rounded-xl bg-[#F4F5F7] border border-[#E8E9EC] gap-1">
                  {activeModel.dims.map((dim) => {
                    const active = dim === selectedDim;
                    return (
                      <button
                        key={dim}
                        type="button"
                        onClick={() => setSelectedDim(dim)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono cursor-pointer transition-colors ${
                          active
                            ? "bg-[#141C2E] text-white"
                            : "text-[#565C66] hover:text-[#17181C]"
                        }`}
                      >
                        {dim}d
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleStartTraining}
                className="h-[38px] px-4 rounded-lg bg-[#141C2E] hover:bg-[#1F293D] text-white text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5 self-end"
              >
                {isTraining ? (
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>{isTraining ? "Training..." : "Run Training Preview"}</span>
              </button>
            </div>

            {/* 4-Stage Training Pipeline */}
            <div className="space-y-2.5 pt-2 border-t border-[#F1F3F5]">
              <div className="h-1.5 w-full rounded-full bg-[#F0F1F3] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#141C2E] transition-all duration-300"
                  style={{ width: `${((trainingStageIdx + 1) / TRAINING_STAGES.length) * 100}%` }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TRAINING_STAGES.map((stage, idx) => {
                  const done = !isTraining ? idx <= trainingStageIdx : idx < trainingStageIdx;
                  const current = isTraining && idx === trainingStageIdx;
                  return (
                    <div
                      key={stage.name}
                      className={`p-2.5 rounded-lg border text-xs ${
                        current
                          ? "border-[#141C2E] bg-[#FAFAFA] font-semibold text-[#17181C]"
                          : done
                          ? "border-emerald-200 bg-[#EAF8EE] text-[#15803D]"
                          : "border-[#E8E9EC] bg-white text-[#9AA0A8]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{stage.name}</span>
                        {done && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3 text-left">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F4F5F7] border border-[#E8E9EC] text-[11px] font-semibold uppercase tracking-wider text-[#141C2E]">
            Step 03 · Configure &amp; Train
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] font-sans">
            Pick your embedding model &amp; train
          </h3>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Select your embedding model and vector dimensions, then watch Yedii stream through
            Analyzing, Vectorizing, Indexing, and Finalizing in real time.
          </p>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* STEP 4: LEFT DESCRIPTION + RIGHT BOX (Agent Ready)                    */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-6 border-t border-[#E8E9EC]">
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-3 text-left">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F4F5F7] border border-[#E8E9EC] text-[11px] font-semibold uppercase tracking-wider text-[#141C2E]">
            Step 04 · Agent Ready
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141C2E] font-sans">
            Test in Playground &amp; launch
          </h3>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Once indexing finishes, your agent is immediately ready with verified company memory.
            Jump straight into the Playground to test responses or deploy to your website widget.
          </p>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 bg-[#F9FAFB] rounded-2xl border border-[#E8E9EC] p-6 sm:p-8 shadow-xs text-center flex flex-col items-center">
          <div className="h-[68px] w-[68px] rounded-full bg-[#EAF8EE] flex items-center justify-center mb-4">
            <div className="h-[44px] w-[44px] rounded-full bg-[#16A34A] flex items-center justify-center shadow-xs">
              <Check className="w-5 h-5 text-white stroke-[3]" />
            </div>
          </div>

          <h4 className="text-[22px] font-semibold text-[#17181C] tracking-[-0.4px]">
            Your AI agent is ready
          </h4>
          <p className="text-[14px] text-[#6B7280] mt-1.5 max-w-[400px]">
            {agentName || "Customer Support"} ({selectedRole.name}) has been prepared with{" "}
            {activeModel.name} at {selectedDim}d.
          </p>

          <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] font-medium text-[#374151]">
            2 sources · 60 pages
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <Link
              href="/ai-playground"
              className="w-full sm:w-auto px-5 h-[40px] rounded-lg border border-[#E0E2E6] bg-white text-[13.5px] font-medium text-[#2A2E36] hover:bg-zinc-50 inline-flex items-center justify-center"
            >
              Open Playground
            </Link>
            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-5 h-[40px] rounded-lg bg-[#141C2E] hover:bg-[#1F293D] text-white text-[13.5px] font-medium inline-flex items-center justify-center gap-1.5"
            >
              <span>Create Your Agent Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
