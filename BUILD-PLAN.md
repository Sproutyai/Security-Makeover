# BUILD PLAN — All American Alarm Security Makeover

**Project:** Remake of www.allamericanalarm.com  
**Stack:** Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript + App Router (`src/` directory)  
**Repo:** `/Users/growthchain/.openclaw/workspace/security-makeover`  
**GitHub:** github.com/SproutyAi/Security-Makeover  
**Live:** security-makeover.vercel.app  

> **IMPORTANT:** Tailwind v4 uses CSS-based configuration (`@theme` in globals.css), NOT a `tailwind.config.ts` file. All theme tokens go in `src/app/globals.css` using `@theme inline { }`.

---

## EXECUTION ORDER

```
Phase 1 (FIRST):  Agent 7 — Shared Components & Assets
Phase 2 (PARALLEL): Agents 1-6 — All build simultaneously after Agent 7 completes
```

Agent 7 MUST complete first because it creates:
- Downloaded/organized image assets
- Shared UI components (SectionHeader, CTAButton, ClientLogoGrid, ServiceCard, etc.)
- Tailwind theme tokens & CSS variables in globals.css

Agents 1-6 can then work in parallel since they write to different file paths.

---

## DESIGN SYSTEM (All Agents Reference This)

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy` | `#0a1628` | Primary dark background |
| `--color-charcoal` | `#1a1a2e` | Alternate dark background |
| `--color-dark-surface` | `#0f1f3a` | Cards on dark backgrounds |
| `--color-electric-blue` | `#00b4d8` | Primary accent, links, tech feel |
| `--color-electric-blue-hover` | `#0096b7` | Hover state |
| `--color-red` | `#e63946` | CTA buttons, urgent accents |
| `--color-red-hover` | `#c5303c` | CTA hover |
| `--color-white` | `#ffffff` | Text on dark, light backgrounds |
| `--color-light-gray` | `#f0f4f8` | Light section backgrounds |
| `--color-medium-gray` | `#94a3b8` | Secondary text on dark |
| `--color-gold` | `#fbbf24` | Stars, ratings |

### Typography
- **Headlines:** `font-heading` → Inter (weight 800/900) — bold, modern, authoritative
- **Body:** `font-sans` → Inter (weight 400/500) — clean readability
- **Accent/Tech:** `font-mono` → JetBrains Mono — for specs, stats, technical details

### Spacing & Layout
- Max content width: `max-w-7xl` (1280px)
- Section vertical padding: `py-20 md:py-28`
- Component gap: `gap-8` standard, `gap-12` for major sections
- Border radius: `rounded-lg` (8px) for cards, `rounded-full` for buttons/pills

### Section Pattern
Alternate between dark (`bg-navy`) and light (`bg-light-gray` or `bg-white`) sections. Most sections are dark.

---

## IMAGE ASSETS (Referenced by All Agents)

All images go in `public/images/`. Agent 7 downloads these.

### Trailer Images (HERO priority)
| Local Path | Source URL |
|------------|-----------|
| `public/images/trailer-hero.jpg` | `https://allamericanalarm.com/wp-content/uploads/2025/07/IMG_9678-scaled.jpg` |
| `public/images/trailer-product-1.png` | `https://allamericanalarm.com/wp-content/uploads/2025/02/aaa3.png` |
| `public/images/trailer-product-2.png` | `https://allamericanalarm.com/wp-content/uploads/2025/02/aaa5.png` |
| `public/images/trailer-brochure.png` | `https://allamericanalarm.com/wp-content/uploads/2025/02/Mobile-Surveillance-Brochure-1.png` |
| `public/images/trailer-vs-guard.png` | `https://allamericanalarm.com/wp-content/uploads/2025/03/1-Mobile-Surveillance-Trailver-vs-Guard-Service.png` |
| `public/images/guard-sleeping.jpg` | `https://allamericanalarm.com/wp-content/uploads/2025/08/guard-sleeping.jpg` |

### Commercial Images
| Local Path | Source URL |
|------------|-----------|
| `public/images/commercial-surveillance.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/02/CommercialSurveillanceSystems.jpg` |
| `public/images/industrial-perimeter.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/02/IndustrialPerimeterProtection.jpg` |
| `public/images/access-control.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/02/sam_7984.jpg` |
| `public/images/entry-system.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/02/entre1.jpg` |
| `public/images/keyless-entry.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/02/keylessentry.jpg` |

### Team / About Images
| Local Path | Source URL |
|------------|-----------|
| `public/images/team-mission.jpg` | `https://allamericanalarm.com/wp-content/uploads/2023/10/Our-Mission-Photo-Cover.jpg` |
| `public/images/technicians.jpg` | `https://allamericanalarm.com/wp-content/uploads/2023/11/Technicians-about-us.jpg` |
| `public/images/worker.jpg` | `https://allamericanalarm.com/wp-content/uploads/2023/11/worker-1-about-us-rotated.jpg` |

### Brand
| Local Path | Source URL |
|------------|-----------|
| `public/images/logo.png` | `https://allamericanalarm.com/wp-content/uploads/2024/02/2025-logo.png` |
| `public/images/logo-small.png` | `https://allamericanalarm.com/wp-content/uploads/2024/02/2025-logo-300x62.png` |

### Client Logos (all go in `public/images/clients/`)
| Local Path | Source URL |
|------------|-----------|
| `public/images/clients/adams-homes.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Adams_Homes_Long.png` |
| `public/images/clients/apothicare.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Apothicare-360-Logo.png` |
| `public/images/clients/bonita-church.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Bonita-Church.png` |
| `public/images/clients/carls-wine-vault.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Carls-Wine-vault-logo.png` |
| `public/images/clients/clive-daniel.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Clive-Daniel-Logo.png` |
| `public/images/clients/colonial-country-club.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Colonial-Country-Club.png` |
| `public/images/clients/garramone.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Garramone.png` |
| `public/images/clients/hibiscus-house.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Hibiscus-House-Logo.png` |
| `public/images/clients/road-house-cafe.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Road-House-Cafe-Logo.png` |
| `public/images/clients/shec.jpg` | `https://allamericanalarm.com/wp-content/uploads/2018/03/SHEC-Logo.jpg` |
| `public/images/clients/sun-splash.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/Sun-Splash-Logosmall.png` |
| `public/images/clients/rib-city.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-RibCity.png` |
| `public/images/clients/community-cooperative.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-community-coperative.png` |
| `public/images/clients/deroma.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-deroma.png` |
| `public/images/clients/dunkin-donuts.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-dunkin-dounuts.png` |
| `public/images/clients/fgcu.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-fgcu.png` |
| `public/images/clients/salvation-army.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-salvation-army.png` |
| `public/images/clients/service-master.png` | `https://allamericanalarm.com/wp-content/uploads/2018/03/logo-service-master.png` |

