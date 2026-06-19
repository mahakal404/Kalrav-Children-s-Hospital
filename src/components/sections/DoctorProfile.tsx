import { Award, GraduationCap, MapPin, Star } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="flex flex-col md:flex-row relative z-10">
            {/* Image Placeholder */}
            <div className="md:w-2/5 p-8 flex items-center justify-center">
              <div className="w-full aspect-square max-w-sm rounded-2xl bg-gradient-to-tr from-sky-400 to-teal-300 p-1 shadow-inner">
                <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"></div>
                  {/* Fallback Icon if image fails or before loading */}
                  <div className="flex flex-col items-center justify-center z-10 p-6 text-center backdrop-blur-sm bg-slate-900/40 rounded-xl border border-white/10">
                    <GraduationCap className="w-16 h-16 text-sky-300 mb-2" />
                    <span className="text-white font-medium">Dr. Kartik Bhadra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-12 md:pl-0 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 text-sky-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 w-fit backdrop-blur-sm">
                <Star className="w-4 h-4 fill-sky-400" />
                <span>Chief Pediatrician</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Dr. Kartik Bhadra
              </h3>
              <p className="text-sky-300 text-lg font-medium mb-6">M.B.B.S., D.C.H. (Pediatrics)</p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                With a profound dedication to pediatric healthcare, Dr. Bhadra has been serving the community for over 27 years. His compassionate approach and extensive clinical experience have made Kalrav Children's Hospital a beacon of trust for parents.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2 rounded-lg mt-1 border border-slate-700">
                    <Award className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Leadership & Recognition</h4>
                    <p className="text-slate-400 text-sm mt-1">Former President of IMA (Indian Medical Association) & IAP (Indian Academy of Pediatrics), Valsad District.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2 rounded-lg mt-1 border border-slate-700">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Trusted in the Community</h4>
                    <p className="text-slate-400 text-sm mt-1">Serving generation after generation in Killa-pardi with unwavering commitment to child health.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
