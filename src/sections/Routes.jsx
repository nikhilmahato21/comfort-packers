import { MapPin, ArrowRight } from 'lucide-react';
import { ROUTES } from '../data/site';
import { SectionHeader } from './Services';
import { buildWhatsAppLink } from '../lib/whatsapp';

export default function Routes() {
  return (
    <section id="routes" className="py-20 lg:py-28 bg-ink text-cream relative overflow-hidden">
      {/* decorative */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-butter/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-num text-xs text-butter font-bold">[ 02 ]</span>
            <span className="text-xs uppercase tracking-[0.3em] text-cream/60 font-semibold">
              Where we move
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            From <span className="italic font-medium text-butter">Chennai</span>,<br/>
            to every Indian pincode.
          </h2>
          <p className="mt-5 text-cream/70 text-base lg:text-lg leading-relaxed max-w-2xl">
            Dedicated weekly trips on our top routes. Shared and full-truck-load options available
            for households, vehicles and offices.
          </p>
        </div>

        {/* Top routes - featured */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: 'Bangalore', km: '350 km', time: '1 Day' },
            { to: 'Hyderabad', km: '620 km', time: '1–2 Days' },
            { to: 'Mumbai', km: '1330 km', time: '3 Days' },
            { to: 'Delhi', km: '2180 km', time: '5 Days' },
          ].map((r) => (
            <a
              key={r.to}
              href={buildWhatsAppLink(`Hi, I want a quote for Packers and Movers Chennai to ${r.to}.`)}
              target="_blank"
              rel="noreferrer"
              className="group bg-wabi border border-cream/10 rounded-2xl p-5 hover:border-butter transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <MapPin size={18} className="text-butter" />
                <ArrowRight size={18} className="text-cream/40 group-hover:text-butter group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs text-cream/50 uppercase tracking-wider">Chennai →</div>
              <div className="font-display font-black text-2xl mt-1">{r.to}</div>
              <div className="mt-4 flex items-center gap-3 text-xs text-cream/60">
                <span>{r.km}</span>
                <span className="w-1 h-1 rounded-full bg-cream/30" />
                <span>{r.time}</span>
              </div>
            </a>
          ))}
        </div>

        {/* All routes grid */}
        <div className="mt-12">
          <div className="text-xs uppercase tracking-[0.25em] text-cream/50 font-semibold mb-5">
            + 30 more destinations
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-2.5">
            {ROUTES.map((r) => (
              <a
                key={r}
                href={buildWhatsAppLink(`Hi, I need a quote for Packers and Movers ${r}.`)}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cream/75 hover:text-butter transition-colors py-1 flex items-center gap-1.5 group"
              >
                <span className="w-1 h-1 rounded-full bg-cream/30 group-hover:bg-butter transition-colors" />
                {r}
              </a>
            ))}
          </div>
        </div>

        {/* Specialty highlights */}
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          <Specialty
            title="Bike Transport"
            sub="Chennai → Bangalore / Hyderabad"
            body="Most-booked routes for bike shipping. Wooden crating, fuel drained, fully insured."
          />
          <Specialty
            title="Self Storage in Chennai"
            sub="Household goods storage"
            body="CCTV monitored, pest-treated units in Chennai. Weekly &amp; monthly plans."
          />
          <Specialty
            title="Office &amp; Pet Relocation"
            sub="Chennai → Pan-India"
            body="Weekend office shifts and IATA-style pet transport with vet liaison."
          />
        </div>
      </div>
    </section>
  );
}

function Specialty({ title, sub, body }) {
  return (
    <div className="bg-wabi border border-cream/10 rounded-3xl p-6">
      <div className="text-xs uppercase tracking-wider text-butter font-bold">{sub}</div>
      <h3 className="font-display font-black text-2xl mt-2">{title}</h3>
      <p className="mt-3 text-sm text-cream/70 leading-relaxed">{body}</p>
    </div>
  );
}
