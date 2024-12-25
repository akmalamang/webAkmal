import React, { useEffect, useRef } from 'react';

export const SecTwo = () => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.add('animate-fadeInRight', 'opacity-100');
            }
          } else {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.remove('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.remove('animate-fadeInRight', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.2 } // Detect when 20% of the element is visible
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);

    return () => {
      if (sec1Ref.current) observer.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer.unobserve(sec2Ref.current);
    };
  }, []);
  return (
    <div id="about" className=" p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[80px]">
      {' '}
      {/* Bagian kiri */}{' '}
      <div ref={sec1Ref} className="">
        <h2 className="text-[28px] sm:text-[48px] font-bold mb-6 text-[#FFFFFF]"> What can I do for your needs </h2>
        <p className="sm:text-[20px] mb-10 sm:w-[350px] text-[#B3B3B3] "> Below are some who have collaborated with me </p>
        <div className="w-[350px] max-[400px]:w-[100%] flex gap-16 flex-wrap">
          {' '}
          {/* Statistik */}{' '}
          <div className="">
            <h3 className="text-3xl font-bold  text-[#A5D7E8] max-[400px]:text-[20px]"> 10 + </h3> <p className="text-sm mt-2 text-[#B3B3B3]"> project compiled </p>{' '}
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]"> 20 + </h3> <p className="text-sm mt-2 text-[#B3B3B3]"> Community network </p>{' '}
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]"> 12 + </h3> <p className="text-sm mt-2 text-[#B3B3B3]"> Contact remote </p>{' '}
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-[#A5D7E8] max-[400px]:text-[20px]"> 3 + </h3> <p className="text-sm mt-2 text-[#B3B3B3]"> your experience </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>
      {/* Bagian kanan */}{' '}
      <div ref={sec2Ref} className="space-y-2">
        {/* UI/UX Design */}{' '}
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#19376D]">
          <img src="/img/ui ux.png" alt="UI/UX Design" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF]"> UI / UX Design </h3> <p className="text-sm text-[#B3B3B3]"> 10 + Project </p>{' '}
          </div>{' '}
          <img src="/img/Mask group.png" alt="" className="max-[600px]:w-5" />
        </div>
        <div className="w-[full] bg-[#B3B3B3] h-[2px] ml-4"></div>
        {/* Front End Develop */}{' '}
        <div className="flex items-center gap-4  p-4 rounded-lg hover:bg-[#19376D]">
          <img src="/img/gambar-2 1.png" alt="Front End Develop" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF]"> Front End Develop </h3> <p className="text-sm text-[#B3B3B3]"> 12 + Project </p>{' '}
          </div>{' '}
          <img src="/img/Mask group.png" alt="" className="max-[600px]:w-5" />
        </div>
        <div className="w-[full] bg-[#B3B3B3] h-[2px] ml-4"></div>
        {/* Mobile App Develop */}{' '}
        <div className="flex items-center gap-4  p-4 rounded-lg hover:bg-[#19376D]">
          <img src="/img/gamabr-3 1.png" alt="Mobile App Develop" className="max-[600px]:w-20 max-[600px]:h-20 rounded-md object-cover" />
          <div className="flex-grow">
            <h3 className="max-[600px]:text-[20px] text-2xl font-bold text-[#FFFFFF]"> Mobile App Develop </h3> <p className="text-sm text-[#B3B3B3]"> 5 + Project </p>{' '}
          </div>{' '}
          <img src="/img/Mask group.png" alt="" className="max-[600px]:w-5" />
        </div>{' '}
        <div className="w-[full] bg-[#B3B3B3] h-[2px] ml-4"></div>
      </div>{' '}
    </div>
  );
};
