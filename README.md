# Comfort Packers and Movers — Chennai

A production-grade marketing website built with **React + Vite + Tailwind CSS** for Comfort Packers and Movers, Chennai.

> Theme inspired by the Metropolis Moving reference shared by the client — warm cream + deep navy + butter yellow + rust red, Fraunces display serif + Plus Jakarta Sans body.

---

## ✨ Features

- **Pixel-friendly hero** with bold display typography and clear CTA to call / WhatsApp
- **Quick Enquiry form** on hero AND in dedicated section — submissions open WhatsApp with a prefilled message to `+91 9625872938`
- **8 service cards**: House Shifting, Car Transport, Bike Transport, Office Relocation, Pet Relocation, Self Storage, Corporate Shifting, Loading & Unloading
- **All Chennai routes** listed (Bangalore, Hyderabad, Mumbai, Delhi, Pune, Kolkata, Kochi, Coimbatore, Madurai, Trivandrum, Trichy + 25 more)
- **4-step process** explainer
- **Testimonials**, **FAQ accordion**, **SEO keywords block** with all the keywords you provided
- **Sticky mobile bottom bar** (Call Now / Get Quote) + floating WhatsApp button
- **SEO ready**: meta title/description, keywords, OpenGraph, JSON-LD `MovingCompany` schema with aggregate rating + service catalog
- **IBA + ISO certified** badges throughout
- **Live tracking** mentioned in hero, services, FAQ

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

To deploy:

```bash
npm run build
# → outputs to /dist (deploy to Vercel, Netlify, Cloudflare Pages, etc.)
```

---

## 📂 Structure

```
src/
├── App.jsx                  # composes all sections
├── main.jsx                 # React entry
├── index.css                # Tailwind + global tweaks
├── data/site.js             # ALL editable text: services, routes, FAQs, keywords, phone, company name
├── lib/whatsapp.js          # WhatsApp link builder + enquiry message formatter
├── components/
│   ├── Navbar.jsx
│   ├── EnquiryForm.jsx
│   ├── WhatsAppFloat.jsx
│   └── MobileBar.jsx
└── sections/
    ├── Hero.jsx
    ├── TrustBar.jsx
    ├── Services.jsx
    ├── Routes.jsx
    ├── Process.jsx
    ├── Testimonials.jsx
    ├── FAQ.jsx
    ├── KeywordsBlock.jsx
    ├── EnquirySection.jsx
    └── Footer.jsx
```

---

## ✏️ Customising

- **Change phone number / company name / email**: edit `src/data/site.js` → `COMPANY` object
- **Add / remove services**: edit `SERVICE_CARDS` and `SERVICES_LIST` in `src/data/site.js`
- **Add routes**: append to `ROUTES` array
- **Edit FAQs**: `FAQS` array
- **Change theme colors**: edit `tailwind.config.js` → `theme.extend.colors`
- **Change fonts**: edit the Google Fonts link in `index.html` and the `fontFamily` block in `tailwind.config.js`

---

## 📱 WhatsApp flow

When a user fills the form and clicks **Send Enquiry**, the browser opens:

```
https://wa.me/919625872938?text=<prefilled message with all form fields>
```

So every enquiry lands directly in the company WhatsApp inbox. No backend, no email server, no hosting bill for forms. Works on mobile and desktop.

---

## 🔍 SEO

- Title, meta description, keywords set in `index.html`
- JSON-LD `MovingCompany` schema for Google rich results
- Semantic HTML (`<h1>`, `<h2>`, descriptive alt text where applicable)
- Sitemap-friendly anchor links: `#services`, `#routes`, `#process`, `#faq`, `#enquiry`
- KeywordsBlock section silently includes all 30+ "Packers and Movers Chennai to X" phrases the client provided

Recommended next steps after deploy:
1. Add a real OG image at `/og.jpg` (1200×630)
2. Create `/sitemap.xml` and `/robots.txt`
3. Submit to Google Search Console
4. Add Google Business Profile link
5. Add Analytics (GA4 or Plausible)
