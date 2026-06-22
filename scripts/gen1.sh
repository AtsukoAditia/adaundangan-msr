#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# ---------- src/config/site.ts ----------
cat > src/config/site.ts <<'EOF'
export const siteConfig = {
  name: "AdaUndangan",
  domain: "adaundangan.id",
  tagline: "Bagikan Hari Bahagia dalam Satu Tautan",
  description:
    "AdaUndangan adalah platform website undangan pernikahan digital yang elegan, modern, dan mudah dibagikan hanya dengan satu tautan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Halo AdaUndangan, saya ingin bertanya mengenai website undangan pernikahan.",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "halo@adaundangan.id",
};

export function buildWhatsappUrl(message?: string): string {
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
EOF

# ---------- src/config/landing.ts ----------
cat > src/config/landing.ts <<'EOF'
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Package {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface OrderStep {
  step: number;
  title: string;
  description: string;
}

export const features: Feature[] = [
  { icon: "Heart", title: "Desain Elegan", description: "Tema romantis, premium, dan mobile-first yang memukau di semua perangkat." },
  { icon: "UserCheck", title: "Nama Tamu Personal", description: "Sapa setiap tamu dengan namanya melalui satu tautan personal." },
  { icon: "Music", title: "Musik Latar", description: "Putar lagu favorit setelah tamu membuka undangan." },
  { icon: "CalendarDays", title: "Simpan ke Kalender", description: "Google Calendar, Apple Calendar, dan Outlook didukung penuh." },
  { icon: "MapPin", title: "Peta Lokasi", description: "Tombol Google Maps dan peta tertanam untuk setiap acara." },
  { icon: "MessageSquare", title: "RSVP & Buku Tamu", description: "Konfirmasi kehadiran dan ucapan tersimpan rapi di Google Spreadsheet." },
  { icon: "Images", title: "Galeri Foto", description: "Tampilkan momen indah dengan galeri dan lightbox interaktif." },
  { icon: "Gift", title: "Amplop Digital", description: "Terima hadiah pernikahan dengan mudah dan aman." },
];

export const packages: Package[] = [
  {
    name: "Basic",
    price: "Rp149.000",
    features: ["1 halaman undangan", "Nama tamu personal", "Countdown & lokasi", "RSVP & buku tamu", "Masa aktif 3 bulan"],
  },
  {
    name: "Standard",
    price: "Rp249.000",
    highlight: true,
    features: ["Semua fitur Basic", "Galeri foto & lightbox", "Musik latar", "Kisah cinta", "Amplop digital", "Masa aktif 6 bulan"],
  },
  {
    name: "Premium",
    price: "Rp399.000",
    features: ["Semua fitur Standard", "Banyak acara & sesi", "Custom domain", "Prioritas dukungan", "Masa aktif 12 bulan"],
  },
  {
    name: "Custom",
    price: "Hubungi Kami",
    features: ["Desain eksklusif", "Fitur khusus", "Integrasi lanjutan", "Konsultasi penuh"],
  },
];

export const orderSteps: OrderStep[] = [
  { step: 1, title: "Pilih Paket", description: "Tentukan paket undangan yang sesuai dengan kebutuhan Anda." },
  { step: 2, title: "Kirim Data", description: "Lengkapi data mempelai, acara, foto, dan musik melalui WhatsApp." },
  { step: 3, title: "Proses Desain", description: "Tim kami menyusun undangan digital Anda dengan cepat." },
  { step: 4, title: "Bagikan Tautan", description: "Undangan siap dibagikan ke seluruh tamu dalam satu tautan." },
];

export const testimonials: Testimonial[] = [
  { name: "Dina & Reza", role: "Pengantin, Jakarta", quote: "Undangannya elegan dan tamu-tamu kami sangat terkesan. Prosesnya cepat dan mudah!" },
  { name: "Maya & Arif", role: "Pengantin, Bandung", quote: "Fitur RSVP-nya sangat membantu kami mendata kehadiran tamu. Recommended!" },
  { name: "Sari & Budi", role: "Pengantin, Surabaya", quote: "Desainnya cantik dan bisa diakses lewat HP dengan lancar. Terima kasih AdaUndangan!" },
];

export const faqs: FaqItem[] = [
  { question: "Apakah undangan bisa diakses lewat HP?", answer: "Tentu. Semua undangan AdaUndangan dirancang mobile-first sehingga tampil sempurna di smartphone." },
  { question: "Berapa lama proses pembuatannya?", answer: "Umumnya 1-3 hari kerja setelah data lengkap kami terima, tergantung paket yang dipilih." },
  { question: "Apakah bisa menambahkan nama tamu?", answer: "Bisa. Setiap tamu dapat menerima tautan personal dengan namanya masing-masing." },
  { question: "Bagaimana cara konfirmasi kehadiran tamu?", answer: "Tersedia fitur RSVP dan buku tamu yang datanya tersimpan rapi di Google Spreadsheet Anda." },
  { question: "Apakah data tamu aman?", answer: "Ya. Kami tidak menampilkan data sensitif tamu dan ucapan hanya tampil setelah Anda menyetujuinya." },
];
EOF

# ---------- src/data/demo-guestbook.ts ----------
cat > src/data/demo-guestbook.ts <<'EOF'
import type { AttendanceStatus } from "@/src/types/invitation";

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
EOF

echo "gen1 done"
