// app/routes/sitemap[.]xml.tsx
import { LoaderFunction } from "@remix-run/node";
import { targetCities, services } from "~/lib/regionsData";

export const loader: LoaderFunction = async () => {
  const baseUrl = "https://antimampet.citapen.com";
  
  // Basic pages
  const pages = [
    "",
    "/layanan",
    "/area-layanan",
    "/kontak",
    "/tentang-kami"
  ];
  
  // Service pages
  const servicePages = services.map(service => `/layanan/${service.id}`);
  
  // Location pages
  const locationPages = targetCities.map(city => `/${city.slug}`);
  
  // Combine all URLs
  const urls = [...pages, ...servicePages, ...locationPages];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === "" ? "daily" : "weekly"}</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  });
};