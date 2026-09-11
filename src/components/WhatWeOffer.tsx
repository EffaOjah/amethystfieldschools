export default function WhatWeOffer() {
  return (
    <section className="py-6 lg:py-10 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Exceptional Academics (menu_book) */}
          <div className="bg-[#eaf5ff] p-6 lg:p-7 rounded-none border border-sky-100/80 flex flex-col justify-between relative overflow-hidden min-h-[260px] lg:min-h-[285px]">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs font-bold tracking-wider text-slate-800 uppercase leading-tight">
                  AVERAGE<br />RATING
                </div>
                <div className="flex items-baseline gap-1 text-slate-950 font-extrabold text-4xl lg:text-5xl tracking-tight leading-none">
                  4.9
                  <span className="text-amber-500 text-lg font-normal self-start -mt-0.5">★</span>
                </div>
              </div>
              
              <h3 className="text-base font-extrabold text-slate-950 tracking-tight uppercase mb-1.5">
                Exceptional Academics
              </h3>
            </div>

            <div>
              <div className="w-full border-t border-sky-200/90 mb-3.5" />
              
              <div className="flex items-end justify-between gap-3">
                <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-normal max-w-[210px] lg:max-w-[230px]">
                  A rigorous curriculum designed to challenge students, directly contributing to our consistent record of top-tier exam performance.
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xs border border-sky-200/60 text-sky-600">
                    <span className="material-symbols-outlined text-lg">menu_book</span>
                  </div>
                  <div className="w-9 h-9 bg-[#662D91] rounded-full flex items-center justify-center shadow-xs text-white">
                    <span className="material-symbols-outlined text-lg">north_east</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Facilities (domain & school-image.png) */}
          <div className="bg-[#fef3e7] rounded-none border border-orange-100/80 flex flex-col justify-between relative overflow-hidden min-h-[260px] lg:min-h-[285px]">
            {/* Top Section: Domain Logo Icon + Title + Description */}
            <div className="p-6 lg:p-7 z-10 relative">
              <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-xs mb-3">
                <span className="material-symbols-outlined text-lg">domain</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 tracking-tight uppercase leading-tight mb-2">
                Modern Facilities
              </h3>
              <p className="text-xs lg:text-sm text-slate-800 leading-relaxed font-medium">
                Our campus features fully-equipped laboratories, a comprehensive library, and comfortable learning spaces that inspire creativity.
              </p>
            </div>

            {/* Bottom Section: Compact school-image.png below text */}
            <div className="w-full h-32 lg:h-36 relative z-0 overflow-hidden pointer-events-none mt-auto">
              <img 
                src="/school-image.png" 
                alt="AmethystField Modern Campus Facilities" 
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
            </div>
          </div>

          {/* Card 3: Holistic Development (psychology) */}
          <div className="bg-[#eff3f6] p-6 lg:p-7 rounded-none border border-slate-200/80 flex flex-col justify-between relative overflow-hidden min-h-[260px] lg:min-h-[285px]">
            <div className="relative z-10 max-w-[65%]">
              <div className="text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-none mb-3">
                200+
              </div>

              <h3 className="text-xs lg:text-sm font-bold tracking-wider text-slate-900 uppercase leading-snug mb-2">
                Holistic Development
              </h3>

              <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-normal">
                Beyond academics, we focus on identifying and nurturing each child's unique talents through robust arts and extracurricular programs.
              </p>
            </div>

            {/* Giant Seal Graphic with Psychology Icon on Right */}
            <div className="absolute -right-6 -bottom-6 w-38 h-38 lg:w-46 lg:h-46 rounded-full border-[8px] border-[#e2e8ee] bg-[#e6ebf0] flex items-center justify-center pointer-events-none opacity-90 shadow-xs">
              <div className="w-24 h-24 lg:w-30 lg:h-30 rounded-full border-4 border-[#d5dee6] bg-[#dae3eb] flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-slate-600/90 text-4xl lg:text-5xl">psychology</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



