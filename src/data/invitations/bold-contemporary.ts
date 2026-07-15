import type { InvitationConfig } from "../../types/invitation";

const BASE = "/images/invitations/bold-contemporary";

const config: InvitationConfig = {
  slug: "bold-contemporary",
  isPublished: true,
  theme: "bold-contemporary",
  metadata: {
    title: "Maya & Kai — Bold Contemporary Wedding",
    description:
      "You're invited to celebrate the wedding of Maya & Kai. A bold, vibrant contemporary wedding invitation.",
    ogImage: `${BASE}/og-image.jpg`,
  },

  couple: {
    bride: {
      name: "Maya Andini Putri",
      nickname: "Maya",
      fatherName: "Rizki Andini",
      motherName: "Sari Putri",
      instagramHandle: "maya.andini",
      role: "bride",
      isFirstChild: true,
      childOrder: "putri pertama",
      photoUrl: `${BASE}/bride.jpg`,
    },
    groom: {
      name: "Kai Pratama Wijaya",
      nickname: "Kai",
      fatherName: "Budi Wijaya",
      motherName: "Linda Pratama",
      instagramHandle: "kai.wijaya",
      role: "groom",
      isFirstChild: false,
      childOrder: "putra kedua",
      photoUrl: `${BASE}/groom.jpg`,
    },
  },

  hero: {
    backgroundImage: `${BASE}/hero-bg.jpg`,
    backgroundGradient:
      "linear-gradient(135deg, rgba(255,111,97,0.85) 0%, rgba(0,168,168,0.75) 50%, rgba(255,200,0,0.65) 100%)",
  },

  quote: {
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    source: "Unknown",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      startAt: "2027-03-15T08:00:00+07:00",
      endAt: "2027-03-15T10:00:00+07:00",
      venue: "Rooftop Garden — The Sky Loft",
      address: "Jl. Jend. Sudirman No. 52, Lantai 38, Jakarta Selatan 12190",
      mapsUrl: "https://maps.google.com/?q=The+Sky+Loft+Sudirman+Jakarta",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.82!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMTIuMCJF!5e0!3m2!1sen!2sid!4v1",
      dressCode: "Smart Casual — Bold Colors Welcome",
      description:
        "Acara akad nikah akan dilaksanakan secara khidmat di rooftop dengan pemandangan kota Jakarta.",
      isPrimary: true,
    },
    {
      id: "resepsi",
      title: "Resepsi",
      startAt: "2027-03-15T11:00:00+07:00",
      endAt: "2027-03-15T15:00:00+07:00",
      venue: "The Sky Loft Ballroom",
      address: "Jl. Jend. Sudirman No. 52, Lantai 37-38, Jakarta Selatan 12190",
      mapsUrl: "https://maps.google.com/?q=The+Sky+Loft+Sudirman+Jakarta",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.82!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMTIuMCJF!5e0!3m2!1sen!2sid!4v1",
      dressCode: "Contemporary Chic — Coral, Teal & Gold Accents",
      description:
        "Bergabunglah bersama kami dalam perayaan resepsi pernikahan yang modern dan penuh warna.",
    },
  ],

  story: [
    {
      date: "Juni 2020",
      title: "First Meet at a Coffee Shop",
      description:
        "Maya dan Kai pertama kali bertemu di sebuah coffee shop di Kemang. Kai memesan flat white, Maya memesan matcha latte — dan sisanya adalah sejarah.",
      imageUrl: `${BASE}/story-1.jpg`,
    },
    {
      date: "Desember 2022",
      title: "Traveling Together",
      description:
        "Petualangan pertama kami bersama ke Bali. Sunset di Uluwatu menjadi saksi bahwa kami ingin menghabiskan setiap senja bersama.",
      imageUrl: `${BASE}/story-2.jpg`,
    },
    {
      date: "Agustus 2026",
      title: "The Proposal",
      description:
        "Di atas rooftop yang sama dengan tempat kami akan menikah, Kai melamar Maya di bawah langit Jakarta yang penuh bintang kota.",
      imageUrl: `${BASE}/story-3.jpg`,
    },
  ],

  gallery: [
    {
      src: `${BASE}/gallery-1.jpg`,
      alt: "Maya & Kai — Pre-wedding di rooftop",
      width: 800,
      height: 1200,
    },
    {
      src: `${BASE}/gallery-2.jpg`,
      alt: "Maya & Kai — Potret di taman kota",
      width: 800,
      height: 600,
    },
    {
      src: `${BASE}/gallery-3.jpg`,
      alt: "Maya & Kai — Candid tertawa bersama",
      width: 800,
      height: 1000,
    },
    {
      src: `${BASE}/gallery-4.jpg`,
      alt: "Maya & Kai — Silhouette saat golden hour",
      width: 800,
      height: 600,
    },
    {
      src: `${BASE}/gallery-5.jpg`,
      alt: "Maya & Kai — Detail cincin dan bouquet",
      width: 800,
      height: 800,
    },
    {
      src: `${BASE}/gallery-6.jpg`,
      alt: "Maya & Kai — Berjalan bersama di garden",
      width: 800,
      height: 1200,
    },
  ],

  audio: {
    src: "/audio/bold-contemporary-song.mp3",
    title: "A Thousand Years — Christina Perri",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "BCA",
        accountNumber: "1234567890",
        accountName: "Maya Andini Putri",
      },
      {
        bankName: "Mandiri",
        accountNumber: "0987654321",
        accountName: "Kai Pratama Wijaya",
      },
    ],
    shippingAddress:
      "Jl. Kebagusan Raya No. 12, RT 005/RW 03, Kel. Kebagusan, Kec. Pasar Minggu, Jakarta Selatan 12520",
    note: "Terima kasih atas doa dan hadiahnya. Untuk pengiriman kado, silakan gunakan alamat di atas.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 5,
    deadline: "2027-03-01T23:59:59+07:00",
  },

  guestBook: {
    enabled: true,
    maxEntries: 200,
  },

  closing: {
    message:
      "Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.",
    familyName: "Keluarga Besar Andini & Wijaya",
  },
};

export default config;
