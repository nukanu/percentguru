import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve URLs with a trailing slash so the served URL matches every canonical
  // tag and sitemap entry (all of which use trailing slashes). Without this,
  // Next 308-redirects "/path/" -> "/path", making us advertise redirecting URLs.
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "header",
            key: "host",
            value: "percentguru.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
