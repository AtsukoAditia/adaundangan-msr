# Data Model — AdaUndangan

## InvitationConfig

```typescript
interface InvitationConfig {
  slug: string;
  isPublished: boolean;
  theme: "elegant";
  metadata: InvitationMetadata;
  couple: { bride: Person; groom: Person };
  hero: HeroConfig;
  quote?: QuoteConfig;
  events: WeddingEvent[];
  story?: StoryItem[];
  gallery: GalleryImage[];
  audio?: AudioConfig;
  gift?: GiftConfig;
  rsvp: RSVPConfig;
  guestBook: GuestBookConfig;
  closing: ClosingConfig;
}
```

## WeddingEvent

```typescript
interface WeddingEvent {
  id: string;
  title: string;
  startAt: string;
  endAt: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl?: string;
  dressCode?: string;
  description?: string;
  isPrimary?: boolean;
}
```

Gunakan ISO datetime dengan offset, contoh `2027-01-24T08:00:00+07:00`.

## RSVP

```typescript
interface RSVPInput {
  slug: string;
  guestName: string;
  attendance: "HADIR" | "TIDAK_HADIR" | "RAGU";
  guestCount: number;
  message: string;
  website?: string;
}
```

`website` adalah honeypot.

## Public guestbook
Jangan mengembalikan data internal atau kolom Approved.
