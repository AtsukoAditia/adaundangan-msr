// Core types for AdaUndangan invitation configurations

export interface Person {
  name: string;
  nickname?: string;
  fatherName: string;
  motherName: string;
  photoUrl?: string;
  instagramHandle?: string;
  role?: "bride" | "groom";
  isFirstChild?: boolean;
  childOrder?: string; // e.g. "putri pertama", "putra kedua"
}

export interface WeddingEvent {
  id: string;
  title: string;
  startAt: string; // ISO 8601 with timezone offset: "2027-01-24T08:00:00+07:00"
  endAt: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl?: string;
  dressCode?: string;
  description?: string;
  isPrimary?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StoryItem {
  date: string; // readable date string
  title: string;
  description: string;
  imageUrl?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export interface InvitationMetadata {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

export interface HeroConfig {
  backgroundImage?: string;
  backgroundGradient?: string;
}

export interface QuoteConfig {
  text: string;
  source?: string;
}

export interface AudioConfig {
  src: string;
  title?: string;
}

export interface GiftConfig {
  enabled: boolean;
  bankAccounts?: BankAccount[];
  shippingAddress?: string;
  note?: string;
}

export interface RSVPConfig {
  enabled: boolean;
  maxGuestCount?: number; // default 5
  deadline?: string;
}

export interface GuestBookConfig {
  enabled: boolean;
  maxEntries?: number;
}

export interface ClosingConfig {
  message: string;
  familyName?: string;
}

export interface InvitationConfig {
  slug: string;
  isPublished: boolean;
  theme: "elegant" | "minimal" | "floral" | "modern" | "rustic";
  metadata: InvitationMetadata;
  couple: {
    bride: Person;
    groom: Person;
  };
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

// RSVP types
export type AttendanceStatus = "HADIR" | "TIDAK_HADIR" | "RAGU";

export interface RSVPInput {
  slug: string;
  guestName: string;
  attendance: AttendanceStatus;
  guestCount: number;
  message: string;
  website?: string; // honeypot field
}

// Public guestbook entry (never expose internal fields like Approved, raw row index, etc.)
export interface GuestBookEntry {
  id: string;
  guestName: string;
  attendance: AttendanceStatus;
  guestCount: number;
  message: string;
  timestamp: string;
}
