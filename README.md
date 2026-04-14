# VitalCare AI

> **Empowering healthier lives through intelligent care.**

VitalCare AI is a modern healthcare platform frontend built with **React + Vite**. It blends cutting-edge machine learning capabilities with compassionate, human-centred design to give patients, caregivers, and providers the insights they need to act with confidence.

---

## 🎨 Design System

| Token | Value | Purpose |
|-------|-------|---------|
| Sky Blue | `#4DA6FF` | Primary – calm, trustworthy |
| Mint Green | `#3DDC97` | Primary – health, vitality |
| Coral | `#FF6B6B` | Accent – human warmth |
| Light Gray | `#F9FAFB` | Background – clean, clinical |

**Fonts (Google Fonts)**

- **Headings:** Poppins – rounded, approachable
- **Body:** Inter – clean, readable
- **Logo:** Nunito – soft, friendly

---

## 🏗️ Sections

1. **Hero** – Full-width gradient (Sky Blue → Mint Green), animated headline, subheadline, and CTA buttons with the "VitalCare AI" logo featuring a coral heart motif.
2. **Dashboard Preview** – Three glassmorphism cards (Patient Analytics, Appointment Scheduling, Predictive Diagnostics) with scroll-triggered reveal animations and icon micro-interactions.
3. **Features** – 2 × 2 grid of feature blocks (Security, Care, Telehealth, AI Insights) separated from the dashboard section by a Sky Blue → Mint Green wave divider.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx   / Hero.css
│   ├── Dashboard.jsx / Dashboard.css
│   ├── Features.jsx  / Features.css
│   └── Footer.jsx    / Footer.css
├── App.jsx
├── App.css
├── index.css   ← design system CSS variables
└── main.jsx
```

---

## ♿ Accessibility

- High-contrast text on all backgrounds
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` on all interactive and landmark elements
- Large touch targets (min 44 × 44 px) on buttons
