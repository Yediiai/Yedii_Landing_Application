"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { PlanItem, BillingCycle, PlanId } from "./types";
import { PlanCard } from "./PlanCard";

export interface PlanCardsCarouselRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

interface PlanCardsCarouselProps {
  plans: PlanItem[];
  billingCycle: BillingCycle;
  selectedPlanId: PlanId | null;
  onSelectPlan: (id: PlanId) => void;
}

export const PlanCardsCarousel = forwardRef<
  PlanCardsCarouselRef,
  PlanCardsCarouselProps
>(({ plans, billingCycle, selectedPlanId, onSelectPlan }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    },
    scrollRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    },
  }));

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto scrollbar-hide py-2 flex items-stretch gap-3.5 sm:gap-4 scroll-smooth snap-x snap-mandatory"
    >
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          billingCycle={billingCycle}
          isSelected={selectedPlanId === plan.id}
          onSelect={onSelectPlan}
        />
      ))}
    </div>
  );
});

PlanCardsCarousel.displayName = "PlanCardsCarousel";
