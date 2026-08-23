# Yanie Muslimah — Landing Page

V1 landing page untuk servis **Urutan Tradisional Melayu**. Direction design: warm editorial Malay wellness — photography-first, mobile-first, dan tanpa fake testimonial/rating.

## Preview

Buka `index.html` terus di browser, atau jalankan local server:

```bash
python -m http.server 8080
```

Kemudian buka `http://localhost:8080`.

## Fail utama

- `index.html` — semua content/section landing page
- `styles.css` — design system + responsive layout
- `script.js` — mobile menu, reveal interaction, current year
- `favicon.svg` — favicon sementara

## Perkara WAJIB ganti sebelum publish pelanggan

Cari placeholder berikut dalam `index.html`:

1. `60123456789` → nombor WhatsApp Yanie sebenar
2. `RM XX` → harga sebenar
3. `Lokasi akan dikemaskini` → lokasi/kawasan servis
4. `Waktu operasi akan dikemaskini` → waktu sebenar
5. Foto Unsplash → gambar Yanie, ruang rawatan, urutan, minyak/tungku/batik
6. Feedback placeholder → screenshot WhatsApp/review sebenar
7. Bahagian About → kisah, pengalaman dan kelayakan Yanie yang disahkan
8. FAQ → polisi sebenar termasuk walk-in/home service/payment

## Struktur V1

Hero → pain/need states → signature treatment → price menu → trust → gallery → feedback → booking flow → about Yanie → FAQ → WhatsApp closing CTA.

## Design principles

- Tiada fake review, fake stats atau claim kesihatan yang tidak disahkan.
- Harga dipaparkan dengan jelas.
- Typography editorial, bukan template SaaS/spa generik.
- Mobile sticky WhatsApp CTA.
- Reduced-motion accessibility disokong.
- Content sebenar dan photography Yanie akan jadi fokus utama untuk V2.
