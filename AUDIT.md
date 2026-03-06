# 🔴 BRUTAL DESIGN AUDIT — All American Alarm Website

**Auditor:** Independent UX Critic  
**Date:** March 6, 2026  
**Verdict:** This site is a **6/10**. Solid bones, but it looks like a developer built it, not a designer. It's competent but forgettable. A customer comparing you to ADT Commercial or Verkada would see "local alarm company" not "premium security partner." Here's everything that needs to change.

---

## 1. CRITICAL ISSUES (Broken / Obviously Wrong)

### 1.1 🚨 Centering Is Off Across the Board

Thomas complained about centering — and he's right. The issue isn't that things aren't technically `text-center` or `mx-auto`. It's that **there's no visual center of gravity**. Elements float in space without anchoring.

**Specific problems:**

- **SectionHeader component** has `mb-12` but no visual separator (line, gradient, decorative element) between the eyebrow and the heading. The eyebrow text just floats above the heading with nothing connecting them visually. It looks like two disconnected text blocks.

- **Service cards grid** — On the homepage, the 3x2 grid has equal gutters but the cards themselves have no visual weight difference. Your eye doesn't know which card to read first. There's no featured/highlighted card.

- **Stats strip at bottom of hero** — `grid-cols-2 md:grid-cols-4` with `gap-6` but no vertical dividers between stats. On desktop, the 4 stats just blur together into one line of text.

- **"How It Works" steps** — All three cards are identical in visual weight. Step 01/02/03 numbers are `text-electric-blue/20` (nearly invisible). The whole "steps" concept fails because nothing visually connects them (no line, no arrow, no progression).

- **Comparison table** — `max-w-3xl` is too narrow for a 3-column table. On mobile, it's going to be cramped. The checkmarks and X marks are tiny and don't pop.

- **Commercial page hero** — No background image, just flat `bg-navy`. This is the WEAKEST hero on the entire site. A customer landing here sees nothing but text on a dark background. Zero visual impact.

- **Contact page** — `pt-32` is appropriate for header offset, but the two-column layout has no visual separation between the info column and the form column. They just sit side by side with nothing between them.

### 1.2 🚨 No Visual Depth Anywhere

