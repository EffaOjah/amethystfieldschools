import TopNav from './TopNav';
import Footer from './Footer';
import PageTransition from './PageTransition';
import Reveal from './Reveal';
import SEO from './SEO';

export default function Academics() {
  const departments = [
    { title: "Sciences", icon: "science", desc: "Physics, Chemistry, Biology, and Advanced Mathematics." },
    { title: "Social Sciences", icon: "public", desc: "Economics, Government, and Geography." },
    { title: "Languages", icon: "language", desc: "English Language, Literature, and Foreign Languages." },
    { title: "Vocational", icon: "architecture", desc: "Visual Arts, Woodwork, and Technical Drawing." },
  ];

  return (
    <PageTransition>
      <SEO 
        title="Academics & Curriculum | Amethyst Field Schools"
        description="Discover the academic programs, foundations, and departments at Amethyst Field Schools. We offer structured curriculums for both Junior and Senior Secondary students."
        canonical="https://amethystfieldschools.com/academics"
      />
      <div className="bg-white min-h-screen">
        <TopNav />
        <main>
          <Reveal delay={0.1}>
            <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 text-center text-white px-4 overflow-hidden">
              {/* Background Image (Bottom Layer) */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              {/* Background Color Overlay (Top Layer) */}
              <div className="absolute inset-0 bg-primary/80"></div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
                  Excellence in Learning
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase">
                  Academics at AmethystField
                </h1>
                <p className="text-lg md:text-xl text-purple-50/90 font-medium font-serif italic max-w-2xl mx-auto">
                  "Modelling Excellence"
                </p>
              </div>
            </div>
          </Reveal>

          <section id="academic-philosophy" className="py-20 md:py-28 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <Reveal delay={0.2} direction="left">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">The "Modelling Excellence" Philosophy</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      At AmethystField Schools, we believe that true education goes beyond textbooks.
                      Our curriculum is designed to challenge the intellect while nurturing the character.
                      Since 2020, we have maintained a standard where academic rigor meets moral virtue.
                    </p>
                    <div className="flex gap-4 items-center p-6 bg-purple-50 border-l-4 border-accent">
                      <span className="material-symbols-outlined text-primary text-4xl">emoji_events</span>
                      <p className="font-bold text-primary">Consistent 100% pass rate in WAEC & NECO examinations.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.3} direction="right">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary p-10 rounded-sm text-on-primary flex flex-col justify-between shadow-lg">
                      <span className="text-4xl font-black opacity-20">01.</span>
                      <div>
                        <h5 className="font-bold text-xl mb-2">Junior School</h5>
                        <p className="text-xs text-purple-100 uppercase tracking-wider">Foundation Years</p>
                      </div>
                    </div>
                    <div className="bg-accent p-10 rounded-sm text-primary flex flex-col justify-between shadow-lg">
                      <span className="text-4xl font-black opacity-20">02.</span>
                      <div>
                        <h5 className="font-bold text-xl mb-2 text-primary">Senior School</h5>
                        <p className="text-xs text-primary/70 uppercase tracking-wider">Career Focus</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.4} direction="up">
                <div className="bg-zinc-50 p-10 md:p-16 rounded-sm border border-zinc-100">
                  <div className="mb-12 text-center md:text-left">
                    <h4 className="text-2xl font-extrabold text-primary uppercase tracking-wider mb-2">
                      Key Academic Departments
                    </h4>
                    <p className="text-slate-500">Specialized learning pathways for every student</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {departments.map((dept, idx) => (
                      <div key={idx} className="group">
                        <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">{dept.icon}</span>
                        </div>
                        <h5 className="font-bold text-primary text-lg mb-3">{dept.title}</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {dept.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5} direction="up">
                <div className="mt-24 flex flex-col md:flex-row items-center gap-12 bg-primary text-white p-10 md:p-16 rounded-sm relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 md:w-2/3">
                    <h4 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">World-Class Learning Facilities</h4>
                    <p className="text-purple-100/90 text-lg mb-8 max-w-xl leading-relaxed">
                      From our Digital Innovation Hub to our advanced science laboratories, we provide the tools required for 21st-century learning.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">ICT Center</div>
                      <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">Physics Lab</div>
                      <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">Chemistry Lab</div>
                    </div>
                  </div>
                  {/* <div className="relative z-10 md:w-1/3 text-center md:text-right">
                      <button className="bg-accent text-primary px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl hover:-translate-y-1">
                        Explore Campus
                      </button>
                    </div> */}
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                </div>
              </Reveal>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
