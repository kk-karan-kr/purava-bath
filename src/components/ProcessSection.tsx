import { motion } from "framer-motion";
import { Hammer, FlaskConical, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    icon: Hammer,
    step: "01",
    title: "Raw Material Selection",
    description: "We source only premium-grade brass alloys, tested for purity and strength before production begins.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Precision Engineering",
    description: "Each faucet is crafted with CNC precision, ensuring perfect dimensions and flawless threading.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Quality Assurance",
    description: "Every unit undergoes rigorous pressure testing, finish inspection, and corrosion resistance checks.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Secure Delivery",
    description: "Products are carefully packaged and delivered with full warranty support across India.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-brass-glow tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          Our Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          From Forge to Finish
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative text-center"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-accent/20" />
            )}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center">
              <s.icon className="text-brass-glow" size={28} />
            </div>
            <span className="text-accent font-serif text-2xl font-bold">{s.step}</span>
            <h3 className="font-serif text-lg font-semibold mt-2 mb-2">{s.title}</h3>
            <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
