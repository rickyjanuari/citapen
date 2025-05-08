// app/routes/area-layanan.tsx
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { provinces, regencies, generateSlug } from "~/lib/regionsData";
import { generateMeta } from "~/components/Seo";
import { useState } from "react";

type LoaderData = {
  provinces: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  regenciesByProvince: Record<string, Array<{
    id: string;
    name: string;
    slug: string;
  }>>;
};

export const loader: LoaderFunction = async () => {
  // Process provinces
  const processedProvinces = provinces.map(province => ({
    id: province.id,
    name: province.name,
    slug: generateSlug(province.name)
  }));
  
  // Process regencies grouped by province
  const regenciesByProvince: Record<string, Array<{id: string; name: string; slug: string}>> = {};
  
  processedProvinces.forEach(province => {
    const provinceRegencies = regencies
      .filter(regency => regency.provinceId === province.id)
      .map(regency => ({
        id: regency.id,
        name: regency.name,
        slug: generateSlug(regency.name)
      }));
      
    regenciesByProvince[province.id] = provinceRegencies;
  });
  
  return json({
    provinces: processedProvinces,
    regenciesByProvince
  });
};

export const meta: MetaFunction = generateMeta({
  title: "Area Layanan Anti Mampet| Jangkauan Seluruh Indonesia",
  description: "Anti Mampetmelayani seluruh wilayah Indonesia. Cari lokasi terdekat dengan Anda untuk mendapatkan layanan anti mampet cepat dan profesional.",
  canonicalUrl: "https://antimampet.citapen.com/area-layanan"
});

export default function AreasPage() {
  const { provinces, regenciesByProvince } = useLoaderData<LoaderData>();
  const [activeProvince, setActiveProvince] = useState<string | null>(null);
  
  return (
    <>
      <section className="bg-primary py-20 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Area Layanan 
Anti Mampet</h1>
            <p className="text-xl">
              Kami melayani seluruh wilayah Indonesia. Cari lokasi terdekat dengan Anda untuk mendapatkan layanan anti mampet cepat dan profesional.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">Pilih Provinsi dan Kota</h2>
              <p className="text-gray-600">Temukan layanan anti mampet di lokasi Anda</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Provinces List */}
              <div className="bg-gray-50 p-4 overflow-y-auto max-h-[600px]">
                <h3 className="font-bold mb-4 text-gray-700">Provinsi</h3>
                <ul className="space-y-1">
                  {provinces.map(province => (
                    <li key={province.id}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          activeProvince === province.id 
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveProvince(province.id)}
                      >
                        {province.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cities/Regencies List */}
              <div className="col-span-2 p-4 overflow-y-auto max-h-[600px]">
                {activeProvince ? (
                  <>
                    <h3 className="font-bold mb-4 text-gray-700">
                      Kota/Kabupaten di {provinces.find(p => p.id === activeProvince)?.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {regenciesByProvince[activeProvince].map(regency => (
                        <Link
                          key={regency.id}
                          to={`/${regency.slug}`}
                          className="bg-white border border-gray-200 rounded-md p-4 hover:bg-gray-50 hover:border-primary transition-colors"
                        >
                          <span className="text-primary font-medium">{regency.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6-3v13m6-13l-5.447-2.724A1 1 0 0115.618 3.382V14.98" />
                    </svg>
                    <p className="text-lg">Pilih provinsi untuk melihat kota/kabupaten</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Areas Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Area Populer</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              to="/jakarta"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Jakarta</h3>
              <p className="text-gray-600 text-sm">DKI Jakarta</p>
            </Link>
            
            <Link
              to="/bandung"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Bandung</h3>
              <p className="text-gray-600 text-sm">Jawa Barat</p>
            </Link>
            
            <Link
              to="/surabaya"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Surabaya</h3>
              <p className="text-gray-600 text-sm">Jawa Timur</p>
            </Link>
            
            <Link
              to="/medan"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Medan</h3>
              <p className="text-gray-600 text-sm">Sumatera Utara</p>
            </Link>
            
            <Link
              to="/makassar"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Makassar</h3>
              <p className="text-gray-600 text-sm">Sulawesi Selatan</p>
            </Link>
            
            <Link
              to="/semarang"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Semarang</h3>
              <p className="text-gray-600 text-sm">Jawa Tengah</p>
            </Link>
            
            <Link
              to="/yogyakarta"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Yogyakarta</h3>
              <p className="text-gray-600 text-sm">DI Yogyakarta</p>
            </Link>
            
            <Link
              to="/denpasar"
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Denpasar</h3>
              <p className="text-gray-600 text-sm">Bali</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-6">Butuh Bantuan di Lokasi Anda?</h2>
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
    </>
  );
}