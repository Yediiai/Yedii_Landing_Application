"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

// ─── Config ──────────────────────────────────────────────────────────────────
// All positions (0–1 fraction of container), speeds, colors, and drift values
// are defined here. Edit this array to tweak every aspect of the animation.

interface ProviderConfig {
  name: string;
  src: string;
  alt: string;
  /** Pill center X as a fraction of container width (0–1) */
  cx: number;
  /** Pill center Y as a fraction of container height (0–1) */
  cy: number;
  /** Max drift in pixels [x, y] */
  driftAmp: [number, number];
  /** Seconds per full float cycle (6–10) */
  speed: number;
  /** Phase offset in seconds — negative = already mid-cycle */
  delay: number;
  /** Dotted line color (rgba string) */
  lineColor: string;
}

const PROVIDERS: ProviderConfig[] = [
  {
    name: "OpenAI",
    src: "/images/providers/openai.svg",
    alt: "OpenAI",
    cx: 0.14,
    cy: 0.1,
    driftAmp: [5, 8],
    speed: 7.2,
    delay: -0.4,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Claude 3.5",
    src: "/images/providers/claude.svg",
    alt: "Claude",
    cx: 0.84,
    cy: 0.14,
    driftAmp: [4, 9],
    speed: 8.4,
    delay: -1.7,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Mistral",
    src: "/images/providers/mistral.svg",
    alt: "Mistral",
    cx: 0.08,
    cy: 0.42,
    driftAmp: [6, 6],
    speed: 6.8,
    delay: -2.9,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Grok",
    src: "/images/providers/grok.svg",
    alt: "Grok",
    cx: 0.92,
    cy: 0.38,
    driftAmp: [5, 7],
    speed: 7.6,
    delay: -0.9,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "DeepSeek",
    src: "/images/providers/deepseek.svg",
    alt: "DeepSeek",
    cx: 0.14,
    cy: 0.72,
    driftAmp: [7, 5],
    speed: 9.1,
    delay: -3.6,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Cohere",
    src: "/images/providers/cohere.svg",
    alt: "Cohere",
    cx: 0.86,
    cy: 0.68,
    driftAmp: [5, 8],
    speed: 8.0,
    delay: -2.1,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Llama 3.3",
    src: "/images/providers/meta.svg",
    alt: "Meta Llama",
    cx: 0.3,
    cy: 0.9,
    driftAmp: [8, 4],
    speed: 9.6,
    delay: -4.2,
    lineColor: "rgba(100,116,139,0.35)",
  },
  {
    name: "Gemini 1.5",
    src: "/images/providers/gemini.svg",
    alt: "Google Gemini",
    cx: 0.72,
    cy: 0.9,
    driftAmp: [6, 5],
    speed: 7.9,
    delay: -1.2,
    lineColor: "rgba(100,116,139,0.35)",
  },
];

// Hub appearance
const HUB_RADIUS = 16;
const HUB_COLOR = "#141C2E";
const HUB_RING_COLOR = "rgba(20,28,46,0.18)";
const RIPPLE_COUNT = 2;
const RIPPLE_MAX_RADIUS = 52;
const TRAVEL_DOT_RADIUS = 2.5;
const TRAVEL_DOT_COLOR = "#141C2E";

// ─── Component ────────────────────────────────────────────────────────────────

