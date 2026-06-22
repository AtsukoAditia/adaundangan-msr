# Security Checklist

## Secret
- Google credential server-only.
- `.env.local` dan service-account JSON tidak di-commit.
- Log dan respons tidak memuat secret atau stack trace produksi.

## Input
- Zod di server dan client.
- Trim dan batas panjang string.
- Validasi slug, attendance, serta guest count.
- Guest count maksimum berasal dari config.
- Jika tidak hadir, guest count dipaksa nol.
- Tolak content type selain JSON dan malformed JSON.
- Gunakan honeypot.
- Jangan render input sebagai HTML.

## Spam
Minimal: honeypot, disabled submit, server validation, payload limit, dan pesan error generik. Cloudflare Turnstile boleh opsional.

## Privacy
Jangan tampilkan email/nomor tamu, IP, data internal sheet, kolom Approved, atau credential.
