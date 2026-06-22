import type { InvitationConfig } from "@/types/invitation";

const lancelotOdette: InvitationConfig = {
  slug: "lancelot-odette",
  isPublished: true,
  theme: "elegant",

  metadata: {
    title: "Pernikahan Lancelot & Odette — AdaUndangan",
    description:
      "Kami mengundang Anda untuk bersama kami merayakan hari bahagia pernikahan Lancelot dan Odette.",
    ogImage: "/images/invitations/lancelot-odette/hero.webp",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "Lancelot",
      nickname: "Lancelot",
      fatherName: "Bpk. Thamuz",
      motherName: "Ibu Hilda",
      childOrder: "putra pertama",
      photoUrl: "/images/invitations/lancelot-odette/groom.webp",
      role: "groom",
    },
    bride: {
      name: "Odette",
      nickname: "Odette",
      fatherName: "Bpk. Balmon",
      motherName: "Ibu Zetian",
      childOrder: "putri kedua",
      photoUrl: "/images/invitations/lancelot-odette/bride.webp",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/lancelot-odette/hero.webp",
  },

  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya.",
    source: "QS. Ar-Rum: 21",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      startAt: "2026-07-04T08:00:00+07:00",
      endAt: "2026-07-04T10:00:00+07:00",
      venue: "Indraprasta PGRI University Campus A",
      address: "Indraprasta PGRI University Campus A",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.700284253898!2d106.85055899999999!3d-6.303054399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed88d781cda1%3A0xb712ed99f1e9c7da!2sIndraprasta%20PGRI%20University%20Campus%20A!5e0!3m2!1sen!2sid!4v1782141278556!5m2!1sen!2sid",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.700284253898!2d106.85055899999999!3d-6.303054399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed88d781cda1%3A0xb712ed99f1e9c7da!2sIndraprasta%20PGRI%20University%20Campus%20A!5e0!3m2!1sen!2sid!4v1782141278556!5m2!1sen!2sid",
      dressCode: "Formal Elegan",
      description: "Mohon hadir tepat waktu.",
      isPrimary: true,
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      startAt: "2026-07-04T11:00:00+07:00",
      endAt: "2026-07-04T15:00:00+07:00",
      venue: "Kampus B Unindra",
      address: "Kampus B Unindra",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.7606817073583!2d106.8594491!3d-6.2951493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed80b84ac47d%3A0x640561dd89719c88!2sKampus%20B%20Unindra!5e0!3m2!1sen!2sid!4v1782141303084!5m2!1sen!2sid",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.7606817073583!2d106.8594491!3d-6.2951493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed80b84ac47d%3A0x640561dd89719c88!2sKampus%20B%20Unindra!5e0!3m2!1sen!2sid!4v1782141303084!5m2!1sen!2sid",
      dressCode: "Formal Elegan",
      description:
        "Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara resepsi pernikahan kami.",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "Januari 2022",
      title: "Pertama Bertemu",
      description:
        "Kami pertama kali bertemu dalam suasana yang sederhana. Tidak ada yang menyangka bahwa pertemuan tersebut menjadi awal dari cerita indah kami.",
    },
    {
      date: "Juni 2023",
      title: "Mulai Saling Mengenal",
      description:
        "Seiring berjalannya waktu, kami mulai saling mengenal lebih dekat, saling memahami, dan saling mendukung satu sama lain.",
    },
    {
      date: "Desember 2024",
      title: "Menuju Keseriusan",
      description:
        "Dengan restu keluarga, kami memutuskan untuk melangkah ke hubungan yang lebih serius dan mempersiapkan hari bahagia kami.",
    },
    {
      date: "4 Juli 2026",
      title: "Hari Bahagia",
      description:
        "Dengan penuh rasa syukur, kami siap memulai babak baru kehidupan bersama sebagai suami dan istri.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/lancelot-odette/gallery1.webp",
      alt: "Foto prewedding Lancelot dan Odette 1",
      width: 800,
      height: 1067,
    },
    {
      src: "/images/invitations/lancelot-odette/gallery2.webp",
      alt: "Foto prewedding Lancelot dan Odette 2",
      width: 800,
      height: 1067,
    },
    {
      src: "/images/invitations/lancelot-odette/gallery3.webp",
      alt: "Foto prewedding Lancelot dan Odette 3",
      width: 800,
      height: 1067,
    },
    {
      src: "/images/invitations/lancelot-odette/gallery4.webp",
      alt: "Foto prewedding Lancelot dan Odette 4",
      width: 800,
      height: 1067,
    },
    {
      src: "/images/invitations/lancelot-odette/gallery5.webp",
      alt: "Foto prewedding Lancelot dan Odette 5",
      width: 800,
      height: 1067,
    },
    {
      src: "/images/invitations/lancelot-odette/gallery6.webp",
      alt: "Foto prewedding Lancelot dan Odette 6",
      width: 800,
      height: 1067,
    },
  ],

  audio: {
    src: "/audio/Beautiful_In_White.mp3",
    title: "Lagu Pernikahan Lancelot & Odette",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "Bank Demo Indonesia",
        accountNumber: "0000000000",
        accountName: "Lancelot",
      },
      {
        bankName: "Bank Demo Nasional",
        accountNumber: "1111111111",
        accountName: "Odette",
      },
    ],
    shippingAddress:
      "Jl. Contoh No. 1, Kelurahan Demo, Kota Fiktif 12345 (Ini adalah alamat demo fiktif)",
    note: "Kehadiran dan doa restu Anda adalah hadiah terbaik bagi kami. Namun jika ingin memberikan hadiah, berikut informasinya.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 5,
    deadline: "2026-06-27",
  },

  guestBook: {
    enabled: true,
    maxEntries: 20,
  },

  closing: {
    message:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restu Anda, kami mengucapkan terima kasih.",
    familyName: "Keluarga Thamuz & Balmon",
  },
};

export default lancelotOdette;
