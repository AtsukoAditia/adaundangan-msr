# Setup Google Spreadsheet

## Spreadsheet
Buat sheet `RSVP` dengan header:

| ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved |
|---|---|---|---|---|---|---|---|

## Google Cloud
1. Buat project.
2. Aktifkan Google Sheets API.
3. Buat Service Account.
4. Buat key JSON.
5. Jangan commit JSON tersebut.

## Akses
Bagikan spreadsheet kepada email service account sebagai Editor.

## Environment

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
GOOGLE_SHEET_NAME=RSVP
DEMO_MODE=false
```

Gunakan normalisasi newline private key:

```typescript
process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, "
")
```

## Moderasi
Data baru: `Approved=FALSE`. Pemilik mengubahnya menjadi `TRUE` agar ucapan tampil.

## Keamanan
Tidak memakai `NEXT_PUBLIC_`, tidak menyimpan key JSON, dan tidak mengembalikan detail credential melalui API.
