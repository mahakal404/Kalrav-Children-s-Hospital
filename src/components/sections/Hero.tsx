import { Calendar, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 rounded-full bg-mint-200/50 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium mb-8 animate-fade-in-up">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <span>27+ Years of Trusted Pediatric Care</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Caring for Today's Children, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
              Nurturing Tomorrow's Future
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Led by Dr. Kartik Bhadra, we provide compassionate, expert medical care for infants, children, and adolescents in a warm, child-friendly environment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+919999999999"
              className="group flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </a>
            
            <a
              href="#services"
              className="group flex items-center justify-center space-x-2 bg-white border-2 border-slate-200 hover:border-sky-200 text-slate-700 hover:text-sky-600 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto"
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
