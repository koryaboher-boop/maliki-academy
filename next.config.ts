import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // السماح بطلبات المعاينة من نطاقات space-z.ai
  allowedDevOrigins: [
    'preview-chat-902a997c-b1ee-4c97-8dcd-5e07220cc4c9.space-z.ai',
    'v1m735k9asd1-d.space-z.ai',
    'preview-v1m735k9asd1-d.space-z.ai',
    '*.space-z.ai',
  ],
  // إعداد CORS للسماح بجميع الطلبات من نطاقات المعاينة
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS, HEAD' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization, X-Requested-With' },
          { key: 'Access-Control-Allow-Credentials', value: 'false' },
        ],
      },
    ]
  },
};

export default nextConfig;
