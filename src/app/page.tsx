import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import FeatureSection from "@/components/FeatureSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedTemplates />
      <FeatureSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
