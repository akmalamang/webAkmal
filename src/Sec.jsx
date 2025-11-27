import React, { useEffect, useRef } from 'react';
import tweet from './assets/tweet.png';
import intagram from './assets/ig.png';
import facebook from './assets/facebook.png';
import akmal from './assets/new-edit-akmal 1.png';
import mask from './assets/Mask group.png';
import unduh from './assets/icon-download.png';
import cv from '/cv-Akmal-Nov-27.pdf';

export const Sec = () => {
  const sec1Ref = useRef(null); // referensi untuk teks profil di kiri
  const sec2Ref = useRef(null); // referensi untuk gambar di kanan

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika elemen terlihat di layar
          if (entry.isIntersecting) {
            if (entry.target === sec1Ref.current) {
              // Jalankan animasi hanya jika belum pernah dilakukan
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
      { threshold: 0.2 } // animasi aktif saat 20% elemen terlihat
    );

    if (sec1Ref.current) observer.observe(sec1Ref.current);
    if (sec2Ref.current) observer.observe(sec2Ref.current);

    return () => {
      if (sec1Ref.current) observer.unobserve(sec1Ref.current);
      if (sec2Ref.current) observer.unobserve(sec2Ref.current);
    };
  }, []);

  return (
    <div id="home" className="mt-[50px] sm:mt-[100px] font-poppins flex flex-col md:flex-row items-center justify-between">
      {/* Section 1 */}
      <section ref={sec1Ref} className="sec-1 relative flex flex-col ml-10 order-2 md:order-1 opacity-0 transition-opacity duration-500">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-[#C5C5C5]">I 'm</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 text-white">Akmal Maulana</h1>
        </div>
        <div className="w-[200px] sm:w-[300px] h-[3px] bg-[#A5D7E8] mt-5"></div>
        <div className="flex gap-4 items-center mt-4">
          <p className="text-[#B3B3B3] mt-0">Show More</p>
          <img className="w-5 object-fill h-5" src={mask} alt="" />
        </div>
        <p className="mt-6 text-md sm:text-lg text-[#B3B3B3] sm:w-[422px]">I am a freelance FrontEnd Web Developer, currently looking for work in the field of Web Development</p>
        <div className="flex gap-6 mt-8">
          <a href="https://x.com" target="/">
            <img src={tweet} alt="" className="w-[30px] h-[30px]" />
          </a>
          <a href="https://www.instagram.com/akmlamang" target="/">
            <img src={intagram} alt="" className="w-[30px] h-[30px]" />
          </a>
          <a href="https://web.facebook.com/AkmalMaulana" target="/">
            <img src={facebook} alt="" className="w-[30px] h-[30px]" />
          </a>
        </div>

        <div className="absolute bottom-0 left-[200px] max-[400px]:left-[190px] mt-10">
          <a href={cv} download={'cv-Akmal-Nov-27.pdf'} target="_blank" rel="noreferrer">
            <button className="px-2 py-1  bg-[#A5D7E8] rounded-md max-[400px]:text-sm hover:bg-[#8fb9c7] transition flex gap-2 items-center" rel="noreferrer">
              <img src={unduh} alt="" className="w-[30px]" />
              cv
            </button>
          </a>
        </div>
      </section>

      {/* Section 2 */}
      <section ref={sec2Ref} className="sec-2 sm:mr-[50px] order-1 md:order-2 opacity-0 transition-opacity duration-500">
        <div className="w-60 h-60 sm:w-[300px] sm:h-[300px] lg:w-[483px] lg:h-[462px] rounded-full  mx-auto  md:mx-0 bg-[#19376D] relative">
          <img src={akmal} alt="" className=" object-cover object-center sm:mr-[100px] p-4 absolute bottom-2" />
        </div>
      </section>
    </div>
  );
};
