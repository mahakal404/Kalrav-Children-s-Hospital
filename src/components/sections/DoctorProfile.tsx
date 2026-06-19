"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Star, Stethoscope, ShieldCheck } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="flex flex-col md:flex-row relative z-10">

            {/* Premium Medical Icon Illustration */}
            <div className="md:w-2/5 p-10 flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 border border-sky-700/40 shadow-2xl flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                {/* Subtle glow rings */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-sky-500/20" />
                <div className="absolute w-40 h-40 rounded-full bg-sky-500/10 blur-2xl" />

                {/* Central stethoscope icon */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="bg-gradient-to-br from-sky-500 to-teal-400 p-5 rounded-2xl shadow-lg shadow-sky-500/30">
                    <Stethoscope className="w-14 h-14 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Surrounding small icons */}
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-700/80 border border-slate-600 p-3 rounded-xl">
                      <ShieldCheck className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="bg-gradient-to-br from-sky-500/20 to-teal-400/20 border border-sky-500/30 px-4 py-2 rounded-xl">
                      <p className="text-white font-bold text-sm text-center leading-tight">
                        Dr. Kartik<br />Bhadra
                      </p>
                    </div>
                    <div className="bg-slate-700/80 border border-slate-600 p-3 rounded-xl">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  <p className="text-sky-300 text-xs font-semibold tracking-widest uppercase">
                    27+ Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="md:w-3/5 p-8 md:p-12 md:pl-0 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/60 border border-slate-700 text-sky-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 w-fit backdrop-blur-sm">
                <Star className="w-4 h-4 fill-sky-400" />
                <span>Chief Pediatrician</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Dr. Kartik Bhadra
              </h3>
              <p className="text-sky-300 text-lg font-medium mb-6">M.B.B.S., D.C.H. (Pediatrics)</p>

              <p className="text-slate-300 leading-relaxed mb-8">
                With a profound dedication to pediatric healthcare, Dr. Bhadra has been serving the community for over 27 years. His compassionate approach and extensive clinical experience have made Kalrav Children&apos;s Hospital a beacon of trust for parents.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2 rounded-lg mt-1 border border-slate-700 shrink-0">
                    <Award className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Leadership &amp; Recognition</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Former President of IMA (Indian Medical Association) &amp; IAP (Indian Academy of Pediatrics), Valsad District.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-2 rounded-lg mt-1 border border-slate-700 shrink-0">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Trusted in the Community</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Serving generation after generation in Killa-pardi with unwavering commitment to child health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
