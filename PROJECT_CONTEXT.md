# AdaUndangan — Project Context

## Ringkasan

AdaUndangan adalah platform website undangan pernikahan digital tanpa CMS. Satu deployment mendukung banyak undangan melalui dynamic route dan file konfigurasi TypeScript.

## Arsitektur target

```text
Pengunjung
  -> Next.js di Vercel
  -> Dynamic route berdasarkan slug
  -> File konfigurasi TypeScript
  -> Route Handler untuk RSVP, guestbook, dan ICS
  -> Google Sheets API via Service Account
```

## Route target

| Route | Fungsi |
|---|---|
| `/` | Landing page bisnis |
| `/[slug]` | Halaman undangan |
| `/privacy` | Kebijakan privasi |
| `/api/rsvp` | Simpan RSVP |
| `/api/guestbook` | Ambil ucapan approved |
| `/api/calendar/[slug]` | Unduh ICS |

## Keputusan teknis

- Next.js App Router.
- TypeScript strict.
- Tailwind CSS.
- npm.
- Production deploy ke Vercel.
- GitHub Releases untuk paket demo/download, bukan live hosting.
- Google Sheets server-side.
- Demo mode harus berjalan tanpa credential Google.
