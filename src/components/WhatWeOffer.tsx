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
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">school</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              Academic Activities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              AmethystField Schools comprises Junior and Senior secondary levels focused on fostering virtue, leadership, and academic excellence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">sports_volleyball</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              School Life
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our students are involved in a wide range of extra-curricular activities without compromising their expected academic performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">groups</span>
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">
              Leadership Training
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide an outstanding leadership training package: leadership development as exactly what defines our students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
