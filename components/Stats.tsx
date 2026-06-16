const stats = [
  {
    value: '8+',
    label: 'Produk Asuransi',
    sub: 'Pilihan proteksi lengkap',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6.5V13C3 17.9 7.5 22.5 12 24 16.5 22.5 21 17.9 21 13V6.5Z" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Klaim Didampingi',
    sub: 'Dari pengajuan hingga cair',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    value: 'Bekasi',
    label: 'Pusat Layanan',
    sub: 'Berbasis & berpengalaman lokal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    value: 'Gratis',
    label: 'Konsultasi Awal',
    sub: 'Tanpa biaya, tanpa kewajiban',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="bg-white border-y border-border">
      <div className="section-wrap py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream
                              border border-border flex items-center justify-center
                              text-gold">
                {s.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-2xl font-extrabold text-navy leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-navy/80">{s.label}</p>
                <p className="text-xs text-slate mt-0.5 leading-snug">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
