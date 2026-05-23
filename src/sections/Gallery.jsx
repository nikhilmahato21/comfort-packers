import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const IMAGES = [
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531159/WhatsApp_Image_2026-05-23_at_15.14.14_1_ni62ss.jpg',  alt: 'Comfort Packers team packing household goods' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531159/WhatsApp_Image_2026-05-23_at_15.14.15_1_jshumk.jpg',  alt: 'Loading goods onto GPS-tracked truck' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531159/WhatsApp_Image_2026-05-23_at_15.14.14_vdi2sz.jpg',    alt: 'Careful furniture wrapping and packing' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531159/WhatsApp_Image_2026-05-23_at_15.14.12_h7ca8x.jpg',    alt: 'Vehicle transport and logistics' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531158/WhatsApp_Image_2026-05-23_at_15.14.15_vx2ixd.jpg',    alt: 'Secure packing with branded cartons' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531158/WhatsApp_Image_2026-05-23_at_15.14.13_l9p8ua.jpg',    alt: 'Professional crew at work in Chennai' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531158/WhatsApp_Image_2026-05-23_at_15.14.17_tml9uo.jpg',    alt: 'Office relocation and equipment handling' },
  { src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779531158/WhatsApp_Image_2026-05-23_at_15.14.13_1_vidpcn.jpg',  alt: 'Safe bike transport with wooden crating' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const open  = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = () => setLightbox((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next  = () => setLightbox((i) => (i + 1) % IMAGES.length);

  const handleKey = (e) => {
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-butter/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-rust font-bold">[ 05 ]</span>
              <span className="text-xs uppercase tracking-[0.3em] text-ink/60 font-semibold">Our work</span>
            </div>
            <h2 className="font-display font-black text-ink text-4xl sm:text-5xl leading-tight">
              Moves we're<br />
              <span className="italic font-medium">proud of.</span>
            </h2>
          </div>
          <p className="text-sm text-ink/60 max-w-xs leading-relaxed">
            Real photos from real moves — households, vehicles and offices shifted safely from Chennai.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {IMAGES.map((img, i) => {
            /* Give first and fifth images a taller span for visual variety */
            const tall = i === 0 || i === 4;
            return (
              <button
                key={img.src}
                onClick={() => open(i)}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-ink/10 ${tall ? 'row-span-2' : 'row-span-1'}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2.5">
                    <ZoomIn size={18} className="text-ink" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
          onClick={close}
          onKeyDown={handleKey}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <img
            src={IMAGES[lightbox].src}
            alt={IMAGES[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/60 text-sm font-mono">
            {lightbox + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
