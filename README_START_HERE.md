# AdaUndangan — CLINE Workspace Starter

Starter pack ini digunakan untuk membangun **AdaUndangan**, platform website undangan pernikahan digital berbasis Next.js yang akan di-deploy ke Vercel.

## Cara memakai

1. Ekstrak ZIP ke folder workspace baru.
2. Buka `adaundangan.code-workspace` di Visual Studio Code.
3. Pasang extension yang direkomendasikan.
4. Buka CLINE.
5. Salin isi `CLINE_MASTER_PROMPT.md` sebagai task pertama.
6. Izinkan pembacaan/penulisan file dan perintah terminal yang aman.
7. Tetap periksa manual penghapusan file, perubahan Git destruktif, dan tindakan terkait credential.

## Isi starter pack

- `.clinerules`: aturan permanen CLINE.
- `.clineignore`: file yang dikeluarkan dari konteks AI.
- `CLINE_MASTER_PROMPT.md`: instruksi pembangunan dari awal hingga build produksi.
- `CLINE_CONTINUE_PROMPT.md`: prompt saat melanjutkan sesi.
- `PROJECT_CONTEXT.md`: keputusan dan konteks arsitektur.
- `TASKS.md`: checklist implementasi.
- `.env.example`: template environment variable.
- `.vscode/`: konfigurasi workspace.
- `docs/`: kebutuhan produk, arsitektur, keamanan, testing, dan deployment.

## Identitas

- Brand: **AdaUndangan**
- Package: `adaundangan`
- Contoh domain: `adaundangan.id`
- Contoh URL: `https://adaundangan.id/demo-dan-demo`

Starter pack belum berisi source code aplikasi lengkap. CLINE akan membuatnya berdasarkan dokumen ini.
