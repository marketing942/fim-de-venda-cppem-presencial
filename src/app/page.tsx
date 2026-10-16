import Hero from "./components/Hero";
import ChecklistSection from "./components/ChecklistSection";
import LocationCard from "./components/LocationCard";
import { ContactSection } from "./components/ContactSection";

// O status "Disponível agora" dos canais depende da hora: renderiza a cada requisição.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChecklistSection />
      <LocationCard />
      <ContactSection />
    </>
  );
}
