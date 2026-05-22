# PRD — Gelateria La Dolcevita (Locarno)

## Original problem statement
Build an elegant, premium landing page for an artisanal gelateria "Gelateria La Dolcevita" in Locarno, Switzerland. Communicate family tradition (since 2002), freshness, authentic Italian flavor, warmth. Sections: hero, trust, products, signature flavors, experience, reviews, location/contact, footer. Visual: cream, white, soft pistachio, strawberry red, golden/beige.

## User-decided choices
- Language: **Italian only**
- Map: Google Maps **iframe**
- Contact form: **Yes, with Resend email** (key not yet provided → placeholder)
- Recipient email: `info@ladolcevita.ch` (placeholder, editable in `.env`)
- Instagram: https://www.instagram.com/ladolcevita.gelateria/?hl=en (real); Facebook/TripAdvisor placeholders
- Images: AI-generated hero/family/ingredients/tub + Unsplash for Locarno, display, cones, flavor cards

## Architecture
- Backend: FastAPI + Motor (Mongo) + Resend SDK
- Frontend: React 19 + Tailwind + framer-motion + sonner + lucide-react
- Fonts: Cormorant Garamond (display), Manrope (body), Dancing Script (accent)
- Routing: single `/` route → `LandingPage`
- DB collection: `contact_inquiries`

## Backend API
- `GET /api/` — health
- `POST /api/contact` — persists `ContactInquiry`, tries Resend, returns `email_sent`/`email_error`
- `GET /api/contact` — list inquiries (⚠ unauth, internal use only)
- `POST/GET /api/status` — legacy template endpoints (kept)

## Frontend sections (all Italian)
1. NavBar (fixed, scroll-aware, mobile menu)
2. Hero — title "Vero gelato italiano nel cuore di Locarno", 2 CTAs, since-2002 badge, signature card
3. TrustSection — 3 cards (ricette autentiche, ingredienti freschi, famiglia dal 2002)
4. ProductsSection — Coni & Coppette / Vaschette / Catering
5. FlavorsSection — 5 bento cards (Fragola, Pistacchio di Bronte, Nocciola delle Langhe, Stracciatella, Sorbetto di Stagione)
6. ExperienceSection — copy + 4-image bento grid + 3 stats
7. ReviewsSection — 3 testimonials, 5-star rating block
8. ContactSection — info card + Google Maps iframe + functional contact form (general/catering toggle)
9. Footer — brand block, navigation, contacts, social (IG real), legal links

## What's implemented (2026-05)
- ✅ Backend `/api/contact` endpoint (persist + Resend integration ready)
- ✅ Complete landing page in Italian
- ✅ Google Maps iframe
- ✅ Functional contact form (axios → /api/contact, sonner toasts)
- ✅ SEO meta tags (title, description, keywords, OG)
- ✅ Framer-motion section reveals + smooth scroll anchors
- ✅ Responsive mobile + desktop
- ✅ data-testid on all interactive/critical elements
- ✅ Backend pytest suite (`/app/backend/tests/test_contact_api.py`) — 100% pass
- ✅ Frontend Playwright validation — 100% pass

## Backlog / next tasks
- **P0**: User adds real `RESEND_API_KEY` to `/app/backend/.env` and verifies domain on Resend
- **P1**: Protect `GET /api/contact` (admin-only) before exposing publicly
- **P1**: HTML-escape user fields in `_build_email_html`
- **P1**: Real Facebook + TripAdvisor URLs
- **P2**: WhatsApp click-to-chat CTA (Locarno tourists)
- **P2**: Online vaschette pre-order with Stripe deposit
- **P2**: Daily-flavors page powered by simple CMS / admin
- **P2**: Multi-language toggle (DE/EN/FR) for tourists
- **P2**: Migrate `@app.on_event("shutdown")` → FastAPI lifespan
