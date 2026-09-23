import { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import api from '../api';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  media_url: string;
  created_at: string;
}



export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        if (Array.isArray(data)) {
          // Sort by date descending
          const sorted = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          setBlogs(sorted);
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const displayBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <PageTransition>
      <SEO 
        title="School Blog & Insights | Amethyst Field Schools"
        description="Read our latest news, articles, and educational insights from Amethyst Field Schools."
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
                  OUR BLOG & INSIGHTS
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-tight text-white font-sans">
                  SCHOOL NEWS & ARTICLES
                </h1>
                <p className="text-sm md:text-base text-purple-100/90 font-serif italic max-w-2xl mx-auto">
                  "Modelling Excellence" — Discover stories, student achievements, and educational guides.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Main 3-Column Blog Cards Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayBlogs.map((blog, idx) => {
                
                return (
                  <Reveal key={blog.id} delay={0.1 * (idx % 3)}>
                    <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                      
                      {/* Top Card Banner: Blog Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden relative shrink-0 bg-slate-100">
                        {blog.media_url ? (
                          <img 
                            src={blog.media_url} 
                            alt={blog.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-4xl">image</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                        <div>
                          {/* Date */}
                          <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase mb-1.5 block">
                            {new Date(blog.created_at || "2026-03-04").toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug tracking-tight mb-2 line-clamp-2 group-hover:text-[#662D91] transition-colors">
                            {blog.title}
                          </h3>

                          {/* Content Snippet */}
                          <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2 mb-4">
                            {blog.content}
                          </p>
                        </div>

                        {/* Read More Link Button styled in Navbar Purple #662D91 */}
                        <button
                          onClick={() => setSelectedBlog(blog)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#662D91] hover:text-[#522377] transition-colors self-start cursor-pointer group-hover:translate-x-1 duration-200"
                        >
                          <span>Read more</span>
                          <span className="material-symbols-outlined text-sm">east</span>
                        </button>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Pagination Footer matching Reference UI */}
            {totalPages > 1 && (
              <div className="mt-14 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold">
                {/* Previous Button */}
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">west</span>
                  <span>Previous</span>
                </button>

                {/* Page Number Circles with Navbar Purple #662D91 */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                        currentPage === page 
                          ? 'bg-[#662D91] text-white shadow-xs' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button with Circle Icon in Navbar Purple #662D91 */}
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="flex items-center gap-2.5 text-slate-800 hover:text-[#662D91] transition-colors cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="font-bold text-xs sm:text-sm">Next</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#662D91] text-white flex items-center justify-center group-hover:bg-[#522377] transition-all shadow-xs">
                    <span className="material-symbols-outlined text-sm sm:text-base">east</span>
                  </div>
                </button>
              </div>
            )}

          </div>
        </main>

        <Footer />
      </div>

      {/* Blog Detail Modal View */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-8 border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedBlog.media_url ? (
              <div className="w-full h-64 md:h-80 relative">
                <img src={selectedBlog.media_url} alt={selectedBlog.title} className="w-full h-full object-cover" />
                <button 
                  className="absolute top-4 right-4 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-md"
                  onClick={() => setSelectedBlog(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            ) : (
              <div className="p-6 bg-gradient-to-r from-[#662D91] to-[#522377] text-white flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">School Article</span>
                <button 
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                  onClick={() => setSelectedBlog(null)}
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
            )}
            
            <div className="p-6 md:p-10">
              <div className="flex items-center text-xs font-medium text-slate-500 mb-4 space-x-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_month</span> 
                  {new Date(selectedBlog.created_at || "2026-03-04").toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">person</span> 
                  {selectedBlog.author || 'Admin'}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight mb-6">
                {selectedBlog.title}
              </h2>
              
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap font-normal text-sm sm:text-base">
                {selectedBlog.content}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="bg-[#662D91] hover:bg-[#522377] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
