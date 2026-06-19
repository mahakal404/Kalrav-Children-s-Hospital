export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Kalrav Children's Hospital</h3>
              <p className="text-slate-400 max-w-md">
                Providing expert pediatric care and nurturing the future of your children with 27+ years of trusted experience.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Location</h4>
              <p className="text-slate-400">
                Bus Depot, Near Pardi, Highway Char Rasta,<br />
                Killa-pardi, Gujarat
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <p className="text-slate-400">
                Phone: +91 99999 99999<br />
                Email: info@kalravhospital.com
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-80 rounded-xl overflow-hidden border-4 border-slate-800 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.84970222143!2d72.94487942457175!3d20.51238664342668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c48768f709e3%3A0x32a997a6f8502295!2sKalrav%20Children's%20Hospital!5e0!3m2!1sen!2sin!4v1781873316907!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kalrav Children's Hospital Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-slate-500">
          <p>&copy; {currentYear} Kalrav Children's Hospital. All rights reserved.</p>
          <p className="font-medium text-slate-400 tracking-wide">
            Built by RNext.in
          </p>
        </div>
      </div>
    </footer>
  );
}
