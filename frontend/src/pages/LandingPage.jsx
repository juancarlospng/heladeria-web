import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import FlavorsSection from "@/components/FlavorsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  useEffect(() => {
    // SEO meta tags
    document.title =
      "Gelateria La Dolcevita · Vero gelato italiano artigianale a Locarno";
    const setMeta = (name, content, isProperty = false) => {
      const key = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${key}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(key, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Gelateria La Dolcevita a Locarno: gelato italiano artigianale, mantecato fresco ogni giorno dal 2002. Coni, coppette, vaschette, sorbetti e catering per hotel e ristoranti."
    );
    setMeta(
      "keywords",
      "Gelateria Locarno, gelato italiano Locarno, gelato artigianale, La Dolcevita Locarno, vero gelato italiano, gelateria artigianale Ticino, sorbetto Locarno, catering gelato"
    );
    setMeta("og:title", "Gelateria La Dolcevita · Locarno", true);
    setMeta(
      "og:description",
      "Vero gelato italiano artigianale nel cuore di Locarno. Fatto a mano ogni giorno dal 2002.",
      true
    );
    setMeta("og:type", "website", true);
  }, []);

  return (
    <main data-testid="landing-page">
      <NavBar />
      <Hero />
      <TrustSection />
      <ProductsSection />
      <FlavorsSection />
      <ExperienceSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
