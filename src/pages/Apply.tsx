import { useState } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // File Upload State previews & names
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('No File Chosen');
  const [certName, setCertName] = useState<string>('No File Chosen');

  // Auto-generated student ID for office reference
  const [studentId] = useState(() => `AFS-${Math.floor(10000 + Math.random() * 90000)}`);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoName('No File Chosen');
      setPhotoPreview(null);
    }
  };

  const handleCertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertName(file.name);
    } else {
      setCertName('No File Chosen');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Admission Application");
    formData.append("from_name", "Amethyst Field Schools Website");
    formData.append("student_id", studentId);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("Failed to submit application. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <PageTransition>
        <SEO
          title="Application Submitted | Amethyst Field Schools"
          description="Thank you for applying to Amethyst Field Schools. Our admissions team will review your application soon."
          canonical="https://amethystfieldschools.com/apply"
        />
        <div className="bg-[#f8fafc] min-h-screen">
          <TopNav />
          <main className="pt-36 pb-24 px-4 text-center">
            <Reveal delay={0.2} direction="up">
              <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 space-y-6">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide">Application Submitted!</h1>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Thank you for completing your admission application for <strong className="text-slate-900">{studentId}</strong>. Our admissions team will review your documents and contact you within 3-5 working days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-block bg-[#662D91] hover:bg-[#522377] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors rounded-md shadow-sm"
                >
                  Submit Another Application
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
      <div className="bg-[#f8fafc] min-h-screen font-sans">
        <TopNav />

        <main className="pb-20">
          
          {/* Hero Header Banner */}
          <Reveal delay={0.1}>
            <div className="relative pt-28 pb-14 md:pt-36 md:pb-18 bg-gradient-to-r from-[#662D91] via-[#522377] to-[#3b1557] text-center text-white px-4 mb-10 overflow-hidden border-b border-purple-900 shadow-md">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none"></div>
              <div className="relative z-10 max-w-4xl mx-auto space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-300 uppercase bg-white/10 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/20 inline-block mb-1">
                  JOIN OUR COMMUNITY
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-tight text-white font-sans">
                  ADMISSION APPLICATION
                </h1>
                <p className="text-sm md:text-base text-slate-300 font-serif italic max-w-2xl mx-auto">
                  "Modelling Excellence" — Begin your child's journey toward academic and moral distinction.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Sub-Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                New Application
              </h2>
              <span className="text-xs font-semibold text-slate-500 bg-slate-200/80 px-3 py-1 rounded-md self-start sm:self-auto">
                Academic Session 2026 / 2027
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* CARD 1: This Information For Office Use Only */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200/90 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-1">
                        This Information For Office Use Only
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        System references and academic placement metadata
                      </p>
                    </div>

                    {/* Top Right Photo Display Box */}
                    <div className="shrink-0 self-start">
                      <div className="w-24 h-28 sm:w-28 sm:h-32 bg-slate-100 border border-slate-200 rounded-lg overflow-hidden flex flex-col items-center justify-center text-slate-400 relative shadow-xs">
                        {photoPreview ? (
                          <img src={photoPreview} alt="Student Preview" className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center p-2 text-center">
                            <span className="material-symbols-outlined text-3xl text-slate-400 mb-1">person</span>
                            <span className="text-[10px] text-slate-400 font-medium leading-tight">Photo Preview</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5">
                    
                    {/* Student ID */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Student ID
                      </label>
                      <input 
                        type="text" 
                        name="student_id_display" 
                        readOnly 
                        value={studentId} 
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm font-semibold cursor-not-allowed focus:outline-none"
                      />
                    </div>

                    {/* Class */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Class
                      </label>
                      <select 
                        name="office_class" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="JSS 1">JSS 1</option>
                        <option value="JSS 2">JSS 2</option>
                        <option value="JSS 3">JSS 3</option>
                        <option value="SSS 1">SSS 1</option>
                        <option value="SSS 2">SSS 2</option>
                        <option value="SSS 3">SSS 3</option>
                      </select>
                    </div>

                    {/* Section */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Section
                      </label>
                      <select 
                        name="office_section" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </div>

                    {/* Year */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Year
                      </label>
                      <select 
                        name="academic_year" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="2026-2027">2026-2027</option>
                        <option value="2025-2026">2025-2026</option>
                      </select>
                    </div>

                    {/* Group */}
                    <div className="md:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Group
                      </label>
                      <select 
                        name="office_group" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                        <option value="Commercial">Commercial</option>
                        <option value="General">General</option>
                      </select>
                    </div>

                  </div>
                </div>
              </Reveal>

              {/* CARD 2: Student Information */}
              <Reveal delay={0.2}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200/90">
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-6">
                    Student Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-6">
                    
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="first_name" 
                        required 
                        placeholder="First Name" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="last_name" 
                        required 
                        placeholder="Last Name" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="gender" 
                        required 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    {/* Date Of Birth */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Date Of Birth <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date" 
                        name="dob" 
                        required 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* What Class Do you want to Admit? */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        What Class Do you want to Admit? <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="target_class" 
                        required 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="">Choose Your Class</option>
                        <option value="Creche / Playgroup">Creche / Playgroup</option>
                        <option value="Nursery 1">Nursery 1</option>
                        <option value="Nursery 2">Nursery 2</option>
                        <option value="Primary 1">Primary 1</option>
                        <option value="Primary 2">Primary 2</option>
                        <option value="Primary 3">Primary 3</option>
                        <option value="Primary 4">Primary 4</option>
                        <option value="Primary 5">Primary 5</option>
                        <option value="JSS 1">JSS 1</option>
                        <option value="JSS 2">JSS 2</option>
                        <option value="JSS 3">JSS 3</option>
                        <option value="SSS 1">SSS 1</option>
                        <option value="SSS 2">SSS 2</option>
                        <option value="SSS 3">SSS 3</option>
                      </select>
                    </div>

                    {/* Section */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Section
                      </label>
                      <select 
                        name="student_section" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="">Choose Your Section</option>
                        <option value="Section A">Section A</option>
                        <option value="Section B">Section B</option>
                        <option value="Section C">Section C</option>
                      </select>
                    </div>

                  </div>

                  {/* File Upload Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 pt-2">
                    
                    {/* Upload Your Photo */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Upload Your Photo <span className="text-slate-400 font-normal">(150 x 150Px)</span>
                      </label>
                      <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1.5">
                        <label className="cursor-pointer bg-[#662D91] hover:bg-[#522377] text-white text-xs font-semibold px-4 py-2 rounded-md shrink-0 transition-colors">
                          Choose File
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handlePhotoChange} 
                            className="hidden" 
                          />
                        </label>
                        <span className="text-xs text-slate-500 truncate px-3">
                          {photoName}
                        </span>
                      </div>
                    </div>

                    {/* Upload Your Birth Certificate */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Upload Your Birth certificate <span className="text-slate-400 font-normal">(Pdf, img, png, Max size 2Mb)</span>
                      </label>
                      <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1.5">
                        <label className="cursor-pointer bg-[#662D91] hover:bg-[#522377] text-white text-xs font-semibold px-4 py-2 rounded-md shrink-0 transition-colors">
                          Choose File
                          <input 
                            type="file" 
                            accept=".pdf,image/*" 
                            onChange={handleCertChange} 
                            className="hidden" 
                          />
                        </label>
                        <span className="text-xs text-slate-500 truncate px-3">
                          {certName}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>

              {/* CARD 3: Parent / Guardian Information */}
              <Reveal delay={0.3}>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200/90">
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-6">
                    Parent / Guardian Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Parent Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="parent_name" 
                        required 
                        placeholder="Mr. / Mrs. / Dr. / Chief" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="parent_phone" 
                        required 
                        placeholder="+234 816 400 4644" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="parent_email" 
                        required 
                        placeholder="example@email.com" 
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Residential Address */}
                    <div className="md:col-span-3">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Residential Address <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        name="parent_address" 
                        required 
                        rows={3} 
                        placeholder="72 Mayne Avenue, Calabar..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                  </div>
                </div>
              </Reveal>

              {/* Submit & Disclaimer Section */}
              <Reveal delay={0.4}>
                <div className="pt-2">
                  <div className="flex items-start gap-3 mb-6 p-4 bg-sky-50/80 border border-sky-200/80 rounded-xl">
                    <span className="material-symbols-outlined text-sky-600 shrink-0 text-xl mt-0.5">info</span>
                    <p className="text-xs text-sky-900 leading-relaxed font-medium">
                      By submitting this application, you confirm that all information provided is accurate and agree to the processing of student data for AmethystField Schools admission purposes.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#662D91] hover:bg-[#522377] text-white py-4 font-bold uppercase tracking-wider text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin material-symbols-outlined text-lg">progress_activity</span>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="mt-4 text-xs font-semibold text-red-600 text-center bg-red-50 p-3 rounded-lg border border-red-200">
                      {error}
                    </p>
                  )}
                </div>
              </Reveal>

            </form>

          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
