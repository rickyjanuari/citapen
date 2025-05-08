// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import tailwindStyles from "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" },
  { rel: "icon", href: "/favicon.ico" },
];

export default function App() {
  const matches = useMatches();
  
  // Try to extract service and location info from routes
  const routeData = matches.find(match => match.data)?.data || {};
  
  const serviceName = routeData.service?.name;
  const locationInfo = routeData.cityName ? 
    (routeData.villageName ? 
      `${routeData.villageName}, ${routeData.districtName}, ${routeData.cityName}` : 
      (routeData.districtName ? 
        `${routeData.districtName}, ${routeData.cityName}` : 
        routeData.cityName)
    ) : 
    undefined;
  
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="pt-16"> {/* Add padding for fixed header */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat serviceName={serviceName} locationName={locationInfo} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}