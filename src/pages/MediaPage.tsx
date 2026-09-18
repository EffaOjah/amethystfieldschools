import { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import api from '../api';
import { localSchoolMedia, type MediaItem } from '../data/mediaData';

export default function MediaPage() {
  const [allItems, setAllItems] = useState<MediaItem[]>(localSchoolMedia);
  const [selectedModalItem, setSelectedModalItem] = useState<MediaItem | null>(null);

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

  return (
    <PageTransition>
      <SEO 
        title="Media Gallery | AmethystField Schools"
        description="Explore pictures and video highlights of AmethystField Schools."
      />
      <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen flex flex-col">
        <TopNav />

        <main className="flex-grow pb-24">
          
          {/* Header Banner */}
          <Reveal delay={0.1}>
            <div className="relative pt-28 pb-14 md:pt-36 md:pb-18 bg-gradient-to-r from-[#662D91] via-[#522377] to-[#3b1557] text-center text-white px-4 mb-10 overflow-hidden border-b border-purple-900 shadow-md">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none"></div>
              <div className="relative z-10 max-w-4xl mx-auto space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-300 uppercase bg-white/10 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/20 inline-block mb-1">
                  MEDIA GALLERY
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-tight text-white font-sans">
                  CAMPUS HIGHLIGHTS
                </h1>
                <p className="text-sm md:text-base text-purple-100/90 font-serif italic max-w-2xl mx-auto">
                  "Modelling Excellence" — Explore pictures and video highlights of our school community.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Main 3-Column Media Cards Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allItems.map((item, idx) => (
                <Reveal key={item.id} delay={0.1 * (idx % 3)}>
                  <div 
                    className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden cursor-pointer" 
                    onClick={() => setSelectedModalItem(item)}
                  >
                    
                    {/* Top Card Banner: Image/Video */}
                    <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden relative shrink-0">
                      {item.type === 'video' ? (
                        <>
                          <video src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-5xl opacity-80 group-hover:opacity-100 transition-opacity">play_circle</span>
                          </div>
                        </>
                      ) : (
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block text-[10px] font-bold text-white bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug tracking-tight mb-2 line-clamp-2 group-hover:text-[#662D91] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2 mb-4">
                          {item.caption}
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#662D91] hover:text-[#522377] transition-colors self-start cursor-pointer group-hover:translate-x-1 duration-200"
                      >
                        <span>View Media</span>
                        <span className="material-symbols-outlined text-sm">open_in_full</span>
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 md:p-8"
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
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedModalItem.src}
                alt={selectedModalItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <div
              className="mt-4 bg-slate-900 border border-slate-700/50 p-4 sm:p-6 rounded-xl max-w-2xl text-center shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight mb-2">
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
