import {
  Home, Car, Bike, Briefcase, PawPrint, Box, Building2, Truck, ArrowUpRight,
} from 'lucide-react';
import { SERVICE_CARDS } from '../data/site';
import { buildWhatsAppLink } from '../lib/whatsapp';

const ICONS = {
  home: Home, car: Car, bike: Bike, briefcase: Briefcase,
  paw: PawPrint, box: Box, building: Building2, truck: Truck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          num="01"
          eyebrow="What we do"
          title={<>End-to-end relocation,<br/><span className="italic font-medium">handled by Chennai pros.</span></>}
          intro="From packing the first carton in Chennai to unloading the last box at your destination — Comfort Packers and Movers handles every step in-house."
        />

        <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_CARDS.map((s, i) => {
            const Icon = ICONS[s.icon] || Box;
            return (
              <a
                key={s.slug}
                href={buildWhatsAppLink(`Hi, I want a quote for ${s.title} from Chennai.`)}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-white border border-ink/10 rounded-3xl p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-ink text-butter flex items-center justify-center group-hover:bg-butter group-hover:text-ink transition-colors">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono text-muted tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {s.blurb}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-xs text-ink/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-rust" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-ink/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Get a quote
                  </span>
                  <ArrowUpRight size={18} className="text-ink group-hover:rotate-45 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ num, eyebrow, title, intro, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      <div className="flex items-center gap-3 mb-4">
        <span className="section-num text-xs text-rust font-bold">[ {num} ]</span>
        <span className="text-xs uppercase tracking-[0.3em] text-ink/60 font-semibold">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-black text-ink text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-ink/70 text-base lg:text-lg leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}
