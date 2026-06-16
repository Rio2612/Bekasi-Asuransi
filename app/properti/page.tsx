import type { Metadata } from "next";
import Link from "next/link";

// ─── METADATA SEO ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asuransi Properti Bekasi | Proteksi Pabrik, Gudang & Rumah Terpercaya",
  description:
    "Layanan asuransi properti komprehensif di Bekasi, Cikarang, dan Cibitung. Amankan aset pabrik, gudang logistik, PAR, serta hunian Anda bersama Rio MDS.",
  alternates: {
    canonical: "https://duniaasuransi.com/properti",
  },
  openGraph: {
    title: "Asuransi Properti Bekasi | Proteksi Pabrik, Gudang & Rumah Terpercaya",
    description:
      "Layanan asuransi properti komprehensif di Bekasi, Cikarang, dan Cibitung. Amankan aset pabrik, gudang logistik, PAR, serta hunian Anda bersama Rio MDS.",
    url: "https://duniaasuransi.com/properti",
    type: "website",
  },
};

// ─── JSON-LD SCHEMA ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Properti Bekasi",
  serviceType: "Asuransi Properti",
  provider: {
    "@type": "Person",
    name: "Rio MDS",
    jobTitle: "Konsultan Asuransi",
    areaServed: {
      "@type": "Place",
      name: "Bekasi, Cikarang, Cibitung, Jawa Barat, Indonesia",
    },
  },
  description:
    "Solusi asuransi properti komprehensif untuk pabrik, gudang, rumah, PAR, dan kos di kawasan industri Bekasi dan sekitarnya.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://duniaasuransi.com" },
      { "@type": "ListItem", position: 2, name: "Asuransi Properti", item: "https://duniaasuransi.com/properti" },
    ],
  },
};

// ─── DATA PRODUK ──────────────────────────────────────────────────────────────
interface Product {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  keywords: string;
}

