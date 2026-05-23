import { ArrowLeft, Phone, MessageCircle, CheckCircle, MapPin, Clock, ShieldCheck, Truck, Award, Star } from 'lucide-react';
import { KEYWORD_DATA, ROUTE_DATA, COMPANY } from '../data/site';
import { buildWhatsAppLink, telLink } from '../lib/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import EnquiryForm from '../components/EnquiryForm';

export default function KeywordDetailPage({ slug, onBack, onNavigate }) {
  const keyword = KEYWORD_DATA.find((k) => k.slug === slug);

  if (!keyword) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar onNavigate={onNavigate} onBack={onBack} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-display font-black text-ink">Page not found</p>
            <button onClick={onBack} className="mt-4 text-rust underline">← Back to home</button>
          </div>
        </div>
      </div>
    );
  }

  const { text } = keyword;

  /* --- Extract destination city from keyword if present --- */
  const toMatch = text.match(/Chennai to (.+)$/i);
  const destRaw = toMatch ? toMatch[1].trim() : null;

  /* Try to find a matching ROUTE_DATA entry */
  const route = destRaw
    ? ROUTE_DATA.find(
        (r) => r.city.toLowerCase() === destRaw.toLowerCase() ||
               destRaw.toLowerCase().includes(r.city.toLowerCase())
      )
    : null;

  const isRouteKeyword = !!destRaw;
  const dest = route ? route.city : destRaw;
  const waMsg = isRouteKeyword
    ? `Hi, I need a quote for ${text}.`
    : `Hi, I need Packers and Movers in Chennai.`;
  const waLink = buildWhatsAppLink(waMsg);

  /* --- Content varies by keyword type --- */
  const para1 = isRouteKeyword
    ? `Finding the right packers and movers for the ${text} route is the most important step in a successful relocation. At Comfort Packers and Movers, we specialise in this exact route — with dedicated weekly trips, GPS-tracked vehicles and a trained crew that has handled hundreds of Chennai-to-${dest} moves over the past 12 years.`
    : `Searching for reliable packers and movers in Chennai? Comfort Packers and Movers is a Chennai-based, IBA Approved and ISO Certified relocation company serving households, vehicles, offices and pets across India. We operate from Poonamallee, Chennai, and serve every pincode — from Anna Nagar and Adyar to Sholinganallur and Tambaram.`;

  const para2 = isRouteKeyword
    ? `Our ${text} service covers the full door-to-door process — we pack at your Chennai address using multi-layer cartons, bubble wrap and padded blankets, load onto a GPS-tracked truck${route ? ` (${route.km} km, ~${route.time})` : ''}, and deliver to your ${dest} doorstep. No subcontracting, no middlemen, no hidden charges.`
    : `Every Chennai move we handle comes with a written quote, GPS tracking from pickup to delivery, and a direct WhatsApp line to our operations team. We cover 49 interstate routes and 63+ local Chennai areas — with the same professionalism on a 2 km shift as on a 2,000 km one.`;

  const para3 = isRouteKeyword
    ? `Our ${text} service includes pre-move survey, written quote, professional packing on moving day, live tracking, and unpacking at ${dest}. We are IBA Approved — so your PSU or corporate employer can reimburse the move cost without documentation hassle.`
    : `Whether you need house shifting, car or bike transport, office relocation, pet transport or self storage — Comfort Packers handles it in-house with IBA-compliant documentation and a 4.9 star rating earned from 50,000+ moves.`;

  const highlights = isRouteKeyword && route
    ? [
        { label: 'Distance',   value: `${route.km} km` },
        { label: 'Est. Time',  value: route.time },
        { label: 'Experience', value: '12+ Yrs' },
      ]
    : [
        { label: '50K+',   value: 'Moves done' },
        { label: '4.9★',   value: 'Customer rating' },
        { label: '63+',    value: 'Chennai areas' },
      ];

  const services = isRouteKeyword
    ? [
        { title: 'Household Shifting',   desc: `Complete ${text} with multi-layer packing and GPS-tracked trucks.` },
        { title: 'Car Transport',         desc: `Open or enclosed carrier for car shipping on the Chennai–${dest} route.` },
        { title: 'Bike Transport',        desc: `Wooden-crate bike shipping from Chennai to ${dest}, fuel drained and insured.` },
        { title: 'Office Relocation',     desc: `Weekend office shifts with IT handling — Chennai to ${dest} with zero downtime.` },
      ]
    : [
        { title: 'House Shifting',        desc: 'Door-to-door household relocation within Chennai or to any city across India.' },
        { title: 'Car & Bike Transport',  desc: 'Vehicle shipping from Chennai — open/enclosed carriers, GPS tracked, fully insured.' },
        { title: 'Office Relocation',     desc: 'After-hours office shifts with IT specialist crew and modular furniture handling.' },
        { title: 'Pet Relocation',        desc: 'IATA-certified pet transport from Chennai with vet coordination and documentation.' },
      ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onNavigate={onNavigate} onBack={onBack} />

      {/* Hero */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute -top-20 right-10 w-96 h-96 bg-butter/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rust/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 lg:px-8 pt-10 pb-16 lg:pb-24">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-cream/60 hover:text-butter text-sm font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {isRouteKeyword && route && (
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-butter/20 text-butter text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <MapPin size={12} /> Chennai → {dest}
              </span>
              <span className="flex items-center gap-1 text-cream/50 text-xs"><MapPin size={11} /> {route.km} km</span>
              <span className="flex items-center gap-1 text-cream/50 text-xs"><Clock size={11} /> {route.time}</span>
            </div>
          )}

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight">
            {isRouteKeyword ? (
              <>
                Packers and Movers<br />
                from <span className="italic font-medium text-butter">Chennai</span><br />
                to {dest}
              </>
            ) : (
              <>
                Packers and Movers<br />
                in <span className="italic font-medium text-butter">Chennai</span>
              </>
            )}
          </h1>
          <p className="mt-5 text-cream/70 text-lg italic">
            {isRouteKeyword ? 'Interstate move made easy' : "Chennai's trusted, IBA-approved relocation experts"}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold px-6 py-3.5 rounded-full text-sm transition-colors">
              <MessageCircle size={18} /> Get a Free Quote
            </a>
            <a href={telLink}
              className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/15 border border-cream/20 text-cream font-semibold px-6 py-3.5 rounded-full text-sm transition-colors">
              <Phone size={18} /> {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <div className="space-y-5">
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">{para1}</p>
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">{para2}</p>
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">{para3}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-white border border-ink/10 rounded-2xl p-5 text-center">
                  <div className="font-display font-black text-2xl lg:text-3xl text-ink">{h.label}</div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">{h.value}</div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                {isRouteKeyword ? `Services on Chennai → ${dest}` : 'Services we offer in Chennai'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="bg-white border border-ink/10 rounded-2xl p-5 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle size={17} className="text-rust mt-0.5 shrink-0" />
                      <h3 className="font-display font-bold text-ink text-base">{s.title}</h3>
                    </div>
                    <p className="text-sm text-ink/65 leading-relaxed pl-6">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why us */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                Why Comfort Packers?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={22} />, title: 'IBA & ISO Certified',  body: 'PSU and corporate employers accept our invoice for relocation reimbursement.' },
                  { icon: <Truck size={22} />,       title: 'GPS on Every Move',    body: 'Live tracking link sent at departure. Follow your goods in real time.' },
                  { icon: <Award size={22} />,       title: '12+ Years in Chennai', body: '50,000+ moves completed. We have seen every scenario and handled it.' },
                  { icon: <Star size={22} />,        title: '4.9 Star Rating',      body: 'Real customer reviews — no paid rankings or boosted ratings.' },
                ].map((w) => (
                  <div key={w.title} className="flex gap-4 p-5 bg-white border border-ink/10 rounded-2xl hover:shadow-card transition-shadow">
                    <span className="w-10 h-10 rounded-xl bg-ink text-butter flex items-center justify-center shrink-0">{w.icon}</span>
                    <div>
                      <div className="font-display font-bold text-ink text-sm">{w.title}</div>
                      <p className="text-xs text-ink/60 mt-1 leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-ink text-cream rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-butter font-bold mb-3">Free Quote</div>
                <h3 className="font-display font-black text-xl leading-tight">{text}</h3>
                <p className="text-sm text-cream/70 mt-3 leading-relaxed">Written quote in 15 minutes. No hidden charges.</p>
                <div className="mt-5 space-y-3">
                  <a href={waLink} target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold py-3.5 rounded-full text-sm w-full transition-colors">
                    <MessageCircle size={16} /> WhatsApp Quote
                  </a>
                  <a href={telLink}
                    className="flex items-center justify-center gap-2 bg-cream/10 hover:bg-cream/15 border border-cream/20 text-cream font-semibold py-3.5 rounded-full text-sm w-full transition-colors">
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white border border-ink/10 rounded-3xl p-6 space-y-4">
                {['IBA & ISO Certified', 'GPS tracking on every move', 'Transit insurance available', 'Written quote, no hidden fees', 'Responds within 15 minutes'].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-ink/75">
                    <CheckCircle size={15} className="text-rust shrink-0" />{t}
                  </div>
                ))}
              </div>

              <div className="rounded-3xl overflow-hidden border border-ink/10">
                <div className="bg-ink px-5 py-4">
                  <p className="font-display font-bold text-cream text-lg">Quick Enquiry</p>
                  <p className="text-xs text-cream/60 mt-0.5">We respond within 15 minutes</p>
                </div>
                <div className="bg-white p-4"><EnquiryForm compact /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
