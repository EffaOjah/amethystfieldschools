export default function Mission() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-100 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-secondary font-extrabold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block border-l-4 border-accent pl-4">ABOUT THE SCHOOL</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-primary mb-6 uppercase tracking-tight">Our Mission</h2>
            <div className="p-8 bg-purple-50 rounded-2xl border-l-8 border-primary shadow-lg">
              <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed italic">
                "To nurture a generation of leaders through the integration of <span className="text-accent font-black bg-primary px-2 py-1 rounded-sm not-italic shadow-sm">Modelling Excellence</span>, ensuring every student excels both intellectually and morally."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 text-center sm:text-left hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">verified_user</span>
              </div>
              <h4 className="font-extrabold mb-2 text-lg text-primary uppercase tracking-wider">Integrity</h4>
              <p className="text-sm text-on-surface-variant font-medium">We uphold the highest moral standards in all our academic pursuits.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 text-center sm:text-left hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">emoji_events</span>
              </div>
              <h4 className="font-extrabold mb-2 text-lg text-primary uppercase tracking-wider">Excellence</h4>
              <p className="text-sm text-on-surface-variant font-medium">Striving for the best in every student's unique learning journey.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 text-center sm:text-left hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">groups</span>
              </div>
              <h4 className="font-extrabold mb-2 text-lg text-primary uppercase tracking-wider">Community</h4>
              <p className="text-sm text-on-surface-variant font-medium">Fostering a sense of belonging and global citizenship.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 text-center sm:text-left hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">lightbulb</span>
              </div>
              <h4 className="font-extrabold mb-2 text-lg text-primary uppercase tracking-wider">Innovation</h4>
              <p className="text-sm text-on-surface-variant font-medium">Embracing modern techniques to prepare students for the future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
