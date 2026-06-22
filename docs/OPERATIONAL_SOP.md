# SOP Operasional Order AdaUndangan

Dokumen ini digunakan ketika ada order pembuatan website undangan baru.

## 1. Pre-order

### Data yang diminta dari pelanggan

- Nama lengkap mempelai wanita.
- Nama panggilan mempelai wanita.
- Nama orang tua mempelai wanita.
- Nama lengkap mempelai pria.
- Nama panggilan mempelai pria.
- Nama orang tua mempelai pria.
- Tanggal akad.
- Jam akad.
- Lokasi akad.
- Alamat akad.
- Link Google Maps akad.
- Tanggal resepsi.
- Jam resepsi.
- Lokasi resepsi.
- Alamat resepsi.
- Link Google Maps resepsi.
- Foto hero.
- Foto mempelai.
- Foto galeri.
- Musik pilihan.
- Cerita perjalanan cinta.
- Kutipan atau ayat.
- Data rekening amplop digital, jika ada.
- Nama slug yang diinginkan.
- Tanggal aktif undangan.

## 2. Buat spreadsheet RSVP

1. Buat Google Spreadsheet.
2. Buat sheet `RSVP`.
3. Isi header:

```text
ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved
```

4. Share spreadsheet ke email service account.
5. Simpan Sheet ID.

## 3. Buat branch order

Format branch:

```text
order/nama-pasangan
```

Contoh:

```text
order/dita-raka
```

## 4. Tambahkan data undangan

1. Salin data demo:

```text
src/data/invitations/demo-dan-demo.ts
```

menjadi:

```text
src/data/invitations/dita-dan-raka.ts
```

2. Ganti slug:

```typescript
slug: "dita-dan-raka"
```

3. Ganti data pasangan, acara, foto, musik, maps, rekening, dan closing.
4. Tambahkan file baru ke registry `src/data/invitations/index.ts`.

## 5. Tambahkan aset

Foto:

```text
public/images/invitations/dita-dan-raka/
```

Musik:

```text
public/audio/dita-dan-raka.mp3
```

Pastikan file sudah dikompresi.

## 6. Uji lokal

```bash
npm install
npm run dev
```

Buka:

```text
http://localhost:3000/dita-dan-raka
http://localhost:3000/dita-dan-raka?to=Bapak%20Andi
```

## 7. Quality check

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## 8. Preview pelanggan

- Push branch ke GitHub.
- Buka Pull Request.
- Ambil Vercel Preview URL.
- Kirim preview ke pelanggan.
- Catat revisi.

## 9. Revisi

Jenis revisi umum:

- Nama salah tulis.
- Foto diganti.
- Musik diganti.
- Jam/lokasi berubah.
- Rekening diganti.
- Warna/template disesuaikan.

## 10. Publish

Setelah pelanggan setuju:

1. Merge PR ke `main`.
2. Pastikan Vercel production sukses.
3. Uji URL production.
4. Kirim link ke pelanggan.
5. Berikan instruksi moderasi RSVP.

## 11. Setelah publish

- Pantau form RSVP.
- Cek spreadsheet.
- Moderasi ucapan dengan mengubah `Approved` ke `TRUE`.
- Backup data RSVP jika diperlukan.
- Catat perubahan di dokumen order.

## 12. Template pesan ke pelanggan

```text
Halo Kak, undangan digitalnya sudah bisa dicek melalui link berikut:

[LINK_PREVIEW]

Mohon dicek bagian nama, tanggal, jam, lokasi, foto, musik, dan rekening. Jika ada revisi, silakan kirim daftar revisinya dalam satu pesan agar bisa saya rapikan sekaligus.
```
