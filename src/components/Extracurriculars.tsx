export default function Extracurriculars() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8 border-t border-zinc-100 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary text-center mb-12 uppercase tracking-widest border-b-2 border-accent inline-block mx-auto pb-2 left-1/2 -translate-x-1/2 relative">
          Extracurricular Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          
          {/* Card 1 */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm group shadow-xl">
            <img 
              src="/amf-publicspeaking1.jpg" 
              alt="Public Speaking" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base group-hover:text-accent transition-colors">
                Public Speaking
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm group shadow-xl">
            <img 
              src="/amf-sport2.jpg" 
              alt="Sports" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base group-hover:text-accent transition-colors">
                Sports
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm group shadow-xl">
            <img 
              src="/amf-career1.jpg" 
              alt="Career Day" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base group-hover:text-accent transition-colors">
                Career Day
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
