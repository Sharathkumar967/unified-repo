import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  transpilePackages: [
    "@repo/api",
    "@repo/core",
    "@repo/hooks",
    "@repo/redux",
    "@repo/services",
    "@repo/types",
  ],
};

export default nextConfig;
