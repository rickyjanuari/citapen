// app/routes/$city.$district.tsx
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { faqs, services, districts as allDistricts, villages as allVillages } from "~/lib/regionsData";
import Hero from "~/components/Hero";
import ServiceCard from "~/components/ServiceCard";
import Faq from "~/components/Faq";
import { generateWhatsAppLink } from "~/utils/whatsappUtils";

type LoaderData = {
  cityName: string;
  citySlug: string;
  districtName: string;
  districtSlug: string;
  villages: string[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const citySlug = params.city;
  const districtSlug = params.district;
  
  if (!citySlug || !districtSlug) {
    throw new Response("Halaman tidak ditemukan", { status: 404 });
  }
  
  // Get city and district names from slugs
  // In a real implementation, you would query these from a database
  const cityName = citySlug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const districtName = districtSlug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Simulate getting villages data
  // In a real implementation, you would query these from a database
  const villages: string[] = [];
  
  // Try to find matching district in our database
  const matchedDistrict = allDistricts.find(
    d => d.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').toLowerCase() === districtSlug
  );
  
  if (matchedDistrict) {
    // Get villages for this district
    const districtVillages = allVillages
      .filter(v => v.districtId === matchedDistrict.id)
      .map(v => v.name);
      
    villages.push(...districtVillages);
  }
  
  return json({
    cityName,
    citySlug,
    districtName,
    districtSlug,
    villages: villages.slice(0, 10) // Limit to 10 villages for performance
  });
};

export const meta: MetaFunction = ({ data }) => {
  if (!data) return [{ title: "Tidak Ditemukan | Anti Mampet" }];
  
  const { cityName, districtName, citySlug, districtSlug } = data as LoaderData;
  const fullLocationName = `${districtName}, ${cityName}`;
  const canonicalUrl = `https://antimampet.citapen.com/${citySlug}/${districtSlug}`;
  
  return [
    { title: `Jasa Anti Mampet ${fullLocationName} | Ahli Saluran & Kloset Mampet 24/7` },
    { name: "description", content: `Jasa anti mampet terpercaya di ${fullLocationName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { name: "keywords", content: `saluran mampet ${districtName}, kloset mampet ${districtName} ${cityName}, wastafel mampet ${districtName}, tukang ledeng ${fullLocationName}, jasa plumbing ${districtName}, anti mampet ${districtName}` },
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

export default function DistrictPage() {
  const { cityName, citySlug, districtName, districtSlug, villages } = useLoaderData<LoaderData>();
  const fullLocationName = `${districtName}, ${cityName}`;
  
  return (
    <>
      <Hero
        title={`Jasa Anti Mampet ${districtName}, ${cityName}`}
        subtitle={`Layanan profesional untuk mengatasi saluran mampet, kloset mampet, dan masalah plumbing lainnya di ${districtName}, ${cityName}. Tersedia 24/7 untuk layanan darurat.`}
        cityName={fullLocationName}
      />
      
      {/* About District Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Solusi Anti Mampet di {districtName}, {cityName}</h2>
              <p className="text-gray-600 mb-6">
                Anti Mampethadir di {districtName}, {cityName} untuk memberikan solusi terbaik untuk masalah saluran mampet dan plumbing lainnya. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap mengatasi berbagai masalah dengan cepat dan efektif.
              </p>
              <p className="text-gray-600 mb-6">
                Kami memahami karakteristik saluran air dan sistem pipa di wilayah {districtName}, sehingga dapat memberikan solusi yang tepat untuk setiap masalah.
              </p>
              
              {villages.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Kami Melayani Kelurahan/Desa:</h3>
                  <div className="flex flex-wrap gap-2">
                    {villages.map((village, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {village}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Placeholder for district image */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="layanan" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Layanan Anti Mampet di {districtName}, {cityName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} citySlug={`${citySlug}/${districtSlug}`} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="harga" className="section">
        <div className="container">
          <h2 className="text-center mb-12">Harga Layanan di {districtName}, {cityName}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Kami menawarkan harga yang transparan dan kompetitif. Berikut adalah estimasi harga untuk layanan kami di {districtName}, {cityName}:
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
        <h2 className="mb-6">Butuh Bantuan Segera di {districtName}, {cityName}?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
        Jangan biarkan masalah saluran mampet mengganggu kenyamanan Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
        <a
            href={generateWhatsAppLink({
            location: `${districtName}, ${cityName}`,
            message: "Tolong kirimkan teknisi ke lokasi saya segera."
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
            <h2 className="mb-6">Jasa Anti Mampet Terpercaya di {districtName}, {cityName}</h2>
            <div className="prose prose-lg">
              <p>
                Apakah Anda mengalami masalah dengan saluran air di rumah atau tempat usaha Anda di {districtName}, {cityName}? Anti Mampetsiap membantu. Kami adalah penyedia jasa <strong>anti mampet profesional</strong> yang melayani seluruh wilayah {districtName} dan sekitarnya.
              </p>
              <p>
                Tim kami terdiri dari tenaga ahli berpengalaman yang dilengkapi dengan peralatan modern untuk mengatasi berbagai masalah plumbing, seperti:
              </p>
              
              <ul>
                <li><strong>Saluran mampet di {districtName}</strong> - Mengatasi saluran air yang tersumbat dengan cepat dan efektif</li>
                <li><strong>Kloset mampet di {districtName}</strong> - Membersihkan dan memperbaiki toilet yang tersumbat</li>
                <li><strong>Wastafel mampet di {districtName}</strong> - Mengatasi wastafel yang tidak lancar atau tersumbat</li>
                <li><strong>Saluran kamar mandi di {districtName}</strong> - Memperbaiki saluran air di kamar mandi</li>
                <li><strong>Perbaikan kran di {districtName}</strong> - Mengganti atau memperbaiki kran yang rusak atau bocor</li>
                <li><strong>Kuras toren di {districtName}</strong> - Membersihkan dan merawat tandon air</li>
              </ul>
              
              <p>
                Kami memberikan pelayanan dengan standar tinggi, harga transparan, dan garansi untuk setiap pekerjaan. Jangan ragu untuk menghubungi kami kapan saja, kami siap 24/7 untuk membantu Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}