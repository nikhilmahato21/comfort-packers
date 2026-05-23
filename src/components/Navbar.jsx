import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { COMPANY } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';

export default function Navbar({ onNavigate, onBack }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about',    label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#routes',   label: 'Routes' },
    { href: '#coverage', label: 'Coverage' },
    { href: '#faq',      label: 'FAQs' },
    { href: '#enquiry',  label: 'Enquiry' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { if (onBack) { e.preventDefault(); onBack(); } }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-ink flex items-center justify-center text-butter font-display font-black text-xl">
            C
          </div>
          <div className="leading-tight">
            <div className="font-display font-black text-ink text-lg lg:text-xl tracking-tight">
              Comfort
            </div>
            <div className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-muted -mt-1">
              Packers &amp; Movers
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-ink relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-butter group-hover:w-full transition-all"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Phone size={16} />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="bg-butter hover:bg-butterDeep text-ink font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-ink text-cream"
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-ink/10 px-5 py-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink py-2 border-b border-ink/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={telLink}
              className="flex items-center gap-2 text-base font-semibold text-ink py-2"
            >
              <Phone size={18} />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="bg-butter text-ink font-semibold text-center py-3 rounded-full"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
