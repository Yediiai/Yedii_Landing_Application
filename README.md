# Yedii Landing Application

The official web application and marketing landing page for [Yedii](https://yedii.com) — Next-Generation Conversational AI & Autonomous Agent Platform.

Built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 20.9.0 (Node 22 LTS recommended)
- npm >= 10

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yediiai/Yedii_Landing_Application.git
   cd Yedii_Landing_Application
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Run development server (Port 4001):**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4001](http://localhost:4001) in your browser.

4. **Lint and Type Check:**
   ```bash
   npm run lint
   ```

5. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🐳 Docker Setup

The application includes an optimized multi-stage `Dockerfile` utilizing Next.js **standalone output** (~150MB lightweight production container running on port **4001** as a non-privileged `nextjs` user).

### Using Docker Compose (Recommended)

Start the production container locally:
```bash
docker compose up -d --build
```
The application will be live at `http://localhost:4001`.

To view logs:
```bash
docker compose logs -f
```

To stop:
```bash
docker compose down
```

### Using Plain Docker

1. **Build image:**
   ```bash
   docker build -t yedii-landing-app .
   ```

2. **Run container on Port 4001:**
   ```bash
   docker run -d -p 4001:4001 --name yedii-landing yedii-landing-app
   ```

---

## ⚙️ GitHub & CI/CD Setup

Automated workflows are located in `.github/workflows/`:

- **CI & Docker Verification (`ci.yml`)**:
  - Automatically triggered on push & pull requests to `main` and `Development`.
  - Runs linting (`npm run lint`), Next.js production build (`npm run build`), builds the Docker container, and runs a smoke check on port **4001**.
- **Docker GHCR Release (`docker-publish.yml`)**:
  - Automatically builds and pushes production container images to GitHub Container Registry (`ghcr.io/yediiai/yedii_landing_application`) on merges to `main` or semantic release tags (`v*.*.*`).
- **Dependabot (`dependabot.yml`)**:
  - Automatically creates weekly pull requests for outdated npm dependencies and GitHub Actions.
- **PR & Issue Templates**:
  - Structured templates for pull requests and bug/feature issues.

---

## 📁 Project Structure

```
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── docker-publish.yml
│   ├── dependabot.yml
│   └── pull_request_template.md
├── public/                 # Static assets (images, icons, svgs)
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── customers/
│   │   ├── enterprise/
│   │   ├── pricing/
│   │   └── page.tsx        # Homepage
│   └── components/         # Reusable UI sections and components
├── Dockerfile              # Multi-stage production container definition (Port 4001)
├── docker-compose.yml      # Local container orchestration (Port 4001:4001)
├── .dockerignore           # Container build ignore rules
├── next.config.ts          # Next.js configuration (standalone output enabled)
└── package.json
```
