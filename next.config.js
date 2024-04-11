/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/notion-resume",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59 max-age=0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
