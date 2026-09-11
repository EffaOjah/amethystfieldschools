import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section id="admissions" className="bg-accent py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left: Text */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary uppercase tracking-tight leading-tight">
            Enroll your Child Today!
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mx-auto md:ml-0"></div>
        </div>

        {/* Right: Buttons Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link 
            to="/apply" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black py-4 px-6 rounded-sm uppercase tracking-widest text-xs md:text-sm transition-all text-center shadow-md flex items-center justify-center hover:-translate-y-1"
          >
            APPLY FOR ADMISSION
          </Link>
          
          <Link 
            to="/contact" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black py-4 px-6 rounded-sm uppercase tracking-widest text-xs md:text-sm transition-all text-center shadow-md flex items-center justify-center hover:-translate-y-1"
          >
            SCHEDULE A VISIT
          </Link>
          
          <Link 
            to="/information" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black py-4 px-6 rounded-sm uppercase tracking-widest text-xs md:text-sm transition-all text-center shadow-md flex items-center justify-center hover:-translate-y-1"
          >
            DOWNLOAD PROSPECTUS
          </Link>
          
          <Link 
            to="/contact" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black py-4 px-6 rounded-sm uppercase tracking-widest text-xs md:text-sm transition-all text-center shadow-md flex items-center justify-center hover:-translate-y-1"
          >
            MAKE AN ENQUIRY
          </Link>
        </div>

      </div>
    </section>
  );
}
