export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8 border-b border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-black tracking-[0.3em] text-xs md:text-sm uppercase mb-2 block border-l-4 border-accent pl-4">CURRICULUM</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-primary uppercase tracking-tight">Our Educational Programs</h2>
          </div>
          <p className="text-on-surface-variant md:max-w-xs text-left md:text-right text-sm md:text-base font-medium">Comprehensive secondary education designed to prepare students for global leadership and academic excellence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Junior Secondary */}
          <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl group-hover:text-primary">menu_book</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 text-primary uppercase tracking-wide">Junior Secondary</h3>
            <p className="text-secondary/70 leading-relaxed text-sm md:text-base">A strong foundational phase focusing on broad academic exploration and critical thinking skills for young teenagers.</p>
            <div className="w-12 h-1 bg-accent mt-6 transition-all group-hover:w-full"></div>
          </div>
          {/* Senior Secondary */}
          <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl group-hover:text-primary">science</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 text-primary uppercase tracking-wide">Senior Secondary</h3>
            <p className="text-secondary/70 leading-relaxed text-sm md:text-base">Specialized pathways in Sciences, Arts, and Commerce to prepare students for national and international examinations.</p>
            <div className="w-12 h-1 bg-accent mt-6 transition-all group-hover:w-full"></div>
          </div>
          {/* Advanced Level */}
          <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl group-hover:text-primary">school</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 text-primary uppercase tracking-wide">Advanced Studies</h3>
            <p className="text-secondary/70 leading-relaxed text-sm md:text-base">Rigorous preparatory programs including A-Levels and SAT prep for seamless transition into top-tier universities.</p>
            <div className="w-12 h-1 bg-accent mt-6 transition-all group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
