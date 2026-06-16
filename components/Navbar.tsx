'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const WA_LINK =
  'https://wa.me/6208131556592?text=Halo%20Rio%20MDS%2C%20saya%20ingin%20konsultasi%20asuransi%20di%20Bekasi'

const navLinks = [
  { href: '#beranda',    label: 'Beranda'    },
  { href: '#produk',     label: 'Produk'     },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#kontak',     label: 'Kontak'     },
]

function ShieldLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3 6.5V13C3 17.9 7.5 22.5 12 24C16.5 22.5 21 17.9 21 13V6.5L12 2Z"
        fill="white"
      />
      <path
        d="M8.5 12.5L11 15L16 9.5"
        stroke="#C8880A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textCls = scrolled ? 'text-navy' : 'text-white'

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm shadow-navy/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-wrap flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center
                          group-hover:bg-gold-dark transition-colors duration-200">
            <ShieldLogo />
          </div>
          <span className={`font-extrabold text-[17px] tracking-tight leading-none ${textCls}`}>
            Asuransi{' '}
            <span className="text-gold">Bekasi</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200
                          hover:text-gold ${textCls}`}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm py-2.5 px-5"
          >
            {/* WhatsApp icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'}
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'}
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'}
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-navy font-medium px-3 py-2.5 rounded-lg
                         hover:bg-cream hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center text-sm"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
