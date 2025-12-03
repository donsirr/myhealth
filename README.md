# MyHealth - Civic Health Platform

A modern, accessible web & mobile application designed to empower Filipinos with proactive health management tools, real-time dengue outbreak monitoring, emergency identification systems, and digital health passport capabilities.

**Last Updated:** December 4, 2025

![MyHealth Platform](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=flat-square&logo=framer)

## 🎯 Overview

MyHealth is a **civic health initiative**, providing citizens with:

- **Cardiovascular Risk Assessment** - Evidence-based CVD, stroke, and heart attack risk calculators
- **Real-time Dengue Monitoring** - Interactive map showing outbreak hotspots in Naga City (as of right now)
- **Digital Health Passport** - Emergency medical information with QR code access
- **Emergency Identification Hub** - F.A.S.T. stroke detection, heart attack, dengue, and child emergency tools
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

### 🚨 Emergency Identification Hub
**Route:** `/identify`

A comprehensive emergency identification system with 4 specialized tools:

#### Stroke Detection (F.A.S.T.)
- Interactive F.A.S.T. symptom checker (Face, Arms, Speech, Time)
- **Persistent timer** - tracks time across all pages when symptoms detected
- Educational content on stroke reversibility (3-4.5 hour window)
- Purple theme for neurological emergencies
- **Route:** `/identify/stroke`

#### Heart Attack Recognition
- Warning signs identification (chest pain, upper body pain, shortness of breath)
- Gender-specific symptoms (women's symptoms highlighted)
- Aspirin guidance for first aid
- Red theme for cardiac emergencies
- **Route:** `/identify/heart`

#### Dengue Alert System
- Common symptoms vs. critical warning signs
- Day 3-7 critical period awareness
- Medication warnings (avoid aspirin/ibuprofen)
- Orange theme for fever-related emergencies
- **Route:** `/identify/dengue`

#### Child Emergency Guide
- Age-specific emergency thresholds
- Fever quick reference (0-3mo, 3-6mo, 6+mo)
- 6 critical scenarios with immediate actions
- Teal theme for pediatric care
- **Route:** `/identify/child`

**All tools include:**
- Emergency CTAs (911 / Naga City Health Office)
- High-accessibility design for panic situations
- Back to menu navigation

### 🛣️ Future Roadmap

#### Phase 1: Public Beta & Awareness ✅ **COMPLETE** (December 2025)
```
████████████████████████████████████████ 100%
```
- ✅ CVD Assessment (3 calculators: CVD, Stroke, Heart Attack)
- ✅ Dengue Map (Leaflet integration with Naga City bounds)
- ✅ Digital Health Passport (LifeQR with QR code)
- ✅ Emergency Identification Hub (Stroke, Heart, Dengue, Child)
- ✅ Wellness Screening Catalog

#### Phase 1.5: Mobile App Launch  🚧 **IN PLANNING** (Q1 2026)
```
████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 20%
```
- 📱 iOS & Android native apps
- 🔔 Push notifications for dengue alerts
- 📍 Location-based health services
- 🎯 Offline mode for rural areas

#### Phase 2: Hospital Data Integration 🔜 **PLANNED** (Q2-Q4 2026)
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%
```
- 🏥 Real-time bed availability
- 📅 Appointment scheduling
- 📱 Mobile app enhancements
- 🔗 Hospital system API integration

#### Phase 3: PhilSys National ID Sync 🔮 **FUTURE** (2027+)
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%
```
- 🆔 National ID authentication
- 🏛️ Government health records integration
- 🔐 Enhanced security with PhilSys

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

## 🏗️ Project Structure

```
myhealth/
├── app/
│   ├── cvd/              # CVD risk assessment page
│   ├── dengue/           # Dengue monitoring page
│   ├── identify/         # Emergency identification hub
│   │   ├── page.tsx      # Hub (selection menu)
│   │   ├── stroke/       # Stroke F.A.S.T. tool
│   │   ├── heart/        # Heart attack recognition
│   │   ├── dengue/       # Dengue alert system
│   │   └── child/        # Child emergency guide
│   ├── passport/         # Digital health passport
│   │   └── edit/         # Passport editor with QR code
│   ├── roadmap/          # Future roadmap page
│   ├── screening/        # Wellness screening page
│   ├── layout.tsx        # Root layout with nav
│   └── page.tsx          # Home page
├── components/
│   ├── dengue-map.tsx          # Leaflet map component
│   ├── stroke-timer-provider.tsx  # Global timer for stroke detection
│   ├── lifeqr-modal.tsx        # QR code modal
│   ├── lifeqr-provider.tsx     # LifeQR context
│   ├── passport-provider.tsx   # Passport data context
│   └── top-nav.tsx             # Top navigation
└── README.md
```

## 🗺️ Roadmap Progress

### Overall Platform Completion
```
██████████████████░░░░░░░░░░░░░░░░░░░░░░ 45%
```

| Phase | Status | Progress | Target Date |
|-------|--------|----------|-------------|
| **Phase 1** | ✅ Complete | 100% | Dec 2025 |
| **Phase 1.5** | 🚧 Planning | 20% | Q1 2026 |
| **Phase 2** | 🔜 Planned | 0% | Q2-Q4 2026 |
| **Phase 3** | 🔮 Future | 0% | 2027+ |

### Detailed Breakdown

- ✅ **Phase 1:** CVD assessment, dengue monitoring, health passport, emergency ID hub (4 tools)
- 📱 **Phase 1.5:** Mobile app (iOS/Android) with push notifications
- 🔜 **Phase 2:** Hospital data integration, appointments, mobile enhancements
- 🔮 **Phase 3:** PhilSys National ID sync

## 🌟 Vision

> "MyHealth is designed to grow with the community, adapting to emerging health needs and technological advancements."

---

**Built with ❤️ for the people of Naga City**