const products: Product[] = [
  {
    slug: "rumah",
    title: "Asuransi Rumah",
    subtitle: "Hunian & Residensial",
    description:
      "Proteksi menyeluruh untuk hunian Anda — dari perumahan klaster premium di Harapan Indah, Summarecon, hingga kawasan padat Bekasi Utara. Kebakaran, petir, banjir, hingga kerusakan akibat bencana alam tercakup dalam satu polis yang terjangkau.",
    keywords: "Asuransi Rumah Bekasi",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M6 20L24 6L42 20V42H30V30H18V42H6V20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 30H30V42H18V30Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    slug: "gudang",
    title: "Asuransi Gudang",
    subtitle: "Logistik & Penyimpanan",
    description:
      "Kawasan logistik Cibitung, Tambun, dan Marunda menyimpan miliaran rupiah aset barang. Kami menyediakan proteksi komprehensif terhadap risiko kebakaran gudang, kerusuhan, pencurian, hingga kerusakan stok akibat bencana — dirancang sesuai regulasi kawasan berikat.",
    keywords: "Asuransi Gudang Cibitung Bekasi",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M4 18L24 6L44 18V44H4V18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="10" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="30" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M4 18H44" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18V10M24 18V8M34 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "pabrik",
    title: "Asuransi Pabrik",
    subtitle: "Manufaktur & Industri",
    description:
      "Dari MM2100 Cibitung, Jababeka Cikarang, Delta Silicon, EJIP, hingga GIIC — setiap pabrik menghadapi risiko operasional yang kompleks. Polis kami dirancang untuk melindungi bangunan, mesin produksi, stok bahan baku, dan tanggung jawab hukum terhadap pihak ketiga.",
    keywords: "Asuransi Pabrik Cikarang MM2100 Jababeka",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="20" width="40" height="24" rx="1" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 20L12 10H20L28 20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 20L28 10H36L44 20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="10" y="28" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="32" y="28" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="21" y="28" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4V14M32 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="4" r="2" fill="currentColor" />
        <circle cx="32" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "par",
    title: "Property All Risks",
    subtitle: "PAR — Proteksi Industri & Komersial",
    description:
      "Property All Risks (PAR) adalah standar emas perlindungan aset komersial dan industri. Satu polis yang menutup hampir semua risiko yang tidak dikecualikan secara eksplisit — solusi ideal untuk kompleks ruko, mal, gedung perkantoran, hingga kawasan mixed-use di Greater Bekasi.",
    keywords: "Property All Risks PAR Bekasi Cikarang",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 4L44 14V26C44 36 34 43 24 46C14 43 4 36 4 26V14L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M15 24L21 30L33 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "kos",
    title: "Asuransi Kos",
    subtitle: "Properti Sewa & Indekos",
    description:
      "Ribuan pekerja industri di kawasan Bekasi membutuhkan hunian sewa. Sebagai pemilik kos atau kontrakan, lindungi aset bangunan Anda dari risiko kebakaran, kerusakan, hingga kehilangan pendapatan sewa akibat kejadian tidak terduga dengan produk yang tepat sasaran.",
    keywords: "Asuransi Kos Kontrakan Bekasi",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M8 44V20L24 8L40 20V44" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="14" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="16" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="16" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M20 44V34M28 44V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="12" r="6" fill="var(--gold)" stroke="var(--navy)" strokeWidth="1.5" />
        <path d="M36 10V14M34 12H38" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─── KOMPONEN UTAMA ───────────────────────────────────────────────────────────
export default function AsuransiPropertiPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)",
          paddingTop: "clamp(72px, 10vw, 112px)",
          paddingBottom: "clamp(64px, 9vw, 96px)",
        }}
      >
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, var(--gold) 39px, var(--gold) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--gold) 39px, var(--gold) 40px)",
          }}
        />

        {/* Glow accent kanan atas */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm font-jakarta" style={{ color: "var(--gold-light)", opacity: 0.75 }}>
              <li><Link href="/" className="hover:opacity-100 transition-opacity">Beranda</Link></li>
              <li aria-hidden="true" className="opacity-50">›</li>
              <li aria-current="page" style={{ color: "var(--gold)" }}>Asuransi Properti</li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p
            className="inline-block text-xs font-jakarta font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{ color: "var(--gold)", borderColor: "var(--gold)", background: "rgba(212,175,55,0.08)" }}
          >
            Cluster Asuransi Properti
          </p>

          <h1
            className="font-jakarta font-bold leading-tight mb-6"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              maxWidth: "720px",
            }}
          >
            Proteksi Aset Properti Anda di{" "}
            <span style={{ color: "var(--gold)" }}>
              Jantung Industri Bekasi
            </span>
          </h1>

          <p
            className="font-jakarta text-lg leading-relaxed mb-10"
            style={{ color: "var(--cream)", opacity: 0.78, maxWidth: "640px" }}
          >
            Kawasan industri Bekasi — dari MM2100, Jababeka, Delta Silicon, EJIP, GIIC hingga Marunda — adalah mesin ekonomi nasional. Setiap aset yang berdiri di sana layak dilindungi dengan polis yang setara nilainya. Rio MDS hadir sebagai konsultan asuransi properti terpercaya di Bekasi untuk memastikan Anda tidak menanggung risiko sendirian.
          </p>

          {/* CTA Hero */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20properti%20di%20Bekasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jakarta font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.03] active:scale-100"
              style={{
                background: "var(--gold)",
                color: "var(--navy-dark)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#produk"
              className="inline-flex items-center gap-2 font-jakarta font-semibold px-7 py-3.5 rounded-lg border transition-all duration-200 hover:bg-white/10"
              style={{ color: "var(--cream)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Lihat Produk
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── STRIP KAWASAN INDUSTRI ── */}
      <div style={{ background: "var(--gold)", paddingBlock: "14px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-jakarta text-sm font-semibold text-center" style={{ color: "var(--navy-dark)" }}>
            Melayani kawasan industri:&nbsp;
            <span className="font-normal opacity-90">
              MM2100 · Jababeka · Delta Silicon · EJIP · GIIC · Marunda · Cibitung · Cikarang · Tambun · Bekasi Kota
            </span>
          </p>
        </div>
      </div>

      {/* ── GRID PRODUK ── */}
      <section id="produk" style={{ background: "var(--cream)", paddingBlock: "clamp(56px, 8vw, 96px)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="font-jakarta text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              5 Produk Utama
            </p>
            <h2
              className="font-jakarta font-bold leading-tight"
              style={{ color: "var(--navy)", fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
            >
              Pilih Proteksi Sesuai Kebutuhan Anda
            </h2>
            <p
              className="font-jakarta mt-4 text-base leading-relaxed mx-auto"
              style={{ color: "var(--slate)", maxWidth: "520px" }}
            >
              Setiap produk dikurasi khusus untuk lanskap risiko industri dan residensial di Bekasi serta kota-kota satelitnya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/properti/${p.slug}`}
                className="product-card group block rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 transition-colors duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))",
                    color: "var(--gold)",
                    border: "1.5px solid rgba(212,175,55,0.25)",
                  }}
                >
                  {p.icon}
                </div>

                {/* Subtitle */}
                <p
                  className="font-jakarta text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {p.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="font-jakarta font-bold text-xl mb-3 group-hover:text-[var(--gold)] transition-colors duration-200"
                  style={{ color: "var(--navy)" }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  className="font-jakarta text-sm leading-relaxed mb-5"
                  style={{ color: "var(--slate)" }}
                >
                  {p.description}
                </p>

                {/* CTA inline */}
                <span
                  className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  style={{ color: "var(--navy)" }}
                >
                  Pelajari lebih lanjut
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFIL AHLI (E-E-A-T) ── */}
      <section style={{ background: "#fff", paddingBlock: "clamp(56px, 8vw, 96px)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Teks */}
            <div>
              <p
                className="font-jakarta text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Konsultan Asuransi Properti Bekasi
              </p>
              <h2
                className="font-jakarta font-bold leading-tight mb-5"
                style={{ color: "var(--navy)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Dampingan Langsung dari Rio MDS
              </h2>
              <p className="font-jakarta text-base leading-relaxed mb-5" style={{ color: "var(--slate)" }}>
                Saya Rio MDS — konsultan asuransi properti yang berbasis di Bekasi dan telah mendampingi ratusan klien mulai dari pemilik pabrik di kawasan MM2100, pengelola gudang di Cibitung, hingga pemilik indekos di Tambun. Saya bukan broker yang sekadar menerbitkan polis; saya hadir dalam setiap tahap: analisis risiko, negosiasi terms, hingga pendampingan klaim jika terjadi musibah.
              </p>
              <p className="font-jakarta text-base leading-relaxed mb-8" style={{ color: "var(--slate)" }}>
                Setiap rekomendasi yang saya berikan dilandasi pemahaman mendalam atas karakteristik risiko di lanskap industri Bekasi — mulai dari potensi banjir di area Tambun, risiko kebakaran di kawasan padat industri Cikarang, hingga sensitivitas supply chain di kawasan berikat Cibitung.
              </p>

              {/* Kontak */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-jakarta font-semibold text-sm transition-all"
                  style={{ color: "var(--navy)" }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "#25D366", color: "#fff" }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  +62 812-3456-7890 (WhatsApp)
                </a>
                <a
                  href="mailto:rio@duniaasuransi.com"
                  className="inline-flex items-center gap-3 font-jakarta font-semibold text-sm transition-all"
                  style={{ color: "var(--navy)" }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--navy)", color: "var(--gold)" }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  rio@duniaasuransi.com
                </a>
              </div>
            </div>

            {/* Visual kartu profil */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, var(--navy-dark), var(--navy))", color: "var(--cream)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 font-jakarta font-bold text-2xl"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                R
              </div>
              <p className="font-jakarta text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.85 }}>
                Konsultan Asuransi Resmi
              </p>
              <h3 className="font-jakarta font-bold text-2xl mb-1">Rio MDS</h3>
              <p className="font-jakarta text-sm mb-6" style={{ opacity: 0.65 }}>
                Agen Terdaftar & Terawasi OJK · Bekasi, Jawa Barat
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Klien Industri", value: "200+" },
                  { label: "Kawasan Dilayani", value: "10+" },
                  { label: "Jenis Produk", value: "15+" },
                  { label: "Pengalaman", value: "8+ Thn" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="font-jakarta font-bold text-xl" style={{ color: "var(--gold)" }}>{s.value}</p>
                    <p className="font-jakarta text-xs mt-0.5" style={{ opacity: 0.6 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDAR KEPATUHAN & OJK ── */}
      <section style={{ background: "var(--cream)", paddingBlock: "clamp(56px, 8vw, 96px)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="font-jakarta text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Keamanan & Kepatuhan Hukum
            </p>
            <h2
              className="font-jakarta font-bold leading-tight"
              style={{ color: "var(--navy)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              Produk Resmi Terawasi OJK
            </h2>
            <p
              className="font-jakarta mt-4 text-base leading-relaxed mx-auto"
              style={{ color: "var(--slate)", maxWidth: "540px" }}
            >
              Seluruh produk asuransi yang kami rekomendasikan diterbitkan oleh perusahaan asuransi mitra yang telah mendapatkan izin usaha dan berada di bawah pengawasan Otoritas Jasa Keuangan (OJK) Republik Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Terdaftar & Diawasi OJK",
                desc: "Semua mitra asuransi kami memiliki izin operasional resmi dari OJK dan wajib mematuhi regulasi POJK yang berlaku.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Polis Transparan",
                desc: "Setiap polis disertai penjelasan menyeluruh tentang manfaat, pengecualian, dan prosedur klaim. Tidak ada klausul tersembunyi.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Pendampingan Klaim",
                desc: "Rio MDS hadir langsung mendampingi klien dalam proses pelaporan dan negosiasi klaim agar hak Anda terlindungi sepenuhnya.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Kerahasiaan Data",
                desc: "Data dan informasi klien dijaga dengan standar keamanan tertinggi dan tidak diperjualbelikan kepada pihak manapun.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(12,35,64,0.06)", color: "var(--navy)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-jakarta font-bold text-base mb-2" style={{ color: "var(--navy)" }}>
                  {item.title}
                </h3>
                <p className="font-jakarta text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ / INSIGHT ── */}
      <section style={{ background: "#fff", paddingBlock: "clamp(56px, 8vw, 96px)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <p
                className="font-jakarta text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Insight Properti
              </p>
              <h2
                className="font-jakarta font-bold leading-tight"
                style={{ color: "var(--navy)", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                Mengapa Asuransi Properti Krusial di Bekasi?
              </h2>
              <p className="font-jakarta text-sm leading-relaxed mt-4" style={{ color: "var(--slate)" }}>
                Bekasi adalah rumah bagi lebih dari 5.000 pabrik aktif dan puluhan kawasan industri yang menjadi tulang punggung ekspor nasional. Risiko di sini bukan sekadar kebakaran biasa — melainkan gangguan rantai pasok, kerugian mesin produksi bernilai miliaran, dan potensi tuntutan pihak ketiga.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  q: "Apa bedanya PAR dengan asuransi kebakaran biasa?",
                  a: "Asuransi kebakaran hanya menanggung kerugian akibat api dan beberapa risiko tambahan yang dipilih secara eksplisit. PAR (Property All Risks) menjamin semua kerugian fisik kecuali yang dikecualikan — memberikan cakupan jauh lebih luas.",
                },
                {
                  q: "Apakah gudang di kawasan berikat bisa diasuransikan?",
                  a: "Ya. Gudang di kawasan berikat seperti Cibitung dan Marunda dapat diasuransikan. Kami memiliki pengalaman mengelola polis untuk fasilitas bonded zone dengan mempertimbangkan regulasi DJBC.",
                },
                {
                  q: "Berapa lama proses penerbitan polis?",
                  a: "Untuk properti residensial, polis umumnya terbit dalam 1–2 hari kerja setelah data lengkap. Untuk properti industri atau komersial besar, proses survei dan underwriting membutuhkan 3–7 hari kerja.",
                },
                {
                  q: "Apakah bisa klaim jika terjadi banjir?",
                  a: "Tergantung produk dan addendum yang dipilih. Risiko banjir bukan jaminan standar di semua polis, namun dapat ditambahkan sebagai perluasan. Kami akan membantu Anda memilih perluasan yang sesuai profil risiko lokasi.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl p-5"
                  style={{ background: "var(--cream)", border: "1.5px solid var(--border)" }}
                >
                  <p className="font-jakarta font-semibold text-sm mb-2" style={{ color: "var(--navy)" }}>
                    {item.q}
                  </p>
                  <p className="font-jakarta text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA AKHIR ── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
          paddingBlock: "clamp(56px, 8vw, 96px)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="font-jakarta text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Mulai Proteksi Sekarang
          </p>
          <h2
            className="font-jakarta font-bold leading-tight mb-5"
            style={{ color: "var(--cream)", fontSize: "clamp(1.7rem, 4vw, 2.75rem)" }}
          >
            Aset Anda Terlalu Berharga untuk Dibiarkan Tanpa Proteksi
          </h2>
          <p
            className="font-jakarta text-base leading-relaxed mb-10 mx-auto"
            style={{ color: "var(--cream)", opacity: 0.72, maxWidth: "480px" }}
          >
            Hubungi Rio MDS hari ini untuk konsultasi kebutuhan asuransi properti Anda — gratis, tanpa komitmen, langsung dijawab oleh konsultan berpengalaman.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20properti%20di%20Bekasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-jakarta font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-100"
              style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-jakarta font-semibold px-8 py-4 rounded-xl border transition-all duration-200 hover:bg-white/10"
              style={{ color: "var(--cream)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Kirim Formulir Kontak
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
