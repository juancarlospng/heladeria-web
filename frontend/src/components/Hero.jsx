import { motion } from "framer-motion";
import { MapPin, Clock, ArrowDown } from "lucide-react";
import { BRAND, IMAGES } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background flourishes */}
      <div
        aria-hidden
        className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E8DCC4 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #B4C9B1 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-border)] text-xs uppercase tracking-[0.24em] text-[var(--color-text-soft)]"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-strawberry)]" />
              Artigianale · dal {BRAND.since}
            </span>

            <h1
              className="font-display text-[44px] sm:text-5xl lg:text-[68px] leading-[1.02] text-[var(--color-text)] mt-7 tracking-tight"
              data-testid="hero-title"
            >
              Vero gelato italiano
              <br />
              <span className="italic font-light">nel cuore di</span>{" "}
              <span className="text-[var(--color-strawberry)]">Locarno</span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg text-[var(--color-text-soft)] leading-relaxed max-w-xl"
              data-testid="hero-subtitle"
            >
              Mantecato fresco ogni giorno con latte, panna, frutta di stagione e
              ingredienti accuratamente selezionati. Una tradizione di famiglia
              che porta il sapore autentico dell'Italia a Locarno.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="btn-primary"
                data-testid="hero-visit-cta"
              >
                <MapPin size={16} />
                Vienici a trovare
              </a>
              <a
                href="#gusti"
                className="btn-outline"
                data-testid="hero-flavors-cta"
              >
                Scopri i gusti
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-text-soft)]">
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-[var(--color-strawberry)]" />
                {BRAND.hours}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-[var(--color-strawberry)]" />
                {BRAND.address}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[36px] overflow-hidden border border-[var(--color-border)] shadow-[0_30px_60px_-30px_rgba(74,59,50,0.45)]">
              <img
                src={IMAGES.hero}
                alt="Cono di gelato artigianale italiano"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/30 via-transparent to-transparent" />
            </div>

            {/* Floating signature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden sm:block absolute -bottom-8 -left-8 bg-white rounded-3xl border border-[var(--color-border)] p-5 max-w-[260px] shadow-[0_24px_44px_-24px_rgba(74,59,50,0.35)]"
              data-testid="hero-signature-card"
            >
              <p className="font-accent text-2xl text-[var(--color-strawberry)] leading-none">
                La dolce vita
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-soft)] leading-relaxed">
                Mantecato a mano la mattina presto. Servito con il sorriso fino a
                sera.
              </p>
            </motion.div>

            {/* Floating since badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--color-strawberry)] text-white flex flex-col items-center justify-center border-4 border-[#FDFBF7]"
              data-testid="hero-since-badge"
            >
              <span className="text-[10px] tracking-[0.26em] uppercase opacity-80">
                dal
              </span>
              <span className="font-display text-3xl leading-none">2002</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
