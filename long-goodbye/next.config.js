const path = "/long-goodbye";

const csp = {
  "script-src": [],
  "style-src": [],
  "font-src": [],
};

module.exports = {
  reactStrictMode: true,
  basePath: path,
  trailingSlash: true,
  env: {
    basePath: path,
    CI: process.env.CI,
    vercelEnv: process.env.VERCEL_ENV,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: path,
        basePath: false,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  assetPrefix: `${process.env.NODE_ENV === "production" ? "/" : ""}`,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: path,
  },
};
