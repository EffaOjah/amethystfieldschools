export default function Statistics() {
  return (
    <section className="py-16 bg-white px-4 md:px-8 border-b border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center text-center gap-y-12">

          <div className="w-1/2 md:w-auto px-6 group cursor-default">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
              900<span className="text-2xl md:text-3xl align-top text-accent">+</span>
            </h3>
            <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
              Students Admitted
            </p>
            <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="w-1/2 md:w-auto px-6 group cursor-default">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
              100<span className="text-2xl md:text-3xl align-top text-accent">%</span>
            </h3>
            <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
              Pass Rate
            </p>
            <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="w-1/2 md:w-auto px-6 group cursor-default">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
              50<span className="text-2xl md:text-3xl align-top text-accent">+</span>
            </h3>
            <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
              Expert Staff
            </p>
            <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="w-1/2 md:w-auto px-6 group cursor-default">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
              20<span className="text-2xl md:text-3xl align-top text-accent">+</span>
            </h3>
            <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
              Subjects
            </p>
            <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="w-1/2 md:w-auto px-6 mx-auto md:mx-0 group cursor-default">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
              15<span className="text-2xl md:text-3xl align-top text-accent">+</span>
            </h3>
            <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
              Student Clubs
            </p>
            <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
