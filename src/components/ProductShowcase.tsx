import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productQueen from "@/assets/product-queen.jpg";
import productRuby from "@/assets/product-ruby.jpg";
import productCosmo from "@/assets/product-cosmo.jpg";

const products = [
  {
    name: "Queen",
    image: productQueen,
    features: ["Premium Brass Body", "Low Maintenance", "Elegant Gold Finish"],
    badge: "Bestseller",
  },
  {
    name: "Ruby",
    image: productRuby,
    features: ["Chrome & Brass Hybrid", "Hot/Cold Compatible", "Modern Design"],
    badge: "New Arrival",
  },
  {
    name: "Cosmo",
    image: productCosmo,
    features: ["Polished Brass Finish", "Ergonomic Grip", "Durable Construction"],
    badge: "Popular",
  },
];

const ProductShowcase = () => (
  <section id="products" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          Our Collection
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Crafted for Excellence
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Card className="group overflow-hidden border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
              <div className="relative overflow-hidden aspect-square bg-muted">
                <img
                  src={product.image}
                  alt={`Purava ${product.name} health faucet`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-sans text-xs">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground font-sans flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
