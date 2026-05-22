import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { BRAND } from "@/data/content";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-text)] text-[#F5EDDA] pt-16 pb-8"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-pistachio)] text-[var(--color-text)] font-display text-2xl">
                ld
              </span>
              <div>
                <p className="font-display text-2xl leading-none">
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
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-pistachio)] hover:text-[var(--color-text)] hover:border-transparent transition"
                data-testid="footer-instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-pistachio)] hover:text-[var(--color-text)] hover:border-transparent transition"
                data-testid="footer-facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={BRAND.tripadvisor}
                target="_blank"
                rel="noreferrer"
                aria-label="TripAdvisor"
                className="px-4 h-11 rounded-full border border-white/20 flex items-center text-sm font-medium hover:bg-[var(--color-pistachio)] hover:text-[var(--color-text)] hover:border-transparent transition"
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
                <a href="#valori" className="opacity-90 hover:opacity-100 hover:text-[var(--color-pistachio)] transition">
                  La nostra promessa
                </a>
              </li>
              <li>
                <a href="#prodotti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-pistachio)] transition">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#gusti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-pistachio)] transition">
                  Gusti d'autore
                </a>
              </li>
              <li>
                <a href="#esperienza" className="opacity-90 hover:opacity-100 hover:text-[var(--color-pistachio)] transition">
                  Esperienza
                </a>
              </li>
              <li>
                <a href="#contatti" className="opacity-90 hover:opacity-100 hover:text-[var(--color-pistachio)] transition">
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
                <a href={BRAND.phoneHref} className="opacity-90 hover:text-[var(--color-pistachio)] transition">
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
            <a href="#" className="hover:text-[var(--color-pistachio)] transition" data-testid="footer-legal">
              Note Legali
            </a>
            <a href="#" className="hover:text-[var(--color-pistachio)] transition" data-testid="footer-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
