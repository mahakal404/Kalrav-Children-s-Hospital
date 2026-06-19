export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Kalrav Children&apos;s Hospital</h3>
              <p className="text-slate-400 mt-2 max-w-xs">
                Providing expert pediatric care and nurturing the future of your children with 27+ years of trusted experience.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <p className="text-slate-400">
              Bus Depot, Near Pardi,<br />
              Highway Char Rasta,<br />
              Killa-pardi, Gujarat
            </p>
            <p className="text-slate-300 font-semibold text-sm">
              Above IndusInd Bank &amp; Central Bank of India
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="text-slate-400">
              Phone:{" "}
              <a href="tel:+919999999999" className="hover:text-sky-400 transition-colors font-medium">
                +91 99999 99999
              </a>
            </p>
            <p className="text-slate-400">
              Email:{" "}
              <a href="mailto:info@kalravhospital.com" className="hover:text-sky-400 transition-colors font-medium">
                info@kalravhospital.com
              </a>
            </p>
            <p className="text-slate-400">
              Mon – Sat: 8:00 AM – 7:00 PM<br />
              <span className="text-rose-400 font-medium">Sunday: Closed</span>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-slate-500">
          <p>&copy; {currentYear} Kalrav Children&apos;s Hospital. All rights reserved.</p>
          <div className="flex items-center text-slate-400">
            <span className="hidden md:block mx-2 text-slate-500">•</span>
            <p className="text-sm font-medium flex items-center gap-1.5">
              Built by
              <span className="relative group cursor-pointer ml-1">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-wider transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500">
                  RNext.in
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

