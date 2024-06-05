/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kruzee.com',
      
          },
        ],
      },
};


export default nextConfig;
