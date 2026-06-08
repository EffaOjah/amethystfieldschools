import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <PageTransition>
      <SEO 
        title="Contact Us | Amethyst Field Schools"
        description="Get in touch with Amethyst Field Schools. Contact our admissions and enquiries team, find our physical address at 72 Mayne Avenue, Calabar, or send us a message."
        canonical="https://amethystfieldschools.com/contact"
      />
      <div className="bg-white min-h-screen">
        <TopNav />
        <main>
          <Reveal delay={0.1}>
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 bg-primary text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Contact Us</h1>
              <p className="text-lg text-purple-50/80 max-w-2xl mx-auto font-serif italic">
                "Modelling Excellence" — Reach out to us for enquiries and admissions.
              </p>
            </div>
          </Reveal>

          <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              <Reveal delay={0.2} direction="left">
                <div className="bg-zinc-50 p-8 md:p-12 rounded-sm shadow-sm border border-zinc-100">
                  <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-zinc-200 rounded-sm focus:outline-none focus:border-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-zinc-200 rounded-sm focus:outline-none focus:border-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-zinc-200 rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-zinc-200 rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-on-primary py-4 font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </Reveal>

              <Reveal delay={0.3} direction="right">
                <div className="space-y-12">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-primary uppercase tracking-wider">Our Information</h2>

                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 flex-shrink-0 bg-purple-50 text-primary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Campus Address</h3>
                        <p className="text-slate-600 leading-relaxed">
                          72 Mayne Avenue,<br />
                          Calabar, Nigeria.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 flex-shrink-0 bg-purple-50 text-primary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Phone Numbers</h3>
                        <p className="text-slate-600 leading-relaxed">
                          +234 816 400 4644<br />
                          +234 912 391 1246
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 flex-shrink-0 bg-purple-50 text-primary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary mb-1">Email Enquiries</h3>
                        <p className="text-slate-600 leading-relaxed">
                          amethystfieldschools20@gmail.com <br /> amethystfieldschools@fb.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full aspect-video bg-zinc-100 rounded-sm border border-zinc-200 overflow-hidden relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                      <span className="material-symbols-outlined text-5xl mb-4">map</span>
                      <p className="font-medium">Interactive Map Integration Coming Soon</p>
                      <p className="text-xs mt-1 italic">Visit us at our primary campus in Calabar</p>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
