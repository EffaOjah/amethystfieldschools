export default function Extracurriculars() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary text-center uppercase tracking-widest">
            Extracurricular Activities
          </h2>
          <div className="w-24 h-1 bg-accent mt-4"></div>
          <p className="text-slate-500 mt-4 text-center max-w-2xl text-sm md:text-base">
            Discover your passions and build lifelong skills outside the classroom through our diverse range of clubs and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {/* Featured Card */}
          <div className="relative h-64 md:h-[400px] lg:h-[500px] lg:col-span-2 overflow-hidden rounded-3xl group shadow-2xl">
            <img 
              src="/amf-sport2.jpg" 
              alt="Sports" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <span className="bg-accent text-primary text-xs font-black px-3 py-1 uppercase tracking-widest rounded-full mb-4 inline-block shadow-md">Featured</span>
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-widest mb-2 drop-shadow-md">
                Sports & Athletics
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md hidden md:block">
                Develop teamwork, discipline, and physical fitness through our competitive sports programs and state-of-the-art athletic facilities.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 h-full">
            {/* Card 2 */}
            <div className="relative flex-1 w-full overflow-hidden rounded-3xl group shadow-xl min-h-[160px] lg:min-h-[200px]">
              <img 
                src="/amf-career1.jpg" 
                alt="Career Day" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-1">
                  Career Day
                </h3>
                <p className="text-white/70 text-xs hidden sm:block">Explore future professions with industry experts.</p>
              </div>
            </div>

            {/* Card 3 - Replacing Public Speaking with Dance */}
            <div className="relative flex-1 w-full overflow-hidden rounded-3xl group shadow-xl min-h-[160px] lg:min-h-[200px]">
              <img 
                src="/amf-dance.jpg" 
                alt="Dance & Drama" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-1">
                  Dance & Drama
                </h3>
                <p className="text-white/70 text-xs hidden sm:block">Express creativity through performing arts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
