import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: Sparkles,
    title: "Ricette autentiche italiane",
    text:
      "Mantecature lente, dosaggi misurati e ricette di famiglia: ogni gusto è un omaggio alla tradizione italiana.",
  },
  {
    icon: Leaf,
    title: "Ingredienti freschi e selezionati",
    text:
      "Solo latte fresco, panna di qualità, frutta di stagione e materie prime scelte ogni mattina con cura.",
  },
  {
    icon: Heart,
    title: "Famiglia dal 2002",
    text:
      "Una passione che si tramanda alla seconda generazione. Stessa attenzione, stesso amore, ogni singola coppetta.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="valori"
      className="py-20 lg:py-28 bg-[var(--color-grey-soft)] relative"
      data-testid="trust-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="divider-flourish">la nostra promessa</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
            Fresco, naturale e
            <br />
            <span className="italic font-light">fatto a mano ogni giorno</span>
          </h2>
          <p className="mt-5 text-[var(--color-text-soft)] leading-relaxed text-base sm:text-lg">
            Da La Dolcevita ogni cucchiaiata è preparata con cura, usando
            ingredienti selezionati, latte e panna freschi e frutta di stagione.
            Una tradizione di famiglia che porta il vero sapore d'Italia a
            Locarno.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="bg-white rounded-3xl p-8 border border-[var(--color-border)]"
                data-testid={`trust-card-${i}`}
              >
                <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center bg-[var(--color-violet-soft)] text-[var(--color-violet-deep)]">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-2xl text-[var(--color-text)] mt-6 leading-snug">
                  {v.title}
                </h3>
                <p className="mt-3 text-[var(--color-text-soft)] leading-relaxed text-[15px]">
                  {v.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
