export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-zinc-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-primary font-extrabold tracking-widest text-xs md:text-sm uppercase mb-4 block">VISIT US</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">Our Calabar Campus</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                  72 Mayne Avenue,<br />
                  Calabar, Nigeria.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined text-primary">call</span>
                <p className="text-on-surface-variant text-sm md:text-base font-medium">+234 123 4567 890</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined text-primary">mail</span>
                <p className="text-on-surface-variant text-sm md:text-base break-all font-medium">info@amethystfield.edu.ng</p>
              </div>
              <div className="pt-8">
                <h4 className="font-bold mb-4 text-lg text-primary">Office Hours</h4>
                <ul className="space-y-3 text-on-surface-variant text-sm md:text-base">
                  <li className="flex justify-between border-b border-zinc-100 pb-2"><span>Mon - Fri</span> <span className="font-medium text-primary">7:30 AM - 4:30 PM</span></li>
                  <li className="flex justify-between pt-2"><span>Sat - Sun</span> <span className="text-secondary font-bold">Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 rounded-2xl h-[350px] md:h-[450px] flex items-center justify-center relative overflow-hidden shadow-inner border border-zinc-100">
            <img alt="Map placeholder" className="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSIsVRZXRYFbZJsI9IF3Zb7SL20pl-E7z3jEtQwbBRxEaPDFHFTD0uQQGRjz5CEPx66JTHZLwpHeEiNUmxmMvweexB9tre4OwTYgPTRuctykiTVIkEIUjHsdcbzjkefcJsqN1zNa-3AauyJvRF3T7KMevJZCQhW-yYJms9ODXoEEQIB9oOPqzcLYtgod8np4UuCD82lavM_TFipdLrf2SwXAHuphk3ZJax3nSyb600o-ok_ZOD53MtJno_Iyw2ihvte53jqhTBnOk" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 bg-zinc-900/60 transition-colors hover:bg-zinc-900/40">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl mb-4 group cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl md:text-4xl">pin_drop</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Interactive Map</h3>
              <p className="text-white/80 max-w-sm mb-6 text-sm md:text-base">Explore our campus location in the heart of Calabar.</p>
              <button className="bg-primary text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all text-sm md:text-base shadow-xl">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
