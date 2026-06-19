import { 
  Stethoscope, 
  Syringe, 
  Baby, 
  Sun, 
  Ambulance 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "General OPD",
      description: "Comprehensive daily outpatient care for common childhood illnesses, routine checkups, and developmental assessments.",
      icon: <Stethoscope className="w-8 h-8 text-sky-500" />,
      color: "bg-sky-50 border-sky-100 group-hover:border-sky-300",
    },
    {
      title: "Vaccination & Immunization",
      description: "Complete immunization schedules following IAP guidelines to protect your child from preventable diseases.",
      icon: <Syringe className="w-8 h-8 text-teal-500" />,
      color: "bg-teal-50 border-teal-100 group-hover:border-teal-300",
    },
    {
      title: "Neonatal Intensive Care (NICU)",
      description: "Advanced level NICU equipped with modern technology to provide specialized care for premature and critically ill newborns.",
      icon: <Baby className="w-8 h-8 text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-100 group-hover:border-indigo-300",
    },
    {
      title: "Phototherapy & Nebulization",
      description: "Effective treatments for newborn jaundice and respiratory issues like asthma and bronchiolitis in a safe setting.",
      icon: <Sun className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50 border-amber-100 group-hover:border-amber-300",
    },
    {
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency medical support with an expert pediatric team ready to handle any critical situations instantly.",
      icon: <Ambulance className="w-8 h-8 text-rose-500" />,
      color: "bg-rose-50 border-rose-100 group-hover:border-rose-300",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-2">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Pediatric Care
          </h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of specialized healthcare services to ensure the well-being of infants, children, and adolescents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default ${service.color.split(' ').slice(1).join(' ')}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color.split(' ')[0]}`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
