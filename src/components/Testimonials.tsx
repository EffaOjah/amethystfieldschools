export default function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Ngozi Adeyemi",
      role: "Parent",
      text: "Enrolling my child at AmethystField Schools was the best decision. The school's commitment to excellence, combined with its nurturing environment, has significantly shaped my child's growth and academic success. I'm impressed!",
      initials: "NA"
    },
    {
      name: "Mr. Emeka Okafor",
      role: "Parent",
      text: "Choosing AmethystField Schools for my child was a game-changer. The school's holistic approach to education and the dedicated faculty have fostered not just academic growth but also personal development. Kudos to AmethystField!",
      initials: "EO"
    },
    {
      name: "Mrs. Tola Abubakar",
      role: "Parent",
      text: "I am delighted with the progress my child has made at AmethystField Schools. The supportive community, comprehensive curriculum, and engaging extracurricular activities have contributed immensely to my child's all-around development.",
      initials: "TA"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-zinc-50 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative dark background for the top half */}
      <div className="absolute top-0 left-0 w-full h-[55%] bg-slate-900 rounded-b-[3rem] md:rounded-b-[5rem] z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 bg-accent/10 px-4 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white text-center uppercase tracking-widest drop-shadow-sm">
            What Parents Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative group border border-zinc-100 flex flex-col h-full">
              <span className="material-symbols-outlined absolute top-8 right-8 text-7xl text-primary/5 group-hover:text-primary/10 transition-colors duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed mb-10 relative z-10 flex-grow text-sm md:text-base italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-zinc-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl shadow-inner">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-primary font-bold text-lg">{t.name}</h4>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
