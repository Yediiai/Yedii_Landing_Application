"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  BillingCycle,
  PlanId,
  YEDII_APPLICATION_PLANS,
  PlansHeader,
  PlanCardsCarousel,
  PlanCardsCarouselRef
} from "@/components/plans";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId>("growth");

  const carouselRef = useRef<PlanCardsCarouselRef>(null);

  const handleScrollLeft = () => {
    carouselRef.current?.scrollLeft();
  };

  const handleScrollRight = () => {
    carouselRef.current?.scrollRight();
  };

  return (
    <section id="pricing" className="py-6 md:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold w-fit">
          Transparent Pricing
        </div>

        {/* Header & Toggle */}
        <PlansHeader
          billingCycle={billingCycle}
          onBillingCycleChange={setBillingCycle}
          title="Plans & pricing"
          subtitle="Explore available plans to unlock additional features and expand your AI capabilities."
        />

        {/* Helper Text & Arrows Slider Controls */}
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

        {/* Plan Cards Horizontal Slider Carousel */}
        <PlanCardsCarousel
          ref={carouselRef}
          plans={YEDII_APPLICATION_PLANS}
          billingCycle={billingCycle}
          selectedPlanId={selectedPlanId}
          onSelectPlan={setSelectedPlanId}
        />

        {/* View Detailed Comparison Link */}
        <div className="pt-2 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141C2E] hover:underline"
          >
            <span>View full comparison table &amp; AI model credit costs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
