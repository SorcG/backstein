import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Eczar } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eczar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Röstmanufaktur Backstein – Geröstet seit 1924. In Ostwestfalen.",
  description:
    "Wir sind eine kleine Manufaktur in Gütersloh-Pavenstädt. Vier Generationen. Eine Trommel. Drei Bohnen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable} ${eczar.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={{
          backgroundColor: "var(--color-backstein-cream)",
          color: "var(--color-backstein-schwarz)",
          fontFamily: "var(--font-body)",
        }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
