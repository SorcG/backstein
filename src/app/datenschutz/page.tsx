import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz · RÖSTMANUFAKTUR BACKSTEIN",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2
        className="text-2xl md:text-3xl"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 400,
          color: "#1A1612",
        }}
      >
        {title}
      </h2>
      <div
        className="text-base leading-relaxed"
        style={{ color: "#1A1612", opacity: 0.85, fontFamily: "Inter, sans-serif" }}
      >
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div
      className="w-full h-px"
      style={{ backgroundColor: "#9B8557", opacity: 0.3 }}
    />
  );
}

export default function DatenschutzPage() {
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
          Datenschutz&shy;erklärung
        </h1>

        <div
          className="w-16 h-px mb-16"
          style={{ backgroundColor: "#9B8557" }}
        />

        <div className="space-y-12">
          {/* 1 */}
          <LegalSection title="1. Datenschutz auf einen Blick">
            <p className="mb-3 font-medium" style={{ opacity: 1 }}>Allgemeine Hinweise</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
            <p className="mt-3">
              <strong>Wichtiger Hinweis:</strong> Diese Website ist ein rein
              statisches Portfolio-Projekt ohne Shop, Login oder Newsletter.
              Es werden keine personenbezogenen Daten aktiv erhoben oder
              gespeichert.
            </p>
          </LegalSection>

          <Divider />

          {/* 2 */}
          <LegalSection title="2. Verantwortliche Stelle">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              Luca Sorci · Klarteq Webentwicklung
              <br />
              Avenwedder Straße 318
              <br />
              33335 Gütersloh
              <br />
              <br />
              Telefon:{" "}
              <a
                href="tel:+4917670552197"
                style={{ color: "#8B4538" }}
                className="hover:opacity-60 transition-opacity"
              >
                017670552197
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@klarteq.de"
                style={{ color: "#8B4538" }}
                className="hover:opacity-60 transition-opacity"
              >
                info@klarteq.de
              </a>
            </p>
          </LegalSection>

          <Divider />

          {/* 3 */}
          <LegalSection title="3. Datenerfassung auf dieser Website">
            <p className="mb-3 font-medium" style={{ opacity: 1 }}>Server-Log-Dateien</p>
            <p>
              Der Hosting-Anbieter dieser Website (Vercel Inc., 340 Pine Street,
              Suite 701, San Francisco, CA 94104, USA) erhebt und speichert
              automatisch Informationen in sog. Server-Log-Dateien, die Ihr
              Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Verarbeitung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </LegalSection>

          <Divider />

          {/* 4 */}
          <LegalSection title="4. Cookies">
            <p>
              Diese Website verwendet keine Tracking-Cookies, keine
              Analyse-Cookies und keine Marketing-Cookies. Es werden
              ausschließlich technisch notwendige Cookies verwendet, sofern
              diese für den Betrieb der Seite erforderlich sind (z. B. durch
              das Hosting).
            </p>
          </LegalSection>

          <Divider />

          {/* 5 */}
          <LegalSection title="5. Externe Dienste & Hosting">
            <p className="mb-3 font-medium" style={{ opacity: 1 }}>Vercel</p>
            <p>
              Diese Website wird auf den Servern von Vercel Inc. gehostet. Beim
              Besuch der Website werden technische Verbindungsdaten an Vercel
              übertragen. Die Datenschutzerklärung von Vercel finden Sie unter:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8B4538" }}
                className="hover:opacity-60 transition-opacity underline underline-offset-2"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
            <p className="mt-4">
              Es werden keine weiteren externen Dienste (wie Google Analytics,
              Facebook Pixel oder ähnliche Tracking-Tools) auf dieser Website
              eingesetzt.
            </p>
          </LegalSection>

          <Divider />

          {/* 6 */}
          <LegalSection title="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf kostenlose Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>
            <p className="mt-3">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden:
            </p>
            <p className="mt-3">
              E-Mail:{" "}
              <a
                href="mailto:info@klarteq.de"
                style={{ color: "#8B4538" }}
                className="hover:opacity-60 transition-opacity"
              >
                info@klarteq.de
              </a>
            </p>
            <p className="mt-4">
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu. Die zuständige Behörde für
              Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und
              Informationsfreiheit NRW, Kavalleriestr. 2–4, 40213 Düsseldorf.
            </p>
          </LegalSection>

          <Divider />

          {/* 7 */}
          <LegalSection title="7. Hinweis zum Portfolio-Charakter">
            <p>
              Diese Website wurde unter dem fiktiven Markennamen
              „RÖSTMANUFAKTUR BACKSTEIN" als Portfolio-Demonstrationsprojekt
              durch Luca Sorci (Klarteq Webentwicklung) erstellt. Es handelt
              sich nicht um einen realen Gewerbebetrieb. Es findet kein Verkauf
              von Produkten statt und es werden keine Bestellungen entgegengenommen.
            </p>
          </LegalSection>

          {/* Stand */}
          <p
            className="text-xs pt-4"
            style={{ color: "#1A1612", opacity: 0.4, fontFamily: "Inter, sans-serif" }}
          >
            Stand: Mai 2025
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
