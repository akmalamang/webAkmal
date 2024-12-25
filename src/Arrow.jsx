import React, { useEffect, useState } from 'react';

export const Arrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showArrow && (
      <div onClick={scrollTop}>
        <img src="/img/up-arrow.png" alt="" className="w-[40px] h-[40px] fixed right-4 z-50 bottom-4 animate-bounce hover:cursor-pointer" />
      </div>
    )
  );
};
