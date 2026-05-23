import { ArrowLeft, MapPin, Clock, Phone, MessageCircle, CheckCircle, ShieldCheck, Truck, Award, Star } from 'lucide-react';
import { ROUTE_DATA, COMPANY, SERVICE_CARDS } from '../data/site';
import { buildWhatsAppLink, telLink } from '../lib/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import EnquiryForm from '../components/EnquiryForm';

export default function RouteDetailPage({ slug, onBack, onNavigate }) {
  const route = ROUTE_DATA.find((r) => r.slug === slug);

  if (!route) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar onNavigate={onNavigate} onBack={onBack} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-display font-black text-ink">Route not found</p>
            <button onClick={onBack} className="mt-4 text-rust underline">← Back to home</button>
          </div>
        </div>
      </div>
    );
  }

  const { city, km, time, state } = route;
  const waLink = buildWhatsAppLink(`Hi, I want a quote for Packers and Movers from Chennai to ${city}.`);

  const isLongDistance = parseInt(km) > 800;
  const isLocal = parseInt(km) < 300;

  const services = [
    { title: 'Household Shifting', desc: `Complete 1BHK–5BHK home relocation from Chennai to ${city} with multi-layer packing and GPS-tracked trucks.` },
    { title: 'Car Transport', desc: `Open and enclosed carrier shipping for all car types. Zero-touch hydraulic ramp loading, live GPS tracking.` },
    { title: 'Bike Transport', desc: `Custom wooden-crate shipping of motorcycles and scooters with fuel drainage and foam padding.` },
    { title: 'Office Relocation', desc: `Weekend office shifting with IT desk teardown, cable-tagging and same-day reassembly at destination.` },
  ];

  const whyUs = [
    { icon: <ShieldCheck size={22} />, title: 'IBA & ISO Certified', body: 'Our credentials mean your PSU or corporate employer accepts our invoice for reimbursement.' },
    { icon: <Truck size={22} />, title: 'GPS-Tracked Vehicles', body: 'Every truck on the Chennai–' + city + ' route carries a GPS device. You track from pickup to delivery.' },
    { icon: <Award size={22} />, title: '12+ Years Experience', body: 'Over a decade of Chennai relocations means we\'ve handled every road, traffic and weather scenario.' },
    { icon: <Star size={22} />, title: '4.9 Star Rated', body: '50,000+ satisfied customers and a 4.9 average rating — earned move by move, not by advertising.' },
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
            <ArrowLeft size={16} /> Back to all routes
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-butter/20 text-butter text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Chennai → {city}
            </span>
            <span className="flex items-center gap-1 text-cream/60 text-xs">
              <MapPin size={12} /> {km} km
            </span>
            <span className="flex items-center gap-1 text-cream/60 text-xs">
              <Clock size={12} /> {time}
            </span>
            <span className="text-cream/60 text-xs">{state}</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-tight">
            Packers and Movers<br />
            from <span className="italic font-medium text-butter">Chennai</span><br />
            to {city}
          </h1>
          <p className="mt-5 text-cream/70 text-lg lg:text-xl italic">
            Interstate move made easy
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
            >
              <MessageCircle size={18} /> Get a Free Quote
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/15 border border-cream/20 text-cream font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
            >
              <Phone size={18} /> {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left column – content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Intro paragraphs */}
            <div className="prose-custom">
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">
                Relocating from Chennai to {city} is an exciting journey, whether it's for career growth, a
                family commitment or a fresh start in {state}. The {km} km distance requires careful planning,
                professional packing and a carrier you can trust — because a single damaged item or delayed truck
                can turn an exciting move into a stressful one.
              </p>
              <p className="mt-5 text-ink/80 text-base lg:text-lg leading-relaxed">
                At Comfort Packers and Movers, we handle your entire Chennai-to-{city} relocation in-house —
                no subcontracting, no middlemen. Our comprehensive solutions include premium multi-layer packing,
                GPS-tracked vehicles, trained loading crews and doorstep delivery at your {city} address.
                {isLongDistance && ' For long-distance moves like this one, we operate on fixed weekly departure schedules so your goods travel on a dedicated truck, not a shared last-minute carrier.'}
                {isLocal && ' For this shorter route, we can often offer same-day loading and next-day delivery.'}
              </p>
              <p className="mt-5 text-ink/80 text-base lg:text-lg leading-relaxed">
                Our team ensures timely delivery with real-time GPS tracking, so you always know exactly where
                your belongings are on the Chennai–{city} highway. From packing the first carton at your
                Chennai door to placing the last box in your {city} home — Comfort Packers handles every step.
              </p>
            </div>

            {/* Route stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Distance', value: `${km} km` },
                { label: 'Est. Transit', value: time },
                { label: 'Experience', value: '12+ Yrs' },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-ink/10 rounded-2xl p-5 text-center">
                  <div className="font-display font-black text-2xl lg:text-3xl text-ink">{s.value}</div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Services on this route */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                Services on Chennai → {city}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="bg-white border border-ink/10 rounded-2xl p-5 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle size={18} className="text-rust mt-0.5 shrink-0" />
                      <h3 className="font-display font-bold text-ink text-base">{s.title}</h3>
                    </div>
                    <p className="text-sm text-ink/65 leading-relaxed pl-6">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                Why choose Comfort Packers for Chennai to {city}?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((w) => (
                  <div key={w.title} className="flex gap-4 p-5 bg-white border border-ink/10 rounded-2xl hover:shadow-card transition-shadow">
                    <span className="w-10 h-10 rounded-xl bg-ink text-butter flex items-center justify-center shrink-0">
                      {w.icon}
                    </span>
                    <div>
                      <div className="font-display font-bold text-ink text-sm">{w.title}</div>
                      <p className="text-xs text-ink/60 mt-1 leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                How your Chennai to {city} move works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Free survey & written quote', body: 'A Chennai supervisor visits your home or does a video walkthrough. You get a written quote — no surprise add-ons.' },
                  { step: '02', title: 'Packing at your Chennai address', body: 'Trained crew arrives with all materials on moving day and packs everything systematically, room by room.' },
                  { step: '03', title: 'GPS-tracked transit to ' + city, body: 'Your goods travel on a dedicated truck with a live tracking link sent to your phone at departure.' },
                  { step: '04', title: 'Doorstep delivery in ' + city, body: 'Crew unloads, unpacks and places furniture as directed. Final delivery sign-off obtained.' },
                ].map((p) => (
                  <div key={p.step} className="flex gap-5 p-5 bg-white border border-ink/10 rounded-2xl">
                    <span className="font-mono text-xs text-rust font-bold w-8 shrink-0 pt-0.5">{p.step}</span>
                    <div>
                      <div className="font-display font-bold text-ink">{p.title}</div>
                      <p className="text-sm text-ink/65 mt-1 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Quick CTA card */}
              <div className="bg-ink text-cream rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-butter font-bold mb-3">
                  Free Quote
                </div>
                <h3 className="font-display font-black text-2xl leading-tight">
                  Chennai to {city}<br />
                  <span className="text-butter">{km} km</span>
                </h3>
                <p className="text-sm text-cream/70 mt-3 leading-relaxed">
                  Get a written quote within 15 minutes. No commission, no hidden charges.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold py-3.5 rounded-full text-sm w-full transition-colors"
                  >
                    <MessageCircle size={16} /> WhatsApp Quote
                  </a>
                  <a
                    href={telLink}
                    className="flex items-center justify-center gap-2 bg-cream/10 hover:bg-cream/15 border border-cream/20 text-cream font-semibold py-3.5 rounded-full text-sm w-full transition-colors"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white border border-ink/10 rounded-3xl p-6 space-y-4">
                {[
                  'IBA & ISO Certified',
                  'GPS tracking on every move',
                  'Transit insurance available',
                  'Door-to-door service',
                  'Written quote, no hidden fees',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-ink/75">
                    <CheckCircle size={15} className="text-rust shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              {/* Enquiry form */}
              <div className="rounded-3xl overflow-hidden border border-ink/10">
                <div className="bg-ink px-5 py-4">
                  <p className="font-display font-bold text-cream text-lg">Quick Enquiry</p>
                  <p className="text-xs text-cream/60 mt-0.5">We respond within 15 minutes</p>
                </div>
                <div className="bg-white p-4">
                  <EnquiryForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
