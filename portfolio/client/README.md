# Ayush Kumar Jha | Portfolio

A premium, production-grade portfolio website built with Next.js 16, TypeScript, and Contentlayer. Featuring high-performance animations, adaptive dark mode, and industrial-grade data architectures.

## 🚀 Key Features
- **Next.js 16 (Webpack)**: Optimized for the latest React features and stable production builds.
- **Contentlayer**: Type-safe MDX processing for blog posts and case studies.
- **Command Palette (Cmd+K)**: Universal search across projects and articles.
- **Adaptive Dark Mode**: Sleek, persistable UI with system preference detection.
- **Framer Motion**: High-fidelity micro-interactions and page transitions.

## 🛠️ Development Workflow

> [!IMPORTANT]
> **Branch Protection Enabled**: The `main` branch is protected. Direct pushes are disabled.

1. **Fork/Branch**: Create a new branch for any feature or fix (`feature/your-feature` or `fix/your-fix`).
2. **Develop**: Ensure your code adheres to the project's styling and type safety standards.
3. **Lint & Build**: Run `npm run lint` and `npm run build` locally before pushing.
4. **Pull Request**: Open a PR against `main`. 
5. **Review**: All PRs require at least one approval and a successful CI build (GitHub Actions).
6. **Merge**: Changes are squash-merged into `main` to maintain a clean history.

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
git clone https://github.com/ayushjhaa1187-spec/Portfoilo.git
cd Portfoilo
npm install
```

### Environment Setup
Create a `.env.local` file with the following keys:
```env
RESEND_API_KEY=your_resend_key
GITHUB_TOKEN=your_github_token
CONTACT_EMAIL=your_email@example.com
```

### Development
```bash
npm run dev -- --webpack
```

### Production Build
```bash
npm run build -- --webpack
```

## 📜 License
Personal Portfolio © 2026 Ayush Kumar Jha
