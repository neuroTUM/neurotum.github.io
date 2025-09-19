import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMdx = createMDX({
    // By default, next/mdx only compiles files with the .mdx extension.
    extension: /\.(md|mdx)$/,
})

export default withMdx(nextConfig);
