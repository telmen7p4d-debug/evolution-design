import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xaku.next.erxes.io",
        pathname: "/read-file",
      },
      {
        protocol: "https",
        hostname: "xaku.next.erxes.io",
        pathname: "/gateway/read-file",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.images.unsplash.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default withNextIntl(nextConfig);
