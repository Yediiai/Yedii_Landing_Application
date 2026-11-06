import { DocArticle } from './types';

export const DEVELOPER_ARTICLES: DocArticle[] = [
  // ── Quick Start ──────────────────────────────────────────
  {
    id: 'developer-quickstart',
    slug: 'quickstart/developer-introduction',
    title: 'Developer Introduction & Environments',
    description: 'Everything developers need to integrate, extend, and automate Yedii using REST APIs, web widgets, and webhooks.',
    section: 'developer',
    category: 'Quick Start',
    tags: ['developer', 'quickstart', 'api', 'sdk'],
    author: 'Developer Relations',
    createdAt: '2026-10-18',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    featured: true,
    order: 1,
    headings: [
      { id: 'ecosystem-overview', title: 'The Yedii Developer Ecosystem', level: 2 },
      { id: 'base-urls', title: 'Base URLs & Environments', level: 2 },
      { id: 'api-conventions', title: 'API Conventions & Headers', level: 2 },
      { id: 'first-request', title: 'Your First API Request', level: 2 }
    ],
    content: `
## The Yedii Developer Ecosystem

Yedii provides a comprehensive developer toolchain consisting of:
1. **The Web Widget SDK**: An ultra-lightweight client script (\`widget.min.js\`) that mounts a sandboxed iframe to host your chatbot.
2. **REST API**: Production endpoints at \`https://api.yedii.com\` for conversational streaming, agent configuration, knowledge ingestion, and workspace analytics.
3. **Webhooks**: Real-time HTTP event notifications for subscription lifecycle changes and conversation events.

## Base URLs & Environments

| Environment | Base URL | Usage |
|---|---|---|
| **Production API** | \`https://api.yedii.com\` | Live customer applications and bots |
| **Widget CDN** | \`https://cdn.yedii.com/widget/v1/widget.min.js\` | High-availability global edge CDN |
| **Widget Iframe Host** | \`https://widget.yedii.com\` | Secure iframe runtime |
| **Dashboard** | \`https://app.yedii.com\` | Workspace management & credentials |

## API Conventions & Headers

All Yedii REST endpoints follow standard JSON conventions:
- Requests accepting JSON bodies must include \`Content-Type: application/json\`.
- Authenticated endpoints require an \`Authorization: Bearer <TOKEN>\` header.
- Responses return a standard payload envelope:
  \`\`\`json
  {
    "status": "success" | "error",
    "message": "Human-readable summary",
    "data": { ... }
  }
  \`\`\`

## Your First API Request

Verify service connectivity using the public health endpoint:

\`\`\`bash
curl -X GET https://api.yedii.com/health
\`\`\`

Response:
\`\`\`json
{
  "status": "OK",
  "timestamp": "2026-11-06T12:00:00.000Z",
  "uptime": 1492021
}
\`\`\`
    `
  },
  {
    id: 'api-authentication-overview',
    slug: 'quickstart/authentication-overview',
    title: 'API Authentication & Security Tokens',
    description: 'Learn how to authenticate requests using JWT Bearer tokens, API Keys, and handle token lifecycle rotation.',
    section: 'developer',
    category: 'Quick Start',
    tags: ['auth', 'jwt', 'security', 'tokens'],
    author: 'Security Engineering',
    createdAt: '2026-10-20',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 4,
    order: 2,
    headings: [
      { id: 'auth-methods', title: 'Authentication Methods', level: 2 },
      { id: 'jwt-bearer', title: '1. JWT Bearer Tokens', level: 2 },
      { id: 'refresh-flow', title: '2. Token Rotation Flow', level: 2 },
      { id: 'rate-limiting', title: 'Rate Limiting & Protection', level: 2 }
    ],
    content: `
## Authentication Methods

Yedii supports two primary authentication mechanisms:
1. **User JWT Session Tokens**: Issued via \`POST /api/v1/auth/login\` with short-lived access tokens (15-minute TTL) and automatic refresh cookie rotation.
2. **Workspace API Keys**: Generated in your dashboard under **Settings > API Keys** for headless backend-to-backend integrations.

## 1. JWT Bearer Tokens

To access protected endpoints, supply your token in the \`Authorization\` header:

\`\`\`bash
curl -X GET https://api.yedii.com/api/v1/chatbots/workspace/WORKSPACE_ID \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
\`\`\`

If the token is expired or invalid, the API returns:
\`\`\`json
{
  "status": "error",
  "message": "Invalid or expired authorization token",
  "code": "AUTH_UNAUTHORIZED"
}
\`\`\`

## 2. Token Rotation Flow

When the access token expires, request a new pair using the refresh endpoint:

\`\`\`javascript
const res = await fetch("https://api.yedii.com/api/v1/auth/refresh", {
  method: "POST",
  credentials: "include" // Passes the secure HTTP-only refreshToken cookie
});
const { data } = await res.json();
const newAccessToken = data.accessToken;
\`\`\`

## Rate Limiting & Protection

Login and password endpoints enforce strict rate limiting:
- **Login attempts**: 5 attempts per 15 minutes per IP.
- **OTP requests**: 3 requests per 10 minutes.
- **Refresh endpoint**: 30 requests per minute.
    `
  },

  // ── Website Widget Integration ───────────────────────────
  {
    id: 'widget-integration-guide',
    slug: 'widget-integration/widget-overview',
    title: 'Website Widget Integration (HTML, React & Next.js)',
    description: 'Complete guide to embedding the Yedii chat widget into websites, SPAs, and server-rendered frameworks with zero style conflicts.',
    section: 'developer',
    category: 'Website Widget Integration',
    tags: ['widget', 'react', 'nextjs', 'javascript', 'embed'],
    author: 'Frontend Platform Team',
    createdAt: '2026-10-22',
    updatedAt: '2026-11-06',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 7,
    featured: true,
    order: 3,
    headings: [
      { id: 'how-widget-works', title: 'How the Widget Architecture Works', level: 2 },
      { id: 'html-installation', title: '1. Pure HTML / Script Tag Installation', level: 2 },
      { id: 'react-integration', title: '2. React Integration Component', level: 2 },
      { id: 'nextjs-integration', title: '3. Next.js (App & Pages Router)', level: 2 },
      { id: 'postmessage-protocol', title: '4. Bidirectional postMessage Protocol', level: 2 },
      { id: 'allowed-origins', title: '5. Domain Whitelisting (Allowed Origins)', level: 2 }
    ],
    content: `
## How the Widget Architecture Works

The Yedii chat widget utilizes an **isolated iframe architecture**:
- **Zero Style Contamination**: Widget CSS cannot leak into your host site, and your site's styles cannot break the chatbot UI.
- **High Performance**: The initialization script is under 6KB gzipped and loads asynchronously.
- **Dynamic Configuration**: Theme colors, welcome greetings, and logos are fetched dynamically from the Yedii backend without requiring script updates.

## 1. Pure HTML / Script Tag Installation

Place this snippet immediately before the closing \`</body>\` tag of your website:

\`\`\`html
<!-- Yedii chat widget -->
<script>
  (function () {
    if (document.getElementById("yedii-widget")) return;
    var s = document.createElement("script");
    s.id = "yedii-widget";
    s.src = "https://cdn.yedii.com/widget/v1/widget.min.js";
    s.async = true;
    s.setAttribute("data-deployment", "YOUR_AGENT_ID");
    document.body.appendChild(s);
  })();
</script>
\`\`\`

Replace \`YOUR_AGENT_ID\` with your agent ID from **Deploy > Overview** (e.g., \`6639c0f9a2b8e3981d3ef123\`).

## 2. React Integration Component

Create a reusable component \`YediiChatWidget.tsx\`:

\`\`\`tsx
"use client";

import { useEffect } from "react";

interface YediiWidgetProps {
  agentId: string;
}

export function YediiChatWidget({ agentId }: YediiWidgetProps) {
  useEffect(() => {
    if (document.getElementById("yedii-widget")) return;

    const script = document.createElement("script");
    script.id = "yedii-widget";
    script.src = "https://cdn.yedii.com/widget/v1/widget.min.js";
    script.async = true;
    script.setAttribute("data-deployment", agentId);

    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("yedii-widget");
      if (existing) existing.remove();
    };
  }, [agentId]);

  return null;
}
\`\`\`

## 3. Next.js (App & Pages Router)

In Next.js 14, 15, and 16 App Router, use the optimized \`next/script\` component in your root \`layout.tsx\`:

\`\`\`tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="yedii-widget"
          src="https://cdn.yedii.com/widget/v1/widget.min.js"
          strategy="lazyOnload"
          data-deployment="6639c0f9a2b8e3981d3ef123"
        />
      </body>
    </html>
  );
}
\`\`\`

## 4. Bidirectional postMessage Protocol

The host page SDK and the embedded iframe communicate using standard \`window.postMessage\`. You can listen to or dispatch widget events programmatically:

| Event Type | Direction | Payload | Description |
|---|---|---|---|
| \`YEDII_PARENT_READY\` | Host &rarr; Widget | None | Informs the widget that the host SDK has initialized |
| \`YEDII_WIDGET_READY\` | Widget &rarr; Host | \`{ agentId, version }\` | Sent when chatbot finishes initial handshake |
| \`YEDII_OPEN\` | Host &rarr; Widget | None | Programmatically opens the chat window |
| \`YEDII_CLOSE\` | Host &rarr; Widget | None | Programmatically closes the chat window |
| \`YEDII_WIDGET_OPEN\` | Widget &rarr; Host | None | Triggered when user opens the chatbot |
| \`YEDII_WIDGET_CLOSE\` | Widget &rarr; Host | None | Triggered when user minimizes the chatbot |
| \`YEDII_WIDGET_RESIZE\` | Widget &rarr; Host | \`{ width, height, isOpen }\` | Adjusts iframe dimensions dynamically |

### Example: Programmatic Trigger Button

\`\`\`javascript
// Open chatbot from a custom button on your page
document.getElementById("open-support-btn").addEventListener("click", () => {
  const iframe = document.querySelector("#yedii-widget-container iframe");
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: "YEDII_OPEN" }, "https://widget.yedii.com");
  }
});
\`\`\`

## 5. Domain Whitelisting (Allowed Origins)

For production deployments, navigate to **Deploy > Settings > Allowed Origins** and register your domain:
- \`https://acme.corp\`
- \`https://*.acme.corp\` (Wildcard subdomains supported)

If a third party attempts to load your widget from an unapproved domain, the widget iframe aborts initialization with a \`403 Forbidden: Origin not permitted\` security error.
    `
  },

  // ── Webhooks ─────────────────────────────────────────────
  {
    id: 'webhooks-guide',
    slug: 'webhooks/paddle-and-event-webhooks',
    title: 'Paddle Billing & System Webhooks',
    description: 'Verify HMAC signatures, parse lifecycle events, and handle idempotent webhook payloads reliably.',
    section: 'developer',
    category: 'Webhooks',
    tags: ['webhooks', 'paddle', 'security', 'events'],
    author: 'Platform Infrastructure',
    createdAt: '2026-10-26',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 4,
    headings: [
      { id: 'webhook-overview', title: 'Webhook Architecture', level: 2 },
      { id: 'paddle-events', title: 'Paddle Billing Webhook Events', level: 2 },
      { id: 'signature-verification', title: 'HMAC-SHA256 Signature Verification', level: 2 },
      { id: 'idempotency-retries', title: 'Idempotency & Retry Handling', level: 2 }
    ],
    content: `
## Webhook Architecture

Yedii integrates **Paddle Webhooks** at \`POST /api/v1/payments/paddle/webhook\` to track billing and subscription events in real-time.

All webhooks deliver a JSON payload containing:
- \`event_type\`: String identifying the event.
- \`event_id\`: Unique UUID for idempotency de-duplication.
- \`occurred_at\`: ISO 8601 timestamp.
- \`data\`: The resource payload.

## Paddle Billing Webhook Events

| Event Name | Description |
|---|---|
| \`subscription.created\` | Triggered when a customer purchases a paid subscription |
| \`subscription.updated\` | Triggered on tier upgrades, downgrades, or credit addons |
| \`subscription.canceled\` | Triggered when a workspace cancels recurring billing |
| \`transaction.completed\` | Successful charge invoice and receipt generation |

## HMAC-SHA256 Signature Verification

To verify that webhooks originate legitimately from Paddle, compute the HMAC-SHA256 hash using your webhook secret key:

\`\`\`typescript
import crypto from "crypto";

export function verifyPaddleWebhook(
  rawBody: string,
  signatureHeader: string,
  secretKey: string
): boolean {
  // Signature header format: "ts=1730000000;h=abc123def456..."
  const parts = signatureHeader.split(";").reduce((acc, part) => {
    const [k, v] = part.split("=");
    acc[k] = v;
    return acc;
  }, {} as Record<string, string>);

  const timestamp = parts["ts"];
  const expectedHash = parts["h"];

  if (!timestamp || !expectedHash) return false;

  // Protect against replay attacks (5 minute threshold)
  const currentTs = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTs - parseInt(timestamp, 10)) > 300) {
    return false;
  }

  const signedPayload = \`\${timestamp}:\${rawBody}\`;
  const computedHash = crypto
    .createHmac("sha256", secretKey)
    .update(signedPayload)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(computedHash, "hex"),
    Buffer.from(expectedHash, "hex")
  );
}
\`\`\`

## Idempotency & Retry Handling

- **200 OK**: Always return a \`200 OK\` HTTP response within 5 seconds to acknowledge receipt.
- **Retries**: If your server returns \`5xx\` or times out, Paddle retries with exponential backoff for up to 3 days.
- **Idempotency**: Store \`event_id\` in a database table or Redis cache. If an event ID has already been processed, skip re-execution and return \`200 OK\` immediately.
    `
  },

  // ── Advanced Developer Resources ─────────────────────────
  {
    id: 'developer-errors-and-limits',
    slug: 'advanced-resources/rate-limits-and-error-codes',
    title: 'API Rate Limits, Error Codes & Pagination',
    description: 'Detailed specification of rate limit quotas, standard error JSON envelopes, and cursor pagination patterns.',
    section: 'developer',
    category: 'Advanced Developer Resources',
    tags: ['errors', 'rate-limits', 'pagination', 'best-practices'],
    author: 'API Standards Committee',
    createdAt: '2026-10-24',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 4,
    order: 5,
    headings: [
      { id: 'rate-limit-quotas', title: 'Rate Limiting Quotas', level: 2 },
      { id: 'standard-error-format', title: 'Standard Error Envelopes', level: 2 },
      { id: 'http-status-codes', title: 'HTTP Status Code Reference', level: 2 },
      { id: 'pagination-convention', title: 'Pagination Convention', level: 2 }
    ],
    content: `
## Rate Limiting Quotas

Yedii protects API stability using multi-layer token-bucket rate limiters:

| Endpoint Group | Rate Limit | Scope |
|---|---|---|
| \`/api/v1/chat/stream\` | 60 requests / minute | Per Visitor Session |
| \`/api/v1/auth/login\` | 5 requests / 15 minutes | Per Client IP |
| Public Pricing & Docs | 120 requests / minute | Per Client IP |
| Standard Management Endpoints | 300 requests / minute | Per Workspace API Key |

When rate limits are exceeded, the API returns HTTP \`429 Too Many Requests\` with a \`Retry-After: <seconds>\` header.

## Standard Error Envelopes

Every error response adheres strictly to this structure:

\`\`\`json
{
  "status": "error",
  "message": "Validation failed for request parameters",
  "statusCode": 400,
  "errors": [
    {
      "field": "websiteAccess.allowedOrigins[0]",
      "message": "Each allowed origin must be a valid URL starting with http:// or https://"
    }
  ],
  "timestamp": "2026-11-06T12:00:00.000Z"
}
\`\`\`

## HTTP Status Code Reference

- **\`200 OK\`**: Successful query or update operation.
- **\`201 Created\`**: Successful resource creation (e.g. agent or workspace).
- **\`400 Bad Request\`**: Invalid request schema or failing class-validator DTO checks.
- **\`401 Unauthorized\`**: Missing, malformed, or expired JWT token.
- **\`403 Forbidden\`**: Insufficient team permissions or unapproved embed origin domain.
- **\`404 Not Found\`**: Resource does not exist or has been deleted.
- **\`422 Unprocessable Entity\`**: Business logic failure (e.g., attempting to publish an agent with 0 knowledge chunks).
- **\`429 Too Many Requests\`**: Rate limit threshold exceeded.
- **\`500 Internal Server Error\`**: Unhandled server error logged to monitoring.

## Pagination Convention

List endpoints (documents, conversations, members) accept \`page\` and \`limit\` query parameters:

\`\`\`bash
GET /api/v1/documents?chatbotId=ID&page=1&limit=20
\`\`\`

Response pagination metadata:
\`\`\`json
{
  "status": "success",
  "data": [ ... ],
  "meta": {
    "page": 1,
    "limit": 20,
    "totalCount": 142,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
\`\`\`
    `
  }
];

