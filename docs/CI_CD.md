# CI/CD AdaUndangan

## CI

Workflow:

```text
.github/workflows/ci.yml
```

Trigger:

- Pull request ke `main`.
- Push ke `main`.
- Manual workflow dispatch.

Jika `package.json` sudah ada, CI menjalankan:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Jika `package.json` belum ada, CI hanya melakukan validasi dokumentasi awal agar repository kosong/starter tidak gagal.

## CD Production

Workflow:

```text
.github/workflows/vercel-production.yml
```

Trigger:

- Manual workflow dispatch.

Membutuhkan secrets:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Production utama tetap disarankan dari integrasi Vercel GitHub karena lebih sederhana dan otomatis.

## Release package

Workflow:

```text
.github/workflows/release-demo.yml
```

Trigger:

- Tag `demo-v*`.
- Manual workflow dispatch.

Output:

- Release GitHub.
- ZIP package.

## Catatan keamanan

- Workflow memakai permissions minimal.
- Secret tidak ditulis ke log.
- Deploy Vercel manual untuk mencegah publish tidak sengaja.
