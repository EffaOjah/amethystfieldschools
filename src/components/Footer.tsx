export default function Footer() {
  return (
    <footer className="bg-secondary w-full pt-16 pb-8 border-t border-primary/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 max-w-7xl mx-auto text-white">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <img src="/amf-logo.jpg" alt="AmethystField Schools" className="h-10 md:h-12 w-auto object-contain rounded-full p-0.5" />
            <div className="text-xl md:text-2xl font-extrabold text-accent drop-shadow-sm">AmethystField Schools</div>
          </div>
          <p className="text-purple-100 mb-6 italic text-sm md:text-base uppercase tracking-widest font-bold">"Modelling Excellence"</p>
          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-base">public</span></span>
            <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-base">link</span></span>
            <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-base">alternate_email</span></span>
          </div>
        </div>
        <div>
          <h5 className="font-extrabold text-white mb-4 md:mb-6 uppercase tracking-wider text-sm">Quick Links</h5>
          <ul className="space-y-3 md:space-y-4">
            <li><a className="text-purple-50 hover:text-accent transition-colors block text-sm md:text-base" href="#">Privacy Policy</a></li>
            <li><a className="text-purple-50 hover:text-accent transition-colors block text-sm md:text-base" href="#">Terms of Service</a></li>
            <li><a className="text-purple-50 hover:text-accent transition-colors block text-sm md:text-base" href="#">Calabar Campus</a></li>
            <li><a className="text-purple-50 hover:text-accent transition-colors block text-sm md:text-base" href="#">Admissions</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-extrabold text-white mb-4 md:mb-6 uppercase tracking-wider text-sm">Our Campus</h5>
          <p className="text-purple-50 mb-4 leading-relaxed text-sm md:text-base">
            72 Mayne Avenue,<br />
            Calabar, Nigeria.
          </p>
          <p className="text-purple-50 mb-2 font-medium text-sm md:text-base">+234 123 4567</p>
          <p className="text-purple-50 font-medium text-sm md:text-base break-all">admission@amethystfield.edu.ng</p>
        </div>
        <div>
          <h5 className="font-extrabold text-white mb-4 md:mb-6 uppercase tracking-wider text-sm">Newsletter</h5>
          <p className="text-purple-50 mb-4 text-sm">Stay updated with our events and school calendar.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input className="bg-primary/10 border-primary/20 text-white rounded-lg px-4 py-3 sm:py-2 w-full focus:ring-2 focus:ring-accent transition-all placeholder:text-purple-300 text-sm md:text-base outline-none" placeholder="Email" type="email" />
            <button className="bg-accent text-primary font-bold px-6 py-3 sm:py-2 rounded-lg hover:bg-accent/80 transition-all flex items-center justify-center"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-purple-200 text-xs md:text-sm">© 2026 AmethystField Schools, Calabar. All rights reserved.</p>
      </div>
    </footer>
  );
}