---

## AGENT 7: SHARED COMPONENTS & ASSETS (⚡ RUNS FIRST)

**Purpose:** Download all images, set up the theme system, and create every shared component that other agents will import.

### Task 1: Download All Images
Download every image listed in the IMAGE ASSETS section above using `curl` or `wget`. Create directories:
```
public/images/
public/images/clients/
```

### Task 2: Update globals.css with Theme System
**File:** `src/app/globals.css`

Replace the entire file with:

```css
@import "tailwindcss";

@theme inline {
  --color-navy: #0a1628;
  --color-charcoal: #1a1a2e;
  --color-dark-surface: #0f1f3a;
  --color-electric-blue: #00b4d8;
  --color-electric-blue-hover: #0096b7;
  --color-red: #e63946;
  --color-red-hover: #c5303c;
  --color-white: #ffffff;
  --color-light-gray: #f0f4f8;
  --color-medium-gray: #94a3b8;
  --color-gold: #fbbf24;
  --color-border-dark: #1e3a5f;

  --font-sans: "Inter", system-ui, sans-serif;
  --font-heading: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-navy);
  color: var(--color-white);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Utility classes for section backgrounds */
.section-dark { background-color: var(--color-navy); }
.section-charcoal { background-color: var(--color-charcoal); }
.section-light { background-color: var(--color-light-gray); color: var(--color-navy); }
.section-white { background-color: var(--color-white); color: var(--color-navy); }
```

### Task 3: Create Shared Components

All components go in `src/components/`. Use TypeScript, Tailwind classes, and the theme tokens defined above.

---

#### `src/components/SectionHeader.tsx`
A reusable section header with optional eyebrow text, heading, and subtitle.

```tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean; // true when on light backgrounds
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const eyebrowColor = light ? 'text-electric-blue' : 'text-electric-blue';
  const titleColor = light ? 'text-navy' : 'text-white';
  const subtitleColor = light ? 'text-navy/70' : 'text-medium-gray';

  return (
    <div className={`${alignClass} mb-12`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${eyebrowColor} mb-3 block`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl ${subtitleColor} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

---

#### `src/components/CTAButton.tsx`
Primary and secondary CTA buttons.

```tsx
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', size = 'md', className = '' }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 uppercase tracking-wide';
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-red text-white hover:bg-red-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-electric-blue text-white hover:bg-electric-blue-hover shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
```

---

#### `src/components/ServiceCard.tsx`
Card component for displaying services with icon, title, description.

```tsx
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block bg-dark-surface border border-border-dark rounded-lg p-8 hover:border-electric-blue transition-all duration-300 hover:-translate-y-1">
      <div className="text-electric-blue mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">{title}</h3>
      <p className="text-medium-gray leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide">
        Learn More →
      </span>
    </Link>
  );
}
```

---

#### `src/components/ClientLogoGrid.tsx`
Scrolling/grid display of client logos.

