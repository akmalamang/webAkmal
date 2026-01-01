import React from 'react';
import mata from './assets/mata.png';
import port1 from './assets/port-1.png';
import port2 from './assets/port-2.png';
import port3 from './assets/port-3.png';
import port4 from './assets/port-4.png';

export const SecTheree = () => {
  const cards = [
    { title: 'Store T-shirt Website', img: port1 },
    { title: 'Slider Hero Mobile Legends', img: port2 },
    { title: 'Company Website', img: port3 },
    { title: 'FilFlix Website', img: port4 },
  ];

  return (
    <div id="portfolio" className="bg-[#19376D] relative pt-10 min-[800px]:pt-[120px] pb-20 overflow-hidden">
      <h1 className="text-center text-white text-[20px] min-[600px]:text-2xl font-semibold mb-8">My Best Selected Portfolio</h1>

      {/* Wrapper animasi bergerak */}
      <div className="relative flex gap-6 animate-flowContainer">
        {/* Duplicate isi supaya animasi terlihat seamless */}
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px] bg-[#0B2447] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 relative">
              <h2 className="text-[#A5D7E8] mb-2 text-lg font-medium">Web Design</h2>
              <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              <img src={mata} alt="mata" className="absolute right-4 top-4 w-[24px]" />
            </div>
            <img src={card.img} alt={card.title} className="w-full h-[200px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
