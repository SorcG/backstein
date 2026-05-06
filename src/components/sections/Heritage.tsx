'use client';
import { useReveal } from "@/hooks/useReveal";

const CARD_BG = "rgba(232, 220, 196, 0.75)";
const CARD_RADIUS = "12px";

export default function Heritage() {
  const revealRef = useReveal();

  return (
    <section
      id="section-heritage"
      className="section-heritage relative w-full px-6 py-[var(--section-pad)]"
    >
      <div
        className="mx-auto max-w-[1280px] p-10"
        style={{
          background:    "color-mix(in srgb, var(--color-backstein-rot) 15%, var(--color-backstein-cream) 85%)",
          borderRadius:  "24px",
        }}
      >
        {/* Section header */}
        <div className="mb-12">
          <span className="pill-label mb-4 inline-block">Heritage</span>
          <h2
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(40px, 5vw, 64px)",
              fontWeight:    300,
              lineHeight:    1.05,
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            Seit 1924 in Ostwestfalen.
          </h2>
        </div>

        {/* Bento grid — left col (A + C+D), right col (B tall) */}
        <div ref={revealRef} className="reveal grid grid-cols-2 gap-6">

          {/* Left column */}
          <div className="flex flex-col gap-6">

            {/* Card A — 1924 */}
            <div
              className="heritage-card flex flex-col justify-between p-8"
              style={{ backgroundColor: CARD_BG, borderRadius: CARD_RADIUS, minHeight: "220px" }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "96px",
                  fontWeight:    300,
                  lineHeight:    1,
                  letterSpacing: "-0.03em",
                  color:         "var(--color-backstein-schwarz)",
                }}
              >
                1924
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-backstein-grau)" }}>
                Gegründet von Friedrich
              </p>
            </div>

            {/* Cards C + D — side by side */}
            <div className="grid grid-cols-2 gap-6">

              {/* Card C — 100 Jahre */}
              <div
                className="heritage-card flex flex-col justify-between p-8"
                style={{ backgroundColor: CARD_BG, borderRadius: CARD_RADIUS, minHeight: "200px" }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "72px",
                    fontWeight:    300,
                    lineHeight:    1,
                    letterSpacing: "-0.03em",
                    color:         "var(--color-backstein-schwarz)",
                  }}
                >
                  100
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--color-backstein-schwarz)", marginBottom: "4px" }}>
                    Jahre Manufaktur
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-backstein-grau)" }}>
                    Seit 1924 rösten wir im selben Gebäude.
                  </p>
                </div>
              </div>

              {/* Card D — 4 Generationen */}
              <div
                className="heritage-card flex flex-col justify-between p-8"
                style={{ backgroundColor: CARD_BG, borderRadius: CARD_RADIUS, minHeight: "200px" }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "72px",
                    fontWeight:    300,
                    lineHeight:    1,
                    letterSpacing: "-0.03em",
                    color:         "var(--color-backstein-schwarz)",
                  }}
                >
                  4
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--color-backstein-schwarz)", marginBottom: "4px" }}>
                    Generationen
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-backstein-grau)" }}>
                    Urgroßvater Friedrich. Heute wir.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Card B — Image (right column, full height) */}
          <div
            className="heritage-card relative overflow-hidden"
            style={{ borderRadius: CARD_RADIUS, minHeight: "460px" }}
          >
            <img
              src="/images/probat-maschine.png"
              alt="Probat-Trommelröster"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              className="pill-label absolute bottom-6 left-6"
              style={{
                backgroundColor: "var(--color-backstein-schwarz)",
                borderColor:     "var(--color-backstein-schwarz)",
                color:           "var(--color-backstein-cream)",
              }}
            >
              Probat · seit 1924
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
