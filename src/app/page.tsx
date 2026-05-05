export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <div className="mega-wordmark">BACKSTEIN</div>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="pill-label">Röstmanufaktur · 1924</span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.015em",
            color: "var(--color-backstein-schwarz)",
          }}
        >
          Aus Stein gebrannt.
          <br />
          Mit Feuer geröstet.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-backstein-grau)",
            maxWidth: "44ch",
            lineHeight: 1.65,
          }}
        >
          Geröstet seit 1924. In Ostwestfalen.
        </p>
      </div>
    </main>
  );
}
