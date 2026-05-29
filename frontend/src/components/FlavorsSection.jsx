import { motion } from "framer-motion";
import { FLAVORS } from "@/data/content";

export default function FlavorsSection() {
  return (
    <section
      id="gusti"
      className="py-20 lg:py-28 relative bg-[#fff8d6]"
      data-testid="flavors-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="divider-flourish">i gusti più amati</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
            Gusti d'autore
          </h2>
          <p className="mt-5 text-[var(--color-text-soft)] text-base sm:text-lg leading-relaxed">
            Una selezione dei nostri cavalli di battaglia, accanto a creazioni
            stagionali che cambiano con la natura.
          </p>
        </motion.div>

        {/* Tetris-style grid (Bento) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {FLAVORS.map((f, i) => {
            // Bento layout: alternating sizes
            const spans = [
              "lg:col-span-2 lg:row-span-2", // fragola — big
              "lg:col-span-2", // pistacchio
              "lg:col-span-2", // nocciola
              "lg:col-span-3", // stracciatella
              "lg:col-span-3", // sorbetto
            ];
            const heights = [
              "min-h-[480px]",
              "min-h-[230px]",
              "min-h-[230px]",
              "min-h-[260px]",
              "min-h-[260px]",
            ];
            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`relative rounded-3xl overflow-hidden border border-[var(--color-border)] group ${spans[i]} ${heights[i]}`}
                data-testid={`flavor-card-${f.id}`}
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-7 text-white">
                  <span
                    className="inline-block w-fit font-accent text-2xl mb-2"
                    style={{ color: f.accent }}
                  >
                    {f.italian}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-[14px] text-white/85 leading-relaxed max-w-md">
                    {f.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12 font-accent text-2xl text-[var(--color-violet-deep)]"
        >
          ...e tanti altri gusti stagionali da scoprire in vetrina
        </motion.p>
      </div>
    </section>
  );
}
