const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "export",
    basePath: "/joshtenorio.github.io",
    images: {
        unoptimized: true,
    },
}

module.exports = withContentlayer(nextConfig)
