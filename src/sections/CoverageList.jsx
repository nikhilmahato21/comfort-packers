import { ArrowRight } from 'lucide-react';
import { LOCALITIES } from '../data/site';

export default function CoverageList({ onNavigate }) {
  return (
    <section id="coverage" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-butter/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-rust/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-rust mb-2">
              Coverage List
            </div>
            <h2 className="font-display font-black text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Location pages covered<br className="hidden sm:block" /> under Chennai
            </h2>
          </div>
          <span className="self-start sm:self-auto bg-butter text-ink font-black text-base px-5 py-2 rounded-full whitespace-nowrap">
            {LOCALITIES.length}+ areas
          </span>
        </div>

        {/* Pill grid */}
        <div className="flex flex-wrap gap-3">
          {LOCALITIES.map((loc) => (
            <button
              key={loc.slug}
              onClick={() => onNavigate('locality', loc.slug)}
              className="group inline-flex items-center gap-1.5 bg-cream hover:bg-ink border border-ink/12 hover:border-ink text-ink hover:text-cream text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
            >
              {loc.name}
              <ArrowRight
                size={13}
                className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
              />
            </button>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-sm text-muted">
          Don't see your area? We cover all of Chennai and surrounding districts.{' '}
          <a
            href="https://wa.me/919625872938"
            target="_blank"
            rel="noreferrer"
            className="text-rust font-semibold hover:underline"
          >
            WhatsApp us
          </a>{' '}
          and we'll confirm coverage within minutes.
        </p>
      </div>
    </section>
  );
}
