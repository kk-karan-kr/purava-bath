import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessPartners from "@/components/BusinessPartners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <FeaturesSection />
      <BusinessPartners />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
