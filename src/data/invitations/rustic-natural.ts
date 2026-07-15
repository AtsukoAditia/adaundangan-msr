import type { InvitationConfig } from "@/types/invitation";

const rusticNatural: InvitationConfig = {
  slug: "rustic-natural",
  isPublished: true,
  theme: "rustic-natural",

  metadata: {
    title: "Pernikahan Emma & Ryan — AdaUndangan",
    description:
      "Kami mengundang Anda untuk bersama kami merayakan hari bahagia pernikahan kami di tengah alam yang asri.",
    ogImage: "/images/invitations/rustic-natural/og-image.jpg",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "Ryan Ardiansyah Pratama",
      nickname: "Ryan",
      fatherName: "Bambang Pratama",
      motherName: "Endang Lestari",
      childOrder: "putra kedua",
      photoUrl: "/images/invitations/rustic-natural/groom.jpg",
      instagramHandle: "ryan.ardiansyah",
      role: "groom",
    },
    bride: {
      name: "Emma Keisha Nuraini",
      nickname: "Emma",
      fatherName: "Ahmad Nuraini",
      motherName: "Fatimah Zahra",
      childOrder: "putri pertama",
      photoUrl: "/images/invitations/rustic-natural/bride.jpg",
      instagramHandle: "emma.keisha",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/rustic-natural/hero.jpg",
  },

  quote: {
    text: "Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? Maka sesungguhnya bersama kesulitan ada kemudahan.",
    source: "QS. Ar-Rahman: 13 & 5",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      startAt: "2027-03-15T08:00:00+07:00",
      endAt: "2027-03-15T10:00:00+07:00",
      venue: "The Barn — Taman Kayu Putih",
      address:
        "Jl. Raya Puncak No. 45, Desa Cimanggu, Kabupaten Bogor, Jawa Barat",
      mapsUrl:
        "https://maps.google.com/?q=The+Barn+Taman+Kayu+Putih+Puncak&ll=-6.7,106.97&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15845.0!2d106.97!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000000",
      dressCode: "Earth Tone (Cokelat, Hijau Sage, Krem)",
      description:
        "Acara akad akan berlangsung di area terbuka. Mohon hadir 30 menit sebelum acara dimulai.",
      isPrimary: true,
    },
      {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      startAt: "2027-03-15T11:00:00+07:00",
      endAt: "2027-03-15T15:00:00+07:00",
      venue: "The Barn — Taman Kayu Putih",
      address:
        "Jl. Raya Puncak No. 45, Desa Cimanggu, Kabupaten Bogor, Jawa Barat",
      mapsUrl:
        "https://maps.google.com/?q=The+Barn+Taman+Kayu+Putih+Puncak&ll=-6.7,106.97&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15845.0!2d106.97!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000001",
      dressCode: "Earth Tone (Cokelat, Hijau Sage, Krem)",
      description:
        "Resepsi akan diadakan di area garden & barn. Nikmati suasana alam terbuka bersama kami.",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "Maret 2021",
      title: "Pertemuan di Gunung",
      description:
        "Kami pertama kali bertemu dalam sebuah pendakian bersama komunitas pecinta alam. Ryan yang menawarkan bantuan membawa tas, dan Emma yang dengan ramah menerima. Dari sinilah cerita kami dimulai.",
    },
    {
      date: "September 2022",
      title: "Camping Pertama Bersama",
      description:
        "Setelah hampir dua tahun berteman dekat di komunitas, kami memutuskan untuk pergi camping berdua. Di bawah langit berbintang, kami menyadari bahwa perasaan kami lebih dari sekadar teman.",
    },
    {
      date: "Februari 2024",
      title: "Lamaran di Kebun Teh",
      description:
        "Ryan melamar Emma di tengah hamparan kebun teh yang hijau di Ciwidey. Dengan dekorasi bunga-bunga liar dan kayu-kayu alami, momen itu terasa begitu sempurna dan penuh makna.",
    },
    {
      date: "Maret 2027",
      title: "Hari Bahagia Kami",
      description:
        "Dan kini, kami siap mengikat janji suci di tengah keindahan alam, dikelilingi oleh orang-orang tercinta. Sebuah awal baru yang sederhana namun penuh kebahagiaan.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/rustic-natural/gallery-1.jpg",
      alt: "Emma dan Ryan di area taman terbuka",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/rustic-natural/gallery-2.jpg",
      alt: "Foto pra-nikah di hutan pinus",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/rustic-natural/gallery-3.jpg",
      alt: "Momen romantis di tepi danau",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/rustic-natural/gallery-4.jpg",
      alt: "Foto bersama di area barn kayu",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/rustic-natural/gallery-5.jpg",
      alt: "Momen lamaran di kebun teh",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/rustic-natural/gallery-6.jpg",
      alt: "Close-up cincin pertunangan dengan latar bunga kering",
      width: 800,
      height: 600,
    },
  ],

  audio: {
    src: "/audio/Rustic_Wedding_Melody.mp3",
    title: "Lagu Pernikahan Emma & Ryan",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "8765432100",
        accountName: "Ryan Ardiansyah Pratama",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1122334455",
        accountName: "Emma Keisha Nuraini",
      },
    ],
    shippingAddress:
      "Perumahan Vila Puncak Blok C5 No. 12, Desa Cimanggu, Kabupaten Bogor, Jawa Barat 16750",
    note:
      "Kehadiran Anda di hari bahagia kami sudah lebih dari cukup. Namun jika ingin memberikan tanda kasih, kami dengan senang hati menerimanya.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 4,
    deadline: "2027-03-08",
  },

  guestBook: {
    enabled: true,
    maxEntries: 25,
  },

  closing: {
    message:
      "Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dan merayakan hari istimewa kami di tengah keindahan alam. Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Terima kasih dari hati yang paling dalam.",
    familyName: "Keluarga Pratama & Nuraini",
  },
};

export default rusticNatural;
