import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY, SERVICES_LIST, ROUTES } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      {/* Massive wordmark */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-20">
        <div className="font-display font-black text-ink leading-none tracking-tighter text-[18vw] lg:text-[14vw] xl:text-[200px] select-none">
          comfort.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-10 pb-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="font-display font-black text-2xl text-ink leading-tight">
            {COMPANY.name}
          </div>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed max-w-sm">
            IBA Approved &amp; ISO Certified packers and movers based in Chennai.
            Serving households, vehicles, offices and pets — Chennai to all over India.
          </p>

          <div className="mt-6 space-y-3">
            <a href={telLink} className="flex items-center gap-3 text-sm font-semibold text-ink">
              <span className="w-8 h-8 rounded-lg bg-ink text-butter flex items-center justify-center">
                <Phone size={14} />
              </span>
              {COMPANY.phoneDisplay}
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-ink">
              <span className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
                <MessageCircle size={14} />
              </span>
              WhatsApp
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-ink">
              <span className="w-8 h-8 rounded-lg bg-ink/10 text-ink flex items-center justify-center">
                <Mail size={14} />
              </span>
              {COMPANY.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-ink">
              <span className="w-8 h-8 rounded-lg bg-ink/10 text-ink flex items-center justify-center">
                <MapPin size={14} />
              </span>
              Chennai, Tamil Nadu, India
            </div>
          </div>
        </div>

        <FooterCol title="Services" items={SERVICES_LIST.slice(0, 7).map(s => ({ label: s }))} />
        <FooterCol title="Top Routes from Chennai" items={ROUTES.slice(0, 10).map(r => ({ label: r }))} />

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
            Certified
          </div>
          <div className="flex flex-col gap-2">
            <Badge label="IBA Approved" />
            <Badge label="ISO 9001:2015" />
            <Badge label="GST Registered" />
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 py-5 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink/60">
          <div>© {new Date().getFullYear()} Comfort Packers and Movers. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Made with care in Chennai 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="lg:col-span-3">
      <div className="text-xs uppercase tracking-[0.25em] font-bold text-ink/60 mb-4">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href || '#'} className="text-sm text-ink/80 hover:text-rust transition-colors">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="inline-block bg-ink text-cream text-xs font-semibold px-3 py-1.5 rounded-full text-center">
      {label}
    </span>
  );
}
