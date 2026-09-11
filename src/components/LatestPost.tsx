import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  media_url: string;
  created_at: string;
}

export default function LatestPost() {
  const [latestPost, setLatestPost] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        if (data && data.length > 0) {
          // Assuming the backend returns them in order or we can sort them
          // Just take the first one assuming it's the latest
          const sorted = data.sort((a: Blog, b: Blog) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          setLatestPost(sorted[0]);
        }
      } catch (error) {
        console.error('Failed to fetch latest post:', error);
      }
    };
    fetchBlogs();
  }, []);

  if (!latestPost) return null;

  return (
    <section className="py-16 md:py-24 bg-secondary px-4 md:px-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 uppercase tracking-widest text-accent drop-shadow-sm">
            Latest News
          </h2>
          <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col md:flex-row group cursor-pointer">

          {/* Image Section */}
          <div className="md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden bg-primary/10 flex items-center justify-center">
            {latestPost.media_url ? (
              <img
                src={latestPost.media_url}
                alt={latestPost.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            ) : (
              <span className="material-symbols-outlined text-6xl text-primary/30">article</span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-secondary/90 via-secondary/20 to-transparent"></div>

            <div className="absolute top-6 left-6 bg-white rounded-full p-2 shadow-lg">
              <img src="/amf-logo.jpg" alt="AmethystField Logo" className="w-10 h-10 object-contain rounded-full" />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent text-primary text-xs font-black px-3 py-1 uppercase tracking-widest rounded-full">Blog</span>
              <span className="text-purple-200/70 text-sm font-medium">{new Date(latestPost.created_at).toLocaleDateString()}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors uppercase tracking-tight leading-snug text-white line-clamp-2">
              {latestPost.title}
            </h3>

            <p className="text-purple-100/80 text-sm md:text-base mb-8 leading-relaxed line-clamp-3">
              {latestPost.content}
            </p>

            <div className="mt-auto">
              <Link to="/blogs" className="inline-flex bg-white hover:bg-accent text-primary px-8 py-3 rounded-full font-black text-sm transition-all uppercase tracking-widest shadow-lg hover:-translate-y-1 items-center gap-2 group-hover:text-primary">
                Read Full Update
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
