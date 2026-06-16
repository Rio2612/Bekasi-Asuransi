const reasons = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6.5V13C3 17.9 7.5 22.5 12 24 16.5 22.5 21 17.9 21 13V6.5Z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Produk Asuransi Lengkap',
    desc:
      '8 jenis produk asuransi tersedia — dari properti, kendaraan, engineering, cargo, hingga personal accident. Satu pintu untuk semua kebutuhan proteksi Anda.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Proses Klaim Cepat & Didampingi',
    desc:
      'Kami mendampingi Anda dari pengajuan hingga pencairan klaim. Tidak perlu bingung mengurus dokumen — tim kami siap membantu di setiap langkah.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Konsultasi Personal & Lokal',
    desc:
      'Berbasis di Bekasi, kami memahami kebutuhan bisnis lokal Anda. Konsultasi awal gratis tanpa syarat — hubungi langsung Rio MDS kapan saja.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="keunggulan"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0D2145' }}
    >
      {/* Subtle dot background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Gold accent top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%', top: '-20%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,136,10,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 section-wrap">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Mengapa Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Lebih dari Sekadar<br />
            Polis Asuransi
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Kami berkomitmen menjadi mitra proteksi jangka panjang yang dapat
            Anda andalkan di setiap situasi.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/10
                         bg-white/5 backdrop-blur-sm
                         hover:bg-white/10 hover:border-gold/30
                         transition-all duration-300"
            >
              {/* Gold numbering — subtle */}
              <span className="absolute top-6 right-7 text-5xl font-black
                               text-white/[0.04] select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold
                              flex items-center justify-center mb-6
                              group-hover:bg-gold/25 transition-colors duration-300">
                {r.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {r.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
