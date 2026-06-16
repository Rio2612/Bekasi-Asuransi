import Link from 'next/link'
import { JSX } from 'react'

/* ─── SVG Product Icons ─────────────────────────────────────── */

function IconProperty() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 7l9-4 9 4M4 21V7m16 14V7M9 21v-4a3 3 0 016 0v4" />
    </svg>
  )
}
function IconLiability() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 6.5V13C3 17.9 7.5 22.5 12 24 16.5 22.5 21 17.9 21 13V6.5Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="16" r="0.8" fill="currentColor" />
    </svg>
  )
}
function IconEngineering() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20v-2M12 6V4" />
    </svg>
  )
}
function IconCargo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}
function IconSurety() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="12" y2="17" />
      <circle cx="15.5" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconKendaraan() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h3.5L8 3h8l1.5 4H21a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M9 17h6" />
    </svg>
  )
}
function IconMachinery() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function IconPersonalAccident() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

/* ─── Product Data ───────────────────────────────────────────── */

interface Product {
  id:          string
  name:        string
  tagline:     string
  description: string
  href:        string
  icon:        JSX.Element
  iconBg:      string
  iconColor:   string
}

const products: Product[] = [
  {
    id:          'properti',
    name:        'Asuransi Properti',
    tagline:     'Gedung & Hunian',
    description:
      'Perlindungan menyeluruh untuk gedung, pabrik, kantor, dan hunian dari risiko kebakaran, bencana alam, dan pencurian.',
    href:        '/properti',
    icon:        <IconProperty />,
    iconBg:      '#EEF3FF',
    iconColor:   '#1B3A70',
  },
  {
    id:          'liability',
    name:        'Asuransi Liability',
    tagline:     'Tanggung Gugat',
    description:
      'Proteksi hukum dan finansial saat bisnis Anda menghadapi klaim pihak ketiga akibat kegiatan operasional.',
    href:        '/liability',
    icon:        <IconLiability />,
    iconBg:      '#FFF8E6',
    iconColor:   '#C8880A',
  },
  {
    id:          'engineering',
    name:        'Asuransi Engineering',
    tagline:     'Proyek Konstruksi',
    description:
      'Menjamin proyek konstruksi, pemasangan alat berat, hingga mesin dari risiko kerusakan selama pengerjaan.',
    href:        '/engineering',
    icon:        <IconEngineering />,
    iconBg:      '#F0FAF4',
    iconColor:   '#0D7A45',
  },
  {
    id:          'cargo',
    name:        'Asuransi Cargo',
    tagline:     'Pengiriman Barang',
    description:
      'Melindungi barang kiriman melalui jalur darat, laut, maupun udara dari risiko kerusakan dan kehilangan.',
    href:        '/cargo',
    icon:        <IconCargo />,
    iconBg:      '#FFF2EE',
    iconColor:   '#C0401A',
  },
  {
    id:          'surety-bond',
    name:        'Surety Bond',
    tagline:     'Jaminan Proyek',
    description:
      'Memberikan jaminan kepada pemilik proyek bahwa kontraktor akan memenuhi kewajiban kontraktualnya.',
    href:        '/surety-bond',
    icon:        <IconSurety />,
    iconBg:      '#F5F0FF',
    iconColor:   '#6D28D9',
  },
  {
    id:          'kendaraan',
    name:        'Asuransi Kendaraan',
    tagline:     'Mobil & Kendaraan',
    description:
      'Proteksi kendaraan pribadi maupun armada bisnis dari risiko kecelakaan, pencurian, dan kerusakan.',
    href:        '/kendaraan',
    icon:        <IconKendaraan />,
    iconBg:      '#EEF9FF',
    iconColor:   '#0369A1',
  },
  {
    id:          'machinery',
    name:        'Asuransi Mesin',
    tagline:     'Machinery Breakdown',
    description:
      'Menjamin mesin produksi dan peralatan industri dari kerusakan mendadak akibat kegagalan mekanik atau listrik.',
    href:        '/machinery',
    icon:        <IconMachinery />,
    iconBg:      '#FFF4F0',
    iconColor:   '#B45309',
  },
  {
    id:          'personal-accident',
    name:        'Personal Accident',
    tagline:     'Kecelakaan Diri',
    description:
      'Santunan finansial bagi Anda dan karyawan atas risiko kecelakaan yang mengakibatkan cedera atau kematian.',
    href:        '/personal-accident',
    icon:        <IconPersonalAccident />,
    iconBg:      '#FFF0F5',
    iconColor:   '#BE185D',
  },
]

/* ─── Component ─────────────────────────────────────────────── */

export default function Products() {
  return (
    <section id="produk" className="py-20 lg:py-28 bg-cream">
      <div className="section-wrap">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest
                           uppercase mb-4">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
            Solusi Asuransi Lengkap<br />
            untuk Setiap Kebutuhan
          </h2>
          <p className="text-slate text-base leading-relaxed">
            Kami menyediakan 8 jenis produk asuransi yang dirancang untuk melindungi
            bisnis dan aset Anda dari berbagai risiko.
          </p>
        </div>

        {/* Cards Grid 4×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="product-card group block"
            >
              {/* Icon */}
              <div
                className="card-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: product.iconBg, color: product.iconColor }}
              >
                {product.icon}
              </div>

              {/* Tagline */}
              <span className="text-[11px] font-semibold tracking-widest uppercase text-slate mb-2 block">
                {product.tagline}
              </span>

              {/* Name */}
              <h3 className="text-base font-bold text-navy mb-3 leading-snug
                             group-hover:text-gold transition-colors duration-200">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* "Pelajari" CTA */}
              <div className="mt-5 flex items-center gap-1.5 text-gold text-sm font-semibold">
                Pelajari
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5"
                     strokeLinecap="round" strokeLinejoin="round"
                     className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
