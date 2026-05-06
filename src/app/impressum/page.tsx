import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum · RÖSTMANUFAKTUR BACKSTEIN",
  description: "Gesetzlich vorgeschriebenes Impressum gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <main
      style={{ backgroundColor: "#E8DCC4", color: "#1A1612" }}
      className="min-h-screen pt-16 md:pt-[88px]"
    >
      <Nav />

      {/* Showcase-Banner */}
      <div
        style={{ backgroundColor: "#8B4538", color: "#E8DCC4" }}
        className="w-full text-center py-3 px-4 text-sm font-medium tracking-wide"
        role="banner"
      >
        ⚠ Diese Website ist ein fiktives Brand-Konzept zu Portfolio- und
        Demonstrationszwecken. · Erstellt von{" "}
        <a
          href="https://klarteq.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Klarteq
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "#9B8557", fontFamily: "Inter, sans-serif" }}
        >
          Rechtliche Angaben
        </p>

        {/* Headline */}
        <h1
          className="text-6xl md:text-7xl mb-16"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#1A1612",
          }}
        >
          Impressum
        </h1>

        {/* Divider */}
        <div
          className="w-16 h-px mb-16"
          style={{ backgroundColor: "#9B8557" }}
        />

        {/* Content */}
        <div
          className="space-y-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.75 }}
        >
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#1A1612",
              }}
            >
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-base" style={{ color: "#1A1612", opacity: 0.85 }}>
              Luca Sorci
              <br />
              Klarteq Webentwicklung
              <br />
              Avenwedder Straße 318
              <br />
              33335 Gütersloh
            </p>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: "#9B8557", opacity: 0.3 }} />

          {/* Kontakt */}
          <section>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Kontakt
            </h2>
            <p className="text-base" style={{ color: "#1A1612", opacity: 0.85 }}>
              Telefon:{" "}
              <a
                href="tel:+4917670552197"
                className="hover:opacity-60 transition-opacity"
                style={{ color: "#8B4538" }}
              >
                017670552197
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@klarteq.de"
                className="hover:opacity-60 transition-opacity"
                style={{ color: "#8B4538" }}
              >
                info@klarteq.de
              </a>
            </p>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: "#9B8557", opacity: 0.3 }} />

          {/* Berufsbezeichnung */}
          <section>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Berufsbezeichnung
            </h2>
            <p className="text-base" style={{ color: "#1A1612", opacity: 0.85 }}>
              Webentwickler
            </p>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: "#9B8557", opacity: 0.3 }} />

          {/* Redaktionell verantwortlich */}
          <section>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Redaktionell verantwortlich
            </h2>
            <p className="text-base" style={{ color: "#1A1612", opacity: 0.85 }}>
              Luca Sorci
            </p>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: "#9B8557", opacity: 0.3 }} />

          {/* Verbraucherschlichtung */}
          <section>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Verbraucherschlichtung / Universalschlichtungsstelle
            </h2>
            <p className="text-base" style={{ color: "#1A1612", opacity: 0.85 }}>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: "#9B8557", opacity: 0.3 }} />

          {/* Hinweis Showcase */}
          <section
            className="rounded-sm p-6 md:p-8"
            style={{ backgroundColor: "#1A1612", color: "#E8DCC4" }}
          >
            <h2
              className="text-xl md:text-2xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#9B8557",
              }}
            >
              Hinweis
            </h2>
            <p className="text-sm leading-relaxed" style={{ opacity: 0.8 }}>
              Die Website <strong>RÖSTMANUFAKTUR BACKSTEIN</strong> ist ein
              fiktives Markenprojekt, das ausschließlich zu Portfolio- und
              Demonstrationszwecken erstellt wurde. Die dargestellte Rösterei,
              alle Produkte, Geschichten und Inhalte sind erfunden. Es besteht
              kein reales Handelsangebot.
              <br />
              <br />
              Designed &amp; developed by{" "}
              <a
                href="https://klarteq.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
                style={{ color: "#9B8557" }}
              >
                Luca Sorci · Klarteq
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
