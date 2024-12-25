import React, { useRef, useEffect } from 'react';
import youtube from './assets/YouTube.png';
import profilAkmal from './assets/new-profil-akmal 1.png';

export const SecFour = () => {
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
    <div id="contact" className=" text-white p-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-4 font-poppins">
      {/* Bagian kiri (Teks) */}
      <div className="max-[600px]:order-2">
        <div ref={sec1Ref}>
          <h2 className="text-[20px] sm:text-3xl md:text-4xl font-normal mb-4">Let’s Hire Me And Make The Best Product</h2>
          <p className="text-[17px] sm:text-[18px] mb-6 text-[#B3B3B3] font-extralight">Let’s hire me and create the best product together! With my skills and dedication, we can bring your ideas to life and make something extraordinary.</p>
        </div>

        {/* Tombol */}
        <div ref={sec2Ref} className="flex gap-4">
          <a
            href="https://www.youtube.com" // Ganti dengan URL yang sesuai
            className="flex items-center gap-2 bg-gradient-to-tr from-[#0B2447] to-[#1B58AD] px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <img src={youtube} alt="Youtube" className="w-6 h-6" />
            <span className="text-[15px]">Youtube</span>
          </a>

          <a
            href="https://wa.me/6281574394344" // Ganti dengan link yang sesuai untuk form contact
            className="bg-[#1B58AD] text-white text-[14px] sm:text-[15px] px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bagian kanan (Gambar) */}
      <div className="flex justify-center max-[600px]:order-1">
        <div ref={sec3Top} className="relative">
          <div className="w-[324px] h-[339px]  md:w-[384px] md:h-[396px] bg-[#1B58AD] rounded-full absolute top-10 right-[50%] left-[50%] -translate-x-[50%] z-0"></div>
          <img
            src={{ profilAkmal }} // Ganti dengan gambar profil yang sesuai
            alt="Profile"
            className="relative z-10 object-cover w-[257px] h-[387px] sm:w-[277px] sm:h-[422px]"
          />
        </div>
      </div>
    </div>
  );
};
