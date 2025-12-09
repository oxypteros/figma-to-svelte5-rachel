# Rachel Stone — Figma to Svelte 5 High-Fidelity Demo

## Built With:

![Svelte](./.github/badges/svelte.svg) ![Tailwind](./.github/badges/tailwindcss.svg) ![TypeScript](./.github/badges/typescript.svg)

## Testing & Deployment

[![ESlint](./.github/badges/eslint.svg)](https://github.com/oxypteros/figma-to-svelte5-rachel/actions) [![Vitest](./.github/badges/vitest.svg)](https://github.com/oxypteros/figma-to-svelte5-rachel/actions) [![Playwright](./.github/badges/playwright.svg)](https://github.com/oxypteros/figma-to-svelte5-rachel/actions) [![Deployment Status](https://img.shields.io/website?url=https://rachel-demo.oxypteros.com&up_message=ONLINE&down_message=OFFLINE&style=flat&logo=cloudflare&logoColor=%23F38020&labelColor=%23F0F0F0&up_color=%23266429&down_color=red)](https://rachel-demo.oxypteros.com) [![Pagespeed](./.github/badges/lighthouse.svg)](https://pagespeed.web.dev/report?url=https://rachel-demo.oxypteros.com)

> _Automated E2E testing pipeline includes Vitest and Playwright/Axe-Core checks on every commit._  
> _Performance is continuously monitored with daily Google PageSpeed audits._

<br />
<img src="https://raw.githubusercontent.com/oxypteros/figma-to-svelte5-rachel/refs/heads/main/.github/img/hero-screenshot.webp" alt="Project cover" width="100%">

> **Live Demo:** [https://rachel-demo.oxypteros.com](https://rachel-demo.oxypteros.com)

## About The Project

A front-end demo of a **Figma design** transformed into a **high-performance, fully accessible Svelte 5 application**.

The goal of this project was to recreate the “premium feel” of the original design while achieving good Lighthouse scores, zero layout shift (CLS), excellent accessibility and strong semantic HTML structure.

Design tools often produce static or heavy code when exporting UI.  
This project demonstrate a manual approach using modern tools:

- **Pixel-Precision:** Accurate recreation of the Figma template.
- **Mobile-First:** Fully responsive layouts.
- **Accessibility:** Strict compliance.
- **Architecture:** Svelte 5 Runes for reactive state.
- **Design System:** Tailwind CSS for consistent styling.

This demo covers a **Vertical Slice** (Home Page), showcasing what a production environment would look like.

---

## Tech Stack

- **Framework:** [SvelteKit/Svelte5](https://svelte.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Icons:** [Unplugin Icons](https://github.com/unplugin/unplugin-icons) (Custom SVGs)
- **Linting:** Prettier + ESLint
- **Deployment:** Cloudflare Pages (Auto Adapter)

---

## Key Technical Highlights

### 1. Performance Optimization

- **Lazy Video Loading:** Custom Svelte Action to zero-out battery usage when the video is off-screen.
- **CLS Prevention:** All images/videos include enforced `aspect-ratio`.
- **Responsive Images:** Hand-crafted `srcset` + `sizes` for the scaled hero section.

### 2. Svelte 5 Runes Architecture

- **State Management:** Replaced legacy stores with `$state()` for granular reactivity.
- **Data Separation:** Dynamic content is decoupled from the UI, living in TypeScript files (`src/lib/data/`).
- **Scoped Styling:** Tailwind custom utilities for headings, spacing, and typographic rhythm.

### 3. Accessibility (a11y)

- Semantic HTML5.
- Hidden decorative assets.
- Screen-reader-only text for context where needed.
- Motion-sensitive animations respecting `prefers-reduced-motion`.

### 4. UI Features

- **Parallax Scroll:** Scroll-linked, GPU-accelerated parallax effect.
- **Infinite Marquee:** Pure CSS looping with gradient masking.
- **Comparison Slider:** Custom image comparison (no dependencies).

## Getting Started

1. **Clone the repository**

```bash
  git clone https://github.com/oxypteros/rachel-figma-svelte.git
  cd rachel-figma-svelte
```

2. **Install dependencies**

```bash
  npm install
```

3. **Configure Environment Secrets**

```bash
cp .env.example .env
```

(_Optional_: Edit `.env` and add your [Resend API Key](https://resend.com/) if you want to test the email functionality.)

4. **Start development server**

```bash
  npm run dev
```

## License & Attribution

### The Code

The source code of this project (Svelte, Tailwind, TypeScript logic) is licensed under the [**MIT License**](LICENSE).

### The Design

The visual design, layout, and assets are based on the **"Rachel Stone" Template** by DjectStudio.

- **Source:** [Personal Fitness Trainer Template](https://www.figma.com/community/file/1569006333493544411)
- **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Modifications:** Adjustments were made to fulfill accessibility criteria.
