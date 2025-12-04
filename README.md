# MyHealth Web 🌐

A Next.js web application for community health services in Naga City, Philippines.

## Features

### Core Services
- **💓 CVD Risk Calculator** - Comprehensive cardiovascular disease risk assessment
- **🦟 Dengue Watch** - Interactive outbreak map with real-time hotspots
- **🏥 Health Passport (LifeQR)** - Digital emergency health information with QR codes
- **🚨 Emergency Tools** - Stroke (F.A.S.T.), heart attack, dengue, and child emergency guides
- **📅 Wellness Screening** - Free health screening schedules and eligibility
- **🗺️ Roadmap** - Project timeline and future features

### Key Features
- ✨ Responsive design (mobile-first)
- 🎨 Modern gradient backgrounds and glassmorphism effects
- 📱 Progressive Web App (PWA) ready
- 🔒 Client-side data persistence (LifeQR)
- 🗺️ Leaflet.js interactive maps
- ☎️ Direct emergency calling integration

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS
- **Maps:** Leaflet.js with OpenStreetMap
- **State:** React Context API
- **Icons:** Lucide React
- **QR Codes:** qrcode.react
- **Deployment:** Vercel-ready

## Design System

### Color Palette
- **Primary:** Medical Blue (#0EA5E9)
- **Emergency:** Red (#EF4444)
- **Dengue:** Orange (#F97316)
- **Stroke:** Purple (#8B5CF6)
- **Success:** Green (#22C55E)
- **Backgrounds:** Gradient overlays (slate-50 to white)

### Components
- Gradient hero sections
- Glassmorphism cards
- Animated interactive elements
- Responsive navigation
- Modal overlays

## Project Structure

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Home page
├── cvd/page.tsx            # CVD risk calculator
├── dengue/page.tsx         # Dengue outbreak map
├── identify/
│   ├── page.tsx            # Emergency tool hub
│   ├── stroke/page.tsx     # F.A.S.T. detection
│   ├── heart/page.tsx      # Heart attack signs
│   ├── dengue/page.tsx     # Dengue symptoms
│   └── child/page.tsx      # Pediatric emergencies
├── passport/page.tsx       # LifeQR health passport
├── roadmap/page.tsx        # Project roadmap
├── screening/page.tsx      # Wellness screening catalog
└── globals.css             # Tailwind config

components/
├── top-nav.tsx             # Main navigation bar
├── bottom-nav.tsx          # Mobile bottom navigation
├── passport-provider.tsx   # LifeQR state management
├── lifeqr-provider.tsx     # QR code context
└── stroke-timer-provider.tsx # Global stroke timer

public/
└── favicon/                # PWA icons and manifest
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone repository
cd myhealth

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Key Features Explained

### CVD Risk Calculator
- Multi-step questionnaire (11 questions)
- Point-based scoring system
- Risk stratification: Low, Moderate, High, Very High
- Actionable recommendations based on risk level

### Dengue Outbreak Map
- Interactive Leaflet map
- Pulsing animated markers for hotspot severity
- Color-coded risk levels (Red: High, Orange: Moderate)
- Centered on Naga City (13.6218°N, 123.1948°E)
- Prevention tips and reporting contact

### Stroke Timer (F.A.S.T.)
- Global persistent timer across pages
- Floating toast notification on bottom-right
- Interactive symptom checklist (Face, Arms, Speech, Time)
- Educational content about stroke golden hour

### LifeQR (Health Passport)
- Client-side localStorage persistence
- QR code generation for emergency scanning
- Emergency contact management
- Medical history and allergies
- Blood type and conditions

## Context Providers

### PassportProvider
Manages health passport data with localStorage persistence.

### LifeQRProvider  
Handles QR code generation and viewing state.

### StrokeTimerProvider
Global timer state that persists across navigation with floating toast.

## Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel

# Or connect GitHub repository
# Vercel will auto-deploy on push
```

### Environment Variables
None required - uses public OpenStreetMap tiles.

## Development Notes

### Styling
- Uses Tailwind CSS with custom color extensions
- Gradient backgrounds via `bg-gradient-to-br`
- Shadows for depth (`shadow-lg`, `shadow-2xl`)
- Custom animations for pulsing markers and hover states

### Navigation
- Multi-level routing with Next.js App Router
- Responsive: Desktop top nav, mobile bottom nav
- Active route highlighting

### Data Flow
- LifeQR data: Client-side only (privacy-first)
- Stroke timer: In-memory state via React Context
- No backend required for MVP

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Next.js automatic code splitting
- Image optimization via `next/image`
- Client-side navigation (SPA-like)
- Lazy-loaded Leaflet maps

## Roadmap

- ✅ **Phase 1:** Public Beta (MVP Features) - **LIVE**
- 🔄 **Phase 2:** Mobile App (Flutter) - In Development
- 🔜 **Phase 3:** Hospital Data Integration
- 🔜 **Phase 4:** PhilSys National ID Sync

## Credits

**Developer:** MyHealth Team  
**Design:** Modern gradient web design  
**Location:** Naga City, Camarines Sur, Philippines  
**Emergency Contact:** (054) 473-2326  
**Dengue Hotline:** (054) 473-2326

---

Built with ❤️ for the health of Naga City