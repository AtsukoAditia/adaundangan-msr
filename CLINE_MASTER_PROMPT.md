# MASTER PROMPT CLINE — ADAUNDANGAN

Anda bertindak sebagai **Senior Full-Stack Engineer, Software Architect, UI/UX Designer, QA Engineer, Security Engineer, dan DevOps Engineer**. Bangun aplikasi langsung di workspace Visual Studio Code yang terbuka.

## Identitas wajib

- Brand: **AdaUndangan**
- Package: `adaundangan`
- Contoh domain: `https://adaundangan.id`

Jangan menggunakan nama brand lain pada kode, metadata, data demo, atau dokumentasi.

## Cara memulai

1. Baca `.clinerules`.
2. Baca `PROJECT_CONTEXT.md` dan semua file `docs/`.
3. Periksa workspace dan perbarui `TASKS.md`.
4. Jika belum ada Next.js, inisialisasi di **root workspace**, bukan subfolder baru.
5. Gunakan npm.
6. Jangan menghapus starter pack.
7. Catat keputusan penting di `PROJECT_CONTEXT.md`.

Jangan berhenti setelah struktur folder atau mockup. Buat source code, instal dependency, jalankan aplikasi, perbaiki error, buat test, dokumentasi, dan pastikan production build berhasil.

---

# 1. Produk yang dibangun

AdaUndangan adalah platform website undangan pernikahan digital tanpa CMS. Satu deployment mendukung banyak pasangan melalui slug.

Route utama:

```text
/
/demo-dan-demo
/demo-dan-demo?to=Bapak%20Andi%20dan%20Keluarga
```

Fitur wajib:

1. Landing page bisnis.
2. Dynamic invitation route.
3. Konfigurasi TypeScript per pasangan.
4. Nama tamu personal dari `?to=`.
5. Cover pembuka.
6. Musik setelah klik “Buka Undangan”.
7. Profil mempelai.
8. Detail akad, resepsi, dan acara tambahan.
9. Countdown.
10. Kisah cinta.
11. Galeri dan lightbox.
12. Google Maps.
13. Google Calendar.
14. File `.ics` untuk Apple Calendar dan Outlook.
15. Amplop digital opsional.
16. RSVP.
17. Buku tamu.
18. Google Spreadsheet sebagai penyimpanan.
19. Moderasi melalui kolom `Approved`.
20. Demo mode tanpa credential.
21. Vercel deployment.
22. Dokumentasi Bahasa Indonesia.

---

# 2. Stack

Gunakan versi stabil yang saling kompatibel:

- Next.js App Router.
- React.
- TypeScript strict.
- Tailwind CSS.
- Motion atau Framer Motion.
- Lucide React.
- React Hook Form.
- Zod.
- Google APIs.
- Sonner.
- date-fns bila diperlukan.
- Vitest dan React Testing Library.
- Playwright bila stabil.

Jangan gunakan CMS, WordPress, Firebase, Supabase, database SQL, MongoDB, jQuery, atau static export.

---

# 3. Visual identity

Gunakan maksimal tiga warna utama:

```text
Burgundy #7B1D2A
Gold     #D4AF37
Ivory    #FFFDF7
```

Tampilan harus romantis, elegan, modern, premium, bersih, dan mobile-first. Logo target:

```text
/public/brand/logo.png
```

Jika belum tersedia, gunakan text logo **AdaUndangan** sebagai fallback tanpa menyebabkan error.

---

# 4. Landing page

Buat route `/` dengan:

- Navbar dan menu mobile.
- Hero.
- CTA “Lihat Demo” dan “Pesan Sekarang”.
- Daftar fitur.
- Preview undangan demo.
- Paket Basic, Standard, Premium, dan Custom.
- Cara pemesanan.
- Testimoni.
- FAQ accordion.
- Tombol WhatsApp dengan pesan otomatis.
- Footer.
- Privacy page.

Data paket, FAQ, testimoni, dan kontak berasal dari file konfigurasi, bukan berulang di JSX.

Contoh headline:

```text
Bagikan Hari Bahagia dalam Satu Tautan
```

---

# 5. Dynamic invitation

Gunakan:

```text
app/[slug]/page.tsx
src/data/invitations/demo-dan-demo.ts
src/data/invitations/index.ts
```

Buat:

```typescript
getInvitationBySlug(slug: string)
```

Gunakan `notFound()` jika slug tidak ada atau undangan belum dipublikasikan. Buat metadata dinamis berdasarkan slug. Query `to` tidak boleh masuk metadata atau menyebabkan cache per nama tamu.

## Tipe data

Minimal sediakan:

- `InvitationConfig`
- `Person`
- `WeddingEvent`
- `GalleryImage`
- `StoryItem`
- `BankAccount`
- `RSVPInput`
- `GuestBookEntry`

Konfigurasi mendukung:

- slug, publication status, theme.
- metadata dan Open Graph.
- bride dan groom.
- hero dan quote opsional.
- banyak event.
- story opsional.
- gallery.
- audio opsional.
- gift opsional.
- RSVP dan guestbook config.
- closing.

