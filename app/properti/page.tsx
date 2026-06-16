import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProdukUnggulan from '@/components/ProdukUnggulan';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// ─── KONSTANTA ────────────────────────────────────────────────────────────────
const baseUrl = 'https://www.duniaasuransi.com';

// ─── METADATA (SEO) ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Dunia Asuransi — Konsultan Asuransi Kerugian Korporat Indonesia | Rio Mardiansyah',
  description:
    'Dunia Asuransi adalah portal konsultasi asuransi kerugian korporat di Indonesia. Spesialis Marine Cargo, Property All Risk, Surety Bond, Asuransi Liability, dan Engineering Insurance. Dipimpin Rio Mardiansyah.',
  keywords: [
    'konsultan asuransi Indonesia',
    'asuransi kerugian korporat',
    'asuransi kargo Indonesia',
    'surety bond',
    'property all risk',
    'asuransi liability',
    'asuransi engineering',
    'Rio Mardiansyah',
    'Dunia Asuransi',
    'marine cargo insurance',
  ],
  alternates: {
    canonical: baseUrl,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Dunia Asuransi — Konsultan Asuransi Kerugian Korporat Indonesia',
    description:
      'Spesialis Marine Cargo, Property All Risk, Surety Bond, Liability, dan Engineering Insurance. Konsultasi gratis dengan Rio Mardiansyah.',
    url: baseUrl,
    siteName: 'Dunia Asuransi',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: `${baseUrl}/hero-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dunia Asuransi — Konsultan Asuransi Kerugian Korporat Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dunia Asuransi — Konsultan Asuransi Kerugian Korporat Indonesia',
    description: 'Spesialis Marine Cargo, Property All Risk, Surety Bond, Liability, dan Engineering Insurance.',
    images: [`${baseUrl}/hero-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── SCHEMA: FAQ ──────────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Apa itu Dunia Asuransi dan apa fokus layanannya?',
    answer:
      'Dunia Asuransi adalah portal konsultasi asuransi kerugian (general insurance) korporat di Indonesia yang dipimpin oleh Rio Mardiansyah. Fokus utama mencakup: Asuransi Marine Cargo, Property All Risk, Surety Bond & Jaminan Proyek, Asuransi Liability (termasuk Environmental Liability B3), dan Asuransi Engineering (CAR, EAR, Machinery Breakdown).',
  },
  {
    question: 'Produk asuransi apa saja yang bisa dikonsultasikan?',
    answer:
      'Produk yang tersedia meliputi: Asuransi Kargo (Marine Cargo ICC A/B/C), Asuransi Kendaraan, Asuransi Kebakaran & Property All Risk, Surety Bond (Jaminan Penawaran, Pelaksanaan, Uang Muka, Pemeliharaan), Asuransi Liability (Public, Product, D&O, Environmental/B3), Asuransi Engineering (CAR, EAR, Machinery Breakdown), serta Marine Insurance (Hull & Machinery, Protection & Indemnity).',
  },
  {
    question: 'Apakah konsultasi asuransi di Dunia Asuransi berbayar?',
    answer:
      'Tidak. Seluruh konsultasi asuransi di Dunia Asuransi dilakukan secara gratis. Anda dapat berkonsultasi melalui WhatsApp di nomor 0813-1556-592 tanpa biaya apapun.',
  },
  {
    question: 'Apakah Dunia Asuransi melayani klien di luar Jakarta atau luar Jawa?',
    answer:
      'Ya. Dunia Asuransi melayani klien korporat di seluruh Indonesia. Untuk klien di Batam dan Kepulauan Riau, tersedia layanan khusus melalui portal asuransibatam.biz.id yang fokus pada kebutuhan asuransi di kawasan Free Trade Zone (FTZ) Batam.',
  },
  {
    question: 'Bagaimana cara mengajukan permohonan Surety Bond untuk tender pemerintah?',
    answer:
      'Proses pengajuan Surety Bond dimulai dengan konsultasi untuk menentukan jenis jaminan yang dibutuhkan (Penawaran, Pelaksanaan, Uang Muka, atau Pemeliharaan). Setelah dokumen perusahaan dan dokumen tender disiapkan, penerbitan Surat Jaminan umumnya memakan waktu 1–3 hari kerja. Semua penjamin yang kami rekomendasikan terdaftar dalam daftar penjamin yang diakui LKPP.',
  },
  {
    question: 'Bagaimana cara menghubungi Dunia Asuransi?',
    answer:
      'Anda dapat menghubungi Rio Mardiansyah melalui WhatsApp di nomor 0813-1556-592, atau menggunakan formulir kontak yang tersedia di halaman ini. Jam operasional: Senin–Jumat pukul 08.00–17.00 WIB.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// ─── SCHEMA: PROFESSIONAL SERVICE ─────────────────────────────────────────────
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dunia Asuransi',
  url: baseUrl,
  telephone: '+628131556592',
  description:
    'Konsultan asuransi kerugian korporat di Indonesia. Spesialis Marine Cargo, Property All Risk, Surety Bond, Asuransi Liability, dan Engineering Insurance.',
  founder: {
    '@type': 'Person',
    name: 'Rio Mardiansyah',
    jobTitle: 'Konsultan Asuransi Kerugian',
    url: baseUrl,
  },
  areaServed: [
    { '@type': 'Country', name: 'Indonesia' },
    { '@type': 'City', name: 'Batam' },
    { '@type': 'AdministrativeArea', name: 'Kepulauan Riau' },
  ],
  knowsAbout: [
    'Marine Cargo Insurance',
    'Property All Risk',
    'Surety Bond',
    'Asuransi Liability',
    'Asuransi Engineering',
    'Hull & Machinery Insurance',
    'Protection & Indemnity',
    'Environmental Liability B3',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Konsultasi Asuransi Kerugian',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Asuransi Kargo (Marine Cargo)',
          url: `${baseUrl}/asuransi-kargo`,
          description: 'Konsultasi pemilihan klausula ICC A/B/C, kalkulasi premi, dan pengurusan klaim asuransi kargo.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Surety Bond & Jaminan Proyek',
          url: `${baseUrl}/surety-bond`,
          description: 'Pengurusan Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan untuk tender pemerintah dan swasta.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Property All Risk',
          url: `${baseUrl}/property-all-risk`,
          description: 'Konsultasi asuransi properti komersial — gedung, hotel, mal, rumah sakit, dan fasilitas industri.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Asuransi Liability',
          url: `${baseUrl}/asuransi-liability`,
          description: 'Konsultasi Public Liability, Product Liability, D&O, Professional Indemnity, dan Environmental Liability B3.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Asuransi Engineering',
          url: `${baseUrl}/asuransi-engineering`,
          description: 'Konsultasi CAR, EAR, Machinery Breakdown, dan Erection All Risk untuk proyek konstruksi dan industri.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konsultasi Marine Insurance',
          url: `${baseUrl}/marine-insurance`,
          description: 'Konsultasi Hull & Machinery dan Protection & Indemnity (P&I) untuk pemilik dan operator kapal.',
        },
      },
    ],
  },
  sameAs: [
    'https://asuransibatam.biz.id',
  ],
};

