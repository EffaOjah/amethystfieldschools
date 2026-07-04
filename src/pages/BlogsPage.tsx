import { useState, useEffect } from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import api from '../api'

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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <PageTransition>
      <SEO 
        title="School Blog | Amethyst Field Schools"
        description="Read our latest news, articles, and updates from Amethyst Field Schools."
      />
      <div className="bg-white text-on-surface font-body min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-grow">
          <Reveal delay={0.1}>
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 bg-primary text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Our Blog</h1>
              <p className="text-lg text-purple-50/80 max-w-2xl mx-auto font-serif italic">
                Stay updated with the latest news and articles.
              </p>
            </div>
          </Reveal>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col">
                  {blog.media_url ? (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                      <img 
                        src={blog.media_url} 
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] w-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-primary/40">article</span>
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-slate-500 mb-3 space-x-2">
                      <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>By {blog.author || 'Admin'}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{blog.content}</p>
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="text-primary font-bold hover:text-accent transition-colors self-start flex items-center gap-1"
                    >
                      Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {blogs.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                <span className="material-symbols-outlined text-6xl mb-4 block opacity-50">newspaper</span>
                <p className="text-lg">No blogs available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedBlog.media_url && (
              <div className="w-full h-64 md:h-96 relative">
                <img src={selectedBlog.media_url} alt={selectedBlog.title} className="w-full h-full object-cover" />
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedBlog(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            )}
            
            <div className={`p-8 md:p-12 ${!selectedBlog.media_url ? 'pt-16 relative' : ''}`}>
              {!selectedBlog.media_url && (
                <button 
                  className="absolute top-6 right-6 bg-slate-100 text-slate-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  onClick={() => setSelectedBlog(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
              
              <div className="flex items-center text-sm text-slate-500 mb-4 space-x-3">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_month</span> {new Date(selectedBlog.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> {selectedBlog.author || 'Admin'}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8">{selectedBlog.title}</h2>
              
              <div className="prose prose-lg max-w-none text-slate-700 whitespace-pre-wrap">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  )
}
