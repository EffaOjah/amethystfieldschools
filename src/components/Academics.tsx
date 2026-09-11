import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';
import PageTransition from './PageTransition';
import Reveal from './Reveal';
import SEO from './SEO';

/* ─── Data ──────────────────────────────────────────────── */
const stats = [
  { value: '100%', label: 'WAEC / NECO Pass Rate' },
  { value: '500+', label: 'Students Enrolled' },
  { value: '4', label: 'Academic Departments' },
  { value: '2020', label: 'Year Established' },
];

const programs = [
  {
    id: 'nursery',
    label: 'Nursery & Primary',
    icon: 'child_care',
    tagline: 'Building Bright Foundations',
    description:
      'Our Nursery & Primary school provides a nurturing, play-based environment where young learners develop core literacy, numeracy, and social skills. Small class sizes and caring educators ensure every child thrives from day one.',
    highlights: [
      'Phonics-based reading programme',
      'STEM exploration through play',
      'Social & emotional learning',
      'Bilingual exposure (English & Yoruba)',
      'Arts, Music & Physical Education',
    ],
    accent: 'from-sky-400 to-blue-600',
    light: 'bg-sky-50',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'junior',
    label: 'Junior Secondary',
    icon: 'school',
    tagline: 'Developing Critical Thinkers',
    description:
      'JSS 1 – 3 students follow the national curriculum enriched with 21st-century skills. We prepare every student for Senior School with a balance of academic rigour, character development and co-curricular excellence.',
    highlights: [
      'BECE / JSS Examinations Preparation',
      'Sciences, Social Studies & Languages',
      'Introduction to ICT & Coding',
      'Leadership & Debate Clubs',
      'Sports Academy Pathway',
    ],
    accent: 'from-violet-500 to-purple-700',
    light: 'bg-purple-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'senior',
    label: 'Senior Secondary',
    icon: 'workspace_premium',
    tagline: 'Shaping Future Leaders',
    description:
      'SS 1 – 3 students choose from Science, Social Science, and Commercial tracks. Expert faculty and modern labs ensure top performance in WAEC, NECO and UTME, with consistent 100 % pass rates since inception.',
    highlights: [
      'Science, Social Science & Commercial tracks',
      'Dedicated WAEC / NECO preparation',
      'JAMB / UTME coaching',
      'University & career counselling',
      'Advanced Lab & ICT access',
    ],
    accent: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
];

const departments = [
  {
    title: 'Sciences',
    icon: 'science',
    desc: 'Physics, Chemistry, Biology and Advanced Mathematics — equipping students for STEM careers.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Social Sciences',
    icon: 'public',
    desc: 'Economics, Government, and Geography — building analytical and civic understanding.',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    title: 'Languages',
    icon: 'language',
    desc: 'English Language, Literature & Foreign Languages — cultivating communication excellence.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Vocational',
    icon: 'architecture',
    desc: 'Visual Arts, Woodwork and Technical Drawing — fostering creativity and practical skills.',
    gradient: 'from-amber-400 to-orange-500',
  },
];

/* ─── Component ─────────────────────────────────────────── */
export default function Academics() {
  const [activeTab, setActiveTab] = useState('junior');
  const active = programs.find(p => p.id === activeTab)!;

  return (
    <PageTransition>
      <SEO
        title="Academics & Curriculum | Amethyst Field Schools"
        description="Discover the academic programs, foundations, and departments at Amethyst Field Schools. We offer structured curriculums for Nursery, Junior and Senior Secondary students."
        canonical="https://amethystfieldschools.com/academics"
      />
      <div className="bg-white min-h-screen">
        <TopNav />

        <main>
          {/* ── Hero ──────────────────────────────────────── */}
          <section className="relative min-h-screen flex flex-col overflow-hidden">
            {/* BG Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')" }}
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-[#662D91]/50 to-slate-950/90" />

            {/* ── Centered hero content ── */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 pt-32 pb-10">
              {/* Badge pill */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full mb-6">
                <svg className="w-4 h-4 text-amber-300 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Excellence in Education since 2020
              </span>

              {/* Section label */}
              <p className="text-amber-300 font-semibold text-sm tracking-[0.3em] uppercase mb-4">
                Academics
              </p>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[0.92] mb-6 max-w-4xl">
                Shaping Minds.<br />Building Futures.
              </h1>

              {/* Sub-text */}
              <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                A world-class curriculum that blends academic rigour with character,<br className="hidden md:block" /> creativity, and 21st-century skills.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 bg-[#662D91] hover:bg-[#522377] text-white font-bold px-9 py-4 rounded-md tracking-wider uppercase text-sm transition-all shadow-xl"
                >
                  Apply Now
                  <span className="material-symbols-outlined text-base leading-none">arrow_forward</span>
                </Link>
                <a
                  href="#academic-philosophy"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-9 py-4 rounded-md tracking-wider uppercase text-sm transition-all backdrop-blur-sm"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>

            {/* Stats bar pinned to bottom */}
            <div className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/10">
              <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                {stats.map((s, i) => (
                  <div key={i} className="py-7 px-4 text-center">
                    <p className="text-3xl sm:text-4xl font-black text-white">{s.value}</p>
                    <p className="text-white/50 text-[11px] uppercase tracking-widest mt-1.5 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Philosophy Strip ──────────────────────────── */}
          <Reveal delay={0.1}>
            <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div>
                  <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Philosophy</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                    The "Modelling Excellence" Standard
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    At AmethystField Schools, true education goes beyond textbooks. Our curriculum challenges
                    the intellect while nurturing character — because academic rigour and moral virtue must grow together.
                  </p>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-purple-50 border border-purple-100">
                    <div className="w-12 h-12 shrink-0 bg-[#662D91] rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">emoji_events</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 leading-snug">100% WAEC &amp; NECO Pass Rate</p>
                      <p className="text-slate-500 text-sm mt-1">Maintained every year since our founding in 2020.</p>
                    </div>
                  </div>
                </div>

                {/* Visual stat cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '01', title: 'Nursery & Primary', sub: 'Foundation Years', bg: 'bg-sky-600' },
                    { num: '02', title: 'Junior Secondary', sub: 'JSS 1 – 3', bg: 'bg-[#662D91]' },
                    { num: '03', title: 'Senior Secondary', sub: 'SS 1 – 3', bg: 'bg-amber-500' },
                    { num: '04', title: 'WAEC / JAMB', sub: 'Examination Prep', bg: 'bg-slate-800' },
                  ].map((card, i) => (
                    <div key={i} className={`${card.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[140px] shadow-lg`}>
                      <span className="text-4xl font-black text-white/15">{card.num}</span>
                      <div>
                        <p className="font-bold text-white text-base leading-snug">{card.title}</p>
                        <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{card.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Programs Tabs ─────────────────────────────── */}
          <section className="bg-slate-50 py-20 md:py-28">
            <Reveal delay={0.15}>
              <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="text-center mb-12">
                  <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Academic Programmes</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Choose Your Path</h2>
                </div>

                {/* Tab switcher */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {programs.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveTab(p.id)}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all border ${
                        activeTab === p.id
                          ? 'bg-[#662D91] text-white border-[#662D91] shadow-lg shadow-purple-200'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300 hover:text-[#662D91]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">{p.icon}</span>
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Active tab card */}
                <div className={`rounded-3xl border ${active.border} ${active.light} p-8 md:p-12 transition-all duration-300`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className={`inline-flex items-center gap-2 ${active.badge} text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5`}>
                        <span className="material-symbols-outlined text-sm">{active.icon}</span>
                        {active.label}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{active.tagline}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{active.description}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Programme Highlights</p>
                      <ul className="space-y-3">
                        {active.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${active.accent} flex items-center justify-center shrink-0 shadow-sm`}>
                              <span className="material-symbols-outlined text-white text-sm">check</span>
                            </div>
                            <span className="text-slate-700 font-medium">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/apply"
                        className="inline-flex items-center gap-2 mt-8 bg-[#662D91] hover:bg-[#522377] text-white font-bold px-7 py-3.5 rounded-md text-sm uppercase tracking-wider transition-all shadow-md"
                      >
                        Apply for this programme
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ── Departments ───────────────────────────────── */}
          <Reveal delay={0.2}>
            <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Specialisations</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Key Academic Departments</h2>
                <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">Specialised learning pathways designed to match every student's strengths and aspirations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center shadow-md`}>
                      <span className="material-symbols-outlined text-white text-2xl">{dept.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{dept.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{dept.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ── Facilities ──────────────────────────────── */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
            <Reveal delay={0.2}>
              <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Section header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                  <div>
                    <p className="text-[#662D91] font-semibold text-sm tracking-[0.2em] uppercase mb-3">Infrastructure</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                      World-Class<br />Facilities
                    </h2>
                  </div>
                  <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                    From our Innovation Hub to advanced laboratories — every space is designed to inspire the next generation.
                  </p>
                </div>

                {/* Featured top card (full-width image banner) */}
                <div className="relative rounded-3xl overflow-hidden mb-6 h-64 md:h-80">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#662D91]/90 via-[#662D91]/60 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-14">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-white text-2xl">computer</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">ICT &amp; Innovation Hub</h3>
                    <p className="text-white/75 max-w-md text-sm leading-relaxed">High-speed internet, modern workstations and coding tools empowering digital-age learners to build, create, and innovate.</p>
                  </div>
                </div>

                {/* 4-card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { icon: 'biotech',        title: 'Science Laboratories',       desc: 'Fully-equipped Physics, Chemistry and Biology labs for hands-on discovery.',          gradient: 'from-cyan-500 to-blue-600' },
                    { icon: 'library_books',  title: 'Library & Resource Centre',  desc: 'Thousands of curated books and digital resources to fuel every curiosity.',           gradient: 'from-violet-500 to-purple-700' },
                    { icon: 'sports_soccer',  title: 'Sports Complex',             desc: 'Football pitch, basketball courts and athletics track for holistic development.',       gradient: 'from-emerald-500 to-teal-600' },
                    { icon: 'palette',        title: 'Creative Arts Studio',       desc: 'Purpose-built space for visual arts, music and drama to unleash creative talent.',     gradient: 'from-rose-500 to-pink-600' },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md`}>
                        <span className="material-symbols-outlined text-white text-2xl">{f.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1.5">{f.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          </section>


          {/* ── CTA Strip ─────────────────────────────────── */}
          <Reveal delay={0.15}>
            <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-[#662D91] to-[#9B59B6]">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Ready to join AmethystField?</h2>
                  <p className="text-purple-100 text-lg">Applications are open. Secure your child's place today.</p>
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
