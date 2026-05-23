import { ArrowLeft, Phone, MessageCircle, CheckCircle, ShieldCheck, Truck, Award, Star } from 'lucide-react';
import { SERVICE_CARDS, SERVICE_DETAILS, COMPANY } from '../data/site';
import { buildWhatsAppLink, telLink } from '../lib/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import EnquiryForm from '../components/EnquiryForm';

const ICONS_MAP = {
  home: '🏠', car: '🚗', bike: '🏍️', briefcase: '💼',
  paw: '🐾', box: '📦', building: '🏢', truck: '🚛',
};

export default function ServiceDetailPage({ slug, onBack, onNavigate }) {
  const card = SERVICE_CARDS.find((s) => s.slug === slug);
  const detail = SERVICE_DETAILS[slug];

  if (!card || !detail) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar onNavigate={onNavigate} onBack={onBack} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-display font-black text-ink">Service not found</p>
            <button onClick={onBack} className="mt-4 text-rust underline">← Back to home</button>
          </div>
        </div>
      </div>
    );
  }

  const waLink = buildWhatsAppLink(`Hi, I want a quote for ${card.title} from Chennai.`);

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
            <ArrowLeft size={16} /> Back to all services
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-butter/20 text-butter text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {detail.subtitle}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-tight">
            {detail.headline}
          </h1>
          <p className="mt-5 text-cream/70 text-lg lg:text-xl italic">
            Chennai's trusted relocation experts — since 2012
          </p>

          {/* Quick bullets */}
          <div className="mt-8 flex flex-wrap gap-3">
            {card.bullets.map((b) => (
              <span key={b} className="flex items-center gap-2 bg-cream/10 border border-cream/15 text-cream/90 text-sm px-4 py-2 rounded-full">
                <CheckCircle size={14} className="text-butter" /> {b}
              </span>
            ))}
          </div>

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

          {/* Left column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Intro */}
            <div>
              <p className="text-ink/80 text-base lg:text-lg leading-relaxed">{detail.intro}</p>
              <p className="mt-5 text-ink/80 text-base lg:text-lg leading-relaxed">{detail.intro2}</p>
            </div>

            {/* What's included */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                What's included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {detail.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white border border-ink/10 rounded-2xl">
                    <CheckCircle size={16} className="text-rust mt-0.5 shrink-0" />
                    <span className="text-sm text-ink/75 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                How it works
              </h2>
              <div className="space-y-4">
                {detail.process.map((p) => (
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

            {/* Why choose us */}
            <div>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-ink mb-5">
                Why Comfort Packers?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={22} />, title: 'IBA & ISO Certified', body: 'Our certifications are accepted by PSU banks and corporate employers for reimbursement.' },
                  { icon: <Truck size={22} />, title: 'GPS on Every Move', body: 'Every vehicle carries a live GPS tracker. You follow your goods from Chennai to destination.' },
                  { icon: <Award size={22} />, title: '12+ Years in Chennai', body: 'We have handled 50,000+ moves — every type, every distance, every season.' },
                  { icon: <Star size={22} />, title: '4.9 Star Rating', body: 'Genuine reviews from real customers. No boosted ratings, no fake testimonials.' },
                ].map((w) => (
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
                  {card.title}
                </h3>
                <p className="text-sm text-cream/70 mt-3 leading-relaxed">
                  Get a written quote in 15 minutes. No hidden charges, no commission agents.
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
                  'Written quote, no hidden fees',
                  'Responds within 15 minutes',
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
