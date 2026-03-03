import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry Sent",
        description: "Thank you! We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            We'd Love to Hear from You
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <Input placeholder="Your Name" required maxLength={100} className="font-sans" />
            <Input type="email" placeholder="Email Address" required maxLength={255} className="font-sans" />
            <Input type="tel" placeholder="Phone Number" maxLength={20} className="font-sans" />
            <Select>
              <SelectTrigger className="font-sans">
                <SelectValue placeholder="Inquiry Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Inquiry</SelectItem>
                <SelectItem value="samples">Product Samples</SelectItem>
                <SelectItem value="general">General Question</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Your Message" required maxLength={1000} rows={4} className="font-sans" />
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans"
            >
              {submitting ? "Sending…" : "Send Inquiry"}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Reach out to us for product inquiries, partnership opportunities, or
                any questions about our premium brass faucets.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@purava.in" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "Jamnagar, Gujarat, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <span className="text-sm text-foreground font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
