import { Stethoscope, Award, HeartPulse, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { label: "Years Experience", value: "27+", icon: <Award className="w-6 h-6 text-sky-500" /> },
    { label: "Happy Patients", value: "50k+", icon: <HeartPulse className="w-6 h-6 text-pink-500" /> },
    { label: "Expert Doctors", value: "Dedicated", icon: <Stethoscope className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-2">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Legacy of Care for Your Little Ones
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Welcome to <strong>Kalrav Children's Hospital</strong>, where your child's health and happiness are our top priorities. Led by the esteemed <strong>Dr. Kartik Bhadra</strong> (Former President IMA & IAP, Valsad District), we have been a pillar of pediatric healthcare for over 27 years.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We understand that every child is unique, and so are their medical needs. Our hospital is equipped with state-of-the-art facilities designed specifically for children, ensuring a comfortable, fear-free environment for both kids and parents.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="bg-sky-50 p-3 rounded-2xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder (Dynamic styling instead of raw placeholder image) */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-teal-100 rounded-3xl transform rotate-3 scale-105 opacity-50 z-0"></div>
            <div className="relative z-10 bg-white rounded-3xl p-2 shadow-xl border border-slate-100">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative group flex items-center justify-center">
                 {/* Visual representation of hospital/care */}
                 <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-mint-50 flex items-center justify-center">
                    <HeartPulse className="w-32 h-32 text-sky-200 opacity-50" />
                 </div>
                 <div className="relative text-center p-8 backdrop-blur-sm bg-white/60 rounded-xl border border-white/50 shadow-sm">
                    <h4 className="text-2xl font-bold text-slate-800">Kalrav Children's</h4>
                    <p className="text-sky-600 font-medium mt-1">Advanced Pediatric Care</p>
                 </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center space-x-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Trusted by</p>
                <p className="font-bold text-slate-900">Parents across Gujarat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
