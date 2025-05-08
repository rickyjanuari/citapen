// app/components/WhatsAppFloat.tsx
import { generateWhatsAppLink } from "~/utils/whatsappUtils";

type WhatsAppFloatProps = {
  serviceName?: string;
  locationName?: string;
};

export default function WhatsAppFloat({ serviceName, locationName }: WhatsAppFloatProps) {
  const whatsAppLink = generateWhatsAppLink({
    service: serviceName,
    location: locationName
  });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <span className="bg-[#25D366] text-white text-sm font-bold px-3 py-1 rounded-full mb-2 shadow-lg">
          Hubungi Kami
        </span>
        <span className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8" />
        </span>
      </a>
    </div>
  );
}