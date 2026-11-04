/**
 * Type-safe environment configuration for Yedii Landing Application.
 * Centralizes process.env access with runtime validation, type coercion, and safe defaults.
 */

export interface EnvConfig {
  NODE_ENV: "development" | "production" | "test";
  PORT: number;
  HOSTNAME: string;
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_APP_BASE_URL: string;
  LINKEDIN_URL: string;
  REDDIT_URL: string;
  INDUSTRIES_URL: string;
  YEDII_API_KEY?: string;
  YEDII_BACKEND_API_URL?: string;
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

const nodeEnv = (process.env.NODE_ENV || "development") as EnvConfig["NODE_ENV"];
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4001;
const hostname = process.env.HOSTNAME || "0.0.0.0";
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (nodeEnv === "production" ? "https://yedii.com" : `http://localhost:${port}`);

export const env: EnvConfig = {
  NODE_ENV: nodeEnv,
  PORT: Number.isNaN(port) ? 4001 : port,
  HOSTNAME: hostname,
  NEXT_PUBLIC_APP_URL: appUrl,
  NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL || "https://app.yedii.com",
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || process.env.LINKEDIN_URL || "https://linkedin.com/company/yedii",
  REDDIT_URL: process.env.NEXT_PUBLIC_REDDIT_URL || process.env.REDDIT_URL || "https://reddit.com/r/yedii",
  INDUSTRIES_URL: process.env.NEXT_PUBLIC_INDUSTRIES_URL || process.env.INDUSTRIES_URL || "/customers",
  YEDII_API_KEY: process.env.YEDII_API_KEY,
  YEDII_BACKEND_API_URL: process.env.YEDII_BACKEND_API_URL,
  isDevelopment: nodeEnv === "development",
  isProduction: nodeEnv === "production",
  isTest: nodeEnv === "test",
};

export default env;
