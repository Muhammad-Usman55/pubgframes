# PUBGFrames (PUBG Mobile FPS & Hardware Gaming Database)

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**PUBGFrames** is the definitive, hardware-verified PUBG Mobile gaming telemetry and FPS benchmarking platform. Covering **over 1,630+ smartphones and tablets worldwide**, it gives competitive esports athletes, scrim players, and mobile gamers precise frame rate targets, thermal throttling curves, gyroscope latency audits, and optimal graphics configurations without risky GFX tools or third-party APKs.

---

## ⚡ Core Features

- 🎮 **Instant PUBG Mobile FPS Calculator**: Select any smartphone or tablet and simulate real-time FPS performance across Smooth, Balanced, HD, HDR, and Ultra HD graphics tiers.
- 🔍 **Relative & Fuzzy Typo Search**: Search by full name, partial model code, or with typos (e.g. `note 12`, `edmi note 12`, `s24 ultra`, `pokoe x6`). Powered by an ultra-fast Levenshtein and n-gram relevance ranking engine.
- 📱 **Exhaustive 1,630+ Global Device Master Database**:
  - **Samsung**: 258 models (Galaxy S, Note, A, M, F, Z Fold/Flip, J, C, On, Grand)
  - **Xiaomi**: 127 models (Mi flagship series to Xiaomi 18)
  - **Redmi**: 226 models (Number, Note, K, Turbo, A, Y, S, Go, R)
  - **POCO**: 82 models (F, X, M, C, and POCO Pad series)
  - **Black Shark**: 20 gaming models (BS1 to BS6, Gundam, and Gaming Pads)
  - **Apple, OnePlus, iQOO, Vivo, OPPO, ASUS ROG, REDMAGIC, ZTE, Realme, Infinix, Tecno, Motorola, Sony, Lenovo Legion, Razer**, and more.
- ⚖️ **Head-to-Head Device Comparison**: Compare two devices side-by-side with interactive Recharts FPS curves, chipset specs, refresh rate, and cooling systems.
- 🔥 **Thermal Throttling & Battery Simulation**: Interactive slider calculates performance decay and heat accumulation across 15, 30, 45, and 60 minutes of intensive match play.
- 🎯 **Tactical Sound Effects**: Toggleable esports audio cues for interactive UI feedback.
- 🛡️ **100% Ban-Safe Telemetry**: Hardware-tested reference data strictly adhering to Tencent & Krafton fair play standards. Zero file modifications or third-party background injections.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16.4](https://nextjs.org/) (Turbopack, Partial Prerendering, Static Page Generation)
- **Language**: TypeScript 5+ (Strict Type Checking)
- **Styling**: Tailwind CSS & Lucide Icons
- **Data Visualizations**: Recharts
- **Database / Backend**: Supabase PostgreSQL migration schema included
- **Deployment**: Optimized for Vercel, Node.js standalone, and Docker

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x+
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Muhammad-Usman55/pubgframes.git

# Enter project directory
cd pubgframes

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the application.

### Production Build

```bash
# Compile and prerender all 1,730+ static device pages
npm run build

# Start production server daemon
npm run start
```

### Automated QA & Memory Leak Stress Tests

```bash
# Run comprehensive automated test suite (142 test assertions)
node tests/qa-verification.mjs

# Run memory leak concurrency stress test (150 rapid requests)
node tests/memory-leak-stress-test.mjs

# Run relative & fuzzy search test suite
npx tsx tests/test-fuzzy-relative-search.mjs
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
