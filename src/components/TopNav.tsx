import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle glassmorphism when scrolled down 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent pt-2'
      }`}>
      <nav className="flex justify-between items-center w-full px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src="/amf-logo.jpg" alt="AmethystField Schools" className="h-10 md:h-12 w-auto object-contain rounded-full p-0.5" />
          <div className="flex flex-col hidden sm:flex">

          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-bold text-xs lg:text-sm uppercase tracking-wider text-white drop-shadow-sm">
          <a className="hover:text-accent transition-colors" href="/">Home</a>
          <a className="hover:text-accent transition-colors" href="/#about">About Us</a>
          <Link className="hover:text-accent transition-colors" to="/academics">Academics</Link>
          <a className="hover:text-accent transition-colors" href="/apply">Admissions</a>
          <Link className="hover:text-accent transition-colors" to="/information">Information</Link>
          <Link className="hover:text-accent transition-colors" to="/media">Media</Link>
          <Link className="hover:text-accent transition-colors" to="/blogs">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="bg-accent text-primary px-6 py-2 rounded font-bold text-xs lg:text-sm transition-all shadow-md uppercase tracking-wider flex items-center gap-2 hover:bg-accent/80">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-4xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-primary/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <Link className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" href="/#about" onClick={() => setIsOpen(false)}>About Us</a>
          <Link className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" to="/academics" onClick={() => setIsOpen(false)}>Academics</Link>
          <a className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" href="/apply" onClick={() => setIsOpen(false)}>Admissions</a>
          <Link className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" to="/information" onClick={() => setIsOpen(false)}>Information</Link>
          <Link className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" to="/media" onClick={() => setIsOpen(false)}>Media</Link>
          <Link className="text-white/90 hover:text-accent text-2xl font-bold uppercase tracking-wider" to="/blogs" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-xl mt-4 uppercase tracking-wider flex items-center gap-2 shadow-xl">
            <span className="material-symbols-outlined">campaign</span>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
