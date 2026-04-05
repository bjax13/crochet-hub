import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid tracing the wrong root when parent directories contain other lockfiles.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
