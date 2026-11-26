export interface EmbeddingModelConfig {
  id: string;
  name: string;
  tag: string;
  dims: number[];
  acc: number[];
  lat: number[];
  rec: string;
}

/**
 * Embedding models benchmark configuration.
 * Replace `acc` (nDCG@10), `lat` (p50 query latency in ms), and `dims`
 * with your own evaluation numbers; the chart, tiles, and recommendation
 * copy update automatically.
 */
export const models: EmbeddingModelConfig[] = [
  {
    id: "lite",
    name: "Lite",
    tag: "Fastest & compact",
    dims: [128, 256, 384, 512],
    acc: [58.1, 61.7, 63.4, 64.0],
    lat: [4, 5, 6, 7],
    rec: "Best for high-throughput triage, edge routing, and tight memory budgets",
  },
  {
    id: "base",
    name: "Base",
    tag: "Balanced default",
    dims: [256, 512, 768, 1024],
    acc: [63.9, 67.2, 69.0, 69.6],
    lat: [9, 11, 14, 17],
    rec: "Best for production customer support and general knowledge retrieval",
  },
  {
    id: "large",
    name: "Large",
    tag: "Highest precision",
    dims: [512, 1024, 1536, 3072],
    acc: [68.8, 72.1, 73.4, 74.0],
    lat: [22, 28, 36, 52],
    rec: "Best for dense technical docs, legal/policy QA, and nuanced queries",
  },
];

export const DEFAULT_MODEL_ID = "base";
export const DEFAULT_DIMENSION = 768;
