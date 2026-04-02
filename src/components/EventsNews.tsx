export default function EventsNews() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Events Calendar */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tight text-primary">Upcoming Events</h3>
              <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="bg-primary text-on-primary p-3 rounded-lg text-center min-w-[64px] shadow-md group-hover:scale-110 transition-transform">
                  <span className="block text-xl font-bold">12</span>
                  <span className="text-xs font-bold uppercase">Oct</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors cursor-pointer">PTA General Meeting</h4>
                  <p className="text-sm text-on-surface-variant mt-1">9:00 AM - School Auditorium</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="bg-zinc-100 text-on-surface p-3 rounded-lg text-center min-w-[64px] group-hover:bg-primary/10 transition-colors">
                  <span className="block text-xl font-bold">25</span>
                  <span className="text-xs font-bold uppercase">Oct</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors cursor-pointer">Annual Open House</h4>
                  <p className="text-sm text-on-surface-variant mt-1">10:00 AM - Campus Wide</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="bg-zinc-100 text-on-surface p-3 rounded-lg text-center min-w-[64px] group-hover:bg-primary/10 transition-colors">
                  <span className="block text-xl font-bold">05</span>
                  <span className="text-xs font-bold uppercase">Nov</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors cursor-pointer">Science Exhibition</h4>
                  <p className="text-sm text-on-surface-variant mt-1">11:00 AM - STEM Lab</p>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12 bg-secondary p-6 md:p-8 rounded-2xl text-white shadow-xl border border-white/10">
              <h4 className="text-lg font-bold mb-4 text-accent uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                <li><a className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors text-sm md:text-base" href="#"><span className="material-symbols-outlined text-accent">login</span> Parent Portal</a></li>
                <li><a className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors text-sm md:text-base" href="#"><span className="material-symbols-outlined text-accent">restaurant_menu</span> Lunch Menu</a></li>
                <li><a className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors text-sm md:text-base" href="#"><span className="material-symbols-outlined text-accent">contacts</span> Staff Directory</a></li>
                <li><a className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors text-sm md:text-base" href="#"><span className="material-symbols-outlined text-accent">menu_book</span> Student Handbook</a></li>
              </ul>
            </div>
          </div>

          {/* News & Announcements */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tight text-primary">Latest News</h3>
              <a className="text-primary font-bold text-sm hover:underline" href="#">News Archive</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="group">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img alt="African student reading" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqnb8otv9CCB3cKYxaoFb8h2FbmOSw_MZFMy8iyjIgclMX91evQ_fGQ4gIG7rZ0ihvfbK8JNillsrco5NX424S2Po0fLbsIwav07tGKYuPSFNNUz3oy8yLv78BQHY7xJJQqKG6JOmti-65RYoqFQAws6uSeG0ZMLTcoE0DFiT3Mp7It7mOVqYSiIeNAq57PVf38bmsicFHSTWcKMo_L4J9Am5JZqtuAzikj9viSbh8YJp58cbScBnawTW4rx6_fPu3AF939lK8Ymo" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Academics</span>
                <h4 className="text-lg md:text-xl font-bold mt-2 mb-2 leading-snug group-hover:text-primary transition-colors cursor-pointer">AmethystField Students Excel in National Mathematics Olympiad</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-4">Our students have once again demonstrated exceptional academic prowess by securing top positions in the recent competition.</p>
                <a className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all text-primary" href="#">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
              <div className="group">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img alt="African students on field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dRMj8ZD1_kMIhKFvufACh6gjDQZkBS5wWPmb5TlNFdLoxmct6dpd2cuf78yfC7Qe3W98EaD8pz5-NK_3KwFghUe7uUc3w5XbeNgvCQth7u4gbY90eAoB2MjS8UFkEroOlHyFd28beulPIPJeQA7Bcn5u-_w5GAIHvG2Z4mucjTICNxApkX0fCLD0N23Gd4R-hWuD1S0kNugPp3Pg8GWzO4M5fdseIV4ZuQn1d7pH9rQmwgP2bqU_S7riJ7Dd3LvlzEaTzZPRc_g" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Sports</span>
                <h4 className="text-lg md:text-xl font-bold mt-2 mb-2 leading-snug group-hover:text-primary transition-colors cursor-pointer">Inter-House Sports Festival: Celebrating Team Spirit</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-4">A look back at the highlights and winners of our annual sports day which saw record-breaking participation.</p>
                <a className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all text-primary" href="#">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
