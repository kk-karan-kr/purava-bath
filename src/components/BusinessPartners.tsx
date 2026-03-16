import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Gem, TrendingUp } from "lucide-react";
import businessInteriorImg from "@/assets/business-interior.jpg";

const values = [
  { icon: Building2, text: "Competitive bulk pricing for large projects" },
  { icon: Gem, text: "Consistent premium quality across every unit" },
  { icon: TrendingUp, text: "Products that elevate upscale interiors" },
];

const BusinessPartners = () => (
  <section id="partners" className="py-24 bg-primary text-primary-foreground overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass-glow tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
            For Business
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Partner with Purava
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-8 font-sans">
            Whether you're a contractor, interior designer, or distributor,
            Purava's premium brass faucets add undeniable value to any commercial
            or residential project. Join a growing network of professionals who
            trust Purava for quality and reliability.
          </p>

          <div className="space-y-4 mb-8">
            {values.map((v) => (
              <div key={v.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <v.icon className="text-brass-glow" size={18} />
                </div>
                <p className="text-sm text-primary-foreground/80 font-sans">
                  {v.text}
                </p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans"
          >
            <a href="#contact">Request a Partnership Inquiry</a>
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={faucetModel4}
            alt="Luxury bathroom with Purava brass fixtures"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[16/10]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default BusinessPartners;
