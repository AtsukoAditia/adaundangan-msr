# Feature Audit Checklist

Gunakan dokumen ini untuk audit fitur AdaUndangan.

## Landing page

- [ ] Navbar responsif.
- [ ] Hero.
- [ ] Section fitur.
- [ ] Paket harga.
- [ ] Cara pemesanan.
- [ ] Demo.
- [ ] Testimoni.
- [ ] FAQ.
- [ ] Kontak WhatsApp.
- [ ] Footer.

## Undangan

- [ ] `/[slug]` tersedia.
- [ ] Slug tidak ditemukan menampilkan 404.
- [ ] Metadata dinamis.
- [ ] Nama tamu dari query `to`.
- [ ] Cover mengunci scroll.
- [ ] Musik berjalan setelah klik.
- [ ] Kontrol musik.
- [ ] Profil mempelai.
- [ ] Detail acara multi-event.
- [ ] Countdown.
- [ ] Kisah cinta opsional.
- [ ] Galeri.
- [ ] Lightbox.
- [ ] Google Maps.
- [ ] Google Calendar.
- [ ] ICS.
- [ ] Amplop digital opsional.
- [ ] RSVP.
- [ ] Buku tamu.
- [ ] Closing.

## Backend

- [ ] `POST /api/rsvp`.
- [ ] `GET /api/guestbook`.
- [ ] `GET /api/calendar/[slug]`.
- [ ] Server validation.
- [ ] Honeypot.
- [ ] Demo mode.
- [ ] Google Sheets mode.
- [ ] Approved-only filter.
- [ ] Error handling aman.

## Quality

- [ ] Lint.
- [ ] Typecheck.
- [ ] Test.
- [ ] Build.
- [ ] Mobile 320px.
- [ ] Mobile 390px.
- [ ] Tablet.
- [ ] Desktop.
- [ ] Accessibility keyboard.
- [ ] Tidak ada secret client-side.
