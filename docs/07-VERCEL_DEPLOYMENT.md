# Deployment Vercel

1. Pastikan build lokal berhasil.
2. Push ke GitHub.
3. Import repository ke Vercel.
4. Pastikan framework terdeteksi Next.js.
5. Tambahkan environment variable.
6. Deploy dan uji landing, undangan, RSVP, guestbook, ICS, Maps, audio, dan Open Graph.

## Server-only
`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`, `GOOGLE_SHEET_NAME`, `DEMO_MODE`, `TURNSTILE_SECRET_KEY`.

## Public
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_WHATSAPP_MESSAGE`, `NEXT_PUBLIC_BUSINESS_EMAIL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.

Jangan gunakan `output: "export"`. Redeploy setelah perubahan environment.