Gunakan ISO datetime dengan timezone offset:

```text
2027-01-24T08:00:00+07:00
```

---

# 6. Section undangan

Buat komponen modular:

- `InvitationCover`
- `MusicController`
- `HeroSection`
- `QuoteSection`
- `CoupleSection`
- `EventSection`
- `Countdown`
- `StorySection`
- `GallerySection`
- `LocationSection`
- `CalendarButtons`
- `GiftSection`
- `RSVPForm`
- `GuestBook`
- `ClosingSection`

Section opsional hanya tampil jika aktif dan memiliki data.

## Cover dan nama tamu

- Cover memenuhi layar.
- Tampilkan nama pasangan, tanggal, dan nama tamu.
- Ambil nama dari `?to=`.
- Fallback: `Bapak/Ibu/Saudara/i`.
- Decode aman, trim, batasi panjang, dan jangan render sebagai HTML.
- Kunci scroll saat cover aktif.
- Tombol dapat digunakan dengan keyboard.

## Musik

- Jangan autoplay sebelum interaksi.
- Saat tombol “Buka Undangan” diklik, panggil `audio.play()`.
- Tangani rejection tanpa crash.
- Sediakan kontrol play/pause fixed dan label aksesibel.
- Loop, preload wajar, dan simpan preferensi mute secara konsisten.
- File tidak ada tidak boleh merusak halaman.

## Countdown

Tangani:

- Sebelum acara.
- Acara berlangsung.
- Acara selesai.
- Hydration mismatch.

## Galeri

- Gunakan `next/image`.
- Lazy loading.
- Alt text.
- Lightbox dengan Escape, previous/next, focus handling, dan navigasi keyboard.

## Maps

- Embed opsional.
- Tombol Google Maps.
- External link memakai `noopener noreferrer`.
- Jangan wajibkan API key bila embed URL cukup.

## Gift

- Tampil hanya jika aktif.
- Bank, rekening, nama pemilik, tombol salin, dan toast.
- Alamat hadiah opsional.

---

# 7. Kalender

## Google Calendar

Buat URL dari data acara dengan encoding, timezone, judul, lokasi, dan deskripsi yang benar.

## Apple Calendar / Outlook

Buat route:

```text
/api/calendar/[slug]
```

Dukung parameter event bila ada beberapa acara:

```text
/api/calendar/demo-dan-demo?event=akad
```

Response:

```text
Content-Type: text/calendar; charset=utf-8
Content-Disposition: attachment; filename="..."
```

ICS minimal memiliki `VERSION`, `PRODID`, `UID`, `DTSTAMP`, `DTSTART`, `DTEND`, `SUMMARY`, `DESCRIPTION`, dan `LOCATION`. Escape backslash, koma, titik koma, dan line break sesuai format ICS.

---

# 8. RSVP dan Google Sheets

Route:

```text
POST /api/rsvp
GET /api/guestbook?slug=demo-dan-demo
```

Header spreadsheet:

```text
ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved
```

Form:

- Nama.
- Kehadiran: Hadir, Tidak Hadir, Masih Ragu.
- Jumlah tamu.
- Pesan.
- Honeypot tersembunyi.
- Slug otomatis.

Aturan:

- Validasi client dan server menggunakan Zod.
- Trim dan normalisasi input.
- Nama dan kehadiran wajib.
- Pesan dibatasi.
- Guest count tidak melebihi konfigurasi.
- Jika tidak hadir, guest count nol.
- Tombol disabled saat submit.
- Cegah submit ganda.
- Tolak malformed JSON dan content type yang salah.
- Buat ID dan timestamp di server.
- `Approved` default `FALSE` dan tidak diterima dari browser.

