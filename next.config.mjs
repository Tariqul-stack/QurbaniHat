/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@lottiefiles/dotlottie-react'],
  experimental: {
    serverExternalPackages: ['mongodb'],
  },
};

export default nextConfig;
