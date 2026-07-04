import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

interface Media {
  id: number;
  title: string | null;
  url: string;
}

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mediaItems, setMediaItems] = useState<Media[]>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data } = await api.get('/media');
        // Filter out blog covers from the public gallery
        const filteredMedia = data.filter((item: Media) => !item.title?.startsWith('Blog Cover'));
        setMediaItems(filteredMedia);
      } catch (error) {
        console.error('Failed to fetch media', error);
      }
    };
    fetchMedia();
  }, []);
  
  // Show only first 3 items on the home page
  const displayedItems = mediaItems.slice(0, 3);

  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-white px-4 md:px-8 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-extrabold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
            OUR MEDIA
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary mb-6 uppercase tracking-tight">
            Media Gallery
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Explore our school through pictures and video highlights.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => {
            const isVideo = item.url.match(/\.(mp4|webm|ogg)$/i) || item.url.includes('video/upload');
            return (
            <div key={item.id} className="bg-zinc-50 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
              {!isVideo ? (
                <div 
                  className="aspect-[4/3] bg-zinc-200 relative overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <div className="absolute inset-0 bg-black/20 md:bg-primary/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:delay-100 drop-shadow-md p-2 rounded-full bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">zoom_in</span>
                  </div>
                  <img
                    src={item.url}
                    alt={item.title || 'Media image'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-black flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <video
                    src={item.url}
                    controls
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Your browser does not support the video element.
                  </video>
                </div>
              )}

              {/* Caption */}
              {item.title && (
                <div className="p-5 bg-white border-t border-zinc-100 text-center relative flex-grow flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-zinc-100 rotate-45 hidden group-hover:block transition-all"></div>
                  <p className="text-sm font-bold text-slate-700 relative z-10">{item.title}</p>
                </div>
              )}
            </div>
          )})}
          {displayedItems.length === 0 && (
            <div className="col-span-full text-center py-10 text-slate-500">
              No media available yet.
            </div>
          )}
        </div>

        {/* See More Button */}
        {mediaItems.length > 3 && (
          <div className="mt-16 text-center">
            <Link 
              to="/media"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-extrabold uppercase tracking-[0.15em] text-sm rounded-full hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <span>See All Media</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
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
