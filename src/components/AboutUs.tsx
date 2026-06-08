export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-50 px-4 md:px-8 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section: About text & Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-secondary font-extrabold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block border-l-4 border-accent pl-4">
                ABOUT THE SCHOOL
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary mb-6 uppercase tracking-tight">
                About Us
              </h2>

              {/* Motto Tagline */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full shadow-sm hover:bg-primary/10 transition-colors duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-xs md:text-sm font-black tracking-widest text-primary uppercase">
                    MOTTO: MODELING EXCELLENCE
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-slate-700 text-sm md:text-base leading-relaxed mb-8 font-medium">
                <p className="border-l-2 border-primary/20 pl-4 py-1">
                  Amethyst Field Schools was established in September, 2020 with 25 learners and 10 Committed and dedicated staff.
                </p>
                <p className="border-l-2 border-primary/20 pl-4 py-1">
                  The school was founded by Mr. & Mrs. Timothy Eze, the Executive Director and the Proprietress.
                </p>
                <p className="border-l-2 border-primary/20 pl-4 py-1">
                  The school is located at 72 Mayne Avenue, Calabar South, Cross River State, Nigeria.
                </p>
                <p className="border-l-2 border-primary/20 pl-4 py-1">
                  The school was founded with a vision of nurturing the total child in different facets of life which includes sound academic  excellence, emotional and social balance. To inculcate in the learners, self-confidence, consistently celebrates outstanding Academic Performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image with premium styling */}
          <div className="lg:w-1/2 relative min-h-[400px] flex items-center">
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
            <img
              src="/IMG_1945.JPG.jpeg"
              alt="Amethyst Field Schools student community"
              className="w-full h-full min-h-[450px] object-cover rounded-2xl shadow-2xl hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

        </div>

        {/* Bottom Section: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">target</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-primary">
                MISSION
              </h3>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              The Mission of Amethystfield School is to provide exceptional care to children while fostering each child's intellectual, social, physical and moral development in an academic environment.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">visibility</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-primary">
                VISION
              </h3>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              The Vision of Amethystfield Schools is a a community where all children feel loved, respected and encouraged to develop their fullest potential.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
