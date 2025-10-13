import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    basePath: "",
    assetPrefix: "",

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
