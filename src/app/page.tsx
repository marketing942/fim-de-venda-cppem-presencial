import LocationCard from "./components/LocationCard";
import { ContactSection } from "./components/ContactSection";
import PlanFlow from "./components/PlanFlow";

// O status "Disponível agora" dos canais depende da hora: renderiza a cada requisição.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return <PlanFlow location={<LocationCard />} contact={<ContactSection />} />;
}
