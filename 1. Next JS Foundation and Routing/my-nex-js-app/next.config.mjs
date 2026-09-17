/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dfwshshcn/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
