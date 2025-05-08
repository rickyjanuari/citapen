// app/routes/$city.tsx
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { faqs, regencies, services, targetCities } from "~/lib/regionsData";
import Hero from "~/components/Hero";
import ServiceCard from "~/components/ServiceCard";
import Faq from "~/components/Faq";

type LoaderData = {
  cityName: string;
  citySlug: string;
  districts: string[];
  isTargetCity: boolean;
};

export const loader: LoaderFunction = async ({ params }) => {
  const citySlug = params.city;
  
  if (!citySlug) {
    throw new Response("Kota tidak ditemukan", { status: 404 });
  }
  
  // Check if it's a target city
  const isTargetCity = targetCities.some(city => city.slug === citySlug);
  
  // Get city name and districts
  let cityName = "";
  let districts: string[] = [];
  
  // Try to match with our target cities first
  const targetCity = targetCities.find(city => city.slug === citySlug);
  if (targetCity) {
    cityName = targetCity.name;
  } else {
    // If not a target city, try to match with regencies from database
    const matchedRegency = regencies.find(
      regency => regency.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').toLowerCase() === citySlug
    );
    
    if (matchedRegency) {
      cityName = matchedRegency.name;
      // Get districts for this regency if needed
      // districts = getDistrictsByRegency(matchedRegency.id).map(d => d.name);
    } else {
      // If still not found, use the slug as name (capitalized)
      cityName = citySlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
  }
  
  return json({
    cityName,
    citySlug,
    districts,
    isTargetCity
  });
};

export const meta: MetaFunction = ({ data }) => {
  if (!data) return [{ title: "Tidak Ditemukan | Anti Mampet" }];
  
  const { cityName, citySlug } = data as LoaderData;
  
  return [
    { title: `Jasa Anti Mampet ${cityName} | Ahli Saluran & Kloset Mampet 24/7` },
    { name: "description", content: `Jasa anti mampet terpercaya di ${cityName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { name: "keywords", content: `saluran mampet ${cityName}, kloset mampet ${cityName}, wastafel mampet ${cityName}, tukang ledeng ${cityName}, jasa plumbing ${cityName}, anti mampet ${cityName}` },
    { property: "og:title", content: `Jasa Anti Mampet ${cityName} | Ahli Saluran & Kloset Mampet 24/7` },
    { property: "og:description", content: `Jasa anti mampet terpercaya di ${cityName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.` },
    { property: "og:image", content: "/images/og-image.jpg" },
    { property: "og:url", content: `https://antimampet.citapen.com/${citySlug}` },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { rel: "canonical", href: `https://antimampet.citapen.com/${citySlug}` }
  ];
};

export default function CityPage() {
  const { cityName, citySlug, districts, isTargetCity } = useLoaderData<LoaderData>();
  
  return (
    <>
      <Hero
        title={`Jasa Anti Mampet ${cityName}`}
        subtitle={`Layanan profesional untuk mengatasi saluran mampet, kloset mampet, dan masalah plumbing lainnya di ${cityName} dan sekitarnya. Tersedia 24/7 untuk layanan darurat.`}
        cityName={cityName}
      />
      
      {/* About City Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Solusi Anti Mampet di {cityName}</h2>
              <p className="text-gray-600 mb-6">
                Anti Mampethadir di {cityName} untuk memberikan solusi terbaik untuk masalah saluran mampet dan plumbing lainnya. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap mengatasi berbagai masalah dengan cepat dan efektif.
              </p>
              <p className="text-gray-600 mb-6">
                Kami memahami karakteristik saluran air dan sistem pipa di {cityName}, sehingga dapat memberikan solusi yang tepat untuk setiap masalah.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Kami Melayani Area:</h3>
                <div className="flex flex-wrap gap-2">
                  {districts.length > 0 ? (
                    districts.map((district, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {district}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-600">Seluruh wilayah {cityName} dan sekitarnya</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Placeholder for city image */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="layanan" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Layanan Anti Mampet di {cityName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} citySlug={citySlug} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="harga" className="section">
        <div className="container">
          <h2 className="text-center mb-12">Harga Layanan di {cityName}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Kami menawarkan harga yang transparan dan kompetitif. Berikut adalah estimasi harga untuk layanan kami di {cityName}:
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
          <h2 className="mb-6">Butuh Bantuan Segera di {cityName}?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Jangan biarkan masalah saluran mampet mengganggu kenyamanan Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/6285759621854?text=${encodeURIComponent(`Halo, saya butuh jasa Anti Mampet di ${cityName}.`)}`}
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
      <Faq faqs={faqs} cityName={cityName} />
      
      {/* SEO Text Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Jasa Anti Mampet Terpercaya di {cityName}</h2>
            <div className="prose prose-lg">
              <p>
                Apakah Anda mengalami masalah dengan saluran air di rumah atau tempat usaha Anda di {cityName}? Anti Mampetsiap membantu. Kami adalah penyedia jasa <strong>anti mampet profesional</strong> yang melayani seluruh wilayah {cityName} dan sekitarnya.
              </p>
              <p>
                Tim kami terdiri dari tenaga ahli berpengalaman yang dilengkapi dengan peralatan modern untuk mengatasi berbagai masalah plumbing, seperti:
              </p>
              
              <ul>
                <li><strong>Saluran mampet</strong> - Mengatasi saluran air yang tersumbat dengan cepat dan efektif</li>
                <li><strong>Kloset mampet</strong> - Membersihkan dan memperbaiki toilet yang tersumbat</li>
                <li><strong>Wastafel mampet</strong> - Mengatasi wastafel yang tidak lancar atau tersumbat</li>
                <li><strong>Saluran kamar mandi</strong> - Memperbaiki saluran air di kamar mandi</li>
                <li><strong>Perbaikan kran</strong> - Mengganti atau memperbaiki kran yang rusak atau bocor</li>
                <li><strong>Kuras toren</strong> - Membersihkan dan merawat tandon air</li>
              </ul>
              
              <p>
                Kami memberikan pelayanan dengan standar tinggi, harga transparan, dan garansi untuk setiap pekerjaan. Jangan ragu untuk menghubungi kami kapan saja, kami siap 24/7 untuk membantu Anda.
              </p>
              
              <h3>Mengapa Memilih Anti Mampetdi {cityName}?</h3>
              
              <ol>
                <li><strong>Respons Cepat</strong> - Kami akan datang ke lokasi Anda dengan cepat</li>
                <li><strong>Tenaga Ahli</strong> - Tim kami terdiri dari teknisi terlatih dan berpengalaman</li>
                <li><strong>Peralatan Modern</strong> - Menggunakan teknologi terbaru untuk hasil maksimal</li>
                <li><strong>Harga Transparan</strong> - Tidak ada biaya tersembunyi</li>
                <li><strong>Garansi Pekerjaan</strong> - Jaminan kepuasan untuk setiap layanan</li>
                <li><strong>Layanan 24/7</strong> - Siap membantu kapan pun Anda membutuhkan</li>
              </ol>
              
              <p>
                Jangan biarkan masalah saluran mampet mengganggu aktivitas Anda. Hubungi Anti Mampetsekarang untuk mendapatkan solusi terbaik di {cityName}!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}