import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { services, faqs } from "~/lib/regionsData";
import Hero from "~/components/Hero";
import Faq from "~/components/Faq";
import { generateWhatsAppLink } from "~/utils/whatsappUtils";

type LoaderData = {
  service: typeof services[0];
};

export const loader: LoaderFunction = async ({ params }) => {
  const serviceId = params.serviceId;
  
  const service = services.find(service => service.id === serviceId);
  
  if (!service) {
    throw new Response("Layanan tidak ditemukan", { status: 404 });
  }
  
  return json({
    service
  });
};

export const meta: MetaFunction = ({ data }) => {
  if (!data) return [{ title: "Layanan Tidak Ditemukan | Anti Mampet" }];
  
  const { service } = data as LoaderData;
  
  return [
    { title: `Jasa ${service.name} | 
Anti Mampet` },
    { name: "description", content: service.description },
    { name: "keywords", content: `${service.name.toLowerCase()}, jasa ${service.name.toLowerCase()}, perbaikan ${service.name.toLowerCase()}, anti mampet, tukang ledeng` },
    { property: "og:title", content: `Jasa ${service.name} | 
Anti Mampet` },
    { property: "og:description", content: service.description },
    { property: "og:image", content: "/images/og-image.jpg" },
    { property: "og:url", content: `https://antimampet.citapen.com/layanan/${service.id}` },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `Jasa ${service.name} | 
Anti Mampet` },
    { name: "twitter:description", content: service.description },
    { rel: "canonical", href: `https://antimampet.citapen.com/layanan/${service.id}` }
  ];
};

