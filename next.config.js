/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Exemplo: redirecionar URLs antigas para as novas quando o site evoluir
      // { source: "/blog/:slug", destination: "/artigos/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
