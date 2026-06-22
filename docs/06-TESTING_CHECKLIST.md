# Testing Checklist

## Command

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Route
- [ ] `/`
- [ ] `/demo-dan-demo`
- [ ] `/demo-dan-demo?to=Bapak%20Andi`
- [ ] `/slug-tidak-ada`
- [ ] `/api/calendar/demo-dan-demo`
- [ ] `/api/guestbook?slug=demo-dan-demo`

## Viewport
320, 375, 390, 768, 1024, dan 1440 px.

## Cover/audio
- Nama tamu dan fallback benar.
- Scroll terkunci.
- Tombol keyboard-accessible.
- Musik hanya setelah klik.
- Audio gagal tidak crash.

## RSVP
- Input wajib, max guest, status tidak hadir, honeypot, submit ganda, demo mode, Google mode, dan error state.

## Guestbook
- Approved-only, filter slug, urutan terbaru, empty/error state, dan input tidak dirender sebagai HTML.

## Calendar
- URL Google benar, ICS terunduh, timezone dan escaping benar.

## Accessibility/performance
- Focus, alt, label, Escape, reduced motion, kontras, lazy loading, tanpa overflow/hydration warning.
