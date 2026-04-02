import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-2 md:p-3 bg-amber-400 text-slate-900 rounded-full shadow-lg hover:bg-amber-300 transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none group cursor-pointer border border-amber-500/30"
      aria-label="Back to top"
      title="Back to top"
    >
      <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">arrow_upward</span>
    </button>
  );
};

export default BackToTopButton;
