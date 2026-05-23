import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/site';
import { SectionHeader } from './Services';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              num="05"
              eyebrow="Frequently asked"
              title={<>Chennai moving<br/><span className="italic font-medium">questions, answered.</span></>}
              intro="Still unsure? WhatsApp 9625872938 — a real Chennai team member will reply within minutes."
            />
          </div>

          <div className="lg:col-span-7 mt-4 lg:mt-0">
            <div className="border-t border-ink/15">
              {FAQS.map((f, i) => (
                <div key={i} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full py-5 lg:py-6 flex items-start gap-5 text-left group"
                  >
                    <span className="font-mono text-xs text-rust mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-display font-bold text-lg lg:text-xl text-ink leading-snug">
                      {f.q}
                    </span>
                    <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-ink text-cream flex items-center justify-center">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  {open === i && (
                    <div className="pb-6 pl-9 lg:pl-10 pr-12 text-ink/75 leading-relaxed animate-fade-up">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
