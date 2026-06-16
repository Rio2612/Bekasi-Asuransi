const WA_LINK =
  'https://wa.me/6208131556592?text=Halo%20Rio%20MDS%2C%20saya%20ingin%20konsultasi%20asuransi%20di%20Bekasi'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* Geometric shield SVG — pure SVG, no image needed */
function ShieldGraphic() {
  return (
    <svg
      viewBox="0 0 360 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 0 60px rgba(200,136,10,0.18))' }}
    >
      {/* Outer shield */}
      <path
        d="M180 18L336 72L336 198C336 286 266 356 180 378C94 356 24 286 24 198L24 72Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(200,136,10,0.28)"
        strokeWidth="1.5"
      />
      {/* Middle shield */}
      <path
        d="M180 52L296 100L296 196C296 268 238 326 180 344C122 326 64 268 64 196L64 100Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(200,136,10,0.18)"
        strokeWidth="1"
      />
      {/* Inner filled shield */}
      <path
        d="M180 92L254 124L254 194C254 245 218 282 180 296C142 282 106 245 106 194L106 124Z"
        fill="rgba(27,58,112,0.55)"
        stroke="rgba(200,136,10,0.45)"
        strokeWidth="1.5"
      />
      {/* Checkmark */}
      <path
        d="M144 192L166 214L218 158"
        stroke="#F0B429"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Corner dots */}
      <circle cx="180" cy="374" r="4"  fill="rgba(200,136,10,0.5)" />
      <circle cx="24"  cy="72"  r="4"  fill="rgba(200,136,10,0.4)" />
      <circle cx="336" cy="72"  r="4"  fill="rgba(200,136,10,0.4)" />
      <circle cx="24"  cy="198" r="3"  fill="rgba(200,136,10,0.25)" />
      <circle cx="336" cy="198" r="3"  fill="rgba(200,136,10,0.25)" />
      {/* Subtle glow ring */}
      <circle cx="180" cy="194" r="110" stroke="rgba(200,136,10,0.07)" strokeWidth="40" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0D2145' }}
    >
      {/* ── Dot-grid background (pure CSS, zero images) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* ── Ambient color blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '5%', top: '-10%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,136,10,0.14) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-5%', bottom: '0%',
          width: 360, height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,58,112,0.6) 0%, transparent 70%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 section-wrap py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* Left: Text */}
          <div>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full
                            border border-white/20 bg-white/8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/75 text-sm font-medium">
                Konsultasi Gratis — Hubungi Sekarang
              </span>
            </div>

            <h1 className="text-[42px] sm:text-5xl lg:text-[56px] font-extrabold
                           text-white leading-[1.08] tracking-tight mb-6">
              Proteksi Bisnis &<br />
              Aset Anda di{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FFD166 0%, #F0B429 40%, #C8880A 100%)',
                }}
              >
                Bekasi
              </span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-[500px]">
              Kami hadir sebagai mitra terpercaya Anda dalam memilih solusi
              asuransi yang tepat — dari properti, kendaraan, engineering,
              hingga cargo dan surety bond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <WhatsAppIcon />
                Konsultasi via WhatsApp
              </a>
              <a href="#produk" className="btn-outline-white">
                Lihat Produk
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Contact card */}
            <div className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl
                            border border-white/15 bg-white/6 backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="#F0B429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                           19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67
                           A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0
                           00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0
                           006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0
                           002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Hubungi langsung</p>
                <p className="text-white font-semibold text-sm">
                  Rio MDS · <span className="text-gold-light">0813 1556 592</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Shield graphic */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[340px] h-[380px]">
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-gold/10
                              animate-ping" style={{ animationDuration: '3s' }} />
              <ShieldGraphic />

              {/* Floating info chips */}
              <div className="absolute -right-6 top-16 bg-white/10 backdrop-blur-md
                              border border-white/20 rounded-2xl px-4 py-3
                              shadow-xl shadow-navy-dark/40">
                <p className="text-white text-xs font-semibold">8 Produk</p>
                <p className="text-gold-light text-[11px] mt-0.5">Asuransi Lengkap</p>
              </div>
              <div className="absolute -left-6 bottom-24 bg-white/10 backdrop-blur-md
                              border border-white/20 rounded-2xl px-4 py-3
                              shadow-xl shadow-navy-dark/40">
                <p className="text-white text-xs font-semibold">Klaim Mudah</p>
                <p className="text-gold-light text-[11px] mt-0.5">Didampingi Penuh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom wave into cream ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
             xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 72C480 24 960 48 1440 0L1440 72Z" fill="#F5F8FC" />
        </svg>
      </div>
    </section>
  )
}
