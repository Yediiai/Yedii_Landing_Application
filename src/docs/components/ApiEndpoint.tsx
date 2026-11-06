"use client";

import React, { useState } from "react";
import { ApiEndpointDoc } from "../data/types";
import { CodeTabs } from "./CodeTabs";
import { Play, ChevronDown, ChevronRight, Shield, Clock } from "lucide-react";

interface ApiEndpointProps {
  endpoint: ApiEndpointDoc;
}

export function ApiEndpoint({ endpoint }: ApiEndpointProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [testResponse, setTestResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const methodColors: Record<string, string> = {
    GET: "bg-blue-50 text-blue-700 border-blue-200",
    POST: "bg-emerald-50 text-emerald-700 border-emerald-200",
    PATCH: "bg-amber-50 text-amber-700 border-amber-200",
    PUT: "bg-purple-50 text-purple-700 border-purple-200",
    DELETE: "bg-red-50 text-red-700 border-red-200",
  };

  const handleRunMockTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTestResponse(
        endpoint.responseBody
          ? endpoint.responseBody.example
          : JSON.stringify({ status: "success", message: "Mock call succeeded" }, null, 2)
      );
      setIsLoading(false);
    }, 500);
  };

  const codeTabsList = [
    { label: "cURL", language: "bash", code: endpoint.codeExamples.curl },
    { label: "JavaScript", language: "javascript", code: endpoint.codeExamples.javascript },
    { label: "TypeScript", language: "typescript", code: endpoint.codeExamples.typescript },
    { label: "Node.js", language: "javascript", code: endpoint.codeExamples.node },
  ];

  return (
    <div id={endpoint.id} className="my-8 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs overflow-hidden scroll-mt-24 text-xs">
      {/* Endpoint Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`px-2.5 py-1 rounded font-mono font-bold text-xs border ${
              methodColors[endpoint.method] || "bg-zinc-100 text-zinc-700"
            }`}
          >
            {endpoint.method}
          </span>
          <code className="text-sm sm:text-base font-mono font-semibold text-[#111827]">
            {endpoint.path}
          </code>
          {endpoint.requiresAuth && (
            <span className="flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
              <Shield className="w-3 h-3 text-amber-500" />
              <span>{endpoint.authType || "Bearer"} Auth</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {endpoint.rateLimit && (
            <span className="hidden md:flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
              <Clock className="w-3 h-3" />
              <span>{endpoint.rateLimit}</span>
            </span>
          )}
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-[#E5E7EB] p-5 space-y-6">
          {/* Summary & Description */}
          <div>
            <h4 className="text-base font-bold text-[#111827] mb-1">
              {endpoint.summary}
            </h4>
            <p className="text-[#4B5563] leading-relaxed text-sm">
              {endpoint.description}
            </p>
          </div>

          {/* Path Parameters Table */}
          {endpoint.pathParams && endpoint.pathParams.length > 0 && (
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-500 mb-2 font-mono">
                Path Parameters
              </h5>
              <div className="border border-[#E5E7EB] rounded-lg overflow-x-auto bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] font-mono text-[#4B5563]">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Required</th>
                      <th className="p-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] font-sans">
                    {endpoint.pathParams.map((param, i) => (
                      <tr key={i}>
                        <td className="p-2.5 font-mono font-semibold text-[#111827]">
                          {param.name}
                        </td>
                        <td className="p-2.5 font-mono text-zinc-500">{param.type}</td>
                        <td className="p-2.5 text-red-600 font-medium">Yes</td>
                        <td className="p-2.5 text-[#374151]">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Query Parameters Table */}
          {endpoint.queryParams && endpoint.queryParams.length > 0 && (
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-500 mb-2 font-mono">
                Query Parameters
              </h5>
              <div className="border border-[#E5E7EB] rounded-lg overflow-x-auto bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] font-mono text-[#4B5563]">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Required</th>
                      <th className="p-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] font-sans">
                    {endpoint.queryParams.map((param, i) => (
                      <tr key={i}>
                        <td className="p-2.5 font-mono font-semibold text-[#111827]">
                          {param.name}
                        </td>
                        <td className="p-2.5 font-mono text-zinc-500">{param.type}</td>
                        <td className="p-2.5 font-medium">{param.required ? <span className="text-red-600">Yes</span> : "No"}</td>
                        <td className="p-2.5 text-[#374151]">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Code Generation Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-500 font-mono">
                Request Example
              </h5>
              <button
                onClick={handleRunMockTest}
                disabled={isLoading}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors cursor-pointer shadow-2xs"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>{isLoading ? "Running..." : "Test Request"}</span>
              </button>
            </div>

            <CodeTabs tabs={codeTabsList} />
          </div>

          {/* Response Schema & Output */}
          {endpoint.responseBody && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-500 font-mono">
                  Response ({endpoint.responseBody.statusCode} OK)
                </h5>
                <span className="text-[11px] font-mono text-zinc-500">
                  {endpoint.responseBody.contentType}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#0B0F19] text-emerald-400 font-mono text-xs overflow-x-auto border border-[#E2E8F0]">
                <pre>{testResponse || endpoint.responseBody.example}</pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
