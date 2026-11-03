"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function SupportedAiModelsBadges() {
  return (
    <div className="flex items-center justify-between gap-1.5 py-0.5 border-b border-[#F1F2F4] pb-2.5 mb-2.5">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-[14px] h-[14px] flex items-center justify-center shrink-0">
          <Check className="w-[12px] h-[12px] stroke-[2.5] text-[#141C2E]" />
        </div>
        <span className="text-[13.5px] font-normal text-[#3A4049] leading-[19.6px] whitespace-nowrap">
          AI Models
        </span>
      </div>

      {/* OVERLAPPING LOGOS with hover scale and crisp styling */}
      <div
        className="flex items-center -space-x-1.5 shrink-0 pl-1"
        title="Supported AI Models: OpenAI GPT, Claude, Gemini, DeepSeek, Grok"
      >
        {/* OpenAI / GPT SVG */}
        <div
          title="OpenAI GPT"
          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
          </svg>
        </div>

        {/* Anthropic Claude */}
        <div
          title="Anthropic Claude"
          className="w-[20px] h-[20px] rounded-full bg-[#FBF0EA] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/claude.png"
            alt="Claude"
            width={18}
            height={18}
            className="w-full h-full object-contain rounded-full"
            unoptimized
          />
        </div>

        {/* Google Gemini */}
        <div
          title="Google Gemini"
          className="w-[20px] h-[20px] rounded-full bg-white border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/gemini.png"
            alt="Gemini"
            width={18}
            height={18}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>

        {/* DeepSeek */}
        <div
          title="DeepSeek"
          className="w-[20px] h-[20px] rounded-full bg-[#EEF4FF] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/deepseek.png"
            alt="DeepSeek"
            width={18}
            height={18}
            className="w-full h-full object-contain rounded-full"
            unoptimized
          />
        </div>

        {/* xAI Grok SVG */}
        <div
          title="xAI Grok"
          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
