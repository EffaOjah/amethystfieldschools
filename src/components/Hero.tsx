import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col bg-gradient-to-b from-[#6ac3ff] via-[#80ccff] to-[#a0dcff] overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-0">

      {/* Background Soft Atmosphere Glow / Clouds */}
      <div className="absolute top-0 right-10 w-[700px] h-[700px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center relative z-10 pt-2 md:pt-4 lg:pt-6">

        {/* ── MOBILE layout (< lg): stacked column ── */}
        <div className="flex flex-col items-center text-center lg:hidden gap-6 pb-0">
          <motion.div
            className="flex flex-col items-center z-20 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs sm:text-sm font-light tracking-widest text-slate-950 uppercase mb-2 font-sans">
              MODELLING EXCELLENCE FOR A
            </p>
            <h1 className="text-5xl sm:text-6xl font-normal tracking-tight text-slate-950 uppercase leading-[0.9] mb-5 font-sans">
              SMARTER<br />FUTURE
            </h1>
            <Link
              to="/apply"
              className="bg-[#662D91] text-white hover:bg-[#522377] px-7 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase inline-block rounded-md transition-all shadow-md"
            >
              START LEARNING TODAY
            </Link>
          </motion.div>

          <motion.div
            className="w-full flex justify-center items-end pointer-events-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src="/hero-image.png"
              alt="AmethystField Students"
              className="max-h-[320px] sm:max-h-[420px] w-auto object-contain object-bottom drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* ── DESKTOP layout (≥ lg): original absolute-positioned design ── */}
        <div className="relative hidden lg:flex min-h-[640px] items-center">

          {/* Left Side Content */}
          <motion.div
            className="flex flex-col justify-center z-20 py-6 max-w-[600px] -mt-44"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-2xl font-light tracking-wide text-slate-950 uppercase mb-3 font-sans">
              MODELLING EXCELLENCE FOR A
            </p>
            <h1 className="text-[84px] xl:text-[90px] font-normal tracking-tight text-slate-950 uppercase leading-[0.88] mb-8 font-sans">
              SMARTER<br />FUTURE
            </h1>
            <div>
              <Link
                to="/apply"
                className="bg-[#662D91] text-white hover:bg-[#522377] px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase inline-block rounded-md transition-all shadow-md"
              >
                START LEARNING TODAY
              </Link>
            </div>
          </motion.div>

          {/* Cutout Student Image */}
          <motion.div
            className="absolute bottom-0 left-[69%] xl:left-[71%] -translate-x-1/2 z-10 flex justify-center items-end pointer-events-none w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src="/hero-image.png"
              alt="AmethystField Students"
              className="max-h-[670px] xl:max-h-[710px] w-auto object-contain object-bottom drop-shadow-xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
