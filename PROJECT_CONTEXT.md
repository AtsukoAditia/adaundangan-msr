# AdaUndangan — Project Context

## Ringkasan

AdaUndangan adalah platform website undangan pernikahan digital tanpa CMS. Satu deployment mendukung banyak undangan melalui dynamic route dan file konfigurasi TypeScript.

## Tujuan bisnis

- Menjual website undangan digital.
- Mempercepat produksi melalui template reusable.
- Mengganti data pasangan tanpa dashboard admin.
- Deploy sederhana melalui Vercel.
- Menyimpan RSVP dan moderasi buku tamu di Google Spreadsheet.

## Arsitektur

```text
Pengunjung
  -> Next.js di Vercel
  -> Dynamic route berdasarkan slug
  -> File konfigurasi TypeScript
  -> Route Handler RSVP, guestbook, dan ICS
  -> Google Sheets API melalui Service Account
```

## Prinsip

1. Tidak ada CMS atau database tambahan.
2. Source of truth undangan adalah file konfigurasi.
3. Secret hanya server-side.
4. Demo mode berjalan tanpa credential.
5. Mobile-first, aksesibel, dan cepat.
6. Theme mengubah presentasi tanpa menduplikasi business logic.

## Route target

| Route                  | Fungsi                |
| ---------------------- | --------------------- |
| `/`                    | Landing page          |
| `/[slug]`              | Halaman undangan      |
| `/privacy`             | Kebijakan privasi     |
| `/api/rsvp`            | Simpan RSVP           |
| `/api/guestbook`       | Ambil ucapan approved |
| `/api/calendar/[slug]` | Unduh ICS             |

## Kolom spreadsheet

`ID, Timestamp, Slug, Guest Name, Attendance, Guest Count, Message, Approved`

## Keputusan tetap

- Next.js App Router.
- TypeScript strict.
- npm.
- Google Sheets server-side.
- Deployment standar Vercel, bukan static export.
- Nama aplikasi selalu AdaUndangan.

## Keputusan arsitektur (sprint 1)

- **Repository pattern** untuk data access: `InvitationRepository` interface dengan `DemoInvitationRepository` (demo mode) dan `SheetsInvitationRepository` (Google Sheets). Dipilih `DEMO_MODE` env untuk switching.
- **Demo guestbook** disimpan di `src/data/demo-guestbook.ts` sebagai array lokal, bukan di Google Sheets.
- **ICS generator** menggunakan string concatenation manual agar zero-dependency dan mudah di-test.
- **CalendarButtons** menggabungkan Google Calendar URL builder dan ICS download dalam satu komponen.
- **RSVPForm** menggunakan React Hook Form + Zod untuk validasi client-side, dengan server validation terpisah di route handler.
- **GuestBook** component me-fetch data dari `/api/guestbook` dengan slug filter.
- **Cover fullscreen** mengunci scroll body dengan `overflow: hidden` saat aktif.
- **Music controller** fixed di kanan bawah, play/pause toggle, aksesibel dengan aria-label.
- **Galeri** menggunakan 3-column grid (responsive) dengan lightbox modal.
- **Countdown** menggunakan `useMemo` untuk target date agar tidak trigger re-render loop.
- **Honeypot field** bernama `website` di form RSVP, hidden dari user tapi diisi bot.
- **Tailwind custom colors**: `burgundy`, `gold`, `ivory` ditambahkan di `tailwind.config.ts`.
- **Font**: Playfair Display (display) + Lato (body) via Google Fonts di layout.tsx.
- **Vitest** dipilih sebagai test runner (bukan Jest) karena kompatibel dengan Next.js 15.
