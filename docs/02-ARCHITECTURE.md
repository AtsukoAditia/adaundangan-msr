# Architecture — AdaUndangan

```text
Next.js App Router
├── Landing Page
├── Dynamic Invitation Page
├── RSVP Route Handler
├── Guestbook Route Handler
├── ICS Route Handler
└── Google Sheets Server Integration
```

## Data undangan
Lokasi: `src/data/invitations/`. Setiap file mengekspor satu `InvitationConfig`; `index.ts` membuat registry slug.

## Rendering
- Landing dan invitation shell: Server Component.
- Cover, audio, countdown, form, guestbook, dan lightbox: Client Component seperlunya.
- Metadata: server-side.
- Nama tamu dari query: client-side agar tidak memengaruhi metadata/cache.

## Backend

### RSVP
`POST /api/rsvp`: validasi content type, parse JSON, Zod, honeypot, slug, guest count, lalu tulis melalui repository.

### Guestbook
`GET /api/guestbook?slug=...`: verifikasi slug, ambil data, filter approved, map public DTO, urutkan, batasi.

### Calendar
`GET /api/calendar/[slug]?event=...`: hasilkan ICS.

## Repository pattern

```typescript
interface GuestbookRepository {
  createEntry(input: RSVPInput): Promise<void>;
  listApproved(slug: string): Promise<GuestBookEntry[]>;
}
```

Implementasi: demo repository dan Google Sheets repository.

## Theme
Theme hanya mengubah presentasi. Logic RSVP, kalender, parsing data, dan metadata tetap shared.
