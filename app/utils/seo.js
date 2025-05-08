/**
 * Generate meta tags for SEO
 * @param {Object} params - Parameters for meta tags
 * @returns {Array} - Array of meta objects for Remix
 */
export function generateMetaTags(params = {}) {
    const {
      title = 'Anti Mampet | Jasa Profesional Atasi Saluran Tersumbat 24/7',
      description = 'Jasa anti mampet profesional untuk mengatasi saluran mampet, WC tersumbat, dan layanan plumbing lainnya. Layanan cepat dan bergaransi 24/7. Hubungi: 085759621854',
      url = 'https://antimampet.citapen.com',
      image = 'https://antimampet.citapen.com/images/og-image.jpg',
      location = null, // specific location if page is for a specific area
      service = null, // specific service if page is for a specific service
      district = null // specific district if page is for a specific district
    } = params;
  
    // Customize for location, district, and service
    let customizedTitle = title;
    let customizedDescription = description;
    let customizedImage = image;
    
    if (service && location) {
      customizedTitle = `Jasa ${service} ${location} | Anti Mampet - Profesional & Bergaransi`;
      customizedDescription = `Layanan jasa ${service.toLowerCase()} profesional di ${location}. Mengatasi masalah saluran tersumbat dengan cepat, bersih, dan bergaransi. Hubungi: 085759621854`;
      customizedImage = `${url}/images/services/${service.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    } else if (service) {
      customizedTitle = `Jasa ${service} | Anti Mampet - Layanan Profesional 24/7`;
      customizedDescription = `Layanan jasa ${service.toLowerCase()} profesional. Mengatasi masalah saluran tersumbat dengan cepat, bersih, dan bergaransi. Hubungi: 085759621854`;
      customizedImage = `${url}/images/services/${service.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    } else if (district && location) {
      customizedTitle = `Jasa Anti Mampet ${district}, ${location} | Ahli Saluran Tersumbat`;
      customizedDescription = `Layanan jasa anti mampet profesional di ${district}, ${location}. Mengatasi saluran mampet, WC tersumbat, dan masalah plumbing dengan cepat. Hubungi: 085759621854`;
      customizedImage = `${url}/images/districts/${district.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    } else if (location) {
      customizedTitle = `Jasa Anti Mampet ${location} | Ahli Saluran Tersumbat 24/7`;
      customizedDescription = `Layanan jasa anti mampet profesional di ${location}. Mengatasi saluran mampet, WC tersumbat, dan masalah plumbing dengan cepat dan bergaransi. Hubungi: 085759621854`;
      customizedImage = `${url}/images/cities/${location.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    }
  
    // Generate keywords
    const keywords = generateKeywords({location, service, district});
    
    // Remix meta format
    return [
      { title: customizedTitle },
      { name: "description", content: customizedDescription },
      { name: "keywords", content: keywords },
      { property: "og:title", content: customizedTitle },
      { property: "og:description", content: customizedDescription },
      { property: "og:image", content: customizedImage },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: customizedTitle },
      { property: "twitter:description", content: customizedDescription },
      { property: "twitter:image", content: customizedImage }
    ];
  }
  
  /**
   * Generate keywords for meta tags
   * @param {Object} params - Parameters for generating keywords
   * @returns {string} - Comma-separated keywords
   */
  function generateKeywords(params = {}) {
    const {
      location = null,
      service = null,
      district = null
    } = params;
    
    const baseKeywords = [
      'jasa anti mampet',
      'tukang ledeng',
      'saluran tersumbat',
      'WC mampet',
      'wastafel mampet',
      'saluran kamar mandi',
      'kuras toren',
      'sedot wc',
      'jasa plumbing'
    ];
    
    let locationKeywords = [];
    if (location) {
      locationKeywords = [
        `jasa anti mampet ${location}`,
        `tukang ledeng ${location}`,
        `saluran tersumbat ${location}`,
        `WC mampet ${location}`,
        `sedot wc ${location}`
      ];
    }
    
    let districtKeywords = [];
    if (district && location) {
      districtKeywords = [
        `jasa anti mampet ${district} ${location}`,
        `tukang ledeng ${district}`,
        `saluran tersumbat ${district}`,
        `WC mampet ${district}`
      ];
    }
    
    let serviceKeywords = [];
    if (service) {
      serviceKeywords = [
        `jasa ${service.toLowerCase()}`,
        `${service.toLowerCase()} profesional`,
        `atasi ${service.toLowerCase()}`,
        `perbaikan ${service.toLowerCase()}`
      ];
      
      if (location) {
        serviceKeywords.push(
          `jasa ${service.toLowerCase()} ${location}`,
          `${service.toLowerCase()} ${location}`,
          `atasi ${service.toLowerCase()} di ${location}`
        );
      }
    }
    
    // Combine all keywords and remove duplicates
    const allKeywords = [...new Set([...baseKeywords, ...locationKeywords, ...districtKeywords, ...serviceKeywords])];
    
    return allKeywords.join(', ');
  }
  
  /**
   * Generate JSON-LD script content
   * @param {Object} params - Parameters for schema markup
   * @returns {string} - JSON-LD content
   */
  export function generateJsonLd(params = {}) {
    const {
      type = 'LocalBusiness',
      data = {}
    } = params;
    
    let schemaData = {};
    
    switch (type) {
      case 'LocalBusiness':
        schemaData = generateLocalBusinessData(data);
        break;
      case 'Service':
        schemaData = generateServiceData(data);
        break;
      case 'FAQPage':
        schemaData = generateFaqData(data);
        break;
      default:
        schemaData = generateLocalBusinessData(data);
    }
    
    return JSON.stringify(schemaData);
  }
  
  // Helper functions for schema generation
  function generateLocalBusinessData(data = {}) {
    const {
      name = 'Anti Mampet',
      description = 'Jasa anti mampet profesional untuk mengatasi saluran mampet, WC tersumbat, dan layanan plumbing lainnya',
      url = 'https://antimampet.citapen.com',
      telephone = '+6285759621854',
      location = null
    } = data;
    
    // If location is provided, customize name and description
    const customizedName = location ? `Anti Mampet ${location}` : name;
    const customizedDescription = location ? 
      `Jasa anti mampet profesional di ${location} untuk mengatasi saluran mampet, WC tersumbat, dan layanan plumbing lainnya` :
      description;
    
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": customizedName,
      "description": customizedDescription,
      "url": location ? `${url}/${location.toLowerCase().replace(/\s+/g, '-')}` : url,
      "telephone": telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Anti Mampet No. 123",
        "addressLocality": location || "Bandung",
        "addressRegion": "Jawa Barat",
        "postalCode": "40123",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-6.9147444",
        "longitude": "107.6098111"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "priceRange": "Rp100.000 - Rp500.000",
      "areaServed": location ? `${location} dan sekitarnya` : "Bandung, Cimahi, Padalarang"
    };
  }
  
  function generateServiceData(data = {}) {
    const {
      name = 'Jasa Anti Mampet',
      description = 'Layanan jasa anti mampet profesional untuk mengatasi saluran mampet, WC tersumbat, dan masalah plumbing lainnya',
      url = 'https://antimampet.citapen.com',
      location = null,
      service = null
    } = data;
    
    // Customize for location and service
    let customizedName = name;
    let customizedDescription = description;
    let customizedUrl = url;
    
    if (service && location) {
      customizedName = `Jasa ${service} ${location}`;
      customizedDescription = `Layanan jasa ${service.toLowerCase()} profesional di ${location}. Mengatasi masalah plumbing dengan cepat, bersih, dan bergaransi.`;
      customizedUrl = `${url}/${location.toLowerCase().replace(/\s+/g, '-')}/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
    } else if (service) {
      customizedName = `Jasa ${service}`;
      customizedDescription = `Layanan jasa ${service.toLowerCase()} profesional. Mengatasi masalah plumbing dengan cepat, bersih, dan bergaransi.`;
      customizedUrl = `${url}/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
    } else if (location) {
      customizedName = `Jasa Anti Mampet ${location}`;
      customizedDescription = `Layanan jasa anti mampet profesional di ${location}. Mengatasi saluran mampet, WC tersumbat, dan masalah plumbing lainnya.`;
      customizedUrl = `${url}/${location.toLowerCase().replace(/\s+/g, '-')}`;
    }
    
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": customizedName,
      "description": customizedDescription,
      "url": customizedUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Anti Mampet",
        "url": url
      },
      "areaServed": location ? `${location} dan sekitarnya` : "Bandung, Cimahi, Padalarang"
    };
  }
  
  function generateFaqData(data = {}) {
    const { faqs = [] } = data;
    
    if (faqs.length === 0) return {};
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }