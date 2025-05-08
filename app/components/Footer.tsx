// app/components/Footer.tsx
import { Link } from "@remix-run/react";
import { targetCities, services } from "~/lib/regionsData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">
Anti Mampet</h3>
            <p className="text-gray-400 mb-6">
              Solusi terbaik untuk semua masalah saluran air mampet. Layanan cepat, bersih, dan profesional 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/6285759621854" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                IG
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/layanan/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">Area Layanan</h3>
            <ul className="space-y-3">
              {targetCities.map(city => (
                <li key={city.slug}>
                  <Link 
                    to={`/${city.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/area-layanan"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Semua Area
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-secondary">📞</span>
                <span className="text-gray-400">085759621854</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-secondary">✉️</span>
                <span className="text-gray-400">info@antimampet.citapen.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-secondary">🏠</span>
                <span className="text-gray-400">Melayani seluruh area Bandung, Cimahi, dan sekitarnya</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-secondary">⏰</span>
                <span className="text-gray-400">Layanan darurat 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 
Anti Mampet. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}