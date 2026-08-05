import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Community from "@/components/sections/Community";
import Problem from "@/components/sections/Problem";
import Wardrobe from "@/components/sections/Wardrobe";
import Swap from "@/components/sections/Swap";
import AppShowcase from "@/components/sections/AppShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import Audiences from "@/components/sections/Audiences";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        {/* lead with the community — that's what the product actually is */}
        <Community />
        <Problem />
        <Wardrobe />
        <Swap />
        {/* capability summary lands here, as the lead-in to seeing the app */}
        <Capabilities />
        <AppShowcase />
        <HowItWorks />
        <Audiences />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
