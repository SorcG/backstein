'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/hooks/useReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WERTE = [
  {
    label: "Handwerk",
    meta:  "Wert 01",
    body:  "Wir rösten von Hand. In kleinen Chargen. Dreimal die Woche.",
  },
  {
    label: "Herkunft",
    meta:  "Wert 02",
    body:  "Wir kennen unsere Bauern. Direkt. Per Handschlag.",
  },
  {
    label: "Heimat",
    meta:  "Wert 03",
    body:  "Wir bleiben in Ostwestfalen. Hier ist unser Ofen.",
  },
];

export default function Philosophie() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef  = useReveal();

  useGSAP(
    () => {
      // ── Modul 7 — Parallax-Zoom auf Bild ──────────────────
      const wrap = sectionRef.current?.querySelector<HTMLElement>(".ort-img-wrap");
      if (wrap) {
        const img = wrap.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1.0,
              ease:  "none",
              scrollTrigger: {
                trigger: wrap,
                start:   "top bottom",
                end:     "bottom top",
                scrub:   1,
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-philosophie relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-16 md:items-start">

        {/* ─── Linke Seite — Bild (col-span-5) ────────────────────── */}
        <div className="md:col-span-5">
          <div
            className="ort-img-wrap overflow-hidden"
            style={{ borderRadius: "8px", aspectRatio: "4/3" }}
          >
            <img
              src="/images/fallende-bohnen.png"
              alt="Fallende Bohnen"
              className="h-full w-full object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </div>

        {/* ─── Rechte Seite — Tabelle (col-span-7) ─────────────────── */}
        <div className="md:col-span-7">
          <span
            className="pill-label"
            style={{
              borderColor: "var(--color-backstein-rot)",
              color:       "var(--color-backstein-rot)",
            }}
          >
            Unsere Werte
          </span>

          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize:   "32px",
              fontWeight: 300,
              lineHeight: 1.1,
              color:      "var(--color-backstein-schwarz)",
            }}
          >
            Drei Sätze. Drei Versprechen.
          </p>

          {/* Werte-Tabelle */}
          <div ref={revealRef} className="reveal werte-table mt-8">
            {WERTE.map((wert, i) => (
              <div
                key={i}
                className="werte-row py-6"
                style={{
                  borderBottom: "0.5px solid var(--color-backstein-gold)",
                  ...(i === 0
                    ? { borderTop: "0.5px solid var(--color-backstein-gold)" }
                    : {}),
                }}
              >
                {/* Label + Meta */}
                <div className="flex items-baseline justify-between">
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize:   "24px",
                      fontWeight: 300,
                      lineHeight: 1,
                      color:      "var(--color-backstein-schwarz)",
                    }}
                  >
                    {wert.label}
                  </span>
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color:         "var(--color-backstein-grau)",
                    }}
                  >
                    {wert.meta}
                  </span>
                </div>

                {/* Body */}
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   "14px",
                    lineHeight: 1.6,
                    color:      "var(--color-backstein-grau)",
                  }}
                >
                  {wert.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
