import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About Us | Amethyst Field Schools"
        description="Learn about Amethyst Field Schools — our history, founders, mission and vision. Established in 2020 in Calabar, Cross River State, Nigeria."
        canonical="https://amethystfieldschools.com/about"
      />
      <div className="bg-white min-h-screen">
        <TopNav />

        <main>
          {/* ── Hero ─────────────────────────────────────── */}
          <section className="relative min-h-[60vh] flex items-end overflow-hidden">
            {/* BG Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/amf-dance.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#662D91]/65 to-slate-950/40" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-40 w-full">
              <p className="text-amber-300 font-semibold text-sm tracking-[0.3em] uppercase mb-4">About the School</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[0.92] mb-5 max-w-3xl">
                Who We Are
              </h1>
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span className="text-xs font-black tracking-[0.22em] text-white uppercase">
                  Motto: Modelling Excellence
                </span>
              </div>
            </div>
          </section>

          {/* ── Our Story ────────────────────────────────── */}
          <Reveal delay={0.1}>
            <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                {/* Text */}
                <div>
                  <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our Story</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                    A Vision Born<br />in 2020
                  </h2>

                  <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Amethyst Field Schools was established in <strong className="text-slate-800 font-semibold">September, 2020</strong> with 25 learners and 10 committed and dedicated members of staff.
                    </p>
                    <p>
                      The school was founded by <strong className="text-slate-800 font-semibold">Mr. &amp; Mrs. Timothy Eze</strong> — the Executive Director and the Proprietress.
                    </p>
                    <p>
                      We are located at <strong className="text-slate-800 font-semibold">72 Mayne Avenue, Calabar South, Cross River State, Nigeria.</strong>
                    </p>
                    <p>
                      The school was founded with a vision of nurturing the total child across different facets of life — including sound academic excellence, emotional and social balance — while inculcating self-confidence and consistently celebrating outstanding achievement.
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    {[
                      { value: '2020', label: 'Est.' },
                      { value: '500+', label: 'Students' },
                      { value: '100%', label: 'Pass Rate' },
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                        <p className="text-2xl font-black text-[#662D91]">{s.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo */}
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl border-2 border-[#662D91]/10 translate-x-3 translate-y-3 pointer-events-none" />
                  <img
                    src="/IMG_1945.JPG.jpeg"
                    alt="Amethyst Field Schools student community"
                    className="relative w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#662D91]">Our Community</p>
                    <p className="text-slate-700 text-sm font-medium mt-0.5">Calabar South, Cross River State</p>
                  </div>
                </div>

              </div>
            </section>
          </Reveal>

          {/* ── Mission & Vision ──────────────────────────── */}
          <Reveal delay={0.15}>
            <section className="py-20 md:py-24 px-6 sm:px-10 lg:px-16 bg-slate-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                  <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Purpose</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Mission &amp; Vision</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mission */}
                  <div className="bg-[#662D91] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
                    <div className="absolute -right-4 -bottom-10 w-24 h-24 bg-amber-400/10 rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-white text-2xl">target</span>
                      </div>
                      <p className="text-xs font-bold tracking-[0.25em] text-amber-300 uppercase mb-2">Mission</p>
                      <h3 className="text-2xl font-extrabold text-white mb-4 leading-snug">What Drives Us</h3>
                      <p className="text-white/75 text-base leading-relaxed">
                        To provide exceptional care to children while fostering each child's intellectual, social, physical and moral development in a nurturing academic environment.
                      </p>
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-sm">
                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#662D91]/5 rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-[#662D91]/10 flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-[#662D91] text-2xl">visibility</span>
                      </div>
                      <p className="text-xs font-bold tracking-[0.25em] text-[#662D91] uppercase mb-2">Vision</p>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug">Where We're Going</h3>
                      <p className="text-slate-600 text-base leading-relaxed">
                        A community where all children feel loved, respected and encouraged to develop their fullest potential — academically, socially and morally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Founders ─────────────────────────────────── */}
          <Reveal delay={0.1}>
            <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                  <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Founders</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {[
                    { name: 'Mr. Timothy Eze', role: 'Executive Director', icon: 'manage_accounts' },
                    { name: 'Mrs. Timothy Eze', role: 'Proprietress', icon: 'supervisor_account' },
                  ].map((f, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-[#662D91] flex items-center justify-center mb-5 shadow-lg">
                        <span className="material-symbols-outlined text-white text-3xl">{f.icon}</span>
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-1">{f.name}</h4>
                      <p className="text-[#662D91] text-sm font-semibold uppercase tracking-wider">{f.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── CTA ──────────────────────────────────────── */}
          <Reveal delay={0.1}>
            <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-[#662D91] to-[#9B59B6]">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Become Part of Our Story</h2>
                  <p className="text-purple-100 text-lg">Applications are open. Join the AmethystField family today.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 bg-white text-[#662D91] hover:bg-purple-50 font-black px-8 py-4 rounded-md uppercase tracking-wider text-sm transition-all shadow-xl"
                  >
                    Apply Now
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link
                    to="/information"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-md uppercase tracking-wider text-sm transition-all"
                  >
                    Learn More
                  </Link>
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
