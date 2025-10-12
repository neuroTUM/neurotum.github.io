import type { NextConfig } from "next";

const basePath = "/webpage"
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    basePath: isProd ? basePath : "",
    assetPrefix: isProd ? basePath : "",

    // FIXME: We should lint our codebase!
    eslint: {
        ignoreDuringBuilds: true,
    },

    images: {
        loader: "custom",
        loaderFile: "./image-loader.ts"
    },
};

export default nextConfig;