The entire site is **flat**. Every section is a solid color block (`bg-navy` or `bg-charcoal`) with content on top. There are:
- **Zero gradients** between sections
- **Zero glassmorphism effects** (the one `backdrop-blur-sm` on the stats strip doesn't count)
- **Zero box-shadows on cards** (only `hover:shadow-xl` on CTAButton)
- **Zero decorative elements** (no subtle grid patterns, no glow effects, no radial gradients)

This makes the entire site feel like a **Tailwind tutorial project**, not a premium security company.

### 1.3 🚨 The Cards Are All Identical

`ServiceCard`, `FeatureCard`, and the "How It Works" step cards all look virtually the same: dark box, border, padding, icon, title, description. A customer scrolling through sees the same rectangle repeated 20+ times across the site. Card fatigue is REAL.

---

## 2. DESIGN WEAKNESSES (Generic / Template-y)

### 2.1 Typography Has No Punch

- Headings use `font-extrabold` everywhere but there's **no variation in weight across the page**. When everything is extra bold, nothing is bold.
- The eyebrow text (`text-sm font-semibold uppercase tracking-widest text-electric-blue`) is used on EVERY section. It's a nice pattern but becomes wallpaper when repeated 15 times.
- **No display font.** Inter is fine for body text but for hero headings on a SECURITY site? You need something heavier. Inter at `font-black` still looks clean and tech-y, not authoritative and powerful.
- Body text is all `text-medium-gray` which is `#94a3b8`. This is too muted — readability suffers on dark backgrounds. Should be `#b0bec5` or lighter.

### 2.2 Color Palette Is Underused

You defined `--color-gold: #fbbf24` but it's only used for testimonial stars. Gold is a premium signal — use it for badges, accents, featured elements.

The electric blue (`#00b4d8`) is fine but it's used for EVERYTHING: eyebrows, icons, links, hover states, stat numbers, accent borders. When one color does everything, nothing stands out.

**Missing:** A gradient treatment. Electric blue to a deeper blue, or navy to charcoal with a colored accent line. The site has no color transitions at all.

### 2.3 Hero Sections Are Underwhelming

- **Homepage hero:** The overlay gradient `from-navy/80 via-navy/60 to-navy` is too dark. You can barely see the trailer image behind it. What's the point of a hero image if you hide it?
- **Commercial page:** NO hero image at all. Just text on navy. Inexcusable for a page that should sell.
- **About page:** `bg-navy/70` overlay — better, but still too dark.
- **Contact page:** No hero section at all. Just jumps right into content.

### 2.4 CTAs Don't Create Urgency

The `CTAButton` uses `rounded-full` (pill shape), which is fine, but:
- The primary red (`#e63946`) has no gradient, no glow, no pulse. It's a flat red button.
- `shadow-lg` is generic. For a dark site, you need a COLORED shadow: `shadow-[0_0_20px_rgba(230,57,70,0.3)]`
- The outline variant `border-2 border-white` is nearly invisible on the hero because the background is light enough to wash it out.
- There's no hover animation beyond color change. No scale, no glow expansion.

### 2.5 Footer Is Generic

Four-column footer with links. Every Tailwind template has this exact footer. There's no:
- Newsletter signup
- Trust badges (BBB, 5-star Google rating, FL state license seal)
- Social proof element
- Visual treatment that separates it from the generic

---

## 3. COMPONENT FIXES (Exact Code Changes)

### 3.1 `SectionHeader.tsx` — Add Decorative Line + Better Spacing

```tsx
// CURRENT: Just text stacked
// FIX: Add a decorative accent line under the eyebrow

return (
  <div className={`${alignClass} mb-16`}> {/* was mb-12 — needs more breathing room */}
    {eyebrow && (
      <span className={`text-xs font-bold uppercase tracking-[0.3em] ${eyebrowColor} mb-4 block`}>
        {eyebrow}
      </span>
    )}
    {/* ADD decorative line */}
    {align === 'center' && (
      <div className="flex justify-center mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
      </div>
    )}
    {align === 'left' && (
      <div className="mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
      </div>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black ${titleColor} leading-[1.1] tracking-tight`}>
      {/* Changed font-extrabold → font-black, tightened leading and tracking */}
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-5 text-lg md:text-xl ${subtitleColor} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
        {subtitle}
      </p>
    )}
  </div>
);
```

### 3.2 `ServiceCard.tsx` — Add Glow, Gradient Border, Shadow

```tsx
// CURRENT: Flat dark box with thin border
// FIX: Glassmorphism + gradient hover + shadow

return (
  <Link href={href} className="group relative block bg-dark-surface/80 backdrop-blur-sm border border-border-dark rounded-2xl p-8 
    hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 
    hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] overflow-hidden">
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      <div className="text-electric-blue mb-5 w-12 h-12 flex items-center justify-center bg-electric-blue/10 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">{title}</h3>
      <p className="text-medium-gray leading-relaxed text-[15px]">{description}</p>
      <span className="mt-5 inline-flex items-center text-electric-blue font-semibold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More 
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </span>
    </div>
  </Link>
);
```

### 3.3 `CTAButton.tsx` — Add Glow + Scale + Better Variants

```tsx
const variants = {
  primary: 'bg-gradient-to-r from-red to-red-hover text-white shadow-[0_4px_20px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_30px_rgba(230,57,70,0.6)] hover:scale-105',
  secondary: 'bg-gradient-to-r from-electric-blue to-electric-blue-hover text-white shadow-[0_4px_20px_rgba(0,180,216,0.3)] hover:shadow-[0_6px_30px_rgba(0,180,216,0.5)] hover:scale-105',
  outline: 'border-2 border-white/70 text-white hover:bg-white hover:text-navy backdrop-blur-sm hover:scale-105',
};
// Add to base: `transition-all duration-300` (not just transition-all duration-200)
```

### 3.4 `FeatureCard.tsx` — Differentiate from ServiceCard

```tsx
// Give it a TOP accent border instead of full border to look different from ServiceCard
return (
  <div className="relative bg-dark-surface rounded-xl p-6 border-t-2 border-t-electric-blue/40 border-x border-b border-border-dark hover:border-t-electric-blue transition-all duration-300 group">
    <div className="text-electric-blue text-3xl mb-4 p-2.5 bg-electric-blue/10 rounded-lg inline-block">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{title}</h3>
    <p className="text-medium-gray text-sm leading-relaxed">{description}</p>
  </div>
);
```

### 3.5 `ContactForm.tsx` — Make It Premium

```tsx
// Wrap in a gradient border container
<div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-electric-blue/30 to-border-dark">
  <div className="bg-dark-surface rounded-2xl p-8 md:p-10">
    {/* ...form content... */}
    {/* Input fields: add ring focus states */}
    className="w-full px-4 py-3.5 bg-navy/70 border border-border-dark rounded-xl text-white placeholder-medium-gray/60 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 focus:outline-none transition-all"
    {/* Submit button: add gradient + glow */}
    className="w-full bg-gradient-to-r from-red to-red-hover text-white font-bold py-4 rounded-full hover:shadow-[0_4px_24px_rgba(230,57,70,0.4)] transition-all duration-300 uppercase tracking-wide text-lg hover:scale-[1.02]"
  </div>
