import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Aktifkan React strict mode untuk best practice
  reactStrictMode: true,

  // Optimasi gambar — tambah domain jika nanti pakai gambar eksternal
  images: {
    remotePatterns: [
      // Contoh jika nanti pakai CDN atau CMS:
      // { protocol: 'https', hostname: 'cdn.asuransibekasi.biz.id' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Header keamanan dasar
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff'        },
          { key: 'X-Frame-Options',           value: 'DENY'           },
          { key: 'X-XSS-Protection',          value: '1; mode=block'  },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  // Compress output
  compress: true,

  // Trailing slash konsisten untuk SEO
  trailingSlash: false,
}

export default nextConfig
