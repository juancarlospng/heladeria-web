import { motion } from "framer-motion";
import { MapPin, Clock, ArrowDown } from "lucide-react";
import { BRAND, IMAGES } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white"
      data-testid="hero-section"
    >
      {/* Soft, minimal background tint — 30% violet whisper */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-violet) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, var(--color-yellow) 0%, transparent 70%)",
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-violet-soft)] text-xs uppercase tracking-[0.24em] text-[var(--color-violet-deep)] font-semibold"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet)]" />
              Artigianale · dal {BRAND.since}
            </span>

            <h1
              className="font-display text-[44px] sm:text-5xl lg:text-[68px] leading-[1.02] text-[var(--color-text)] mt-7 tracking-tight"
              data-testid="hero-title"
            >
              Vero gelato italiano
              <br />
              <span className="italic font-light">nel cuore di</span>{" "}
              <span className="relative inline-block">
                Locarno
                <span
                  className="absolute left-0 right-0 bottom-1.5 h-2 -z-0"
                  style={{ background: "var(--color-yellow)" }}
                  aria-hidden
                />
                <span className="relative">&nbsp;</span>
              </span>
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
                <Clock size={15} className="text-[var(--color-violet-deep)]" />
                {BRAND.hours}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-[var(--color-violet-deep)]" />
                {BRAND.address}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Visual — the product is the protagonist */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden bg-[var(--color-grey-soft)]">
              <img
                src={IMAGES.hero}
                alt="Cono di gelato artigianale italiano"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
            </div>

            {/* Minimal floating signature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl border border-[var(--color-border)] p-5 max-w-[240px]"
              data-testid="hero-signature-card"
            >
              <p className="font-accent text-2xl text-[var(--color-violet-deep)] leading-none">
                La dolce vita
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-soft)] leading-relaxed">
                Mantecato a mano la mattina presto. Servito con il sorriso fino a
                sera.
              </p>
            </motion.div>

            {/* Minimal since pill (yellow accent) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-[var(--color-yellow)] text-[var(--color-text)] px-4 py-2 rounded-full text-xs font-semibold tracking-[0.22em] uppercase"
              data-testid="hero-since-badge"
            >
              <span>dal</span>
              <span>2002</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
