"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ModelOrbit — Animated model pills orbiting a center hub
//
// All speeds, radii, pills per ring, offsets and colors are defined in RINGS.
// Tech: "use client", CSS keyframes + transforms only, container-query sizing,
//       no external libraries, plain <style> tag.
// ─────────────────────────────────────────────────────────────────────────────

interface PillConfig {
  readonly name: string;
  readonly color: string;
  readonly icon: React.ReactNode;
}

interface RingConfig {
  readonly id: number;
  readonly radius: number;   // % of smaller container side (cqmin)
  readonly duration: number; // seconds for one full 360deg rotation
  readonly offset: number;   // initial angle offset in degrees
  readonly pills: readonly PillConfig[];
}

const RINGS: readonly RingConfig[] = [
  // Inner ring: 2 pills (OpenAI, Claude 3.5), radius 17%, duration 38s, offset 0deg
  {
    id: 0,
    radius: 17,
    duration: 38,
    offset: 0,
    pills: [
      {
        name: "OpenAI",
        color: "#10a37f",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
          </svg>
        ),
      },
      {
        name: "Claude 3.5",
        color: "#d97757",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 2.5 12 9.5l2.5-.5 5-4.5-3.5 5 1.5 1.5 6-.5-5.5 3 .5 2 4 3.5-6-1.5-1.5 2-1 3.5-2.5-5.5-1.5 1-4.5 3.5 2.5-6-1.5-1-3.5-2.5-5.5 2 1.5 2 6-3.5-5 .5 2.5-2.5 5.5-2.5 2 1.5 1.5 7.5-3.5-7L13.5 7.5 14.5 7z"/>
          </svg>
        ),
      },
    ],
  },
  // Middle ring: 3 pills (Mistral, Gemini 1.5, Grok), radius 28%, duration 56s, offset 40deg
  {
    id: 1,
    radius: 28,
    duration: 56,
    offset: 40,
    pills: [
      {
        name: "Mistral",
        color: "#f7820a",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M0 2h4v4H0zm0 8h4v4H0zm0 8h4v4H0zm4-12h4v4H4zm8 0h4v4h-4zm4-4h4v4h-4zm0 8h4v4h-4zm0 8h4v4h-4zM8 2h4v4H8zm0 16h4v4H8z"/>
          </svg>
        ),
      },
      {
        name: "Gemini 1.5",
        color: "#1a73e8",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"/>
          </svg>
        ),
      },
      {
        name: "Grok",
        color: "#111827",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        ),
      },
    ],
  },
  // Outer ring: 3 pills (DeepSeek, Llama 3.3, Cohere), radius 38%, duration 80s, offset 80deg
  {
    id: 2,
    radius: 38,
    duration: 80,
    offset: 80,
    pills: [
      {
        name: "DeepSeek",
        color: "#1e88e5",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.748 15.573c-.165-.25-.48-.34-.748-.216a7.87 7.87 0 0 1-.79.33c1.088-1.862 1.213-4.065.054-6.138-1.082-1.933-2.817-3.148-4.797-3.396C15.726 3.68 13.19 2.07 10.317 2.07c-2.3 0-4.371 1.015-5.845 2.646-1.012-.243-2.085-.19-3.1.21-1.117.44-1.969 1.24-2.42 2.253a5.14 5.14 0 0 0 .235 4.666c-.165.25-.308.515-.43.794a5.14 5.14 0 0 0 .235 4.666c.47 1.044 1.364 1.853 2.52 2.277.845.31 1.73.371 2.59.19a6.21 6.21 0 0 0 5.215 2.86c1.74 0 3.33-.656 4.544-1.734 1.025.14 2.077.028 3.057-.336 1.117-.44 1.969-1.24 2.42-2.253a5.14 5.14 0 0 0-.59-5.036zM10.317 3.57c2.395 0 4.527 1.33 5.709 3.337H7.03c-.38 0-.75.062-1.1.17A7.09 7.09 0 0 1 10.317 3.57z"/>
          </svg>
        ),
      },
      {
        name: "Llama 3.3",
        color: "#0866ff",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.5 2C4.6 2 3 3.6 3 5.5v13C3 20.4 4.6 22 6.5 22h11c1.9 0 3.5-1.6 3.5-3.5v-13C21 3.6 19.4 2 17.5 2zM12 17.5c-3 0-5.5-2.5-5.5-5.5S9 6.5 12 6.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/>
          </svg>
        ),
      },
      {
        name: "Cohere",
        color: "#d9534f",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2zm4 0h-2V8h2z"/>
          </svg>
        ),
      },
    ],
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// CSS — Light only, transform-only animations, container-query sizing
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
/* ── Wrapper: fully transparent, no border, no overflow clipping ──── */
.mo-root {
  container-type: size;
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: var(--font-sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif);
}

