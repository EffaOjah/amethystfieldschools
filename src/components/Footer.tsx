import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#f7f4ff] w-full pt-12 pb-8 border-t border-purple-100/80 overflow-hidden font-sans">
      
      {/* Top Floating CTA Card (Elevated White Card matching Reference Image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-200/70 relative overflow-hidden">
          
          {/* Soft background radial gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
                Enrollment Open
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                Enroll your Child Today!
              </h2>

              <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-xl">
                Empowering future leaders through sound academic excellence, emotional strength, and social balance in a supportive learning environment.
              </p>

              {/* 4 CTA Action Links / Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="bg-[#662D91] text-white hover:bg-[#522377] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                >
                  APPLY FOR ADMISSION
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>

                <Link
                  to="/contact"
                  className="bg-[#662D91] text-white hover:bg-[#522377] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  SCHEDULE A VISIT
                </Link>

                <Link
                  to="/information"
                  className="bg-[#662D91] text-white hover:bg-[#522377] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  DOWNLOAD PROSPECTUS
                </Link>

                <Link
                  to="/contact"
                  className="bg-[#662D91] text-white hover:bg-[#522377] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  MAKE AN ENQUIRY
                </Link>
              </div>
            </div>

            {/* Right Column: Orbit Animation Graphic matching Reference Image (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-6 lg:py-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                
                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-dashed border-slate-200 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-slate-200" />

                {/* Center School Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-xl z-10 border border-slate-100">
                  <img 
                    src="/school-logo.png" 
                    alt="AmethystField Schools Logo" 
                    className="w-full h-full object-contain filter drop-shadow-xs" 
                  />
                </div>

                {/* Orbit Avatar Nodes (Real Student Photos from public folder) */}
                <img 
                  src="/IMG_1939.JPG.jpeg" 
                  alt="Student node" 
                  className="absolute top-2 right-10 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="/IMG_1943.JPG.jpeg" 
                  alt="Student node" 
                  className="absolute bottom-6 left-6 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="/IMG_1945.JPG.jpeg" 
                  alt="Student node" 
                  className="absolute top-1/2 -right-3 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />
                <img 
                  src="/IMG_1940.JPG.jpeg" 
                  alt="Student node" 
                  className="absolute top-6 left-8 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                />

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-slate-800">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/school-logo.png"
                alt="AmethystField Schools Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-950 leading-none">
                  AmethystField Schools
                </span>
                <span className="text-[11px] tracking-[0.18em] font-bold text-slate-600 uppercase mt-0.5">
                  "Modelling Excellence"
                </span>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed font-normal mt-2 max-w-sm">
              Established with a vision of nurturing the total child in sound academic excellence, emotional strength, and social balance.
            </p>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-bold text-slate-950 text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link className="hover:text-slate-950 transition-colors inline-block" to="/academics">
                  Academics
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-950 transition-colors inline-block" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-950 transition-colors inline-block" to="/information">
                  Information
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-950 transition-colors inline-block" to="/apply">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Campus (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-slate-950 text-sm tracking-wider uppercase mb-4">
              Our Campus
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-3">
              72 Mayne Avenue,<br />
              Calabar, Nigeria.
            </p>
            <div className="space-y-2 text-sm text-slate-600 font-medium">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-900 text-base">phone</span>
                <span>+234 816 400 4644</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-900 text-base">phone</span>
                <span>+234 912 391 1246</span>
              </p>
              <p className="flex items-center gap-2 break-all">
                <span className="material-symbols-outlined text-slate-900 text-base">mail</span>
                <span>amethystfieldschools20@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter / Stay Connected (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-slate-950 text-sm tracking-wider uppercase mb-4">
              Newsletter
            </h4>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal mb-4">
              Receive school updates news, exclusive announcements and early access.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-white border border-slate-300 rounded-full py-3 pl-4 pr-12 text-xs md:text-sm text-slate-900 focus:outline-none focus:border-slate-800 shadow-xs"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 w-9 h-9 bg-[#662D91] text-white rounded-full flex items-center justify-center hover:bg-[#522377] transition-all cursor-pointer shadow-xs"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar matching Reference Image */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <p>© 2026 AmethystField Schools, Calabar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
              Facebook
            </a>
            <a href="mailto:amethystfieldschools20@gmail.com" className="hover:text-slate-900 transition-colors">
              Email Us
            </a>
            <Link to="/apply" className="hover:text-slate-900 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* ── Big Brand Watermark ─────────────────────── */}
      <div className="w-full overflow-hidden mt-8 select-none pointer-events-none" aria-hidden="true">
        <p className="text-[clamp(4rem,14vw,11rem)] font-black uppercase tracking-tighter text-slate-200 leading-none whitespace-nowrap -ml-2">
          Amethystfield
        </p>
      </div>

    </footer>
  );
}

