import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import faucetChrome from "@/assets/faucet-chrome.png";
import faucetInstalled from "@/assets/faucet-installed.png";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const blogs = [
  {
    image: faucetChrome,
    date: "Feb 28, 2026",
    title: "Why Health Faucets Are the Future of Modern Bathrooms",
    excerpt:
      "Discover how health faucets combine hygiene, sustainability, and elegance to redefine bathroom standards worldwide.",
  },
  {
    image: faucetInstalled,
    date: "Jan 15, 2026",
    title: "Choosing the Right Finish: Chrome vs Brushed vs Matte",
    excerpt:
      "A comprehensive guide to selecting the perfect faucet finish that complements your bathroom décor and lifestyle.",
  },
  {
    image: craftsmanshipImg,
    date: "Dec 10, 2025",
    title: "The Art of Brass Craftsmanship in Faucet Manufacturing",
    excerpt:
      "Go behind the scenes to learn how precision engineering and traditional craft produce world-class faucets.",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
            Our Blog
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-foreground">
            Insights & Inspiration
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Stay updated with the latest trends, tips, and stories from the
            world of premium bathroom fittings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="overflow-hidden border-border/50 bg-card hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-muted/30 flex items-center justify-center">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {blog.excerpt}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            View All Articles <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
