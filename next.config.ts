import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tentang-gereja",
        destination: "/tentang",
        permanent: true,
      },
      {
        source: "/tentang-gereja/:path*",
        destination: "/tentang/:path*",
        permanent: true,
      },
      {
        source: "/organisasi",
        destination: "/pelayanan",
        permanent: true,
      },
      {
        source: "/organisasi/:path*",
        destination: "/pelayanan/:path*",
        permanent: true,
      },
      {
        source: "/jadwal-pelayanan",
        destination: "/pelayanan/jadwal-pelayanan",
        permanent: true,
      },
      {
        source: "/jadwal-pelayanan/ibadah-minggu",
        destination: "/pelayanan/jadwal-pelayanan#ibadah-minggu",
        permanent: true,
      },
      {
        source: "/jadwal-pelayanan/partangiangan",
        destination: "/pelayanan/jadwal-pelayanan#partangiangan",
        permanent: true,
      },
      {
        source: "/jadwal-pelayanan/pelayanan-khusus",
        destination: "/pelayanan/jadwal-pelayanan#pelayanan-khusus",
        permanent: true,
      },
      {
        source: "/warta-jemaat",
        destination: "/warta",
        permanent: true,
      },
      {
        source: "/warta-jemaat/:path*",
        destination: "/warta/:path*",
        permanent: true,
      },
      {
        source: "/berita-publikasi",
        destination: "/publikasi",
        permanent: true,
      },
      {
        source: "/berita-publikasi/:path*",
        destination: "/publikasi/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
        pathname: "/uploads/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
