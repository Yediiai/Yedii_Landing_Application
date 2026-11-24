"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  EMBEDDING_FILTER_CHIPS,
  EMBEDDING_MODEL_CATALOG,
  EmbeddingCatalogItem,
  EmbeddingUseCaseFilter,
  MAX_MODEL_CREDITS,
  MODEL_CATALOG,
  MODEL_FILTER_CHIPS,
  MODEL_PROVIDERS,
  MODEL_TIERS,
  ModelCatalogItem,
  ModelCategory,
  ModelMinPlan,
  ModelProviderId,
  ModelUseCaseFilter,
  PLAN_LABELS,
  PLAN_RANK,
} from "./modelCatalog";

function getCdnLogoUrl(filename: string): string {
  const base = (
    process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL ||
    process.env.NEXT_PUBLIC_CDN_URL ||
    "https://cdn.yedii.com"
  ).replace(/\/$/, "");
  return `${base}/dev/system/logos/${filename}`;
}

function ProviderBadgeIcon({
  provider,
  className = "w-5 h-5",
}: {
  provider: string;
  className?: string;
}) {
  const p = provider.toLowerCase();

  if (p.includes("openai")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden ${className}`}
      >
        <Image
          src={getCdnLogoUrl("openai.jpg")}
          alt="OpenAI"
          width={20}
          height={20}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  if (p.includes("gemini") || p.includes("google")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-white border border-[#E0E2E6] overflow-hidden ${className}`}
      >
        <Image
          src={getCdnLogoUrl("gemini-color.jpg")}
          alt="Google Gemini"
          width={20}
          height={20}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  if (p.includes("deepseek")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#EEF4FF] overflow-hidden ${className}`}
      >
        <Image
          src={getCdnLogoUrl("deepseek.png")}
          alt="DeepSeek"
          width={20}
          height={20}
          className="w-full h-full object-cover rounded-full"
          unoptimized
        />
      </div>
    );
  }

  if (p.includes("grok") || p.includes("xai")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#111111] text-white p-1 overflow-hidden ${className}`}
      >
        <span className="text-[10px] font-black tracking-tight">𝕏</span>
      </div>
    );
  }

  if (p.includes("kimi")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#111827] text-white p-1 overflow-hidden ${className}`}
      >
        <span className="text-[10px] font-black tracking-tight">K</span>
      </div>
    );
  }

  if (p.includes("qwen")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden ${className}`}
      >
        <Image
          src={getCdnLogoUrl("qwen2.png")}
          alt="Qwen"
          width={20}
          height={20}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  if (p.includes("cohere")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#39594D] text-white p-1 overflow-hidden ${className}`}
      >
        <span className="text-[9px] font-black tracking-tight">CO</span>
      </div>
    );
  }

  if (p.includes("voyage")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#7C3AED] text-white p-1 overflow-hidden ${className}`}
      >
        <span className="text-[10px] font-black tracking-tight">V</span>
      </div>
    );
  }

  if (p.includes("baai")) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#2563EB] text-white p-1 overflow-hidden ${className}`}
      >
        <span className="text-[9px] font-black tracking-tight">BA</span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-full bg-[#111827] text-white p-1 overflow-hidden ${className}`}
    >
      <span className="text-[10px] font-black tracking-tight">AI</span>
    </div>
  );
}

function computeLogMeterWidth(credits: number): number {
  const clamped = Math.max(1, Math.min(MAX_MODEL_CREDITS, credits));
  const pct = (Math.log(clamped + 1) / Math.log(MAX_MODEL_CREDITS + 1)) * 100;
  return Math.max(8, Math.min(100, Math.round(pct)));
}

