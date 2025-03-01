const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "export",
    basePath: "",
    images: {
        unoptimized: true,
    },
}

module.exports = withContentlayer(nextConfig)