"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { OPENAI_MODELS, GEMINI_MODELS } from "./types";

export function AiModelUsageSection() {
  const [isOpenAiExpanded, setIsOpenAiExpanded] = useState<boolean>(true);
  const [isGeminiExpanded, setIsGeminiExpanded] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col gap-4 pt-6 border-t-[0.8px] border-[#EAEBEE]">
      <div>
        <h2 className="text-[17px] font-semibold text-[#141C2E] tracking-[-0.27px]">
          AI model usage
        </h2>
        <p className="text-[14px] font-normal text-[#6B7280] leading-[21.7px] max-w-[680px]">
          Each reply your agent sends spends credits from your plan&apos;s allowance. More capable models use more credits.
        </p>
      </div>

      {/* OpenAI Card */}
      <div className="w-full rounded-[12px] border-[0.8px] border-[#E8E9EC] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <button
          type="button"
          onClick={() => setIsOpenAiExpanded(!isOpenAiExpanded)}
          className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer select-none text-left"
        >
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap min-w-0 pr-2">
            <div className="w-5 h-5 rounded-full bg-[#111111] p-[3.5px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
              </svg>
            </div>
            <span className="text-[14.5px] font-semibold text-[#141C2E] tracking-[-0.17px]">
              OpenAI
            </span>
            <span className="text-[12.5px] sm:text-[13px] font-normal text-[#8A9099]">
              {OPENAI_MODELS.length} models · 1–50 credits / reply
            </span>
          </div>
          {isOpenAiExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#565C66]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#565C66]" />
          )}
        </button>

        {isOpenAiExpanded && (
          <div className="w-full overflow-x-auto border-t border-[#F1F2F4]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#F1F2F4] bg-[#F8F9FA]/60">
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Model
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Credits
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Capability
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099] text-right">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F2F4] text-[13.5px]">
                {OPENAI_MODELS.map((model, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-[#22262E]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#111111] p-[3px] flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
                          </svg>
                        </div>
                        <span>{model.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#22262E]">
                      {model.credits}
                    </td>
                    <td className="py-3 px-4 font-normal text-[#6B7280]">
                      {model.capability}
                    </td>
                    <td className="py-3 px-4 font-normal text-[#4A5058] text-right">
                      {model.availability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Google Gemini Card */}
      <div className="w-full rounded-[12px] border-[0.8px] border-[#E8E9EC] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <button
          type="button"
          onClick={() => setIsGeminiExpanded(!isGeminiExpanded)}
          className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer select-none text-left"
        >
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap min-w-0 pr-2">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <Image
                src="/images/providers/gemini.png"
                alt="Gemini"
                width={20}
                height={20}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <span className="text-[14.5px] font-semibold text-[#141C2E] tracking-[-0.17px]">
              Google Gemini &amp; DeepSeek
            </span>
            <span className="text-[12.5px] sm:text-[13px] font-normal text-[#8A9099]">
              {GEMINI_MODELS.length} models · 1–8 credits / reply
            </span>
          </div>
          {isGeminiExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#565C66]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#565C66]" />
          )}
        </button>

        {isGeminiExpanded && (
          <div className="w-full overflow-x-auto border-t border-[#F1F2F4]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#F1F2F4] bg-[#F8F9FA]/60">
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Model
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Credits
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099]">
                    Capability
                  </th>
                  <th className="py-2.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.81px] text-[#8A9099] text-right">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F2F4] text-[13.5px]">
                {GEMINI_MODELS.map((model, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-[#22262E]">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                        <span>{model.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#22262E]">
                      {model.credits}
                    </td>
                    <td className="py-3 px-4 font-normal text-[#6B7280]">
                      {model.capability}
                    </td>
                    <td className="py-3 px-4 font-normal text-[#4A5058] text-right">
                      {model.availability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