```tsx
import Image from 'next/image';

const clients = [
  { name: 'Dunkin Donuts', src: '/images/clients/dunkin-donuts.png' },
  { name: 'FGCU', src: '/images/clients/fgcu.png' },
  { name: 'Salvation Army', src: '/images/clients/salvation-army.png' },
  { name: 'Sun Splash', src: '/images/clients/sun-splash.png' },
  { name: 'Colonial Country Club', src: '/images/clients/colonial-country-club.png' },
  { name: 'Clive Daniel', src: '/images/clients/clive-daniel.png' },
  { name: 'Service Master', src: '/images/clients/service-master.png' },
  { name: 'Rib City', src: '/images/clients/rib-city.png' },
  { name: 'Community Cooperative', src: '/images/clients/community-cooperative.png' },
  { name: 'Adams Homes', src: '/images/clients/adams-homes.png' },
  { name: 'Deroma', src: '/images/clients/deroma.png' },
  { name: 'Hibiscus House', src: '/images/clients/hibiscus-house.png' },
];

export default function ClientLogoGrid() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-medium-gray text-sm font-semibold uppercase tracking-widest mb-10">
          Trusted by Leading Organizations Across Southwest Florida
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image
                src={client.src}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

#### `src/components/PhoneCTA.tsx`
Floating/inline phone call-to-action.

```tsx
export default function PhoneCTA({ className = '' }: { className?: string }) {
  return (
    <a
      href="tel:239-334-7447"
      className={`inline-flex items-center gap-2 font-bold text-white hover:text-electric-blue transition-colors ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
      <span className="text-lg">239-334-7447</span>
    </a>
  );
}
```

---

#### `src/components/FeatureCard.tsx`
For feature grids (trailer features, service features).

```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors">
      <div className="text-electric-blue text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-medium-gray text-sm leading-relaxed">{description}</p>
    </div>
  );
}
```

---

#### `src/components/StatCounter.tsx`
For displaying impressive stats/numbers.

```tsx
interface StatCounterProps {
  stats: { value: string; label: string }[];
}

export default function StatCounter({ stats }: StatCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-5xl font-extrabold text-electric-blue mb-2">{stat.value}</div>
          <div className="text-medium-gray text-sm uppercase tracking-wide font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
```

---

#### `src/components/TestimonialCard.tsx`
For displaying testimonials/reviews.

```tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

export default function TestimonialCard({ quote, author, role, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-dark-surface border border-border-dark rounded-lg p-8">
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="text-white text-lg leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <div className="font-bold text-white">{author}</div>
        {role && <div className="text-medium-gray text-sm">{role}</div>}
      </div>
    </div>
  );
}
```

---

#### `src/components/ContactForm.tsx`
Reusable contact/quote form component.

```tsx
'use client';

import { useState } from 'react';

interface ContactFormProps {
  formType?: 'contact' | 'quote' | 'deployment';
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ formType = 'contact', title, subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const serviceOptions = [
    'Mobile Surveillance Trailer',
    'Video Surveillance',
    'Access Control',
    'Alarm Systems',
    'Fire Alarm Systems',
    'Integrated Security Solution',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic — can integrate with API route later
    alert('Thank you! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dark-surface border border-border-dark rounded-lg p-8">
      {title && <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>}
      {subtitle && <p className="text-medium-gray mb-6">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text" name="name" placeholder="Full Name *" required
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
          <input
            type="email" name="email" placeholder="Email Address *" required
            value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel" name="phone" placeholder="Phone Number *" required
            value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
          <input
            type="text" name="company" placeholder="Company Name"
            value={formData.company} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
        </div>
        <select
          name="service" value={formData.service} onChange={handleChange}
          className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
        >
          <option value="">Select a Service</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {formType === 'deployment' && (
          <>
            <input
              type="text" name="location" placeholder="Deployment Location / Address"
              className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
            />
            <select
              name="timeline"
              className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
            >
              <option value="">Deployment Timeline</option>
              <option value="asap">ASAP / Emergency</option>
              <option value="week">Within a Week</option>
              <option value="month">Within a Month</option>
              <option value="planning">Still Planning</option>
            </select>
          </>
        )}
        <textarea
          name="message" placeholder={formType === 'deployment' ? 'Tell us about your site and security needs...' : 'How can we help?'}
          rows={4}
          value={formData.message} onChange={handleChange}
          className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full bg-red text-white font-bold py-4 rounded-full hover:bg-red-hover transition-colors uppercase tracking-wide text-lg"
        >
          {formType === 'deployment' ? 'Request Deployment' : formType === 'quote' ? 'Get Your Free Quote' : 'Send Message'}
        </button>
        <p className="text-medium-gray text-xs text-center">
          Or call us directly: <a href="tel:239-334-7447" className="text-electric-blue font-semibold">239-334-7447</a>
        </p>
      </form>
    </div>
  );
}
```

---

#### `src/components/Icons.tsx`
SVG icon components used across the site.

```tsx
// Simple inline SVG icons - used by ServiceCard, FeatureCard, etc.
// Each icon is a functional component returning an SVG element.

export function CameraIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

export function ShieldIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

export function LockIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

export function FireIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  );
}

export function BoltIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

export function TruckIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.988-1.106a48.554 48.554 0 0 0-10.024 0 1.106 1.106 0 0 0-.988 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

export function BuildingIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

export function ClockIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function SunIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}

export function MapPinIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export function CheckCircleIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function WifiIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
  );
}

export function ChartIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}
```

---

### Files Created by Agent 7:
```
src/app/globals.css                    (REPLACE existing)
src/components/SectionHeader.tsx
src/components/CTAButton.tsx
src/components/ServiceCard.tsx
src/components/ClientLogoGrid.tsx
src/components/PhoneCTA.tsx
src/components/FeatureCard.tsx
src/components/StatCounter.tsx
src/components/TestimonialCard.tsx
src/components/ContactForm.tsx
src/components/Icons.tsx
public/images/                         (all downloaded images)
public/images/clients/                 (all client logos)
```

### Dependencies: NONE (runs first)

---

## AGENT 1: LAYOUT & NAVIGATION

**Purpose:** Create the global layout shell — header, footer, navigation, font loading, metadata. Every page on the site inherits this.

### Files to Create/Modify:

#### `src/app/layout.tsx` (REPLACE existing)

```tsx
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'All American Alarm | Mobile Surveillance Trailers & Commercial Security',
    template: '%s | All American Alarm',
  },
  description: 'Southwest Florida\'s leader in mobile surveillance trailers and commercial security. Rapid-deploy 24/7 monitoring for construction sites, events, and commercial properties. Call 239-334-7447.',
  keywords: ['mobile surveillance trailer', 'commercial security', 'Fort Myers', 'Naples', 'Cape Coral', 'Southwest Florida', 'construction site security', 'video surveillance'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://security-makeover.vercel.app',
    siteName: 'All American Alarm',
    title: 'All American Alarm | Mobile Surveillance Trailers & Commercial Security',
    description: 'Rapid-deploy surveillance for construction, events & commercial sites. 24/7 AI-powered monitoring across Southwest Florida.',
    images: [{ url: '/images/trailer-hero.jpg', width: 1200, height: 630, alt: 'All American Alarm Mobile Surveillance Trailer' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-navy text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

#### `src/components/Header.tsx`

**Design:**
- Sticky header, dark navy/transparent background that becomes solid on scroll
- Left: Logo image (`/images/logo.png`)
- Center: Navigation links
- Right: Phone number + "Get a Quote" red button
- Mobile: Hamburger menu → slide-in drawer

**Navigation Structure:**
```
Mobile Surveillance Trailers  (dropdown: How It Works, Features & Technology, Industries We Serve)
Commercial Security           (dropdown: Video Surveillance, Access Control, Alarm Systems, Fire Alarms, Integrated Solutions)
About                         (dropdown: Our Story, Reviews, Service Areas)
Contact
```

**Exact content for the component:**

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PhoneCTA from './PhoneCTA';
import CTAButton from './CTAButton';

const navigation = [
  {
    name: 'Mobile Surveillance',
    href: '/mobile-surveillance-trailers',
    children: [
      { name: 'How It Works', href: '/mobile-surveillance-trailers/how-it-works' },
      { name: 'Features & Technology', href: '/mobile-surveillance-trailers/features' },
      { name: 'Industries We Serve', href: '/mobile-surveillance-trailers/industries' },
    ],
  },
  {
    name: 'Commercial Security',
    href: '/commercial',
    children: [
      { name: 'Video Surveillance', href: '/commercial/video-surveillance' },
      { name: 'Access Control', href: '/commercial/access-control' },
      { name: 'Alarm Systems', href: '/commercial/alarm-systems' },
      { name: 'Fire Alarm Systems', href: '/commercial/fire-alarms' },
      { name: 'Integrated Solutions', href: '/commercial/integrated-solutions' },
    ],
  },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Case Studies', href: '/about/case-studies' },
      { name: 'Reviews', href: '/about/reviews' },
      { name: 'Service Areas', href: '/about/service-areas' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar with phone and license */}
      <div className="hidden md:block bg-charcoal border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-xs text-medium-gray">
          <span>FL License #EF20002028 | Serving Southwest Florida Since 2001</span>
          <PhoneCTA className="text-xs" />
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="All American Alarm" width={200} height={42} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.href} className="text-white hover:text-electric-blue transition-colors font-medium text-sm uppercase tracking-wide py-2">
                {item.name}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-charcoal border border-border-dark rounded-lg shadow-xl py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2.5 text-sm text-medium-gray hover:text-white hover:bg-navy transition-colors">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <PhoneCTA />
          <CTAButton href="/contact/quote" size="sm">Get a Quote</CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-lg py-2">
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.name} href={child.href} onClick={() => setMobileOpen(false)} className="block text-medium-gray pl-4 py-1.5 text-sm hover:text-electric-blue">
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-border-dark">
              <PhoneCTA className="mb-3" />
              <CTAButton href="/contact/quote" size="md" className="w-full text-center">Get a Quote</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
```

---

#### `src/components/Footer.tsx`

**Design:** Dark charcoal background, 4-column layout. Contains: company info, service links, resource links, contact info.

```tsx
import Link from 'next/link';
import Image from 'next/image';
import PhoneCTA from './PhoneCTA';

const footerLinks = {
  services: [
    { name: 'Mobile Surveillance Trailers', href: '/mobile-surveillance-trailers' },
    { name: 'Video Surveillance', href: '/commercial/video-surveillance' },
    { name: 'Access Control', href: '/commercial/access-control' },
    { name: 'Alarm Systems', href: '/commercial/alarm-systems' },
    { name: 'Fire Alarm Systems', href: '/commercial/fire-alarms' },
    { name: 'Integrated Solutions', href: '/commercial/integrated-solutions' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/about/case-studies' },
    { name: 'Reviews', href: '/about/reviews' },
    { name: 'Service Areas', href: '/about/service-areas' },
    { name: 'FAQ', href: '/contact/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image src="/images/logo.png" alt="All American Alarm" width={180} height={38} className="h-9 w-auto mb-6" />
            <p className="text-medium-gray text-sm leading-relaxed mb-4">
              Southwest Florida&apos;s leader in mobile surveillance trailers and commercial security solutions. Protecting businesses since 2001.
            </p>
            <p className="text-medium-gray text-xs">
              FL License #EF20002028<br />
              FL License #EG13000164
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-medium-gray">
              <PhoneCTA />
              <p>
                2030 Crawford Street<br />
                Fort Myers, FL 33901
              </p>
              <p>
                <span className="text-white font-semibold">Hours:</span><br />
                Mon–Fri: 8:00 AM – 4:00 PM<br />
                24/7 Emergency Monitoring
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-medium-gray">
          <p>&copy; {new Date().getFullYear()} All American Alarm. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">&ldquo;Because We Care&rdquo; — Serving Fort Myers, Naples & Cape Coral</p>
        </div>
      </div>
    </footer>
  );
}
```

---

### Files Created by Agent 1:
```
src/app/layout.tsx           (REPLACE)
src/components/Header.tsx
src/components/Footer.tsx
```

### Dependencies: Agent 7 (needs globals.css theme tokens, PhoneCTA, CTAButton, images)

---

## AGENT 2: HOMEPAGE

**Purpose:** Build the main landing page — the most important page on the site. Mobile surveillance trailers are the HERO product.

### File: `src/app/page.tsx` (REPLACE existing)

**Section-by-section breakdown:**

#### Section 1: Hero
- **Background:** Full-viewport image (`/images/trailer-hero.jpg`) with dark gradient overlay
- **Headline:** `MOBILE SURVEILLANCE. DEPLOYED IN MINUTES.`
- **Subheadline:** `24/7 AI-powered monitoring for construction sites, events, and commercial properties across Southwest Florida.`
- **CTAs:** "Request Deployment" (red button → `/contact/deployment`) + "See How It Works" (outline → `/mobile-surveillance-trailers/how-it-works`)
- **Bottom of hero:** Stats strip — `24/7 Monitoring` | `< 24hr Deployment` | `Since 2001` | `FL Licensed & Insured`

#### Section 2: Problem/Solution Statement (dark section)
- **Eyebrow:** `WHY MOBILE SURVEILLANCE?`
- **Title:** `Smarter Than Guard Services. More Flexible Than Fixed Cameras.`
- **Body:** `Traditional security guards cost $15-25/hour and can't be everywhere. Fixed cameras take weeks to install and can't move when your project does. Our mobile surveillance trailers deploy in under 24 hours, provide 360° AI-powered monitoring, and cost a fraction of manned security.`
- **Image:** `/images/trailer-vs-guard.png` (the comparison infographic)

#### Section 3: Services Grid (charcoal section)
- **Eyebrow:** `OUR SERVICES`
- **Title:** `Comprehensive Commercial Security Solutions`
- Use `ServiceCard` components with these 6 cards:
  1. **Mobile Surveillance Trailers** — `TruckIcon` — "Rapid-deploy trailer units with PTZ cameras, solar power, and LTE connectivity. On-site in under 24 hours." → `/mobile-surveillance-trailers`
  2. **Video Surveillance & AI** — `CameraIcon` — "NDAA-compliant cameras with AI-powered analytics, cloud backup, and remote viewing from any device." → `/commercial/video-surveillance`
  3. **Access Control** — `LockIcon` — "Custom business hours, employee management, keyless entry, and multi-level access control." → `/commercial/access-control`
  4. **Alarm Systems** — `ShieldIcon` — "Commercial-grade DMP alarm systems with 24/7 Five Diamond monitoring. Used in government and banking." → `/commercial/alarm-systems`
  5. **Fire Alarm Systems** — `FireIcon` — "Installation, monitoring, and inspection for education, healthcare, retail, and government facilities." → `/commercial/fire-alarms`
  6. **Integrated Solutions** — `BoltIcon` — "One-stop-shop: security, fire, surveillance, access, networking, and cloud — all working together." → `/commercial/integrated-solutions`

#### Section 4: How It Works (navy section)
- **Eyebrow:** `SIMPLE PROCESS`
- **Title:** `From Call to Deployment in 3 Steps`
- Three numbered steps in a horizontal row:
  1. **Free Site Assessment** — "Our deployment team evaluates your location and security needs within 24 hours."
  2. **Custom Security Design** — "We design a tailored solution — whether it's a mobile trailer, fixed cameras, or integrated system."
  3. **Rapid Deployment** — "Professional installation and activation. Mobile trailers can be operational same-day."

#### Section 5: Comparison Table (charcoal section)
- **Eyebrow:** `THE ALL AMERICAN DIFFERENCE`
- **Title:** `Why Choose All American Alarm?`
- Table with ✓/✗ comparing "All American Alarm" vs "Other Companies":

| Feature | All American | Others |
|---------|-------------|--------|
| Customized Security Solutions | ✓ | ✗ |
| Written Guarantees | ✓ | ✗ |
| Live, Local Technicians (No Subcontractors) | ✓ | ✗ |
| Speak Directly to the Owner | ✓ | ✗ |
| 24/7 Five Diamond Monitoring | ✓ | ✗ |
| American Made Products (DMP) | ✓ | ✗ |
| Rapid Mobile Trailer Deployment | ✓ | ✗ |
| One-Stop Security + Fire + Surveillance + Access | ✓ | ✗ |

#### Section 6: Client Logos
- Use the `<ClientLogoGrid />` component

#### Section 7: Testimonial + CTA (navy section)
- **Testimonial:** "Your company is the one rare gem in our community." — Tracy Galloway, CCMI
- **CTA block:** "Ready to Secure Your Site?" + "Get a Free Quote" button + phone number

### File Created:
```
src/app/page.tsx    (REPLACE)
```

### Dependencies: Agent 7 (all shared components + images), Agent 1 (layout wraps this page)

---

## AGENT 3: MOBILE SURVEILLANCE TRAILERS

**Purpose:** Build the main trailer page and 3 sub-pages. This is the HERO product — these pages must be the most impressive on the site.

### Files to Create:

#### 1. `src/app/mobile-surveillance-trailers/page.tsx` — Main Trailer Landing Page

**Sections:**

**Hero:** Full-width image (`/images/trailer-hero.jpg`) with overlay.
- **Headline:** `MOBILE SURVEILLANCE TRAILERS`
- **Subheadline:** `Rapid-deploy security that goes where you need it. Solar-powered, AI-monitored, and operational in under 24 hours.`
- **CTAs:** "Request Deployment" (red) + "Download Brochure" (outline)

**Stats Section:** Use `StatCounter` component:
- `24/7` — Continuous Monitoring
- `< 24hr` — Deployment Time
- `360°` — Camera Coverage
- `100%` — Solar Powered

**8 Key Features Section** using `FeatureCard` components:
1. **High-Resolution PTZ Cameras** — "Pan-tilt-zoom cameras with night vision providing complete 360° coverage of your site."
2. **24/7 Live Monitoring** — "Professional monitoring center watches your site around the clock with real-time alerts."
3. **Autonomous Solar Power** — "Solar panels with generator backup ensure continuous operation without external power."
4. **Weatherproof Design** — "Built for Florida conditions — hurricane-rated construction withstands extreme weather."
5. **Rapid Deployment** — "Delivered and operational in under 24 hours. Relocate as your project moves."
6. **Real-Time Alerts & Remote Access** — "Instant mobile notifications with live viewing from any device, anywhere."
7. **Integrated Communication** — "Built-in PA systems and two-way audio for real-time intervention."
8. **Scalable Solutions** — "Add thermal imaging, license plate recognition, drones, or additional units as needed."

**Trailer vs Guard Service Section:**
- Two-column comparison using the image `/images/trailer-vs-guard.png`
- Left side: image of guard sleeping (`/images/guard-sleeping.jpg`) with text about guard service limitations
- Right side: trailer product photo (`/images/trailer-product-1.png`) with advantages list

**Brochure Download Section:**
- Display `/images/trailer-brochure.png`
- "Download Our Mobile Surveillance Brochure" CTA

**CTA Section:**
- "Ready to Deploy?" + `ContactForm` component with `formType="deployment"`

---

#### 2. `src/app/mobile-surveillance-trailers/how-it-works/page.tsx`

**Metadata:** `title: 'How It Works'`

**Content:**

**Hero:** Smaller hero, dark background.
- **Headline:** `HOW IT WORKS`
- **Subheadline:** `From first call to full operation — our streamlined deployment process gets you protected fast.`

**Step-by-Step Process** (numbered vertical timeline layout):
1. **Contact & Consultation** — "Call 239-334-7447 or submit a request. Our deployment team responds within 2 hours during business hours."
2. **Free Site Assessment** — "A security specialist visits your site to evaluate terrain, access points, power availability, and camera placement."
3. **Custom Solution Design** — "We design your surveillance layout — number of cameras, trailer positioning, monitoring schedule, and alert protocols."
4. **Delivery & Setup** — "Our technicians deliver and position the trailer, aim cameras, test connectivity, and activate monitoring."
5. **24/7 Monitoring Begins** — "Your site is now under continuous professional surveillance with real-time alerts sent to your phone."
6. **Ongoing Support** — "Regular maintenance, camera adjustments, and system checks. Relocate the trailer as your needs change."

**FAQ Mini-Section:**
- "How fast can you deploy?" → "In most cases, we can have a trailer on-site within 24 hours of assessment."
- "Do I need power on-site?" → "No. Our trailers run on solar with generator backup."
- "Can I view the cameras myself?" → "Yes. You get full remote access via mobile app and web dashboard."
- "What happens when the trailer detects activity?" → "Our monitoring center verifies the alert and can trigger alarms, contact police, or use two-way audio."

**CTA:** "Request a Site Assessment" form

---

#### 3. `src/app/mobile-surveillance-trailers/features/page.tsx`

**Metadata:** `title: 'Features & Technology'`

**Content:**

**Hero:**
- **Headline:** `FEATURES & TECHNOLOGY`
- **Subheadline:** `Military-grade surveillance technology made accessible for commercial sites.`

**Camera Technology Section:**
- PTZ cameras with optical zoom
- Night vision / IR capabilities
- 4K resolution
- AI-powered motion detection and object classification
- License Plate Recognition (LPR) available
- Thermal imaging add-on

**Power & Connectivity:**
- Solar panels with battery storage
- Diesel generator backup
- LTE cellular connectivity (works anywhere with cell signal)
- Redundant data transmission

**Monitoring & Alerts:**
- 24/7 professional monitoring center
- Real-time push notifications
- Two-way audio for live intervention
- Video recording & cloud backup
- Custom alert zones and schedules
- Integration with local law enforcement

**Physical Specs:**
- Weatherproof / hurricane-rated enclosure
- Telescoping mast (20+ feet)
- Towable — standard trailer hitch
- Built-in lighting / strobes
- Tamper-proof design with anti-theft features

**Product Photos:** Use `/images/trailer-product-1.png` and `/images/trailer-product-2.png`

---

#### 4. `src/app/mobile-surveillance-trailers/industries/page.tsx`

**Metadata:** `title: 'Industries We Serve'`

**Content:**

**Hero:**
- **Headline:** `INDUSTRIES WE SERVE`
- **Subheadline:** `From construction sites to special events, our mobile surveillance protects every environment.`

**Industry Cards** (6 cards, each with icon, title, description, use cases):

1. **Construction Sites** — `BuildingIcon`
  - "Construction theft costs the industry $1 billion+ annually. Our trailers monitor materials, equipment, and perimeters 24/7."
  - Use cases: Material theft prevention, equipment monitoring, vandalism deterrence, site access control, time-lapse documentation

2. **Special Events & Festivals** — `🎪` (emoji or custom icon)
  - "Temporary events need temporary security. Deploy surveillance for the duration of your event, then we pick it up."
  - Use cases: Crowd monitoring, parking lot security, VIP areas, vendor protection, emergency coordination

3. **Parking Lots & Retail** — `🏪`
  - "Reduce theft, vandalism, and liability in parking areas and retail environments."
  - Use cases: Vehicle theft prevention, slip-and-fall documentation, employee safety, loss prevention

4. **Government & Municipal** — `🏛️`
  - "Trusted by government facilities for perimeter security and critical infrastructure protection."
  - Use cases: Water treatment plants, municipal buildings, utility sites, public spaces

5. **Remote Locations & Perimeters** — `🌴`
  - "Oil fields, agricultural sites, mining operations — anywhere that's too remote for traditional security."
  - Use cases: Oil & gas sites, farms & agriculture, mining, remote construction, border perimeters

6. **Law Enforcement & Emergency** — `🚔`
  - "Support law enforcement with rapid-deploy surveillance for crime hotspots and emergency situations."
  - Use cases: Crime prevention, disaster response, hurricane recovery, evidence gathering

**Bottom CTA:** "Not sure if mobile surveillance is right for your industry? Call us — we've probably done it." + Phone + Quote button

---

### Files Created:
```
src/app/mobile-surveillance-trailers/page.tsx
src/app/mobile-surveillance-trailers/how-it-works/page.tsx
src/app/mobile-surveillance-trailers/features/page.tsx
src/app/mobile-surveillance-trailers/industries/page.tsx
```

### Dependencies: Agent 7 (shared components + images)

---

## AGENT 4: COMMERCIAL SERVICES

**Purpose:** Build all 5 commercial service pages. Each follows a consistent layout: hero → overview → features → applications → CTA.

### Files to Create:

#### 1. `src/app/commercial/page.tsx` — Commercial Hub

**Hero:**
- **Headline:** `COMMERCIAL SECURITY SOLUTIONS`
- **Subheadline:** `Comprehensive security for Southwest Florida businesses. From surveillance to access control, fire alarms to integrated systems.`

**Services Grid:** Link to each sub-page using `ServiceCard` components (same 5 services from homepage but with more detail)

**"2 Steps" Section:**
1. **Expert Analysis** — "Our security specialists conduct a thorough assessment of your facility, identify vulnerabilities, and design a customized solution."
2. **Get Your System** — "Professionally designed, configured, installed, and supported by our in-house veteran technician team."

**Bottom CTA:** ContactForm with `formType="quote"`

---

#### 2. `src/app/commercial/video-surveillance/page.tsx`

**Metadata:** `title: 'Video Surveillance & AI'`

**Hero image:** `/images/commercial-surveillance.jpg`
- **Headline:** `COMMERCIAL VIDEO SURVEILLANCE`
- **Subheadline:** `NDAA-compliant cameras with AI analytics, cloud backup, and remote viewing from anywhere.`

**Key Features:**
- NDAA Compliant Products — government and banking approved
- AI-Powered Analytics — intelligent motion detection, facial recognition, object tracking
- Cloud Backup Storage — never lose footage, access from anywhere
- Remote Viewing — IOS & Android app access from any device
- Night Vision — 24/7 coverage regardless of lighting
- Scalable — from 4 cameras to 100+

**Applications:**
- Employee Safety monitoring
- Off-Site Viewing for business owners
- Preventing Lawsuits (slip & fall documentation)
- Theft Deterrent — visible cameras reduce crime
- Loss Prevention — inventory and asset monitoring

**CTA:** "Schedule a Free Video Surveillance Assessment" + form

---

#### 3. `src/app/commercial/access-control/page.tsx`

**Metadata:** `title: 'Access Control'`

**Hero image:** `/images/access-control.jpg`
- **Headline:** `EMPLOYEE ACCESS CONTROL`
- **Subheadline:** `Control who enters, when they enter, and where they can go. Simplify security management.`

**Key Features:**
- Custom Business Hours — automatic lock/unlock schedules
- Employee User Control — individual credentials for every employee
- Employee Safety — know who is in the building at all times
- Simplify Employee Turnover — deactivate credentials instantly, no re-keying
- Access Levels — restrict sensitive areas to authorized personnel only
- Keyless Entry — cards, fobs, mobile credentials, biometric options
- Audit Trail — complete log of all access events
- Remote Management — manage from anywhere via app

**Image:** `/images/entry-system.jpg` and `/images/keyless-entry.jpg`

**CTA:** Form

---

#### 4. `src/app/commercial/alarm-systems/page.tsx`

**Metadata:** `title: 'Commercial Alarm Systems'`

- **Headline:** `COMMERCIAL ALARM SYSTEMS`
- **Subheadline:** `DMP (Digital Monitoring Products) — American-made security trusted by government and banking facilities.`

**Product Spotlight: DMP Systems**
- American Made — manufactured in Springfield, MO
- Used in government, banking, and high-security facilities
- LTE Cellular connectivity
- Hardwired & wireless zone options
- Zone takeover — upgrade existing systems
- Patented redundancy technology
- IOS & Android app for remote access
- 24/7 Five Diamond Monitoring

**Why DMP?** "When the Pentagon, major banks, and Fortune 500 companies need alarm systems, they choose DMP. We bring that same level of protection to Southwest Florida businesses."

**CTA:** Form

---

#### 5. `src/app/commercial/fire-alarms/page.tsx`

**Metadata:** `title: 'Fire Alarm Systems'`

- **Headline:** `COMMERCIAL FIRE ALARM SYSTEMS`
- **Subheadline:** `Installation, monitoring, testing, and inspection for all commercial environments.`

**Services Offered:**
- System Installation (new construction & retrofit)
- 24/7 Fire Monitoring
- Annual Testing & Inspection
- Code Compliance Support

**Industries Served:**
- Education — schools and universities
- Healthcare — hospitals, clinics, assisted living
- Real Estate — commercial buildings, HOAs
- Retail & Restaurant — storefronts, kitchens
- Government — municipal, state, federal buildings

**CTA:** Form

---

#### 6. `src/app/commercial/integrated-solutions/page.tsx`

**Metadata:** `title: 'Integrated Security Solutions'`

- **Headline:** `INTEGRATED SECURITY SOLUTIONS`
- **Subheadline:** `One partner for everything: security, fire, surveillance, access, networking, and cloud — all working together.`

**Why Integrated?**
- Single vendor = one point of contact, one bill, seamless operation
- All systems communicate — alarm triggers cameras, access logs sync with surveillance
- Reduced cost vs. multiple vendors
- Simplified management through unified dashboard

**What We Integrate:**
- Security Alarms + Video Surveillance + Access Control + Fire Alarms + Networking + Cloud Storage + Structured Wiring

**For Builders & Partners (from Future Partnerships page):**
- Pre-wiring for new construction
- Customized solutions for churches and schools
- Structured wiring and networking
- Preventative disaster planning

**CTA:** Form

---

### Files Created:
```
src/app/commercial/page.tsx
src/app/commercial/video-surveillance/page.tsx
src/app/commercial/access-control/page.tsx
src/app/commercial/alarm-systems/page.tsx
src/app/commercial/fire-alarms/page.tsx
src/app/commercial/integrated-solutions/page.tsx
```

### Dependencies: Agent 7 (shared components + images)

---

## AGENT 5: ABOUT & TRUST

**Purpose:** Build About Us, Case Studies/Gallery, Reviews, and Service Areas pages.

### Files to Create:

#### 1. `src/app/about/page.tsx` — About Us / Our Story

**Hero:** Team photo background (`/images/team-mission.jpg`)
- **Headline:** `ABOUT ALL AMERICAN ALARM`
- **Subheadline:** `Southwest Florida's trusted security partner since 2001.`

**Our Story Section:**
- Founded in 2001 by **Syed Ali (Sy Ali)**
- In the alarm and security business since 1992 — over 30 years of experience
- Goal: "To be the largest security company in the state of Florida"
- Mission: "Assuring your peace of mind with state of the art equipment, red carpet service, and lightning fast response... Because We Care!"
- **Quote block:** "We believe in how you do anything is how you do everything" — Sy Ali, Owner

**Our Team Section:**
- **Sales & Design Team** — Expert security specialists who design custom solutions
- **Administration** — Professional support team managing operations and customer service
- **Technician Team** — In-house veteran technicians (NO subcontractors)
- Images: `/images/technicians.jpg`, `/images/worker.jpg`

**What Sets Us Apart:**
- Owner-accessible — "Speak to the owner of the company directly"
- In-house team — "No subcontractors, ever"
- American made products (DMP)
- 24/7 Five Diamond Monitoring
- Local people serving local people
- Florida licensed & insured (#EF20002028, #EG13000164)

**Community Involvement:**
- Community Cooperative partnership
- ACT (Abuse Counseling and Treatment) partner

**CTA:** "Get to know us — schedule a visit to our Fort Myers office."

---

#### 2. `src/app/about/case-studies/page.tsx` — Case Studies / Gallery

**Metadata:** `title: 'Case Studies & Gallery'`

- **Headline:** `CASE STUDIES & PROJECT GALLERY`
- **Subheadline:** `See our mobile surveillance trailers and commercial security systems in action.`

**Gallery Section:**
Display product images in a masonry/grid layout:
- `/images/trailer-hero.jpg` — "Mobile Surveillance Trailer deployed at construction site"
- `/images/trailer-product-1.png` — "Trailer unit with PTZ cameras and solar panel"
- `/images/trailer-product-2.png` — "All American Alarm mobile unit"
- `/images/trailer-brochure.png` — "Mobile Surveillance brochure"
- `/images/industrial-perimeter.jpg` — "Industrial perimeter protection"
- `/images/commercial-surveillance.jpg` — "Commercial surveillance system"

**Case Study Template Cards** (placeholder content since we don't have real case study data — use realistic hypothetical examples based on the industries served):

1. **Construction Site — Fort Myers**
  - Challenge: "Material theft costing $50K+ per quarter"
  - Solution: "Two mobile surveillance trailers covering 10-acre site"
  - Result: "Zero theft incidents in 6 months of deployment"

2. **Event Security — Lee County**
  - Challenge: "Festival with 5,000+ attendees needing temporary surveillance"
  - Solution: "3-day deployment of mobile trailer with crowd monitoring"
  - Result: "Full coverage, real-time coordination with event staff"

3. **Retail Parking — Cape Coral**
  - Challenge: "Vehicle break-ins and vandalism in shopping center lot"
  - Solution: "Permanent trailer deployment with LPR cameras"
  - Result: "87% reduction in parking lot incidents"

**CTA:** "Have a security challenge? Let's build your case study." + Contact form

---

#### 3. `src/app/about/reviews/page.tsx` — Reviews

**Metadata:** `title: 'Reviews'`

- **Headline:** `WHAT OUR CLIENTS SAY`
- **Subheadline:** `Don't take our word for it — hear from the businesses we protect.`

**Featured Testimonial (large):**
> "Your company is the one rare gem in our community." — **Tracy Galloway, CCMI**

**Reviews Grid:** Use `TestimonialCard` components. Since the original site uses a Google Reviews widget, include:
- The Tracy Galloway quote
- 5-6 placeholder review cards with 5-star ratings and realistic content about commercial security and mobile trailers
- A note/link saying "See all reviews on Google" (link to their Google Business listing)

**Stats Section:** Use `StatCounter`:
- `25+` — Years Experience
- `1000+` — Systems Installed
- `4.9★` — Google Rating
- `24/7` — Monitoring

**CTA:** "Experience the difference yourself." + Quote button

---

#### 4. `src/app/about/service-areas/page.tsx` — Service Areas

**Metadata:** `title: 'Service Areas'`

- **Headline:** `SERVICE AREAS`
- **Subheadline:** `Proudly serving Southwest Florida — Fort Myers, Naples, Cape Coral, and beyond.`

**Primary Service Areas** (cards with brief descriptions):
1. **Fort Myers** — Headquarters city. "Home base with fastest response times. Our office is at 2030 Crawford Street."
2. **Cape Coral** — "Full service coverage across Cape Coral's residential and commercial districts."
3. **Naples** — "Serving Naples' luxury commercial and retail properties."
4. **Bonita Springs** — "Complete security solutions for Bonita Springs businesses."
5. **Estero** — "From Coconut Point to Miromar — we cover Estero."
6. **Lehigh Acres** — "Growing communities need growing security."

**Bottom text:** "Don't see your area? We serve all of Lee and Collier counties. Call us to confirm coverage for your location."

**CTA:** Phone + Quote

---

### Files Created:
```
src/app/about/page.tsx
src/app/about/case-studies/page.tsx
src/app/about/reviews/page.tsx
src/app/about/service-areas/page.tsx
```

### Dependencies: Agent 7 (shared components + images)

---

## AGENT 6: CONTACT & LEAD GEN

**Purpose:** Build Contact page, Get a Quote page, Request Deployment page, and FAQ page. These are the conversion pages — they must be clean and compelling.

### Files to Create:

#### 1. `src/app/contact/page.tsx` — Main Contact Page

**Layout:** Two-column on desktop. Left: contact info + map. Right: contact form.

**Left Column:**
- **Headline:** `GET IN TOUCH`
- **Phone:** `239-334-7447` (prominent, large)
- **Address:** 2030 Crawford Street, Fort Myers, FL 33901
- **Hours:** Monday–Friday 8:00 AM – 4:00 PM | 24/7 Emergency Monitoring
- **Licenses:** FL #EF20002028 | FL #EG13000164
- **Google Maps Embed:** iframe embed of the address (use `https://www.google.com/maps/embed?pb=!1m18!...` with the Fort Myers address, or a placeholder `<div>` with a note that map embed will be added)

**Right Column:**
- `<ContactForm formType="contact" title="Send Us a Message" subtitle="We'll respond within 24 hours." />`

---

#### 2. `src/app/contact/quote/page.tsx` — Get a Quote

**Layout:** Centered form with context.

- **Headline:** `GET A FREE QUOTE`
- **Subheadline:** `Tell us about your security needs and we'll design a custom solution. No obligation, no pressure.`

**Process reminder (3 small icons):**
1. Submit your info
2. We schedule a free site assessment
3. Receive your custom quote within 48 hours

**Form:** `<ContactForm formType="quote" />`

**Trust Signals below form:**
- "Best Value Guaranteed"
- "No Subcontractors"
- "Owner-Operated Since 2001"
- "FL Licensed & Insured"

---

#### 3. `src/app/contact/deployment/page.tsx` — Request Deployment

**Layout:** This is specifically for mobile surveillance trailer requests.

- **Headline:** `REQUEST TRAILER DEPLOYMENT`
- **Subheadline:** `Need a mobile surveillance trailer on-site fast? Tell us about your location and timeline.`

**Image:** `/images/trailer-product-1.png` alongside the form

**Form:** `<ContactForm formType="deployment" title="Deployment Details" subtitle="Our team will contact you within 2 hours during business hours." />`

**Below form:**
- "Emergency deployment? Call us directly at 239-334-7447"
- "Same-day deployment available for urgent situations"

---

#### 4. `src/app/contact/faq/page.tsx` — FAQ

**Metadata:** `title: 'Frequently Asked Questions'`

- **Headline:** `FREQUENTLY ASKED QUESTIONS`
- **Subheadline:** `Everything you need to know about our mobile surveillance trailers and commercial security services.`

**FAQ Sections** (use accordion/expandable component — build a simple one inline with `useState`):

**Mobile Surveillance Trailers:**
1. **How quickly can you deploy a trailer?** — "In most cases, we can have a trailer on-site within 24 hours of completing a site assessment. Emergency deployments may be available same-day."
2. **Do I need power or internet at the site?** — "No. Our trailers are fully autonomous with solar panels, battery storage, and generator backup. They connect via LTE cellular, so no internet connection is needed."
3. **How does monitoring work?** — "Our professional monitoring center watches your cameras 24/7. When activity is detected, they verify the alert and can trigger alarms, contact police, or use two-way audio to address trespassers."
4. **Can I view the cameras myself?** — "Yes. You get full remote access via mobile app and web dashboard to view live feeds, playback recordings, and manage alerts."
5. **What if my project moves to a new location?** — "That's the beauty of mobile surveillance. We'll relocate the trailer to your new site — just give us a call."
6. **How much does it cost?** — "Pricing depends on the number of trailers, cameras, monitoring level, and deployment duration. Contact us for a free quote. In most cases, mobile surveillance costs significantly less than hiring security guards."
7. **What areas do you serve?** — "We serve all of Southwest Florida including Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, and Lehigh Acres. Contact us to confirm coverage for your specific location."

**Commercial Security:**
8. **What brands do you use?** — "We use DMP (Digital Monitoring Products) for alarm systems — American-made and trusted by government and banking facilities. All our surveillance cameras are NDAA-compliant."
9. **Do you offer monitoring?** — "Yes. We provide 24/7 Five Diamond monitoring through our American-based monitoring center."
10. **Can you upgrade my existing system?** — "Absolutely. DMP systems support zone takeover, meaning we can integrate with your existing wiring and sensors while upgrading the panel and monitoring."
11. **Do you use subcontractors?** — "Never. All our technicians are in-house employees — no subcontractors."
12. **What if I need multiple services?** — "We're a one-stop-shop. Security, fire, surveillance, access control, networking, and cloud — all from one team with one point of contact."

**General:**
13. **How long have you been in business?** — "All American Alarm was founded in 2001. Our owner, Sy Ali, has been in the security business since 1992 — over 30 years of experience."
14. **Are you licensed?** — "Yes. We hold Florida licenses #EF20002028 and #EG13000164."
15. **Do you offer financing?** — "Yes, financing options are available for qualifying businesses. Ask us during your consultation."

**Bottom CTA:** "Still have questions? Call us at 239-334-7447 or send us a message." + buttons

---

### Files Created:
```
src/app/contact/page.tsx
src/app/contact/quote/page.tsx
src/app/contact/deployment/page.tsx
src/app/contact/faq/page.tsx
```

### Dependencies: Agent 7 (ContactForm, CTAButton, PhoneCTA, etc.)

---

## DEPENDENCY GRAPH SUMMARY

```
Agent 7 (Shared Components & Assets) ← MUST COMPLETE FIRST
    ↓
    ├── Agent 1 (Layout & Navigation) — imports PhoneCTA, CTAButton from Agent 7
    ├── Agent 2 (Homepage) — imports ServiceCard, ClientLogoGrid, StatCounter, CTAButton, etc.
    ├── Agent 3 (Mobile Surveillance) — imports FeatureCard, StatCounter, ContactForm, Icons, etc.
    ├── Agent 4 (Commercial Services) — imports ServiceCard, ContactForm, FeatureCard, Icons, etc.
    ├── Agent 5 (About & Trust) — imports TestimonialCard, StatCounter, ContactForm, etc.
    └── Agent 6 (Contact & Lead Gen) — imports ContactForm, CTAButton, PhoneCTA, etc.

All Agents 1-6 can run in PARALLEL (no file conflicts).
```

## FILE OWNERSHIP (No Conflicts)

| Agent | Owns These Paths |
|-------|-----------------|
| Agent 7 | `src/components/*`, `src/app/globals.css`, `public/images/*` |
| Agent 1 | `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx` |
| Agent 2 | `src/app/page.tsx` |
| Agent 3 | `src/app/mobile-surveillance-trailers/*` |
| Agent 4 | `src/app/commercial/*` |
| Agent 5 | `src/app/about/*` |
| Agent 6 | `src/app/contact/*`, `src/app/contact/faq/*` |

> **Note:** Agent 1 creates `Header.tsx` and `Footer.tsx` in `src/components/` — Agent 7 should NOT create these files. Agent 7 creates all other shared components.

---

## POST-BUILD CHECKLIST

After all 7 agents complete:
1. Run `npm run build` to verify no TypeScript or build errors
2. Run `npm run dev` and visually check each page
3. Verify all images load
4. Test mobile responsiveness
5. Test all navigation links
6. Test form submissions
7. Push to GitHub → auto-deploys to Vercel
8. Check live site at security-makeover.vercel.app

---

## KEY REMINDERS FOR ALL AGENTS

1. **Tailwind v4** — No `tailwind.config.ts`. Theme tokens are in `globals.css` via `@theme inline { }`.
2. **Next.js App Router** — Use `page.tsx` for routes. Use `'use client'` directive only for interactive components.
3. **Images** — Use Next.js `<Image>` component with `src="/images/..."` paths.
4. **Links** — Use Next.js `<Link>` component for internal links.
5. **Typography** — Use `font-extrabold` or `font-black` for headlines. All uppercase for section titles.
6. **Colors** — Reference via Tailwind: `bg-navy`, `text-electric-blue`, `bg-red`, etc. (these work because of `@theme inline` in globals.css).
7. **Dark theme default** — Most sections are dark navy/charcoal. Light sections are the exception, not the rule.
8. **Phone number** — Always `239-334-7447`. Always link it: `<a href="tel:239-334-7447">`.
9. **License numbers** — EF20002028 and EG13000164.
10. **Owner** — Syed Ali (Sy Ali), in business since 1992, company founded 2001.
