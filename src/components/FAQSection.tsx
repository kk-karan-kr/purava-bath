import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What materials are Purava faucets made from?",
    a: "All Purava health faucets are crafted from high-grade brass, ensuring durability, corrosion resistance, and a premium finish that lasts for years.",
  },
  {
    q: "Are your products compatible with hot and cold water systems?",
    a: "Yes, our faucets are engineered to handle both hot and cold water systems, making them suitable for any bathroom setup.",
  },
  {
    q: "Do you offer bulk pricing for contractors and businesses?",
    a: "Absolutely. We offer competitive bulk pricing for contractors, interior designers, distributors, and large-scale projects. Contact us for a custom quote.",
  },
  {
    q: "What warranty do you provide?",
    a: "All Purava products come with a comprehensive warranty covering manufacturing defects. Specific terms vary by product line — reach out to our team for details.",
  },
  {
    q: "Where are Purava products manufactured?",
    a: "All our products are proudly manufactured in India, specifically in Gujarat's renowned brass manufacturing hub, combining traditional craftsmanship with modern technology.",
  },
  {
    q: "How can I become a distribution partner?",
    a: "We're always looking for quality distribution partners. Please fill out our contact form with a 'Business Inquiry' and our partnerships team will get back to you within 48 hours.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          FAQ
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/50 rounded-lg px-6 data-[state=open]:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="font-sans text-sm font-medium text-foreground hover:text-accent py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
