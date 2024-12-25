import React, { useRef, useEffect } from 'react';

export const SecKotakThree = () => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Top = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.add('animate-fadeInRight', 'opacity-100');
            } else if (entry.target === sec3Top.current) {
              sec3Top.current.classList.add('animate-fadeInTop', 'opacity-100');
            }
          } else {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.remove('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.remove('animate-fadeInRight', 'opacity-100');
            } else if (entry.target === sec3Top.current) {
              sec3Top.current.classList.remove('animate-fadeInTop', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.2 } // Detect when 20% of the element is visible
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);
    if (sec3Top.current) observer.observe(sec3Top.current);

    return () => {
      if (sec1Ref.current) observer.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer.unobserve(sec2Ref.current);
      if (sec3Top.current) observer.unobserve(sec3Top.current);
    };
  }, []);
  return (
    <div className="max-[]:">
      <section className="grid grid-cols-1 sm:grid-cols-3 max-[1024px]:gap-4 justify-items-center max-[1008px]:static max-[1008px]:mb-[50px] relative z-30 top-20">
        <div ref={sec1Ref} className="flex flex-col gap-4 text-[#ffffff] bg-[#19376D] lg:w-[369px] lg:h-[409px] md:w-[269px] md:h-[309px]  shadow-md shadow-[#A5D7E8]">
          <img src="/public/img/i-web.png" alt="" className="w-[45px] h-[45px] ml-5 mt-5" />
          <h2 className="font-bold ml-5 text-[24px]">UI/UX Design</h2>
          <p className="lg:w-[200px] text-[#DBDBDB] ml-5 text-[17px] mb-4 min-[678px]:mb-0 min-[678px]:text-[20px]">Below are some who have collaborated with me</p>
        </div>
        <div ref={sec3Top} className="flex flex-col gap-4 text-[#ffffff] bg-[#19376D] lg:w-[369px] lg:h-[409px] md:w-[269px] md:h-[309px]  shadow-md shadow-[#A5D7E8]">
          <img src="/public/img/i-web.png" alt="" className="w-[45px] h-[45px] ml-5 mt-5" />
          <h2 className="font-bold  ml-5 text-[24px]">Front End Dev</h2>
          <p className="lg:w-[280px] text-[#DBDBDB] ml-5 text-[17px] mb-4 min-[678px]:mb-0 min-[678px]:text-[20px]">Creating responsive, beautiful, and accessible web experiences.</p>
        </div>
        <div ref={sec2Ref} className="flex flex-col gap-4 text-[#ffffff] bg-[#19376D] lg:w-[369px] lg:h-[409px] md:w-[269px] md:h-[309px]  shadow-md shadow-[#A5D7E8] ">
          <img src="/public/img/i-web.png" alt="" className="w-[45px] h-[45px] ml-5 mt-5" />
          <h2 className="font-bold  ml-5 text-[24px]">Mobile dev</h2>
          <p className="lg:w-[300px] text-[#DBDBDB] ml-5 text-[17px] mb-4 min-[678px]:mb-0 min-[678px]:text-[20px]">From idea to app store, delivering mobile solutions that make a difference.</p>
        </div>
      </section>
    </div>
  );
};
