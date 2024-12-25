import React, { useEffect, useState } from 'react';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav font-poppins sticky top-0 z-[100] ${isScrolled ? 'backdrop-blur-md bg-opacity-60 bg-[#0B2447]' : 'bg-transparent'}`}>
      <nav className="grid grid-cols-2 sm:grid-cols-3 items-center px-4 py-2  text-white mx-4">
        {' '}
        {/* awal gambar dan nama */}{' '}
        <div className="flex items-center gap-2 my-2">
          <img src="/img/gestures 1.png" alt="" className="w-8 h-8" />
          <h1 className="text-2xl"> Akmal </h1>{' '}
        </div>{' '}
        {/* akhir dari gambar dan nama */}{' '}
        <div className="hidden sm:flex justify-end items-center gap-4 col-span-2 my-2">
          <ul className="flex gap-10 mr-10 lg:mr-80">
            <li>
              {' '}
              <a href="#home" className="hover:text-[#3260b5] transition-all">
                Home
              </a>{' '}
            </li>{' '}
            <li>
              {' '}
              <a href="#portfolio" className="hover:text-[#3260b5] transition-all">
                PortFolio
              </a>{' '}
            </li>{' '}
            <li>
              {' '}
              <a href="#contact" className="hover:text-[#3260b5] transition-all">
                Contact
              </a>{' '}
            </li>{' '}
            <li>
              {' '}
              <a href="#about" className="hover:text-[#3260b5] transition-all">
                About
              </a>{' '}
            </li>{' '}
          </ul>{' '}
          {/* ikon */}{' '}
          <div className="hidden md:flex gap-2 md:gap-4">
            <img src="/img/globe.png" alt="" className="object-fill hover:cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
            <img src="/img/linkind.png" alt="" className="object-fill hover:cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
          </div>{' '}
        </div>{' '}
        <div className="flex sm:hidden justify-end items-center">
          <img src="/img/humberger.png" alt="" className="object-fill hover:cursor-pointer w-8 h-8" onClick={toggleMenu} />
        </div>{' '}
        {/* akhir ikon */}{' '}
      </nav>{' '}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden w-full h-screen fixed top-0 left-0 z-50`}>
        {/* Lapisan Background dengan opacity */}
        <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0"></div>

        {/* Konten menu di atas lapisan background */}
        <div className="relative flex flex-col items-center justify-center space-y-6 h-full z-10">
          <ul className="text-center text-white text-2xl">
            <li className="py-2 hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="py-2 hover:underline">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="py-2 hover:underline">
              <a href="#contact">Contact</a>
            </li>
            <li className="py-2 hover:underline">
              <a href="#about">About</a>
            </li>
          </ul>
          <button onClick={toggleMenu} className="mt-4 text-lg bg-white text-blue-900 px-6 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
