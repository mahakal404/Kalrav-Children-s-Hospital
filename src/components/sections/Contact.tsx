import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            We're Here for You
          </h3>
          <p className="text-lg text-slate-600">
            Reach out to us for appointments, emergencies, or any general inquiries. Our team is always ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <div className="bg-rose-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Visit Us</h4>
            <p className="text-slate-600">
              Bus Depot, Near Pardi,<br />
              Highway Char Rasta,<br />
              Killa-pardi, Gujarat
            </p>
          </div>

          {/* Timings */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <div className="bg-amber-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Clinic Timings</h4>
            <p className="text-slate-600">
              Mon - Sat: 8:00 AM - 7:00 PM<br />
              Sunday: Closed<br />
              <span className="text-rose-500 font-medium text-sm mt-2 block">(24/7 Emergency Available)</span>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <div className="bg-sky-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Call Us</h4>
            <p className="text-slate-600 mb-4">
              For appointments and emergency support.
            </p>
            <a href="tel:+919999999999" className="text-sky-600 font-bold hover:text-sky-700 transition-colors">
              +91 99999 99999
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Email Us</h4>
            <p className="text-slate-600 mb-4">
              For medical reports and general queries.
            </p>
            <a href="mailto:info@kalravhospital.com" className="text-teal-600 font-bold hover:text-teal-700 transition-colors">
              info@kalravhospital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
