export default function WhatWeOffer() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary text-center mb-12 uppercase tracking-tight">
          What we offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">menu_book</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              Exceptional Academics
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A rigorous curriculum designed to challenge our students, directly contributing to our consistent record of top-tier exam performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">domain</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              Modern Facilities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our campus features fully-equipped laboratories, a comprehensive library, and comfortable learning spaces that inspire creativity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">psychology</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              Holistic Development
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Beyond academics, we focus on identifying and nurturing each child's unique talents through robust arts and extracurricular programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
