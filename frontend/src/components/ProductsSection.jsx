import { motion } from "framer-motion";
import { IceCream, Package, ChefHat, ArrowRight } from "lucide-react";
import { IMAGES } from "@/data/content";

const PRODUCTS = [
  {
    icon: IceCream,
    title: "Coni & Coppette",
    italian: "Coni e coppette",
    description:
      "Scegli i tuoi gusti preferiti e gustali alla maniera italiana, mantecati al momento.",
    image: IMAGES.cones,
    cta: "Vedi i gusti",
    ctaHref: "#gusti",
  },
  {
    icon: Package,
    title: "Vaschette da asporto",
    italian: "Da portare a casa",
    description:
      "Vaschette riempite a mano da 500 ml, 750 ml e 1 kg. Perfette da condividere a casa.",
    image: IMAGES.tub,
    cta: "Prenota la tua",
    ctaHref: "#contatti",
  },
  {
    icon: ChefHat,
    title: "Catering per hotel e ristoranti",
    italian: "Per la tua attività",
    description:
      "Gelato artigianale fresco, su misura per il tuo locale, menù o evento. Forniture personalizzate.",
    image: IMAGES.displayCase,
    cta: "Richiedi un preventivo",
    ctaHref: "#contatti",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="prodotti"
      className="py-20 lg:py-28 bg-[var(--color-bg)]"
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div className="max-w-2xl">
            <span className="divider-flourish">la nostra offerta</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
              Cosa offriamo
            </h2>
          </div>
          <p className="text-[var(--color-text-soft)] max-w-md text-base leading-relaxed">
            Dalla classica coppetta passeggiata sul lungolago, alla vaschetta da
            portare a casa, fino al servizio dedicato ai ristoranti di Locarno e
            del Ticino.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[var(--color-border)] flex flex-col"
                data-testid={`product-card-${i}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-[var(--color-text)] border border-[var(--color-border)]">
                    <Icon size={14} className="text-[var(--color-violet-deep)]" />
                    {p.italian}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-[var(--color-text)] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-soft)] text-[15px] leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <a
                    href={p.ctaHref}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-deep)] hover:gap-3 transition-all"
                    data-testid={`product-cta-${i}`}
                  >
                    {p.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
