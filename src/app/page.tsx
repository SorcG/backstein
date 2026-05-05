import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Spacer so we have something to scroll into for the pin/parallax to demo */}
      <div style={{ height: "120vh" }} />
    </main>
  );
}
