"use client";

import React, { useState, useEffect } from "react";
import { Loader2, X, Check, ArrowRight, AlertCircle } from "lucide-react";

export type CompanySize =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1000+";

interface EnterpriseInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companySize?: string;
}

const COMPANY_SIZE_OPTIONS: { label: string; value: CompanySize }[] = [
  { label: "1 – 10 employees", value: "1-10" },
  { label: "11 – 50 employees", value: "11-50" },
  { label: "51 – 200 employees", value: "51-200" },
  { label: "201 – 500 employees", value: "201-500" },
  { label: "501 – 1,000 employees", value: "501-1000" },
  { label: "1,000+ employees", value: "1000+" },
];

export function EnterpriseInquiryDialog({
  open,
  onOpenChange,
}: EnterpriseInquiryDialogProps) {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companySize, setCompanySize] = useState<CompanySize>("51-200");
  const [message, setMessage] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      setIsSubmitted(false);
      setErrorMessage(null);
      setFieldErrors({});
    }
  }, [open]);

  // Lock background scroll and listen to ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const validate = (): FormErrors => {
    const errors: FormErrors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail.trim()) {
      errors.workEmail = "Work email is required";
    } else if (!emailPattern.test(workEmail.trim())) {
      errors.workEmail = "Please enter a valid email address";
    }

    if (!companySize) {
      errors.companySize = "Company size is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/enterprise-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          workEmail: workEmail.trim().toLowerCase(),
          phoneNumber: phoneNumber.trim() || undefined,
          companySize,
          message: message.trim() || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enterprise inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Enterprise inquiry submission failed:", err);
      setErrorMessage(
        err.message || "Failed to submit enterprise inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enterprise-dialog-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="flex flex-col w-[92vw] max-w-[420px] sm:w-[420px] sm:max-w-[420px] p-5 sm:p-6 rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] gap-0 focus:outline-none transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3.5 border-b border-[#F1F5F9]">
          <div className="flex flex-col pr-2">
            <h3
              id="enterprise-dialog-title"
              className="text-[17px] font-semibold text-[#0F172A] leading-tight tracking-[-0.2px] m-0"
            >
              Contact Enterprise
            </h3>
            <p className="text-[12.5px] text-[#64748B] mt-1 leading-snug">
              Tell us about your team and our sales team will reach out shortly.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
            className="w-7 h-7 -mr-1 -mt-0.5 rounded-[8px] flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer outline-none shrink-0"
          >
            <X className="h-4 w-4 stroke-[2]" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E8F5EE] border-2 border-[#D1F0E1] text-[#1B7A57] flex items-center justify-center mb-3">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <h4 className="text-[16px] font-semibold text-[#0F172A]">
              Inquiry Sent
            </h4>
            <p className="text-[13px] text-[#475569] leading-relaxed mt-1.5">
              Thank you, <span className="font-semibold text-[#0F172A]">{fullName}</span>.
              We will contact you at{" "}
              <span className="font-semibold text-[#0F172A]">{workEmail}</span> within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-5 w-full h-[38px] rounded-[9px] bg-[#0F172A] hover:bg-[#1E293B] text-white text-[13px] font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.99]"
            >
              Done
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 pt-3.5">
            {errorMessage && (
              <div className="p-2.5 rounded-[8px] bg-[#FEF2F2] border border-[#FECACA] text-[12px] font-medium text-[#DC2626] flex items-start gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-[#334155]">
                Full Name <span className="text-[#DC2626]">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (fieldErrors.fullName) {
                    setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
                  }
                }}
                placeholder="e.g. Alex Morgan"
                className="h-[38px] px-3 rounded-[8px] border border-[#CBD5E1] bg-white text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] shadow-2xs focus:border-[#0F172A] focus:outline-none transition-all"
              />
              {fieldErrors.fullName && (
                <span className="text-[11.5px] font-medium text-[#DC2626] leading-none mt-0.5 flex items-center gap-1">
                  {fieldErrors.fullName}
                </span>
              )}
            </div>

            {/* Work Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-[#334155]">
                Work Email <span className="text-[#DC2626]">*</span>
              </label>
              <input
                type="email"
                value={workEmail}
                onChange={(e) => {
                  setWorkEmail(e.target.value);
                  if (fieldErrors.workEmail) {
                    setFieldErrors((prev) => ({ ...prev, workEmail: undefined }));
                  }
                }}
                placeholder="e.g. alex@company.com"
                className="h-[38px] px-3 rounded-[8px] border border-[#CBD5E1] bg-white text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] shadow-2xs focus:border-[#0F172A] focus:outline-none transition-all"
              />
              {fieldErrors.workEmail && (
                <span className="text-[11.5px] font-medium text-[#DC2626] leading-none mt-0.5 flex items-center gap-1">
                  {fieldErrors.workEmail}
                </span>
              )}
            </div>

            {/* Phone & Company Size in compact 2-cols */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium text-[#334155]">
                  Phone <span className="text-[11px] font-normal text-[#94A3B8]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 555 0000"
                  className="h-[38px] px-3 rounded-[8px] border border-[#CBD5E1] bg-white text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] shadow-2xs focus:border-[#0F172A] focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium text-[#334155]">
                  Company Size <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={companySize}
                    onChange={(e) => {
                      setCompanySize(e.target.value as CompanySize);
                      if (fieldErrors.companySize) {
                        setFieldErrors((prev) => ({ ...prev, companySize: undefined }));
                      }
                    }}
                    className="w-full h-[38px] pl-2.5 pr-7 rounded-[8px] border border-[#CBD5E1] bg-white text-[12.5px] text-[#0F172A] shadow-2xs focus:border-[#0F172A] focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    {COMPANY_SIZE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#64748B]">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                {fieldErrors.companySize && (
                  <span className="text-[11.5px] font-medium text-[#DC2626] leading-none mt-0.5 flex items-center gap-1">
                    {fieldErrors.companySize}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-[#334155]">
                Requirements <span className="text-[11px] font-normal text-[#94A3B8]">(Optional)</span>
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Expected volume, models, or custom integrations..."
                className="w-full p-2.5 rounded-[8px] border border-[#CBD5E1] bg-white text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] shadow-2xs focus:border-[#0F172A] focus:outline-none transition-all resize-none leading-snug"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#F1F5F9] mt-0.5">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
                className="px-3.5 h-[36px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[12.5px] font-medium text-[#475569] transition-all cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 h-[36px] rounded-[8px] bg-[#0F172A] hover:bg-[#1E293B] text-white text-[12.5px] font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60 shadow-xs active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
