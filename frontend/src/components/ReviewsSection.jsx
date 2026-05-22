import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS } from "@/data/content";

export default function ReviewsSection() {
  return (
    <section
      id="recensioni"
      className="py-20 lg:py-28 bg-[var(--color-beige-soft)]"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="divider-flourish">dicono di noi</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
            Voci dei nostri clienti
          </h2>
          <div className="flex items-center justify-center gap-1 mt-5 text-[var(--color-gold)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-[var(--color-text-soft)]">
              5,0 · Recensioni Google &amp; TripAdvisor
            </span>
          </div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 border border-[var(--color-border)]"
              data-testid={`review-card-${i}`}
            >
              <Quote
                size={36}
                className="text-[var(--color-pistachio)]"
                strokeWidth={1.2}
              />
              <blockquote className="mt-4 text-[var(--color-text)] font-display text-xl sm:text-[22px] leading-snug italic">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  {r.author}
                </span>
                <span className="flex gap-0.5 text-[var(--color-gold)]">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