export default function ServicePage() {
  const { service } = useLoaderData<LoaderData>();
  
  // Service-specific FAQs plus some general ones
  const serviceFaqs = [
    {
      question: `Mengapa ${service.name.toLowerCase()} bisa terjadi?`,
      answer: `${service.name} biasanya terjadi karena penumpukan kotoran, lemak, rambut, atau benda asing yang masuk ke dalam saluran. Selain itu, masalah struktural pada pipa seperti retak atau kerusakan juga bisa menyebabkan ${service.name.toLowerCase()}.`
    },
    {
      question: `Bagaimana cara mencegah ${service.name.toLowerCase()}?`,
      answer: `Untuk mencegah ${service.name.toLowerCase()}, pastikan untuk tidak membuang sisa makanan, minyak, lemak, atau benda padat ke dalam saluran. Lakukan pembersihan rutin dan gunakan saringan pada lubang pembuangan. Perawatan berkala oleh profesional juga dapat membantu mencegah masalah di masa depan.`
    },
    ...faqs.slice(0, 2)
  ];
  
  return (
    <>
      <Hero
        title={`Jasa ${service.name} Profesional`}
        subtitle={`Layanan ${service.name.toLowerCase()} cepat, bersih, dan profesional. Tersedia 24/7 untuk mengatasi masalah ${service.name.toLowerCase()} di rumah dan bisnis Anda.`}
      />
      
      {/* Service Details Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Layanan {service.name} Profesional</h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <p className="text-gray-600 mb-6">
                Anti Mampetmenyediakan solusi {service.name.toLowerCase()} dengan teknologi modern dan tenaga ahli berpengalaman. Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan hasil maksimal.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Informasi Layanan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Harga</span>
                    <span>{service.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Estimasi Waktu</span>
                    <span>{service.estimatedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Garansi</span>
                    <span>30 Hari</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Metode Pembayaran</span>
                    <span>Cash, Transfer</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/6285759621854?text=${encodeURIComponent(`Halo, saya butuh jasa ${service.name}.`)}`}
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
            
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-8xl">
              {service.icon}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Proses Penanganan {service.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-3">Identifikasi Masalah</h3>
              <p className="text-gray-600">Kami melakukan pemeriksaan untuk menentukan penyebab {service.name.toLowerCase()}.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-3">Penawaran Harga</h3>
              <p className="text-gray-600">Kami memberikan estimasi biaya yang transparan sebelum mulai pekerjaan.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-3">Penanganan</h3>
              <p className="text-gray-600">Kami menggunakan peralatan modern untuk mengatasi {service.name.toLowerCase()} dengan cepat dan efektif.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-3">Pengujian</h3>
              <p className="text-gray-600">Kami memastikan masalah telah teratasi dan memberikan tips pencegahan.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Layanan Terkait</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map(relatedService => (
                <Link
                  key={relatedService.id}
                  to={`/layanan/${relatedService.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center text-5xl">
                    <span>{relatedService.icon}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{relatedService.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    
                    <div className="mt-4 flex justify-end">
                      <span className="inline-flex items-center text-secondary font-medium">
                        Selengkapnya
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
            <div className="container text-center">
                <h2 className="mb-6">Butuh Bantuan {service.name} Segera?</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto">
                Jangan biarkan masalah {service.name.toLowerCase()} mengganggu kenyamanan Anda. Hubungi kami sekarang untuk mendapatkan solusi cepat!
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                <a
                    href={generateWhatsAppLink({
                    service: service.name,
                    message: "Mohon info lebih lanjut tentang biaya dan waktu pengerjaan."
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
          <Faq faqs={serviceFaqs} cityName={service.name} />
          
          {/* SEO Text Section */}
          <section className="section bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-6">Jasa {service.name} Terpercaya di Indonesia</h2>
                <div className="prose prose-lg">
                  <p>
                    Anti Mampetmenyediakan layanan {service.name.toLowerCase()} profesional untuk rumah dan bisnis di seluruh Indonesia. Kami memiliki pengalaman lebih dari 10 tahun dalam menangani berbagai masalah plumbing, termasuk {service.name.toLowerCase()}.
                  </p>
                  
                  <h3>Mengapa {service.name} Perlu Ditangani Segera?</h3>
                  
                  <p>
                    {service.name} yang tidak segera ditangani dapat menyebabkan berbagai masalah, seperti:
                  </p>
                  
                  <ul>
                    <li>Bau tidak sedap yang mengganggu</li>
                    <li>Perkembangbiakan bakteri dan kuman</li>
                    <li>Kerusakan pada struktur bangunan</li>
                    <li>Biaya perbaikan yang lebih mahal jika ditunda</li>
                  </ul>
                  
                  <p>
                    Oleh karena itu, sangat penting untuk menghubungi profesional seperti Anti Mampetsegera ketika Anda mengalami masalah {service.name.toLowerCase()}.
                  </p>
                  
                  <h3>Keunggulan Layanan {service.name} Kami</h3>
                  
                  <ol>
                    <li><strong>Teknisi Berpengalaman</strong> - Tim kami terdiri dari teknisi terlatih dan berpengalaman dalam menangani masalah {service.name.toLowerCase()}.</li>
                    <li><strong>Peralatan Modern</strong> - Kami menggunakan teknologi terbaru untuk mendiagnosa dan mengatasi masalah dengan cepat dan efektif.</li>
                    <li><strong>Harga Transparan</strong> - Kami memberikan penawaran harga yang jelas sebelum memulai pekerjaan, tanpa biaya tersembunyi.</li>
                    <li><strong>Garansi Pekerjaan</strong> - Kami memberikan garansi 30 hari untuk setiap pekerjaan, memberikan Anda ketenangan pikiran.</li>
                    <li><strong>Layanan 24/7</strong> - Masalah plumbing bisa terjadi kapan saja, itulah sebabnya kami siap membantu 24 jam sehari, 7 hari seminggu.</li>
                  </ol>
                  
                  <p>
                    Jangan biarkan masalah {service.name.toLowerCase()} mengganggu kenyamanan Anda. Hubungi Anti Mampetsekarang untuk mendapatkan bantuan profesional!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }