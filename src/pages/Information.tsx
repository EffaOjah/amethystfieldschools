import { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import api from '../api';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function Information() {
  const [termDates, setTermDates] = useState<{event: string, date: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const { data } = await api.get('/calendar');
        setTermDates(data);
      } catch (error) {
        console.error("Error fetching academic calendar:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.setTextColor(102, 45, 145); // Primary purple
    doc.text('Amethyst Field Schools', 14, 22);
    
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text('Academic Calendar 2025/2026', 14, 30);
    
    // Prepare table data
    const tableData = termDates.map(item => [item.event, item.date]);
    
    // Auto table
    autoTable(doc, {
      startY: 40,
      head: [['Event', 'Date']],
      body: tableData,
      headStyles: { fillColor: [102, 45, 145] },
      alternateRowStyles: { fillColor: [248, 249, 250] },
      styles: { cellPadding: 6, fontSize: 11 }
    });
    
    doc.save('academic-calendar.pdf');
  };

  const facilities = [
    { title: "ICT Innovation Hub", desc: "State-of-the-art computer labs with high-speed internet." },
    { title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs." },
    { title: "Modern Library", desc: "Extensive collection of physical and digital resources." },
    { title: "Sports Complex", desc: "Standard facilities for indoor and outdoor sports." },
    { title: "Creative Arts Studio", desc: "Dedicated space for music, fine arts, and drama." },
    { title: "Medical Center", desc: "24/7 healthcare facility with qualified professionals." }
  ];

  const rules = [
    "Punctuality to all school activities is mandatory.",
    "Students must be in full approved uniform at all times.",
    "Bullying or harassment of any form will lead to immediate suspension.",
    "Use of unauthorized electronic devices during school hours is prohibited.",
    "Respect for staff, prefects, and fellow students is required.",
    "Participation in extracurricular activities is compulsory."
  ];

  return (
    <PageTransition>
      <SEO 
        title="Information - Amethyst Field Schools" 
        description="Essential information about Amethyst Field Schools including academic calendar, facilities, and school rules."
      />
      <TopNav />
      <div className="min-h-screen bg-slate-50">
        
        {/* Header Section */}
        <section className="bg-primary text-white pt-32 pb-16 text-center">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">School Information</h1>
              <p className="text-xl max-w-2xl mx-auto text-purple-100">
                Everything you need to know about our academic calendar, state-of-the-art facilities, and community guidelines.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Academic Calendar Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-4xl text-accent">calendar_month</span>
                  <h2 className="text-3xl font-bold text-primary">Academic Calendar</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-6 py-4 font-semibold">Event</th>
                        <th className="px-6 py-4 font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {loading ? (
                        <tr>
                          <td colSpan={2} className="px-6 py-6 text-center text-slate-500">Loading academic calendar...</td>
                        </tr>
                      ) : termDates.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="px-6 py-6 text-center text-slate-500">Academic calendar will be updated soon.</td>
                        </tr>
                      ) : (
                        termDates.map((date, idx) => (
                          <tr key={idx} className="hover:bg-purple-50 transition-colors">
                            <td className="px-6 py-6 font-medium text-slate-800">{date.event}</td>
                            <td className="px-6 py-6 text-slate-600">{date.date}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  <div className="p-6 bg-purple-50/50 border-t border-purple-100 text-center">
                    <button 
                      onClick={downloadPDF}
                      className="text-primary font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-accent transition-colors"
                    >
                      <span className="material-symbols-outlined">download</span>
                      Download Full Academic Planner (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-10 justify-center">
                <span className="material-symbols-outlined text-4xl text-accent">business</span>
                <h2 className="text-3xl font-bold text-primary text-center">Our Facilities</h2>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((fac, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all border border-slate-100 hover:border-purple-200 group">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{fac.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{fac.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-9xl">gavel</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-3xl">rule</span>
                  Code of Conduct
                </h2>
                
                <ul className="space-y-4 relative z-10">
                  {rules.map((rule, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-accent shrink-0 mt-1">check_circle</span>
                      <span className="text-purple-50 text-lg leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
      <Footer />
    </PageTransition>
  );
}
