# 🌐 Bijay Vikram — Portfolio Website

A modern, dark-themed personal portfolio built with **React + Vite**. Fully responsive across all devices with smooth animations, custom cursor, and a clean futuristic aesthetic.

---

## ✨ Features

- ⚡ Built with **React 18 + Vite** for fast development and blazing builds
- 🎨 **100% inline styles** — no Tailwind dependency, zero CSS conflicts
- 📱 **Fully responsive** — SM (480px), MD (768px), LG (1024px), Desktop
- 🖱️ **Custom cursor** — dot + ring effect (auto-disabled on mobile)
- 🔢 **Scroll-triggered animations** — fade-in on reveal via IntersectionObserver
- 🎠 **Project sliders** — separate sliders for JS and React projects
- 📊 **Animated skill bars** — proficiency bars that animate on scroll
- 🔇 **Noise + grid overlay** — subtle texture for depth
- 📬 **Contact form** — with focus states and send confirmation

---

## 🗂️ Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with mobile hamburger drawer
│   │   ├── Hero.jsx            # Full-screen hero with stats + animations
│   │   ├── Marquee.jsx         # Infinite scrolling tech stack ticker
│   │   ├── Skills.jsx          # 4-col skills grid + proficiency bars
│   │   ├── Projects.jsx        # Slider card component
│   │   ├── ProjectsSection.jsx # JS & React project sliders
│   │   ├── About.jsx           # Bio, interests grid, education timeline
│   │   ├── Contact.jsx         # Contact links + message form
│   │   ├── Footer.jsx          # Footer with back-to-top
│   │   ├── Section.jsx         # Shared section wrapper
│   │   ├── SectionLabel.jsx    # Reusable label component
│   │   └── useReveal.jsx       # IntersectionObserver scroll reveal hook
│   ├── App.jsx                 # Root — GlobalStyles, CursorEffect, layout
│   ├── main.jsx                # React entry point
│   └── index.css               # Base resets + keyframe animations
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/bijayvikram/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#060608` |
| Surface | `#0d0d12` |
| Surface 2 | `#13131a` |
| Accent (Green) | `#7fff6e` |
| Accent 2 (Teal) | `#5be8c8` |
| Text | `#e8e8f0` |
| Muted | `#6b6b80` |
| Border | `rgba(255,255,255,0.07)` |

**Fonts:**
- **Syne** — Headings (700, 800)
- **DM Mono** — Labels, tags, code
- **DM Sans** — Body text (300, 400)

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|---|---|---|
| Desktop | > 1024px | Full layout, right-side stats, 4-col grids |
| LG | ≤ 1024px | Skills → 2 col, project slider → 2 cards |
| MD | ≤ 768px | Single column layout, hamburger nav, stats row |
| SM | ≤ 480px | Tighter padding, stacked buttons, 1-col grids |

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Name, tagline, CTA buttons, animated stats |
| **Marquee** | Auto-scrolling tech stack ticker |
| **Skills** | 4-col tech grid + animated proficiency bars |
| **Projects** | Slider — JS projects & React projects separately |
| **About** | Bio, info details, interests cards, education |
| **Contact** | Social links + contact form |

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Google Fonts | Syne, DM Mono, DM Sans |
| IntersectionObserver API | Scroll reveal animations |

> No Tailwind, no UI libraries, no CSS files — everything is inline styles + scoped `<style>` blocks.

---

## 🌍 Live Projects (Linked in Slider)

| Project | Link |
|---|---|
| Weather Dashboard | [vikrambijay.github.io/.../weather](https://vikrambijay.github.io/mini-projects/weather/index.html) |
| Task Management App | [vikrambijay.github.io/.../todo](https://vikrambijay.github.io/mini-projects/todo/index.html) |
| Calculator App | [vikrambijay.github.io/.../calculator](https://vikrambijay.github.io/mini-projects/calculator/index.html) |
| Stopwatch | [vikrambijay.github.io/.../stopwatch](https://vikrambijay.github.io/mini-projects/stopwatch/index.html) |
| Quote Generator | [vikrambijay.github.io/.../quoteGenerator](https://vikrambijay.github.io/mini-projects/quoteGenerator/index.html) |

---

## 🔧 Deployment

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

**GitHub Pages**
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

**Netlify**
Connect your GitHub repo on [netlify.com](https://netlify.com) — auto-detects Vite config.

---

## 📬 Contact

**Bijay Vikram**
📧 [vikrambijay005@email.com](mailto:vikrambijay005@email.com)
🐙 [github.com/bijayvikram](https://github.com/bijayvikram)
💼 [linkedin.com/in/bijayvikram](https://linkedin.com/in/bijayvikram)

---

<p align="center">Made with ❤️ by Bijay Vikram</p>