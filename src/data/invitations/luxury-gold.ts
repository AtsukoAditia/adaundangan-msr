import type { InvitationConfig } from "@/types/invitation";

const luxuryGold: InvitationConfig = {
  slug: "luxury-gold",
  isPublished: true,
  theme: "luxury-gold",

  metadata: {
    title: "Pernikahan Victoria & Alexander — AdaUndangan",
    description:
      "Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dan merayakan momen istimewa pernikahan kami.",
    ogImage: "/images/invitations/luxury-gold/og-image.jpg",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "Alexander Reinhardt Wijaya",
      nickname: "Alexander",
      fatherName: "Richard Wijaya",
      motherName: "Catherine Halim",
      childOrder: "putra kedua",
      photoUrl: "/images/invitations/luxury-gold/groom.jpg",
      instagramHandle: "alexander.wijaya",
      role: "groom",
    },
    bride: {
      name: "Victoria Anastasia Kusuma",
      nickname: "Victoria",
      fatherName: "Jonathan Kusuma",
      motherName: "Elisabeth Tanoto",
      childOrder: "putri pertama",
      photoUrl: "/images/invitations/luxury-gold/bride.jpg",
      instagramHandle: "victoria.kusuma",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/luxury-gold/hero.jpg",
  },

  quote: {
    text: "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.",
    source: "Matius 19:6",
  },

  events: [
    {
      id: "akad",
      title: "Holy Matrimony",
      startAt: "2027-06-12T09:00:00+07:00",
      endAt: "2027-06-12T11:00:00+07:00",
      venue: "The Grand Ballroom — The Ritz-Carlton",
      address:
        "Lantai 5, Pacific Place, Jl. Jend. Sudirman Kav. 52–53, Jakarta Selatan 12190",
      mapsUrl:
        "https://maps.google.com/?q=The+Ritz+Carlton+Pacific+Place+Jakarta&ll=-6.2268,106.8073&z=16",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.2!2d106.8073!3d-6.2268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1700000000000",
      dressCode: "Black Tie & Gold Accents",
      description:
        "Upacara pemberkatan suci akan dilaksanakan dengan khidmat. Mohon hadir 15 menit sebelum acara dimulai.",
      isPrimary: true,
    },
    {
      id: "resepsi",
      title: "Grand Wedding Reception",
      startAt: "2027-06-12T18:00:00+07:00",
      endAt: "2027-06-12T21:00:00+07:00",
      venue: "The Imperial Ballroom — Hotel Mulia Senayan",
      address:
        "Jl. Asia Afrika, Senayan, Jakarta Selatan 10270",
      mapsUrl:
        "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta&ll=-6.2273,106.7971&z=16",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.3!2d106.7971!3d-6.2273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1700000000001",
      dressCode: "Formal Black Tie with Gold",
      description:
        "Bergabunglah bersama kami dalam perjamuan makan malam mewah diiringi alunan musik orkestra.",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "September 2019",
      title: "A Chance Encounter in Paris",
      description:
        "Di bawah cahaya lampu Eiffel yang gemilang, Victoria dan Alexander pertama kali bertemu dalam sebuah pameran seni. Sebuah percakapan singkat tentang lukisan Monet menjadi awal dari segalanya.",
    },
    {
      date: "Maret 2021",
      title: "Falling in Love",
      description:
        "Setelah dua tahun saling mengenal melalui perjalanan ke berbagai kota — dari Tokyo hingga Vienna — kami menyadari bahwa setiap momen bersama terasa begitu sempurna dan penuh makna.",
    },
    {
      date: "Desember 2025",
      title: "The Proposal at Lake Como",
      description:
        "Di tepi Danau Como yang memukau, dengan latar pegunungan Alpen dan cahaya senja keemasan, Alexander berlutut dan mengucapkan kata-kata yang mengubah hidup kami selamanya.",
    },
    {
      date: "Juni 2027",
      title: "Forever Begins",
      description:
        "Dan kini, kami siap mengikat janji suci di hadapan Tuhan dan orang-orang tercinta, mengawali babak baru kehidupan bersama yang penuh cinta dan kebahagiaan.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/luxury-gold/gallery-1.jpg",
      alt: "Victoria & Alexander — Pre-wedding di taman bunga",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/luxury-gold/gallery-2.jpg",
      alt: "Victoria & Alexander — Pre-wedding di ballroom",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/luxury-gold/gallery-3.jpg",
      alt: "Victoria & Alexander — Foto bersama di gazebo emas",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/luxury-gold/gallery-4.jpg",
      alt: "Momen pertunangan di Lake Como, Italia",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/luxury-gold/gallery-5.jpg",
      alt: "Victoria & Alexander — Pre-wedding di rooftop kota",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/luxury-gold/gallery-6.jpg",
      alt: "Close-up cincin berlian pertunangan",
      width: 800,
      height: 600,
    },
  ],

  audio: {
    src: "/audio/All_Of_Me.mp3",
    title: "All of Me — John Legend",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "BCA",
        accountNumber: "8820145678",
        accountName: "Alexander Reinhardt Wijaya",
      },
      {
        bankName: "Mandiri",
        accountNumber: "1310098765432",
        accountName: "Victoria Anastasia Kusuma",
      },
    ],
    shippingAddress:
      "The Ritz-Carlton Jakarta, Pacific Place Tower 3, Jl. Jend. Sudirman Kav. 52–53, Jakarta Selatan 12190",
    note:
      "Kehadiran dan doa restu Anda merupakan hadiah terindah bagi kami. Apabila berkenan memberikan tanda kasih, berikut informasi yang dapat membantu.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 4,
    deadline: "2027-06-01",
  },

  guestBook: {
    enabled: true,
    maxEntries: 50,
  },

  closing: {
    message:
      "Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari paling istimewa dalam hidup kami. Kehadiran dan doa restu Anda adalah anugerah yang tak ternilai harganya.",
    familyName: "Keluarga Wijaya & Keluarga Kusuma",
  },
};

export default luxuryGold;
