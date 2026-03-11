# DevDocs: Software Architecture Patterns 🏗️

> A subscription portal for professional software architects to access verified system design blueprints.

![DevDocs Preview](screenshot.png)

---

## 📌 Project Info

| Field | Details |
|-------|---------|
| **Project #** | 50 |
| **Student** | Ayush Mishra |
| **Roll Number** | 150096725046 |
| **Cohort** | Jeff Bezos |
| **University** | ITM Skills University |
| **Industry** | Technical Training |

---

## 🧠 Problem Statement

Software architects have no single trusted source for verified, production-tested architecture blueprints with clear trade-off analysis and cost estimates. DevDocs solves this by providing a searchable, subscription-based library of curated system design patterns.

---

## 🚀 Features

- 🔍 **Scale-based Search** — Filter patterns by name or scale (e.g. "1M users", "Latency")
- 🃏 **Pattern Cards** — Each card shows stack, pros/cons, scale, and monthly cost
- 🌙 **Dark Mode UI** — Developer-centric design with syntax-highlighted stack labels
- 💰 **Tiered Pricing** — Per-pattern, Unlimited, Team, and Enterprise plans
- 📐 **6 Architecture Patterns** — From Monolith to Serverless FaaS

---

## 🗂️ Pages

| File | Description |
|------|-------------|
| `patterns.html` | Main library page — all pattern cards in a 3-column grid |
| `search.html` | Search & filter interface with real-time JS filtering |

---

## 🏛️ Architecture Patterns Included

| Pattern | Category | Stack | Scale | Cost |
|---------|----------|-------|-------|------|
| Monolith | Classic | Node.js, PostgreSQL | 1K users | $15/mo |
| MVC Pattern | UI Arch | Ruby on Rails | 5K users | $25/mo |
| Layered Arch | Enterprise | Java, Spring Boot | 10K users | $40/mo |
| Hexagonal | Clean Code | Domain-driven | 50K users | Custom |
| Micro-kernel | Modular | Plugin-based | 80K users | Custom |
| Serverless FaaS | Cloud | AWS Lambda, DynamoDB | 200K+ users | Custom |

---

## 🛠️ Tech Stack

- **HTML** — Semantic structure, code snippet blocks, architecture card layout
- **CSS** — Dark mode design system, CSS Grid, Flexbox, custom properties
- **JavaScript** — Real-time DOM search filter, dynamic card rendering

---

## 💸 Pricing Strategy

| Tier | Access | Price |
|------|--------|-------|
| Per-Pattern | Single blueprint | $15–$40/mo |
| Monthly Unlimited | All patterns | ~$99/mo |
| Team License | 5–50 seats | Negotiated |
| Enterprise | Unlimited seats + priority | Custom |

---

## 📁 Folder Structure
```
devdocs/
├── index.html         # Redirects to patterns
├── patterns.html      # Architecture library (main page)
├── search.html        # Search & filter page
├── style.css          # Dark mode stylesheet
├── app.js             # Search filter + card renderer
└── README.md
```

---

## 🔮 Future Scope

- [ ] Backend with user authentication (JWT + Google OAuth)
- [ ] Stripe payment gateway for subscriptions
- [ ] AI-powered pattern recommender
- [ ] Interactive architecture diagrams (Mermaid.js / D3.js)
- [ ] Team workspaces with annotation tools
- [ ] REST API for enterprise integrations




