'use client';
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Bohne = {
  id:       string;
  image:    string;
  pill:     string;
  pillRot?: boolean;
  name:     string;
  taste:    string;
  price:    string;
};

const BOHNEN: Bohne[] = [
  {
    id:    "pavenstaedter",
    image: "/images/pavenstaedter-bohne.png",
    pill:  "Hausröstung",
    name:  "Pavenstädter Bohne",
    taste: "Schokolade · Nuss · Karamell",
    price: "ab 11,90 €",
  },
  {
    id:    "kontor1924",
    image: "/images/kontor1924.png",
    pill:  "Espresso-Röstung",
    name:  "Kontor 1924",
    taste: "Dunkle Kakaobohne · Walnuss · Tabak",
    price: "ab 13,90 €",
  },
  {
    id:      "single-origin",
    image:   "/images/single-origin.png",
    pill:    "Limited · Lot Nr. 23",
    pillRot: true,
    name:    "Manufaktur Single Origin",
    taste:   "Bergamotte · Jasmin · Helle Beeren",
    price:   "16,90 €",
  },
];

export default function Bohnen() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".bohnen-card",
        { y: 50, opacity: 0 },
        {
          y:        0,
          opacity:  1,
          stagger:  0.15,
          duration: 0.9,
          ease:     "power2.out",
          scrollTrigger: {
            trigger:       ".section-bohnen",
            start:         "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-bohnen relative w-full py-[var(--section-pad)]"
      style={{ backgroundColor: "var(--color-backstein-cream)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">

        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="pill-label mb-4 inline-block">Unsere Bohnen</span>
            <h2
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "clamp(40px, 5vw, 64px)",
                fontWeight:    300,
                lineHeight:    1.02,
                letterSpacing: "-0.012em",
                color:         "var(--color-backstein-schwarz)",
                maxWidth:      "18ch",
              }}
            >
              Drei Bohnen, eine Manufaktur.
            </h2>
          </div>
          <a
            href="/shop"
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "14px",
              color:      "var(--color-backstein-rot)",
            }}
            className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            Alle Sorten ansehen →
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-8">
          {BOHNEN.map((bohne) => (
            <div
              key={bohne.id}
              className="bohnen-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                border:       "0.5px solid var(--color-backstein-gold)",
                borderRadius: "12px",
                boxShadow:    "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "var(--shadow-card-lift)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={bohne.image}
                  alt={bohne.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span
                  className="pill-label self-start"
                  style={
                    bohne.pillRot
                      ? { borderColor: "var(--color-backstein-rot)", color: "var(--color-backstein-rot)" }
                      : undefined
                  }
                >
                  {bohne.pill}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize:   "28px",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color:      "var(--color-backstein-schwarz)",
                  }}
                >
                  {bohne.name}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   "13px",
                    color:      "var(--color-backstein-grau)",
                  }}
                >
                  {bohne.taste}
                </p>

                {/* Price + CTA */}
                <div
                  className="mt-auto flex items-end justify-between pt-4"
                  style={{ borderTop: "0.5px solid var(--color-backstein-gold)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize:   "22px",
                      fontWeight: 400,
                      color:      "var(--color-backstein-schwarz)",
                    }}
                  >
                    {bohne.price}
                  </span>

                  <button
                    className="transition-colors duration-200"
                    style={{
                      fontFamily:   "var(--font-body)",
                      fontSize:     "13px",
                      padding:      "8px 20px",
                      borderRadius: "999px",
                      border:       "1px solid var(--color-backstein-schwarz)",
                      background:   "transparent",
                      color:        "var(--color-backstein-schwarz)",
                      cursor:       "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const b = e.currentTarget;
                      b.style.backgroundColor = "var(--color-backstein-schwarz)";
                      b.style.color           = "var(--color-backstein-cream)";
                    }}
                    onMouseLeave={(e) => {
                      const b = e.currentTarget;
                      b.style.backgroundColor = "transparent";
                      b.style.color           = "var(--color-backstein-schwarz)";
                    }}
                  >
                    Bestellen →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
