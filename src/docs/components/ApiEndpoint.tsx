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
    GET: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
    POST: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
    PATCH: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
    PUT: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
    DELETE: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
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
    <div id={endpoint.id} className="my-8 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-2xs overflow-hidden scroll-mt-24 text-xs">
      {/* Endpoint Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`px-2 py-0.5 rounded font-mono font-semibold text-xs border ${
              methodColors[endpoint.method] || "bg-zinc-100 text-zinc-700"
            }`}
          >
            {endpoint.method}
          </span>
          <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-100">
            {endpoint.path}
          </code>
          {endpoint.requiresAuth && (
            <span className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
              <Shield className="w-3 h-3 text-zinc-400" />
              <span>{endpoint.authType || "Bearer"} Auth</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {endpoint.rateLimit && (
            <span className="hidden md:flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
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
        <div className="border-t border-zinc-200/80 dark:border-zinc-800 p-5 space-y-6">
          {/* Summary & Description */}
          <div>
            <h4 className="text-base font-semibold text-zinc-950 dark:text-zinc-50 mb-1">
              {endpoint.summary}
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
              {endpoint.description}
            </p>
          </div>

          {/* Path Parameters Table */}
          {endpoint.pathParams && endpoint.pathParams.length > 0 && (
            <div>
              <h5 className="font-semibold text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                Path Parameters
              </h5>
              <div className="border border-zinc-200/80 dark:border-zinc-800 rounded-lg overflow-x-auto bg-white dark:bg-zinc-900/40">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200/80 dark:border-zinc-800 font-mono text-zinc-600 dark:text-zinc-400">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Required</th>
                      <th className="p-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 font-sans">
                    {endpoint.pathParams.map((param, i) => (
                      <tr key={i}>
                        <td className="p-2.5 font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                          {param.name}
                        </td>
                        <td className="p-2.5 font-mono text-zinc-500">{param.type}</td>
                        <td className="p-2.5 text-zinc-900 dark:text-zinc-100 font-medium">Yes</td>
                        <td className="p-2.5 text-zinc-600 dark:text-zinc-400">{param.description}</td>
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
              <h5 className="font-semibold text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                Query Parameters
              </h5>
              <div className="border border-zinc-200/80 dark:border-zinc-800 rounded-lg overflow-x-auto bg-white dark:bg-zinc-900/40">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200/80 dark:border-zinc-800 font-mono text-zinc-600 dark:text-zinc-400">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Required</th>
                      <th className="p-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 font-sans">
                    {endpoint.queryParams.map((param, i) => (
                      <tr key={i}>
                        <td className="p-2.5 font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                          {param.name}
                        </td>
                        <td className="p-2.5 font-mono text-zinc-500">{param.type}</td>
                        <td className="p-2.5 font-medium">{param.required ? <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Yes</span> : <span className="text-zinc-400">No</span>}</td>
                        <td className="p-2.5 text-zinc-600 dark:text-zinc-400">{param.description}</td>
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
              <h5 className="font-semibold text-xs uppercase tracking-wider text-zinc-500 font-mono">
                Request Example
              </h5>
              <button
                onClick={handleRunMockTest}
                disabled={isLoading}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-medium text-xs transition-colors cursor-pointer shadow-2xs"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isLoading ? "Running..." : "Test Request"}</span>
              </button>
            </div>

            <CodeTabs tabs={codeTabsList} />
          </div>

          {/* Response Schema & Output */}
          {endpoint.responseBody && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-xs uppercase tracking-wider text-zinc-500 font-mono">
                  Response ({endpoint.responseBody.statusCode} OK)
                </h5>
                <span className="text-[11px] font-mono text-zinc-500">
                  {endpoint.responseBody.contentType}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#0C0D12] text-zinc-200 font-mono text-xs overflow-x-auto border border-zinc-800 shadow-2xs">
                <pre>{testResponse || endpoint.responseBody.example}</pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
