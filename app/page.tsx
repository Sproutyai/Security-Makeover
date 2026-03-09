import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemSection from "@/components/SystemSection";
import PricingSection from "@/components/PricingSection";
import BusinessesSection from "@/components/BusinessesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SystemSection />
      <PricingSection />
      <BusinessesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
