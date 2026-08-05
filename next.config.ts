import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    // Several source photos are multi-megabyte PNGs; serving them as AVIF/WebP
    // takes the full-bleed backgrounds from ~4MB down to ~100KB.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
