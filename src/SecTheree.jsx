import React, { useRef, useEffect } from 'react';

export const SecTheree = () => {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.add('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.add('animate-fadeInRight', 'opacity-100');
            } else if (entry.target === sec3Ref.current) {
              sec3Ref.current.classList.add('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec4Ref.current) {
              sec4Ref.current.classList.add('animate-fadeInRight', 'opacity-100');
            }
          } else {
            if (entry.target === sec1Ref.current) {
              sec1Ref.current.classList.remove('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec2Ref.current) {
              sec2Ref.current.classList.remove('animate-fadeInRight', 'opacity-100');
            } else if (entry.target === sec3Ref.current) {
              sec3Ref.current.classList.remove('animate-fadeInLeft', 'opacity-100');
            } else if (entry.target === sec4Ref.current) {
              sec4Ref.current.classList.remove('animate-fadeInRight', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.2 } // Detect when 20% of the element is visible
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);
    if (sec3Ref.current) observer.observe(sec3Ref.current);
    if (sec4Ref.current) observer.observe(sec4Ref.current);

    return () => {
      if (sec1Ref.current) observer.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer.unobserve(sec2Ref.current);
      if (sec3Ref.current) observer.unobserve(sec3Ref.current);
      if (sec4Ref.current) observer.unobserve(sec4Ref.current);
    };
  }, []);
  return (
    <div id="portfolio" className="bg-[#19376D] relative pt-4 md:pt-[50px] lg:pt-[150px] max-[678px]:px-4 max-[678px]:pb-4">
      <section className="">
        <div className="text-[#FFFFFF] text-center ">
          <h1 className="max-[600px]:text-[20px] sm:text-[33px]"> My Best Selected Portfolio </h1>{' '}
        </div>{' '}
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 justify-items-center mt-8">
          <div ref={sec1Ref} className="relative sm:w-[full] sm:h-[full]  lg:w-[500px] lg:h-[400px]  rounded-lg overflow-hidden max-[631px]:mb-4">
            <div className="bg-[#0B2447] p-4 ">
              <h2 className="text-[#A5D7E8] mb-4 text-[20px] max-[500px]:text-[16px] "> Web Design </h2>

              <h3 className="text-[#FFFFFF] text-[24px] max-[500px]:text-[20px]"> Store tshirt Website </h3>

              <img src="/public/img/mata.png" alt="" className="absolute right-4 top-8" />
            </div>
            <img src="/public/img/port-1.png" alt="" />
          </div>
          <div ref={sec2Ref} className="relative lg:w-[500px] lg:h-[400px]  rounded-lg overflow-hidden max-[631px]:mb-4">
            <div className="bg-[#0B2447] p-4">
              <h2 className="text-[#A5D7E8] mb-4 text-[20px] max-[500px]:text-[16px]"> Web Design </h2>

              <h3 className="text-[#FFFFFF] text-[24px] max-[500px]:text-[20px]"> Slider Hero Mobile Legends </h3>

              <img src="/public/img/mata.png" alt="" className="absolute right-4 top-8" />
            </div>
            <img src="/public/img/port-2.png" alt="" />
          </div>
          <div ref={sec3Ref} className="relative lg:w-[500px] lg:h-[400px]  rounded-lg overflow-hidden max-[631px]:mb-4">
            <div className="bg-[#0B2447] p-4">
              <h2 className="text-[#A5D7E8] mb-4 text-[20px] max-[500px]:text-[16px]"> Web Design </h2>

              <h3 className="text-[#FFFFFF] text-[24px] max-[500px]:text-[20px]"> Company Website </h3>

              <img src="/public/img/mata.png" alt="" className="absolute right-4 top-8" />
            </div>
            <img src="/public/img/port-3.png" alt="" />
          </div>
          <div ref={sec4Ref} className="relative lg:w-[500px] lg:h-[400px]  rounded-lg overflow-hidden max-[631px]:mb-4">
            <div className="bg-[#0B2447] p-4">
              <h2 className="text-[#A5D7E8] mb-4 text-[20px] max-[500px]:text-[16px]"> Web Design </h2>

              <h3 className="text-[#FFFFFF] text-[24px] max-[500px]:text-[20px]"> FilFlix Website </h3>

              <img src="/public/img/mata.png" alt="" className="absolute right-4 top-8" />
            </div>
            <img src="/public/img/port-4.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
