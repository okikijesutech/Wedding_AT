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
const MusicPlayer = dynamic<{ autoPlayTrigger?: boolean }>(() => import("@/components/MusicPlayer"));
const Footer = dynamic(() => import("@/components/Footer"));

import { useState } from "react";
import EntranceSplash from "@/components/EntranceSplash";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen">
      {!hasEntered && <EntranceSplash onEnter={() => setHasEntered(true)} />}
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
      <MusicPlayer autoPlayTrigger={hasEntered} />
    </main>
  );
}
