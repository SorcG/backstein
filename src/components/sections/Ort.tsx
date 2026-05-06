'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Ort() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".ort-img-wrap").forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;
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
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-ort relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">

        {/* Section header */}
        <span className="pill-label mb-4 inline-block">Wo wir rösten</span>
        <h2
          style={{
            fontFamily:    "var(--font-heading)",
            fontSize:      "clamp(40px, 5vw, 64px)",
            fontWeight:    300,
            lineHeight:    1.02,
            letterSpacing: "-0.012em",
            color:         "var(--color-backstein-schwarz)",
          }}
        >
          Auf dem Manufakturgelände.
        </h2>

        {/* ─── Paar 1 — Text links, Bild rechts ─────────────────────── */}
        <div className="mt-16 flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-16">

          {/* Text */}
          <div className="order-2 md:order-1">
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize:   "36px",
                fontWeight: 300,
                lineHeight: 1.1,
                color:      "var(--color-backstein-schwarz)",
              }}
            >
              Gütersloh-Pavenstädt.
            </h3>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "16px",
                lineHeight: 1.65,
                color:      "var(--color-backstein-grau)",
                maxWidth:   "42ch",
              }}
            >
              Auf dem Manufakturgelände 4. Eine alte Kornbrennerei aus dem Jahr
              1908. Wir haben sie 2018 zurückgeholt.
            </p>

            {/* Öffnungszeiten */}
            <div
              className="mt-8 pt-8"
              style={{ borderTop: "0.5px solid var(--color-backstein-gold)" }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color:         "var(--color-backstein-grau)",
                  marginBottom:  "8px",
                }}
              >
                Donnerstag und Freitag
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize:   "28px",
                  fontWeight: 300,
                  color:      "var(--color-backstein-schwarz)",
                }}
              >
                7:00 – 9:00 Uhr
              </p>
            </div>
          </div>

          {/* Bild */}
          <div
            className="ort-img-wrap overflow-hidden order-1 md:order-2"
            style={{ borderRadius: "8px", aspectRatio: "4/3" }}
          >
            <img
              src="/images/aussenansicht-rosterei.png"
              alt="Außenansicht der Rösterei"
              className="h-full w-full object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>

        </div>

        {/* ─── Paar 2 — Bild links, Text rechts ─────────────────────── */}
        <div className="mt-12 flex flex-col gap-8 md:mt-24 md:grid md:grid-cols-2 md:items-center md:gap-16">

          {/* Bild */}
          <div
            className="ort-img-wrap overflow-hidden"
            style={{ borderRadius: "8px", aspectRatio: "4/3" }}
          >
            <img
              src="/images/probat-maschine.png"
              alt="Die Probat-Trommel"
              className="h-full w-full object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>

          {/* Text */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize:   "36px",
                fontWeight: 300,
                lineHeight: 1.1,
                color:      "var(--color-backstein-schwarz)",
              }}
            >
              Die Trommel.
            </h3>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "16px",
                lineHeight: 1.65,
                color:      "var(--color-backstein-grau)",
              }}
            >
              Eine Probat aus dem Jahr 1924. Gefeuert mit Gas. Langsam gedreht.
              Zwölf Minuten pro Charge. Nie länger, nie kürzer.
            </p>

            {/* Klönzeit */}
            <div
              className="mt-8 pt-8"
              style={{ borderTop: "0.5px solid var(--color-backstein-gold)" }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color:         "var(--color-backstein-grau)",
                  marginBottom:  "8px",
                }}
              >
                Jeden ersten Freitag im Monat
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize:   "28px",
                  fontWeight: 300,
                  color:      "var(--color-backstein-schwarz)",
                }}
              >
                16:30 – 18:30 Uhr
              </p>
            </div>
          </div>

        </div>

        {/* ─── Vollbild Innenraum-Tour Video ──────────────────────────── */}
        <div
          className="mt-12 md:mt-24 w-full overflow-hidden aspect-[9/16] md:aspect-[16/9]"
          style={{ borderRadius: "8px" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/video/innenraum-tour.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
