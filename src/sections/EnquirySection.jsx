import EnquiryForm from '../components/EnquiryForm';
import { Phone, MessageCircle, ShieldCheck, Truck, Award } from 'lucide-react';
import { COMPANY } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';

export default function EnquirySection() {
  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-ink text-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-rust/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-butter/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-butter font-bold mb-4">
            [ Get a Free Quote ]
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Ready to move<br/>
            from Chennai?
          </h2>
          <p className="mt-5 text-cream/75 text-base lg:text-lg leading-relaxed max-w-xl">
            Talk to a real human in our Chennai office. We give written quotes,
            no commission middlemen, no fake low-balling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telLink}
              className="inline-flex items-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold px-6 py-4 rounded-full text-base"
            >
              <Phone size={18} /> Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/15 border border-cream/20 text-cream font-semibold px-6 py-4 rounded-full text-base"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            <Bullet icon={<ShieldCheck size={20} />} title="IBA &amp; ISO" sub="Certified standards" />
            <Bullet icon={<Truck size={20} />} title="Live tracking" sub="GPS on every move" />
            <Bullet icon={<Award size={20} />} title="12+ years" sub="Chennai-headquartered" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

function Bullet({ icon, title, sub }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-10 h-10 rounded-xl bg-cream/10 border border-cream/15 flex items-center justify-center text-butter">
        {icon}
      </span>
      <div>
        <div className="font-display font-bold text-cream">{title}</div>
        <div className="text-xs text-cream/60">{sub}</div>
      </div>
    </div>
  );
}
