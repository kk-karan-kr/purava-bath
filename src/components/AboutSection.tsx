import { motion } from "framer-motion";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "500K+", label: "Products Delivered" },
  { value: "1000+", label: "Happy Clients" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-lg shadow-2xl w-full aspect-[4/3] bg-muted/30 flex items-center justify-center overflow-hidden">
            <img
              src={faucetModel7}
              alt="Purava premium brass health faucet"
              className="h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent rounded-lg" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
            About Purava
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Where Tradition Meets Modern Hygiene
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
            Purava is a distinguished manufacturer of premium brass health faucets,
            hooks, and shower tubes. Rooted in India's rich metalworking heritage,
            we combine time-honoured craftsmanship with contemporary design to
            deliver products that set the standard in quality and durability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
            Every Purava product is meticulously engineered using high-grade brass,
            ensuring corrosion resistance, longevity, and a flawless finish that
            elevates any space — residential or commercial.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
