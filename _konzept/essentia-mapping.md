# Essentia Reference Analysis – BACKSTEIN Hyliox Input
*Komplette visuelle und animatorische Analyse von essentia.framer.wiki als Referenz für RÖSTMANUFAKTUR BACKSTEIN*

---

## Globales Design-System

### Farbpalette (Essentia → BACKSTEIN-Übersetzung)
| Essentia | BACKSTEIN |
|---|---|
| #F5F3EF (Off-White Hintergrund) | #E8DCC4 (Cream-Pergament) |
| #1A1A1A (Text fast Schwarz) | #1A1612 (Manufaktur-Schwarz, warm) |
| #DCE3DA (Salbeigrün Akzent) | #8B4538 mit 15%% Opacity (Backstein-Rot warm) |
| #E8E5E0 (Hintergrundtext sehr hell) | Cream + 4%% darker für Riesentext |

### Typografie (Essentia → BACKSTEIN)
- Essentia: Geometric Sans-Serif (Inter/Satoshi-ähnlich) für ALLES
- BACKSTEIN: Cormorant Garamond für Headlines, Inter für Body
- ABWEICHUNG ZUM TEMPLATE: Wir wechseln auf Serif-Headlines für Editorial Luxury Vibe

### Sticky Navigation (übernehmen)
- Logo links, 3 Hauptlinks zentriert, CTA + Cart rechts
- Hintergrund: ~95%% Opacity Cream mit subtilem Blur
- Höhe: ~64px, sticky on scroll

---

## 9 BACKSTEIN-Sektionen mit Essentia-Mapping

### Sektion 1: HERO
**Essentia-Referenz:** Screenshots 1, 2 – Hero mit Parallax-Hintergrundtext
**Layout:** 100vh, Headline oben links, riesiger Hintergrundtext, Hero-Element mittig schwebend
**BACKSTEIN-Adaption:** 
- Headline links: "Aus Stein gebrannt." (Cormorant Garamond, ~80px, schwarz auf cream)
- Subline rechts: "Wir rösten, was kein anderer macht." (~16px, gedämpft)
- Riesentext-Layer: "BACKSTEIN" über volle Viewport-Breite, scrub-parallax
- Hero-Asset: Seedance-Video von Trommelröster (statt 3D-Tiegel)
**Animationen:**
- Headline-Wordswap: scrub-basiert, translateY 30-50px + opacity 0→1, linear/subtiles ease-out
- Hintergrundtext: scrub-parallax, translateY-Multiplikator ~1.5-2.0 (schneller als Scroll)
- Hero-Asset: sticky pin in der Mitte während Section, dann unpin

### Sektion 2: MANIFEST
**Essentia-Referenz:** Screenshot 3 – Manifest-Moment beim Scrollen
**Layout:** Zentrierter Text, zwei Zeilen mit Fett-Kontrast
**BACKSTEIN-Adaption:**
- Zeile 1 (light-weight, mittleres Grau): "Geröstet seit 1924."
- Zeile 2 (bold, fast Schwarz): "Manufaktur seit hundert Jahren."
- Optional darunter Bohne-Macro statt Tiegel
**Animationen:**
- Beim Scrollen ins Viewport: Stagger-Reveal Wort für Wort
- 80-100ms Versatz zwischen Wörtern
- translateY 30px → 0, opacity 0 → 1, ease-out 600ms

### Sektion 3: HERITAGE
**Essentia-Referenz:** Screenshot 11 – Bento-Stat-Grid auf Salbeigrün-Container
**Layout:** Bento-Grid 2x2 mit verschiedenen Karten-Größen, auf Backstein-Rot-Akzent-Container
**BACKSTEIN-Adaption:**
- Container-Hintergrund: #8B4538 mit 15%% Opacity
- Karte 1 (links oben): Große Stat "1924" + "Gegründet von Friedrich"
- Karte 2 (rechts oben groß): Foto Trommelröster + "Probat" Badge
- Karte 3 (links unten): "100 Jahre" + Erklärung
- Karte 4 (rechts unten): "4 Generationen" + Familien-Subtext
- Tag-Pills für Kategorien: "Heritage", "Manufaktur", "Handwerk"
**Animationen:**
- Karten erscheinen mit Stagger 100ms ms zwischen Items
- Standard Fade-Up: translateY 20px, opacity 0→1, 600ms ease-out

