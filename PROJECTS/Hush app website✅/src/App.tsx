import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Pillars } from "./components/Pillars";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { SoundLibrary } from "./components/SoundLibrary";
import { NightRoutine } from "./components/NightRoutine";
import { Reviews } from "./components/Reviews";
import { Pricing } from "./components/Pricing";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Pillars />
        <FeatureShowcase />
        <SoundLibrary />
        <NightRoutine />
        <Reviews />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
