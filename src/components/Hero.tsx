import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* 4-Image Collage Background */}
      <div className="absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 z-0">
        <img
          src="/IMG_1939.JPG.jpeg"
          alt="Student"
          className="w-full h-full object-cover"
        />
        <img
          src="/amf-sport1.jpg"
          alt="Sports"
          className="w-full h-full object-cover"
        />
        <img
          src="/amf-dance.jpg"
          alt="Dance"
          className="w-full h-full object-cover"
        />
        <img
          src="/amf-publicspeaking1.jpg"
          alt="Public Speaking"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Solid Color Overlay for text readability */}
      <div className="absolute inset-0 bg-slate-950/80 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          className="max-w-4xl flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-lg uppercase">
            AmethystField<br />Schools
          </h1>

          <p className="text-xl md:text-2xl text-accent font-bold mb-8 drop-shadow-md font-serif italic">
            "Modelling Excellence"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/apply" className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-4 md:px-10 md:py-4 w-full sm:w-fit text-sm md:text-base font-black transition-all shadow-xl hover:-translate-y-1 uppercase tracking-[0.15em] flex items-center justify-center gap-2 group mx-auto">
              Apply for Admission
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg md:text-xl">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
