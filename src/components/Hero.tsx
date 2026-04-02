import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[500px] flex items-center pt-40 md:pt-40 overflow-hidden bg-slate-900">
      {/* Single Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/amf-hero.jpg"
          alt="AmethystField Schools campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 bg-gradient-to-r from-black/80 to-transparent z-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-sans font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-lg uppercase">
            AmethystField<br/>Schools
          </h1>

          <p className="text-xl md:text-2xl text-accent font-bold mb-8 drop-shadow-md font-serif italic">
            "Modelling Excellence"
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply" className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-3 md:py-4 w-fit text-sm font-black transition-all shadow-xl hover:-translate-y-1 uppercase tracking-[0.15em] flex items-center justify-center gap-2 group">
              Apply for Admission
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
