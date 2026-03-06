import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import puravaLogo from "@/assets/purava-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <img src={puravaLogo} alt="Purava logo" className="h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/PURAVA_Catalogue.pdf"
            download
            className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
          >
            Catalogue
          </a>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans text-sm"
          >
            <a href="#contact">Business Inquiry</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/PURAVA_Catalogue.pdf"
                download
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Catalogue
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans text-sm"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Business Inquiry
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
