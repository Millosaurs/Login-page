/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'linda-hoang.com',
              port: '',
              pathname: '/wp-content/uploads/2014/10/img-placeholder-dark.jpg',
            },
          ],
        },
      
};

export default nextConfig;
