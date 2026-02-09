import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroNew from "@/components/sections/HeroNew";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import MagicMoment from "@/components/sections/MagicMoment";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Sustainability from "@/components/sections/Sustainability";
import BrandConnections from "@/components/sections/BrandConnections";
import Vision from "@/components/sections/Vision";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroNew />
        <SocialProof />
        <Problem />
        <HowItWorks />
        <MagicMoment />
        <Sustainability />
        <WhyDifferent />
        <BrandConnections />
        <Vision />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
