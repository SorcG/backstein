'use client';
import { useState } from "react";
import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const links = [
  { label: "Über uns",   id: "section-heritage" },
  { label: "Manufaktur", id: "section-handwerk"  },
  { label: "Bohnen",     id: "section-bohnen"    },
  { label: "Kontakt",    id: "section-kontakt"   },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const direction = useScrollDirection();
  const hidden = direction === "down";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Desktop floating pill ─────────────────────────── */}
      <header
        className="hidden md:flex fixed top-6 left-1/2 z-50 h-16 w-max items-center gap-10 rounded-full border px-8 backdrop-blur-md transition-[transform,opacity] duration-300 ease-out"
        style={{
          backgroundColor: "rgba(232, 220, 196, 0.90)",
          borderColor:     "rgba(155, 133, 87, 0.28)",
          transform: hidden
            ? "translateX(-50%) translateY(-150%)"
            : "translateX(-50%) translateY(0)",
          opacity: hidden ? 0 : 1,
        }}
      >
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "14px",
              fontWeight:    400,
              letterSpacing: "-0.01em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            BACKSTEIN
          </span>
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "9px",
              fontWeight:    400,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color:         "var(--color-backstein-grau)",
              marginTop:     "2px",
            }}
          >
            Röstmanufaktur
          </span>
        </Link>

        <nav className="flex items-center gap-7">
          {links.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollToSection(id)}
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "13px",
                fontWeight:    400,
                letterSpacing: "0.02em",
                color:         "rgba(26, 22, 18, 0.65)",
                background:    "none",
                border:        "none",
                cursor:        "pointer",
                padding:       0,
                transition:    "color 200ms",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-backstein-rot)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(26, 22, 18, 0.65)")
              }
            >
              {label}
            </button>
          ))}
        </nav>

        <Link
          href="/shop"
          className="shrink-0 rounded-full transition-opacity duration-200 hover:opacity-85"
          style={{
            backgroundColor: "var(--color-backstein-rot)",
            color:           "#fff",
            fontFamily:      "var(--font-body)",
            fontSize:        "13px",
            fontWeight:      500,
            padding:         "9px 20px",
            whiteSpace:      "nowrap",
          }}
        >
          Zum Shop →
        </Link>
      </header>

      {/* ── Mobile top bar ────────────────────────────────── */}
      <header
        className="flex md:hidden fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-6 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(232, 220, 196, 0.95)",
          borderBottom:    "0.5px solid var(--color-backstein-gold)",
        }}
      >
        <Link href="/" className="flex flex-col leading-none">
          <span
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "14px",
              fontWeight:    400,
              letterSpacing: "-0.01em",
              color:         "var(--color-backstein-schwarz)",
            }}
          >
            BACKSTEIN
          </span>
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "9px",
              fontWeight:    400,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color:         "var(--color-backstein-grau)",
              marginTop:     "2px",
            }}
          >
            Röstmanufaktur
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6" style={{ backgroundColor: "var(--color-backstein-schwarz)" }} />
            <span className="block h-0.5 w-6" style={{ backgroundColor: "var(--color-backstein-schwarz)" }} />
            <span className="block h-0.5 w-6" style={{ backgroundColor: "var(--color-backstein-schwarz)" }} />
          </div>
        </button>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "var(--color-backstein-cream)" }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6"
            style={{
              background:  "none",
              border:      "none",
              cursor:      "pointer",
              fontFamily:  "var(--font-body)",
              fontSize:    "22px",
              color:       "var(--color-backstein-schwarz)",
              lineHeight:  1,
            }}
          >
            ✕
          </button>

          {links.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => { scrollToSection(id); setIsOpen(false); }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize:   "36px",
                fontWeight: 300,
                color:      "var(--color-backstein-schwarz)",
                background: "none",
                border:     "none",
                cursor:     "pointer",
                padding:    0,
              }}
            >
              {label}
            </button>
          ))}

          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full"
            style={{
              backgroundColor: "var(--color-backstein-rot)",
              color:           "#fff",
              fontFamily:      "var(--font-body)",
              fontSize:        "13px",
              fontWeight:      500,
              padding:         "9px 20px",
            }}
          >
            Zum Shop →
          </Link>
        </div>
      )}
    </>
  );
}
