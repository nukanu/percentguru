import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve URLs with a trailing slash so the served URL matches every canonical
  // tag and sitemap entry (all of which use trailing slashes). Without this,
  // Next 308-redirects "/path/" -> "/path", making us advertise redirecting URLs.
  trailingSlash: true,
  async redirects() {
    return [
      // Collapse the www duplicate into the canonical non-www host with a 301.
      // Google was indexing both www and non-www copies of every page (~3000
      // duplicate URLs), wasting crawl budget that should go to recrawling the
      // removed filler pages. One permanent redirect fixes the duplication.
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "host",
            value: "www.percentguru.com",
          },
        ],
        destination: "https://percentguru.com/:path*",
        permanent: true,
      },
    ];
  },
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
