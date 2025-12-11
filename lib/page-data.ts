export interface PhotoData {
  src: string
  alt: string
  caption?: string
  variant?: "polaroid" | "vintage" | "filmstrip" | "taped"
  rotation?: number
}

export interface StickerData {
  type: "mushroom" | "star" | "coin" | "flower" | "block" | "pipe"
  position: string
  size: string
}

export interface MessageBox {
  label: string
  text: string
}

export interface PageContent {
  leftTitle: string
  rightTitle: string
  leftPhoto?: PhotoData
  leftText?: string[]
  leftList?: string[]
  rightPhotos?: PhotoData[]
  rightText?: string[]
  messageBox?: MessageBox
  stickers?: StickerData[]
}

export const pageContents: PageContent[] = [
  // Spread 1: Introduction
  {
    leftTitle: "Hello, I'm...",
    rightTitle: "About Me",
    leftPhoto: {
      src: "/placeholder.svg?height=200&width=200",
      alt: "My Profile Photo",
      caption: "That's me!",
      variant: "polaroid",
      rotation: -3,
    },
    leftText: ["Name: [Your Name]", "Age: [Your Age]", "Hometown: [Your City]"],
    rightText: [
      "Welcome to my scrapbook! I'm passionate about technology, creativity, and making a positive impact.",
      "This little book holds all my favorite memories from my incredible journey at LFM.",
    ],
    stickers: [
      { type: "mushroom", position: "top-4 right-4", size: "w-8 h-8" },
      { type: "star", position: "bottom-12 right-8", size: "w-6 h-6" },
    ],
  },

  // Spread 2: My Journey at LFM
  {
    leftTitle: "My LFM Timeline",
    rightTitle: "What I've Done",
    leftList: [
      "Started my journey with excitement",
      "Learned new skills every day",
      "Made amazing friends",
      "Completed challenging projects",
      "Grew as a person and professional",
    ],
    rightText: [
      "My time at LFM has been transformative. From day one, I knew this would be special.",
      "Every challenge became an opportunity, and every setback taught me resilience.",
    ],
    rightPhotos: [
      {
        src: "/placeholder.svg?height=120&width=120",
        alt: "Team Meeting",
        variant: "vintage",
        rotation: 3,
      },
      {
        src: "/placeholder.svg?height=120&width=120",
        alt: "Working",
        variant: "polaroid",
        rotation: -5,
      },
    ],
    stickers: [
      { type: "coin", position: "top-8 left-8", size: "w-6 h-6" },
      { type: "block", position: "bottom-16 right-4", size: "w-10 h-10" },
    ],
  },

  // Spread 3: Most Memorable Moments
  {
    leftTitle: "Memorable Moments",
    rightTitle: "The Stories Behind",
    leftPhoto: {
      src: "/placeholder.svg?height=180&width=180",
      alt: "Celebration Photo",
      caption: "Best day ever!",
      variant: "polaroid",
      rotation: 2,
    },
    leftText: [
      "Some moments are just too precious to forget. This page is dedicated to those times that made me smile the widest.",
    ],
    rightText: [
      "Every photo here tells a story. Stories of late nights, early mornings, and everything in between.",
      "These are the moments that shaped who I am today.",
    ],
    messageBox: {
      label: "Favorite Memory",
      text: "That time when our team pulled together to deliver an impossible deadline. We did it!",
    },
    stickers: [
      { type: "star", position: "top-4 right-4", size: "w-10 h-10" },
      { type: "flower", position: "bottom-8 left-4", size: "w-8 h-8" },
    ],
  },

  // Spread 4: Education Memories
  {
    leftTitle: "Learning Journey",
    rightTitle: "Growth & Discovery",
    leftList: [
      "Technical skills that amazed me",
      "Soft skills that changed me",
      "Leadership lessons I'll carry forever",
      "Creative problem-solving techniques",
    ],
    rightText: [
      "Education isn't just about what you learn—it's about who you become in the process.",
      "Every class, every workshop, every mentoring session added a new layer to my understanding.",
    ],
    rightPhotos: [
      {
        src: "/placeholder.svg?height=100&width=100",
        alt: "Studying",
        variant: "filmstrip",
        rotation: -2,
      },
    ],
    stickers: [{ type: "mushroom", position: "bottom-4 right-4", size: "w-12 h-12" }],
  },

  // Spread 5: My Work
  {
    leftTitle: "Projects & Work",
    rightTitle: "Skills I Gained",
    leftPhoto: {
      src: "/placeholder.svg?height=160&width=160",
      alt: "Project Demo",
      caption: "My favorite project",
      variant: "vintage",
      rotation: -4,
    },
    leftText: ["Building things that matter. Creating solutions that help people. That's what drives me."],
    rightList: [
      "Project Management",
      "Creative Problem Solving",
      "Team Collaboration",
      "Technical Excellence",
      "Communication",
    ],
    rightText: ["Each project taught me something new. Each challenge made me stronger."],
    stickers: [
      { type: "block", position: "top-6 right-6", size: "w-8 h-8" },
      { type: "coin", position: "bottom-10 left-6", size: "w-6 h-6" },
    ],
  },

  // Spread 6: Message for Interviewer
  {
    leftTitle: "A Note For You",
    rightTitle: "Dear Interviewer",
    leftPhoto: {
      src: "/placeholder.svg?height=150&width=150",
      alt: "Professional Photo",
      variant: "polaroid",
      rotation: 3,
    },
    leftText: ["Thank you for taking the time to explore my scrapbook. It means a lot to me."],
    rightText: [
      "Thank you for considering my application. This scrapbook represents not just my achievements, but my heart and soul.",
      "I hope it gives you a glimpse of who I am beyond my resume—a passionate, dedicated individual ready to make an impact.",
      "I look forward to the opportunity to bring this same energy and creativity to your team.",
    ],
    messageBox: {
      label: "P.S.",
      text: "I can't wait to hear from you and discuss how I can contribute to your amazing team!",
    },
    stickers: [
      { type: "star", position: "top-2 right-2", size: "w-8 h-8" },
      { type: "flower", position: "bottom-4 right-4", size: "w-10 h-10" },
    ],
  },

  // Spread 7: Message for Class of 2025
  {
    leftTitle: "Class of 2025",
    rightTitle: "You've Got This!",
    leftPhoto: {
      src: "/placeholder.svg?height=140&width=200",
      alt: "Group Photo",
      caption: "The best crew!",
      variant: "polaroid",
      rotation: -2,
    },
    leftText: ["To my fellow classmates—what a journey it's been! We made it through together."],
    rightText: [
      "Remember: Every challenge you faced made you stronger. Every late night was worth it.",
      "As we move forward, carry these memories with you. They're proof of what you can achieve.",
      "Stay curious. Stay hungry. Stay connected. We're all in this together!",
    ],
    messageBox: {
      label: "My Wish for You",
      text: "May your future be as bright as the stars in a Mario sky! Keep collecting those coins of success! 🌟",
    },
    stickers: [
      { type: "star", position: "top-4 left-4", size: "w-12 h-12" },
      { type: "mushroom", position: "bottom-4 right-4", size: "w-10 h-10" },
      { type: "coin", position: "top-8 right-8", size: "w-6 h-6" },
    ],
  },

  // Spread 8: Crew Photos
  {
    leftTitle: "My Amazing Crew",
    rightTitle: "Friends Forever",
    leftPhoto: {
      src: "/placeholder.svg?height=180&width=180",
      alt: "Team Photo",
      caption: "Squad goals!",
      variant: "polaroid",
      rotation: -3,
    },
    leftText: ["These are the people who made every day an adventure."],
    rightPhotos: [
      {
        src: "/placeholder.svg?height=100&width=100",
        alt: "Friend 1",
        variant: "vintage",
        rotation: 5,
      },
      {
        src: "/placeholder.svg?height=100&width=100",
        alt: "Friend 2",
        variant: "polaroid",
        rotation: -3,
      },
      {
        src: "/placeholder.svg?height=100&width=100",
        alt: "Friend 3",
        variant: "taped",
        rotation: 2,
      },
    ],
    rightText: ["True friends are the family we choose. I'm grateful for each and every one of you."],
    stickers: [
      { type: "star", position: "top-2 right-2", size: "w-8 h-8" },
      { type: "flower", position: "bottom-8 left-8", size: "w-8 h-8" },
    ],
  },

  // Spread 9: Fun Facts
  {
    leftTitle: "Fun Facts About Me",
    rightTitle: "My Hobbies",
    leftList: [
      "I can solve a Rubik's cube in under 2 minutes",
      "Coffee is my best friend",
      "I've watched every Mario game speedrun",
      "I dream in code sometimes",
      "Pizza is always the right answer",
    ],
    rightText: [
      "When I'm not working, you'll find me exploring new hobbies, reading, or gaming.",
      "Life is about balance, and these activities keep me grounded and happy.",
    ],
    rightPhotos: [
      {
        src: "/placeholder.svg?height=100&width=100",
        alt: "Gaming",
        variant: "vintage",
        rotation: -4,
      },
    ],
    stickers: [
      { type: "mushroom", position: "top-4 right-4", size: "w-10 h-10" },
      { type: "pipe", position: "bottom-4 left-4", size: "w-12 h-12" },
      { type: "block", position: "bottom-16 right-8", size: "w-8 h-8" },
    ],
  },

  // Spread 10: Back Cover / Closing
  {
    leftTitle: "The End",
    rightTitle: "Let's Connect!",
    leftText: [
      "Thank you for taking this journey with me through my LFM adventure.",
      "Every page of this scrapbook holds a piece of my heart. I hope you enjoyed it as much as I enjoyed creating it.",
      "This isn't goodbye—it's just the beginning of a new chapter!",
    ],
    rightText: [
      "I'd love to hear from you! Feel free to reach out:",
      "Email: your.email@example.com",
      "LinkedIn: linkedin.com/in/yourname",
      "Portfolio: yourportfolio.com",
    ],
    messageBox: {
      label: "Final Thoughts",
      text: "Thank you for being part of my story. Now let's write the next chapter together!",
    },
    stickers: [
      { type: "star", position: "top-4 right-4", size: "w-12 h-12" },
      { type: "mushroom", position: "bottom-8 left-8", size: "w-10 h-10" },
      { type: "coin", position: "top-12 left-4", size: "w-6 h-6" },
      { type: "flower", position: "bottom-4 right-8", size: "w-8 h-8" },
    ],
  },
]
