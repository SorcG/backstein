'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manifest() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const smallWords = gsap.utils.toArray<HTMLElement>(".manifest-small span");
    const divider    = gsap.utils.toArray<HTMLElement>(".manifest-divider")[0];
    const bigWords   = gsap.utils.toArray<HTMLElement>(".manifest-big span");

    gsap.set([smallWords, divider, bigWords], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin:     true,
        scrub:   0.5,
        start:   "top top",
        end:     "+=120%",
      },
    });

    tl.to(smallWords, { opacity: 1, duration: 0.5, stagger: 0.6 });
    tl.to(divider,    { opacity: 1, scaleX: 1, duration: 0.4, transformOrigin: "center" }, "+=0.2");
    tl.to(bigWords,   { opacity: 1, duration: 0.5, stagger: 0.6 }, "+=0.2");
  }, { scope: sectionRef });

  const smallText = "Geröstet seit hundert Jahren.";
  const bigText   = "Manufaktur seit hundert Jahren.";

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-backstein-cream)",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <p
          className="manifest-small"
          style={{
            fontFamily:    "var(--font-heading)",
            fontSize:      "clamp(36px, 5vw, 64px)",
            fontWeight:    300,
            lineHeight:    1.1,
            letterSpacing: "-0.012em",
            color:         "var(--color-backstein-grau)",
          }}
        >
          {smallText.split(" ").map((word, i) => (
            <span key={i} style={{ display: "inline-block", marginRight: "0.28em" }}>
              {word}
            </span>
          ))}
        </p>

        <div
          className="manifest-divider my-8 mx-auto"
          style={{
            height:          "0.5px",
            maxWidth:        "120px",
            backgroundColor: "var(--color-backstein-gold)",
            transformOrigin: "center",
          }}
        />

        <p
          className="manifest-big"
          style={{
            fontFamily:    "var(--font-heading)",
            fontSize:      "clamp(48px, 6vw, 80px)",
            fontWeight:    500,
            lineHeight:    1.05,
            letterSpacing: "-0.012em",
            color:         "var(--color-backstein-schwarz)",
          }}
        >
          {bigText.split(" ").map((word, i) => (
            <span key={i} style={{ display: "inline-block", marginRight: "0.28em" }}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
