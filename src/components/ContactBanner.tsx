export default function ContactBanner() {
  return (
    <section className="relative px-4 md:px-8 py-10 -mt-16 z-20">
      <div className="max-w-6xl mx-auto bg-[#1c1c1c] rounded-[2rem] shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/20 gap-8 md:gap-0">

          {/* Address */}
          <div className="flex-1 flex flex-col items-center px-4 w-full">
            <span className="material-symbols-outlined text-accent mb-4 text-3xl">location_on</span>
            <h3 className="text-white font-bold text-lg mb-2">Address (HQ)</h3>
            <p className="text-slate-300 text-sm">
              72 Mayne Avenue,
              Calabar, Nigeria.
            </p>
          </div>

          {/* Phone */}
          <div className="flex-1 flex flex-col items-center px-4 w-full pt-8 md:pt-0">
            <span className="material-symbols-outlined text-accent mb-4 text-3xl">phone_in_talk</span>
            <h3 className="text-white font-bold text-lg mb-2">Phone Number</h3>
            <p className="text-slate-300 text-sm">
              +234 708 737 0719
            </p>
          </div>

          {/* Email */}
          <div className="flex-1 flex flex-col items-center px-4 w-full pt-8 md:pt-0">
            <span className="material-symbols-outlined text-accent mb-4 text-3xl">mail</span>
            <h3 className="text-white font-bold text-lg mb-2">Email Address</h3>
            <p className="text-slate-300 text-sm">
              info@amethystfield.ng<br />amethystfield@yahoo.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