### Sektion 4: HANDWERK
**Essentia-Referenz:** Screenshots 6, 7 – Stacking Cards
**Layout:** 50/50 Split, links sticky Headline, rechts stackende Karten
**BACKSTEIN-Adaption:**
- Links sticky: "Aus Stein gebrannt. / Mit **Feuer geröstet.**" (Cormorant)
- Rechts: 3 Karten "Schritt 01 – Grüne Bohne", "Schritt 02 – Röstung", "Schritt 03 – Abkühlen"
- Karten-Hintergrund: Seedance-Macro-Videos statt Personen-Fotos
- Pill-Label oben links jeder Karte: "Schritt 01" etc. in Backstein-Rot
- Text unten weiß auf dunklem Gradient-Overlay
**Animationen:**
- Stacking Effect: Untere Karte scale 1.0 → 0.95 + dunkles Overlay opacity 0 → 0.4
- Neue Karte: translateY von unten in Position
- Scrub-basiert (an Scroll gekoppelt, nicht zeitbasiert)
- Linke Headline fixiert via ScrollTrigger pin

### Sektion 5: BOHNEN
**Essentia-Referenz:** Screenshot 17 – Produkt-Detail-Layout (für Subroute /shop)
**Hauptseiten-Variante:** Horizontaler Slider mit 3 Bohnen-Karten
**Layout:**
- Headline oben: "Drei Bohnen, eine Manufaktur."
- 3 nebeneinander stehende Produktkarten:
  - Pavenstädter Bohne (Hausröstung)
  - Kontor 1924 (Espresso)  
  - Manufaktur Single Origin (Limited)
- Jede Karte: Großes Bild Kaffeetüte (KI-generiert), Name, Preis, "Bestellen"-Button
**Animationen:**
- Stagger-Reveal: 100ms zwischen Karten
- Hover: Karte scale 1.02, leichter Schatten erscheint, Goldlinie pulst
- Click führt zu Subroute /shop/[bohne]

### Sektion 6: ORT
**Essentia-Referenz:** Screenshot 9 – Editorial Zickzack mit großen Bildern
**Layout:** Wechselnde links/rechts-Bilder mit Text dazwischen
**BACKSTEIN-Adaption:**
- Großes Außenbild Manufaktur (KI) rechts
- Text links: "Auf dem Manufakturgelände 4 / 33334 Gütersloh-Pavenstädt"
- Öffnungszeiten als Mini-Tabelle
- Zweites Bild: Innenraum mit Trommelröster (KI)
- Text dazu: "Donnerstag und Freitag, 7-9 Uhr / Klönzeit: jeden ersten Freitag im Monat"
**Animationen:**
- Bild-Container: overflow hidden, Bild scale 1.08 → 1.0 beim Scrollen (Parallax-Zoom)
- Text: Standard Fade-Up bei 75-80%% Viewport
- 600-800ms ease-out

### Sektion 7: PHILOSOPHIE
**Essentia-Referenz:** Screenshot 8 – Tabellen-Layout mit Pill-Header
**Layout:** Großes Bild links, tabellarische Liste rechts
**BACKSTEIN-Adaption:**
- Bild links: Macro-Shot geröstete Bohnen (KI oder Seedance Frame)
- Pill-Label oben rechts: "Unsere Werte" in Backstein-Rot
- Tabellen-Zeilen mit Goldlinien-Trennern:
  - "Handwerk" + "Wert 01"
  - "Herkunft" + "Wert 02"
  - "Heimat" + "Wert 03"
- Body-Text-Block oben: "Drei Sätze. Drei Versprechen."
**Animationen:**
- Tabellen-Zeilen: Stagger Fade-Up, 100ms zwischen Items
- Bild-Container Parallax-Zoom

### Sektion 8: KONTAKT
**Essentia-Referenz:** Screenshot 18 – FAQ-Layout
**Layout:** 50/50 Split, links Titel + CTA, rechts Accordion
**BACKSTEIN-Adaption:**
- Links: Headline "Vorbeikommen oder bestellen." + "Zum Shop →"-Link
- Rechts: 4-5 Accordion-Items
  - "Wo finde ich die Manufaktur?"
  - "Wann sind die Öffnungszeiten?"
  - "Versand und Lieferzeiten?"
  - "Großbestellungen und Gastro?"
