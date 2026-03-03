import { Separator } from "@/components/ui/separator";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-accent mb-4">PURAVA</h3>
          <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed">
            Premium brass health faucets, hooks, and shower tubes — crafted in India
            with pride and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wide uppercase text-primary-foreground/80 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {["About", "Products", "Why Purava", "Partners", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-sans"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wide uppercase text-primary-foreground/80 mb-4">
            Products
          </h4>
          <ul className="space-y-2">
            {["Health Faucets", "Shower Tubes", "Hooks & Holders", "Accessories"].map((p) => (
              <li key={p}>
                <span className="text-sm text-primary-foreground/60 font-sans">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wide uppercase text-primary-foreground/80 mb-4">
            Trust & Quality
          </h4>
          <div className="space-y-3">
            <div className="inline-block border border-accent/30 rounded px-3 py-1.5 text-xs text-accent font-sans">
              🇮🇳 Made in India
            </div>
            <div className="inline-block border border-accent/30 rounded px-3 py-1.5 text-xs text-accent font-sans ml-2">
              ISO Certified
            </div>
            <p className="text-xs text-primary-foreground/40 font-sans mt-2">
              Premium Brass • Corrosion Resistant • Quality Assured
            </p>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
        <p className="text-xs text-primary-foreground/40 font-sans">
          © {new Date().getFullYear()} Purava. All rights reserved.
        </p>
        <p className="text-xs text-primary-foreground/40 font-sans">
          Designed & Crafted with ❤️ in India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
