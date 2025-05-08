/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "cloudflare-pages",
    server: "./server.js",
    ignoredRouteFiles: ["**/.*"],
    // Sesuaikan dengan struktur proyek Anda
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    serverBuildPath: "functions/[[path]].js",
    publicPath: "/build/",
    future: {
      v2_errorBoundary: true,
      v2_meta: true,
      v2_normalizeFormMethod: true,
      v2_routeConvention: true,
    },
  };