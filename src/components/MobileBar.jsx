import { Phone } from 'lucide-react';
import { COMPANY } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';

export default function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-cream border-t border-ink/10 px-3 py-2.5 flex gap-2 shadow-[0_-10px_20px_-12px_rgba(14,27,44,0.15)]">
      <a
        href={telLink}
        className="flex-1 bg-rust hover:bg-rustDeep text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-butter hover:bg-butterDeep text-ink font-semibold py-3 rounded-2xl flex items-center justify-center gap-2"
      >
        Get Quote
      </a>
    </div>
  );
}
