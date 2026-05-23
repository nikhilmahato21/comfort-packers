import { ArrowUpRight } from 'lucide-react';
import { KEYWORD_DATA } from '../data/site';

export default function KeywordsBlock({ onNavigate }) {
  return (
    <section className="bg-cream py-16 lg:py-20 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {KEYWORD_DATA.map((k) => (
            <button
              key={k.slug}
              onClick={() => onNavigate('keyword', k.slug)}
              className="group inline-flex items-center gap-1 text-xs lg:text-sm bg-white border border-ink/10 text-ink/80 px-3 py-1.5 rounded-full hover:bg-ink hover:text-cream hover:border-ink transition-all duration-200"
            >
              {k.text}
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
