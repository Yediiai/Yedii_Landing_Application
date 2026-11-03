"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BillingCycle, PlanId, YEDII_APPLICATION_PLANS } from "./types";
import { PlansHeader } from "./PlansHeader";
import { PlanCardsCarousel, PlanCardsCarouselRef } from "./PlanCardsCarousel";
import { AiModelUsageSection } from "./AiModelUsageSection";
import { CompareFeaturesTable } from "./CompareFeaturesTable";

interface PlansViewProps {
  initialCycle?: BillingCycle;
  initialPlanId?: PlanId;
  showAiModelUsage?: boolean;
  showCompareTable?: boolean;
}

export function PlansView({
  initialCycle = "yearly",
  initialPlanId = "growth",
  showAiModelUsage = true,
  showCompareTable = true,
}: PlansViewProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId>(initialPlanId);
  const carouselRef = useRef<PlanCardsCarouselRef>(null);

  const handleScrollLeft = () => {
    carouselRef.current?.scrollLeft();
  };

  const handleScrollRight = () => {
    carouselRef.current?.scrollRight();
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* 1. Plans Header */}
      <PlansHeader
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      {/* 2. Helper Text & Slider Arrows Controls (Matching Yedii_Application CurrentPlanBanner.tsx) */}
      <div className="w-full flex items-center justify-between px-1">
        <span className="text-[13.5px] font-normal text-[#6B7280]">
          {YEDII_APPLICATION_PLANS.length} plans · use the arrows or scroll sideways to see them all
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleScrollLeft}
            aria-label="Scroll left"
            className="w-7 h-7 rounded-[7px] border border-[#E0E2E6] bg-white hover:bg-slate-50 text-[#565C66] hover:text-[#17181C] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleScrollRight}
            aria-label="Scroll right"
            className="w-7 h-7 rounded-[7px] border border-[#E0E2E6] bg-white hover:bg-slate-50 text-[#565C66] hover:text-[#17181C] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Horizontal Carousel Slider with 296px spacious cards */}
      <PlanCardsCarousel
        ref={carouselRef}
        plans={YEDII_APPLICATION_PLANS}
        billingCycle={billingCycle}
        selectedPlanId={selectedPlanId}
        onSelectPlan={setSelectedPlanId}
      />

      {/* 4. AI Model Usage Section */}
      {showAiModelUsage && <AiModelUsageSection />}

      {/* 5. Compare All Features Table */}
      {showCompareTable && (
        <CompareFeaturesTable plans={YEDII_APPLICATION_PLANS} />
      )}
    </div>
  );
}
