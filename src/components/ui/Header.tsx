"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logoError, setLogoError] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo / Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-left group"
            aria-label="Scroll to top"
          >
            {!logoError ? (
              <Image
                src="/images/logo.png"
                alt="Kalrav Children's Hospital Logo"
                width={150}
                height={50}
                className="object-contain h-12 w-auto"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              /* Fallback text logo if image is missing */
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold text-sky-600 group-hover:text-sky-700 transition-colors leading-none">
                  Kalrav
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                  Children&apos;s Hospital
                </span>
              </div>
            )}
          </button>

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
