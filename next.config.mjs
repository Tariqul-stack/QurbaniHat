/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
    ],
  },
  transpilePackages: ['@lottiefiles/dotlottie-react'],
  serverExternalPackages: ['mongodb'],
}

export default nextConfig;
