"use client";

import { motion } from "framer-motion";
import { Calendar, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Rich decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -ml-24 w-72 h-72 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium mb-8"
          >
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <span>27+ Years of Trusted Pediatric Care</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
          >
            Caring for Today&apos;s Children,{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
              Nurturing Tomorrow&apos;s Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Led by Dr. Kartik Bhadra, we provide compassionate, expert medical care for infants, children, and adolescents in a warm, child-friendly environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="tel:+919999999999"
              className="group flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </a>

            <a
              href="#services"
              className="group flex items-center justify-center space-x-2 bg-white border-2 border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
