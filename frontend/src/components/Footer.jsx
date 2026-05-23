import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { BRAND } from "@/data/content";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-text)] text-white pt-16 pb-8"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src="/brand/logo.png"
                alt="La Dolcevita Gelato Artigianale"
                className="h-24 w-auto"
              />
              <div>
                <p className="font-display text-2xl leading-tight">
                  Gelateria La Dolcevita
                </p>
                <p className="text-xs uppercase tracking-[0.22em] opacity-70 mt-1">
                  Vero gelato italiano · Locarno
                </p>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed opacity-80 max-w-md">
              Dal 2002 portiamo a Locarno la dolcezza autentica della tradizione
              italiana. Una storia di famiglia, alla seconda generazione,
              raccontata cucchiaio dopo cucchiaio.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-violet)] hover:text-[var(--color-text)] hover:border-transparent transition"
                data-testid="footer-instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-violet)] hover:text-[var(--color-text)] hover:border-transparent transition"
                data-testid="footer-whatsapp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
                </svg>
              </a>
              <a
                href={BRAND.tripadvisor}
                target="_blank"
                rel="noreferrer"
                aria-label="TripAdvisor"
                className="px-4 h-11 rounded-full border border-white/20 flex items-center text-sm font-medium hover:bg-[var(--color-violet)] hover:text-[var(--color-text)] hover:border-transparent transition"
                data-testid="footer-tripadvisor"
              >
                TripAdvisor
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] opacity-60 mb-4">
              Naviga
            </p>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href="#valori" className="opacity-90 hover:opacity-100 hover:text-[var(--color-yellow)] transition">
                  La nostra promessa
                </a>
              </li>
              <li>
                <a href="#prodotti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-yellow)] transition">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#gusti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-yellow)] transition">
                  Gusti d'autore
                </a>
              </li>
              <li>
                <a href="#esperienza" className="opacity-90 hover:opacity-100 hover:text-[var(--color-yellow)] transition">
                  Esperienza
                </a>
              </li>
              <li>
                <a href="#contatti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-yellow)] transition">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] opacity-60 mb-4">
              Contatti
            </p>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 opacity-70 shrink-0" />
                <span className="opacity-90">{BRAND.address}<br />{BRAND.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 opacity-70 shrink-0" />
                <a href={BRAND.phoneHref} className="opacity-90 hover:text-[var(--color-yellow)] transition">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-1 opacity-70 shrink-0" />
                <span className="opacity-90">{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs opacity-70">
          <p>
            © {new Date().getFullYear()} Gelateria La Dolcevita SA · Vero gelato
            italiano a Locarno
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[var(--color-yellow)] transition" data-testid="footer-legal">
              Note Legali
            </a>
            <a href="#" className="hover:text-[var(--color-yellow)] transition" data-testid="footer-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
