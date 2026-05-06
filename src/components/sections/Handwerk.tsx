'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useReveal } from "@/hooks/useReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Step = {
  id:    string;
  pill:  string;
  title: string;
  body:  string;
  video: string;
};

const STEPS: Step[] = [
  {
    id:    "step-01",
    pill:  "Schritt 01",
    title: "Grüne Bohne.",
    body:  "Wir kaufen direkt vom Importeur in Bremen. Sortenrein. Säckeweise. Per Hand geprüft, bevor sie überhaupt unser Lager sehen.",
    video: "/video/rohbonen.mp4",
  },
  {
    id:    "step-02",
    pill:  "Schritt 02",
    title: "Röstung.",
    body:  "Zwölf Minuten. Erstes Knacken bei 196°. Zweites Knacken vermeiden wir bewusst. Was im Trommelbauch passiert, hört nur, wer hundert Jahre Erfahrung hat.",
    video: "/video/closeup-roestung.mp4",
  },
  {
    id:    "step-03",
    pill:  "Schritt 03",
    title: "Abkühlen.",
    body:  "Mit Frischluft, nicht mit Wasser. Drei Minuten lang in der Kühltrommel. Erst dann darf sie als unsere Bohne den Sack verlassen.",
    video: "/video/bohnenausgabe.mp4",
  },
];

export default function Handwerk() {
  const sectionRef  = useRef<HTMLElement>(null);
  const revealRef   = useReveal();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".craft-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale:   0.95,
          opacity: 0.6,
          ease:    "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start:   "top bottom",
            end:     "top top",
            scrub:   1,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="section-handwerk"
      className="section-handwerk relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-12">

        {/* ─── 4a. Linke Spalte — Sticky Headline ───────────────────── */}
        <div ref={revealRef} className="reveal handwerk-left md:col-span-5 md:sticky md:top-[120px] md:self-start">
          <span className="pill-label mb-6 inline-block">Das Handwerk</span>

          <h2
            className="max-w-[12ch]"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(48px, 5.6vw, 72px)",
              fontWeight:    300,
              lineHeight:    1.02,
              letterSpacing: "-0.012em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            Aus Stein gebrannt.
            <br />
            Mit{" "}
            <span
              style={{
                fontStyle:  "italic",
                fontWeight: 500,
                color:      "var(--color-backstein-rot)",
              }}
            >
              Feuer
            </span>{" "}
            geröstet.
          </h2>

          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "15px",
              lineHeight: 1.65,
              color:      "var(--color-backstein-grau)",
              maxWidth:   "38ch",
            }}
          >
            Drei Schritte. Drei Stunden. Drei Hundertstel Sekunde Aufmerksamkeit
            pro Bohne. Unsere Trommel wurde 1924 in Emmerich gebaut. Wir füllen
            sie noch immer von Hand.
          </p>
        </div>

        {/* ─── 4b. Rechte Spalte — Stacking Craft Cards ─────────────── */}
        <div className="handwerk-right-stack relative md:col-span-7">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="craft-card sticky top-[160px] mx-auto flex aspect-[4/3] w-full max-w-full flex-col justify-end overflow-hidden p-8 md:aspect-[4/5] md:max-w-[480px]"
              style={{
                borderRadius: "16px",
                marginBottom: "24px",
              }}
            >
              {/* Video background — z-0 */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 h-full w-full object-cover"
              >
                <source src={step.video} type="video/mp4" />
              </video>

              {/* Dark gradient overlay — z-1 */}
              <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }}
              />

              {/* Pill top-left — z-2 */}
              <span
                className="pill-label absolute left-6 top-6 z-[2]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor:     "rgba(255,255,255,0.3)",
                  color:           "#ffffff",
                  backdropFilter:  "blur(4px)",
                }}
              >
                {step.pill}
              </span>

              {/* Bottom block: title + body — z-2 */}
              <div className="relative z-[2]">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize:   "36px",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color:      "var(--color-backstein-cream)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   "14px",
                    lineHeight: 1.55,
                    color:      "rgba(232, 220, 196, 0.75)",
                    maxWidth:   "36ch",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
