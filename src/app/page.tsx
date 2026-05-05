import Hero from "@/components/sections/Hero";
import Manifest from "@/components/sections/Manifest";
import Heritage from "@/components/sections/Heritage";
import Handwerk from "@/components/sections/Handwerk";
import Bohnen from "@/components/sections/Bohnen";
import Ort from "@/components/sections/Ort";
import Philosophie from "@/components/sections/Philosophie";
import Kontakt from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifest />
      <Heritage />
      <Handwerk />
      <Bohnen />
      <Ort />
      <Philosophie />
      <Kontakt />
    </main>
  );
}
