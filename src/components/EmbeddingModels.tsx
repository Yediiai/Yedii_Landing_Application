"use client";

import React, { useState, useMemo } from "react";
import {
  models,
  DEFAULT_MODEL_ID,
  DEFAULT_DIMENSION,
  type EmbeddingModelConfig,
} from "@/data/embedding-models";

const CHART_WIDTH = 640;
const CHART_HEIGHT = 240;
const PAD_LEFT = 46;
const PAD_RIGHT = 24;
const PAD_TOP = 20;
const PAD_BOTTOM = 36;

const PLOT_WIDTH = CHART_WIDTH - PAD_LEFT - PAD_RIGHT;
const PLOT_HEIGHT = CHART_HEIGHT - PAD_TOP - PAD_BOTTOM;

function formatStorage(dimensions: number): { label: string; bytes: number } {
  const bytes = dimensions * 4 * 1_000_000;
  if (bytes < 1_000_000_000) {
    return { label: `${Math.round(bytes / 1_000_000)} MB`, bytes };
  }
  return { label: `${(bytes / 1_000_000_000).toFixed(2)} GB`, bytes };
}

export function EmbeddingModels() {
  const [selectedModelId, setSelectedModelId] = useState<string>(DEFAULT_MODEL_ID);
  const [selectedDim, setSelectedDim] = useState<number>(DEFAULT_DIMENSION);

  const selectedModel = useMemo<EmbeddingModelConfig>(
    () => models.find((m) => m.id === selectedModelId) ?? models[0],
    [selectedModelId]
  );

  const activeDimIndex = useMemo(() => {
    const exact = selectedModel.dims.indexOf(selectedDim);
    if (exact !== -1) return exact;
    return Math.min(2, selectedModel.dims.length - 1);
  }, [selectedModel, selectedDim]);

  const activeDim = selectedModel.dims[activeDimIndex];
  const activeAcc = selectedModel.acc[activeDimIndex];
  const activeLat = selectedModel.lat[activeDimIndex];
  const activeStorage = formatStorage(activeDim);

  // Global chart bounds derived from config
  const { minLogDim, maxLogDim, minAcc, maxAcc, maxLat, maxStorageBytes } = useMemo(() => {
    const allDims = models.flatMap((m) => m.dims);
    const allAcc = models.flatMap((m) => m.acc);
    const allLat = models.flatMap((m) => m.lat);
    const minD = Math.min(...allDims);
    const maxD = Math.max(...allDims);
    return {
      minLogDim: Math.log2(minD),
      maxLogDim: Math.log2(maxD),
      minAcc: Math.floor((Math.min(...allAcc) - 3) / 5) * 5,
      maxAcc: Math.ceil((Math.max(...allAcc) + 2) / 5) * 5,
      maxLat: Math.max(...allLat),
      maxStorageBytes: maxD * 4 * 1_000_000,
    };
  }, []);

  const getX = (dim: number) => {
    const ratio = (Math.log2(dim) - minLogDim) / (maxLogDim - minLogDim);
    return PAD_LEFT + ratio * PLOT_WIDTH;
  };

  const getY = (acc: number) => {
    const ratio = (acc - minAcc) / (maxAcc - minAcc);
    return PAD_TOP + PLOT_HEIGHT - ratio * PLOT_HEIGHT;
  };

  const yTicks = useMemo(() => {
    const ticks: number[] = [];
    for (let v = minAcc; v <= maxAcc; v += 5) {
      ticks.push(v);
    }
    return ticks;
  }, [minAcc, maxAcc]);

  const xTicks = [128, 256, 512, 1024, 1536, 3072];

  const handleSelectModel = (model: EmbeddingModelConfig) => {
    setSelectedModelId(model.id);
    if (model.dims.includes(selectedDim)) {
      setSelectedDim(selectedDim);
    } else {
      const closest = model.dims.reduce((prev, curr) =>
        Math.abs(curr - selectedDim) < Math.abs(prev - selectedDim) ? curr : prev
      );
      setSelectedDim(closest);
    }
  };

  const handleModelKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleSelectModel(models[(idx + 1) % models.length]);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handleSelectModel(models[(idx - 1 + models.length) % models.length]);
    }
  };

  const recommendationText = useMemo(() => {
    const base = `${selectedModel.name} at ${activeDim} dimensions. ${selectedModel.rec}.`;
    if (activeDimIndex === 0) {
      return `${base} It is the smallest and fastest option for this model.`;
    }
    const prevDim = selectedModel.dims[activeDimIndex - 1];
    const delta = (activeAcc - selectedModel.acc[activeDimIndex - 1]).toFixed(1);
    return `${base} Moving up from ${prevDim} dimensions adds ${delta} points of accuracy.`;
  }, [selectedModel, activeDim, activeDimIndex, activeAcc]);

  const accProgress = Math.min(100, Math.max(0, activeAcc));
  const latProgress = Math.min(100, Math.max(6, (activeLat / maxLat) * 100));
  const storageProgress = Math.min(
    100,
    Math.max(4, (activeStorage.bytes / maxStorageBytes) * 100)
  );

  return (
    <section
      id="embedding-models"
      aria-labelledby="embedding-models-heading"
      className="py-14 md:py-20 bg-transparent border-t border-zinc-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          {/* Left Column: Data & AI Model Training Content + Embedding Models Header */}
          <div className="lg:w-[320px] xl:w-[340px] lg:shrink-0 space-y-8 text-center lg:text-left lg:pt-2">
            {/* Data & AI Model Training Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3 shadow-2xs">
                <span>Data &amp; AI model training</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans leading-snug">
                Trained on your knowledge, never generic guesses
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Yedii ingests your websites, docs, and help articles, chunks them cleanly, and
                generates high-precision vector embeddings so your AI agents retrieve exact answers
                in milliseconds.
              </p>
            </div>

            {/* Embedding Models Header & Subtext */}
            <div className="pt-6 border-t border-zinc-200/70">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3.5 shadow-2xs">
                <span>Embedding models</span>
              </div>
              <h2
                id="embedding-models-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans leading-[1.15]"
              >
                Choose how much accuracy you need
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Every Yedii embedding model comes in several dimensions. Pick one and see what you
                gain in accuracy and what it costs in speed and storage.
              </p>
            </div>
          </div>

          {/* Right Column: Main Interactive Card */}
          <div className="embedding-models-scope flex-1 min-w-0 w-full bg-[#FAFAFA] border border-[#E8E9EC] rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Card Left Column: Model Radio List */}
              <div className="md:w-[230px] md:shrink-0 border-b md:border-b-0 md:border-r border-[#E8E9EC] p-4 sm:p-5 bg-white">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-3 px-1">
                Model family
              </div>
              <div
                role="radiogroup"
                aria-label="Embedding model"
                className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1 md:pb-0 scrollbar-hide"
              >
                {models.map((model, idx) => {
                  const isSelected = model.id === selectedModel.id;
                  const minD = model.dims[0];
                  const maxD = model.dims[model.dims.length - 1];
                  return (
                    <button
                      key={model.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectModel(model)}
                      onKeyDown={(e) => handleModelKeyDown(e, idx)}
                      className={`shrink-0 min-w-[180px] md:min-w-0 w-auto md:w-full text-left px-3.5 py-3 rounded-xl border transition-colors motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "bg-[#141C2E] border-[#141C2E] text-white shadow-xs"
                          : "bg-[#FAFAFA] border-[#E8E9EC] text-[#141C2E] hover:bg-[#F4F5F7] hover:border-[#D4D6DC]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold tracking-tight">{model.name}</span>
                        <span
                          className={`text-[11px] font-mono tabular-nums ${
                            isSelected ? "text-zinc-300" : "text-[#6B7280]"
                          }`}
                        >
                          {minD}–{maxD}d
                        </span>
                      </div>
                      <div
                        className={`text-xs mt-1 ${
                          isSelected ? "text-zinc-300" : "text-[#6B7280]"
                        }`}
                      >
                        {model.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Area: Dimension Control + Chart + Metric Tiles + Recommendation */}
            <div className="flex-1 min-w-0 p-5 sm:p-7 space-y-6 bg-[#FAFAFA]">
              {/* Top Row: Segmented Dimension Control & Legend */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                    Output dimensions
                  </div>
                  <div
                    role="radiogroup"
                    aria-label="Output dimensions"
                    className="inline-flex items-center p-1 rounded-xl bg-white border border-[#E8E9EC] gap-1 shadow-2xs"
                  >
                    {selectedModel.dims.map((dim) => {
                      const isActive = dim === activeDim;
                      return (
                        <button
                          key={dim}
                          type="button"
                          role="radio"
                          aria-checked={isActive}
                          onClick={() => setSelectedDim(dim)}
                          className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono tabular-nums transition-colors motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141C2E] ${
                            isActive
                              ? "bg-[#141C2E] text-white shadow-xs"
                              : "text-[#565C66] hover:text-[#141C2E] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          {dim}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-4 h-0.5 bg-[#2563EB] inline-block" />
                    <span className="font-semibold text-[#141C2E]">{selectedModel.name}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-4 border-t border-dashed border-[#8A9099] inline-block" />
                    <span>Other models</span>
                  </span>
                </div>
              </div>

              {/* Line Chart (Plain Inline SVG) */}
              <div className="w-full rounded-xl border border-[#E8E9EC] bg-white p-3 sm:p-4 shadow-2xs">
                <svg
                  viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                  className="w-full h-auto overflow-visible select-none"
                  role="img"
                  aria-label={`Retrieval accuracy (nDCG@10) across dimensions on a logarithmic scale for Lite, Base, and Large models. Currently selected: ${selectedModel.name} at ${activeDim} dimensions with ${activeAcc.toFixed(1)} retrieval accuracy.`}
                >
                  {/* Horizontal Gridlines & Y-Axis Labels */}
                  {yTicks.map((tick) => {
                    const y = getY(tick);
                    return (
                      <g key={tick}>
                        <line
                          x1={PAD_LEFT}
                          x2={CHART_WIDTH - PAD_RIGHT}
                          y1={y}
                          y2={y}
                          stroke="#F0F1F3"
                          strokeWidth="1"
                        />
                        <text
                          x={PAD_LEFT - 10}
                          y={y + 3.5}
                          textAnchor="end"
                          className="fill-[#8A9099] text-[10px] font-mono"
                        >
                          {tick}
                        </text>
                      </g>
                    );
                  })}

                  {/* Y-axis Title */}
                  <text
                    x={PAD_LEFT}
                    y={10}
                    className="fill-[#6B7280] text-[10px] font-medium"
                  >
                    Retrieval accuracy (nDCG@10)
                  </text>

                  {/* Vertical Gridlines & X-Axis Labels (Log Scale) */}
                  {xTicks.map((dim) => {
                    const x = getX(dim);
                    const isActiveTick = dim === activeDim;
                    return (
                      <g key={dim}>
                        <line
                          x1={x}
                          x2={x}
                          y1={PAD_TOP}
                          y2={CHART_HEIGHT - PAD_BOTTOM}
                          stroke={isActiveTick ? "#DBEAFE" : "#F4F5F7"}
                          strokeWidth="1"
                        />
                        <text
                          x={x}
                          y={CHART_HEIGHT - 12}
                          textAnchor="middle"
                          className={`text-[10px] font-mono ${
                            isActiveTick ? "fill-[#2563EB] font-bold" : "fill-[#8A9099]"
                          }`}
                        >
                          {dim}
                        </text>
                      </g>
                    );
                  })}

                  {/* Unselected Model Lines (Thin & Dashed) */}
                  {models
                    .filter((m) => m.id !== selectedModel.id)
                    .map((model) => {
                      const d = model.dims
                        .map((dim, i) => `${i === 0 ? "M" : "L"} ${getX(dim)} ${getY(model.acc[i])}`)
                        .join(" ");
                      return (
                        <g key={model.id}>
                          <path
                            d={d}
                            fill="none"
                            stroke="#B8BDC7"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          {model.dims.map((dim, i) => (
                            <circle
                              key={dim}
                              cx={getX(dim)}
                              cy={getY(model.acc[i])}
                              r="2.5"
                              fill="#B8BDC7"
                            />
                          ))}
                        </g>
                      );
                    })}

                  {/* Selected Model Line (Thick Blue Accent) */}
                  {(() => {
                    const d = selectedModel.dims
                      .map(
                        (dim, i) =>
                          `${i === 0 ? "M" : "L"} ${getX(dim)} ${getY(selectedModel.acc[i])}`
                      )
                      .join(" ");
                    return (
                      <g>
                        <path
                          d={d}
                          fill="none"
                          stroke="#2563EB"
                          className="transition-all duration-200 motion-reduce:transition-none"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {selectedModel.dims.map((dim, i) => {
                          const cx = getX(dim);
                          const cy = getY(selectedModel.acc[i]);
                          const isChosen = dim === activeDim;
                          return (
                            <g
                              key={dim}
                              onClick={() => setSelectedDim(dim)}
                              className="cursor-pointer"
                            >
                              <circle cx={cx} cy={cy} r="12" fill="transparent" />
                              {isChosen ? (
                                <>
                                  <circle cx={cx} cy={cy} r="9" fill="#2563EB" fillOpacity="0.14" />
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r="5"
                                    fill="#2563EB"
                                    stroke="#FFFFFF"
                                    strokeWidth="2"
                                  />
                                </>
                              ) : (
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r="3.5"
                                  fill="#FFFFFF"
                                  stroke="#2563EB"
                                  strokeWidth="2"
                                />
                              )}
                            </g>
                          );
                        })}
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Three Metric Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Tile 1: Retrieval accuracy */}
                <div className="p-4 rounded-xl border border-[#E8E9EC] bg-white shadow-2xs">
                  <div className="text-xs font-medium text-[#6B7280]">Retrieval accuracy</div>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold tracking-tight text-[#141C2E] tabular-nums">
                      {activeAcc.toFixed(1)}
                    </span>
                    <span className="text-xs text-[#8A9099] font-mono">nDCG@10</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-[#F0F1F3] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2563EB] transition-all duration-200 motion-reduce:transition-none"
                      style={{ width: `${accProgress}%` }}
                    />
                  </div>
                </div>

                {/* Tile 2: Latency */}
                <div className="p-4 rounded-xl border border-[#E8E9EC] bg-white shadow-2xs">
                  <div className="text-xs font-medium text-[#6B7280]">
                    Latency (p50 per query)
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold tracking-tight text-[#141C2E] tabular-nums">
                      {activeLat}
                    </span>
                    <span className="text-xs text-[#8A9099] font-mono">ms</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-[#F0F1F3] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#141C2E] transition-all duration-200 motion-reduce:transition-none"
                      style={{ width: `${latProgress}%` }}
                    />
                  </div>
                </div>

                {/* Tile 3: Storage per 1M vectors */}
                <div className="p-4 rounded-xl border border-[#E8E9EC] bg-white shadow-2xs">
                  <div className="text-xs font-medium text-[#6B7280]">
                    Storage per 1M vectors
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold tracking-tight text-[#141C2E] tabular-nums">
                      {activeStorage.label}
                    </span>
                    <span className="text-xs text-[#8A9099] font-mono">float32</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-[#F0F1F3] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#141C2E] transition-all duration-200 motion-reduce:transition-none"
                      style={{ width: `${storageProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Recommendation Line */}
              <div className="px-4 py-3 rounded-xl bg-white border border-[#E8E9EC] text-xs sm:text-sm text-[#565C66] leading-relaxed">
                {recommendationText}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