/* ── Center hub: 12px dark dot (#111827) in the exact center ─────── */
.mo-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #111827;
  transform: translate(-50%, -50%);
  z-index: 10;
  pointer-events: none;
}

/* ── Ripple: outward fading ring every 3s ────────────────────────── */
.mo-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(17, 24, 39, 0.25);
  pointer-events: none;
  animation: mo-ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes mo-ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(6);
    opacity: 0;
  }
}

/* ── Orbit track: 1px faint dashed circle ────────────────────────── */
.mo-track {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(17, 24, 39, 0.2);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* ── 1. Ring (spins clockwise) ───────────────────────────────────── */
.mo-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  animation-name: mo-spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* ── 2. Arm: rotate(angle) translateX(radius) ────────────────────── */
.mo-arm {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
}

/* ── 3. Unrotate wrapper: rotate(-angle) ─────────────────────────── */
.mo-unrotate {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
}

/* ── 4. Counter-spin wrapper: reverse animation keeps pill upright ── */
.mo-counter-spin {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  animation-name: mo-spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  will-change: transform;
}

/* ── 5. Pill: translate(-50%, -50%) ──────────────────────────────── */
.mo-pill {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px 7px 10px;
  border-radius: 9999px;
  background: #ffffff;
  border: 1px solid rgba(17, 24, 39, 0.14);
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.12);
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  white-space: nowrap;
  user-select: none;
  cursor: default;
  transition: box-shadow 0.2s ease;
}

.mo-pill:hover {
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.2);
}

/* Hovering any pill pauses orbit smoothly */
.mo-root:has(.mo-pill:hover) .mo-ring,
.mo-root:has(.mo-pill:hover) .mo-counter-spin {
  animation-play-state: paused;
}

.mo-pill-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mo-pill-icon svg {
  width: 15px;
  height: 15px;
  display: block;
}

/* ── Spin keyframe ───────────────────────────────────────────────── */
@keyframes mo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ── Reduced motion: disable all animations ──────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .mo-ring,
  .mo-counter-spin,
  .mo-ripple {
    animation: none !important;
  }
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export function ModelOrbit() {
  return (
    <>
      <style>{CSS}</style>

      <div className="mo-root" aria-hidden="true">
        {/* Center hub and ripple */}
        <div className="mo-ripple" />
        <div className="mo-hub" />

        {/* Orbit rings */}
        {RINGS.map((ring) => {
          const count = ring.pills.length;
          const trackDiameter = `${ring.radius * 2}cqmin`;

          return (
            <div key={ring.id}>
              {/* Faint dashed track */}
              <div
                className="mo-track"
                style={{ width: trackDiameter, height: trackDiameter }}
              />

              {/* 1. Ring (spins) */}
              <div
                className="mo-ring"
                style={{ animationDuration: `${ring.duration}s` }}
              >
                {ring.pills.map((pill, pillIdx) => {
                  const angle = (360 / count) * pillIdx + ring.offset;

                  return (
                    /* 2. Arm: rotate(angle) translateX(radius) */
                    <div
                      key={pill.name}
                      className="mo-arm"
                      style={{
                        transform: `rotate(${angle}deg) translateX(${ring.radius}cqmin)`,
                      }}
                    >
                      {/* 3. Unrotate wrapper: rotate(-angle) */}
                      <div
                        className="mo-unrotate"
                        style={{ transform: `rotate(${-angle}deg)` }}
                      >
                        {/* 4. Counter-spin wrapper: reverse spin */}
                        <div
                          className="mo-counter-spin"
                          style={{ animationDuration: `${ring.duration}s` }}
                        >
                          {/* 5. Pill: translate(-50%, -50%) */}
                          <div className="mo-pill">
                            <span
                              className="mo-pill-icon"
                              style={{ color: pill.color }}
                            >
                              {pill.icon}
                            </span>
                            <span>{pill.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
