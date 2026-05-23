export default function TrustBar() {
  const items = [
    'IBA Approved',
    'ISO 9001 : 2015',
    'GST Registered',
    'Insurance Partner',
    '50,000+ Moves',
    'Live GPS Tracking',
    'Chennai Headquarters',
    'Pan-India Network',
  ];
  return (
    <section className="bg-ink text-cream py-5 overflow-hidden border-y border-cream/10">
      <div className="flex no-scrollbar overflow-hidden">
        <div className="flex animate-marquee shrink-0 min-w-full items-center justify-around gap-12 px-6">
          {items.map((t, i) => (
            <Item key={i} text={t} />
          ))}
        </div>
        <div className="flex animate-marquee shrink-0 min-w-full items-center justify-around gap-12 px-6">
          {items.map((t, i) => (
            <Item key={`d-${i}`} text={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ text }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-butter" />
      <span className="font-display font-medium text-base tracking-tight">{text}</span>
    </div>
  );
}
