import type { AttendanceStatus } from "@/types/invitation";

export interface DemoGuestbookRow {
  id: string;
  slug: string;
  guestName: string;
  attendance: AttendanceStatus;
  guestCount: number;
  message: string;
  timestamp: string;
  approved: boolean;
}

// Demo data — not persisted anywhere. Only approved=true rows are shown.
export const demoGuestbook: DemoGuestbookRow[] = [
  {
    id: "demo-1",
    slug: "demo-dan-demo",
    guestName: "Keluarga Besar Wijaya",
    attendance: "HADIR",
    guestCount: 4,
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    timestamp: "2026-12-20T10:15:00+07:00",
    approved: true,
  },
  {
    id: "demo-2",
    slug: "demo-dan-demo",
    guestName: "Sahabat Kuliah",
    attendance: "HADIR",
    guestCount: 2,
    message: "Akhirnya nikah juga! Bahagia selalu ya kalian berdua. Sampai ketemu di hari H!",
    timestamp: "2026-12-21T14:30:00+07:00",
    approved: true,
  },
  {
    id: "demo-3",
    slug: "demo-dan-demo",
    guestName: "Tante Ratih",
    attendance: "RAGU",
    guestCount: 1,
    message: "Semoga lancar acaranya. Tante usahakan hadir ya sayang.",
    timestamp: "2026-12-22T09:00:00+07:00",
    approved: true,
  },
  {
    id: "demo-4",
    slug: "demo-dan-demo",
    guestName: "Belum Disetujui",
    attendance: "HADIR",
    guestCount: 1,
    message: "Ucapan ini belum disetujui sehingga tidak akan tampil.",
    timestamp: "2026-12-23T09:00:00+07:00",
    approved: false,
  },
];
