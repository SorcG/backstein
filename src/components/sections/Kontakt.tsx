'use client';
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown } from "lucide-react";

const FAQ = [
  {
    q: "Wo finde ich die Manufaktur?",
    a: "Auf dem Manufakturgelände 4, 33334 Gütersloh-Pavenstädt. Kostenloses Parken auf dem Hof.",
  },
  {
    q: "Wann kann ich vorbeikommen?",
    a: "Verkauf & Abholung: Donnerstag und Freitag von 7:00 bis 9:00 Uhr. Rösterei Besichtigung: Jeden ersten Freitag im Monat, 16:30 bis 18:30 Uhr.",
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
  const revealRef                          = useReveal();
  const [openIndex, setOpenIndex]          = useState<number | null>(null);

  return (
    <section
      id="section-kontakt"
      className="section-kontakt relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div ref={revealRef} className="reveal kontakt-content mx-auto w-full max-w-[1280px] px-6 flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16 md:items-start">

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
