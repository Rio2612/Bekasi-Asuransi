# Asuransi Bekasi

Website resmi layanan asuransi di Bekasi — [asuransibekasi.biz.id](https://asuransibekasi.biz.id)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Plus Jakarta Sans (via next/font/google)

## Struktur Folder

```
asuransi-bekasi/
├── app/
│   ├── layout.tsx          # Root layout + font + SEO metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # CSS variables + Tailwind base
├── components/
│   ├── Navbar.tsx          # Navbar sticky + mobile menu
│   ├── Hero.tsx            # Hero section (dark navy + shield SVG)
│   ├── Stats.tsx           # 4 trust indicators
│   ├── Products.tsx        # 8 kartu produk asuransi
│   ├── WhyUs.tsx           # 3 keunggulan layanan
│   ├── CTASection.tsx      # Kontak + WhatsApp CTA
│   └── Footer.tsx          # Footer lengkap
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Produk yang Tersedia

1. Asuransi Properti
2. Asuransi Liability
3. Asuransi Engineering
4. Asuransi Cargo
5. Surety Bond
6. Asuransi Kendaraan
7. Asuransi Mesin (Machinery)
8. Personal Accident

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build production
npm run build

# Start production
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Kontak

**Rio MDS** — Konsultan Asuransi Bekasi  
WhatsApp / Telepon: [0813 1556 592](https://wa.me/6208131556592)
