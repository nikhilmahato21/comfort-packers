import { ShieldCheck, Award, MapPin, Users, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/site';
import { telLink, buildWhatsAppLink } from '../lib/whatsapp';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-butter/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left – story */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-rust font-bold">[ 00 ]</span>
              <span className="text-xs uppercase tracking-[0.3em] text-ink/60 font-semibold">
                About us
              </span>
            </div>

            <h2 className="font-display font-black text-ink text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Built on trust,<br />
              <span className="italic font-medium">move by move.</span>
            </h2>

            <p className="mt-6 text-ink/75 text-base lg:text-lg leading-relaxed">
              Comfort Packers and Movers was founded with one simple belief — every family deserves a
              stress-free move. What began as a small Chennai operation has grown into a full-service
              relocation company that ships households, vehicles, offices and pets across India from
              our base in Poonamallee, Chennai.
            </p>
            <p className="mt-4 text-ink/75 text-base lg:text-lg leading-relaxed">
              We are IBA Approved and ISO 9001:2015 Certified — not just as badges, but because our
              customers include PSU employees, defence personnel and corporate teams who depend on
              documentation that actually stands up to scrutiny. Every move gets a written quote,
              GPS-tracked vehicle and a direct WhatsApp line to our Chennai operations team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 bg-ink hover:bg-wabi text-cream font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              >
                <Phone size={16} /> {COMPANY.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-butter hover:bg-butterDeep text-ink font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right – owner card + stats */}
          <div className="space-y-5">

            {/* Owner card */}
            <div className="bg-ink text-cream rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-butter/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-butter font-bold mb-4">
                  Founder & Owner
                </div>
                <div className="flex items-center gap-4">
                  {/* Avatar initials */}
                  <div className="w-16 h-16 rounded-2xl bg-butter text-ink flex items-center justify-center font-display font-black text-2xl shrink-0">
                    NC
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl">{COMPANY.owner}</div>
                    <div className="flex items-center gap-1.5 text-cream/60 text-sm mt-1">
                      <MapPin size={13} className="text-butter" />
                      {COMPANY.ownerFrom}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-cream/75 text-sm leading-relaxed">
                  Originally from Bhiwani, Haryana, Naveen built Comfort Packers from the ground up in
                  Chennai — combining the discipline of North Indian work culture with deep knowledge
                  of South Indian relocation needs. His hands-on approach means every move is treated
                  as if it were his own family shifting.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-cream/50">
                  <MapPin size={12} />
                  <span>Office: {COMPANY.address}</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={20} />,      value: '12+',   label: 'Years of experience' },
                { icon: <Users size={20} />,      value: '50K+',  label: 'Moves completed' },
                { icon: <ShieldCheck size={20} />, value: 'IBA',  label: 'Approved & ISO certified' },
                { icon: <MapPin size={20} />,     value: '63+',   label: 'Chennai areas covered' },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-ink/10 rounded-2xl p-5">
                  <span className="text-rust">{s.icon}</span>
                  <div className="font-display font-black text-3xl text-ink mt-2">{s.value}</div>
                  <div className="text-xs text-muted mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
