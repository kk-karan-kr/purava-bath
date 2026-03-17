import { motion } from "framer-motion";
import productQueen from "@/assets/product-queen.jpg";
import productRuby from "@/assets/product-ruby.jpg";
import productCosmo from "@/assets/product-cosmo.jpg";
import heroImg from "@/assets/hero-faucet.jpg";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const imageClass =
  "relative overflow-hidden rounded-lg group";
const overlayClass =
  "absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-4";
const captionClass =
  "text-primary-foreground text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300";
const imgClass =
  "w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`${imageClass} md:row-span-2`}
        >
          <img
            src={productQueen}
            alt="Purava Queen premium chrome faucet"
            className={imgClass}
          />
          <div className={overlayClass}>
            <p className={captionClass}>Purava Queen premium chrome faucet</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className={imageClass}
        >
          <img
            src={productRuby}
            alt="Purava Ruby premium chrome faucet"
            className={imgClass}
          />
          <div className={overlayClass}>
            <p className={captionClass}>Purava Ruby premium chrome faucet</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className={imageClass}
        >
          <img
            src={productCosmo}
            alt="Purava Cosmo premium chrome faucet"
            className={imgClass}
          />
          <div className={overlayClass}>
            <p className={captionClass}>Purava Cosmo premium chrome faucet</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className={imageClass}
        >
          <img
            src={craftsmanshipImg}
            alt="Purava faucet craftsmanship scene"
            className={imgClass}
          />
          <div className={overlayClass}>
            <p className={captionClass}>Purava faucet craftsmanship scene</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className={imageClass}
        >
          <img
            src={heroImg}
            alt="Purava luxury faucet installation"
            className={imgClass}
          />
          <div className={overlayClass}>
            <p className={captionClass}>Purava luxury faucet installation</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GallerySection;
