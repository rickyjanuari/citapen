// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import { services, targetCities, faqs } from "~/lib/regionsData";
import ServiceCard from "~/components/ServiceCard";
import Faq from "~/components/Faq";
import { generateMeta } from "~/components/Seo";

export const meta: MetaFunction = generateMeta({
  canonicalUrl: "https://antimampet.citapen.com"
});

export default function Index() {
  return (
    <>
      <Hero
        title="Anti Mampet- Solusi Saluran Tersumbat"
        subtitle="Layanan profesional untuk mengatasi saluran air mampet, kloset mampet, dan masalah plumbing lainnya. Tersedia 24/7 untuk layanan darurat."
      />
      
      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Tentang 
Anti Mampet</h2>
              <p className="text-gray-600 mb-6">
                Anti Mampetadalah jasa terpercaya untuk mengatasi berbagai masalah plumbing, khususnya saluran yang tersumbat. Dengan pengalaman lebih dari 10 tahun, tim kami siap memberikan layanan profesional dengan hasil maksimal.
              </p>
              <p className="text-gray-600 mb-6">
                Kami menggunakan peralatan modern dan teknik terbaru untuk mengatasi masalah saluran mampet dengan cepat, bersih, dan efektif.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl mb-2">⏱️</div>
                  <h3 className="text-lg font-bold mb-2">Layanan 24/7</h3>
                  <p className="text-gray-600 text-sm">Siap membantu kapan pun Anda membutuhkan</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl mb-2">🛠️</div>
                  <h3 className="text-lg font-bold mb-2">Tenaga Ahli</h3>
                  <p className="text-gray-600 text-sm">Tim berpengalaman dan profesional</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl mb-2">💰</div>
                  <h3 className="text-lg font-bold mb-2">Harga Terjangkau</h3>
                  <p className="text-gray-600 text-sm">Biaya transparan tanpa biaya tersembunyi</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl mb-2">🔄</div>
                  <h3 className="text-lg font-bold mb-2">Garansi Pekerjaan</h3>
                  <p className="text-gray-600 text-sm">Jaminan kepuasan untuk setiap pekerjaan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Placeholder for image */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="layanan" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Layanan Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Area Section */}
      <section id="area" className="section">
        <div className="container">
          <h2 className="text-center mb-12">Area Layanan</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Kami melayani berbagai wilayah di Indonesia. Berikut adalah beberapa area utama layanan kami:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetCities.map(city => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-40 bg-gray-200 relative">
                  {/* Placeholder for city image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{city.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Layanan anti mampet untuk area {city.name} dan sekitarnya.
                  </p>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-secondary font-medium">
                      Lihat Detail
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            <Link
              to="/area-layanan"
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-40 bg-gradient-to-r from-primary to-primary-dark relative flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Seluruh Indonesia</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Lihat semua area layanan 
Anti Mampet.
                </p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-secondary font-medium">
                    Lihat Semua Area
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="harga" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Harga Layanan</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Kami menawarkan harga yang transparan dan kompetitif. Berikut adalah estimasi harga untuk layanan kami:
          </p>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left">Layanan</th>
                  <th className="px-6 py-4 text-left">Harga</th>
                  <th className="px-6 py-4 text-left">Estimasi Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map(service => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{service.name}</td>
                    <td className="px-6 py-4">{service.price}</td>
                    <td className="px-6 py-4">{service.estimatedTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            * Harga dapat bervariasi tergantung tingkat kesulitan dan kondisi lapangan.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-6">Butuh Bantuan Segera?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Jangan biarkan masalah saluran mampet mengganggu kenyamanan Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6285759621854"
              className="btn btn-whatsapp"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
              Hubungi via WhatsApp
            </a>
            
            <a href="tel:+6285759621854" className="btn btn-secondary">
              <span className="mr-2">📞</span> 085759621854
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <Faq faqs={faqs} />
    </>
  );
}