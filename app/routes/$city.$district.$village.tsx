// app/routes/$city.$district.$village.tsx
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { faqs, services } from "~/lib/regionsData";
import Hero from "~/components/Hero";
import ServiceCard from "~/components/ServiceCard";
import Faq from "~/components/Faq";
import { generateWhatsAppLink } from "~/utils/whatsappUtils";

type LoaderData = {
  cityName: string;
  citySlug: string;
  districtName: string;
  districtSlug: string;
  villageName: string;
  villageSlug: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const citySlug = params.city;
  const districtSlug = params.district;
  const villageSlug = params.village;
  
  if (!citySlug || !districtSlug || !villageSlug) {
    throw new Response("Halaman tidak ditemukan", { status: 404 });
  }
  
  // Get names from slugs (In a real implementation, query from database)
  const cityName = citySlug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const districtName = districtSlug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const villageName = villageSlug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return json({
    cityName,
    citySlug,
    districtName,
    districtSlug,
    villageName,
    villageSlug
  });
};

export const meta: MetaFunction = ({ data }) => {
  if (!data) return [{ title: "Tidak Ditemukan | Anti Mampet" }];
  
  const { cityName, districtName, villageName, citySlug, districtSlug, villageSlug } = data as LoaderData;
  const fullLocationName = `${villageName}, ${districtName}, ${cityName}`;
  const canonicalUrl = `https://antimampet.citapen.com/${citySlug}/${districtSlug}/${villageSlug}`;
  
  return [
    { title: `Jasa Anti Mampet ${fullLocationName} | Ahli Saluran & Kloset Mampet 24/7` },
    { name: "description", content: `Jasa anti mampet terpercaya di ${fullLocationName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { name: "keywords", content: `saluran mampet ${fullLocationName}, kloset mampet ${villageName}, wastafel mampet ${districtName}, tukang ledeng ${cityName}, jasa plumbing ${villageName}, anti mampet ${districtName}` },
    { property: "og:title", content: `Jasa Anti Mampet ${fullLocationName} | Ahli Saluran & Kloset Mampet 24/7` },
    { property: "og:description", content: `Jasa anti mampet terpercaya di ${fullLocationName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { property: "og:image", content: "/images/og-image.jpg" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `Jasa Anti Mampet ${fullLocationName} | Ahli Saluran & Kloset Mampet 24/7` },
    { name: "twitter:description", content: `Jasa anti mampet terpercaya di ${fullLocationName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { rel: "canonical", href: canonicalUrl }
  ];
};

export default function VillagePage() {
  const { cityName, citySlug, districtName, districtSlug, villageName, villageSlug } = useLoaderData<LoaderData>();
  const fullLocationName = `${villageName}, ${districtName}, ${cityName}`;
  
  return (
    <>
      <Hero
        title={`Jasa Anti Mampet ${villageName}, ${districtName}, ${cityName}`}
        subtitle={`Layanan profesional untuk mengatasi saluran mampet, kloset mampet, dan masalah plumbing lainnya di ${villageName}, ${districtName}, ${cityName}. Tersedia 24/7 untuk layanan darurat.`}
        cityName={fullLocationName}
      />
      
      {/* About Village Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Solusi Anti Mampet di {villageName}, {districtName}, {cityName}</h2>
              <p className="text-gray-600 mb-6">
                Anti Mampethadir di {villageName}, {districtName}, {cityName} untuk memberikan solusi terbaik untuk masalah saluran mampet dan plumbing lainnya. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap mengatasi berbagai masalah dengan cepat dan efektif.
              </p>
              <p className="text-gray-600 mb-6">
                Kami memahami karakteristik saluran air dan sistem pipa di wilayah {villageName}, sehingga dapat memberikan solusi yang tepat untuk setiap masalah.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl mb-2">⏱️</div>
                  <h3 className="text-lg font-bold mb-2">Respons Cepat</h3>
                  <p className="text-gray-600 text-sm">Tiba di lokasi Anda dalam waktu singkat</p>
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
              {/* Placeholder for village image */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="layanan" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Layanan Anti Mampet di {villageName}, {districtName}, {cityName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} citySlug={`${citySlug}/${districtSlug}/${villageSlug}`} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="harga" className="section">
        <div className="container">
          <h2 className="text-center mb-12">Harga Layanan di {villageName}, {districtName}, {cityName}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Kami menawarkan harga yang transparan dan kompetitif. Berikut adalah estimasi harga untuk layanan kami di {villageName}, {districtName}, {cityName}:
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
            <h2 className="mb-6">Butuh Bantuan Segera di {villageName}, {districtName}, {cityName}?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
            Jangan biarkan masalah saluran mampet mengganggu kenyamanan Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
            <a
                href={generateWhatsAppLink({
                location: `${villageName}, ${districtName}, ${cityName}`,
                message: "Mohon bantuannya untuk masalah saluran air di rumah saya."
                })}
                target="_blank"
                rel="noopener noreferrer"
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
      <Faq faqs={faqs} cityName={fullLocationName} />
      
      {/* SEO Text Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Jasa Anti Mampet Terpercaya di {villageName}, {districtName}, {cityName}</h2>
            <div className="prose prose-lg">
              <p>
                Anti Mampetadalah solusi terbaik untuk masalah saluran mampet dan plumbing lainnya di {villageName}, {districtName}, {cityName}. Kami memahami betapa mengganggu dan merepotkannya masalah saluran air yang tersumbat, oleh karena itu kami hadir untuk memberikan layanan cepat dan profesional untuk mengatasi semua masalah plumbing Anda.
              </p>
              
              <h3>Layanan Anti Mampet di {villageName}</h3>
              
              <p>
                Kami menyediakan berbagai layanan anti mampet untuk rumah dan bisnis di {villageName}, termasuk:
              </p>
              
              <ul>
                <li><strong>Saluran mampet di {villageName}</strong> - Mengatasi saluran air yang tersumbat dengan cepat dan efektif</li>
                <li><strong>Kloset mampet di {villageName}</strong> - Membersihkan dan memperbaiki toilet yang tersumbat</li>
                <li><strong>Wastafel mampet di {villageName}</strong> - Mengatasi wastafel yang tidak lancar atau tersumbat</li>
                <li><strong>Saluran kamar mandi di {villageName}</strong> - Memperbaiki saluran air di kamar mandi</li>
                <li><strong>Perbaikan kran di {villageName}</strong> - Mengganti atau memperbaiki kran yang rusak atau bocor</li>
                <li><strong>Kuras toren di {villageName}</strong> - Membersihkan dan merawat tandon air</li>
              </ul>
              
              <p>
                Kami hadir di seluruh wilayah {villageName}, {districtName}, {cityName} dan siap memberikan layanan terbaik untuk Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat dan profesional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}