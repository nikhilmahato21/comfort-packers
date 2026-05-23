import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/site';
import { SectionHeader } from './Services';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-butter/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              num="04"
              eyebrow="Said by Chennai movers"
              title={<>Rated <span className="italic font-medium">4.9 / 5</span><br/>by 1,284 customers.</>}
            />
          </div>
          <div className="lg:col-span-5 flex items-center gap-4 lg:justify-end">
            <div className="flex items-center -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-ink border-2 border-cream flex items-center justify-center font-display font-bold text-butter">
                  {String.fromCharCode(64+i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={14} className="fill-rust text-rust" />
                ))}
              </div>
              <div className="text-xs text-ink/70 mt-1">From Google &amp; Justdial</div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-cream border border-ink/10 rounded-3xl p-6 relative overflow-hidden"
            >
              <Quote size={32} className="text-butter mb-4" />
              <p className="text-sm text-ink/85 leading-relaxed">
                {t.text}
              </p>
              <div className="mt-5 pt-5 border-t border-ink/10">
                <div className="font-display font-bold text-ink">{t.name}</div>
                <div className="text-xs text-muted mt-0.5">{t.move}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
