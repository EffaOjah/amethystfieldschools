import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { localSchoolMedia, type MediaItem } from '../data/mediaData';

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(localSchoolMedia);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data } = await api.get('/media');
        if (Array.isArray(data) && data.length > 0) {
          const filteredMedia: MediaItem[] = data
            .filter((item: any) => !item.title?.startsWith('Blog Cover'))
            .map((item: any) => {
              const fullTitle = (item.title || 'AMETHYSTFIELD SCHOOLS').toUpperCase();
              const words = fullTitle.split(' ');
              const mid = Math.ceil(words.length / 2);
              return {
                id: item.id,
                type: item.url.match(/\.(mp4|webm|ogg)$/i) || item.url.includes('video/upload') ? 'video' : 'image',
                src: item.url,
                title1: words.slice(0, mid).join(' ') || 'AMETHYSTFIELD',
                title2: words.slice(mid).join(' ') || 'SCHOOLS',
                title: fullTitle,
                category: 'Campus Life',
                caption: item.title || ''
              };
            });
          
          if (filteredMedia.length > 0) {
            setMediaItems(filteredMedia);
          }
        }
      } catch (error) {
        console.log('Using local school media gallery');
      }
    };
    fetchMedia();
  }, []);
  
  // Show first 3 items on the home page
  const displayedItems = mediaItems.slice(0, 3);

  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-white px-4 md:px-8 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-extrabold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">
            OUR MEDIA
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-[#662D91] mb-4 uppercase tracking-tight">
            Media Gallery
          </h2>
          <div className="w-16 h-1 bg-[#E05A47] mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Explore our school through pictures and video highlights.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => {
            const isVideo = item.type === 'video';
            return (
              <div key={item.id} className="bg-zinc-50 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                {!isVideo ? (
                  <div 
                    className="aspect-[4/3] bg-zinc-200 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl drop-shadow-md p-2 rounded-full bg-black/30 backdrop-blur-sm">zoom_in</span>
                    </div>
                    <img
                      src={item.src}
                      alt={item.title || 'Media image'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-black flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Your browser does not support the video element.
                    </video>
                  </div>
                )}

                {/* Title */}
                {item.title && (
                  <div className="p-5 bg-white border-t border-zinc-100 text-center relative flex-grow flex items-center justify-center">
                    <p className="text-sm font-bold text-slate-800 tracking-wide uppercase">{item.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="mt-14 text-center">
          <Link 
            to="/media"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#662D91] text-white font-extrabold uppercase tracking-wider text-sm rounded-lg hover:bg-[#522377] transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>EXPLORE MEDIA SHOWCASE</span>
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
