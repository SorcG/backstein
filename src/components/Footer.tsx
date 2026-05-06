'use client';

const NAV_LINKS   = ["Über uns", "Manufaktur", "Bohnen", "Kontakt", "Shop"];
const LEGAL_LINKS = ["AGB", "Datenschutz", "Impressum"];

const LABEL_STYLE: React.CSSProperties = {
  fontFamily:    "var(--font-body)",
  fontSize:      "11px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color:         "var(--color-backstein-grau)",
};

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-backstein-cream)",
        borderTop:       "0.5px solid var(--color-backstein-gold)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6">

        {/* ─── Drei Spalten ───────────────────────────────────────── */}
        <div className="flex flex-col gap-10 py-16 md:grid md:grid-cols-3 md:gap-12">

          {/* Spalte 1 — Navigation */}
          <div>
            <p style={LABEL_STYLE}>Menu</p>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "15px",
                    color:       "var(--color-backstein-schwarz)",
                    transition:  "color 200ms",
                    display:     "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-backstein-rot)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-backstein-schwarz)";
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Spalte 2 — Kontakt */}
          <div>
            <p style={LABEL_STYLE}>Kontakt</p>
            <address
              className="mt-4 not-italic"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "15px",
                lineHeight: 1.65,
                color:      "var(--color-backstein-grau)",
              }}
            >
              Auf dem Manufakturgelände 4<br />
              33334 Gütersloh-Pavenstädt
            </address>
            <a
              href="mailto:kontakt@backstein-roestmanufaktur.de"
              className="mt-3 inline-block"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "14px",
                color:      "var(--color-backstein-rot)",
              }}
            >
              kontakt@backstein-roestmanufaktur.de
            </a>
          </div>

          {/* Spalte 3 — Newsletter */}
          <div>
            <p style={LABEL_STYLE}>Newsletter</p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "14px",
                color:      "var(--color-backstein-grau)",
              }}
            >
              Neue Lots, Röstdaten, Klönzeit-Termine.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className="w-full bg-transparent py-2 outline-none"
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "14px",
                  color:        "var(--color-backstein-schwarz)",
                  border:       "none",
                  borderBottom: "1px solid var(--color-backstein-schwarz)",
                }}
              />
              <button
                type="button"
                className="mt-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "13px",
                  color:      "var(--color-backstein-rot)",
                  background: "none",
                  border:     "none",
                  cursor:     "pointer",
                  padding:    0,
                }}
              >
                Anmelden →
              </button>
            </div>
          </div>

        </div>

        {/* ─── Bottom strip ───────────────────────────────────────── */}
        <div
          className="flex flex-col items-center gap-3 py-6 text-center md:flex-row md:justify-between md:text-left"
          style={{ borderTop: "0.5px solid var(--color-backstein-gold)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "13px",
              color:      "var(--color-backstein-grau)",
            }}
          >
            © 2026 Röstmanufaktur Backstein
          </span>

          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "13px",
                  color:      "var(--color-backstein-grau)",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "12px",
              color:      "var(--color-backstein-grau)",
              fontStyle:  "italic",
            }}
          >
            Designed &amp; developed by Luca Sorci · Klarteq
          </span>
        </div>

      </div>

      {/* ─── Mega-wordmark — full viewport width, kein padding unten ── */}
      <div
        className="mega-wordmark text-center"
        style={{ opacity: 0.08 }}
      >
        BACKSTEIN
      </div>

    </footer>
  );
}
