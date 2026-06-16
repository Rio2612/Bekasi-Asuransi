import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Asuransi Bekasi | Solusi Proteksi Bisnis & Pribadi Terpercaya',
  description:
    'Layanan asuransi terpercaya di Bekasi — properti, kendaraan, engineering, cargo, surety bond, liability, mesin, dan kecelakaan diri. Konsultasi gratis dengan Rio MDS: 08131556592.',
  keywords: [
    'asuransi bekasi',
    'broker asuransi bekasi',
    'asuransi properti bekasi',
    'asuransi kendaraan bekasi',
    'asuransi engineering bekasi',
    'asuransi cargo bekasi',
    'surety bond bekasi',
    'asuransi liability bekasi',
  ],
  authors: [{ name: 'Rio MDS' }],
  metadataBase: new URL('https://asuransibekasi.biz.id'),
  openGraph: {
    title: 'Asuransi Bekasi | Solusi Proteksi Bisnis & Pribadi Terpercaya',
    description:
      'Proteksi aset dan bisnis Anda di Bekasi bersama mitra asuransi terpercaya. 8 produk lengkap, klaim didampingi, konsultasi gratis.',
    url: 'https://asuransibekasi.biz.id',
    siteName: 'Asuransi Bekasi',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://asuransibekasi.biz.id',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} font-jakarta`}>{children}</body>
    </html>
  )
}
