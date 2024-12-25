import React, { useRef, useEffect } from 'react';

export const Kotak = () => {
  const sec3Top = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sec3Top.current) {
              sec3Top.current.classList.add('animate-fadeInTop', 'opacity-100');
            }
          } else {
            if (entry.target === sec3Top.current) {
              sec3Top.current.classList.remove('animate-fadeInTop', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.2 } // Detect when 20% of the element is visible
    );

    if (sec3Top.current) observer.observe(sec3Top.current);

    return () => {
      if (sec3Top.current) observer.unobserve(sec3Top.current);
    };
  }, []);
  return (
    <div>
      <div
        ref={sec3Top}
        className="text-white flex sm:gap-8 gap-4 flex-wrap sm:flex-nowrap bg-[#19376D] max-w-max sm:w-[600px]  md:w-[800px] justify-center mx-auto p-3 mt-[80px] shadow-md rounded-md opacity-0 transition-opacity duration-700"
      >
        <div className="flex gap-2  justify-center self-center items-center bg-[#0B2447] px-6 py-1 shadow-md">
          <img src="/img/google.png" alt="" className="w-[20px] sm:w-[35px]" />
          <a href=""> Google </a>{' '}
        </div>{' '}
        <div className="flex gap-2 justify-center self-center items-center bg-[#0B2447] px-6 py-1 shadow-md">
          <img src="/img/linkedin (2) 1.png" alt="" className="w-[20px] sm:w-[35px]" />
          <a href=""> Linkedin </a>{' '}
        </div>{' '}
        <div className="flex gap-2 justify-center self-center items-center bg-[#0B2447] px-6 py-1 shadow-md">
          <img src="/img/meta 1.png" alt="" className="w-[20px] sm:w-[35px]" />
          <a href=""> Meta </a>{' '}
        </div>{' '}
        <div className="flex gap-2 justify-center self-center items-center bg-[#0B2447] px-6 py-1 shadow-md">
          <img src="/img/gmail.png" alt="" className="w-[20px] sm:w-[35px]" />
          <a href=""> Gmail </a>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
