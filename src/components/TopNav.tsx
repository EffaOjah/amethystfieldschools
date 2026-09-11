import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isDarkText = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Shared style helpers ── */
  // Keep text color inherited from parent so it's always readable.
  // Use bold weight + amber underline as the active indicator.
  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative pb-1 transition-all duration-200 group ${
      isActive ? 'font-extrabold' : 'font-semibold hover:opacity-75'
    }`;

  const desktopUnderline = (isActive: boolean) =>
    `absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-amber-400 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-2/3 opacity-70'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-2xl font-bold uppercase tracking-wider transition-colors',
      isActive ? 'text-amber-300' : 'text-white hover:text-sky-400',
    ].join(' ');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#662D91]/95 backdrop-blur-md shadow-md py-2 border-b border-white/10'
          : 'bg-transparent py-2 sm:py-2.5'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 z-50">
          <img
            src="/school-logo.png"
            alt="AmethystField Schools Logo"
            className="h-16 sm:h-18 lg:h-20 w-auto object-contain shrink-0 filter drop-shadow-md transition-transform hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`font-black text-xs sm:text-sm lg:text-base tracking-tight leading-none ${isDarkText ? 'text-slate-950' : 'text-white'}`}>
              AMETHYSTFIELD
            </span>
            <span className={`text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase leading-tight mt-0.5 ${isDarkText ? 'text-slate-800' : 'text-amber-300'}`}>
              SCHOOLS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex items-center space-x-3.5 lg:space-x-5 xl:space-x-6 font-semibold text-xs xl:text-sm uppercase tracking-wide ${
          isDarkText ? 'text-slate-900' : 'text-white'
        }`}>
          {/* Home — NavLink to "/" with end so it only matches exactly "/" */}
          <NavLink end to="/" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Home<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          {/* About Us */}
          <NavLink to="/about" className={desktopLinkClass}>
            {({ isActive }) => (
              <>About Us<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          <NavLink to="/academics" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Academics<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          <NavLink to="/apply" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Admissions<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          <NavLink to="/information" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Information<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          <NavLink to="/media" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Media<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>

          <NavLink to="/blogs" className={desktopLinkClass}>
            {({ isActive }) => (
              <>Blog<span className={desktopUnderline(isActive)} /></>
            )}
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            to="/apply"
            className="px-5 py-2 font-bold text-xs xl:text-sm transition-all uppercase tracking-wider bg-[#662D91] hover:bg-[#522377] text-white rounded-md shadow-xs border border-white/20"
          >
            APPLY NOW
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          className={`lg:hidden z-50 p-2 ${isDarkText ? 'text-slate-950' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile & Tablet Fullscreen Navigation Menu */}
        <div
          className={`fixed inset-0 bg-slate-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-7 transition-opacity duration-300 lg:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <NavLink end to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/academics" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Academics</NavLink>
          <NavLink to="/apply" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Admissions</NavLink>
          <NavLink to="/information" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Information</NavLink>
          <NavLink to="/media" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Media</NavLink>
          <NavLink to="/blogs" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Blog</NavLink>
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="bg-[#662D91] hover:bg-[#522377] text-white px-10 py-3.5 rounded-md font-bold text-lg mt-4 uppercase tracking-wider flex items-center gap-2 shadow-xl"
          >
            APPLY NOW
          </Link>
        </div>

      </nav>
    </header>
  );
}
