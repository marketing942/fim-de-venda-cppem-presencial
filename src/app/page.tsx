import Header from "./components/Header";
import Hero from "./components/Hero";
import ChecklistSection from "./components/ChecklistSection";
import LocationCard from "./components/LocationCard";
import FloorsSection from "./components/FloorsSection";
import SupportCard from "./components/SupportCard";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ChecklistSection />
      <LocationCard />
      <FloorsSection />
      <SupportCard />
      <Footer />
    </main>
  );
}
