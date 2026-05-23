import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Instagram, Navigation, Send, Loader2 } from "lucide-react";
import { BRAND } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  inquiry_type: "general",
  subject: "Richiesta informazioni",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Compila i campi obbligatori per inviare la richiesta.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        ...form,
        subject:
          form.inquiry_type === "catering"
            ? "Richiesta Catering"
            : form.subject || "Richiesta informazioni",
      };
      const { data } = await axios.post(`${API}/contact`, payload);
      if (data?.email_sent) {
        toast.success("Grazie! La tua richiesta è stata inviata.", {
          description: "Ti risponderemo a breve via email.",
        });
      } else {
        toast.success("Richiesta ricevuta!", {
          description:
            "Abbiamo salvato la tua richiesta. Ti contatteremo al più presto.",
        });
      }
      setForm(INITIAL);
    } catch (err) {
      const detail =
        err?.response?.data?.detail || "Si è verificato un errore. Riprova.";
      toast.error("Invio non riuscito", { description: String(detail) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contatti"
      className="py-20 lg:py-28 bg-[var(--color-bg)]"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="divider-flourish">vienici a trovare</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-[var(--color-text)] mt-4 tracking-tight">
            Ti aspettiamo a Locarno
          </h2>
          <p className="mt-5 text-[var(--color-text-soft)] text-base sm:text-lg leading-relaxed">
            Passa al banco, scegli i tuoi gusti preferiti o scrivici per
            organizzare un servizio catering per il tuo hotel, ristorante o
            evento privato.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-7">
              <h3 className="font-display text-2xl text-[var(--color-text)] mb-5">
                Informazioni
              </h3>
              <ul className="space-y-5 text-[15px]">
                <InfoRow
                  icon={MapPin}
                  label="Indirizzo"
                  value={BRAND.address}
                  hint={BRAND.city}
                />
                <InfoRow
                  icon={Phone}
                  label="Telefono"
                  value={BRAND.phone}
                  href={BRAND.phoneHref}
                />
                <InfoRow icon={Clock} label="Orari" value={BRAND.hours} />
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={BRAND.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  data-testid="contact-directions-btn"
                >
                  <Navigation size={16} /> Indicazioni
                </a>
                <a
                  href={BRAND.phoneHref}
                  className="btn-strawberry"
                  data-testid="contact-call-btn"
                >
                  <Phone size={16} /> Chiama Ora
                </a>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  data-testid="contact-instagram-btn"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden border border-[var(--color-border)] aspect-[4/3] bg-[var(--color-grey-soft)]"
              data-testid="contact-map-wrapper"
            >
              <iframe
                src={BRAND.mapsEmbed}
                title="Mappa Gelateria La Dolcevita Locarno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="contact-map-iframe"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-[var(--color-border)] p-7 sm:p-10"
            data-testid="contact-form"
          >
            <h3 className="font-display text-3xl text-[var(--color-text)]">
              Scrivici
            </h3>
            <p className="mt-2 text-[var(--color-text-soft)] text-[15px]">
              Per prenotazioni di vaschette, servizio catering o semplicemente
              per salutarci.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Nome e cognome *"
                testId="contact-input-name"
                value={form.name}
                onChange={update("name")}
                required
                placeholder="Es. Marco Rossi"
              />
              <Field
                label="Email *"
                type="email"
                testId="contact-input-email"
                value={form.email}
                onChange={update("email")}
                required
                placeholder="tu@esempio.com"
              />
              <Field
                label="Telefono"
                type="tel"
                testId="contact-input-phone"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+41 ..."
              />

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)] font-semibold">
                  Tipo richiesta
                </label>
                <div
                  className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-[var(--color-grey-soft)] border border-[var(--color-border)]"
                  data-testid="contact-inquiry-toggle"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setForm((p) => ({ ...p, inquiry_type: "general" }))
                    }
                    className={`py-2 rounded-full text-sm font-medium transition ${
                      form.inquiry_type === "general"
                        ? "bg-white text-[var(--color-text)] shadow-sm"
                        : "text-[var(--color-text-soft)]"
                    }`}
                    data-testid="inquiry-type-general"
                  >
                    Generale
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setForm((p) => ({ ...p, inquiry_type: "catering" }))
                    }
                    className={`py-2 rounded-full text-sm font-medium transition ${
                      form.inquiry_type === "catering"
                        ? "bg-white text-[var(--color-text)] shadow-sm"
                        : "text-[var(--color-text-soft)]"
                    }`}
                    data-testid="inquiry-type-catering"
                  >
                    Catering
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)] font-semibold">
                Messaggio *
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                required
                rows={5}
                placeholder="Raccontaci come possiamo aiutarti..."
                className="mt-2 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-grey-soft)] px-5 py-4 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-soft)]/60 outline-none focus:border-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-violet)] transition resize-none"
                data-testid="contact-input-message"
              />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-[var(--color-text-soft)] max-w-sm">
                Inviando questa richiesta accetti che La Dolcevita ti contatti
                per rispondere. Nessuno spam, promesso.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                data-testid="contact-submit-btn"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Invio...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Invia richiesta
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, hint, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex w-10 h-10 rounded-2xl items-center justify-center bg-[var(--color-violet-soft)] text-[var(--color-violet-deep)] shrink-0">
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)] font-semibold">
          {label}
        </p>
        <p className="mt-1 text-[var(--color-text)] font-medium">{value}</p>
        {hint && (
          <p className="text-sm text-[var(--color-text-soft)]">{hint}</p>
        )}
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block hover:opacity-80 transition-opacity">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder, testId }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)] font-semibold">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-grey-soft)] px-5 py-3.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-soft)]/60 outline-none focus:border-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-violet)] transition"
        data-testid={testId}
      />
    </div>
  );
}
