'use client';
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => { video.style.opacity = "1"; };
    video.addEventListener("canplay", onCanPlay);
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  useGSAP(
    () => {
      // ── Modul 2 — Line reveal on load ─────────────────────
      gsap.from(".hero-headline .hero-line", {
        yPercent: 20,
        opacity:  0,
        stagger:  0.12,
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
            className="hero-headline"
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(32px, 3.5vw, 60px)",
              fontWeight:    300,
              lineHeight:    1.05,
              letterSpacing: "-0.015em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            <div className="hero-line">Kaffee wie er</div>
            <div className="hero-line">sein sollte.</div>
            <div className="hero-line">
              Geröstet mit{" "}
              <span style={{ color: "#8B4538", fontStyle: "italic", fontWeight: 500 }}>Feuer.</span>
            </div>
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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ opacity: 0, transition: "opacity 0.5s ease" }}
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
