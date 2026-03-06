import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";

import BlogsSection from "@/components/BlogsSection";
import BusinessPartners from "@/components/BusinessPartners";
import FAQSection from "@/components/FAQSection";
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
      <ProcessSection />
      <GallerySection />
      
      <BlogsSection />
      <BusinessPartners />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