- Trennlinien: Goldfarben statt grau
- Chevron-Down-Icons rechts
**Animationen:**
- Accordion: height 0 → auto, opacity 0 → 1, 300-400ms ease-in-out
- Sanfte Öffnung und Schließung

### Sektion 9: FOOTER + MEGA-LOGO
**Essentia-Referenz:** Screenshot 20 – Footer + Riesentext-Anker
**Layout:** 3-Spalten-Footer + Vollbreite-Logo darunter
**BACKSTEIN-Adaption:**
- Spalte 1 "Menu": About, Manufaktur, Shop, Kontakt
- Spalte 2 "Sozial": Instagram, optional weitere
- Spalte 3 "Newsletter": "Vier Wochen Manufaktur" + Email-Input + Submit (rund, Backstein-Rot)
- Bottom-Strip: AGB · Datenschutz · Impressum · Widerruf · "© 2026 Backstein"
- Mega-Logo unten: "BACKSTEIN" über volle Viewport-Breite, ~480px Höhe, Cormorant Garamond, schwarz auf cream
- Authorship-Signatur ganz unten klein: "A fictional brand concept · Designed & developed by Luca Sorci · Klarteq, 2026"
**Animationen:**
- Mega-Logo: kein Animation-Effekt, statisch als visueller Anker
- Footer-Inhalte: Standard Fade-Up

---

## Animation-Module (für gesamte Site konsistent)

### Modul 1: Standard Fade-Up
- Trigger: 75-80%% Viewport-Höhe
- translateY: 20-30px → 0
- opacity: 0 → 1  
- Duration: 600-800ms
- Easing: ease-out (weich)
- Use: Standard für Texte, kleinere Elemente

### Modul 2: Word-Swap Headline
- Trigger: Scroll (scrub)
- translateY: 30-50px (entrance) / -30-50px (exit)
- opacity: 0 → 1 / 1 → 0
- Easing: linear
- Use: Hero-Headline mit wechselnden Wörtern

### Modul 3: Background-Text Parallax
- Trigger: Scroll (scrub)
- translateY mit Multiplikator 1.5-2.0 (schneller als Scroll)
- Easing: linear
- Use: Riesige BACKSTEIN-Hintergrundtypografie

### Modul 4: Sticky Pin
- Trigger: Element erreicht obere Viewport-Kante
- Position: fixed während Section
- Keine Eigenanimation während pinned
- Use: Linke Headlines in Sektionen 4, 6, 7

### Modul 5: Stacking Cards
- Trigger: Scroll (scrub)
- Untere Karte: scale 1.0 → 0.95 + Overlay opacity 0 → 0.4
- Neue Karte: translateY von unten
- Easing: linear (scrub-bound)
- Use: Sektion 4 HANDWERK

### Modul 6: Stagger-Reveal Group
- Trigger: Section in Viewport
- Stagger: 80-100ms zwischen Items
- Pro Item: Modul 1
- Use: Listen, Karten-Grids, Tabellen

### Modul 7: Image Parallax-Zoom
- Trigger: Scroll (scrub)
- scale: 1.08 → 1.0 innerhalb overflow:hidden Container
- Easing: linear
- Use: Editorial-Bilder in Sektionen 6, 7

### Modul 8: Accordion
- Trigger: Click
- height: 0 → auto, opacity inner content 0 → 1
- Duration: 300-400ms
- Easing: ease-in-out
- Use: Sektion 8, später Shop-Detail

---

## Technical Stack

- Next.js 16+ (App Router) + TypeScript
- Tailwind CSS v4
- GSAP 3.13 + ScrollTrigger
- Lenis 1.1 für Smooth Scroll
- shadcn/ui Komponenten als Basis
- Vercel Deployment
- Subdomain: backstein.klarteq.de

## Brand Identity Constants

- Brand: RÖSTMANUFAKTUR BACKSTEIN
- Tagline: "Geröstet seit 1924. In Ostwestfalen."
- Authorship: "Luca Sorci · Klarteq, 2026"
- Sprache: Deutsch (kein Englisch im Body-Text)
