import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { useState } from 'react'
import { mediaItems } from '../data/mediaData'

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageTransition>
      <SEO 
        title="Media Gallery | Amethyst Field Schools"
        description="Explore pictures and video highlights of Amethyst Field Schools."
      />
      <div className="bg-white text-on-surface font-body min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-grow">
          <Reveal delay={0.1}>
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 bg-primary text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Media Gallery</h1>
              <p className="text-lg text-purple-50/80 max-w-2xl mx-auto font-serif italic">
                Explore pictures and video highlights of Amethyst Field Schools.
              </p>
            </div>
          </Reveal>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems.map((item) => (
                <div key={item.id} className="bg-zinc-50 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  {item.type === 'image' ? (
                    <div 
                      className="aspect-[4/3] bg-zinc-200 relative overflow-hidden flex-shrink-0 cursor-pointer"
                      onClick={() => setSelectedImage(item.src)}
                    >
                      <div className="absolute inset-0 bg-black/20 md:bg-primary/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-4xl md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:delay-100 drop-shadow-md p-2 rounded-full bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">zoom_in</span>
                      </div>
                      <img 
                        src={item.src} 
                        alt={item.caption || 'Media image'} 
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
                  
                  {item.caption && (
                    <div className="p-5 bg-white border-t border-zinc-100 text-center relative flex-grow flex items-center justify-center">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-zinc-100 rotate-45 hidden group-hover:block transition-all"></div>
                      <p className="text-sm font-bold text-slate-700 relative z-10">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
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
    </PageTransition>
  )
}
