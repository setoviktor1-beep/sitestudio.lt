import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone so the Docker image stays small.
  output: "standalone",
  // These packages use native/node-only APIs and must not be bundled.
  serverExternalPackages: ["pg", "nodemailer", "@aws-sdk/client-s3"],
};

export default nextConfig;
