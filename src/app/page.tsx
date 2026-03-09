import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Details from "@/components/Details";

// Lazy load below-the-fold components
const Gallery = dynamic(() => import("@/components/Gallery"));
const WeddingParty = dynamic(() => import("@/components/WeddingParty"));
const Registry = dynamic(() => import("@/components/Registry"));
const Guestbook = dynamic(() => import("@/components/Guestbook"));
const Travel = dynamic(() => import("@/components/Travel"));
const RSVP = dynamic(() => import("@/components/RSVP"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Gallery />
      <WeddingParty />
      <Registry />
      <Travel />
      <Guestbook />
      <RSVP />
      <FAQ />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
