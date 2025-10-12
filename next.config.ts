import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

export default nextConfig;
