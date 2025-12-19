// ===================================================================
// PAGE DATA TYPES AND CONTENT - FIXED VERSION
// This file defines the structure and content for all scrapbook pages
// ===================================================================

// PhotoData: Defines properties for individual photos in the scrapbook
export interface PhotoData {
  src: string // Image URL or path
  alt: string // Alt text for accessibility
  caption?: string // Optional caption text below photo
  variant?: "polaroid" | "vintage" | "filmstrip" | "taped" | "frameless" // Photo frame style
  rotation?: number // Rotation angle in degrees for tilted effect
  link?: string // Optional link URL when photo is clicked
}

// StickerData: Mario-themed stickers scattered on pages
export interface StickerData {
  type: "mushroom" | "star" | "coin" | "flower" | "block" | "pipe" // Mario element type
  position: string // Tailwind positioning classes (e.g., "top-4 right-4")
  size: string // Tailwind size classes (e.g., "w-8 h-8")
}

// MessageBox: Special text container with label
export interface MessageBox {
  label: string // Header label (e.g., "P.S.")
  text: string // Message content
}

// PageContent: Complete content structure for a double-page spread
export interface PageContent {
  leftTitle: string // Title for left page
  rightTitle: string // Title for right page
  leftPhoto?: PhotoData // Optional main photo on left page
  leftPhotos?: PhotoData[] // Multiple photos for left page
  leftText?: string[] // Text paragraphs for left page
  leftList?: string[] // Bullet list items for left page
  rightPhoto?: PhotoData // Single photo for right page
  rightPhotos?: PhotoData[] // Array of photos for right page
  rightText?: string[] // Text paragraphs for right page
  rightTextSections?: Array<{ title: string; content: string }> // Multiple text sections with titles
  messageBox?: MessageBox // Optional special message box
  stickers?: StickerData[] // Decorative Mario stickers
  instagramPosts?: string[] // Instagram post URLs (FIXED: changed from instagramPhotos)
  centerPhoto?: PhotoData // Large centered photo (for page 8)
}

// ===================================================================
// SCRAPBOOK PAGE CONTENTS - FIXED VERSION
// Array of page spreads - each item represents a left+right page pair
// ===================================================================