</div>
```

### 3.6 `Header.tsx` — Add Bottom Glow Line on Scroll

```tsx
// Change the scrolled state styling:
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled 
    ? 'bg-navy/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,180,216,0.15),0_4px_20px_rgba(0,0,0,0.3)]' 
    : 'bg-transparent'
}`}
// The subtle electric-blue bottom glow line adds polish that screams "premium"
```

### 3.7 `Footer.tsx` — Add Top Gradient Border

```tsx
// Replace: border-t border-border-dark
// With: a gradient top edge
<footer className="bg-charcoal relative">
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
  {/* ...rest of footer... */}
</footer>
```

---

## 4. PAGE-BY-PAGE FIXES

### 4.1 Homepage (`page.tsx`)

**Hero:**
- Lighten the overlay: change `from-navy/80 via-navy/60 to-navy` → `from-navy/70 via-navy/40 to-navy/95`. Let the trailer image show through more in the middle.
- Add a subtle animated pulse/glow behind the hero heading to draw the eye.
- The stat strip needs **vertical dividers**: add `divide-x divide-border-dark` to the grid, or add a `border-r border-border-dark` to each stat except the last.

**Problem/Solution section:**
- The image on the right has no treatment — it's just plopped there. Add `rounded-2xl shadow-2xl border border-border-dark` and consider a slight rotation (`rotate-1`) for visual interest.

**Services Grid:**
- First card (Mobile Surveillance Trailers) should be FEATURED: span 2 columns on desktop, or have a different border color / glow to signal "this is our main thing."
- Add a gradient background strip behind the section: `bg-gradient-to-b from-charcoal via-charcoal to-navy` instead of flat `bg-charcoal`.

**How It Works:**
- The step numbers need to be VISIBLE: change `text-electric-blue/20` → `text-electric-blue/40` and make them `text-7xl`.
- Add a connecting line between steps on desktop (horizontal dashed line or gradient line).
- Stagger the cards slightly: first card `mt-0`, second `mt-4`, third `mt-8` on desktop for visual rhythm.

**Comparison Table:**
- Increase to `max-w-4xl`.
- Make checkmarks bigger and bolder: green should be `text-emerald-400 text-2xl font-bold` not just `text-green-400 text-lg`.
- Make the X marks more dramatic: use a red background pill.
- Add row hover: `hover:bg-electric-blue/5 transition-colors`.

**Testimonial + CTA:**
- The testimonial has no background treatment. Wrap it in a subtle `bg-charcoal/30 rounded-2xl p-12` card.
- Add quotation mark decorative element (giant `"` in `text-electric-blue/10` positioned absolute).
- The CTA box below needs more pop: add gradient border treatment like the ContactForm fix above.

### 4.2 Mobile Surveillance Trailers Page

**Overall:** This is the BEST page on the site. But:

- **Features grid** (4-column): Too cramped on desktop. 8 feature cards at this size become a wall of tiny boxes. Consider 3 columns with larger cards, or a 2-column layout with icons on the left and text on the right.
- **Trailer vs Guard comparison cards**: These are good but the guard card should have a RED top border and the trailer card should have an ELECTRIC BLUE top border. The visual differentiation via `border-electric-blue/30` is too subtle.
- **Product gallery**: Two images side by side with `object-contain bg-navy p-6` looks like a product spec sheet, not a premium showcase. Add subtle gradient overlays, or use a carousel/slider instead.
- **Brochure section**: The "Download Brochure" CTA links to a PNG. That's either a placeholder or a mistake. Should be a PDF.

### 4.3 Commercial Page

