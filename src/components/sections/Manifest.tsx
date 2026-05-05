'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manifest() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".manifest-line", {
        yPercent: 60,
        opacity:  0,
        stagger:  0.2,
        duration: 0.9,
        ease:     "power2.out",
        scrollTrigger: {
          trigger: ".section-manifest",
          start:   "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-manifest relative w-full"
      style={{
        backgroundColor: "var(--color-backstein-cream)",
        paddingTop:      "var(--section-pad)",
        paddingBottom:   "var(--section-pad)",
      }}
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">

        {/* Zeile 1 — gedämpft */}
        <div className="overflow-hidden">
          <p
            className="manifest-line"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(48px, 6vw, 80px)",
              fontWeight:    300,
              lineHeight:    1.05,
              letterSpacing: "-0.012em",
              color:         "var(--color-backstein-grau)",
            }}
          >
            Geröstet seit 1924.
          </p>
        </div>

        {/* Goldene Trennlinie */}
        <hr
          className="my-8 mx-auto border-0 border-t"
          style={{
            borderTopColor: "var(--color-backstein-gold)",
            borderTopWidth: "0.5px",
            maxWidth:       "120px",
          }}
        />

        {/* Zeile 2 — stark */}
        <div className="overflow-hidden">
          <p
            className="manifest-line"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(48px, 6vw, 80px)",
              fontWeight:    500,
              lineHeight:    1.05,
              letterSpacing: "-0.012em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            Manufaktur seit hundert Jahren.
          </p>
        </div>

      </div>
    </section>
  );
}
