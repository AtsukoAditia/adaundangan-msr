import type { InvitationConfig } from "@/types/invitation";

const romanticFloral: InvitationConfig = {
  slug: "romantic-floral",
  isPublished: true,
  theme: "romantic-floral",

  metadata: {
    title: "Pernikahan Bella & David — AdaUndangan",
    description:
      "Kami mengundang Anda untuk bersama kami merayakan hari bahagia pernikahan kami di tengah keindahan taman bunga.",
    ogImage: "/images/invitations/romantic-floral/og-image.jpg",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "David Arjuna Pratama",
      nickname: "David",
      fatherName: "Pratama Wijaya",
      motherName: "Lestari Handayani",
      childOrder: "putra kedua",
      photoUrl: "/images/invitations/romantic-floral/groom.jpg",
      instagramHandle: "david.arjuna",
      role: "groom",
    },
    bride: {
      name: "Bella Anindya Kusuma",
      nickname: "Bella",
      fatherName: "Kusuma Wardhana",
      motherName: "Anindya Putri",
      childOrder: "putri pertama",
      photoUrl: "/images/invitations/romantic-floral/bride.jpg",
      instagramHandle: "bella.anindya",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/romantic-floral/hero.jpg",
  },

  quote: {
    text: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong.",
    source: "1 Korintus 13:4",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      startAt: "2027-03-20T08:00:00+07:00",
      endAt: "2027-03-20T10:00:00+07:00",
      venue: "Taman Bunga Lestari",
      address:
        "Jl. Mawar Indah No. 15, Kelurahan Bunga, Kota Sejahtera, Jawa Barat",
      mapsUrl:
        "https://maps.google.com/?q=Taman+Bunga+Lestari&ll=-6.9,107.6&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000000",
      dressCode: "Soft Pastel",
      description:
        "Acara berlangsung di area taman terbuka, mohon mengenakan alas kaki yang nyaman.",
      isPrimary: true,
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      startAt: "2027-03-20T11:00:00+07:00",
      endAt: "2027-03-20T15:00:00+07:00",
      venue: "Garden Pavilion Lestari",
      address:
        "Jl. Mawar Indah No. 15, Kelurahan Bunga, Kota Sejahtera, Jawa Barat",
      mapsUrl:
        "https://maps.google.com/?q=Garden+Pavilion+Lestari&ll=-6.9,107.6&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000001",
      dressCode: "Formal Pastel Elegan",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "Maret 2021",
      title: "Bertemu di Taman Bunga",
      description:
        "Kami pertama kali bertemu di sebuah pameran bunga musim semi. Bella sedang mengagumi rangkaian mawar pink ketika David tidak sengaja menabrak vas bunga di sebelahnya. Momen canggung itu menjadi awal dari segalanya.",
    },
    {
      date: "Agustus 2022",
      title: "Kencan Pertama di Kebun Lavender",
      description:
        "David mengajak Bella ke kebun lavender di Lembang. Di antara barisan bunga ungu yang membentang, mereka menghabiskan sore bercerita tentang mimpi dan harapan masing-masing.",
    },
    {
      date: "Februari 2024",
      title: "Lamaran di Bawah Pohon Sakura",
      description:
        "David melamar Bella di bawah rindangnya pohon sakura yang sedang mekar penuh. Dengan cincin berhiaskan batu moonstone, ia berjanji untuk selalu menjaga senyum Bella selamanya.",
    },
    {
      date: "Maret 2027",
      title: "Hari Bahagia Kami",
      description:
        "Kini kami siap mengikat janji suci di tengah taman yang kami cintai, dikelilingi oleh orang-orang tercinta dan keindahan bunga-bunga yang menjadi saksi perjalanan cinta kami.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/romantic-floral/gallery-1.jpg",
      alt: "Bella dan David di taman bunga mawar",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/romantic-floral/gallery-2.jpg",
      alt: "Foto pra-nikah di kebun lavender",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/romantic-floral/gallery-3.jpg",
      alt: "Momen romantis saat sunset di taman",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/romantic-floral/gallery-4.jpg",
      alt: "Bella dengan buket bunga peony",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/romantic-floral/gallery-5.jpg",
      alt: "David dan Bella berjalan di lorong bunga",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/romantic-floral/gallery-6.jpg",
      alt: "Close-up cincin pertunangan di atas kelopak bunga",
      width: 800,
      height: 600,
    },
  ],

  audio: {
    src: "/audio/romantic-floral-theme.mp3",
    title: "A Thousand Years — Christina Perri",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "Bank Central Asia",
        accountNumber: "8765432100",
        accountName: "David Arjuna Pratama",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1234567890",
        accountName: "Bella Anindya Kusuma",
      },
    ],
    shippingAddress:
      "Jl. Mawar Indah No. 22, Kelurahan Bunga, Kota Sejahtera 40123, Jawa Barat",
    note:
      "Kehadiran Anda di hari istimewa kami sudah merupakan hadiah terindah. Namun apabila ingin memberikan tanda kasih, kami menyediakan informasi berikut.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 4,
    deadline: "2027-03-13",
  },

  guestBook: {
    enabled: true,
    maxEntries: 30,
  },

  closing: {
    message:
      "Dengan penuh kebahagiaan, kami mengundang Anda untuk berbagi momen istimewa ini bersama kami. Kehadiran dan doa restu Anda adalah kado terberharga bagi perjalanan cinta kami.",
    familyName: "Keluarga Pratama & Kusuma",
  },
};

export default romanticFloral;