**This page is the WEAKEST on the entire site.**

- **Hero has NO image.** This is unacceptable. A security company's commercial page needs a hero image — office building, camera installation, control room, anything. Currently it's just white text on navy.
- **Fix:** Add a hero image with overlay, identical structure to the homepage hero but with a different image.
- **Services grid has 5 cards** in a 3-column layout, leaving an orphan row of 2. Either add a 6th card or make the last row span wider.
- **"2 Steps" section** is too simple. The numbered circle element `absolute -top-5 left-8` risks getting cut off if the parent has `overflow-hidden`. Change approach: use inline numbered badges instead of absolute positioning.

### 4.4 About Page

- **Hero:** `min-h-[60vh]` is too short on wide screens. Make it `min-h-[70vh]`.
- **"Our Story" section:** The text wall is long. Break it up with a pull-quote or highlighted stat box inline.
- **Team section:** Three identical cards with icons. These should have PHOTOS of actual team members or at least stylized illustrations. Icons make it look like a placeholder.
- **"What Sets Us Apart" differentiators:** 6 items in a 3x2 grid of tiny cards. These should be a single column list with large checkmarks and bold text — the current layout fractures the impact.
- **Community section:** Two cards side by side in `max-w-3xl` with no images. This looks like an afterthought. Either add logos/photos for these organizations or remove the section entirely — a half-hearted community section hurts more than no section.

### 4.5 Contact Page

- **No hero section.** Jumps from header directly into content at `pt-32`. Every other page has some kind of hero treatment. Contact should too — even a short one with a heading on a dark gradient.
- **The two-column layout** needs a visual divider. Add a vertical line or a `border-l border-border-dark` on the form column (desktop only).
- **Phone number styling** (`text-3xl font-extrabold text-electric-blue`) is great — that's one of the few strong design moments on the site. But it needs a subtle glow or underline treatment.
- **Google Maps embed** — the iframe with `height="250"` is too short. Make it `height="300"` minimum. Also add `rounded-lg` which is there but verify the border-radius actually applies (iframes can be tricky).
- **The form sits too high.** It should align with the "Contact Us" eyebrow, not with "GET IN TOUCH." Add `lg:pt-0` or adjust to align.

---

## 5. CSS / THEME FIXES (`globals.css`)

The current `globals.css` is **embarrassingly minimal.** 50 lines. A premium dark-themed security site needs actual CSS infrastructure.

### Add These to `globals.css`:

```css
/* ═══════════════════════════════════════════════════════
   SECTION TRANSITIONS — Gradient dividers between sections
   ═══════════════════════════════════════════════════════ */

.section-gradient-divider {
  position: relative;
}

.section-gradient-divider::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-electric-blue) 20%, var(--color-electric-blue) 80%, transparent);
  opacity: 0.15;
}

/* ═══════════════════════════════════════════════════════
   GLASSMORPHISM UTILITY
   ═══════════════════════════════════════════════════════ */

.glass {
  background: rgba(15, 31, 58, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(30, 58, 95, 0.4);
}

.glass-card {
  background: rgba(15, 31, 58, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 180, 216, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* ═══════════════════════════════════════════════════════
   GLOW EFFECTS
   ═══════════════════════════════════════════════════════ */

.glow-blue {
  box-shadow: 0 0 20px rgba(0, 180, 216, 0.15), 0 0 60px rgba(0, 180, 216, 0.05);
}

.glow-red {
  box-shadow: 0 0 20px rgba(230, 57, 70, 0.2), 0 0 60px rgba(230, 57, 70, 0.08);
}

.text-glow-blue {
  text-shadow: 0 0 20px rgba(0, 180, 216, 0.3);
}

/* ═══════════════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════════════ */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(230, 57, 70, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(230, 57, 70, 0.5);
  }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
}

.animate-fade-in-up-delay-1 {
  animation: fadeInUp 0.6s ease-out 0.15s both;
}

.animate-fade-in-up-delay-2 {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* ═══════════════════════════════════════════════════════
   GRADIENT BORDER UTILITY (for premium card edges)
   ═══════════════════════════════════════════════════════ */

.gradient-border {
  position: relative;
  background: var(--color-dark-surface);
  border-radius: 16px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 17px;
  background: linear-gradient(135deg, rgba(0, 180, 216, 0.3), transparent 50%, rgba(0, 180, 216, 0.1));
  z-index: -1;
}

/* ═══════════════════════════════════════════════════════
   BACKGROUND PATTERN (subtle grid for depth)
   ═══════════════════════════════════════════════════════ */

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 180, 216, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 180, 216, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* ═══════════════════════════════════════════════════════
   RADIAL GRADIENT ACCENT (hero sections)
   ═══════════════════════════════════════════════════════ */

.radial-accent {
  position: relative;
}

.radial-accent::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 180, 216, 0.08), transparent 70%);
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════
   SCROLLBAR STYLING (dark theme)
   ═══════════════════════════════════════════════════════ */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-navy);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border-dark);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-electric-blue);
}

/* ═══════════════════════════════════════════════════════
   SELECTION STYLING
   ═══════════════════════════════════════════════════════ */

::selection {
  background: rgba(0, 180, 216, 0.3);
  color: white;
}

/* ═══════════════════════════════════════════════════════
   BODY TEXT READABILITY FIX
   ═══════════════════════════════════════════════════════ */

body {
  color: #cbd5e1; /* Slightly lighter than current white for better contrast hierarchy */
}
```

