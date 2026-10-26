import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import mata from './assets/mata.png';
import port1 from './assets/port-1.png';
import port2 from './assets/port-2.png';
import port3 from './assets/port-3.png';
import port4 from './assets/port-4.png';

const cards = [
  {
    title: 'Store T-shirt Website',
    img: port1,
    desc: 'Website toko kaos online dengan katalog produk, keranjang, dan halaman detail produk.',
    tech: ['React', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Slider Hero Mobile Legends',
    img: port2,
    desc: 'Hero slider interaktif bertema Mobile Legends dengan transisi halus antar hero.',
    tech: ['React', 'Swiper', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Company Website',
    img: port3,
    desc: 'Website company profile yang responsif dengan section layanan, tentang kami, dan kontak.',
    tech: ['React', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'FilFlix Website',
    img: port4,
    desc: 'Website katalog film dengan pencarian dan halaman detail film.',
    tech: ['React', 'REST API', 'Tailwind CSS'],
    link: '#',
  },
];

// Class harus ditulis lengkap agar terdeteksi Tailwind
const CARD_ANIM = {
  next: { out: 'animate-cardOutNext', in: 'animate-cardInNext' },
  prev: { out: 'animate-cardOutPrev', in: 'animate-cardInPrev' },
};

const CLOSE_MS = 300;
const SWITCH_MS = 200;

export const SecTheree = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [direction, setDirection] = useState('next');
  const [phase, setPhase] = useState('in'); // 'in' | 'out'
  const busy = useRef(false);
  const timers = useRef([]);

  const selected = selectedIndex !== null ? cards[selectedIndex] : null;

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  // Bersihkan timer saat unmount
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = (index) => {
    setDirection('next');
    setPhase('in');
    setIsClosing(false);
    setSelectedIndex(index);
  };

  const close = () => {
    if (busy.current) return;
    busy.current = true;
    setIsClosing(true);
    later(() => {
      setSelectedIndex(null);
      setIsClosing(false);
      busy.current = false;
    }, CLOSE_MS);
  };

  const go = (dir) => {
    if (busy.current || selectedIndex === null) return;
    busy.current = true;
    setDirection(dir);
    setPhase('out');
    later(() => {
      setSelectedIndex((i) => (dir === 'next' ? (i + 1) % cards.length : (i - 1 + cards.length) % cards.length));
      setPhase('in');
      busy.current = false;
    }, SWITCH_MS);
  };

  // Keyboard: Esc, ArrowLeft, ArrowRight
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') go('prev');
      if (e.key === 'ArrowRight') go('next');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  // Kunci scroll body saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <div id="portfolio" className="bg-[#19376D] relative pt-10 min-[800px]:pt-[120px] pb-20 overflow-hidden">
      <h1 className="text-center text-white text-[20px] min-[600px]:text-2xl font-semibold mb-8">My Best Selected Portfolio</h1>

      <div className="relative flex gap-6 animate-flowContainer hover:[animation-play-state:paused]">
        {[...cards, ...cards].map((card, index) => (
          <div key={index} onClick={() => open(index % cards.length)} className="min-w-[300px] max-w-[300px] bg-[#0B2447] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.03]">
            <div className="p-4 relative">
              <h2 className="text-[#A5D7E8] mb-2 text-lg font-medium">Web Design</h2>
              <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              <img src={mata} alt="mata" className="absolute right-4 top-4 w-[24px]" />
            </div>
            <img src={card.img} alt={card.title} className="w-full h-[200px] object-cover" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected &&
        createPortal(
          <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 ${isClosing ? 'animate-backdropOut' : 'animate-backdropIn'}`} onClick={close} role="dialog" aria-modal="true">
            {/* Panel: animasi buka/tutup 3D */}
            <div className={`relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-[#0B2447] rounded-xl shadow-2xl ${isClosing ? 'animate-modalOut' : 'animate-modalIn'}`} onClick={(e) => e.stopPropagation()}>
              <button onClick={close} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80" aria-label="Tutup">
                ✕
              </button>

              {/* Konten: animasi pindah card 3D */}
              <div className={CARD_ANIM[direction][phase]}>
                <div className="relative">
                  <img src={selected.img} alt={selected.title} className="w-full h-[240px] object-cover rounded-t-xl" />

                  <button
                    onClick={() => go('prev')}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl hover:bg-black/80 active:scale-95 transition"
                    aria-label="Project sebelumnya"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => go('next')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl hover:bg-black/80 active:scale-95 transition"
                    aria-label="Project berikutnya"
                  >
                    ›
                  </button>

                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
                    {selectedIndex + 1} / {cards.length}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-[#A5D7E8] text-sm font-medium mb-1">Web Design</h2>
                  <h3 className="text-white text-2xl font-semibold mb-3">{selected.title}</h3>
                  <p className="text-gray-300 mb-4">{selected.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-sm rounded-full bg-[#19376D] text-[#A5D7E8]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={selected.link} target="_blank" rel="noreferrer" className="inline-block px-5 py-2 rounded-lg bg-[#A5D7E8] text-[#0B2447] font-semibold hover:opacity-90">
                    Lihat Project
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
