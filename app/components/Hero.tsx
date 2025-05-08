// app/components/Hero.tsx
import { generateWhatsAppLink } from "~/utils/whatsappUtils";

type HeroProps = {
  title: string;
  subtitle: string;
  cityName?: string;
  serviceName?: string;
};

export default function Hero({ title, subtitle, cityName, serviceName }: HeroProps) {
  const whatsAppLink = generateWhatsAppLink({
    service: serviceName,
    location: cityName
  });

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-primary to-primary-dark">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 text-center text-white">
        <h1 className="mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">{subtitle}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={whatsAppLink}
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
  );
}