import React, { useEffect, useRef, useState } from 'react';
import uiUx from './assets/ui ux.png';
import mask from './assets/Mask group.png';
import gambar1 from './assets/gambar-2 1.png';
import gambar2 from './assets/gamabr-3 1.png';

export const SecTwo = () => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const [isParagraphVisible, setIsParagraphVisible] = useState(true); // State untuk kontrol visibilitas paragraf
  const [isUiUxvisible, setIsUiUxVisible] = useState(true);
  const [isFrontEndVisible, setIsFrontEndVisible] = useState(true);
  const [isMobileAppVisible, setIsMobileAppVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              // sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100');
              if (!sec1Ref.current.classList.contains('animated')) {
                sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100', 'animated');
              }
            } else if (entry.target === sec2Ref.current) {
              if (!sec2Ref.current.classList.contains('animated')) {
                sec2Ref.current.classList.add('animate-fadeInRight', 'opacity-100', 'animated');
              }
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

  const toggleVisibility = () => {
    setIsParagraphVisible((prev) => !prev); // Toggle state untuk visibilitas paragraf
  };

  return (
    <div id="about" className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[80px]">
      {/* Bagian kiri */}
      <div ref={sec1Ref} className="">
        <h2 className="text-[28px] sm:text-[48px] font-bold mb-6 text-[#FFFFFF]">What can I do for your needs</h2>
        <p className="sm:text-[20px] mb-10 sm:w-[350px] text-[#B3B3B3]">Below are some who have collaborated with me</p>
        <div className="w-[350px] max-[400px]:w-[100%] flex gap-16 flex-wrap">
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]">10 +</h3>
            <p className="text-sm mt-2 text-[#B3B3B3]">project compiled</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]">20 +</h3>
            <p className="text-sm mt-2 text-[#B3B3B3]">Community network</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]">12 +</h3>
            <p className="text-sm mt-2 text-[#B3B3B3]">Contact remote</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]">3 +</h3>
            <p className="text-sm mt-2 text-[#B3B3B3]">your experience</p>
          </div>
        </div>
      </div>

      {/* Bagian kanan */}
      <div ref={sec2Ref} className="space-y-2">
        <div className="relative flex items-center gap-4 p-4 rounded-lg hover:bg-[#19376D]">
          <img src={uiUx} alt="UI/UX Design" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF] cursor-pointer" onClick={() => setIsParagraphVisible(true)}>
              UI / UX Design
            </h3>
            <p className="text-sm text-[#B3B3B3]">10 + Project</p>
            <p className={`text-sm text-[#B3B3B3] ${isParagraphVisible ? '' : 'hidden'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolore est minima excepturi quo perspiciatis nam iste eligendi ratione sunt magni aut eaque saepe iusto.
            </p>
          </div>
          <img src={mask} alt="" className="max-[600px]:w-5 cursor-pointer" onClick={toggleVisibility} />
        </div>
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>
        {/* Front End Develop */}
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#19376D]">
          <img src={gambar1} alt="Front End Develop" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF]">Front End Develop</h3>
            <p className="text-sm text-[#B3B3B3]">12 + Project</p>
          </div>
          <img src={mask} alt="" className="max-[600px]:w-5" />
        </div>
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>
        {/* Mobile App Develop */}
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#19376D]">
          <img src={gambar2} alt="Mobile App Develop" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF]">Mobile App Develop</h3>
            <p className="text-sm text-[#B3B3B3]">5 + Project</p>
          </div>
          <img src={mask} alt="" className="max-[600px]:w-5" />
        </div>
        <div className="w-full bg-[#B3B3B3] h-[2px] ml-4"></div>
      </div>
    </div>
  );
};
