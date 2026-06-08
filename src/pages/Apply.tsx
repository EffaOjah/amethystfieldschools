import { useState } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <PageTransition>
        <SEO 
          title="Application Submitted | Amethyst Field Schools"
          description="Thank you for applying to Amethyst Field Schools. Our admissions team will review your application soon."
          canonical="https://amethystfieldschools.com/apply"
        />
        <div className="bg-white min-h-screen">
          <TopNav />
          <main className="pt-48 pb-24 px-4 text-center">
            <Reveal delay={0.2} direction="up">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-20 h-20 bg-purple-100 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h1 className="text-4xl font-extrabold text-primary uppercase tracking-wider">Application Submitted!</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Thank you for applying to AmethystField Schools. Our admissions team will review your application and contact you within 3-5 working days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors"
                >
                  Back to Form
                </button>
              </div>
            </Reveal>
          </main>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title="Admission Application Form | Amethyst Field Schools"
        description="Apply for admission at Amethyst Field Schools. Fill out the application form for your child to join our community of academic and moral excellence."
        canonical="https://amethystfieldschools.com/apply"
      />
      <div className="bg-white min-h-screen font-body">
        <TopNav />
        <main>
          <Reveal delay={0.1}>
            <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-primary text-center text-white px-4">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
                  Join Our Community
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase tracking-tight">
                  Admission Application
                </h1>
                <p className="text-lg md:text-xl text-purple-50/90 font-serif italic max-w-2xl mx-auto">
                  "Modelling Excellence" — Begin your journey toward excellence.
                </p>
              </div>
            </div>
          </Reveal>

          <section className="py-20 md:py-28 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">

              <form onSubmit={handleSubmit} className="space-y-16">

                <Reveal delay={0.2} direction="up">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                      <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <h3 className="text-2xl font-bold text-primary uppercase tracking-wider">Student Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Full Name of Student</label>
                        <input required type="text" className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm" placeholder="Surname First" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Date of Birth</label>
                        <input required type="date" className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Gender</label>
                        <select required className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm">
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Grade Level Applying For</label>
                        <select required className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm">
                          <option value="">Select Level</option>
                          <option value="jss1">JSS 1</option>
                          <option value="jss2">JSS 2</option>
                          <option value="jss3">JSS 3</option>
                          <option value="sss1">SSS 1</option>
                          <option value="sss2">SSS 2</option>
                          <option value="sss3">SSS 3</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Academic Year</label>
                        <input required type="text" disabled value="2025 / 2026" className="w-full px-4 py-4 bg-zinc-100 border border-zinc-200 rounded-sm font-bold text-primary" />
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3} direction="up">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                      <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <h3 className="text-2xl font-bold text-primary uppercase tracking-wider">Parent / Guardian Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Full Name</label>
                        <input required type="text" className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm" placeholder="Mr. / Mrs. / Dr. / Chief" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm" placeholder="+234" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Email Address</label>
                        <input required type="email" className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm" placeholder="example@email.com" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-primary uppercase tracking-widest mb-2">Residential Address</label>
                        <textarea required rows={3} className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary transition-all rounded-sm"></textarea>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.4} direction="up">
                  <div className="pt-10">
                    <div className="flex items-start gap-4 mb-10 p-6 bg-purple-50 border-l-4 border-accent">
                      <span className="material-symbols-outlined text-primary">info</span>
                      <p className="text-sm text-primary/80 leading-relaxed italic">
                        By submitting this application, you agree to the processing of the provided information for admission purposes.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-on-primary py-6 font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-secondary hover:text-white transition-all hover:-translate-y-1 flex items-center justify-center gap-4"
                    >
                      Submit Application
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </Reveal>

              </form>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
