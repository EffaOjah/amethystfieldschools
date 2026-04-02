export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-primary text-center mb-12 uppercase tracking-tight">
          Parents Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-purple-50 p-8 md:p-10 rounded-sm flex flex-col justify-between shadow-sm border-l-4 border-primary">
            <p className="text-slate-800 font-medium leading-relaxed mb-8 italic">
              "Enrolling my child at AmethystField Schools was the best decision. The school's commitment to excellence, combined with its nurturing environment, has significantly shaped my child's growth and academic success. I'm impressed!"
            </p>
            <div className="text-primary font-bold text-center border-t border-primary/10 pt-4">
              Mrs. Ngozi Adeyemi
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-100/50 p-8 md:p-10 rounded-sm flex flex-col justify-between shadow-sm border-l-4 border-accent">
            <p className="text-slate-800 font-medium leading-relaxed mb-8 italic">
              "Choosing AmethystField Schools for my child was a game-changer. The school's holistic approach to education and the dedicated faculty have fostered not just academic growth but also personal development. Kudos to AmethystField!"
            </p>
            <div className="text-primary font-bold text-center border-t border-primary/10 pt-4">
              Mr. Emeka Okafor
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-50 p-8 md:p-10 rounded-sm flex flex-col justify-between shadow-sm border-l-4 border-primary">
            <p className="text-slate-800 font-medium leading-relaxed mb-8 italic">
              "I am delighted with the progress my child has made at AmethystField Schools. The supportive community, comprehensive curriculum, and engaging extracurricular activities have contributed immensely to my child's all-around development."
            </p>
            <div className="text-primary font-bold text-center border-t border-primary/10 pt-4">
              Mrs. Tola Abubakar
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
