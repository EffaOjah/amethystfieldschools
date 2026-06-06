export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">

        {/* Left Column: Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold font-sans text-primary mb-6 uppercase tracking-widest border-l-4 border-accent pl-4">
            About Us
          </h2>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed mb-10">
            <p className="font-medium text-slate-900 italic">
              "Modelling Excellence since 2006"
            </p>
            <p>
              Founded in 2006, <span className="font-bold text-primary">AmethystField Schools</span> is a dynamic
              co-educational school in Nigeria dedicated to connecting
              people and ideas. We provide an exceptional educational experience
              built on a strong foundation of high moral standards and unmatched
              academic rigor, ensuring every student is prepared to lead globally.
            </p>
            <p>
              Our learning programs focus on developing academic excellence, critical
              thinking skills, problem-solving abilities, and global awareness. We
              encourage our students to reach their highest potential in a carefully
              designed environment.
            </p>
            <p>
              Located in the heart of Calabar, our campus provides a serene and secure
              environment for all our learners. We combine modern teaching methods with
              a deep respect for our cultural heritage, fostering a well-rounded
              development strategy.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-black text-primary">15+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">100%</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">WAEC Pass Rate</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 relative">
          <div className="absolute -inset-4 border-2 border-primary/10 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
          <img
            src="/IMG_1945.JPG.jpeg"
            alt="AmethystField student leadership"
            className="w-full h-full min-h-[500px] object-cover rounded-sm shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
