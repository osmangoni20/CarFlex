/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co.com',  // Correct hostname
            pathname: '/**',         // Allow all paths under this domain
          },
        ],
      },

};

export default nextConfig;
 // next.config.mjs
// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'ibb.co.com',  // Make sure the hostname is correct
//           port: '',            // Specify port only if it's necessary (e.g., for localhost)
//           pathname: '/cars/**',    // This allows matching all paths under '/cars'
//         },
//       ],
//     },
//   };