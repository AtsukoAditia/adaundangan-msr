import type { InvitationConfig } from "@/types/invitation";

const demoElegant: InvitationConfig = {
  slug: "demo-elegant",
  isPublished: true,
  theme: "elegant",

  metadata: {
    title: "Pernikahan Rama & Sinta — Elegant",
    description:
      "Kami mengundang Anda untuk bersama kami merayakan hari bahagia pernikahan kami.",
    ogImage: "/images/invitations/demo-og.svg",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "Rama Putra Santoso",
      nickname: "Rama",
      fatherName: "Santoso Widodo",
      motherName: "Sari Dewi",
      childOrder: "putra pertama",
      photoUrl: "/images/invitations/demo-groom.svg",
      instagramHandle: "rama.demo",
      role: "groom",
    },
    bride: {
      name: "Sinta Ayu Maharani",
      nickname: "Sinta",
      fatherName: "Mahardika Utama",
      motherName: "Ratna Sari",
      childOrder: "putri pertama",
      photoUrl: "/images/invitations/demo-bride.svg",
      instagramHandle: "sinta.demo",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/demo-hero.svg",
  },

  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.",
    source: "QS. Ar-Rum: 21",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      startAt: "2027-01-24T08:00:00+07:00",
      endAt: "2027-01-24T10:00:00+07:00",
      venue: "Masjid Al-Falah",
      address: "Jl. Contoh No. 1, Kelurahan Demo, Kota Fiktif, Jawa Tengah",
      mapsUrl:
        "https://maps.google.com/?q=Masjid+Al+Falah+Demo&ll=-6.2,106.8&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000000",
      dressCode: "Putih & Gold",
      description: "Mohon hadir tepat waktu.",
      isPrimary: true,
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      startAt: "2027-01-24T11:00:00+07:00",
      endAt: "2027-01-24T15:00:00+07:00",
      venue: "Gedung Serbaguna Demo",
      address: "Jl. Contoh No. 2, Kelurahan Demo, Kota Fiktif, Jawa Tengah",
      mapsUrl:
        "https://maps.google.com/?q=Gedung+Serbaguna+Demo&ll=-6.21,106.81&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d106.81!3d-6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000001",
      dressCode: "Formal Elegan",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "Januari 2022",
      title: "Pertama Bertemu",
      description:
        "Kami pertama kali bertemu di sebuah acara kampus yang sederhana. Tidak ada yang tahu bahwa pertemuan biasa itu akan menjadi awal dari sebuah cerita indah.",
    },
    {
      date: "Juni 2023",
      title: "Mulai Kenal Lebih Dekat",
      description:
        "Setelah setahun lebih berkenalan, kami mulai menjalin komunikasi yang lebih intens. Setiap percakapan membuat kami semakin memahami satu sama lain.",
    },
    {
      date: "Desember 2024",
      title: "Lamaran",
      description:
        "Dalam suasana hangat keluarga, Rama melamar Sinta dengan penuh ketulusan. Sebuah momen yang tidak akan pernah kami lupakan seumur hidup.",
    },
    {
      date: "Januari 2027",
      title: "Hari Bahagia",
      description:
        "Dan kini, kami siap melangkah ke babak baru kehidupan bersama, dengan doa dan restu dari seluruh keluarga dan sahabat tercinta.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/demo-gallery-1.svg",
      alt: "Foto pra-nikah Rama dan Sinta di taman",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/demo-gallery-2.svg",
      alt: "Foto pra-nikah Rama dan Sinta di pantai",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/demo-gallery-3.svg",
      alt: "Foto pra-nikah Rama dan Sinta di kota",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/demo-gallery-4.svg",
      alt: "Momen lamaran yang romantis",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/demo-gallery-5.svg",
      alt: "Foto bersama keluarga di hari lamaran",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/demo-gallery-6.svg",
      alt: "Foto close-up cincin pertunangan",
      width: 800,
      height: 600,
    },
  ],

  audio: {
    src: "/audio/Beautiful_In_White.mp3",
    title: "Lagu Pernikahan Demo",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "Bank Central Asia",
        accountNumber: "1234567890",
        accountName: "Rama Putra Santoso",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "Sinta Ayu Maharani",
      },
    ],
    shippingAddress:
      "Jl. Contoh No. 1, Kelurahan Demo, Kota Fiktif 12345 (Ini adalah alamat demo fiktif)",
    note: "Kehadiran dan doa restu Anda adalah hadiah terbaik bagi kami. Namun jika ingin memberikan hadiah, berikut informasinya.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 2,
    deadline: "2027-01-17",
  },

  guestBook: {
    enabled: true,
    maxEntries: 20,
  },

  closing: {
    message:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restu Anda, kami mengucapkan terima kasih.",
    familyName: "Keluarga Santoso & Mahardika",
  },
};

export default demoElegant;
