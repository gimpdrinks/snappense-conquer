import Header from "@/components/Header";
import OfferBar from "@/components/OfferBar";
import NewHero from "@/components/NewHero";
import SocialProofStrip from "@/components/SocialProofStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import LeadMagnet from "@/components/LeadMagnet";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <OfferBar />
      <main>
        <NewHero />
        <SocialProofStrip />
        <FeaturesGrid />
        <div id="how-it-works" className="scroll-mt-20">
          <HowItWorks />
        </div>
        <LeadMagnet />
        <ComparisonTable />
        <Pricing />
        <div id="faq" className="scroll-mt-20">
          <FAQ />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
