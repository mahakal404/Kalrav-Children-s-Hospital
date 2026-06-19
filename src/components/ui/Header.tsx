"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* CSS Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Emblem */}
            <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-lg rounded-xl shadow-md transition-transform group-hover:scale-105">
              KCH
            </div>
            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-slate-800 leading-none">Kalrav</span>
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">Children&apos;s Hospital</span>
            </div>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center space-x-2 bg-sky-50 text-sky-600 hover:bg-sky-100 px-3 sm:px-4 py-2 rounded-full font-medium transition-colors text-sm sm:text-base border border-sky-100"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-full font-medium transition-colors shadow-md shadow-green-200 text-sm sm:text-base"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
