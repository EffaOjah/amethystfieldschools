export default function Footer() {
  return (
    <footer className="bg-secondary w-full pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center sm:text-left">

          {/* Column 1: Logo, Brand & Motto */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/amf-logo.jpg"
                alt="AmethystField Schools"
                className="h-12 w-auto object-contain rounded-full p-0.5 bg-white/10"
              />
              <div className="text-xl md:text-2xl font-extrabold text-accent drop-shadow-sm">
                AmethystField Schools
              </div>
            </div>
            <p className="text-purple-100 italic text-xs md:text-sm uppercase tracking-widest font-black mb-6">
              "Modelling Excellence"
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-base">public</span>
              </a>
              <a 
                href="mailto:amethystfieldschools20@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-base">alternate_email</span>
              </a>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="font-extrabold text-accent mb-4 md:mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-1 w-2/3 sm:w-auto">
              Quick Links
            </h5>
            <ul className="space-y-3 font-medium">
              <li>
                <a className="text-purple-100 hover:text-accent hover:underline decoration-accent transition-all block text-sm md:text-base" href="/academics">
                  Academics
                </a>
              </li>
              <li>
                <a className="text-purple-100 hover:text-accent hover:underline decoration-accent transition-all block text-sm md:text-base" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-purple-100 hover:text-accent hover:underline decoration-accent transition-all block text-sm md:text-base" href="/information">
                  Information
                </a>
              </li>
              <li>
                <a className="text-purple-100 hover:text-accent hover:underline decoration-accent transition-all block text-sm md:text-base" href="/apply">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 md:col-span-1">
            <h5 className="font-extrabold text-accent mb-4 md:mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-1 w-2/3 sm:w-auto">
              Our Campus
            </h5>
            <p className="text-purple-100 mb-4 leading-relaxed text-sm md:text-base font-medium">
              72 Mayne Avenue,<br />
              Calabar, Nigeria.
            </p>
            <div className="space-y-2 text-sm md:text-base text-purple-100 font-medium">
              <p className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-accent text-sm">phone</span>
                <span>+234 816 400 4644</span>
              </p>
              <p className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-accent text-sm">phone</span>
                <span>+234 912 391 1246</span>
              </p>
              <p className="flex items-center gap-2 justify-center sm:justify-start break-all">
                <span className="material-symbols-outlined text-accent text-sm">mail</span>
                <span>amethystfieldschools20@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-purple-200 text-xs md:text-sm font-medium">
            © 2026 AmethystField Schools, Calabar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
