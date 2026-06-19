import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            We&apos;re Here for You
          </h3>
          <p className="text-lg text-slate-600">
            Reach out to us for appointments, emergencies, or any general inquiries. Our team is always ready to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Address */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <div className="bg-rose-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Visit Us</h4>
            <p className="text-slate-600 mb-3">
              Bus Depot, Near Pardi,<br />
              Highway Char Rasta,<br />
              Killa-pardi, Gujarat
            </p>
            <p className="text-slate-700 font-semibold text-sm leading-snug border-t border-slate-100 pt-3 w-full text-center">
              Above IndusInd Bank &amp; Central Bank of India
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

        {/* Hospital Photo + Map — Responsive 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Hospital Exterior Photo */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100">
              <Image
                src="/images/calrav.webp"
                alt="Kalrav Children's Hospital Exterior"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                priority={false}
              />
            </div>
            {/* Landmark Badge below photo */}
            <div className="flex items-start gap-3 bg-white border border-sky-100 rounded-2xl px-5 py-4 shadow-sm">
              <MapPin className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Landmark</p>
                <p className="text-slate-800 font-semibold text-base leading-snug">
                  Above IndusInd Bank &amp; Central Bank of India
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Iframe */}
          <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100 min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.84970222143!2d72.94487942457175!3d20.51238664342668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c48768f709e3%3A0x32a997a6f8502295!2sKalrav%20Children's%20Hospital!5e0!3m2!1sen!2sin!4v1781873316907!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kalrav Children's Hospital Location Map"
              className="w-full rounded-2xl"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

