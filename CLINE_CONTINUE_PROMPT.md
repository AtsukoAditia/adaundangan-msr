# Prompt Lanjutan CLINE

Lanjutkan pembangunan AdaUndangan berdasarkan `.clinerules`, `PROJECT_CONTEXT.md`, `TASKS.md`, dan seluruh `docs/`.

Periksa kondisi workspace dan checklist. Jangan mengulang pekerjaan yang sudah selesai. Jangan menghapus fitur yang telah bekerja. Prioritaskan item belum dicentang, lalu jalankan:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Perbaiki error utama, perbarui dokumentasi, dan berikan laporan validasi akhir. Nama brand harus tetap AdaUndangan.