export function LLMOrbitCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const [pillOffsets, setPillOffsets] = useState<{ dx: number; dy: number }[]>(
    () => PROVIDERS.map(() => ({ dx: 0, dy: 0 }))
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredRef = useRef<number | null>(null);

  // Keep ref in sync for use inside rAF (avoid stale closures)
  useEffect(() => {
    hoveredRef.current = hoveredIndex;
  }, [hoveredIndex]);

  // Detect prefers-reduced-motion via useSyncExternalStore (SSR-safe, no setState-in-effect)
  const reducedMotion = useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false // server snapshot
  );

  // ── Draw canvas ─────────────────────────────────────────────────────────────
  const draw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      t: number, // seconds elapsed
      offsets: { dx: number; dy: number }[]
    ) => {
      ctx.clearRect(0, 0, w, h);

      const hubX = w * 0.5;
      const hubY = h * 0.5;

      // ── Ripple rings ──────────────────────────────────────────────────────
      if (!reducedMotion) {
        for (let r = 0; r < RIPPLE_COUNT; r++) {
          const phase = (t / 3 + r / RIPPLE_COUNT) % 1; // 0→1 per ring
          const rRadius = phase * RIPPLE_MAX_RADIUS;
          const alpha = (1 - phase) * 0.22;
          ctx.beginPath();
          ctx.arc(hubX, hubY, rRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(20,28,46,${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // ── Lines + travel dots ───────────────────────────────────────────────
      PROVIDERS.forEach((p, i) => {
        const pillX = p.cx * w + offsets[i].dx;
        const pillY = p.cy * h + offsets[i].dy;

        // Dotted line from hub to pill center
        ctx.beginPath();
        ctx.setLineDash([3, 6]);
        ctx.strokeStyle = p.lineColor;
        ctx.lineWidth = 1;
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(pillX, pillY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling dot along the line
        if (!reducedMotion) {
          const travelPhase =
            ((t / 2.4 + i * 0.137) % 1 + 1) % 1; // unique phase per pill
          const dotX = hubX + (pillX - hubX) * travelPhase;
          const dotY = hubY + (pillY - hubY) * travelPhase;
          ctx.beginPath();
          ctx.arc(dotX, dotY, TRAVEL_DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = TRAVEL_DOT_COLOR;
          ctx.globalAlpha = 0.55;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      // ── Hub circle ────────────────────────────────────────────────────────
      // Outer ring
      ctx.beginPath();
      ctx.arc(hubX, hubY, HUB_RADIUS + 5, 0, Math.PI * 2);
      ctx.strokeStyle = HUB_RING_COLOR;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Filled hub
      ctx.beginPath();
      ctx.arc(hubX, hubY, HUB_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = HUB_COLOR;
      ctx.fill();

      // Y letter in hub
      ctx.font = "bold 13px sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Y", hubX, hubY + 0.5);
    },
    [reducedMotion]
  );

  // ── Animation loop ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const setSize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    setSize();

    const ro = new ResizeObserver(() => {
      setSize();
    });
    ro.observe(container);

    // Static render for reduced motion
    if (reducedMotion) {
      const rect = container.getBoundingClientRect();
      const staticOffsets = PROVIDERS.map(() => ({ dx: 0, dy: 0 }));
      draw(ctx, rect.width, rect.height, 0, staticOffsets);
      return () => ro.disconnect();
    }

    // rAF loop
    const loop = (ts: number) => {
      if (startTimeRef.current === null) startTimeRef.current = ts;
      const t = (ts - startTimeRef.current) / 1000; // seconds

      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Compute pill float offsets
      const newOffsets = PROVIDERS.map((p, i) => {
        if (hoveredRef.current === i) return { dx: 0, dy: 0 };
        const phase = (t / p.speed + p.delay / p.speed) * Math.PI * 2;
        const dx = Math.sin(phase) * p.driftAmp[0];
        const dy = Math.cos(phase * 0.73 + i) * p.driftAmp[1];
        return { dx, dy };
      });

      setPillOffsets(newOffsets);
      draw(ctx, w, h, t, newOffsets);

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [reducedMotion, draw]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[380px] lg:h-[430px] select-none"
      aria-hidden="true"
    >
      {/* Canvas layer: hub, ripples, dotted lines, travel dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Pill layer: HTML badges overlaid on canvas */}
      {PROVIDERS.map((p, i) => {
        const isHovered = hoveredIndex === i;
        const offset = pillOffsets[i] ?? { dx: 0, dy: 0 };
        return (
          <div
            key={p.name}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: "absolute",
              left: `${p.cx * 100}%`,
              top: `${p.cy * 100}%`,
              transform: `translate(-50%, -50%) translate(${reducedMotion ? 0 : offset.dx}px, ${reducedMotion ? 0 : offset.dy}px) scale(${isHovered ? 1.08 : 1})`,
              transition: isHovered
                ? "box-shadow 0.2s ease, transform 0.2s ease"
                : "transform 0.1s ease",
              boxShadow: isHovered
                ? "0 8px 24px rgba(0,0,0,0.13)"
                : "0 2px 10px rgba(0,0,0,0.05)",
              willChange: "transform",
              zIndex: isHovered ? 10 : 1,
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 text-xs font-semibold text-zinc-800 cursor-default whitespace-nowrap"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
            <span>{p.name}</span>
          </div>
        );
      })}
    </div>
  );
}
