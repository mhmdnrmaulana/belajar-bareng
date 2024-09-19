/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mojjracpsjkbntdisrxb.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