export const pageContents: PageContent[] = [
  // ===================================================================
  // PAGE 1 & 2: Profile and Journey
  // ===================================================================
  {
    leftTitle: "Hello, I'm...",
    rightTitle: "Pengalaman di LFM",

    // Left page: Personal biodata with profile photo
    leftPhoto: {
      src: "assets/img/p3.jpg",
      alt: "Mochammad Hanan Rais F.",
      caption: "That's me!",
      variant: "polaroid",
      rotation: -3,
    },
    leftText: [
      "Nama: Mochammad Hanan Rais F.",
      "Jurusan: Teknik Kelautan 22",
      "Angkatan: Kru 2022 Krusans",
      "Bidang: Fotografi",
    ],

    // Right page: Journey with 1 photo 1:1 with photostrap
    rightPhotos: [
      {
        src: "assets/img/p4.jpg",
        alt: "LFM Journey",
        variant: "polaroid",
        rotation: 2,
      },
    ],
    rightTextSections: [
      {
        title: "Alasan masuk LFM:",
        content: "nyari UKM yang cocok dengan minat di fotografi.",
      },
      {
        title: "Momen berkesan di LFM:",
        content: "nimpen kruwala bareng astri nagita hidayah, semua kegiatan jalan-jalan di LFM (terutama JAF).",
      },
    ],
    stickers: [
      { type: "mushroom", position: "top-4 right-4", size: "w-8 h-8" },
      { type: "star", position: "bottom-12 right-8", size: "w-6 h-6" },
    ],
  },

  // ===================================================================
  // PAGE 3 & 4: Activities and Memorable Things
  // ===================================================================
  {
    leftTitle: "Pernah ngapain aja di LFM?",
    rightTitle: "Hal paling memorable di LFM",

    // Left page: Activities with 1 photo 1:1
    leftPhotos: [
      {
        src: "assets/img/p6.jpg",
        alt: "LFM Activities",
        variant: "polaroid",
        rotation: -2,
      },
    ],
    leftText: [
      "Dulu awal2 banget abis lantik ikut jalan kecil ke rancaupas, daftar staff foto (kabid tafani kru 21) staff media & branding di foto, pernah jadi superf pas krusuhan nyakru, superf nya ka oxa, ka pelita, kak akmal, kak bahira, kak bani dll. ",
      "",
      "Awal 2024 ngestaff ganfest (logistik) sama kak ariant & kak zidos, pertengahan 2024 daftar timpen. Sempet jalan besar ke pulau seribu dan pernah ke jaff 2024. Pernah ikut beberapa proyekan LFM, doksos dalam wisgus & wisok.",
    ],

    // Right page: Memorable with 1 photo 16:9
    rightPhotos: [
      {
        src: "assets/img/p7.jpg",
        alt: "Memorable moment",
        variant: "polaroid",
        rotation: -3,
      },
    ],
    rightTextSections: [
      {
        title: "Hal paling memorable di LFM:",
        content:
          "Nyakru, paling memorable nimpen dan jadi staff, kamera ilang juga memorable.",
      },
      {
        title: "Hal paling memorable selama pendidikan:",
        content: "Ngasih tau fakta sebenarnya tentang caketang saat dulu nyakru.",
      },
    ],
    stickers: [
      { type: "coin", position: "top-8 left-8", size: "w-6 h-6" },
      { type: "block", position: "bottom-16 right-4", size: "w-10 h-10" },
    ],
  },

  // ===================================================================
  // PAGE 5 & 6: Instagram Posts and Favorite Food
  // ===================================================================
  {
    leftTitle: "Karya selama di LFM",
    rightTitle: "Makanan Favorit",

    // Left page: Instagram posts
    leftPhotos: [
      {
        src: "assets/img/ig1.jpg",
        alt: "Instagram Post 1",
        variant: "frameless",
        rotation: 2,
        link: "https://www.instagram.com/p/DDMdjVQyjYT/?img_index=1",
      },
      {
        src: "assets/img/ig2.jpg",
        alt: "Instagram Post 2",
        variant: "frameless",
        rotation: -2,
        link: "https://www.instagram.com/p/C1_OhDCpIXn/",
      },
    ],
    leftText: ["and many more"],

    // Right page: Favorite food
    rightText: ["Makanan Favorit: Indomie", "", "Makanan ga suka: Jeroan, daging kambing"],
    rightPhotos: [
      {
        src: "assets/img/ind1.jpeg",
        alt: "Indomie",
        variant: "polaroid",
        rotation: -5,
      },
      {
        src: "assets/img/ind2.jpeg",
        alt: "indomie 2",
        variant: "polaroid",
        rotation: 4,
      },
    ],
    stickers: [],
  },

  // ===================================================================
  // PAGE 7 & 8: Favorite Places and Message
  // ===================================================================
  {
    leftTitle: "Tempat makan favorit",
    rightTitle: "Pesan untuk pewawancara",

    // Left page: 2 photos of favorite places
    leftText: ["tempat makan favorit: Muji, dan semacam angkringan"],
    leftPhotos: [
      {
        src: "assets/img/tf1.jpeg",
        alt: "Muji",
        variant: "polaroid",
        rotation: -4,
      },
      {
        src: "assets/img/p1.jpg",
        alt: "Angkringan",
        variant: "polaroid",
        rotation: 3,
      },
    ],

    // Right page: Large centered photo with message and larger footer
    centerPhoto: {
      src: "assets/img/p2.jpg",
      alt: "Message",
      caption: "Nyakrunya dinikmati aja",
      variant: "polaroid",
      rotation: 0,
    },
    stickers: [
      { type: "mushroom", position: "top-4 right-4", size: "w-8 h-8" },
      { type: "coin", position: "bottom-4 left-4", size: "w-6 h-6" },
    ],
  },

  // ===================================================================
  // PAGE 9 & 10: Coming Soon and Never End
  // ===================================================================
  {
    leftTitle: "Coming Soon",
    rightTitle: "Never End",
    // Empty pages with just large text in the center
    leftText: [],
    rightText: [],
    stickers: [],
  },
]
