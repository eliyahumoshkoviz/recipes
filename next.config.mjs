/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            
            hostname: '*',
           
          },
        ],
      },
      webpack: (config) => {
        // Add bcrypt to externals if it's necessary for your setup
        config.externals = [...(config.externals || []), 'bcrypt'];
        return config;
      },
};

export default nextConfig;
