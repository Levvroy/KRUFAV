/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // PENTING: Mengubah Next.js jadi file HTML statis
  images: {
    unoptimized: true,    // PENTING: Mencegah error gambar di GitHub Pages
  },
};

export default nextConfig;