### Add to `@theme inline`:

```css
--color-medium-gray: #b0bec5;  /* Bump up from #94a3b8 — current is too muted */
--color-dark-surface-light: #142240;  /* For subtle card variations */
```

---

## 6. THE "WOULD I BUY?" TEST

### Homepage — **6.5/10** — "Maybe, if I'm already looking"
The hero is decent. The trailer image (if it loads) gives me an idea of the product. But the page doesn't GRAB me. I'd scroll, skim the services, maybe click one. The comparison table is useful but visually dull. The testimonial section has ONE quote — that's not enough social proof. I'd want to see Google reviews, a rating count, logos of real clients. **Would I call? Only if I had no other options.**

### Mobile Surveillance Trailers — **7.5/10** — "Getting warmer"
This is your best page. The feature breakdown is solid, the guard vs. trailer comparison is compelling content. But the DESIGN doesn't match the quality of the CONTENT. The flat cards and lack of visual drama undercut the sales message. This page should feel like a military briefing, not a SaaS feature page. **Would I call? Probably — the content sells, even if the design doesn't.**

### Commercial Security — **4/10** — "Hard no"
No hero image = no credibility. This looks like a placeholder page. Five service cards and a 2-step process is not enough content to convince me to trust a company with my building's security. Where are the case studies? Where are the product photos? Where's the proof? **Would I call? No. I'd hit back and go to the next Google result.**

### About Page — **6/10** — "It's fine"
Good content — the founder's story, the team structure, the differentiators. But the visual execution is generic. Stock-photo-looking images (if they even load), identical cards for team sections, no real photos of Sy Ali or the actual team. The community section looks tacked on. **Would I feel trust? Moderate. It's clearly a real company, but the presentation doesn't scream "industry leader."**

### Contact Page — **5.5/10** — "Functional but forgettable"
Works. Serves its purpose. But zero design effort. No hero, no visual warmth, no urgency. The phone number in giant electric blue is actually the most compelling design moment on the page — lean into that more. The form is visually identical to every other dark-theme contact form on the internet. **Would I fill it out? Only if I was already committed. This page doesn't convince fence-sitters.**

---

## SUMMARY: TOP 10 CHANGES IN PRIORITY ORDER

1. **Add glassmorphism + gradient borders to ALL cards** — instant premium upgrade
2. **Add CSS glow effects, animations, and radial gradients to `globals.css`** — creates depth
3. **Fix the Commercial page hero** — add a background image immediately
4. **Add decorative accent lines to SectionHeader** — creates visual rhythm
5. **Make CTAButton glow with colored shadows** — drives conversion
6. **Add stat strip dividers on homepage** — fixes the centering/alignment complaint
7. **Differentiate card types visually** — ServiceCard ≠ FeatureCard ≠ StepCard
8. **Lighten hero overlays** — let the images actually show through
9. **Add a subtle grid pattern background** to alternating sections — breaks flatness
10. **Add real social proof** — Google review count, star rating, client count — to the homepage

**Bottom line:** The code structure is clean and the content is solid. The problem is 100% visual execution. This site needs DEPTH, GLOW, and DIFFERENTIATION. Right now it's a dark Tailwind template. It needs to feel like a security command center.
