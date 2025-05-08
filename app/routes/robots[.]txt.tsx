// app/routes/robots[.]txt.tsx
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://antimampet.citapen.com/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
};