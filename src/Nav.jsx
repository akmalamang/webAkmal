import { useEffect, useState, useCallback } from 'react';
import gestures from './assets/gestures 1.png';
import globe from './assets/globe.png';
import linkidin from './assets/linkind.png';
// import humberger from './assets/humberger.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' },
];

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // ✅ Bug fix: pakai useCallback + removeEventListener yang benar
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    setIsScrolled(scrollY > 10);
    setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
  }, []);

  // ✅ Active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll); // ✅ fix bug
  }, [handleScroll]);

  // ✅ Tutup menu dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // ✅ Cegah scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`font-poppins sticky top-0 z-[100] transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#0B2447]/70 shadow-[0_1px_0_rgba(255,255,255,0.07)]' : 'bg-transparent'}`}>
      {/* Scroll Progress Bar */}
      <div className="h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-label="Scroll progress" />

      <nav className="flex items-center justify-between px-6 py-3 text-white mx-auto max-w-7xl" aria-label="Main navigation">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" aria-label="Kembali ke halaman utama">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center transition-all group-hover:bg-blue-500/30">
            <img src={gestures} alt="" className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-xl font-semibold tracking-wide">
            Ak<span className="text-blue-400">mal</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-sm font-medium pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-blue-400 after:transition-all after:duration-300 ${
                    isActive ? 'text-white after:w-full' : 'text-white/70 hover:text-white after:w-0 hover:after:w-full'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Icons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-white/12 hover:border-white/30 transition-all"
          >
            <img src={linkidin} alt="" className="w-4 h-4" aria-hidden="true" />
          </a>

          <button aria-label="Ganti bahasa" className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-white/12 hover:border-white/30 transition-all">
            <img src={globe} alt="" className="w-4 h-4" aria-hidden="true" />
          </button>

          {/* ✅ Tombol Hire Me — CTA profesional */}
          <a href="#contact" className="ml-1 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-semibold tracking-wide transition-all duration-200">
            Hire Me ↗
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center hover:bg-white/12 transition-all"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {/* ✅ Animasi ikon ☰ → ✕ */}
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-200 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        style={{
          display: isMenuOpen ? 'block' : 'none',
          animation: isMenuOpen ? 'slideDown 0.25s ease forwards' : 'none',
        }}
        className="sm:hidden"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" style={{ zIndex: -1 }} onClick={closeMenu} aria-hidden="true" />

        {/* Konten Menu */}
        <div className="bg-[#0B2447]/95 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1 mb-6" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-3 border-b border-white/10 text-base font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-white/75 hover:text-white'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    <span className="text-xs opacity-40">→</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
              <img src={linkidin} alt="" className="w-4 h-4" aria-hidden="true" />
            </a>
            <button aria-label="Ganti bahasa" className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
              <img src={globe} alt="" className="w-4 h-4" aria-hidden="true" />
            </button>
            <a href="#contact" onClick={closeMenu} className="flex-1 text-center py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold tracking-wide transition-all">
              Hire Me ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
