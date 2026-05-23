import { ArrowLeft, Phone, MessageCircle, CheckCircle, MapPin, ShieldCheck, Truck, Award, Star } from 'lucide-react';
import { LOCALITIES, COMPANY } from '../data/site';
import { buildWhatsAppLink, telLink } from '../lib/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import EnquiryForm from '../components/EnquiryForm';

export default function LocalityDetailPage({ slug, onBack, onNavigate }) {
  const locality = LOCALITIES.find((l) => l.slug === slug);

  if (!locality) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar onNavigate={onNavigate} onBack={onBack} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-display font-black text-ink">Area not found</p>
            <button onClick={onBack} className="mt-4 text-rust underline">← Back to home</button>
          </div>
        </div>
      </div>
    );
  }

  const { name } = locality;
  const waLink = buildWhatsAppLink(`Hi, I need Packers and Movers in ${name}, Chennai.`);

  const services = [
    { title: 'House Shifting',      desc: `Complete household relocation within ${name} and from ${name} to any city across India.` },
    { title: 'Car & Bike Transport', desc: `Safe vehicle shipping from ${name} to Bangalore, Hyderabad, Mumbai, Delhi and 45+ cities.` },
    { title: 'Office Relocation',   desc: `Weekend office shifts in and out of ${name} with IT equipment handling and zero downtime.` },
    { title: 'Loading & Unloading', desc: `Trained crew for packing, loading and unloading at your ${name} address — hourly or fixed rate.` },
    { title: 'Self Storage',        desc: `Short and long-term household goods storage with pickup from your ${name} doorstep.` },
    { title: 'Pet Relocation',      desc: `IATA-compliant pet transport from ${name} across India, with vet coordination and documentation.` },
  ];

  const whyUs = [
    { icon: <ShieldCheck size={22} />, title: 'IBA & ISO Certified',   body: 'Credentials accepted by PSU employers and banks for move reimbursement.' },
    { icon: <Truck size={22} />,       title: 'GPS on Every Truck',    body: `Every vehicle leaving ${name} carries live GPS. Track from pickup to delivery.` },
    { icon: <MapPin size={22} />,      title: 'Local ${name} Crew',    body: `Our crew knows ${name}'s lanes, buildings and parking — faster, zero confusion.` },
    { icon: <Star size={22} />,        title: '4.9 Star Rating',       body: '50,000+ moves across Chennai. Rated 4.9 by real customers, not bots.' },
    { icon: <Award size={22} />,       title: '12+ Years in Chennai',  body: 'Every Chennai monsoon, every Pongal rush — we have seen and handled it all.' },
    { icon: <CheckCircle size={22} />, title: 'Written Quote',         body: 'No verbal promises. You get a printed or PDF quote before we start packing.' },
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
            <ArrowLeft size={16} /> Back to all areas
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-butter/20 text-butter text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <MapPin size={12} /> {name}, Chennai
            </span>
            <span className="text-cream/50 text-xs">Tamil Nadu, India</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-tight">
            Packers and Movers<br />
            in <span className="italic font-medium text-butter">{name}</span>,<br />
            Chennai
          </h1>
          <p className="mt-5 text-cream/70 text-lg lg:text-xl italic">
            Local move, interstate move — handled right from your {name} doorstep
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

      {/* Content + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <div className="space-y-5">
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">
                If you are looking for reliable packers and movers in {name}, Chennai, Comfort Packers and Movers
                is your trusted local partner. We serve every street and society in {name} — from independent
                houses and apartments to office complexes and commercial spaces. Whether you are shifting within
                Chennai or relocating across India, our crew is at your door on time with all packing materials.
              </p>
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">
                At Comfort Packers and Movers, we handle your move with trained professionals who know {name} well.
                Our comprehensive services include secure multi-layer packing, careful furniture dismantling and
                reassembly, GPS-tracked vehicles and transparent pricing — with no hidden charges and no
                commission middlemen. We are IBA Approved and ISO Certified, which means your employer can
                reimburse your move cost without any documentation hassle.
              </p>
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">
                From the moment our crew arrives at your {name} address to the final delivery at your destination,
                you receive live WhatsApp updates and GPS tracking. Our team ensures a smooth, damage-free move
                every time — because your belongings deserve better than guesswork.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                Services in {name}, Chennai
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
                Why choose Comfort Packers in {name}?
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
                How your {name} move works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Free survey & written quote',  body: `A supervisor visits your ${name} home or does a video walkthrough. Locked written quote issued — no verbal surprises.` },
                  { step: '02', title: 'Packing at your doorstep',     body: `Crew arrives at your ${name} address with all materials. Room-by-room systematic packing, every item labelled.` },
                  { step: '03', title: 'GPS-tracked loading & transit', body: `Goods loaded on padded trucks with live GPS. You receive a tracking link the moment the vehicle moves.` },
                  { step: '04', title: 'Delivery & sign-off',          body: `Unloading, furniture placement and unpacking at destination. Final check and your sign-off collected.` },
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
              <div className="bg-ink text-cream rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-butter font-bold mb-3">Free Quote</div>
                <h3 className="font-display font-black text-2xl leading-tight">
                  Movers in<br /><span className="text-butter">{name}</span>
                </h3>
                <p className="text-sm text-cream/70 mt-3 leading-relaxed">
                  Written quote in 15 minutes. No hidden charges, no commission agents.
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

              <div className="bg-white border border-ink/10 rounded-3xl p-6 space-y-4">
                {[
                  'IBA & ISO Certified',
                  'GPS tracking on every move',
                  'Transit insurance available',
                  'Written quote, no hidden fees',
                  'Responds within 15 minutes',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-ink/75">
                    <CheckCircle size={15} className="text-rust shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

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
