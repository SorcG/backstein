'use client';
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQ = [
  {
    q: "Wo finde ich die Manufaktur?",
    a: "Auf dem Manufakturgelände 4, 33334 Gütersloh-Pavenstädt. Kostenloses Parken auf dem Hof.",
  },
  {
    q: "Wann kann ich vorbeikommen?",
    a: "Donnerstag und Freitag von 7 bis 9 Uhr morgens. Klönzeit jeden ersten Freitag im Monat, 16:30 bis 18:30 Uhr.",
  },
  {
    q: "Wie lange dauert der Versand?",
    a: "Wir rösten auf Bestellung. Versand innerhalb von 3 Werktagen. Versandfrei ab 35 €.",
  },
  {
    q: "Gibt es Großbestellungen für Gastro?",
    a: "Ja. Schreib uns direkt: kontakt@backstein-roestmanufaktur.de",
  },
];

export default function Kontakt() {
  const sectionRef                          = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex]           = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".kontakt-content",
        { y: 30, opacity: 0 },
        {
          y:        0,
          opacity:  1,
          duration: 0.9,
          ease:     "power2.out",
          scrollTrigger: {
            trigger:       ".section-kontakt",
            start:         "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-kontakt relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-16 px-6 items-start kontakt-content">

        {/* ─── Linke Seite ────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(36px, 4vw, 56px)",
              fontWeight:    300,
              lineHeight:    1.02,
              letterSpacing: "-0.012em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            Vorbeikommen oder bestellen.
          </h2>

          <a
            href="/shop"
            className="mt-6 inline-block underline-offset-4 hover:underline"
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "15px",
              color:      "var(--color-backstein-rot)",
            }}
          >
            Zum Shop →
          </a>
        </div>

        {/* ─── Rechte Seite — Accordion ───────────────────────────── */}
        <div className="flex flex-col">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="accordion-item"
                style={{ borderBottom: "0.5px solid var(--color-backstein-gold)" }}
              >
                {/* Trigger row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   "16px",
                      color:      "var(--color-backstein-schwarz)",
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color:      "var(--color-backstein-grau)",
                      flexShrink: 0,
                      marginLeft: "16px",
                      transition: "transform 350ms ease",
                      transform:  isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Answer panel — CSS height transition */}
                <div
                  style={{
                    maxHeight:  isOpen ? "300px" : "0",
                    overflow:   "hidden",
                    transition: "max-height 350ms ease-in-out",
                  }}
                >
                  <p
                    className="pb-5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   "14px",
                      lineHeight: 1.65,
                      color:      "var(--color-backstein-grau)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
