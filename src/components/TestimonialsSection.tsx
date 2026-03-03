import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Interior Designer, Mumbai",
    text: "Purava faucets have become my go-to recommendation for luxury bathroom projects. The brass finish and build quality are unmatched at this price point.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    role: "Contractor, Delhi NCR",
    text: "We've installed over 200 Purava units across multiple residential complexes. Zero complaints, zero replacements. That speaks volumes.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Hotel Chain Procurement, Ahmedabad",
    text: "Consistency is everything in hospitality. Purava delivers the same premium quality whether we order 50 or 500 units. Outstanding partner.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          Testimonials
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Trusted by Professionals
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className="h-full border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="text-accent/30 mb-4" size={32} />
                <p className="text-muted-foreground font-sans text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="text-accent fill-accent" size={14} />
                  ))}
                </div>
                <p className="font-serif font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">{t.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
