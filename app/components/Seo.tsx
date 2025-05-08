// app/components/Seo.tsx
import { MetaFunction } from "@remix-run/node";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  cityName?: string;
};

export const generateMeta = ({
  title = "Anti Mampet| Solusi Cepat Saluran Tersumbat 24/7",
  description = "Jasa tukang ledeng terpercaya untuk mengatasi saluran mampet, kloset mampet, perbaikan kran, dan layanan plumbing lainnya. Layanan 24/7 di seluruh Indonesia.",
  keywords = "saluran mampet, kloset mampet, wastafel mampet, tukang ledeng, jasa plumbing, anti mampet",
  ogImage = "/images/og-image.jpg",
  canonicalUrl = "https://antimampet.citapen.com",
  cityName,
}: SeoProps): MetaFunction => {
  // Customize for city if provided
  const cityTitle = cityName 
    ? `Jasa Anti Mampet ${cityName} | Ahli Saluran & Kloset Mampet 24/7` 
    : title;
  
  const cityDescription = cityName
    ? `Jasa anti mampet terpercaya di ${cityName} untuk saluran mampet, kloset mampet, perbaikan kran. Layanan cepat dan profesional 24/7 dengan harga terjangkau.`
    : description;
    
  const cityKeywords = cityName
    ? `saluran mampet ${cityName}, kloset mampet ${cityName}, wastafel mampet ${cityName}, tukang ledeng ${cityName}, jasa plumbing ${cityName}, anti mampet ${cityName}`
    : keywords;

  return () => [
    { title: cityTitle },
    { name: "description", content: cityDescription },
    { name: "keywords", content: cityKeywords },
    { property: "og:title", content: cityTitle },
    { property: "og:description", content: cityDescription },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: cityTitle },
    { name: "twitter:description", content: cityDescription },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:site", content: "@antimampet" },
    { rel: "canonical", href: canonicalUrl }
  ];
};