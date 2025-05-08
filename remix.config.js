/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    ignoredRouteFiles: ["**/.*"],
    serverModuleFormat: "cjs",
    future: {
      v2_errorBoundary: true,
      v2_meta: true,
      v2_normalizeFormMethod: true,
      v2_routeConvention: true,
    },
    // Set output mode to static for SSG
    serverBuildTarget: "vercel",
    // Define routes that should be pre-rendered
    routes: async (defineRoutes) => {
      return defineRoutes((route) => {
        // Homepage
        route("/", "routes/_index.tsx", { caseSensitive: true });
        
        // Static routes
        route("/about", "routes/about.tsx", { caseSensitive: true });
        route("/services", "routes/services._index.tsx", { caseSensitive: true });
        
        // Dynamic routes that will be pre-rendered
        route(
          "/services/:service",
          "routes/services.$service.tsx",
          {
            caseSensitive: true,
            // Provide all possible service values
            prerender: [
              { service: "saluran-mampet" },
              { service: "wc-mampet" },
              { service: "wastafel-mampet" },
              { service: "saluran-kamar-mandi" },
              { service: "kran-mampet" },
              { service: "kuras-toren" },
              { service: "sedot-wc" }
            ]
          }
        );
        
        // City routes that will be pre-rendered
        route(
          "/:city",
          "routes/(cities).$city.tsx",
          {
            caseSensitive: true,
            // Provide all possible city values
            prerender: [
              { city: "bandung" },
              { city: "cimahi" },
              { city: "padalarang" },
              { city: "jakarta" },
              { city: "bogor" },
              { city: "bekasi" }
            ]
          }
        );
        
        // District routes that will be pre-rendered
        route(
          "/:city/:district",
          "routes/(cities).$city.$district.tsx",
          {
            caseSensitive: true,
            // Provide all possible city/district combinations
            prerender: [
              { city: "bandung", district: "bandung-barat" },
              { city: "bandung", district: "bandung-timur" },
              { city: "bandung", district: "bandung-selatan" },
              { city: "bandung", district: "bandung-utara" },
              { city: "bandung", district: "bandung-tengah" },
              { city: "cimahi", district: "cimahi-utara" },
              { city: "cimahi", district: "cimahi-tengah" },
              { city: "cimahi", district: "cimahi-selatan" },
              { city: "padalarang", district: "padalarang-kota" },
              { city: "padalarang", district: "ngamprah" },
              { city: "padalarang", district: "batujajar" },
              { city: "padalarang", district: "cisarua" }
            ]
          }
        );
      });
    },
  };