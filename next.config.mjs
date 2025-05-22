/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '', // not needed
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },


        ],

    },
    output: 'export',


};

export default nextConfig;
