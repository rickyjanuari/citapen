// app/utils/whatsappUtils.ts
export function generateWhatsAppLink({
    service,
    location,
    message
  }: {
    service?: string;
    location?: string;
    message?: string;
  }) {
    const baseUrl = "https://wa.me/6285759621854";
    
    if (!service && !location && !message) {
      return baseUrl;
    }
    
    let whatsAppMessage = "Halo, saya butuh jasa Anti Mampet";
    
    if (service) {
      whatsAppMessage += ` untuk ${service}`;
    }
    
    if (location) {
      whatsAppMessage += ` di ${location}`;
    }
    
    if (message) {
      whatsAppMessage += `. ${message}`;
    } else {
      whatsAppMessage += ".";
    }
    
    return `${baseUrl}?text=${encodeURIComponent(whatsAppMessage)}`;
  }