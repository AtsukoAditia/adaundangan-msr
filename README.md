# AdaUndangan MSR

Repository ini disiapkan untuk proyek **AdaUndangan**, yaitu platform website undangan pernikahan digital tanpa CMS.

## Status audit awal

Repository awalnya kosong. Commit fondasi menambahkan:

- Aturan CLINE.
- Dokumentasi operasional.
- Checklist fitur.
- Workflow CI.
- Workflow release demo.
- Workflow deploy Vercel manual.

## Target aplikasi

- Landing page bisnis AdaUndangan.
- Website undangan dinamis berdasarkan slug.
- Data pasangan dari file konfigurasi.
- RSVP dan buku tamu ke Google Spreadsheet.
- Google Maps, Google Calendar, dan ICS.
- Musik setelah tombol buka undangan ditekan.
- Deploy production ke Vercel.
- Paket demo/source via GitHub Releases.

## Quick start untuk development

```bash
git clone https://github.com/AtsukoAditia/adaundangan-msr.git
cd adaundangan-msr
```

Buka di Visual Studio Code, lalu jalankan CLINE dengan membaca:

```text
CLINE_MASTER_PROMPT.md
```

Setelah aplikasi Next.js dibuat, jalankan:

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
```

## Production deployment

Production disarankan memakai **Vercel** karena fitur RSVP, guestbook, dan ICS membutuhkan serverless/API route.

## Demo via GitHub Releases

GitHub Releases dapat dipakai untuk membagikan paket ZIP source/build. Namun GitHub Releases bukan hosting live website. Untuk demo live yang bisa diklik pelanggan, gunakan Vercel Preview/Production.
