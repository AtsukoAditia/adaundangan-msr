# Merge `adaundangan-web` ke `main`

## Masalah

Branch `adaundangan-web` dan `main` tidak memiliki common ancestor. Karena itu GitHub tidak bisa membuat Pull Request normal dengan pesan:

```text
The adaundangan-web branch has no history in common with main
```

## Cara merge yang disarankan

Jalankan dari lokal agar riwayat dapat direkonsiliasi dengan aman.

```bash
git fetch origin

git checkout main
git pull origin main

git checkout -b merge/adaundangan-web

git merge origin/adaundangan-web --allow-unrelated-histories
```

Jika muncul conflict, prioritaskan:

- Source aplikasi dari `adaundangan-web`.
- Workflow CI/CD dari `adaundangan-web`.
- Dokumentasi operasional yang masih relevan dari `main`.

Setelah conflict selesai:

```bash
git status
git add .
git commit
npm ci
npm run lint
npm run typecheck
npm run test
npm run build

git push origin merge/adaundangan-web
```

Lalu buat Pull Request:

```text
base: main
compare: merge/adaundangan-web
```

## Alternatif cepat tetapi tidak disarankan

Force update `main` ke `adaundangan-web` dapat dilakukan, tetapi akan menulis ulang riwayat `main`. Hindari kecuali repository memang masih eksperimental dan kamu sadar konsekuensinya.

```bash
git checkout adaundangan-web
git push origin adaundangan-web:main --force-with-lease
```

## Validasi wajib sebelum merge

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```
