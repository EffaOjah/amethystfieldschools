export default function LatestPost() {
  return (
    <section className="py-16 md:py-24 bg-secondary px-4 md:px-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold mb-4 uppercase tracking-widest text-accent">
            Latest News
          </h2>
          <p className="text-purple-100 text-sm md:text-base font-medium">
            Stay updated with the latest stories and highlights from AmethystField Schools
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Featured Post */}
          <div className="lg:w-2/3 flex flex-col group cursor-pointer">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-sm mb-6 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
                alt="Digital Innovation Hub" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                <img src="/amf-logo.jpg" alt="AmethystField Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60"></div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">
              Digital Innovation Hub at AmethystField
            </h3>
            <p className="text-purple-100/70 text-sm mb-6">
              11/02/2026
            </p>
            <div>
              <button className="bg-accent hover:bg-white text-primary px-8 py-3 rounded-sm font-black text-sm transition-all uppercase tracking-widest shadow-lg hover:-translate-y-1">
                Read More
              </button>
            </div>
          </div>

          {/* Side Posts List */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            {/* Small Post 1 */}
            <div className="flex gap-4 items-center group cursor-pointer border-b border-white/10 pb-6">
              <div className="w-32 h-20 shrink-0 overflow-hidden rounded-sm shadow-md">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" alt="Welcome to Term 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm group-hover:text-accent transition-colors line-clamp-2 mb-1">
                  Welcome to Term 1: 2026/2027
                </h4>
                <p className="text-purple-100/60 text-xs">08/09/2026</p>
              </div>
            </div>

            {/* Small Post 2 */}
            <div className="flex gap-4 items-center group cursor-pointer border-b border-white/10 pb-6">
              <div className="w-32 h-20 shrink-0 overflow-hidden rounded-sm shadow-md">
                <img src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=400&auto=format&fit=crop" alt="World Clean Up Day" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm group-hover:text-accent transition-colors line-clamp-2 mb-1">
                  World Clean Up Day
                </h4>
                <p className="text-purple-100/60 text-xs">17/09/2026</p>
              </div>
            </div>

            {/* Small Post 3 */}
            <div className="flex gap-4 items-center group cursor-pointer border-b border-white/10 pb-6">
              <div className="w-32 h-20 shrink-0 overflow-hidden rounded-sm shadow-md">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400&auto=format&fit=crop" alt="Award Ceremony" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm group-hover:text-accent transition-colors line-clamp-2 mb-1">
                  Speech and Prize Giving Day Celebration
                </h4>
                <p className="text-purple-100/60 text-xs">02/11/2026</p>
              </div>
            </div>
            
            {/* Small Post 4 */}
            <div className="flex gap-4 items-center group cursor-pointer">
              <div className="w-32 h-20 shrink-0 overflow-hidden rounded-sm shadow-md">
                <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=400&auto=format&fit=crop" alt="Year 11 Community Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm group-hover:text-accent transition-colors line-clamp-2 mb-1">
                  Year 11 Community Service
                </h4>
                <p className="text-purple-100/60 text-xs">14/12/2026</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
