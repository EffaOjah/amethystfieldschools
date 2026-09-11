export default function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-black tracking-[0.3em] text-xs md:text-sm uppercase mb-2 block">WHY WE STAND OUT</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-primary uppercase tracking-tight">Our Specialized Focus</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border-b-4 border-transparent hover:border-accent">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-4xl md:text-5xl group-hover:text-accent transition-colors">biotech</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-4 text-primary uppercase tracking-wide">STEM Excellence</h3>
            <p className="text-secondary/70 text-sm md:text-base font-medium">Advanced Science, Technology, Engineering, and Math programs with state-of-the-art laboratory facilities.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border-b-4 border-transparent hover:border-accent">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-4xl md:text-5xl group-hover:text-accent transition-colors">palette</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-4 text-primary uppercase tracking-wide">Creative Arts</h3>
            <p className="text-secondary/70 text-sm md:text-base font-medium">Nurturing creative expression through music, visual arts, and drama to build well-rounded individuals.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center group sm:col-span-2 md:col-span-1 border-b-4 border-transparent hover:border-accent">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-4xl md:text-5xl group-hover:text-accent transition-colors">sports_soccer</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-4 text-primary uppercase tracking-wide">Elite Athletics</h3>
            <p className="text-secondary/70 text-sm md:text-base font-medium">Comprehensive sports programs that develop teamwork, discipline, and physical fitness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
