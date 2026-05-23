import { motion } from "framer-motion";
import { IMAGES } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section
      id="esperienza"
      className="py-20 lg:py-28 bg-white"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <span className="divider-flourish">l'esperienza</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
            Più di un gelato.
            <br />
            <span className="italic font-light">
              È la dolce vita italiana.
            </span>
          </h2>
          <p className="mt-6 text-[var(--color-text-soft)] text-base sm:text-lg leading-relaxed">
            Che tu stia passeggiando per Locarno, godendoti una serata con gli
            amici o portando a casa il dessert per la famiglia, La Dolcevita è
            la tua dolce sosta per un autentico piacere italiano.
          </p>
          <p className="mt-4 text-[var(--color-text-soft)] text-base leading-relaxed">
            Vieni a trovarci al banco: ti guideremo tra i gusti del giorno e ti
            racconteremo come nascono. Una pausa lenta, come si faceva una
            volta.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
            <Stat number="22+" label="anni di tradizione" />
            <Stat number="30+" label="gusti rotanti" />
            <Stat number="100%" label="artigianale" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 order-1 lg:order-2 relative"
        >
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[520px] sm:h-[600px]">
            <div className="col-span-8 row-span-4 rounded-3xl overflow-hidden border border-[var(--color-border)] relative">
              <img
                src={IMAGES.family}
                alt="Famiglia che gusta il gelato a Locarno"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden border border-[var(--color-border)] relative">
              <img
                src={IMAGES.locarno}
                alt="Veduta di Locarno, Svizzera"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden border border-[var(--color-border)] relative">
              <img
                src={IMAGES.ingredients}
                alt="Ingredienti freschi: pistacchi, nocciole, frutta"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-8 row-span-2 rounded-3xl border border-[var(--color-border)] bg-[var(--color-violet-soft)] p-6 flex items-center">
              <p className="font-accent text-2xl sm:text-3xl text-[var(--color-violet-deep)] leading-snug">
                "Un piccolo cono, un grande momento di felicità."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-display text-3xl sm:text-4xl text-[var(--color-violet-deep)] leading-none">
        {number}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
        {label}
      </p>
    </div>
  );
}
