"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function SolutionsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: SolutionsMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[880px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      role="menu"
      aria-label="Solutions Mega Menu"
    >
      <div className="rounded-none bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-6 grid grid-cols-3 gap-6">
          {/* ======================================================== */}
          {/* 1. BY USE CASE                                           */}
          {/* ======================================================== */}
          <div className="flex flex-col">
            <div className="text-[11.5px] font-semibold text-[#8A9099] uppercase tracking-wider mb-3 select-none">
              By Use Case
            </div>

            <div className="space-y-3.5">
              <Link
                href="/solutions/use-cases/customer-support"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Customer Support
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Automate tier-1 tickets and everyday inquiries 24/7
                </div>
              </Link>

              <Link
                href="/solutions/use-cases/ecommerce-support"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  E-commerce Support
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Order tracking, returns, sizing, and product questions
                </div>
              </Link>

              <Link
                href="/solutions/use-cases/technical-support"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Technical Support
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Code-aware troubleshooting and developer API docs
                </div>
              </Link>

              <Link
                href="/solutions/use-cases/sales-assistance"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Sales Assistance
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Qualify inbound leads and answer purchasing questions
                </div>
              </Link>

              <Link
                href="/solutions/use-cases/customer-success"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Customer Success
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Guided onboarding, milestone setup, and feature discovery
                </div>
              </Link>

              <Link
                href="/solutions/use-cases/billing-support"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Billing &amp; Subscription Support
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Demystify invoices, prorations, and subscription renewals
                </div>
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. BY INDUSTRY                                           */}
          {/* ======================================================== */}
          <div className="flex flex-col">
            <div className="text-[11.5px] font-semibold text-[#8A9099] uppercase tracking-wider mb-3 select-none">
              By Industry
            </div>

            <div className="space-y-3.5">
              <Link
                href="/solutions/industries/retail-ecommerce"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Retail &amp; E-commerce
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Order status, returns, and digital storefront concierge
                </div>
              </Link>

              <Link
                href="/solutions/industries/saas-technology"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  SaaS &amp; Technology
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Software feature walkthroughs, RBAC, and developer APIs
                </div>
              </Link>

              <Link
                href="/solutions/industries/financial-services"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Financial Services
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Compliant inquiries with PII masking &amp; Zero Data Retention
                </div>
              </Link>

              <Link
                href="/solutions/industries/travel-hospitality"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Travel &amp; Hospitality
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Multilingual booking, check-in rules, and guest care
                </div>
              </Link>

              <Link
                href="/solutions/industries/education"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Education
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Admissions triage, enrollment schedules, and student FAQs
                </div>
              </Link>

              <Link
                href="/solutions/industries/logistics"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Logistics &amp; Supply Chain
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Shipment check-calls, customs documentation, and dispatch
                </div>
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. BY TEAM                                               */}
          {/* ======================================================== */}
          <div className="flex flex-col">
            <div className="text-[11.5px] font-semibold text-[#8A9099] uppercase tracking-wider mb-3 select-none">
              By Team
            </div>

            <div className="space-y-3.5">
              <Link
                href="/solutions/use-cases#by-team"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Customer Experience
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Elevate CSAT with instant, empathetic resolution
                </div>
              </Link>

              <Link
                href="/solutions/use-cases#by-team"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Support Operations
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Eliminate repetitive queues and scale without adding headcount
                </div>
              </Link>

              <Link
                href="/solutions/use-cases#by-team"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Sales Teams
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Capture inbound enterprise pipeline 24/7 on high-intent pages
                </div>
              </Link>

              <Link
                href="/solutions/use-cases#by-team"
                onClick={onClose}
                className="group block"
              >
                <div className="text-[13.5px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                  Customer Success Teams
                </div>
                <div className="text-[12px] text-[#6B7280] font-normal leading-snug mt-0.5">
                  Automate onboarding checklists and accelerate time-to-value
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM ACTION BAR                                        */}
        {/* ======================================================== */}
        <div className="px-6 py-3.5 bg-[#F9FAFB] border-t border-[#EAEAEC] flex items-center justify-between">
          <div className="text-[12.5px] text-[#4B5563]">
            Explore how enterprise organizations use Yedii to automate support.
          </div>
          <Link
            href="/solutions/use-cases"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#141C2E] hover:text-black transition-colors group"
          >
            <span>View All Use Cases &amp; Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
