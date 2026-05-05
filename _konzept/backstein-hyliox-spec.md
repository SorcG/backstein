Build a calm, editorial, heritage-grade single-page Next.js 16 website for **RÖSTMANUFAKTUR BACKSTEIN** — a fictional premium coffee roastery from Gütersloh, Ostwestfalen, founded 1924. The page must feel **warm, ruhig, edel, manufaktur-haft, scrollytelling-ready**: cream-paper backgrounds, deep manufaktur-black text, brick-red accents, hand-set serif headlines, large editorial photography of green beans, drum-roasters and brick walls, and oversized parallax wordmarks that breathe through the layout like a hot-foil print.

The page should feel like a mix between:
- a Pasqua Wines / Aesop / heritage-distillery editorial site
- a long-form Magazin der Süddeutschen / NZZ Folio scrollytelling feature
- a Manufaktur-Brand book printed on Munken Pure cream paper
- a slow, cinematic Vimeo-Staff-Pick portrait of a craftsman
- an Aesop product page rebuilt as a 100-year-old family roastery

The visual soul of the page is **the hot drum-roaster behind the brick wall** — a slow rotating Probat-style trommel pouring glowing brown beans, framed by century-old brickwork and steam. It represents heritage, fire, craft, slowness, and one family's hand on the same machine for four generations. Everything on the page — typography, motion, color, voice — should breathe that one image.

---

# TECH STACK

```json
{
  "next": "^16.2.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.6.0",
  "tailwindcss": "^4.0.0",
  "@tailwindcss/postcss": "^4.0.0",
  "gsap": "^3.13.0",
  "@gsap/react": "^2.1.2",
  "lenis": "^1.1.20",
  "shadcn/ui": "latest",
  "lucide-react": "latest",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

Recommended libraries:
- `gsap` + `gsap/ScrollTrigger` + `gsap/ScrollSmoother` (or `lenis` for smooth-scroll)
- `@gsap/react` for the `useGSAP` hook (cleanup-safe in React 19 strict mode)
- `lenis` for buttery scroll (paired with `ScrollTrigger.update` on every Lenis tick)
- `next/font/google` for Cormorant Garamond + Inter + Eczar (no FOUT)
- `next/image` for static photography — hero / heritage / product / interior / exterior
- raw `<video autoPlay loop muted playsInline>` for Seedance MP4 macro-clips and the hero drum-roaster loop

Icons used from `lucide-react`:

```
ChevronDown, ChevronRight, ArrowRight, ArrowUpRight, ShoppingBag, Plus, Minus, Instagram, Mail, MapPin, Clock
```

---

# GLOBAL PAGE DIRECTION

Page format: **single long vertical scrollytelling page** ~9 sections deep, plus a sticky pill navbar at the top and a giant wordmark anchor in the footer. The reader scrolls top-to-bottom through a heritage story — Hero → Manifest → Heritage → Handwerk → Bohnen → Ort → Philosophie → Kontakt → Footer. There is no carousel, no modal, no parallax-trickery for its own sake. All motion is in service of the editorial pacing.

What the screenshot set shows vs implies:
- The 20 Essentia screenshots demonstrate the **structural and motion vocabulary** to imitate — sticky pill nav, oversized parallax wordmark, two-column manifest, sticky-headline + stacking cards, bento-stat grid, zigzag editorial photography, table with pill-label, FAQ accordion, three-column footer + mega-logo anchor.
- BACKSTEIN replaces every visual ingredient: skincare jar → glowing drum-roaster, sage-green container → brick-red `#8B4538` container at 15% opacity, Inter geometric sans → Cormorant Garamond serif headlines, English copy → German copy, beauty-portraits → manufaktur photography (brick exterior, brass roaster, green beans, bagged coffee).

Visual ingredients (recurring across the page):
- Cream-Pergament page background `#E8DCC4`
- Manufaktur-Schwarz text `#1A1612` (warm near-black, not pure black)
- Backstein-Rot accent `#8B4538` — used only for pill-labels, links, the newsletter submit button, and the 15%-opacity background of the heritage container
- Manufaktur-Gold `#9B8557` — only as 1px hairline rules under tabular rows and as the logo brick-detail
- Tiefes Braun `#2C2218` — only inside the dark stacking cards in HANDWERK
- Cormorant Garamond serif for every headline above ~32px, Inter for every body / micro-label
- Generous editorial whitespace — sections breathe at 120–200px vertical padding
- Oversized parallax wordmark "BACKSTEIN" set at viewport-width in cream-darker behind hero and footer
- 1px gold hairlines instead of grey borders wherever a divider is needed

What the layout is NOT:
- Not a SaaS landing page. No "feature cards with icons", no "as seen in TechCrunch", no "Schedule a demo" CTA, no toast notifications.
- Not a webshop product grid. Even the product section is **three large editorial cards**, not a 4×3 grid.
- Not a portfolio template. No motion-design-reel hero, no 3D blob, no glassmorphism, no neon glow, no dark mode.
- Not a Framer template. The motion is GSAP-driven and feels editorial, not springy or playful.
- Not English. All on-page copy is German. The footer signature is the only mixed-language line.

---

# GLOBAL DESIGN TOKENS

Place this block in `app/globals.css` (Tailwind v4 reads `@theme` directly). Brand-specific values live in plain custom properties so utility classes can compose them.

```css
@import "tailwindcss";

@theme {
  /* Surface */
  --color-background: #E8DCC4;       /* Cream-Pergament — page base */
  --color-foreground: #1A1612;       /* Manufaktur-Schwarz — body text */

  /* Sub-surfaces */
  --color-card: #F1E6CF;             /* Cream slightly lighter for elevated cards */
  --color-card-foreground: #1A1612;
  --color-muted: #DCCFB4;            /* Cream a touch darker for backgrounds-of-text */
  --color-muted-foreground: #5A4F42; /* Warm-Grau — captions, helper text */

  /* Brand */
  --color-primary: #8B4538;          /* Backstein-Rot */
  --color-primary-foreground: #E8DCC4;
  --color-secondary: #2C2218;        /* Tiefes Braun — dark stacking cards */
  --color-secondary-foreground: #E8DCC4;
  --color-accent: #9B8557;           /* Manufaktur-Gold — hairlines, logo detail */
  --color-accent-foreground: #1A1612;
  --color-hover: #C9A57F;            /* Hellbraun-Akzent — hover states */

  /* Outline */
  --color-border: rgba(155, 133, 87, 0.28);  /* gold @ low opacity */
  --color-input: rgba(26, 22, 18, 0.18);
  --color-ring: #8B4538;

  --radius: 4px;     /* very subtle — editorial, not pillowy */
  --radius-pill: 9999px;
}

/* Brand-specific values used by .glass-nav, .red-pill etc. */
:root {
  --backstein-cream: #E8DCC4;
  --backstein-cream-darker: #D9CCB0;     /* the parallax wordmark color */
  --backstein-cream-elevated: #F1E6CF;
  --backstein-black: #1A1612;
  --backstein-red: #8B4538;
  --backstein-red-soft: rgba(139, 69, 56, 0.15);   /* heritage container bg */
  --backstein-red-pressed: #6F3329;
  --backstein-gold: #9B8557;
  --backstein-gold-hairline: rgba(155, 133, 87, 0.4);
  --backstein-brown: #2C2218;
  --backstein-grey: #5A4F42;
  --backstein-hover: #C9A57F;

  --nav-height: 64px;
  --section-pad: clamp(120px, 14vw, 200px);
  --container: 1280px;
  --container-narrow: 1080px;
}
```

---

# TAILWIND CONFIG

