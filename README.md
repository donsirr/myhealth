# MyHealth - Civic Health Platform for Naga City

A modern, accessible web application designed to empower Nagueños with proactive health management tools, real-time dengue outbreak monitoring, and digital health passport capabilities.

![MyHealth Platform](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=flat-square&logo=framer)

## 🎯 Overview

MyHealth is a **trusted civic health initiative by the City Government of Naga**, providing residents with:

- **Cardiovascular Risk Assessment** - Evidence-based CVD, stroke, and heart attack risk calculators
- **Real-time Dengue Monitoring** - Interactive map showing outbreak hotspots in Naga City
- **Digital Health Passport** - Emergency medical information with QR code access
- **Wellness Screening** - Information on free health services and preventive care
- **Future Roadmap** - Transparent communication of upcoming features

## ✨ Key Features

### 🫀 Heart Health Assessment
- Multi-disease risk calculators (CVD, Stroke, Heart Attack)
- Dynamic question sets based on selected condition
- Real-time risk calculation with visual feedback
- Input validation and placeholder interactions

### 🦟 Dengue Watch
- Interactive Leaflet map with outbreak hotspots
- Strict geographic bounds (Naga City only)
- Severity-based markers (High/Moderate alerts)
- Prevention tips and reporting information
- **Contact:** (054) 473-2326 - Naga City Health Office

### 💳 Digital Health Passport (LifeQR)
- Secure local storage of emergency medical data
- QR code generation for quick access
- Blood type, allergies, emergency contacts
- Real-time edit and save with modal feedback

### 🗓️ Wellness Screening
- Free health screenings catalog
- Cervical cancer, prostate health, HIV/AIDS testing
- Expandable service cards with requirements
- Professional lucide-react icons

### 🛣️ Future Roadmap
- **Phase 1:** Public Beta & Awareness (Active)
- **Phase 2:** Hospital Data Integration (Planned - Q3 2025)
- **Phase 3:** PhilSys National ID Sync (Future - 2026)
- Scroll-animated progress line with smooth green→blue color transition

## 🚀 Tech Stack

**Framework & Language:**
- Next.js 16 (App Router)
- TypeScript
- React 18

**Styling & Animation:**
- Tailwind CSS - Utility-first styling
- Framer Motion - Smooth animations and scroll effects
- Glassmorphism design language

**Mapping & Icons:**
- Leaflet - Interactive maps
- Lucide React - Professional icon library

**State Management:**
- React Context API - Passport data provider
- Local Storage - Persistent health passport

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
myhealth/
├── app/
│   ├── cvd/              # CVD risk assessment page
│   ├── dengue/           # Dengue monitoring page
│   ├── passport/         # Digital health passport
│   ├── roadmap/          # Future roadmap page
│   ├── screening/        # Wellness screening page
│   ├── layout.tsx        # Root layout with nav
│   └── page.tsx          # Home page
├── components/
│   ├── dengue-map.tsx    # Leaflet map component
│   ├── top-nav.tsx       # Top navigation
│   └── passport-provider.tsx  # Context provider
└── README.md
```

## 🎨 Design Philosophy

### Medical Clean Aesthetic
- **Color Palette:** Sky blue (#0ea5e9) primary, green (#22c55e) for active states
- **Glassmorphism:** `bg-white/80 backdrop-blur-sm border border-blue-100`
- **Typography:** Inter font, high contrast (`text-slate-800`)
- **Accessibility:** WCAG AAA compliance, senior-friendly design

### Animations
- **Framer Motion:** Smooth transitions and scroll effects
- **Layered Opacity:** Roadmap color morphing (green→blue)
- **Micro-interactions:** Hover states, focus indicators

## 🔑 Key Features

### Map Restrictions
Strict Naga City bounds prevent panning to other cities:

```typescript
const nagaBounds = [[13.58, 123.15], [13.66, 123.25]];
minZoom: 13,  // Cannot zoom to world view
maxBoundsViscosity: 1.0  // Hard restriction
```

### Roadmap Animation
Layered opacity for smooth color transitions:

```typescript
greenOpacity: [1, 0.3, 0]  // Fades out
blueOpacity: [0, 0.7, 1]   // Fades in
```

## 📞 Contact

**Naga City Health Office**  
Phone: **(054) 473-2326**

For dengue reporting, service inquiries, and eligibility questions.

## 🗺️ Roadmap

- ✅ **Phase 1:** CVD assessment, dengue monitoring, health passport (Current)
- 🔜 **Phase 2:** Hospital data integration, appointments (Q3 2025)
- 🔮 **Phase 3:** PhilSys National ID sync (2026)

## 🌟 Vision

> "MyHealth is designed to grow with the community, adapting to emerging health needs and technological advancements."

---

**Built with ❤️ for the people of Naga City**
