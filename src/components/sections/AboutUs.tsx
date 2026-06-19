"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Award, HeartPulse, ShieldCheck,
  Baby, Syringe, Sun, Thermometer, Activity
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Icon grid items representing child care pillars
const careIcons = [
  { icon: <Stethoscope className="w-7 h-7 text-sky-500" />, label: "Expert OPD", bg: "bg-sky-50" },
  { icon: <Baby className="w-7 h-7 text-indigo-500" />, label: "Neonatal Care", bg: "bg-indigo-50" },
  { icon: <Syringe className="w-7 h-7 text-teal-500" />, label: "Immunization", bg: "bg-teal-50" },
  { icon: <Sun className="w-7 h-7 text-amber-500" />, label: "Phototherapy", bg: "bg-amber-50" },
  { icon: <Thermometer className="w-7 h-7 text-rose-500" />, label: "Emergency", bg: "bg-rose-50" },
  { icon: <Activity className="w-7 h-7 text-purple-500" />, label: "Monitoring", bg: "bg-purple-50" },
];

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

          {/* Text Content */}
          <motion.div className="order-2 lg:order-1" {...fadeUp}>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-2">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Legacy of Care for Your Little Ones
            </h3>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Welcome to <strong>Kalrav Children&apos;s Hospital</strong>, where your child&apos;s health and happiness are our top priorities. Led by the esteemed <strong>Dr. Kartik Bhadra</strong> (Former President IMA &amp; IAP, Valsad District), we have been a pillar of pediatric healthcare for over 27 years.
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We understand that every child is unique, and so are their medical needs. Our hospital is equipped with state-of-the-art facilities designed specifically for children, ensuring a comfortable, fear-free environment for both kids and parents.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="bg-sky-50 p-3 rounded-2xl mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Illustration: Premium icon grid */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Rotated background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-teal-100 rounded-3xl transform rotate-3 scale-105 opacity-40 z-0 pointer-events-none" />

            <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              {/* Header of the illustration card */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="bg-sky-500 p-2 rounded-xl">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Kalrav Children&apos;s Hospital</p>
                  <p className="text-xs text-sky-500 font-medium">Advanced Pediatric Care</p>
                </div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-4">
                {careIcons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl ${item.bg} border border-white shadow-sm hover:shadow-md transition-shadow`}
                  >
                    {item.icon}
                    <span className="text-xs font-semibold text-slate-600 mt-2 text-center leading-tight">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stat bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span className="font-medium">27+ Years Serving Gujarat</span>
                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">Trusted</span>
              </div>
            </div>

            {/* Floating trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center space-x-3"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Trusted by</p>
                <p className="font-bold text-slate-900 text-sm">Parents across Gujarat</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
