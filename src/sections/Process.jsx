import { PROCESS } from '../data/site';
import { SectionHeader } from './Services';

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          num="03"
          eyebrow="How it works"
          title={<>Four steps from <span className="italic font-medium">enquiry</span><br/>to doorstep delivery.</>}
          intro="No surprises. A clear, written process built around twelve years of shifting homes and offices from Chennai."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="relative bg-cream border border-ink/10 rounded-3xl p-6 lg:p-7 group hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-5xl text-ink/15 group-hover:text-butter transition-colors">
                  {p.step}
                </span>
                {i < PROCESS.length - 1 && (
                  <span className="hidden lg:block w-12 h-px bg-ink/15 group-hover:bg-cream/30" />
                )}
              </div>
              <h3 className="font-display font-black text-xl text-ink group-hover:text-cream">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70 group-hover:text-cream/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
