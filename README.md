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
   docker build -t yedii/yedii_landing_application-frontend:latest .
   ```

2. **Run container on Port 4001:**
   ```bash
   docker run -d -p 4001:4001 --name yedii_landing_frontend yedii/yedii_landing_application-frontend:latest
   ```

---

## ⚙️ GitHub & CI/CD Setup

Automated workflows are located in `.github/workflows/`:

- **Production Deployment to EC2 (`deploy.yml`)** *(Matching Yedii_Application)*:
  - Triggered on push to `Development` and `main` (or manual dispatch).
  - Prepares environment variables (`.env.Development` / `secrets.ENV_FILE`).
  - Builds Next.js production build and Docker image `yedii/yedii_landing_application-frontend`.
  - Pushes images to Docker Hub (`latest` and `${{ github.sha }}`).
  - Deploys via SSH to EC2 (`/home/ubuntu/Yedii_Landing_Application/`), runs `docker compose pull`, restarts containers, cleans old images, and verifies health check on port **4001**.
- **CI & Docker Verification (`ci.yml`)**:
  - Automatically triggered on push & pull requests.
  - Runs linting (`npm run lint`), Next.js production build (`npm run build`), builds the Docker container, and tests port **4001**.
- **Dependabot (`dependabot.yml`)**:
  - Automatically creates weekly pull requests for outdated npm dependencies and GitHub Actions.

### Required GitHub Secrets for Deployment

Configure the following secrets in **GitHub Repository Settings ➔ Secrets and variables ➔ Actions**:
- `DOCKER_USERNAME`: Docker Hub account username
- `DOCKER_PASSWORD`: Docker Hub access token or password
- `EC2_HOST`: IP address or DNS of the EC2 deployment server
- `EC2_USER`: EC2 SSH username (e.g. `ubuntu`)
- `EC2_KEY`: Private SSH key (`.pem`) for the EC2 instance
- `ENV_FILE` *(optional)*: Custom environment file contents to inject during deployment

---

## 📁 Project Structure

```
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
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
├── docker-compose.yml      # Local and EC2 container orchestration (Port 4001)
├── .dockerignore           # Container build ignore rules
├── next.config.ts          # Next.js configuration (standalone output enabled)
└── package.json
```
