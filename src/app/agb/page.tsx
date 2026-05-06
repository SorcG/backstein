import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB · RÖSTMANUFAKTUR BACKSTEIN",
  description: "Allgemeine Geschäftsbedingungen – Hinweis zum Portfolio-Charakter.",
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

export default function AgbPage() {
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
        aria-label="Portfolio-Hinweis"
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
          Allgemeine Geschäfts&shy;bedingungen
        </h1>

        <div
          className="w-16 h-px mb-16"
          style={{ backgroundColor: "#9B8557" }}
        />

        {/* Important Notice Box */}
        <div
          className="rounded-sm p-6 md:p-8 mb-16"
          style={{ backgroundColor: "#1A1612", color: "#E8DCC4" }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ color: "#9B8557", fontFamily: "Inter, sans-serif" }}
          >
            Wichtiger Hinweis
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", opacity: 0.85 }}
          >
            <strong style={{ color: "#E8DCC4" }}>RÖSTMANUFAKTUR BACKSTEIN</strong> ist ein
            ausschließlich zu Portfolio- und Demonstrationszwecken erstelltes,
            fiktives Markenkonzept. Es besteht kein reales Handelsangebot. Es
            können keine Produkte gekauft, bestellt oder reserviert werden.
            Vertragsabschlüsse im Sinne eines Online-Shops sind nicht möglich.
          </p>
        </div>

        <div className="space-y-12">
          {/* 1 */}
          <LegalSection title="1. Geltungsbereich">
            <p>
              Da diese Website ausschließlich als Portfolio-Projekt betrieben
              wird, kommen im rechtlichen Sinne keine AGB für Kaufverträge zur
              Anwendung. Die nachfolgenden Bedingungen regeln lediglich die
              allgemeine Nutzung dieser Informationsseite.
            </p>
          </LegalSection>

          <Divider />

          {/* 2 */}
          <LegalSection title="2. Nutzung der Website">
            <p>
              Die Nutzung dieser Website ist kostenlos und unverbindlich. Die
              Inhalte dienen ausschließlich der Präsentation gestalterischer
              und technischer Fähigkeiten des Betreibers (Luca Sorci · Klarteq
              Webentwicklung). Eine kommerzielle Nutzung der dargestellten
              Inhalte, Texte, Bilder und Videos durch Dritte ist ohne
              ausdrückliche Genehmigung des Betreibers nicht gestattet.
            </p>
          </LegalSection>

          <Divider />

          {/* 3 */}
          <LegalSection title="3. Urheberrecht">
            <p>
              Alle auf dieser Website veröffentlichten Inhalte – insbesondere
              Design, Texte, KI-generierte Bilder und Videos – sind
              urheberrechtlich geschützt. Das Urheberrecht liegt bei Luca Sorci
              (Klarteq), soweit nicht ausdrücklich anders vermerkt.
            </p>
            <p className="mt-3">
              Die Reproduktion, Verbreitung oder öffentliche Wiedergabe der
              Inhalte ist ohne schriftliche Genehmigung des Betreibers
              untersagt.
            </p>
          </LegalSection>

          <Divider />

          {/* 4 */}
          <LegalSection title="4. Haftungsausschluss">
            <p>
              Der Betreiber übernimmt keine Gewähr für die Aktualität,
              Vollständigkeit oder Richtigkeit der auf dieser Website
              bereitgestellten Informationen. Die fiktiven Inhalte
              (Produktbeschreibungen, Unternehmensgeschichte, Preise) sind
              erfunden und sollen nicht als reale Tatsachen verstanden werden.
            </p>
          </LegalSection>

          <Divider />

          {/* 5 */}
          <LegalSection title="5. Kontakt">
            <p>
              Bei Fragen zur Nutzung dieser Website wenden Sie sich bitte an:
            </p>
            <p className="mt-3">
              Luca Sorci · Klarteq Webentwicklung
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

          {/* 6 */}
          <LegalSection title="6. Anwendbares Recht">
            <p>
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              Gerichtsstand ist Gütersloh, soweit gesetzlich zulässig.
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
