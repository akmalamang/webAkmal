import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uiUx from './assets/ui ux.png';
import mask from './assets/Mask group.png';
import gambar1 from './assets/gambar-2 1.png';
import gambar2 from './assets/gamabr-3 1.png';

export const SecTwo = () => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);

  const [isUiUxVisible, setIsUiUxVisible] = useState(true);
  const [isFrontEndVisible, setIsFrontEndVisible] = useState(true);
  const [isMobileAppVisible, setIsMobileAppVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100', 'animated');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.add('animate-fadeInRight', 'opacity-100', 'animated');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);

    return () => {
      if (sec1Ref.current) observer.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer.unobserve(sec2Ref.current);
    };
  }, []);

  // === Komponen Card Reusable ===
  const ServiceCard = ({ img, title, projects, visible, onToggle }) => (
    <div className="relative flex items-center gap-4 p-4 rounded-lg hover:bg-[#19376D] transition-all duration-500">
      <img src={img} alt={title} className="max-[600px]:w-20 rounded-md object-cover" />
      <div className="flex-grow">
        <h3 className="text-2xl max-[400px]:text-[20px] font-bold text-[#FFFFFF] cursor-pointer">{title}</h3>
        <p className="text-sm text-[#B3B3B3]">{projects} + Project</p>

        {/* ✨ Framer Motion Fade In / Out */}
        <AnimatePresence mode="wait">
          {visible && (
            <motion.p key="content" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="text-sm text-[#B3B3B3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores tempora.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ✨ Animasi rotasi Mask */}
      <motion.img src={mask} alt="" onClick={onToggle} className="max-[600px]:w-5 cursor-pointer" animate={{ rotate: visible ? 180 : 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
    </div>
  );

  return (
    <div id="about" className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[80px]">
      {/* Kiri */}
      <div ref={sec1Ref}>
        <h2 className="text-[28px] sm:text-[48px] font-bold mb-6 text-[#FFFFFF]">What can I do for your needs</h2>
        <p className="sm:text-[20px] mb-10 sm:w-[350px] text-[#B3B3B3]">Below are some who have collaborated with me</p>

        <div className="w-[350px] max-[400px]:w-[100%] max-[400px]:gap-10 flex gap-16 flex-wrap">
          {[
            { num: '10 +', label: 'project compiled' },
            { num: '20 +', label: 'Community network' },
            { num: '12 +', label: 'Contact remote' },
            { num: '3 +', label: 'your experience' },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl max-[400px]:text-2xl font-bold text-[#A5D7E8]">{item.num}</h3>
              <p className="text-sm mt-2 text-[#B3B3B3]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kanan */}
      <div ref={sec2Ref} className="space-y-2">
        <ServiceCard img={uiUx} title="UI / UX Design" projects="10" visible={isUiUxVisible} onToggle={() => setIsUiUxVisible(!isUiUxVisible)} />
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>

        <ServiceCard img={gambar1} title="Front End Develop" projects="12" visible={isFrontEndVisible} onToggle={() => setIsFrontEndVisible(!isFrontEndVisible)} />
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>

        <ServiceCard img={gambar2} title="Mobile App Develop" projects="5" visible={isMobileAppVisible} onToggle={() => setIsMobileAppVisible(!isMobileAppVisible)} />
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>
      </div>
    </div>
  );
};
