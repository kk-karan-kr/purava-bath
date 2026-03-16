import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-faucet.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={faucetModel8}
        alt="Premium brass faucet by Purava"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-brass-glow tracking-[0.3em] uppercase text-sm font-sans font-medium mb-6"
      >
        Premium Brass Health Faucets
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
      >
        Refresh. Rinse.
        <br />
        <span className="text-gradient-brass">Reimagine Clean.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans"
      >
        Crafted with precision. Built to endure. Purava brings the art of brass
        craftsmanship to modern hygiene solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6 font-sans tracking-wide"
        >
          <a href="#products">Explore Our Collection</a>
        </Button>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ChevronDown className="text-primary-foreground/50" size={28} />
    </motion.div>
  </section>
);

export default HeroSection;