Environment:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
GOOGLE_SHEET_NAME=RSVP
DEMO_MODE=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_WHATSAPP_MESSAGE=
```

Normalisasi key:

```typescript
process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, "
")
```

## Repository adapter

Gunakan interface repository agar demo mode dan Google Sheets dapat diganti tanpa mengubah UI. Buat implementasi demo dan Google Sheets.

## Demo mode

Saat `DEMO_MODE=true`:

- Jangan akses Google API.
- RSVP disimulasikan berhasil.
- Beri tahu bahwa data tidak permanen.
- Guestbook menggunakan data lokal.
- Build produksi tetap berhasil.

Saat `DEMO_MODE=false` dan credential belum lengkap:

- Kembalikan error konfigurasi yang aman.
- Jangan tampilkan secret.
- Jangan membuat halaman crash.

## Guestbook

- Filter berdasarkan slug.
- Hanya `Approved=TRUE`.
- Urutkan terbaru.
- Batasi hasil.
- Kembalikan public DTO saja.
- Tangani sheet kosong, header salah, dan API error.
- UI memiliki loading, empty, error, dan retry state.

---

# 9. Security

Ikuti `docs/05-SECURITY.md`.

Minimal:

- Secret server-only.
- Tidak ada service-account JSON di repository.
- Safe logging.
- Payload limit.
- Honeypot.
- Input normalization.
- Tidak merender input sebagai HTML.
- Error pengguna tidak membocorkan detail teknis.
- Optional Cloudflare Turnstile, tetapi bukan syarat aplikasi berjalan.

---

# 10. SEO, performance, accessibility

Buat:

- `generateMetadata` per slug.
- Open Graph dan Twitter card.
- Canonical.
- Dukungan `noIndex`.
- `robots.ts`, `sitemap.ts`, `manifest.ts`.
- Favicon dan OG fallback.
- Undangan unpublished tidak masuk sitemap.

Performance:

- Server Component default.
- Client Component hanya bila perlu.
- Lazy loading media.
- Jangan preload seluruh galeri/audio.
- Hindari dependency besar dan render ulang tidak perlu.

Accessibility:

- Semantic HTML.
- Heading hierarchy.
- Form label dan error yang dapat dibaca screen reader.
- Focus state.
- Kontras.
- Reduced motion.
- Lightbox keyboard.
- Accessible name pada tombol musik.

Uji viewport: 320, 375, 390, 768, 1024, dan 1440 px.

---

# 11. Struktur target

Gunakan struktur modular setara berikut:

```text
app/
├── [slug]/
├── api/calendar/[slug]/
├── api/guestbook/
├── api/rsvp/
├── privacy/
├── error.tsx
├── globals.css
├── layout.tsx
├── manifest.ts
├── not-found.tsx
├── page.tsx
├── robots.ts
└── sitemap.ts

src/
├── components/invitation/
├── components/landing/
├── components/ui/
├── config/
├── data/invitations/
├── data/demo-guestbook.ts
├── lib/
├── themes/elegant/
└── types/

tests/
├── unit/
├── component/
├── api/
└── e2e/
```

Arsitektur boleh disempurnakan, tetapi alasan dan perubahan dicatat.

---

# 12. Data demo

Buat slug:

```text
demo-dan-demo
```

Gunakan data jelas fiktif:

- Nama dan orang tua.
- Dua acara.
- Tanggal masa depan yang mudah diganti.
- Foto placeholder lokal atau SVG aman.
- Story, quote, galeri, Maps, audio fallback.
- RSVP dan guestbook aktif.
- Rekening dummy berlabel demo.

Jangan gunakan nomor rekening, alamat pribadi, foto tanpa izin, atau musik berhak cipta.

---

# 13. Testing

Unit test:

- Invitation lookup.
- RSVP schema.
- Max guest.
- Google Calendar URL.
- ICS generator.
- Approved filtering.
- Slug handling.

Component test:

- Nama tamu.
- Error RSVP.
- Guest count nol ketika tidak hadir.
- Section opsional.
- Label tombol musik.

API test:

- Payload valid/invalid.
- Honeypot.
- Slug tidak ada.
- Demo mode.
- Approved-only guestbook.

E2E minimal bila stabil:

1. Buka demo dengan nama tamu.
2. Klik buka undangan.
3. Scroll ke RSVP.
4. Isi dan submit form demo.
5. Pastikan notifikasi berhasil.

Jangan menghapus test agar build lolos.

---

# 14. Dokumentasi dan deployment

Buat `README.md` Bahasa Indonesia berisi:

- Fitur dan stack.
- Instalasi.
- Environment variable.
- Demo mode.
- Google Sheets dan service account.
- Menambah undangan.
- Mengganti foto, musik, Maps, dan nomor WhatsApp.
- Kalender.
- Testing.
- Vercel deployment.
- Moderasi `Approved`.
- Troubleshooting.
- Keamanan credential.

Deployment menggunakan Vercel standar. Jangan tambahkan `output: "export"`.

---

# 15. Quality gate

Pastikan script tersedia:

```json
{
  "lint": "...",
  "typecheck": "tsc --noEmit",
  "test": "...",
  "build": "next build"
}
```

Jalankan:

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
```

Periksa route:

```text
/
/demo-dan-demo
/demo-dan-demo?to=Bapak%20Andi%20dan%20Keluarga
/api/calendar/demo-dan-demo
```

Jangan menyatakan selesai jika masih ada TypeScript error, ESLint error utama, test gagal, build gagal, hydration error, secret di client, atau route demo rusak.

---

# 16. Laporan akhir

Berikan:

## Hasil pengerjaan

- Fitur selesai.
- Route tersedia.
- Struktur penting.
- Cara menjalankan.

## Validasi

```text
Lint:
Typecheck:
Test:
Build:
```

## Environment yang harus diisi

Tanpa menampilkan nilai secret.

## Data pengguna yang masih dibutuhkan

Logo, foto, musik, Google Sheet ID, service account, WhatsApp, dan domain.

## Menambahkan undangan baru

Jelaskan file yang disalin dan data yang diganti.

Mulai sekarang dengan membaca seluruh file starter, memperbarui `TASKS.md`, dan bekerja sampai production build berhasil.
