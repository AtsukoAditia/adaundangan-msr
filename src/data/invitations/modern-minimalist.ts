import type { InvitationConfig } from "@/types/invitation";

const modernMinimalist: InvitationConfig = {
  slug: "modern-minimalist",
  isPublished: true,
  theme: "modern-minimalist",

  metadata: {
    title: "Alex & Jordan — Modern Minimalist Wedding",
    description:
      "Join us in celebrating the union of Alex & Jordan. A modern minimalist wedding invitation.",
    ogImage: "/images/invitations/modern-minimalist/og.jpg",
    noIndex: false,
  },

  couple: {
    groom: {
      name: "Alexander Reid Mitchell",
      nickname: "Alex",
      fatherName: "James Mitchell",
      motherName: "Eleanor Mitchell",
      childOrder: "first son",
      photoUrl: "/images/invitations/modern-minimalist/groom.jpg",
      instagramHandle: "alex.mitchell",
      role: "groom",
    },
    bride: {
      name: "Jordan Claire Bennett",
      nickname: "Jordan",
      fatherName: "William Bennett",
      motherName: "Catherine Bennett",
      childOrder: "second daughter",
      photoUrl: "/images/invitations/modern-minimalist/bride.jpg",
      instagramHandle: "jordan.bennett",
      role: "bride",
    },
  },

  hero: {
    backgroundImage: "/images/invitations/modern-minimalist/hero.jpg",
  },

  quote: {
    text: "I have found the one whom my soul loves.",
    source: "Song of Solomon 3:4",
  },

  events: [
    {
      id: "ceremony",
      title: "Wedding Ceremony",
      startAt: "2027-03-13T10:00:00+07:00",
      endAt: "2027-03-13T11:30:00+07:00",
      venue: "The Glass Pavilion",
      address:
        "Jl. Merdeka No. 88, South Quarter, Jakarta Selatan, DKI Jakarta",
      mapsUrl:
        "https://maps.google.com/?q=The+Glass+Pavilion+Jakarta&ll=-6.26,106.81&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d106.81!3d-6.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000002",
      dressCode: "Black & White",
      description: "Please arrive 15 minutes before the ceremony begins.",
      isPrimary: true,
    },
    {
      id: "reception",
      title: "Reception",
      startAt: "2027-03-13T12:00:00+07:00",
      endAt: "2027-03-13T16:00:00+07:00",
      venue: "The Glass Pavilion — Grand Hall",
      address:
        "Jl. Merdeka No. 88, South Quarter, Jakarta Selatan, DKI Jakarta",
      mapsUrl:
        "https://maps.google.com/?q=The+Glass+Pavilion+Jakarta&ll=-6.26,106.81&z=15",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.3!2d106.81!3d-6.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v0000000000003",
      dressCode: "Monochrome Formal",
      isPrimary: false,
    },
  ],

  story: [
    {
      date: "September 2020",
      title: "First Encounter",
      description:
        "A chance meeting at a mutual friend's art exhibition. Alex was drawn to Jordan's quiet confidence, and Jordan was captivated by Alex's warm smile. It was the beginning of something neither expected.",
    },
    {
      date: "March 2022",
      title: "The Coffee Ritual",
      description:
        "What started as weekend coffee turned into daily calls. We discovered that the simplest moments — morning walks, quiet evenings, shared playlists — meant everything.",
    },
    {
      date: "November 2024",
      title: "The Proposal",
      description:
        "Under the soft glow of string lights on a quiet rooftop, Alex asked the question that changed everything. Jordan said yes before the sentence was even finished.",
    },
    {
      date: "March 2027",
      title: "Forever Begins",
      description:
        "Two lives, one story. We invite you to witness the next chapter as we begin our journey together — surrounded by the people who matter most.",
    },
  ],

  gallery: [
    {
      src: "/images/invitations/modern-minimalist/gallery-1.jpg",
      alt: "Alex and Jordan — minimalist portrait in black and white",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/modern-minimalist/gallery-2.jpg",
      alt: "Pre-wedding shoot at a modern architecture venue",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/modern-minimalist/gallery-3.jpg",
      alt: "Couple walking through a clean geometric corridor",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/modern-minimalist/gallery-4.jpg",
      alt: "Close-up of hands during the proposal moment",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/modern-minimalist/gallery-5.jpg",
      alt: "Alex and Jordan laughing together in natural light",
      width: 800,
      height: 600,
    },
    {
      src: "/images/invitations/modern-minimalist/gallery-6.jpg",
      alt: "Silhouette shot against a minimalist white backdrop",
      width: 800,
      height: 600,
    },
  ],

  audio: {
    src: "/audio/Modern_Minimalist_Song.mp3",
    title: "Our Song",
  },

  gift: {
    enabled: true,
    bankAccounts: [
      {
        bankName: "HSBC",
        accountNumber: "123456789012",
        accountName: "Alexander Reid Mitchell",
      },
      {
        bankName: "CIMB Niaga",
        accountNumber: "987654321098",
        accountName: "Jordan Claire Bennett",
      },
    ],
    shippingAddress:
      "Unit 15A, The Minimal Residence, Jl. Kemang Raya No. 12, Jakarta Selatan 12730",
    note:
      "Your presence is the greatest gift. If you wish to send something, here are the details.",
  },

  rsvp: {
    enabled: true,
    maxGuestCount: 4,
    deadline: "2027-03-01",
  },

  guestBook: {
    enabled: true,
    maxEntries: 50,
  },

  closing: {
    message:
      "We would be honored by your presence and blessings as we begin this new chapter together. Thank you for being part of our story.",
    familyName: "The Mitchell & Bennett Families",
  },
};

export default modernMinimalist;
