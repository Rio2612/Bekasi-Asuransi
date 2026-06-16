const WA_LINK =
  'https://wa.me/6208131556592?text=Halo%20Rio%20MDS%2C%20saya%20ingin%20konsultasi%20asuransi%20di%20Bekasi'

export default function CTASection() {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-cream">
      <div className="section-wrap">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #0D2145 0%, #1B3A70 50%, #0D2145 100%)',
          }}
        >
          {/* Decorative dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Gold glow accent */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: '10%', bottom: '-30%',
              width: 400, height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,136,10,0.2) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-block text-gold font-semibold text-sm
                               tracking-widest uppercase mb-5">
                Mulai Sekarang
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white
                             leading-tight mb-5">
                Siap Melindungi<br />
                Bisnis Anda?
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                Hubungi Rio MDS sekarang untuk konsultasi gratis. Kami akan membantu
                Anda menemukan produk asuransi yang paling sesuai dengan kebutuhan
                dan anggaran Anda.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  {/* WA Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp
                </a>
                <a
                  href="tel:08131556592"
                  className="btn-outline-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                             19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67
                             A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0
                             00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0
                             006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0
                             002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Telepon Langsung
                </a>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm bg-white/8 backdrop-blur-sm
                              border border-white/15 rounded-2xl p-8 space-y-6">

                {/* Agent */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center
                                  justify-center flex-shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                         stroke="#F0B429" strokeWidth="1.8"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Rio MDS</p>
                    <p className="text-white/50 text-sm">Konsultan Asuransi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center
                                    justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                           stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                                 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67
                                 A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0
                                 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0
                                 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0
                                 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/45 text-xs">Telepon / WhatsApp</p>
                      <a href="tel:08131556592"
                         className="text-white font-semibold text-sm hover:text-gold-light
                                    transition-colors">
                        0813 1556 592
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center
                                    justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                           stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/45 text-xs">Wilayah Layanan</p>
                      <p className="text-white font-semibold text-sm">Bekasi & Sekitarnya</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center
                                    justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                           stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/45 text-xs">Jam Layanan</p>
                      <p className="text-white font-semibold text-sm">Senin–Sabtu, 08.00–17.00</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp quick action */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5
                             bg-[#25D366] hover:bg-[#1eba58] text-white font-semibold
                             text-sm rounded-xl transition-all duration-200
                             hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Mulai Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
