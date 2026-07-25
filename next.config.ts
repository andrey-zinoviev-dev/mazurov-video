import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for shared hosting (reg.ru / ISPmanager) — deploy the `out/` folder.
  output: "export",
  // Folder URLs (`/projects/slug/`) work more reliably on Apache than `slug.html`.
  trailingSlash: true,
  images: {
    // No Next Image Optimization server on static hosting.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
