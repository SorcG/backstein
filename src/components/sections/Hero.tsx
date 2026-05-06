'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LINE_1 = ["Kaffee", "wie", "er"];
const LINE_2 = ["sein", "sollte."];
const LINE_3 = ["Geröstet", "mit", "Feuer."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // ── Modul 2 — Word reveal on load ─────────────────────
      gsap.from(".hero-headline .word-inner", {
        yPercent: 100,
        opacity:  0,
        stagger:  0.08,
        ease:     "power2.out",
        duration: 0.8,
        delay:    0.3,
      });

      // ── Modul 2 (cont.) — Headline scroll exit ────────────
      gsap.to(".hero-headline", {
        yPercent: -50,
        opacity:  0,
        ease:     "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   "30% top",
          end:     "bottom top",
          scrub:   true,
        },
      });

      // ── Modul 3 — Mega-wordmark parallax ──────────────────
      gsap.to(".mega-wordmark--hero", {
        y:    -240,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   "top top",
          end:     "bottom top",
          scrub:   1.0,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-hero relative min-h-[100vh] w-full overflow-hidden flex flex-col md:block"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      {/* ─── Sticky headline block ───────────────────────────────────────── */}
      <div className="z-10 px-6 pt-32 md:sticky md:top-[120px] md:mx-auto md:grid md:max-w-[1280px] md:grid-cols-12 md:gap-8 md:pt-[120px]">
        {/* 1a. Headline cluster */}
        <div className="flex flex-col md:col-span-7">
          <span className="pill-label mb-6 self-start">RÖSTMANUFAKTUR · 1924</span>

          <h1
            className="hero-headline max-w-[14ch]"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(56px, 7vw, 96px)",
              fontWeight:    300,
              lineHeight:    0.95,
              letterSpacing: "-0.015em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            {LINE_1.map((word, i) => (
              <span key={`l1-${i}`} className="word-mask">
                <span className="word-inner">{word}</span>
              </span>
            ))}
            <br />
            {LINE_2.map((word, i) => (
              <span key={`l2-${i}`} className="word-mask">
                <span
                  className="word-inner"
                  style={{ fontStyle: "italic", fontWeight: 500, color: "var(--color-backstein-rot)" }}
                >
                  {word}
                </span>
              </span>
            ))}
            <br />
            {LINE_3.map((word, i) => (
              <span key={`l3-${i}`} className="word-mask">
                <span className="word-inner">{word}</span>
              </span>
            ))}
          </h1>

          <p
            className="mt-7"
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "12px",
              color:      "var(--color-backstein-grau)",
            }}
          >
            Geröstet seit hundert Jahren.
          </p>
        </div>

        {/* 1b. Subline (top-right) */}
        <div className="hidden md:flex md:col-span-5 md:justify-end md:pt-2">
          <p
            className="text-right"
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "15px",
              lineHeight: 1.55,
              color:      "var(--color-backstein-grau)",
              maxWidth:   "28ch",
            }}
          >
            Wir rösten, was kein anderer macht. Wenig Bohnen, viel Zeit, eine
            Trommel aus 1924.
          </p>
        </div>
      </div>

      {/* ─── Absolute video — anchored at vertical center of viewport ─────── */}
      <div
        className="hero-video-frame img-frame aspect-[4/5] mx-auto mt-8 w-full max-w-[320px] md:absolute md:left-1/2 md:top-[50vh] md:z-[5] md:mx-0 md:mt-0 md:h-[58vh] md:max-w-none md:w-auto md:-translate-x-1/2 md:-translate-y-1/2"
        style={{ boxShadow: "var(--shadow-card-lift)" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/probat-maschine.png"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ─── Mega parallax wordmark "BACKSTEIN" ─────────────────────────── */}
      <div className="mega-wordmark mega-wordmark--hero absolute top-1/2 left-0 right-0 z-0 -translate-y-1/2 text-center">
        BACKSTEIN
      </div>
    </section>
  );
}
