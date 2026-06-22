# Setup Google Spreadsheet

## Spreadsheet

Buat Google Spreadsheet baru, lalu buat sheet/tab bernama:

```text
RSVP
```

Isi header baris pertama:

| ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved |
|---|---|---|---|---|---|---|---|

## Google Cloud

1. Buat project di Google Cloud Console.
2. Aktifkan Google Sheets API.
3. Buat Service Account.
4. Buat key JSON.
5. Jangan commit file JSON tersebut ke repository.

## Akses Spreadsheet

Bagikan spreadsheet kepada email service account sebagai **Editor**.

Contoh email service account:

```text
nama-service-account@nama-project.iam.gserviceaccount.com
```

## Environment

Tambahkan environment variable berikut di `.env.local` untuk development atau di Vercel Environment Variables untuk production:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
GOOGLE_SHEET_NAME=RSVP
DEMO_MODE=false
```

`GOOGLE_SHEET_ID` diambil dari URL spreadsheet.

## Private Key

Jika private key disimpan dalam bentuk escaped newline, kode harus menormalisasi newline seperti ini:

```typescript
process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
```

## Moderasi

Data RSVP baru harus masuk dengan:

```text
Approved=FALSE
```

Pemilik usaha mengubah nilainya menjadi:

```text
TRUE
```

agar ucapan tampil di buku tamu website.

## Keamanan

- Jangan gunakan prefix `NEXT_PUBLIC_` untuk credential Google.
- Jangan simpan key JSON di repository.
- Jangan tampilkan detail credential di respons API.
- Jangan membagikan spreadsheet ke publik jika berisi data RSVP pelanggan.
