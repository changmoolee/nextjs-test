/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  //
  async redirects() {
    return [
      {
        source: "/products/deletedPage", // redirect가 필요한 경로
        destination: "/products", // redirect할 경로
        permanent: true, // 완전히 여기로 옮겨짐을 의미(search engine에게 308 status code와 함께 해당 경로를 캐시해도 된다라고 알려주기)
      },
      {
        source: "/products/deletedPage_temp",
        destination: "/products",
        permanent: false, // 일시적으로 경로가 옮겨짐을 의미(search engine에게)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/test", // 사용자가 보고싶은 페이지 A
        destination: "/products", // 여기로 접근해도 페이지 A가 보인다.
      },
    ];
  },
};

module.exports = nextConfig;