Tailwind v4 reads tokens from `@theme` directly (see globals.css above). Only thing left in `tailwind.config.ts` is the brand namespace mirror, font mapping, the `boxShadow` named tokens, and one extra radius.

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-cormorant)", "Cormorant Garamond", "Garamond", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-eczar)", "Eczar", "Cormorant Garamond", "serif"],
      },
      colors: {
        backstein: {
          cream: "#E8DCC4",
          "cream-darker": "#D9CCB0",
          "cream-elevated": "#F1E6CF",
          black: "#1A1612",
          red: "#8B4538",
          "red-soft": "rgba(139, 69, 56, 0.15)",
          "red-pressed": "#6F3329",
          gold: "#9B8557",
          "gold-hairline": "rgba(155, 133, 87, 0.4)",
          brown: "#2C2218",
          grey: "#5A4F42",
          hover: "#C9A57F",
        },
      },
      boxShadow: {
        "card-soft": "0 1px 0 rgba(155, 133, 87, 0.18), 0 24px 56px -28px rgba(26, 22, 18, 0.18)",
        "card-lift": "0 2px 0 rgba(155, 133, 87, 0.22), 0 36px 72px -32px rgba(26, 22, 18, 0.30)",
        "nav-blur": "0 1px 0 rgba(155, 133, 87, 0.18), 0 8px 24px -16px rgba(26, 22, 18, 0.20)",
        "press":    "inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 0 0 1px rgba(139, 69, 56, 0.25)",
      },
      borderRadius: {
        "pill": "9999px",
      },
      letterSpacing: {
        "manufaktur": "0.18em",  /* ALL-CAPS pill labels */
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

# FONTS

Three Google Fonts. Loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables.

```tsx
// app/layout.tsx
import { Cormorant_Garamond, Inter, Eczar } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eczar",
  display: "swap",
});
```

Then in the `<html>` open tag: `className={`${cormorant.variable} ${inter.variable} ${eczar.variable}`}`.

Font usage table:

| Tailwind class | Use case |
|---|---|
| `font-heading` | All headlines ≥ 32px (Cormorant Garamond) |
| `font-heading italic` | Italic accent words inside a sans/serif hybrid headline |
| `font-body` | Body copy, captions, micro-labels, button labels (Inter) |
| `font-display` | Mega-wordmark "BACKSTEIN" in hero parallax + footer anchor (Eczar — taller x-height) |

Typography feel: **slow, hand-set, high-contrast, generous tracking on micro-labels, tight tracking on headlines, no all-caps body, no underlines on links** (use a 1px gold underline-on-hover only). Never use weights heavier than 600. Never use Inter ≥ 24px. Never use Cormorant ≤ 16px. The serif is the brand voice; the sans is the whisper underneath.

Concrete class snippets for the four key typography uses:

```tsx
{/* Hero headline — Cormorant 80px, light weight */}
<h1 className="font-heading text-[80px] leading-[0.95] tracking-[-0.015em] text-backstein-black font-light">
  Aus Stein gebrannt.
</h1>

{/* Section headline — Cormorant 64px */}
<h2 className="font-heading text-[clamp(40px,5.2vw,64px)] leading-[1.02] tracking-[-0.012em] text-backstein-black font-light">
  Geröstet seit 1924.
</h2>

{/* Body — Inter 16px, warm-grey-on-cream */}
<p className="font-body text-[16px] leading-[1.65] text-backstein-grey max-w-[44ch]">
  Wir rösten, was kein anderer macht. Wenig Bohnen, viel Zeit, eine Trommel aus 1924.
</p>

{/* Pill micro-label — Inter 11px ALL-CAPS, brick-red */}
<span className="font-body text-[11px] uppercase tracking-manufaktur text-backstein-red bg-backstein-red-soft rounded-pill px-3 py-1">
  Schritt 01
</span>
```

**Italic serif accent pattern.** Cormorant Garamond's italic is the brand's secret weapon. Use it on a single accent word inside an otherwise upright headline:

```tsx
<h2 className="font-heading text-[64px] leading-[1.02] text-backstein-black font-light">
  Aus Stein gebrannt.
  <br />
  Mit <span className="italic font-medium text-backstein-red">Feuer</span> geröstet.
</h2>
```

This pattern appears in HANDWERK, ORT and PHILOSOPHIE. Always italicize the verb of fire/heat/craft (Feuer, Hand, Heimat).

---

# GLOBAL CSS UTILITIES

All under `@layer components` in `app/globals.css`. Names describe **where** the utility is used.

```css
@layer components {
  /* Sticky pill navbar — translucent cream over scroll content */
  .glass-nav {
    background: rgba(232, 220, 196, 0.92);
    backdrop-filter: blur(14px) saturate(110%);
    -webkit-backdrop-filter: blur(14px) saturate(110%);
    border-bottom: 1px solid var(--backstein-gold-hairline);
  }

  /* Heritage container — brick-red wash at 15% over cream */
  .red-wash {
    background: var(--backstein-red-soft);
    border-radius: 6px;
  }

  /* Editorial card surface — cream-elevated with gold hairline */
  .editorial-card {
    background: var(--backstein-cream-elevated);
    border: 1px solid var(--backstein-gold-hairline);
    box-shadow: 0 1px 0 rgba(155, 133, 87, 0.18),
                0 24px 56px -28px rgba(26, 22, 18, 0.18);
  }

  /* Stacking dark card used in HANDWERK */
  .craft-card {
    background: var(--backstein-brown);
    color: var(--backstein-cream);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  .craft-card::after {
    /* dark gradient overlay so video stays legible behind text */
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(26,22,18,0.78) 100%);
    pointer-events: none;
  }

  /* Brick-red pill label — used for "Schritt 01", "Unsere Werte", "Heritage" */
  .pill-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 26px;
    padding: 0 12px;
    font-family: var(--font-inter);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--backstein-red);
    background: var(--backstein-red-soft);
    border-radius: 9999px;
  }

  /* Brick-red filled button — newsletter submit, primary CTA */
  .red-button {
    background: var(--backstein-red);
    color: var(--backstein-cream);
    border-radius: 9999px;
    padding: 14px 26px;
    font-family: var(--font-inter);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: background 280ms ease, transform 280ms ease;
  }
  .red-button:hover { background: var(--backstein-red-pressed); transform: translateY(-1px); }

  /* 1px gold hairline divider */
  .hairline { border-top: 1px solid var(--backstein-gold-hairline); }

  /* Editorial image wrapper that holds the parallax-zoom child */
  .img-frame {
    overflow: hidden;
    border-radius: 4px;
    background: var(--backstein-cream-elevated);
  }
  .img-frame > img,
  .img-frame > video {
    will-change: transform;
    transform-origin: center center;
  }

  /* Mega parallax wordmark — used behind hero and as the footer anchor */
  .mega-wordmark {
    font-family: var(--font-eczar), "Cormorant Garamond", serif;
    font-weight: 500;
    font-size: clamp(180px, 23vw, 360px);
    line-height: 0.85;
    letter-spacing: -0.04em;
    color: var(--backstein-cream-darker);
    user-select: none;
    pointer-events: none;
    text-align: center;
  }

  /* Subtle paper-grain overlay on the page (optional, very low opacity) */
  .paper-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.06;
    mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
    z-index: 1;
  }
}
```

---

# ASSETS REQUIRED

Grouped by purpose. All paths are root-relative under `/public/`.

### Hero (Section 1)
- **Hero drum-roaster video** — Seedance-generated MP4, 12–18s loop, drone push-in over century-old red brick exterior, then dissolve into interior shot of glowing brass Probat-style drum slowly rotating, warm tungsten light, soft steam curling, no people. Path: `/public/video/hero-roaster.mp4`. Dimensions: 1920×1080. Format: H.264 MP4 + WebM fallback. ~6 MB. Poster: `/public/video/hero-roaster-poster.jpg`.

### Manifest (Section 2)
- Optional macro photo — extreme close-up of one roasted bean on cream paper, top-down. Path: `/public/images/manifest-bean.jpg`. 1200×900. JPEG.

### Heritage (Section 3) — 4 symbol images
1. `/public/images/heritage-1924.jpg` — sepia-toned hand-written ledger page from 1924, top-down. 800×1000.
2. `/public/images/heritage-roaster.jpg` — black-and-white macro of brass Probat drum, 1000×800.
3. `/public/images/heritage-bricks.jpg` — close-up of the manufaktur's red-brick wall with mortar. 800×800.
4. `/public/images/heritage-family.jpg` — abstract stylized 4-generation symbol (no real faces), engraving feel. 800×800.

### Handwerk (Section 4) — 3 macro videos
1. `/public/video/craft-01-green-beans.mp4` — slow rotation through unroasted green beans on burlap, soft-focus pull. 5–8s loop.
2. `/public/video/craft-02-roast.mp4` — glowing brown beans tumbling inside the drum, orange firelight. 5–8s loop.
3. `/public/video/craft-03-cooling.mp4` — beans being dumped into the cooling tray, steam rising into the back-light. 5–8s loop.
   All 1280×720, H.264 MP4 + WebM fallback. Poster JPGs alongside.

### Bohnen (Section 5) — 3 product images
1. `/public/images/bohne-pavenstaedter.jpg` — black matte 250g bag with cream-cream label, photographed against red-brick wall, top-light. 1200×1500.
2. `/public/images/bohne-kontor-1924.jpg` — same bag, "KONTOR 1924" label. 1200×1500.
3. `/public/images/bohne-single-origin.jpg` — same bag with limited-edition gold seal. 1200×1500.

### Ort (Section 6)
- `/public/images/ort-aussen.jpg` — exterior of the brick manufaktur, golden-hour, no signage front-and-center. 1600×1200.
- `/public/video/ort-innen.mp4` — slow 15–20s pan across roastery interior: copper drum, leather chair, sacks. 1920×1080. ~8 MB.

### Philosophie (Section 7)
- `/public/images/philosophie-bohnen-macro.jpg` — top-down macro of a bowl of just-roasted beans, slight steam. 1400×1400.

### Kontakt (Section 8)
- No new assets. Uses Lucide icons + the Ort exterior image as a subtle background plate (optional).

### Footer (Section 9)
- `/public/images/footer-card-1.jpg` — wide editorial photo, "Manufaktur-Tour" or category card. 1200×500.
- `/public/images/footer-card-2.jpg` — wide editorial photo, "Vom Acker zur Tasse". 1200×500.
- The mega "BACKSTEIN" wordmark is text, not an asset.

### Logo
- `/public/logos/backstein-wordmark.svg` — wordmark + 3-brick mark, Cormorant Garamond curve outlined, brick-red detail. Used at 24px height in the navbar and 64px height in the footer block above the mega-wordmark.

### Icons (lucide-react, no SVGs needed)
- `ChevronDown`, `ChevronRight`, `ArrowRight`, `ArrowUpRight`, `ShoppingBag`, `Plus`, `Minus`, `Instagram`, `Mail`, `MapPin`, `Clock`

All photo prompts should request natural light, low chroma, warm tungsten or golden-hour, no skin reflections, no contemporary props (no MacBooks, no AirPods, no smartphones), high film-grain feel.

---

# RESPONSIVE RULES

The reference (Essentia) shows desktop only. Implement mobile/tablet as stated below — these are sensible defaults consistent with the editorial register.

### Desktop (primary, ≥ 1024px)
- Container max-width 1280px (1080px in narrow text sections like MANIFEST and PHILOSOPHIE)
- All section paddings at `clamp(120px, 14vw, 200px)` vertical
- Hero, Heritage bento, Handwerk split, Ort zigzag, Footer 3-column — all show as designed
- Mega-wordmark renders at full viewport-width

### Tablet (768–1024px)
- Container 92vw with 32px gutters
- Hero headline drops from 80px to 56px; mega-wordmark drops from 360px to 220px
- Heritage bento collapses from 2×2 to 1-column stack (large card → small → small → small)
- Handwerk: sticky-headline pin disabled; cards stack vertically full-width
- Bohnen: 3 product cards drop to a 2-up + 1 below (or horizontal scroll-snap if user prefers)
- Ort zigzag: image and text stack vertically, alternating order preserved
- Philosophie: image goes full-width above the table; table rows full-width
- Footer 3 columns collapse to 2 columns (Menu+Sozial / Newsletter)

### Mobile (< 768px)
- Container 92vw, 24px gutters
- Hero headline 36–40px, hero video gets a `bottom-fade` over the bottom 30% so the wordmark stays legible
- Mega-wordmark drops to 120px and is allowed to clip slightly off the viewport sides (intentional bleed)
- Navbar collapses: logo + Cart on the row, the 3 nav links hide behind a `Menu` icon (lucide `Menu`)
- All bento / split / zigzag layouts become single-column stacks
- Stacking cards in HANDWERK become a static vertical list (no scrub-pin) — much friendlier on touch
- Accordion in KONTAKT stays — already mobile-native
- Footer columns stack 1-up, newsletter input becomes full-width

```
mobile: below 768px
tablet: 768–1024px
desktop: 1024px+
```

---

# PAGE STRUCTURE

App Router file tree:

```
app/
├── layout.tsx               // fonts, metadata, <html lang="de">, paper-grain overlay
├── page.tsx                 // composes the 9 sections
├── globals.css              // tokens + @layer components
├── lib/
│   ├── gsap-init.ts         // 'use client' — registers ScrollTrigger, sets defaults
│   ├── lenis-provider.tsx   // 'use client' — wraps children in Lenis smooth-scroll
│   └── motion-modules.ts    // 'use client' — the 8 reusable animation modules
└── components/
    ├── nav-bar.tsx          // 'use client' (scroll-state)
    ├── section-hero.tsx     // 'use client' (Modul 2 + 3 + 4)
    ├── section-manifest.tsx // 'use client' (Modul 6 stagger)
    ├── section-heritage.tsx // 'use client' (Modul 1 + 6)
    ├── section-handwerk.tsx // 'use client' (Modul 4 pin + 5 stack)
    ├── section-bohnen.tsx   // 'use client' (Modul 6 + hover)
    ├── section-ort.tsx      // 'use client' (Modul 1 + 7 zoom)
    ├── section-philosophie.tsx  // 'use client' (Modul 6 + 7)
    ├── section-kontakt.tsx  // 'use client' (Modul 8 accordion)
    ├── section-footer.tsx   // 'use client' (Modul 1 + static mega-wordmark)
    └── ui/
        ├── pill-label.tsx
        ├── editorial-card.tsx
        ├── img-frame.tsx
        └── word-stagger.tsx
```

`page.tsx` JSX skeleton:

```tsx
// app/page.tsx
import NavBar from "@/components/nav-bar";
import SectionHero from "@/components/section-hero";
import SectionManifest from "@/components/section-manifest";
import SectionHeritage from "@/components/section-heritage";
import SectionHandwerk from "@/components/section-handwerk";
import SectionBohnen from "@/components/section-bohnen";
import SectionOrt from "@/components/section-ort";
import SectionPhilosophie from "@/components/section-philosophie";
import SectionKontakt from "@/components/section-kontakt";
import SectionFooter from "@/components/section-footer";
import LenisProvider from "@/lib/lenis-provider";

export default function Page() {
  return (
    <LenisProvider>
      <div className="paper-grain" aria-hidden />
      <NavBar />
      <main className="bg-backstein-cream text-backstein-black font-body">
        <SectionHero />
        <SectionManifest />
        <SectionHeritage />
        <SectionHandwerk />
        <SectionBohnen />
        <SectionOrt />
        <SectionPhilosophie />
        <SectionKontakt />
        <SectionFooter />
      </main>
    </LenisProvider>
  );
}
```

Every section that uses GSAP, ScrollTrigger, or React state must declare `'use client'`. Pure layout helpers (`pill-label.tsx`, `editorial-card.tsx`) stay as Server Components.

---

# SECTION 0 — NAVBAR (sticky)

Not part of the 9 numbered story-sections, but always visible. Adapted from Essentia screenshot 1's top bar.

Layout

Position:

```txt
fixed top-0 left-0 right-0 z-50 h-[64px]
```

Wrapper:

```txt
glass-nav
```

Inner container:

```txt
mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-6
```

Content (left → center → right):

- **Left**: Logo wordmark "BACKSTEIN" + 3-brick mark (24px height SVG)
- **Center**: 3 nav links — `Manufaktur`, `Bohnen`, `Kontakt`
- **Right**: `Shop` text-link + small Cart pill with `ShoppingBag` icon and a `0` count

Style — logo:

```txt
flex items-center gap-2 font-heading text-[18px] tracking-[-0.01em] text-backstein-black
```

Style — nav link:

```txt
font-body text-[14px] text-backstein-black/80 hover:text-backstein-red transition-colors duration-200
```

Style — cart pill:

```txt
inline-flex items-center gap-2 rounded-pill border border-backstein-gold-hairline bg-backstein-cream px-3 py-1.5 font-body text-[12px] text-backstein-black hover:border-backstein-red transition-colors
```

Implementation:

```tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[64px] glass-nav">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-[18px] tracking-[-0.01em] text-backstein-black">
          <Image src="/logos/backstein-wordmark.svg" alt="" width={24} height={24} />
          BACKSTEIN
        </Link>
        <nav className="flex items-center gap-7">
          <Link href="#handwerk" className="font-body text-[14px] text-backstein-black/80 hover:text-backstein-red transition-colors">Manufaktur</Link>
          <Link href="#bohnen"   className="font-body text-[14px] text-backstein-black/80 hover:text-backstein-red transition-colors">Bohnen</Link>
          <Link href="#kontakt"  className="font-body text-[14px] text-backstein-black/80 hover:text-backstein-red transition-colors">Kontakt</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/shop" className="font-body text-[14px] text-backstein-black/80 hover:text-backstein-red transition-colors">Zum Shop</Link>
          <Link href="/shop/cart" className="inline-flex items-center gap-2 rounded-pill border border-backstein-gold-hairline bg-backstein-cream px-3 py-1.5 font-body text-[12px] text-backstein-black hover:border-backstein-red transition-colors">
            <ShoppingBag size={14} /> <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
```

Animation: **Modul 4 — Sticky Pin** (passive — the navbar stays fixed-top throughout the page, no GSAP needed; native CSS `fixed` is enough). On scroll past 80px, optionally raise the bottom hairline opacity from 0 to 1 to signal "scrolled" state.

---

# SECTION 1 — HERO

Reference: Essentia screenshots 1, 2. Adapts the headline-top-left + giant-parallax-wordmark + centered-floating-element layout.

Layout

Position:

```txt
relative min-h-[100vh] w-full overflow-hidden bg-backstein-cream pt-[120px]
```

Inner grid:

```txt
relative z-10 mx-auto grid h-[calc(100vh-120px)] w-full max-w-[1280px] grid-cols-12 gap-8 px-6
```

Content blocks:
- **1a.** Top-left headline cluster (col-span-7)
- **1b.** Top-right subline (col-span-5, right-aligned)
- **1c.** Centered hero video (drum-roaster), absolute-positioned over the grid
- **1d.** Mega parallax wordmark "BACKSTEIN" — absolute behind everything

## 1a. Headline cluster (top-left)

Style — pill above headline:

```txt
pill-label mb-6
```

Content — pill text: `RÖSTMANUFAKTUR · 1924`

Style — headline:

```txt
font-heading text-[clamp(56px,7vw,96px)] font-light leading-[0.95] tracking-[-0.015em] text-backstein-black max-w-[14ch]
```

Content — headline (verbatim, two lines):

```
Aus Stein gebrannt.
Mit Feuer geröstet.
```

Style — italic accent on second line:

```tsx
Mit <span className="italic font-medium text-backstein-red">Feuer</span> geröstet.
```

Style — small social proof under headline (★★★★★ + count, mirrors Essentia):

```txt
mt-7 inline-flex items-center gap-3 font-body text-[12px] text-backstein-grey
```

Content: `★★★★★  ·  4.8 / 5  ·  Hunderte Stammkunden in OWL`

## 1b. Top-right subline

Style:

```txt
flex items-end justify-end col-span-5 pt-2 font-body text-[15px] leading-[1.55] text-backstein-grey max-w-[28ch] text-right
```

Content: `Wir rösten, was kein anderer macht. Wenig Bohnen, viel Zeit, eine Trommel aus 1924.`

## 1c. Centered hero video

The drum-roaster video sits visually centered like the cream jar in Essentia screenshot 1, but at much larger scale.

Style — video container:

```txt
absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 h-[58vh] w-auto aspect-[4/5] img-frame shadow-card-lift
```

Implementation:

```tsx
<div className="absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 h-[58vh] aspect-[4/5] img-frame shadow-card-lift">
  <video
    autoPlay loop muted playsInline
    poster="/video/hero-roaster-poster.jpg"
    className="h-full w-full object-cover"
  >
    <source src="/video/hero-roaster.webm" type="video/webm" />
    <source src="/video/hero-roaster.mp4" type="video/mp4" />
  </video>
</div>
```

## 1d. Mega parallax wordmark "BACKSTEIN"

Style — wordmark:

```txt
mega-wordmark absolute left-0 right-0 bottom-[-40px] z-0
```

Content (verbatim, single word): `BACKSTEIN`

Animation — **Modul 3 (Background-Text Parallax)**:

```ts
gsap.to(".mega-wordmark--hero", {
  y: -240,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.0,
  },
});
```

Animation — **Modul 2 (Word-Swap Headline) on `1a`**:

```ts
gsap.from(".hero-headline > span", {
  yPercent: 100,
  opacity: 0,
  stagger: 0.08,
  ease: "power2.out",
  duration: 0.8,
});
// On scroll-out, reverse so the headline rises out of view as user scrolls down
gsap.to(".hero-headline", {
  yPercent: -50,
  opacity: 0,
  ease: "none",
  scrollTrigger: { trigger: ".section-hero", start: "30% top", end: "bottom top", scrub: true },
});
```

Animation — **Modul 4 (Sticky Pin) on `1c`**:

```ts
ScrollTrigger.create({
  trigger: ".section-hero",
  start: "top top",
  end: "+=80%",
  pin: ".hero-video-frame",
  pinSpacing: false,
});
```

Mark this section `'use client'`. Keep the page background `bg-backstein-cream` so the hero blends seamlessly into MANIFEST.

---

# SECTION 2 — MANIFEST

Reference: Essentia screenshot 3. The "Five ingredients. Nothing more." moment — a centered two-line typographic statement with a `01` micro-pill above and a tiny body block under it.

Layout

Position:

```txt
relative w-full bg-backstein-cream py-[var(--section-pad)]
```

Inner:

```txt
mx-auto flex max-w-[var(--container-narrow)] flex-col items-center px-6 text-center
```

Content (top → bottom):
- Pill label: `01`
- Headline line 1 (light, warm-grey): `Geröstet seit 1924.`
- Headline line 2 (medium, near-black): `Manufaktur seit hundert Jahren.`
- Body paragraph
- (Optional) Single bean macro centered below

Style — pill:

```txt
pill-label mb-8
```

Style — headline line 1:

```txt
font-heading text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.012em] text-backstein-grey font-light
```

Style — headline line 2:

```txt
font-heading text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.012em] text-backstein-black font-medium
```

Content (verbatim):

```
01

Geröstet seit 1924.
Manufaktur seit hundert Jahren.
```

Style — body paragraph:

```txt
mt-8 font-body text-[15px] leading-[1.7] text-backstein-grey max-w-[52ch]
```

Body content:

```
Wir sind eine kleine Manufaktur in Gütersloh-Pavenstädt. Vier Generationen. Eine
Trommel. Drei Bohnen. Wir rösten in Mengen, die ein anderer als unwirtschaftlich
abtun würde — weil unser Großvater es auch so gemacht hat, und sein Vater davor.
```

Animation — **Modul 6 (Stagger-Reveal Group)** word-by-word on the two headline lines, then **Modul 1** for the pill and the body block:

```ts
// 6 — word stagger
gsap.from(".manifest-word", {
  y: 30,
  opacity: 0,
  stagger: 0.09,
  ease: "power2.out",
  duration: 0.7,
  scrollTrigger: { trigger: ".section-manifest", start: "top 75%" },
});
// 1 — fade-up for pill + body
gsap.from(".manifest-pill, .manifest-body", {
  y: 24,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out",
  duration: 0.7,
  scrollTrigger: { trigger: ".section-manifest", start: "top 70%" },
});
```

Each word in the headlines is wrapped in `<span className="manifest-word inline-block">…</span>` to enable the stagger.

The optional bean macro below sits in a 240×240 `img-frame`, centered, 80px below the body.

---

# SECTION 3 — HERITAGE

Reference: Essentia screenshot 11 (sage-green stat container) — adapted to a brick-red wash bento.

Layout

Position:

```txt
relative w-full py-[var(--section-pad)]
```

Inner container (the brick-red wash):

```txt
red-wash mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-6 p-12
```

Content — 4 bento cards on the brick-red wash:
- **Card A** (col-span-5, row-span-2) — large stat
- **Card B** (col-span-7, row-span-1) — drum-roaster photo + Probat badge
- **Card C** (col-span-3, row-span-1) — small stat
- **Card D** (col-span-4, row-span-1) — family stat

### Card A — "1924" big stat (col-span-5, row-span-2)

Style:

```txt
editorial-card col-span-5 row-span-2 flex flex-col justify-between p-10 min-h-[420px]
```

Inner:
- Pill label top-left: `Heritage`
- Big number: `1924` in `font-heading text-[180px] leading-none font-light text-backstein-black tracking-[-0.04em]`
- Caption bottom: `Gegründet von Urgroßvater Friedrich. Aus drei Sack Java-Bohnen und einer alten Mauerstein-Werkstatt.`

### Card B — drum-roaster photo (col-span-7, row-span-1)

Style:

```txt
editorial-card col-span-7 row-span-1 relative overflow-hidden p-0 min-h-[200px]
```

Image:

```tsx
<Image src="/images/heritage-roaster.jpg" alt="Probat-Trommelröster" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
```

Overlay pill (top-left over image):

```tsx
<span className="pill-label absolute left-6 top-6 backdrop-blur-sm bg-backstein-cream/80">Probat · seit 1924</span>
```

### Card C — "100 Jahre" (col-span-3, row-span-1)

Style:

```txt
editorial-card col-span-3 row-span-1 flex flex-col justify-between p-8 min-h-[200px]
```

Big number: `100` in 96px Cormorant + below in 12px caption: `Jahre Manufaktur.`

### Card D — "4 Generationen" (col-span-4, row-span-1)

Style:

```txt
editorial-card col-span-4 row-span-1 flex flex-col justify-between p-8 min-h-[200px]
```

Big number: `IV` in 96px Cormorant italic + below: `Vier Generationen. Eine Familie. Dasselbe Handwerk.`

Animation — **Modul 1 (Standard Fade-Up)** + **Modul 6 (Stagger-Reveal)**:

```ts
gsap.from(".heritage-card", {
  y: 28, opacity: 0, stagger: 0.1,
  duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: ".section-heritage", start: "top 70%" },
});
```

The brick-red wash container gets **Modul 1** itself (whole container fades in 0.4s before the cards stagger).

Tag-pills row above the bento (small, optional):

```tsx
<div className="mb-6 flex gap-2">
  <span className="pill-label">Heritage</span>
  <span className="pill-label">Manufaktur</span>
  <span className="pill-label">Handwerk</span>
</div>
```

---

# SECTION 4 — HANDWERK

Reference: Essentia screenshots 6, 7 (sticky-headline + stacking image cards). The heart of the page — the roasting craft itself.

Layout

Position:

```txt
relative w-full py-[var(--section-pad)] bg-backstein-cream
```

Inner grid:

```txt
mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-12 px-6
```

Two columns:
- **Left (col-span-5)** — sticky headline cluster
- **Right (col-span-7)** — three stacking craft cards

### 4a. Left sticky cluster

Wrapper:

```txt
col-span-5 sticky top-[120px] self-start
```

Pill: `Das Handwerk`

Headline:

```txt
font-heading text-[clamp(48px,5.6vw,72px)] leading-[1.02] tracking-[-0.012em] text-backstein-black font-light max-w-[12ch]
```

Content (with italic accent):

```tsx
Aus Stein gebrannt.
<br />
Mit <span className="italic font-medium text-backstein-red">Feuer</span> geröstet.
```

Body (max-width 38ch):

```
Drei Schritte. Drei Stunden. Drei Hundertstel Sekunde Aufmerksamkeit pro Bohne.
Unsere Trommel wurde 1924 in Emmerich gebaut. Wir füllen sie noch immer von Hand.
```

Animation — **Modul 4 (Sticky Pin)** is realized with native CSS `position: sticky`. No GSAP `pin` needed unless we want the pin to start mid-section — in that case:

```ts
ScrollTrigger.create({
  trigger: ".handwerk-left",
  start: "top 120px",
  endTrigger: ".handwerk-right-stack",
  end: "bottom 50%",
  pin: true,
  pinSpacing: false,
});
```

### 4b. Right stacking card stack

Wrapper:

```txt
col-span-7 handwerk-right-stack relative
```

Three cards stacked vertically; each `craft-card` is sticky-pinned and the next one slides in over it on scroll.

Card structure (repeats 3×):

```txt
craft-card sticky top-[160px] mx-auto flex aspect-[4/5] w-full max-w-[480px] flex-col justify-end p-8
```

Each card has a looping macro video as its background:

```tsx
<video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
  <source src="/video/craft-01-green-beans.mp4" type="video/mp4" />
</video>
```

Foreground content (over the dark gradient that lives in `.craft-card::after`):

- Pill top-left: `pill-label` with `bg-backstein-cream/15 text-backstein-cream` variant: `Schritt 01`
- Bottom block: title + body in cream

Style — card title:

```txt
font-heading text-[36px] leading-[1.1] text-backstein-cream font-light
```

Style — card body:

```txt
mt-2 font-body text-[14px] leading-[1.55] text-backstein-cream/75 max-w-[36ch]
```

Card content (verbatim, in order):

```
Schritt 01 — Grüne Bohne.
Wir kaufen direkt vom Importeur in Bremen. Sortenrein. Säckeweise. Per Hand
geprüft, bevor sie überhaupt unser Lager sehen.

Schritt 02 — Röstung.
Zwölf Minuten. Erstes Knacken bei 196°. Zweites Knacken vermeiden wir bewusst.
Was im Trommelbauch passiert, hört nur, wer hundert Jahre Erfahrung hat.

Schritt 03 — Abkühlen.
Mit Frischluft, nicht mit Wasser. Drei Minuten lang in der Kühltrommel.
Erst dann darf sie als unsere Bohne den Sack verlassen.
```

Animation — **Modul 5 (Stacking Cards)**:

```ts
const cards = gsap.utils.toArray<HTMLElement>(".craft-card");
cards.forEach((card, i) => {
  if (i === cards.length - 1) return;
  gsap.to(card, {
    scale: 0.95,
    opacity: 0.6,
    ease: "none",
    scrollTrigger: {
      trigger: cards[i + 1],
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });
});
```

Each card naturally pins because of `sticky top-[160px]`; the next card scrolls up underneath, and ScrollTrigger scales/dims the previous card.

---

# SECTION 5 — BOHNEN

Reference: Essentia screenshot 17 (single product detail) — adapted to a 3-up horizontal product showcase on the homepage.

Layout

Position:

```txt
relative w-full py-[var(--section-pad)] bg-backstein-cream
```

Inner:

```txt
mx-auto w-full max-w-[1280px] px-6
```

Header row:

```txt
mb-16 flex items-end justify-between
```

Left side: pill `Bohnen` + headline `Drei Bohnen, eine Manufaktur.` (font-heading, 56px, font-light)
Right side: small subline + arrow link `Alle Sorten ansehen →`

Style — headline:

```txt
font-heading text-[clamp(40px,5vw,56px)] leading-[1.02] text-backstein-black font-light max-w-[18ch]
```

Style — link:

```txt
inline-flex items-center gap-1 font-body text-[14px] text-backstein-red hover:text-backstein-red-pressed transition-colors
```

### Card grid

Wrapper:

```txt
grid grid-cols-3 gap-6
```

Each product card:

Style:

```txt
editorial-card group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-card-lift hover:-translate-y-1
```

Card structure (top → bottom):
- **Image** (aspect 4/5, full-bleed at top, `img-frame` zoom on hover)
- **Body block** (padding 28px)
  - Pill label: type (e.g. `Hausröstung`)
  - Product name (Cormorant, 28px)
  - One-line tasting note (Inter, 14px, grey)
  - Price + "Bestellen →" row at the bottom

Style — image wrapper:

```txt
img-frame relative aspect-[4/5] overflow-hidden
```

Style — image:

```txt
h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]
```

Style — body block:

```txt
flex flex-1 flex-col gap-3 p-7
```

Style — price line:

```txt
mt-auto flex items-end justify-between border-t border-backstein-gold-hairline pt-4
```

Card content (verbatim, in order, three cards):

```
Card 1 — Pavenstädter Bohne
Pill: Hausröstung
Name: Pavenstädter Bohne
Note: Mittelkräftig. Schoko, Haselnuss, ein Hauch Karamell.
Preis: ab 11,90 €
CTA: Bestellen →
Image: /images/bohne-pavenstaedter.jpg

Card 2 — Kontor 1924
Pill: Espresso
Name: Kontor 1924
Note: Kräftig, dunkle Schokolade, langer Nachklang.
Preis: ab 13,90 €
CTA: Bestellen →
Image: /images/bohne-kontor-1924.jpg

Card 3 — Manufaktur Single Origin
Pill: Limited
Name: Manufaktur Single Origin
Note: Wechselnd. Aktuell: Äthiopien Sidamo, blumig.
Preis: 16,90 € (250g)
CTA: Bestellen →
Image: /images/bohne-single-origin.jpg
```

Animation — **Modul 6 (Stagger-Reveal Group)**:

```ts
gsap.from(".bohnen-card", {
  y: 24, opacity: 0, stagger: 0.1,
  duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: ".section-bohnen", start: "top 70%" },
});
```

Hover behavior is pure CSS (no JS needed): card lifts 4px, shadow deepens, image scales 1.04, the underline beneath the price thickens to 2px and shifts to brick-red.

Click on a card routes to `/shop/[bohne-slug]` (subroute, out of scope for this homepage spec but the link must be wired).

---

# SECTION 6 — ORT

Reference: Essentia screenshot 9 (zigzag editorial photography). Two big images alternating with text — first image right, second image left. The atmosphere of the place itself.

Layout

Position:

```txt
relative w-full py-[var(--section-pad)] bg-backstein-cream
```

Inner:

```txt
mx-auto flex w-full max-w-[1280px] flex-col gap-32 px-6
```

### 6a. First zigzag — text left, image right

Row wrapper:

```txt
grid grid-cols-12 gap-12 items-center
```

Left text (col-span-5):
- Pill: `Der Ort`
- Headline (Cormorant 56px, light): `Auf dem Manufakturgelände.`
- Body block:

```
Manufakturgelände 4
33334 Gütersloh-Pavenstädt
```

- Mini-table opening hours:

```
Donnerstag      07 — 09 Uhr
Freitag         07 — 09 Uhr
Klönzeit        Jeden ersten Freitag im Monat
```

Each row is `flex justify-between border-b border-backstein-gold-hairline py-3 font-body text-[14px]`.

Right image (col-span-7):

Style:

```txt
img-frame relative aspect-[4/5] overflow-hidden shadow-card-soft
```

Image:

```tsx
<Image src="/images/ort-aussen.jpg" alt="Manufaktur außen" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
```

### 6b. Second zigzag — image left, text right

Row wrapper:

```txt
grid grid-cols-12 gap-12 items-center
```

Left image (col-span-7):

```tsx
<div className="img-frame relative aspect-[16/10] overflow-hidden shadow-card-soft">
  <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
    <source src="/video/ort-innen.mp4" type="video/mp4" />
  </video>
</div>
```

Right text (col-span-5):
- Pill: `Innenraum`
- Headline: `Wo geröstet wird.` (Cormorant 56px, light)
- Body:

```
Schauen Sie zu, wenn die Trommel läuft. Wir lassen niemanden stehen, der echtes
Interesse mitbringt — und niemand kommt ohne eine Tasse wieder raus.
```

Animation — **Modul 7 (Image Parallax-Zoom)** on both `img-frame` containers:

```ts
gsap.utils.toArray<HTMLElement>(".ort-zoom > img, .ort-zoom > video").forEach(el => {
  gsap.fromTo(el, { scale: 1.08 }, {
    scale: 1.0, ease: "none",
    scrollTrigger: { trigger: el.closest(".ort-zoom"), start: "top bottom", end: "bottom top", scrub: 1 },
  });
});
```

Plus **Modul 1 (Standard Fade-Up)** on the text columns. The two zigzag rows each fade-up independently when they enter the viewport at 75%.

---

# SECTION 7 — PHILOSOPHIE

Reference: Essentia screenshot 8 (image left + table with pill-label and rows on the right).

Layout

Position:

```txt
relative w-full py-[var(--section-pad)] bg-backstein-cream
```

Inner:

```txt
mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-16 px-6 items-start
```

### 7a. Left image (col-span-6)

Style:

```txt
img-frame relative aspect-square overflow-hidden shadow-card-soft
```

Content:

```tsx
<Image src="/images/philosophie-bohnen-macro.jpg" alt="Geröstete Bohnen, Macro" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
```

### 7b. Right table (col-span-6)

Top of column:
- Pill (right-aligned): `Unsere Werte`
- Headline: `Drei Sätze.` then on second line `Drei Versprechen.` (Cormorant 56px light, second line italic and brick-red)

Style — headline:

```tsx
<h2 className="font-heading text-[clamp(40px,5vw,64px)] leading-[1.02] text-backstein-black font-light max-w-[14ch]">
  Drei Sätze.
  <br />
  <span className="italic font-medium text-backstein-red">Drei Versprechen.</span>
</h2>
```

Body paragraph (under headline, before table):

```
Wir versprechen wenig. Aber das, was wir versprechen, halten wir seit hundert Jahren.
```

Table — three rows separated by gold hairlines:

Style — row:

```txt
flex items-baseline justify-between border-t border-backstein-gold-hairline py-6
```

Style — row label (left):

```txt
font-heading text-[28px] leading-none text-backstein-black font-light
```

Style — row meta (right):

```txt
font-body text-[12px] uppercase tracking-manufaktur text-backstein-grey
```

Style — row body (below the row, left-aligned, max-w-[44ch]):

```txt
mt-2 font-body text-[14px] leading-[1.6] text-backstein-grey
```

Content (verbatim, in order):

```
Row 1
Label: Handwerk
Meta:  Wert 01
Body:  Eine Trommel. Eine Hand. Eine Bohne nach der anderen.

Row 2
Label: Herkunft
Meta:  Wert 02
Body:  Wir wissen, wer den Sack gefüllt hat. Wir wissen, an welchem Hang er gewachsen ist.

Row 3
Label: Heimat
Meta:  Wert 03
Body:  Pavenstädt ist nicht das Zentrum der Welt. Aber es ist das Zentrum unserer.
```

A final small `border-t` closes the table.

Animation — **Modul 7 (Image Parallax-Zoom)** on the left image, **Modul 6 (Stagger-Reveal Group)** on the three table rows:

```ts
gsap.from(".philo-row", {
  y: 24, opacity: 0, stagger: 0.12,
  duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: ".section-philosophie", start: "top 70%" },
});
```

The image gets the same parallax-zoom snippet as Section 6.

---

# SECTION 8 — KONTAKT

Reference: Essentia screenshot 18 (FAQ split: left headline + Contact link, right accordion).

Layout

Position:

```txt
relative w-full py-[var(--section-pad)] bg-backstein-cream
```

Inner:

```txt
mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-16 px-6 items-start
```

### 8a. Left cluster (col-span-5)

Pill (top): `Kontakt`

Headline:

```tsx
<h2 className="font-heading text-[clamp(40px,5vw,64px)] leading-[1.02] text-backstein-black font-light max-w-[14ch]">
  Vorbeikommen oder bestellen.
</h2>
```

Body:

```
Wir freuen uns, wenn Sie kommen. Wenn Pavenstädt zu weit weg ist, schicken wir
Ihnen ein Päckchen mit der Post. Beides geht.
```

Two link rows below body, each with right arrow:
- `Zum Shop →`
- `Route in Maps öffnen →`

Style — link:

```txt
mt-3 inline-flex items-center gap-2 font-body text-[15px] text-backstein-red hover:text-backstein-red-pressed transition-colors
```

### 8b. Right accordion (col-span-7)

Wrapper:

```txt
flex flex-col
```

Each accordion item:

Wrapper:

```txt
border-t border-backstein-gold-hairline py-6 cursor-pointer group
```

Question row:

```txt
flex items-center justify-between font-heading text-[22px] font-light text-backstein-black
```

Right-side icon: `ChevronDown` rotates 180° when open.

Answer body (collapsed by default):

Style:

```txt
overflow-hidden font-body text-[14px] leading-[1.65] text-backstein-grey max-w-[60ch]
```

Final element: a closing `border-t` after the last item.

Content — 5 accordion items (verbatim, in order):

```
Q1: Wo finde ich die Manufaktur?
A1: Manufakturgelände 4, 33334 Gütersloh-Pavenstädt. Aus der Stadt etwa zehn Minuten,
    aus Bielefeld zwanzig. Parken können Sie direkt vor dem Tor.

Q2: Wann sind die Öffnungszeiten?
A2: Donnerstag und Freitag jeweils 7 bis 9 Uhr. Klönzeit jeden ersten Freitag im Monat,
    da bleiben wir bis zehn.

Q3: Wie lange dauert der Versand?
A3: Wir rösten Donnerstag, packen Freitag, versenden mit DHL. Bei Ihnen ist die Tüte
    Montag oder Dienstag. Innerhalb Deutschlands. Andere Länder: bitte einmal mailen.

Q4: Bietet ihr Großbestellungen für Cafés oder Gastro an?
A4: Ja, gerne. Schreiben Sie uns kurz, was Sie brauchen — wir melden uns persönlich
    binnen 48 Stunden. Pauschale Listenpreise gibt es bei uns nicht.

Q5: Kann man Gutscheine kaufen?
A5: Ja. Drucke per PDF oder per Post auf Cremepapier mit unserem Siegel. Letzteres
    dauert eine Woche länger und kostet zwei Euro mehr.
```

Animation — **Modul 8 (Accordion)**:

```ts
function toggle(panel: HTMLElement, open: boolean) {
  const inner = panel.querySelector(".faq-answer-inner") as HTMLElement;
  gsap.to(panel, {
    height: open ? inner.offsetHeight : 0,
    duration: 0.35,
    ease: "power2.inOut",
  });
  gsap.to(inner, { opacity: open ? 1 : 0, duration: 0.3, ease: "power2.out" });
}
```

Plus **Modul 1** for the section's overall fade-in. **Modul 6** is also used for the staggered reveal of accordion items as the section enters view (each row with 80ms offset).

---

# SECTION 9 — FOOTER + MEGA-LOGO

Reference: Essentia screenshot 20 (3-column footer + giant "Essentia" wordmark anchor).

Layout

Position:

```txt
relative w-full pt-[var(--section-pad)] pb-0 bg-backstein-cream overflow-hidden
```

Inner:

```txt
mx-auto w-full max-w-[1280px] px-6
```

### 9a. Two top editorial cards (optional, mirrors Essentia's pre-footer)

Wrapper:

```txt
mb-20 grid grid-cols-2 gap-6
```

Each card:

```txt
img-frame relative aspect-[16/9] overflow-hidden group
```

Content overlay (bottom-left):

```tsx
<span className="pill-label absolute bottom-6 left-6 bg-backstein-cream/90">Manufaktur-Tour</span>
<h3 className="absolute bottom-16 left-6 font-heading text-[28px] text-backstein-cream max-w-[20ch]">
  Eine Stunde durch hundert Jahre.
</h3>
```

(Card 2 same pattern: `Vom Acker zur Tasse — wie Bohnen zu uns kommen.`)

### 9b. Three-column footer

Wrapper:

```txt
grid grid-cols-12 gap-12 border-t border-backstein-gold-hairline pt-16
```

Column 1 — Menu (col-span-3):

```
Menu
About
Manufaktur
Bohnen
Kontakt
```

Column 2 — Sozial (col-span-3):

```
Sozial
Instagram
Newsletter
```

Column 3 — Newsletter (col-span-6):

Top label: `Vier Wochen Manufaktur.`

Headline (Cormorant, 32px light):

```
Bleiben Sie nah. Vier Mal im Jahr ein
Brief auf Cremepapier — keine Werbung.
```

Form:

```tsx
<form className="mt-6 flex items-center gap-3">
  <input
    type="email"
    placeholder="Ihre E-Mail"
    className="h-12 flex-1 rounded-pill border border-backstein-gold-hairline bg-backstein-cream-elevated px-5 font-body text-[14px] text-backstein-black placeholder:text-backstein-grey focus:border-backstein-red focus:outline-none"
  />
  <button type="submit" className="red-button">Abonnieren</button>
</form>
<p className="mt-3 font-body text-[11px] text-backstein-grey">
  Mit der Anmeldung akzeptieren Sie unsere Datenschutzhinweise.
</p>
```

Style — column heading (all three):

```txt
mb-5 font-body text-[11px] uppercase tracking-manufaktur text-backstein-grey
```

Style — column link:

```txt
block py-1.5 font-body text-[15px] text-backstein-black hover:text-backstein-red transition-colors
```

### 9c. Bottom strip

Wrapper:

```txt
mt-16 flex items-center justify-between border-t border-backstein-gold-hairline py-8 font-body text-[12px] text-backstein-grey
```

Left content: `AGB · Datenschutz · Impressum · Widerruf`
Right content: `© 2026 RÖSTMANUFAKTUR BACKSTEIN`

### 9d. Authorship signature

Below the bottom strip, centered, very small:

```tsx
<p className="pb-6 text-center font-body text-[11px] text-backstein-grey/80">
  A fictional brand concept · Designed &amp; developed by Luca Sorci · Klarteq, 2026
</p>
```

### 9e. Mega-wordmark anchor

Outside the inner container so it spans full viewport width.

```tsx
<div className="mega-wordmark mt-8 select-none -mb-[2vw]">BACKSTEIN</div>
```

Style:

```txt
mega-wordmark text-center
```

The mega-wordmark uses the same `.mega-wordmark` class as the hero parallax wordmark, but **here it is static** — no animation. It is the final visual anchor of the page, like a hot-foil stamp.

Animation — **Modul 1 (Standard Fade-Up)** on the footer columns and the bottom strip when the footer enters view; **Static, no animation needed** on the mega-wordmark itself.

---

# ANIMATION SYSTEM

All eight modules are exported from `lib/motion-modules.ts`. The file declares `'use client'` and registers GSAP/ScrollTrigger once.

```ts
'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### Modul 1 — Standard Fade-Up
Trigger: 75–80 % viewport height. translateY 24px → 0, opacity 0 → 1, 700ms `power2.out`. Used for body text, captions, helper elements, the ORT text columns, the KONTAKT body, every footer block. Default everywhere unless another module is named.

```ts
export const fadeUp = (el: gsap.TweenTarget, opts: { delay?: number; trigger?: Element | string } = {}) =>
  gsap.from(el, {
    y: 24, opacity: 0, duration: 0.7, ease: "power2.out", delay: opts.delay ?? 0,
    scrollTrigger: { trigger: opts.trigger ?? el as Element, start: "top 78%" },
  });
```

### Modul 2 — Word-Swap Headline
Used only on the HERO headline. translateY 30–50px (entrance) / -30 to -50px (exit), opacity 0 ↔ 1, scrub-bound, easing linear. Each word in `<span class="hero-word">` enters on initial load (power2.out 0.8s) and exits on scroll-out (scrub).

```ts
gsap.from(".hero-word", { yPercent: 100, opacity: 0, stagger: 0.08, ease: "power2.out", duration: 0.8 });
gsap.to(".hero-headline", {
  yPercent: -50, opacity: 0, ease: "none",
  scrollTrigger: { trigger: ".section-hero", start: "30% top", end: "bottom top", scrub: true },
});
```

### Modul 3 — Background-Text Parallax
Scrub-bound. translateY with a multiplier 1.5–2.0 (the wordmark moves faster than the page), easing linear. Used on the HERO mega-wordmark and (optionally, very subtly) on the FOOTER mega-wordmark — but per the section spec, the footer mega-wordmark is **Static, no animation needed**.

```ts
gsap.to(".mega-wordmark--hero", {
  y: -240, ease: "none",
  scrollTrigger: { trigger: ".section-hero", start: "top top", end: "bottom top", scrub: 1 },
});
```

### Modul 4 — Sticky Pin
Two implementations: pure CSS `position: sticky` for simple cases (NAVBAR, the HANDWERK left headline), or `ScrollTrigger.create({ pin: ... })` when the pin must end on a sibling element (the HANDWERK right card stack, the HERO video).

```ts
ScrollTrigger.create({
  trigger: ".handwerk-right-stack",
  start: "top 120px",
  endTrigger: ".section-handwerk",
  end: "bottom bottom",
  pin: ".handwerk-left",
  pinSpacing: false,
});
```

### Modul 5 — Stacking Cards
Scrub-bound. Lower card scales 1.0 → 0.95 + opacity 1.0 → 0.6 as the next card enters from below. Easing linear (scrub-bound). Used in HANDWERK only.

```ts
const cards = gsap.utils.toArray<HTMLElement>(".craft-card");
cards.forEach((card, i) => {
  if (i === cards.length - 1) return;
  gsap.to(card, {
    scale: 0.95, opacity: 0.6, ease: "none",
    scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top top", scrub: 1 },
  });
});
```

### Modul 6 — Stagger-Reveal Group
Section in viewport at 70 %. Per item: Modul 1. Stagger 80–120 ms. Used on MANIFEST words, HERITAGE bento cards, BOHNEN product cards, PHILOSOPHIE table rows, KONTAKT accordion items, footer columns.

```ts
gsap.from(".bohnen-card", {
  y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: ".section-bohnen", start: "top 70%" },
});
```

### Modul 7 — Image Parallax-Zoom
Scrub-bound. Inside `overflow:hidden` container, scale 1.08 → 1.0 over the image's full scroll-through. Easing linear. Used in ORT (both zigzag images) and PHILOSOPHIE (left bean macro).

```ts
gsap.fromTo(
  ".img-zoom > img",
  { scale: 1.08 },
  {
    scale: 1.0, ease: "none",
    scrollTrigger: { trigger: ".img-zoom", start: "top bottom", end: "bottom top", scrub: 1 },
  }
);
```

### Modul 8 — Accordion
Click-bound (not scroll-bound). height 0 → auto + opacity inner 0 → 1, 300–400 ms `power2.inOut`. Used in KONTAKT and (later) the Shop product detail page.

```ts
function toggleAccordion(panel: HTMLElement, open: boolean) {
  const inner = panel.querySelector<HTMLElement>(".faq-answer-inner")!;
  gsap.to(panel, { height: open ? inner.offsetHeight : 0, duration: 0.35, ease: "power2.inOut" });
  gsap.to(inner, { opacity: open ? 1 : 0, duration: 0.3, ease: "power2.out" });
}
```

### Module-to-section coverage map

| Section | Modul 1 | Modul 2 | Modul 3 | Modul 4 | Modul 5 | Modul 6 | Modul 7 | Modul 8 |
|---|---|---|---|---|---|---|---|---|
| 0 Navbar     | – | – | – | ✓ (CSS fixed) | – | – | – | – |
| 1 Hero       | – | ✓ | ✓ | ✓ | – | – | – | – |
| 2 Manifest   | ✓ | – | – | – | – | ✓ | – | – |
| 3 Heritage   | ✓ | – | – | – | – | ✓ | – | – |
| 4 Handwerk   | – | – | – | ✓ | ✓ | – | – | – |
| 5 Bohnen     | ✓ | – | – | – | – | ✓ | – | – |
| 6 Ort        | ✓ | – | – | – | – | – | ✓ | – |
| 7 Philosophie| ✓ | – | – | – | – | ✓ | ✓ | – |
| 8 Kontakt    | ✓ | – | – | – | – | ✓ | – | ✓ |
| 9 Footer     | ✓ | – | – | – | – | – | – | – |

Sections / modules marked `–` are deliberately **Static, no animation needed**.

### Lenis smooth-scroll provider

```tsx
'use client';
// app/lib/lenis-provider.tsx
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => { lenis.raf(t); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
```

---

# EXACT VISUAL HIERARCHY

Ranked from most dominant to least, top to bottom of the page:

1. The hero drum-roaster video (visually centered, 58vh tall, the page's gravitational center)
2. The HERO headline `Aus Stein gebrannt. / Mit Feuer geröstet.` (Cormorant 80–96px)
3. The mega parallax wordmark `BACKSTEIN` behind the hero (cream-darker, 360px)
4. The MANIFEST headline `Geröstet seit 1924. / Manufaktur seit hundert Jahren.` (centered, 64px)
5. The HERITAGE big stat `1924` (180px Cormorant in the bento card)
6. The HANDWERK sticky headline `Aus Stein gebrannt. / Mit Feuer geröstet.` with the brick-red italic `Feuer`
7. The three stacking craft cards in HANDWERK (each card pinned in turn)
8. The BOHNEN three product cards with their vertical kraft photography
9. The ORT zigzag photography (large editorial images)
10. The PHILOSOPHIE table rows with gold hairlines
11. The KONTAKT accordion (right column, dominant within its section)
12. The mega `BACKSTEIN` wordmark anchor in the footer
13. The footer 3-column block (Menu / Sozial / Newsletter)
14. The navbar (small, always present, never wins attention)
15. The brick-red pill labels (small but recurring — the page's spotting color)

Make sure the **hero video and the two mega-wordmarks remain the page's strongest visual anchors**. Everything else lives at editorial whitespace and never competes for the eye at the same time as those three.

---

# SPACING AND LAYOUT DETAILS

Approximate desktop pixel geometry. The rebuilder will adjust.

```json
{
  "page_max_width": "1280px",
  "narrow_text_max_width": "1080px",
  "navbar_height": "64px",
  "section_vertical_pad": "clamp(120px, 14vw, 200px)",
  "hero": {
    "min_height": "100vh",
    "top_padding": "120px",
    "video_size": "58vh tall, 4/5 aspect, centered",
    "headline_max_width": "14ch",
    "subline_top_offset": "8px from top of grid",
    "wordmark_height": "clamp(180px, 23vw, 360px)",
    "wordmark_bottom": "-40px"
  },
  "manifest": {
    "max_width": "1080px",
    "centered": true,
    "headline_size": "clamp(40px, 5vw, 64px)",
    "body_max_width": "52ch",
    "vertical_pad": "clamp(160px, 16vw, 220px)"
  },
  "heritage_bento": {
    "container_padding": "48px",
    "card_gap": "24px",
    "card_min_height_top_row": "200px",
    "card_min_height_left_big": "420px",
    "big_stat_font_size": "180px"
  },
  "handwerk": {
    "left_col": "5/12",
    "right_col": "7/12",
    "sticky_offset": "120px",
    "card_max_width": "480px",
    "card_aspect": "4/5",
    "card_top_offset": "160px (sticky)"
  },
  "bohnen": {
    "card_gap": "24px",
    "card_image_aspect": "4/5",
    "card_body_padding": "28px",
    "header_margin_bottom": "64px"
  },
  "ort": {
    "row_gap": "128px",
    "image_left_aspect": "4/5",
    "image_right_aspect": "16/10"
  },
  "philosophie": {
    "image_aspect": "1/1",
    "table_row_padding_y": "24px",
    "label_font_size": "28px",
    "meta_font_size": "12px"
  },
  "kontakt": {
    "left_col": "5/12",
    "right_col": "7/12",
    "accordion_row_padding_y": "24px",
    "question_font_size": "22px"
  },
  "footer": {
    "two_pre_cards_gap": "24px",
    "three_col_split": "3 / 3 / 6",
    "newsletter_input_height": "48px",
    "bottom_strip_padding_y": "32px",
    "mega_wordmark_size": "clamp(180px, 23vw, 360px)",
    "mega_wordmark_negative_bottom": "-2vw"
  }
}
```

---

# COMPONENT TREE

```
App (LenisProvider)
├── PaperGrainOverlay (decorative, fixed)
├── NavBar
│   ├── Logo (wordmark + brick mark SVG)
│   ├── NavLinks (Manufaktur / Bohnen / Kontakt)
│   └── CartPill (lucide ShoppingBag + count)
└── Main
    ├── SectionHero
    │   ├── HeroPill ("RÖSTMANUFAKTUR · 1924")
    │   ├── HeroHeadline (Modul 2 word-swap, 2 lines, italic "Feuer")
    │   ├── HeroSubline (right-aligned)
    │   ├── HeroSocialProof (★★★★★ + 4.8/5)
    │   ├── HeroVideoFrame (Modul 4 pin)
    │   └── MegaWordmarkHero (Modul 3 parallax)
    ├── SectionManifest
    │   ├── ManifestPill ("01")
    │   ├── ManifestHeadline (2 lines, light/medium contrast, Modul 6 word-stagger)
    │   └── ManifestBody (Modul 1)
    ├── SectionHeritage
    │   ├── PillRow (3 tag pills)
    │   └── BentoContainer (.red-wash, Modul 1)
    │       ├── HeritageCard A — "1924" big stat (Modul 6)
    │       ├── HeritageCard B — drum-roaster image with overlay pill
    │       ├── HeritageCard C — "100" Jahre
    │       └── HeritageCard D — "IV" Generationen
    ├── SectionHandwerk
    │   ├── HandwerkLeft (sticky, Modul 4)
    │   │   ├── HandwerkPill ("Das Handwerk")
    │   │   ├── HandwerkHeadline (italic "Feuer")
    │   │   └── HandwerkBody
    │   └── HandwerkStack (Modul 5)
    │       ├── CraftCard 01 — Grüne Bohne (video)
    │       ├── CraftCard 02 — Röstung (video)
    │       └── CraftCard 03 — Abkühlen (video)
    ├── SectionBohnen
    │   ├── BohnenHeader (pill + headline + arrow link)
    │   └── BohnenGrid (Modul 6)
    │       ├── BohneCard — Pavenstädter Bohne
    │       ├── BohneCard — Kontor 1924
    │       └── BohneCard — Manufaktur Single Origin
    ├── SectionOrt
    │   ├── OrtZigzag1 (text left + image right, Modul 1 + 7)
    │   └── OrtZigzag2 (video left + text right, Modul 1 + 7)
    ├── SectionPhilosophie
    │   ├── PhiloImage (left, Modul 7)
    │   └── PhiloRight
    │       ├── PhiloPill ("Unsere Werte")
    │       ├── PhiloHeadline ("Drei Sätze. / Drei Versprechen." italic accent)
    │       ├── PhiloBody
    │       └── PhiloTable (Modul 6)
    │           ├── Row Handwerk
    │           ├── Row Herkunft
    │           └── Row Heimat
    ├── SectionKontakt
    │   ├── KontaktLeft (pill + headline + body + link rows)
    │   └── KontaktAccordion (Modul 8)
    │       ├── FAQ Q1 — Manufaktur-Adresse
    │       ├── FAQ Q2 — Öffnungszeiten
    │       ├── FAQ Q3 — Versand
    │       ├── FAQ Q4 — Großbestellung Gastro
    │       └── FAQ Q5 — Gutscheine
    └── SectionFooter
        ├── FooterPreCards (2 editorial image cards)
        ├── FooterColumns
        │   ├── ColMenu
        │   ├── ColSozial
        │   └── ColNewsletter (form + submit red-button)
        ├── FooterBottomStrip (legal links + copyright)
        ├── FooterAuthorship ("A fictional brand concept · …")
        └── MegaWordmarkAnchor (Static, no animation needed)
```

---

# VISUAL DETAILS TO MATCH

### Important details from the references

- The page background is **cream-pergament `#E8DCC4`**, never pure white. It must feel like Munken Pure paper, slightly warm, slightly textured. Apply the `.paper-grain` overlay at 6 % opacity site-wide to lock in the paper feel.
- Body text is **Manufaktur-Schwarz `#1A1612`**, a warm near-black, never `#000`. Pure black on this cream looks digital and cold.
- Brick-red `#8B4538` is the **only** chromatic accent. Used sparingly: pill labels, italic accent words, the heritage container wash (15 % opacity), the newsletter submit button, hover-state link color. The page should never feel "red" — red is the spotting color, not the dominant.
- Gold `#9B8557` exists **only as a 1px hairline rule** and as the brick detail in the logo. Never as a fill, never as text larger than 12px, never as a background.
- Headlines are **Cormorant Garamond, light or medium weight, never bold**. Tight tracking (-0.012em to -0.015em). The serif's italic is the brand's secret weapon — always italicize the verb of fire/heat/craft (Feuer, Hand, Heimat).
- Body is **Inter, regular**, generous leading (1.6–1.7), moderate measure (44–60ch). Never justify body. Never use weight ≥ 600 in body.
- Pill labels are tiny — 11px Inter, ALL CAPS, letter-spacing 0.18em, brick-red text on `red-soft` background. They look like a hot-stamp, not a button.
- Editorial photography is **always large** — never thumbnails, never rounded-3xl, never with heavy shadows. Subtle 4–8px corner radius, gold hairline border, soft drop shadow.
- The mega `BACKSTEIN` wordmark in the hero and footer is the **exhale** of the page. It must read as a printed letterpress impression, not a logo. Color: `cream-darker` (#D9CCB0), never red, never black.
- Drum-roaster video must dominate the hero — 58 % of the viewport height, centered, framed in a cream-elevated card. The brick wall behind it (in the video) must be visible, not blurred out.
- HANDWERK uses **dark brown stacking cards** — the only deviation from the cream surface in the page. The contrast is intentional: this is the "fire" of the manufaktur.
- Stacking cards must feel **physical** — when card 02 enters from below, card 01 should subtly shrink (scale 0.95) and dim (opacity 0.6). Never use shadows or 3D rotation tricks.
- Section padding is **enormous** — `clamp(120px, 14vw, 200px)` vertical. The page must breathe. Empty space is the design.
- Hairline dividers are **gold at 40 % opacity**, 1px, never grey, never thicker than 1px.
- The accordion in KONTAKT opens softly (300–400ms) — never bounce, never overshoot.
- Hover states use brick-red (`#8B4538`) — never lighten to `hover` — except the newsletter button which presses to `red-pressed` (#6F3329).
- The page reads top-to-bottom as a slow editorial feature, not as a marketing landing. The reader should arrive at the footer feeling they've read a long-form magazine article about a 100-year-old roastery.
- Smooth-scroll (Lenis) is mandatory — the GSAP scrub modules feel uneven without it. Duration 1.1, smoothWheel true.
- The sticky-pin in HANDWERK only fires on desktop. On tablet/mobile, the left headline scrolls naturally.
- Logo is small in the navbar (24px tall). The brand name does not need to dominate — the page already does.
- Every CTA arrow is `→` (Unicode), not an SVG, not a lucide `ArrowRight`. Inline character. Brick-red, no underline.

### Anti-patterns / things to avoid

- **Avoid pure white.** Anywhere. Cream only. White on cream looks like an unfinished design.
- **Avoid pure black.** Manufaktur-Schwarz `#1A1612` everywhere instead.
- **Avoid grey shadows.** All shadows are warm (rgba(26, 22, 18, …)) — they should look like sun shadows, not Material Design shadows.
- **Avoid Inter for headlines.** Cormorant Garamond is the brand voice. Inter is the whisper. Never reverse.
- **Avoid heavy weights.** Cormorant max 600. Inter max 600. The page must never feel "bold".
- **Avoid colorful gradients.** Solid colors only. Backgrounds are flat cream. Even the heritage wash is a solid `red-soft`, not a gradient.
- **Avoid neon, glow, glassmorphism.** This is a manufaktur, not a SaaS. The only blur is on the navbar (`backdrop-filter: blur(14px)`).
- **Avoid generic "feature card with icon-and-title" layouts.** Every "card" is editorial — image first, headline second, body third. Never "icon + heading + 1-line description".
- **Avoid lucide icons in body content.** Icons exist only in the navbar (cart) and the accordion chevron. Body sections never have icons.
- **Avoid English copy in body text.** German throughout. The only exception is the authorship signature in the footer.
- **Avoid bouncy animations.** Power2 / power3 easing only. No `back.out`, no `elastic`, no overshoot. The brand is slow and quiet.
- **Avoid gradients on buttons.** The newsletter `red-button` is a solid `#8B4538`. No vertical gradient, no inset highlight rim. Flat.
- **Avoid uppercase headlines.** ALL CAPS exists only on pill labels (11px). Headlines are sentence case with full stops.
- **Avoid emojis.** Anywhere. The 5-star line uses `★` (Unicode), not `⭐`.
- **Avoid hover scale > 1.04.** Subtle motion only — this is editorial, not a portfolio.
- **Avoid "Read more" / "Learn more" CTAs.** Every link is concrete: `Zum Shop →`, `Bestellen →`, `Route in Maps öffnen →`.
- **Avoid stock photography.** All images must look custom-made, hand-shot, low-saturation, warm tungsten. AI-generated photography per the asset prompts is acceptable; iStock is not.

---

# FINAL IMPLEMENTATION GOAL

The final result should visually recreate a calm, hundred-year-old coffee manufaktur as a slow-scroll Next.js 16 editorial. It should feel like a long magazine feature about a real Pavenstädt brick-and-roaster family — Cormorant Garamond breathing across cream paper, brick-red appearing only as the occasional hot-stamp, the drum-roaster turning at the heart of the hero, two mega-wordmark exhalations bookending the page. The reader should scroll slowly, feel held, and arrive at the footer convinced this is a real four-generation business with a real Probat trommel — not a portfolio piece, not a fictional pitch, not a Klarteq showcase. The signature at the bottom should land like a printer's mark, almost unnoticed — because the rest of the page already earned the reader's trust.
