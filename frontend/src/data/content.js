export const BRAND = {
  name: "Gelateria La Dolcevita",
  shortName: "La Dolcevita",
  tagline: "Gelato artigianale italiano nel cuore di Locarno",
  address: "Via Vincenzo D'Alberti 4, 6600 Locarno",
  city: "Locarno, Svizzera",
  phone: "+41 79 246 76 92",
  phoneHref: "tel:+41792467692",
  hours: "Tutti i giorni · 11:00 — 22:00",
  since: 2002,
  instagram: "https://www.instagram.com/ladolcevita.gelateria/?hl=en",
  facebook: "#",
  tripadvisor: "#",
  email: "info@ladolcevita.ch",
  mapsEmbed:
    "https://www.google.com/maps?q=Via+Vincenzo+D%27Alberti+4%2C+6600+Locarno%2C+Switzerland&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Via+Vincenzo+D%27Alberti+4%2C+6600+Locarno%2C+Switzerland",
};

export const IMAGES = {
  hero:
    "https://static.prod-images.emergentagent.com/jobs/289caaae-5411-458e-ab32-3849a21e2044/images/a9a621f095532a2327c8e122a2c2088c6e5854e28140df7f052a23b74fad9c43.png",
  family:
    "https://static.prod-images.emergentagent.com/jobs/289caaae-5411-458e-ab32-3849a21e2044/images/113af0397500adf861bd11735648a96fccb972f9958753e5a91f8cbd2be31c64.png",
  ingredients:
    "https://static.prod-images.emergentagent.com/jobs/289caaae-5411-458e-ab32-3849a21e2044/images/17677658d30e2cad28df69e7f1d0113c32f1a258ea523ecc64ff286c42ac36d9.png",
  locarno:
    "https://images.unsplash.com/photo-1657516159721-6e92006dd06a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxsb2Nhcm5vJTIwc3dpdHplcmxhbmR8ZW58MHx8fHwxNzc5NDc3NjA2fDA&ixlib=rb-4.1.0&q=85",
  tub:
    "https://static.prod-images.emergentagent.com/jobs/289caaae-5411-458e-ab32-3849a21e2044/images/0ee00e2f4014ba159dd3f68df0c668bb2745b492adf0d2f0598a1113d61b6265.png",
  displayCase:
    "https://images.unsplash.com/photo-1764337008605-44abfb0f3816?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxhcnRpc2FuYWwlMjBnZWxhdG98ZW58MHx8fHwxNzc5NDc3NjA2fDA&ixlib=rb-4.1.0&q=85",
  cones:
    "https://images.unsplash.com/photo-1771885603721-c15a2f80856e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxhcnRpc2FuYWwlMjBnZWxhdG98ZW58MHx8fHwxNzc5NDc3NjA2fDA&ixlib=rb-4.1.0&q=85",
  // Flavor visuals (Unsplash, free)
  fragola:
    "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80",
  pistacchio:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
  nocciola:
    "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=900&q=80",
  stracciatella:
    "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  sorbetto:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
};

export const FLAVORS = [
  {
    id: "fragola",
    name: "Gelato alla Fragola",
    italian: "Fragola",
    description:
      "Preparato con fragole mature e dolci. Fresco, fruttato, perfetto per l'estate.",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1200&q=80",
    accent: "#C63A37",
  },
  {
    id: "pistacchio",
    name: "Pistacchio di Bronte",
    italian: "Pistacchio",
    description:
      "Intenso pistacchio siciliano DOP, dalla cremosità irresistibile.",
    image:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35?auto=format&fit=crop&w=900&q=80",
    accent: "#8AA687",
  },
  {
    id: "nocciola",
    name: "Nocciola delle Langhe",
    italian: "Nocciola",
    description:
      "Vellutato gelato alla nocciola Piemonte IGP, dolce e profondo.",
    image:
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80",
    accent: "#B4923A",
  },
  {
    id: "stracciatella",
    name: "Stracciatella",
    italian: "Stracciatella",
    description:
      "Un classico italiano: crema bianca con scaglie di cioccolato fondente.",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1200&q=80",
    accent: "#4A3B32",
  },
  {
    id: "sorbetto",
    name: "Sorbetto di Stagione",
    italian: "Sorbetto",
    description:
      "Sorbetti alla frutta fresca che cambiano con la stagione. Senza latte.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=80",
    accent: "#C63A37",
  },
];

export const REVIEWS = [
  {
    author: "Marco · Locarno",
    quote:
      "Uno dei migliori gelati di Locarno. Porzioni generose, personale gentile e tanta scelta.",
  },
  {
    author: "Sophie · Zurich",
    quote:
      "Gelato italiano fatto in casa, cremoso, delicato e incredibilmente delizioso.",
  },
  {
    author: "Luca & Giulia",
    quote:
      "I gusti cambiano sempre con la stagione e l'accoglienza è davvero calorosa.",
  },
];
