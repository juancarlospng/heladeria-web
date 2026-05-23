import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BRAND } from "@/data/content";

const NAV = [
  { label: "La Storia", href: "#valori" },
  { label: "Gusti", href: "#gusti" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Esperienza", href: "#esperienza" },
  { label: "Contatti", href: "#contatti" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          data-testid="navbar-logo"
        >
          <img
            src="/brand/logo.png"
            alt="La Dolcevita Gelato Artigianale"
            className="h-16 sm:h-20 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text)] hover:text-[var(--color-violet-deep)] transition-colors relative"
              data-testid={`nav-link-${item.href.replace("#", "")}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BRAND.phoneHref}
            className="btn-outline"
            data-testid="navbar-call-button"
          >
            <Phone size={16} /> {BRAND.phone}
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[var(--color-border)] overflow-hidden"
            data-testid="navbar-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-display text-[var(--color-text)]"
                  data-testid={`mobile-nav-${item.href.replace("#", "")}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={BRAND.phoneHref}
                className="btn-primary w-fit"
                onClick={() => setOpen(false)}
                data-testid="mobile-call-button"
              >
                <Phone size={16} /> Chiama Ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
