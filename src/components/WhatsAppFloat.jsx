import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 rounded-full bg-green-400/50 animate-ping" />
    </a>
  );
}
