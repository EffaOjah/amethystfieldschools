export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* ── Top: label + headline ─────────────────────── */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#662D91] uppercase mb-4">
            About the School
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            About Us
          </h2>
          {/* Motto pill */}
          <div className="inline-flex items-center gap-2.5 bg-[#662D91]/8 border border-[#662D91]/15 px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="text-xs font-black tracking-[0.22em] text-[#662D91] uppercase">
              Motto: Modelling Excellence
            </span>
          </div>
        </div>

        {/* ── Content: text left, image right ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 md:mb-28">

          {/* Left — story paragraphs */}
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed">
              Amethyst Field Schools was established in <strong className="text-slate-800 font-semibold">September, 2020</strong> with 25 learners and 10 committed and dedicated members of staff.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              The school was founded by <strong className="text-slate-800 font-semibold">Mr. &amp; Mrs. Timothy Eze</strong> — the Executive Director and the Proprietress.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are located at <strong className="text-slate-800 font-semibold">72 Mayne Avenue, Calabar South, Cross River State, Nigeria.</strong>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              The school was founded with a vision of nurturing the total child across different facets of life — including sound academic excellence, emotional and social balance — while inculcating self-confidence and consistently celebrating outstanding achievement.
            </p>

            {/* Quick facts strip */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '2020', label: 'Established' },
                { value: '500+', label: 'Students' },
                { value: '100%', label: 'Pass Rate' },
              ].map((s, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl p-4 text-center bg-slate-50">
                  <p className="text-2xl font-black text-[#662D91]">{s.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative">
            {/* Decorative offset border */}
            <div className="absolute -inset-3 rounded-3xl border-2 border-[#662D91]/10 translate-x-3 translate-y-3 pointer-events-none" />
            <img
              src="/IMG_1945.JPG.jpeg"
              alt="Amethyst Field Schools student community"
              className="relative w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            {/* Bottom caption tag */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-[#662D91]">Our Community</p>
              <p className="text-slate-700 text-sm font-medium mt-0.5">Calabar South, Cross River State</p>
            </div>
          </div>
        </div>

        {/* ── Mission & Vision ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mission */}
          <div className="group bg-[#662D91] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -right-4 -bottom-10 w-24 h-24 bg-amber-400/10 rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-2xl">target</span>
              </div>
              <p className="text-xs font-bold tracking-[0.25em] text-amber-300 uppercase mb-2">Mission</p>
              <h3 className="text-2xl font-extrabold text-white mb-4 leading-snug">
                What Drives Us
              </h3>
              <p className="text-white/75 text-base leading-relaxed">
                To provide exceptional care to children while fostering each child's intellectual, social, physical and moral development in a nurturing academic environment.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#662D91]/5 rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#662D91]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#662D91] text-2xl">visibility</span>
              </div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#662D91] uppercase mb-2">Vision</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug">
                Where We're Going
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                A community where all children feel loved, respected and encouraged to develop their fullest potential — academically, socially and morally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
