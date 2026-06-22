# Demo via GitHub Releases

## Kesimpulan

GitHub Releases **bisa** digunakan untuk membagikan paket demo/source sebagai file ZIP, tetapi **tidak cocok sebagai hosting live** untuk website AdaUndangan.

## Yang bisa dilakukan dengan Releases

- Membagikan source code versi tertentu.
- Membagikan build artifact.
- Membagikan dokumentasi dan paket demo.
- Menandai versi stabil, misalnya `demo-v0.1.0`.

## Yang tidak bisa dilakukan hanya dengan Releases

- Menjalankan API route Next.js.
- Menyimpan RSVP secara live.
- Menjalankan serverless function.
- Menyediakan link demo interaktif seperti Vercel.

## Alternatif live demo

Gunakan Vercel:

- Preview untuk branch/PR.
- Production untuk `main`.
- Environment variable aman.
- Route API berjalan.

## Cara membuat demo release

Setelah aplikasi selesai dan build berhasil:

```bash
git tag demo-v0.1.0
git push origin demo-v0.1.0
```

Workflow `.github/workflows/release-demo.yml` akan membuat release dengan paket ZIP.

## Cara manual dari GitHub UI

1. Buka tab Actions.
2. Pilih `Release Demo Package`.
3. Klik `Run workflow`.
4. Isi versi, contoh `demo-v0.1.0`.
5. Jalankan workflow.
6. Cek tab Releases.
