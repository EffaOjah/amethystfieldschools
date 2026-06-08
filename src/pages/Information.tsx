import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function Information() {
  const termDates = [
    { event: "Resumption for 1st Term", date: "September 11, 2025" },
    { event: "Mid-Term Break", date: "October 26 - 30, 2025" },
    { event: "End of 1st Term", date: "December 15, 2025" },
    { event: "Resumption for 2nd Term", date: "January 8, 2026" },
  ];

  const facilities = [
    { title: "ICT Innovation Hub", desc: "State-of-the-art computer labs with high-speed internet." },
    { title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs." },
    { title: "Sports Complex", desc: "Standard football pitch and multipurpose courts." },
    { title: "Art & Music Studio", desc: "Creative spaces for visual and performing arts." },
  ];

  return (
    <PageTransition>
      <SEO 
        title="School Information & Calendar | Amethyst Field Schools"
        description="Access key information about Amethyst Field Schools. View the academic planner, admission procedures, facilities, and school policy guidelines."
        canonical="https://amethystfieldschools.com/information"
      />
      <div className="bg-white min-h-screen">
        <TopNav />
        <main>
          <Reveal delay={0.1}>
            <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-primary text-center text-white px-4">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase tracking-tight">School Information</h1>
                <p className="text-lg text-purple-50/80 max-w-2xl mx-auto font-serif italic text-pretty">
                  Essential details for parents, students, and prospective families.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <section className="py-20 md:py-28 px-4 md:px-8 bg-zinc-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 uppercase tracking-widest border-b-2 border-accent inline-block pb-2">Academic Calendar</h2>
                  <p className="text-slate-500 font-medium">Key dates for the 2025/2026 academic session</p>
                </div>
                <div className="bg-white rounded-sm shadow-xl border border-zinc-200 overflow-hidden max-w-3xl mx-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Event</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {termDates.map((date, idx) => (
                        <tr key={idx} className="hover:bg-purple-50 transition-colors">
                          <td className="px-6 py-6 font-medium text-slate-800">{date.event}</td>
                          <td className="px-6 py-6 text-slate-600">{date.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-6 bg-purple-50/50 border-t border-purple-100 text-center">
                    <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-accent transition-colors">
                      <span className="material-symbols-outlined">download</span>
                      Download Full Academic Planner (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <section className="py-20 md:py-28 px-4 md:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 uppercase tracking-widest border-b-2 border-accent inline-block pb-2">Admissions Process</h2>
                  <p className="text-slate-500 font-medium">How to join the AmethystField Schools family</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Enquiry", desc: "Contact our admissions office or visit the campus." },
                    { step: "02", title: "Form Purchase", desc: "Obtain the application form from the school office." },
                    { step: "03", title: "Entrance Exam", desc: "Participate in our standardized placement assessment." },
                    { step: "04", title: "Registration", desc: "Complete registration upon successful admission." }
                  ].map((item, idx) => (
                    <div key={idx} className="relative p-8 bg-white border border-zinc-100 rounded-sm hover:shadow-2xl transition-all group">
                      <span className="text-5xl font-black text-primary/5 absolute top-4 right-4 group-hover:text-accent/20 transition-colors">{item.step}</span>
                      <h3 className="text-xl font-bold text-primary mb-4 relative z-10 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 text-center">
                  <button className="bg-primary text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-2xl hover:-translate-y-1">
                    Start Admission Now
                  </button>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.4} direction="left">
            <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-wider">World-Class Facilities</h2>
                    <p className="text-purple-100/80 text-lg leading-relaxed">
                      We provide an environment that inspires excellence and creativity. Our facilities are designed to meet global standards.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right">
                    <div className="w-24 h-1 bg-accent ml-auto mb-4"></div>
                    <p className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Learning without limits</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  {facilities.map((fac, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors shadow-lg">
                      <h4 className="text-xl font-bold mb-3 text-accent uppercase tracking-tight">{fac.title}</h4>
                      <p className="text-purple-50/70 text-sm leading-relaxed">{fac.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.5} direction="up">
            <section className="py-20 md:py-28 px-4 md:px-8 bg-zinc-50">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 border-2 border-primary/10 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000&auto=format&fit=crop" 
                    alt="School Handbook" 
                    className="rounded-sm shadow-2xl border-b-8 border-accent"
                  />
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-wider border-l-4 border-accent pl-4">Policies & Guidelines</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We believe in transparency and clear communication. Our student handbook contains everything you need to know about our code of conduct, uniform policies, and more.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Student Code of Conduct",
                      "Uniform & Appearance Policy",
                      "ICT Usage Guidelines",
                      "Health & Safety Manual"
                    ].map((policy, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-zinc-200 hover:border-accent transition-colors cursor-pointer shadow-sm group">
                        <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">description</span>
                        <span className="font-bold text-primary text-sm uppercase tracking-wider group-hover:text-accent transition-colors">{policy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
