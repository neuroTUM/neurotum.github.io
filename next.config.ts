import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    basePath: isProd ? "/webpage" : "",

    // FIXME: We should lint our codebase!
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
