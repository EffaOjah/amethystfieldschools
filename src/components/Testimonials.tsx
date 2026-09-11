import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mrs. Ngozi Adeyemi",
      role: "Parent of Primary Student",
      textQuote: "Enrolling my child at AmethystField Schools was the best decision. The school's commitment to excellence, combined with its nurturing environment, has significantly shaped my child's growth and academic success.",
      bg: "bg-[#09090b]",
      text: "text-slate-100",
      nameText: "text-white",
      roleText: "text-slate-400",
      starColor: "text-amber-400",
      quoteIcon: "text-slate-700",
      divider: "border-slate-800",
      badgeBg: "bg-emerald-950/60 text-emerald-400 border-emerald-800/60",
      deckColor: "#09090b"
    },
    {
      name: "Mr. Emeka Okafor",
      role: "Parent of Secondary Student",
      textQuote: "AmethystField Schools has been a game-changer. The holistic approach to education and dedicated faculty have fostered not just academic growth but also personal confidence in our son.",
      bg: "bg-[#15803d]",
      text: "text-emerald-50",
      nameText: "text-white",
      roleText: "text-emerald-200",
      starColor: "text-amber-300",
      quoteIcon: "text-emerald-700/60",
      divider: "border-emerald-600/60",
      badgeBg: "bg-emerald-900/60 text-emerald-200 border-emerald-400/60",
      deckColor: "#15803d"
    },
    {
      name: "Mrs. Tola Abubakar",
      role: "Parent of Nursery Student",
      textQuote: "I am delighted with the progress my child has made at AmethystField Schools. The supportive community, comprehensive curriculum, and engaging extracurricular activities are simply exceptional.",
      bg: "bg-[#eab308]",
      text: "text-slate-950",
      nameText: "text-slate-950",
      roleText: "text-amber-950",
      starColor: "text-slate-950",
      quoteIcon: "text-amber-600/50",
      divider: "border-amber-600/40",
      badgeBg: "bg-amber-950/20 text-slate-950 border-amber-900/30",
      deckColor: "#eab308"
    },
    {
      name: "Mrs. Kemi Eze",
      role: "Parent & Community Partner",
      textQuote: "Watching our students grow into confident, disciplined, and visionary young leaders is the ultimate reward. AmethystField Schools models excellence in everything.",
      bg: "bg-[#4c1d95]",
      text: "text-purple-50",
      nameText: "text-white",
      roleText: "text-purple-200",
      starColor: "text-amber-300",
      quoteIcon: "text-purple-700/60",
      divider: "border-purple-600/60",
      badgeBg: "bg-purple-950/60 text-purple-200 border-purple-400/60",
      deckColor: "#4c1d95"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const len = testimonials.length;
  const current = testimonials[currentIndex];
  const nextColor = testimonials[(currentIndex + 1) % len].deckColor;
  const nextNextColor = testimonials[(currentIndex + 2) % len].deckColor;

  return (
    <section className="py-16 md:py-24 bg-slate-100/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-sky-800 uppercase bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200/60 inline-block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight uppercase font-sans">
            What Parents Say
          </h2>
        </div>

        {/* Stacked Cards Deck Area */}
        <div className="w-full relative pt-6">
          
          {/* Topmost Peek Bar (Layer 1) - 2nd Next Card Color */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-12 rounded-2xl shadow-xs pointer-events-none transition-colors duration-500" 
            style={{ backgroundColor: nextNextColor }}
          />

          {/* Middle Peek Bar (Layer 2) - Next Card Color */}
          <div 
            className="absolute top-3 left-1/2 -translate-x-1/2 w-[92%] h-12 rounded-2xl shadow-xs pointer-events-none transition-colors duration-500" 
            style={{ backgroundColor: nextColor }}
          />

          {/* Front Active Swapping Card */}
          <div className={`relative z-10 w-full ${current.bg} rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl overflow-hidden min-h-[280px] flex flex-col justify-between transition-colors duration-500`}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96, y: 12, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12, rotate: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full flex flex-col justify-between"
              >
                {/* Top Row: Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-1 ${current.starColor}`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-lg md:text-xl">★</span>
                    ))}
                  </div>
                  <span className={`material-symbols-outlined ${current.quoteIcon} text-4xl select-none`}>
                    format_quote
                  </span>
                </div>

                {/* Main Quote Text */}
                <p className={`text-lg sm:text-xl md:text-2xl ${current.text} font-normal leading-relaxed font-sans mb-8 italic`}>
                  "{current.textQuote}"
                </p>

                {/* Bottom Row: Author Name & Role */}
                <div className={`border-t ${current.divider} pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2`}>
                  <div>
                    <h4 className={`text-base sm:text-lg font-bold ${current.nameText} font-sans`}>
                      {current.name}
                    </h4>
                    <p className={`text-xs sm:text-sm ${current.roleText} font-medium`}>
                      {current.role}
                    </p>
                  </div>
                  <span className={`text-[11px] font-extrabold tracking-widest uppercase ${current.badgeBg} px-3 py-1 rounded-full border w-fit`}>
                    Verified Parent
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Bottom Interactive Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 bg-white hover:bg-slate-200 text-slate-900 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md border border-slate-200 active:scale-95"
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined text-2xl font-bold">arrow_back</span>
          </button>
          
          <button 
            onClick={handleNext}
            className="w-14 h-14 bg-white hover:bg-slate-200 text-slate-900 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md border border-slate-200 active:scale-95"
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined text-2xl font-bold">arrow_forward</span>
          </button>
        </div>

      </div>
    </section>
  );
}



