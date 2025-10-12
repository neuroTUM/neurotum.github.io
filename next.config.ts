import type { NextConfig } from "next";

const basePath = "/webpage"

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    basePath: "/webpage",
    assetPrefix: "/webpage",

    // FIXME: We should lint our codebase!
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
