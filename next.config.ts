import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    basePath: "",
    assetPrefix: "",

    images: {
        unoptimized: true,
    },
};

export default nextConfig;
