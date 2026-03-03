import { motion } from "framer-motion";
import { Shield, Droplets, Palette, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Premium brass construction ensures years of reliable, corrosion-free performance.",
  },
  {
    icon: Droplets,
    title: "Effortless Hygiene",
    description:
      "Precision-engineered spray for powerful yet gentle cleaning, hot or cold.",
  },
  {
    icon: Palette,
    title: "Timeless Design",
    description:
      "Elegantly finished to complement contemporary and classic interiors alike.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description:
      "Only the finest brass alloys, rigorously tested for quality and safety.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          Why Purava
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          The Purava Difference
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <feature.icon className="text-accent" size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
