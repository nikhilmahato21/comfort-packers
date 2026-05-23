import { KEYWORDS } from '../data/site';

export default function KeywordsBlock() {
  return (
    <section className="bg-cream py-16 lg:py-20 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-rust font-bold mb-2">
              Chennai. Keywords.
            </div>
            <h2 className="font-display font-black text-3xl lg:text-4xl text-ink leading-tight">
              Routes we are searched for
            </h2>
          </div>
          <p className="text-sm text-ink/60 max-w-md">
            We rank on Google for these Chennai relocation searches — and we deliver on them every day.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {KEYWORDS.map((k) => (
            <span
              key={k}
              className="text-xs lg:text-sm bg-white border border-ink/10 text-ink/80 px-3 py-1.5 rounded-full hover:bg-ink hover:text-cream transition-colors cursor-default"
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