// ─── SCHEMA: BREADCRUMB HOMEPAGE ─────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: baseUrl,
    },
  ],
};

// ─── SCHEMA: WEBSITE (SITELINKS SEARCHBOX) ───────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dunia Asuransi',
  url: baseUrl,
  inLanguage: 'id-ID',
  description: 'Portal konsultasi asuransi kerugian korporat Indonesia — Marine Cargo, Property, Surety Bond, Liability, Engineering.',
  publisher: {
    '@type': 'Organization',
    name: 'Dunia Asuransi',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.svg`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-813-1556-592',
      contactType: 'customer service',
      availableLanguage: 'Indonesian',
    },
  },
};

// ─── SITEMAP-BASED INTERNAL LINKS ────────────────────────────────────────────
const siloLinks = [
  {
    silo: 'Marine & Kargo',
    icon: '🚢',
    links: [
      { label: 'Asuransi Kargo', href: '/asuransi-kargo', sub: 'Marine Cargo ICC A/B/C' },
      { label: 'Kargo Batam (FTZ)', href: '/asuransi-kargo-batam', sub: 'Kawasan Perdagangan Bebas Batam' },
      { label: 'Marine Insurance', href: '/marine-insurance', sub: 'Ekosistem asuransi bahari' },
      { label: 'Hull & Machinery', href: '/hull-machinery-insurance', sub: 'Perlindungan badan kapal' },
      { label: 'Protection & Indemnity', href: '/protection-indemnity', sub: 'Tanggung jawab pemilik kapal' },
      { label: 'Freight Insurance', href: '/freight-insurance', sub: 'Jaminan biaya angkut' },
    ],
  },
  {
    silo: 'Surety Bond & Jaminan',
    icon: '🏗️',
    links: [
      { label: 'Surety Bond', href: '/surety-bond', sub: 'Panduan induk jaminan proyek' },
      { label: 'Jaminan Penawaran', href: '/jaminan-penawaran', sub: 'Bid Bond · 1–3% penawaran' },
      { label: 'Jaminan Pelaksanaan', href: '/jaminan-pelaksanaan', sub: 'Performance Bond · 5% kontrak' },
      { label: 'Jaminan Uang Muka', href: '/jaminan-uang-muka', sub: 'Advance Payment · 15–30%' },
      { label: 'Jaminan Pemeliharaan', href: '/jaminan-pemeliharaan', sub: 'Maintenance Bond · Pasca PHO' },
    ],
  },
  {
    silo: 'Properti & Bisnis',
    icon: '🏢',
    links: [
      { label: 'Property All Risk', href: '/property-all-risk', sub: 'Gedung, hotel, mal, rumah sakit' },
      { label: 'Industrial All Risk', href: '/industrial-all-risk', sub: 'Fasilitas produksi & pabrik' },
      { label: 'Business Interruption', href: '/business-interruption', sub: 'Kerugian pendapatan pasca klaim' },
      { label: 'Machinery Loss of Profit', href: '/machinery-loss-of-profit', sub: 'Kerugian akibat mesin rusak' },
      { label: 'Asuransi Kebakaran', href: '/asuransi-kebakaran', sub: 'PSAKI standar AAUI' },
    ],
  },
  {
    silo: 'Liability',
    icon: '⚖️',
    links: [
      { label: 'Asuransi Liability', href: '/asuransi-liability', sub: 'Panduan induk tanggung gugat' },
      { label: 'Public Liability', href: '/asuransi-public-liability', sub: 'Tuntutan dari publik/pengunjung' },
      { label: 'Product Liability', href: '/asuransi-product-liability', sub: 'Klaim produk cacat/berbahaya' },
      { label: 'Directors & Officers', href: '/directors-officers-liability', sub: 'Perlindungan direksi & komisaris' },
      { label: 'Environmental / B3', href: '/asuransi-liability-limbah-b3', sub: 'Pencemaran lingkungan B3' },
    ],
  },
  {
    silo: 'Engineering',
    icon: '⚙️',
    links: [
      { label: 'Asuransi Engineering', href: '/asuransi-engineering', sub: 'Panduan induk engineering' },
      { label: 'Contractors All Risk', href: '/asuransi-car-indonesia', sub: 'CAR untuk proyek konstruksi' },
      { label: 'Erection All Risk', href: '/asuransi-ear', sub: 'EAR untuk pemasangan mesin' },
      { label: 'Machinery Breakdown', href: '/asuransi-machinery-breakdown', sub: 'Kerusakan internal mesin' },
    ],
  },
  {
    silo: 'Kendaraan & Wilayah',
    icon: '🚗',
    links: [
      { label: 'Asuransi Kendaraan', href: '/asuransi-mobil', sub: 'Komprehensif & TLO' },
      { label: 'Kendaraan Batam', href: '/asuransi-mobil-batam', sub: 'Ex-Singapore, CBU, Plat Hijau' },
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <ProdukUnggulan />
        <WhyChooseUs />

        {/* ── NAVIGASI SILO (Internal Linking dari Sitemap) ── */}
        <section
          className="bg-muted/40 py-16 border-t border-border"
          aria-label="Navigasi Layanan Asuransi"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
                Direktori Layanan
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Semua Lini Asuransi Kerugian yang Kami Tangani
              </h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
                Pilih lini yang relevan dengan kebutuhan bisnis atau personal Anda untuk membaca
                panduan mendalam dari praktisi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siloLinks.map((silo) => (
                <div
                  key={silo.silo}
                  className="bg-card rounded-2xl border border-border shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <div className="flex items-center gap-2.5 mb-4 border-b border-border/60 pb-3">
                    <span className="text-2xl filter drop-shadow-sm">{silo.icon}</span>
                    <h3 className="font-bold text-sm text-foreground tracking-tight">
                      {silo.silo}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {silo.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="flex items-start gap-2.5 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 bg-primary/40 group-hover:bg-primary transition-colors" />
                          <div>
                            <p className="text-sm font-semibold text-foreground/90 group-hover:text-primary group-hover:underline transition-colors leading-snug">
                              {link.label}
                            </p>
                            <p className="text-xs text-muted-foreground/80 mt-0.5">{link.sub}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
