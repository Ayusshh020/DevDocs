# DevDocs — Software Architecture Portal

## Project Info

- **Subject:** HTML, CSS & JavaScript
- **College:** ITM Skills University
- **Project No.:** 50
- **Industry:** Technical Training
- **Student:** Ayush Mishra 

---

## What is DevDocs?

DevDocs is a subscription portal for professional software architects to access verified system design blueprints. It contains 16 architecture patterns with code snippets, diagrams, pros/cons, and pricing plans — all built using pure HTML, CSS, and JavaScript.

---

## Files in This Project

```
devdocs/
├── index.html      → Main portal (Landing + Sidebar + Patterns, Pricing, Performance)
├── patterns.html   → Detailed patterns page with code snippets & arch diagrams
├── search.html     → Search page with filter chips
├── style.css       → All styling — dark mode, light mode, animations
└── script.js       → All data (16 patterns, pricing, metrics) + helper functions
```

---

## How to Run

1. Download all 5 files into one folder
2. Open `index.html` in any browser (Chrome, Firefox, Edge)
3. No server needed. No installation needed.

---

## Features

### index.html — Main Portal
- **Landing Screen** — Animated intro screen with "Enter Portal" button
- **Sidebar Navigation** — Left sidebar with hide/show toggle (✕ button)
- **Patterns Section** — 16 architecture cards with live search filter
- **Pricing Section** — 3 subscription plans (Starter, Pro, Enterprise)
  - Hover on any card → green border highlight
  - Hover on Pro card → "Most Popular" badge appears
- **Performance Section** — 15 real-time metric cards with status badges
- **Dark / Light Mode** — Toggle button in sidebar, saves preference

### patterns.html — Patterns Page
- All 16 patterns with detailed cards
- Each card has:
  - Architecture diagram (text-based)
  - Tech stack badges
  - Pros & Cons
  - "Show Code / Hide Code" toggle button for code snippets
- Live search bar — filter by name, scale, latency, or tech stack

### search.html — Search Page
- Large search input
- 7 Quick-filter chips: All, Low Latency, High Latency, Cloud, Distributed, Database, Async
- Results list with highlighted matched text
- Shows result count dynamically

---

## Technical Implementation

### HTML
- Semantic structure with sections, aside, nav
- Code snippet blocks using `<pre>` tags
- Architecture diagrams in styled `<div>` blocks
- Technology stack lists as badge elements
- Pros/Cons trade-off analysis in every card

### CSS
- **Font:** Outfit (display) + JetBrains Mono (code)
- Developer-centric dark mode with green accent (`#00ffa3`)
- Full light mode with proper contrast
- CSS Variables for consistent theming
- Smooth animations — `fadeUp`, hover transitions, slide effects
- Responsive layout — works on all screen sizes
- Sidebar: fixed position, slide-in/out with `transform: translateX`

### JavaScript
- All 16 pattern objects stored in a `patterns` array
- `filterPatterns(query)` — searches across 7 fields simultaneously
- `escHtml(str)` — safely renders code in `<pre>` blocks
- `highlight(text, query)` — wraps matched text in `<mark>` tags
- `toggleTheme()` — dark/light switch with `localStorage` persistence
- `syncThemeBtn()` — updates button label on every page load
- Scale-based search filter (e.g., "1M users", "Low latency")

---

## 16 Architecture Patterns Covered

| # | Pattern | Scale | Latency |
|---|---------|-------|---------|
| 1 | Monolith | 1K users | Low |
| 2 | MVC Pattern | 5K users | Low |
| 3 | Layered Arch | 10K users | Medium |
| 4 | Hexagonal | 50K users | Low |
| 5 | Micro-kernel | 80K users | Low |
| 6 | Serverless FaaS | 200K users | Variable |
| 7 | CQRS | 400K users | Low |
| 8 | Event Sourcing | 600K users | Medium |
| 9 | Pub-Sub | 800K users | Low |
| 10 | Microservices | 1M users | Medium |
| 11 | API Gateway | 5M users | Low |
| 12 | Saga Pattern | 10M users | High |
| 13 | DB Sharding | 25M users | Medium |
| 14 | Cell-Based Arch | 50M users | Medium |
| 15 | Sidecar Pattern | 50M+ users | Low |
| 16 | Bulkhead | 100M users | High |

---

## Pricing Plans

| Plan | Price | For |
|------|-------|-----|
| Starter | ₹749/mo | Solo engineers learning system design |
| Pro | ₹2,449/mo | Professionals architecting at scale |
| Enterprise | ₹8,299/mo | Teams with private coaching |

---

## Problem Statement Requirements — All Met

- ✅ `patterns.html` — Patterns page with code snippets & diagrams
- ✅ `search.html` — Search page with scale-based filter
- ✅ Scale-based search filter in JavaScript
- ✅ Code snippet blocks (HTML)
- ✅ Architecture diagrams (HTML)
- ✅ Tech stack lists
- ✅ Pros/Cons trade-off analysis
- ✅ Pricing strategy — per-pattern, monthly, team-wide
- ✅ Dark mode (developer-centric)
- ✅ Responsive design

---

*Built with pure HTML, CSS & JavaScript — no frameworks, no libraries.*