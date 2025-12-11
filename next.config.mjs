/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Tambahkan 2 bagian di bawah ini:
  eslint: {
    // Peringatan: Ini membolehkan build sukses meski ada error linting
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Peringatan: Ini membolehkan build sukses meski ada error TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;