function AvailabilityPill({ minPlan }: { minPlan: ModelMinPlan }) {
  const minPlanLabel = PLAN_LABELS[minPlan];
  const pillText = minPlan === "free" ? "All plans" : `${minPlanLabel} +`;

  if (minPlan === "free" || minPlan === "starter") {
    return (
      <span className="inline-flex items-center text-xs font-medium whitespace-nowrap text-[#111827]">
        {pillText}
      </span>
    );
  }

  const tooltipText = `Upgrade to ${minPlanLabel} to use this model`;

  return (
    <div className="relative inline-flex group/tooltip">
      <button
        type="button"
        aria-label={tooltipText}
        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap bg-[#F3F4F6] text-[#6B7280] hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-2 cursor-default"
      >
        <span>{pillText}</span>
      </button>
      <span
        role="tooltip"
        className="pointer-events-none opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100 transition-all duration-150 absolute bottom-full right-0 mb-1.5 z-20 w-max max-w-[220px] rounded-md border border-[#E8E9EC] bg-white px-2.5 py-1.5 text-xs font-medium text-[#111827] shadow-md"
      >
        {tooltipText}
      </span>
    </div>
  );
}

function ModelRow({
  model,
  providerLabel,
}: {
  model: ModelCatalogItem;
  providerLabel: string;
}) {
  const meterPct = computeLogMeterWidth(model.credits);
  const minPlanLabel = PLAN_LABELS[model.minPlan];
  const isMostUsed = model.tags.includes("Most used");

  return (
    <div className="px-4 sm:px-5 py-3.5 border-t border-[#F1F2F4] hover:bg-slate-50/50 transition-colors">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] min-[720px]:grid-cols-[minmax(200px,1.25fr)_minmax(220px,1.5fr)_minmax(110px,0.75fr)_minmax(120px,0.8fr)] items-start min-[720px]:items-center gap-x-3 gap-y-2.5 min-[720px]:gap-4">
        {/* Col 1 */}
        <div className="flex items-start gap-2.5 min-w-0">
          <div className="mt-0.5 shrink-0">
            <ProviderBadgeIcon provider={providerLabel} className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#111827] leading-snug truncate">
                {model.name}
              </span>
              {isMostUsed && (
                <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-medium text-[#111827]">
                  Most used
                </span>
              )}
            </div>
            <p className="text-xs font-medium text-[#6B7280] mt-0.5">
              {minPlanLabel} and above
            </p>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-end min-[720px]:items-start min-[720px]:order-3 shrink-0">
          <span className="text-[13.5px] font-medium text-[#111827] tabular-nums leading-snug">
            {model.credits} {model.credits === 1 ? "credit" : "credits"}
          </span>
          <div className="mt-1.5 min-[720px]:hidden">
            <AvailabilityPill minPlan={model.minPlan} />
          </div>
        </div>

        {/* Col 2 */}
        <div className="col-span-2 min-[720px]:col-span-1 min-[720px]:order-2 min-w-0">
          <p className="text-[13.5px] font-normal text-[#6B7280] leading-snug">
            {model.useCase}
          </p>
          <div
            role="meter"
            aria-label={`${model.name} credit cost: ${model.credits} of ${MAX_MODEL_CREDITS} credits`}
            aria-valuemin={1}
            aria-valuemax={MAX_MODEL_CREDITS}
            aria-valuenow={model.credits}
            className="mt-2 h-1.5 w-full max-w-[220px] rounded-full bg-[#F3F4F6] overflow-hidden"
          >
            <div
              className="h-full rounded-full bg-[#111827] transition-[width] duration-300 ease-out motion-reduce:transition-none"
              style={{ width: `${meterPct}%` }}
            />
          </div>
        </div>

        {/* Col 4 */}
        <div className="hidden min-[720px]:flex min-[720px]:order-4 justify-end">
          <AvailabilityPill minPlan={model.minPlan} />
        </div>
      </div>
    </div>
  );
}

function EmbeddingModelRow({ model }: { model: EmbeddingCatalogItem }) {
  const minPlanLabel = PLAN_LABELS[model.minPlan];
  const planEligibilityText =
    model.minPlan === "free" ? "All plans" : `${minPlanLabel} and above`;

  return (
    <div className="px-4 sm:px-5 py-3.5 border-t border-[#F1F2F4] hover:bg-slate-50/50 transition-colors">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] min-[720px]:grid-cols-[minmax(200px,1.25fr)_minmax(220px,1.5fr)_minmax(110px,0.75fr)_minmax(120px,0.8fr)] items-start min-[720px]:items-center gap-x-3 gap-y-2.5 min-[720px]:gap-4">
        <div className="flex items-start gap-2.5 min-w-0">
          <div className="mt-0.5 shrink-0">
            <ProviderBadgeIcon provider={model.providerLabel} className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#111827] leading-snug truncate">
                {model.name}
              </span>
              {model.isRecommended && (
                <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-medium text-[#111827]">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-xs font-medium text-[#6B7280] mt-0.5">
              {planEligibilityText}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end min-[720px]:items-start min-[720px]:order-3 shrink-0">
          <span className="text-[13.5px] font-medium text-[#111827] leading-snug">
            No credits
          </span>
          <span className="text-xs font-medium text-[#6B7280] mt-0.5">
            {model.dimensions}
          </span>
          <div className="mt-1.5 min-[720px]:hidden">
            <AvailabilityPill minPlan={model.minPlan} />
          </div>
        </div>

        <div className="col-span-2 min-[720px]:col-span-1 min-[720px]:order-2 min-w-0">
          <p className="text-[13.5px] font-normal text-[#6B7280] leading-snug">
            {model.useCase}
          </p>
        </div>

        <div className="hidden min-[720px]:flex min-[720px]:order-4 justify-end">
          <AvailabilityPill minPlan={model.minPlan} />
        </div>
      </div>
    </div>
  );
}

export function AiModelUsageSection() {
  const [modelCategory, setModelCategory] = useState<ModelCategory>("chat");
  const [selectedProvider, setSelectedProvider] = useState<ModelProviderId>("openai");
  const [selectedFilter, setSelectedFilter] = useState<ModelUseCaseFilter>("all");
  const [selectedEmbeddingFilter, setSelectedEmbeddingFilter] =
    useState<EmbeddingUseCaseFilter>("all");

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const providerCounts = useMemo(() => {
    const counts: Record<ModelProviderId, number> = {
      openai: 0,
      "google-gemini": 0,
      grok: 0,
      deepseek: 0,
      kimi: 0,
      qwen: 0,
    };
    for (const item of MODEL_CATALOG) {
      counts[item.provider] += 1;
    }
    return counts;
  }, []);

  const activeProviderConfig =
    MODEL_PROVIDERS.find((p) => p.id === selectedProvider) ?? MODEL_PROVIDERS[0];

  const activeFilterConfig = MODEL_FILTER_CHIPS.find((c) => c.id === selectedFilter);
  const activeEmbeddingFilterConfig = EMBEDDING_FILTER_CHIPS.find(
    (c) => c.id === selectedEmbeddingFilter
  );

  const filteredModels = useMemo(() => {
    return MODEL_CATALOG.filter((item) => {
      if (item.provider !== selectedProvider) return false;
      if (activeFilterConfig?.matchTag) {
        return item.tags.includes(activeFilterConfig.matchTag);
      }
      return true;
    }).sort((a, b) => a.credits - b.credits);
  }, [selectedProvider, activeFilterConfig]);

  const groupedByTier = useMemo(() => {
    return MODEL_TIERS.map((tier) => ({
      ...tier,
      models: filteredModels
        .filter((m) => m.tier === tier.id)
        .sort((a, b) => a.credits - b.credits),
    })).filter((group) => group.models.length > 0);
  }, [filteredModels]);

  const filteredEmbeddingModels = useMemo(() => {
    if (!activeEmbeddingFilterConfig?.matchTag) {
      return EMBEDDING_MODEL_CATALOG;
    }
    const tag = activeEmbeddingFilterConfig.matchTag;
    return EMBEDDING_MODEL_CATALOG.filter((item) => item.tags.includes(tag));
  }, [activeEmbeddingFilterConfig]);

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % MODEL_PROVIDERS.length;
      setSelectedProvider(MODEL_PROVIDERS[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + MODEL_PROVIDERS.length) % MODEL_PROVIDERS.length;
      setSelectedProvider(MODEL_PROVIDERS[prev].id);
      tabRefs.current[prev]?.focus();
    }
  };

  // Ensure PLAN_RANK is referenced consistently
  void PLAN_RANK;

  return (
    <section
      aria-labelledby="ai-models-heading"
      className="w-full flex flex-col gap-5 pt-6 border-t-[0.8px] border-[#EAEBEE] overflow-x-hidden"
    >
      {/* SECTION HEADER */}
      <div className="space-y-1 min-w-0 text-center">
        <h2
          id="ai-models-heading"
          className="text-[20px] sm:text-[22px] font-semibold text-[#111827] tracking-[-0.01em] leading-tight"
        >
          Choose the right model for every reply
        </h2>
        <p className="text-sm font-normal text-[#6B7280] leading-relaxed">
          Each reply uses credits based on the model that writes it.
        </p>
      </div>

      {/* PROVIDER TABS (FIXED ACROSS FILTERS) */}
      <div className="w-full overflow-x-auto pb-1 flex justify-start min-[720px]:justify-center">
        <div
          role="tablist"
          aria-label="AI model providers"
          className="inline-flex h-auto p-1 rounded-[12px] bg-[#F3F4F6] border border-[#E8E9EC] min-w-max gap-1"
        >
          {MODEL_PROVIDERS.map((provider, idx) => {
            const isSelected = selectedProvider === provider.id;
            return (
              <button
                key={provider.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedProvider(provider.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`inline-flex items-center rounded-[8px] px-3 py-1.5 text-[13px] font-medium gap-2 transition-all cursor-pointer select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-1 ${
                  isSelected
                    ? "bg-white text-[#111827] shadow-xs font-semibold"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                <ProviderBadgeIcon provider={provider.label} className="h-4 w-4" />
                <span>{provider.label}</span>
                <span className="text-xs font-medium text-[#6B7280] tabular-nums">
                  {providerCounts[provider.id]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER ROW: USE-CASE / ACCURACY CHIPS (CENTER) + CHAT MODEL / AI TRAINING (RIGHT) */}
      <div className="w-full flex flex-col min-[720px]:grid min-[720px]:grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="hidden min-[720px]:block" aria-hidden="true" />

        {modelCategory === "chat" ? (
          <div
            role="group"
            aria-label="Filter models by use case"
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {MODEL_FILTER_CHIPS.map((chip) => {
              const isActive = selectedFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedFilter(chip.id)}
                  className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#111111] text-white shadow-xs"
                      : "bg-white text-[#6B7280] border border-[#E8E9EC] hover:text-[#111827] hover:bg-slate-50"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div
            role="group"
            aria-label="Filter AI training models by accuracy"
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {EMBEDDING_FILTER_CHIPS.map((chip) => {
              const isActive = selectedEmbeddingFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedEmbeddingFilter(chip.id)}
                  className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#111111] text-white shadow-xs"
                      : "bg-white text-[#6B7280] border border-[#E8E9EC] hover:text-[#111827] hover:bg-slate-50"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex justify-center min-[720px]:justify-end w-full min-[720px]:w-auto">
          <div
            role="group"
            aria-label="Filter by model type"
            className="inline-flex items-center p-1 rounded-[10px] bg-[#F3F4F6] border border-[#E8E9EC] gap-1"
          >
            <button
              type="button"
              aria-pressed={modelCategory === "chat"}
              onClick={() => setModelCategory("chat")}
              className={`px-3 py-1.5 rounded-[7px] text-xs font-medium transition-all cursor-pointer select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-1 ${
                modelCategory === "chat"
                  ? "bg-white text-[#111827] shadow-xs font-semibold"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              Chat Model
            </button>
            <button
              type="button"
              aria-pressed={modelCategory === "embedding"}
              onClick={() => setModelCategory("embedding")}
              className={`px-3 py-1.5 rounded-[7px] text-xs font-medium transition-all cursor-pointer select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-1 ${
                modelCategory === "embedding"
                  ? "bg-white text-[#111827] shadow-xs font-semibold"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              AI Training
            </button>
          </div>
        </div>
      </div>

      {/* MODEL TIERS / AI TRAINING / EMPTY STATE */}
      {modelCategory === "embedding" ? (
        <div className="w-full rounded-[12px] bg-white border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="px-4 sm:px-5 py-3.5 bg-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <h3 className="text-[15px] font-semibold text-[#111827]">
                AI Training
              </h3>
              <p className="text-[13px] font-normal text-[#6B7280]">
                Embedding models index your knowledge base for search and use no reply credits.
              </p>
            </div>
          </div>

          <div className="hidden min-[720px]:grid grid-cols-[minmax(200px,1.25fr)_minmax(220px,1.5fr)_minmax(110px,0.75fr)_minmax(120px,0.8fr)] gap-4 px-5 py-2.5 border-t border-[#F1F2F4] bg-[#F8F9FA]/60 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#9CA3AF]">
            <div>Model</div>
            <div>Use case</div>
            <div>Credits</div>
            <div className="text-right">Availability</div>
          </div>

          <div>
            {filteredEmbeddingModels.map((model) => (
              <EmbeddingModelRow key={model.id} model={model} />
            ))}
          </div>
        </div>
      ) : groupedByTier.length === 0 ? (
        <div className="p-8 sm:p-10 rounded-[12px] bg-white border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-3">
          <p className="text-sm font-medium text-[#111827]">
            No models match this filter.
          </p>
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className="inline-flex items-center justify-center rounded-md border border-[#E8E9EC] bg-white px-3 py-1.5 text-xs font-medium text-[#111827] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {groupedByTier.map((tier) => (
            <div
              key={tier.id}
              className="w-full rounded-[12px] bg-white border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden"
            >
              <div className="px-4 sm:px-5 py-3.5 bg-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <h3 className="text-[15px] font-semibold text-[#111827]">
                    {tier.label}
                  </h3>
                  <p className="text-[13px] font-normal text-[#6B7280]">
                    {tier.description}
                  </p>
                </div>
              </div>

              <div className="hidden min-[720px]:grid grid-cols-[minmax(200px,1.25fr)_minmax(220px,1.5fr)_minmax(110px,0.75fr)_minmax(120px,0.8fr)] gap-4 px-5 py-2.5 border-t border-[#F1F2F4] bg-[#F8F9FA]/60 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#9CA3AF]">
                <div>Model</div>
                <div>Use case</div>
                <div>Credits</div>
                <div className="text-right">Availability</div>
              </div>

              <div>
                {tier.models.map((model) => (
                  <ModelRow
                    key={model.id}
                    model={model}
                    providerLabel={activeProviderConfig.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
