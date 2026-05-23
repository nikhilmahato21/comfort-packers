import { Phone, MessageCircle, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { COMPANY } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';
import EnquiryForm from '../components/EnquiryForm';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-grain opacity-[0.35] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-butter/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-rust/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* Certifications strip */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge icon={<ShieldCheck size={14} />} text="IBA Approved" />
              <Badge icon={<ShieldCheck size={14} />} text="ISO Certified" />
              <Badge icon={<MapPin size={14} />} text="Based in Chennai" />
              <Badge icon={<Truck size={14} />} text="Live GPS Tracking" />
            </div>

            <h1 className="font-display font-black text-ink leading-[0.95] tracking-tight text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px]">
              Chennai’s
              <br />
              most <span className="italic font-medium">trusted</span>
              <br />
              packers <span className="relative inline-block">
                <span className="relative z-10">&amp; movers.</span>
                <span className="absolute left-0 bottom-1 lg:bottom-2 w-full h-3 lg:h-5 bg-butter -z-0"></span>
              </span>
            </h1>

            <p className="mt-6 lg:mt-7 text-ink/75 text-lg lg:text-xl max-w-xl leading-relaxed">
              House shifting, car &amp; bike transport, office relocation, pet relocation and self storage —
              from <strong className="text-ink">Chennai to all over India</strong>, with live tracking and
              transparent pricing.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 bg-rust hover:bg-rustDeep text-white font-semibold px-6 py-4 rounded-full shadow-btn transition-colors text-base"
              >
                <Phone size={18} /> Call {COMPANY.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-ink hover:bg-wabi text-cream font-semibold px-6 py-4 rounded-full transition-colors text-base"
              >
                <MessageCircle size={18} /> WhatsApp Quote
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-10 lg:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4 border-t border-ink/10 pt-8">
              <Stat value="12+" label="Years in Chennai" />
              <Stat value="50K+" label="Moves completed" />
              <Stat value="4.9" label="Customer rating" />
              <Stat value="34+" label="Cities served" />
            </div>
          </div>

          {/* Right: enquiry form */}
          <div id="enquiry-top" className="lg:col-span-5">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur border border-ink/10 text-ink text-xs font-semibold px-3 py-1.5 rounded-full">
      <span className="text-rust">{icon}</span> {text}
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display font-black text-3xl lg:text-4xl text-ink leading-none">
        {value}
      </div>
      <div className="text-xs text-muted mt-1.5 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
