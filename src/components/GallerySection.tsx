import { motion } from "framer-motion";
import productQueen from "@/assets/product-queen.jpg";
import productRuby from "@/assets/product-ruby.jpg";
import productCosmo from "@/assets/product-cosmo.jpg";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
import interiorImg from "@/assets/business-interior.jpg";
import heroImg from "@/assets/hero-faucet.jpg";

const images = [
  { src: productQueen, alt: "Chrome health faucet spray in action", span: "md:col-span-1 md:row-span-2" },
  { src: interiorImg, alt: "Luxury bathroom with health faucet installation", span: "md:col-span-1" },
  { src: craftsmanshipImg, alt: "Complete health faucet setup with WC", span: "md:col-span-1" },
  { src: productRuby, alt: "Brushed steel health faucet spray", span: "md:col-span-1" },
  { src: heroImg, alt: "Wall-hung WC with chrome health faucet", span: "md:col-span-1" },
  
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent tracking-[0.2em] uppercase text-sm font-sans font-medium mb-3">
          Gallery
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Elegance in Every Detail
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[220px] md:auto-rows-[260px]">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-lg group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-4">
              <p className="text-primary-foreground text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
