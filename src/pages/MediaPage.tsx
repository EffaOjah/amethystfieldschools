import { useState, useEffect, useRef } from 'react';
import TopNav from '../components/TopNav';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import api from '../api';
import { localSchoolMedia, type MediaItem } from '../data/mediaData';

export default function MediaPage() {
  const [allItems, setAllItems] = useState<MediaItem[]>(localSchoolMedia);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModalItem, setSelectedModalItem] = useState<MediaItem | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Fetch dynamic media from API if available
  useEffect(() => {
    const fetchApiMedia = async () => {
      try {
        const { data } = await api.get('/media');
        if (Array.isArray(data) && data.length > 0) {
          const fetchedItems: MediaItem[] = data
            .filter((item: any) => !item.title?.startsWith('Blog Cover'))
            .map((item: any) => {
              const fullTitle = (item.title || 'AMETHYSTFIELD SCHOOLS').toUpperCase();
              const words = fullTitle.split(' ');
              const mid = Math.ceil(words.length / 2);
              return {
                id: `api-${item.id}`,
                type: item.url.match(/\.(mp4|webm|ogg)$/i) || item.url.includes('video/upload') ? 'video' : 'image',
                src: item.url,
                title1: words.slice(0, mid).join(' ') || 'AMETHYSTFIELD',
                title2: words.slice(mid).join(' ') || 'SCHOOLS',
                title: fullTitle,
                category: 'Campus Life',
                caption: item.title || 'Excellence and holistic student growth at AmethystField Schools.',
                ctaText: 'SEE MORE',
                ctaLink: '/media'
              };
            });

          const combined = [...localSchoolMedia];
          fetchedItems.forEach(item => {
            if (!combined.some(c => c.src === item.src)) {
              combined.push(item);
            }
          });
          setAllItems(combined);
        }
      } catch (err) {
        // Fallback to local school media
      }
    };
    fetchApiMedia();
  }, []);

  const activeItem = allItems[currentIndex] || localSchoolMedia[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
  };

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  return (
    <PageTransition>
      <SEO 
        title="Media Gallery | AmethystField Schools"
        description="Explore pictures and video highlights of AmethystField Schools."
      />
      <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans select-none">
        
        {/* Navigation Bar overlaying top of image */}
        <TopNav />

        {/* MAIN HERO FULLSCREEN STAGE */}
        <div className="relative w-full h-full overflow-hidden bg-black flex flex-col justify-center items-center">
          
          {/* Subtle Ambient Blurred Image Background */}
          {activeItem.type === 'image' && (
            <img
              key={`bg-${activeItem.src}`}
              src={activeItem.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
            />
          )}

          {/* Main Media Image / Video using object-contain to display 100% of the photo/video without cropping */}
          {activeItem.type === 'video' ? (
            <video
              key={activeItem.src}
              src={activeItem.src}
              controls
              autoPlay
              muted
              loop
              className="relative z-10 w-full h-full object-contain"
            />
          ) : (
            <img
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.title}
              className="relative z-10 w-full h-full object-contain cursor-pointer transition-transform duration-700 hover:scale-[1.01]"
              onClick={() => setSelectedModalItem(activeItem)}
            />
          )}

          {/* Natural Atmospheric Dark Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none z-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none z-15" />

          {/* OVERLAY TEXT (BOTTOM LEFT) - BEBAS NEUE TALL CONDENSED TYPOGRAPHY */}
          <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-6 sm:left-12 md:left-16 lg:left-20 z-20 pointer-events-auto flex flex-col items-start max-w-5xl">
            <h1 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] uppercase text-white leading-[0.82] tracking-normal drop-shadow-2xl flex flex-col">
              <span>{activeItem.title1}</span>
              <span>{activeItem.title2}</span>
            </h1>

            {/* SEE MORE - Rust / Coral Red Text */}
            <button
              onClick={() => setSelectedModalItem(activeItem)}
              className="mt-2 sm:mt-3 font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#DF5744] hover:text-[#f26552] uppercase tracking-wider transition-colors cursor-pointer leading-none"
            >
              SEE MORE
            </button>
          </div>

          {/* CIRCULAR NAVIGATION BUTTONS (BOTTOM RIGHT ABOVE THUMBNAILS) */}
          <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 right-6 sm:right-12 md:right-16 z-20 flex items-center gap-3 sm:gap-4 pointer-events-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 hover:border-white text-white bg-black/30 hover:bg-white/20 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-lg"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">west</span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 hover:border-white text-white bg-black/30 hover:bg-white/20 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-lg"
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">east</span>
            </button>
          </div>

          {/* FLUSH BOTTOM THUMBNAIL STRIP */}
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-24 md:h-28 z-30 bg-black border-t border-zinc-800 overflow-hidden">
            <div
              ref={thumbnailContainerRef}
              className="flex items-center h-full overflow-x-auto scrollbar-none"
            >
              {allItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-full aspect-[16/10] shrink-0 border-r border-zinc-900 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-t-2 border-[#DF5744] grayscale-0 brightness-100 z-10'
                        : 'border-t-2 border-transparent grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100'
                    }`}
                  >
                    {item.type === 'video' ? (
                      <div className="w-full h-full bg-zinc-950 relative flex items-center justify-center">
                        <video 
                          src={item.src} 
                          className="w-full h-full object-cover opacity-80" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <span className="material-symbols-outlined text-white text-xl sm:text-2xl">play_circle</span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setSelectedModalItem(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center z-50 cursor-pointer"
              onClick={() => setSelectedModalItem(null)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {selectedModalItem.type === 'video' ? (
              <video
                src={selectedModalItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedModalItem.src}
                alt={selectedModalItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <div
              className="mt-4 bg-zinc-900 border border-white/15 p-4 sm:p-6 rounded-lg max-w-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-white tracking-wide mb-1">
                {selectedModalItem.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedModalItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
