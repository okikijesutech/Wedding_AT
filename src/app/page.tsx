import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import WeddingParty from "@/components/WeddingParty";
import Travel from "@/components/Travel";
import RSVP from "@/components/RSVP";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Gallery />
      <WeddingParty />
      <Travel />
      <RSVP />
      <FAQ />
      <Footer />
    </main>
  );
}
