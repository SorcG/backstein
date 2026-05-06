'use client';
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

  return (
    <header
      className="fixed top-6 left-1/2 z-50 flex h-16 w-max items-center gap-10 rounded-full border px-8 backdrop-blur-md transition-[transform,opacity] duration-300 ease-out"
      style={{
        backgroundColor: "rgba(232, 220, 196, 0.90)",
        borderColor:     "rgba(155, 133, 87, 0.28)",
        transform: hidden
          ? "translateX(-50%) translateY(-150%)"
          : "translateX(-50%) translateY(0)",
        opacity: hidden ? 0 : 1,
      }}
    >
      {/* ── Logo ──────────────────────────────── */}
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

      {/* ── Nav links ─────────────────────────── */}
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

      {/* ── CTA ───────────────────────────────── */}
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
  );
}
