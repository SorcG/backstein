'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARD_BG = "rgba(232, 220, 196, 0.75)";
const CARD_RADIUS = "12px";

export default function Heritage() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Headline — fade in from left
    gsap.from(".heritage-headline", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Stat cards — staggered fade + scale
    gsap.from(".heritage-stat", {
      opacity: 0,
      y: 40,
      scale: 0.94,
      duration: 0.9,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    // Image — parallax (image taller than container, overflow hidden clips it)
    gsap.to(".heritage-img", {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="section-heritage"
      className="section-heritage relative w-full px-6 py-[var(--section-pad)]"
    >
      <div
        className="mx-auto max-w-[1280px] p-10"
        style={{
          background:   "color-mix(in srgb, var(--color-backstein-rot) 15%, var(--color-backstein-cream) 85%)",
          borderRadius: "24px",
        }}
      >
        {/* Section header */}
        <div className="mb-12">
          <span className="pill-label mb-4 inline-block">Heritage</span>
          <h2
            className="heritage-headline"
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Left column — stat cards */}
          <div className="flex flex-col gap-6">

            {/* Card A — 1924 */}
            <div
              className="heritage-stat flex flex-col justify-between p-8"
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

              <div
                className="heritage-stat flex flex-col justify-between p-8"
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

              <div
                className="heritage-stat flex flex-col justify-between p-8"
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
            className="relative overflow-hidden order-first md:order-last"
            style={{ borderRadius: CARD_RADIUS, minHeight: "460px" }}
          >
            {/* Extra height (calc + top offset) gives parallax buffer on both ends */}
            <img
              src="/images/probat-maschine.png"
              alt="Probat-Trommelröster"
              className="heritage-img absolute left-0 w-full object-cover"
              style={{ top: "-20px", height: "calc(100% + 40px)" }}
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
