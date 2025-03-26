import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;