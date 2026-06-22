# Menambahkan Undangan Baru

1. Salin `src/data/invitations/demo-dan-demo.ts` menjadi file slug baru.
2. Ganti slug, metadata, pasangan, event, foto, story, musik, Maps, gift, dan closing.
3. Daftarkan pada `src/data/invitations/index.ts`.
4. Tambahkan foto ke `public/images/invitations/[slug]/`.
5. Tambahkan musik berizin ke `public/audio/`.
6. Uji `/[slug]` dan `/[slug]?to=Nama%20Tamu`.
7. Jalankan lint, typecheck, test, dan build.

Slug harus lowercase, unik, tanpa spasi, dan memakai tanda hubung.
