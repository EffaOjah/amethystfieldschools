export default function Partners() {
  return (
    <section className="py-16 bg-white px-4 md:px-8 border-t border-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-sans font-black text-primary text-center mb-12 uppercase tracking-[0.2em]">
          Our Educational Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
          {/* Using placeholder logos representing educational partners */}
          <div className="px-4 py-2 font-black text-2xl text-secondary tracking-tighter hover:text-primary transition-colors cursor-default">British Council</div>
          <div className="px-4 py-2 font-black text-2xl text-secondary tracking-tighter hover:text-primary transition-colors cursor-default">Cambridge</div>
          <div className="px-4 py-2 font-black text-2xl text-secondary tracking-tighter hover:text-primary transition-colors cursor-default">WAEC</div>
          <div className="px-4 py-2 font-black text-2xl text-secondary tracking-tighter hover:text-primary transition-colors cursor-default">NECO</div>
          <div className="px-4 py-2 font-black text-2xl text-secondary tracking-tighter hover:text-primary transition-colors cursor-default">IELTS</div>
        </div>
      </div>
    </section>
  );
}
