# AdaUndangan

Platform website undangan pernikahan digital tanpa CMS. Satu deployment mendukung banyak pasangan melalui slug.

🔗 **Live Demo**: [adaundangan.id](https://adaundangan.id)

## Fitur

- **Landing page** — Hero, fitur, paket harga, testimoni, FAQ, kontak WhatsApp.
- **Undangan dinamis** — Route `/[slug]` dengan konfigurasi TypeScript per pasangan.
- **Personalisasi tamu** — Query `?to=Nama%20Tamu` menampilkan nama tamu di cover.
- **Cover pembuka** — Fullscreen dengan tombol "Buka Undangan" yang membuka scroll.
- **Musik** — Diputar setelah interaksi pengguna, kontrol play/pause.
- **Profil mempelai** — Nama lengkap, orang tua, dan foto.
- **Multiple events** — Akad, resepsi, dan acara tambahan.
- **Countdown** — Sebelum, selama, dan sesudah acara.
- **Kisah cinta** — Timeline cerita pasangan.
- **Galeri** — Foto dengan lightbox, keyboard navigation, dan lazy loading.
- **Google Maps** — Embed dan tombol buka di Maps.
- **Google Calendar** — Tombol tambah ke Google Calendar.
- **ICS file** — Download file `.ics` untuk Apple Calendar dan Outlook.
- **Amplop digital** — Transfer bank dengan tombol salin rekening.
- **RSVP** — Form konfirmasi kehadiran dengan validasi client dan server.
- **Buku tamu** — Pesan dari tamu dengan moderasi.
- **Google Sheets** — Penyimpanan RSVP via Google Sheets API.
- **Demo mode** — Berjalan tanpa Google credential.
- **SEO** — Metadata dinamis, Open Graph, sitemap, robots.txt.
- **Aksesibel** — Semantic HTML, keyboard navigation, reduced motion.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Google Sheets API
- Sonner (toast)
- Vitest

## Struktur

```text
app/
├── [slug]/              # Dynamic invitation route
├── api/calendar/[slug]/ # ICS download endpoint
├── api/guestbook/       # Guestbook API
├── api/rsvp/            # RSVP submission API
├── privacy/             # Privacy policy page
├── layout.tsx           # Root layout
├── page.tsx             # Landing page
├── globals.css          # Global styles
├── robots.ts            # Robots.txt
└── sitemap.ts           # Sitemap

src/
├── components/
│   ├── invitation/      # Invitation section components
│   ├── landing/         # Landing page components
│   └── ui/              # Reusable UI components
├── config/              # Landing page configuration
├── data/
│   └── invitations/     # Invitation data per couple
├── lib/                 # Utilities, validation, calendar, ICS
├── themes/              # Theme configuration
└── types/               # TypeScript type definitions
```

## Instalasi

```bash
git clone git@github.com:AtsukoAditia/adaundangan-msr.git
cd adaundangan-msr
npm install
```

## Environment Variable

Salin `.env.example` menjadi `.env.local`:

```bash
cp .env.example .env.local
```

| Variable                       | Keterangan                          |
| ------------------------------ | ----------------------------------- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Email service account Google        |
| `GOOGLE_PRIVATE_KEY`           | Private key service account         |
| `GOOGLE_SHEET_ID`              | ID Google Spreadsheet               |
| `GOOGLE_SHEET_NAME`            | Nama sheet (default: `RSVP`)        |
| `DEMO_MODE`                    | `true` untuk mode demo tanpa Google |
| `NEXT_PUBLIC_SITE_URL`         | URL situs (untuk SEO)               |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Nomor WhatsApp (format: 628xxx)     |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Pesan otomatis WhatsApp             |

## Menjalankan

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## Demo Mode

Saat `DEMO_MODE=true` (default):

- RSVP disimulasikan berhasil (tidak perlu Google credential).
- Buku tamu menggunakan data lokal.
- Banner "Mode Demo" ditampilkan di form RSVP.
- Data tidak tersimpan secara permanen.

## Google Sheets & Service Account

1. Buat Google Spreadsheet baru.
2. Header kolom: `ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved`.
3. Buat Service Account di Google Cloud Console.
4. Aktifkan Google Sheets API.
5. Download JSON key, salin `client_email` dan `private_key` ke `.env.local`.
6. Share spreadsheet ke email service account dengan role Editor.

Lihat `docs/04-GOOGLE_SHEETS_SETUP.md` untuk panduan lengkap.

## Menambah Undangan Baru

1. Buat file `src/data/invitations/nama-pasangan.ts`.
2. Salin struktur dari `src/data/invitations/demo-dan-demo.ts`.
3. Isi data pasangan, acara, galeri, dan konfigurasi.
4. Tambahkan import ke `src/data/invitations/index.ts`.
5. Undangan langsung tersedia di `/<slug>`.

Lihat `docs/08-ADDING_INVITATION.md` untuk detail.

## Mengganti Foto

Taruh foto di `public/images/invitations/<slug>/` dan referensikan di konfigurasi undangan.

## Mengganti Musik

Taruh file audio di `public/audio/` dan set `audio.src` di konfigurasi undangan. Format yang didukung: MP3, WAV.

## Mengganti Maps

Set `mapsUrl` pada setiap event di konfigurasi undangan dengan URL Google Maps.

## Mengganti Nomor WhatsApp

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` dan `NEXT_PUBLIC_WHATSAPP_MESSAGE` di `.env.local`.

## Kalender

- **Google Calendar**: Tombol otomatis membuat URL Google Calendar dari data acara.
- **ICS Download**: Route `/api/calendar/[slug]` menghasilkan file `.ics` untuk Apple Calendar dan Outlook.

## Testing

```bash
# Unit tests
npm run test

# Type checking
npm run typecheck

# Lint
npm run lint
```

## Vercel Deployment

1. Push repository ke GitHub.
2. Import project di Vercel.
3. Set environment variables di Vercel dashboard.
4. Deploy.

Lihat `docs/07-VERCEL_DEPLOYMENT.md` untuk panduan lengkap.

## Moderasi `Approved`

RSVP yang masuk memiliki kolom `Approved` bernilai `FALSE` secara default. Hanya data dengan `Approved=TRUE` yang tampil di buku tamu. Moderasi dilakukan langsung di Google Spreadsheet.

## Troubleshooting

### Build error "GOOGLE_PRIVATE_KEY not set"

Pastikan `DEMO_MODE=true` jika tidak menggunakan Google Sheets.

### RSVP tidak masuk ke Spreadsheet

Pastikan spreadsheet di-share ke email service account.

### Musik tidak berputar

Browser modern memblokir autoplay. Musik hanya berputar setelah klik "Buka Undangan".

### Halaman 404

Pastikan slug undangan sesuai dengan nama file di `src/data/invitations/` dan `published: true`.

## Keamanan Credential

- Jangan commit `.env.local` atau file credential ke repository.
- Service account JSON hanya digunakan di server.
- `NEXT_PUBLIC_*` variable tidak boleh berisi secret.
- Semua input pengguna di-validate dan di-sanitize.

## License

Proprietary — © 2026 AdaUndangan. All rights reserved.
