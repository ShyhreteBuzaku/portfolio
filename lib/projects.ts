import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "aviareps-rebranding",
    title: "Aviareps Rebranding",
    description:
      "Full redesign of Aviareps' main website—modern, fast, and content-driven with a headless CMS.",
    longDescription:
      "**Aviareps** is a leading travel representation company. I led the full rebrand and rebuild of their main website.\n\n**What I did:** A modern, responsive site built with Next.js for performance and SEO, powered by Sanity and Groq for flexible content. The new design reflects the brand’s global presence and makes it easy for partners and clients to find destinations, services, and contact information.\n\n**Result:** A faster, easier-to-update site that supports the team’s content workflow and improves the experience for visitors.",
    category: "websites",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Groq", "Sanity"],
    images: [
      "/aviareps-1.png",
      "/aviareps-2.png",
      "/aviareps-3.png",
      "/aviareps-4.png"
    ],
    websiteUrl: "https://aviareps.com"
  },
  {
    id: "aviareps-ecosystem",
    title: "Ecosystem Dashboard",
    description:
      "Internal dashboard for the Aviareps ecosystem—partners, destinations, and operations in one place.",
    longDescription:
      "The **Ecosystem Dashboard** is a web app for Aviareps’ internal and partner use, built as part of the wider Aviareps digital ecosystem.\n\n**Purpose:** Centralise destinations, partner info, and key operations so teams can work efficiently. The UI is built with Material UI for consistency and quick iteration.\n\n**Tech:** Next.js and TypeScript on the front end, with a focus on clarity and usability for daily use.",
    category: "websites",
    technologies: ["Next.js", "TypeScript", "Material UI"],
    images: [
      "/ecosystem-1.png",
      "/ecosystem-2.png",
    ],
    websiteUrl: "https://www.aviareps.world"
  },
  {
    id: "sogody-rebranding",
    title: "Sogody Rebranding",
    description:
      "Rebrand and rebuild of Sogody’s company website with a Jamstack setup and CMS-driven content.",
    longDescription:
      "**Sogody** is a software company that needed a fresh online presence. I delivered a full rebrand and new website while i was working for them.\n\n**Approach:** Gatsby for static performance and SEO, with Contentful as the headless CMS so the team can update content without touching code. GraphQL ties content and front end together.\n\n**Outcome:** A fast, maintainable site that clearly presents Sogody’s services and expertise.",
    category: "websites",
    technologies: ["React", "Gatsby", "GraphQL", "Contentful"],
    images: [
      "/sogody-1.png",
      "/sogody-2.png",
      "/sogody-3.png",
    ],
    websiteUrl: "https://sogody.com"
  },
  {
    id: "myolavson-rebranding",
    title: "MyOlavson",
    description:
      "Website for MyOlavson—modern stack with Sanity and Groq for content and a clear, user-focused design.",
    longDescription:
      "**MyOlavson** required a dedicated website that could grow with the product and stay easy to update.\n\n**Build:** React and Gatsby for the front end, with Sanity and Groq for content management. The design prioritises clarity and navigation so visitors can quickly understand the offering.\n\n**Delivered:** A performant, content-driven site that the client can manage themselves while keeping a consistent look and feel. Delivered while i was working for Sogody.",
    category: "websites",
    technologies: ["React", "Gatsby", "Groq", "Sanity"],
    images: [
      "/myolav-1.png",
      "/myolav-2.png",
      "/myolav-3.png",
      "/myolav-4.png",
    ],
    websiteUrl: "https://myolavson.com"
  },
  {
    id: "internation-residence",
    title: "International Residence",
    description:
      "Website for International Residence—property and residence information with a clean, accessible layout.",
    longDescription:
      "**International Residence** needed a clear, professional website to present their properties and residency services.\n\n**Solution:** A WordPress-based site with customisation where it mattered: structure, typography, and SVG assets for sharp visuals. PHP and MySQL power the backend so content can be updated without developer involvement.\n\n**Result:** A straightforward, easy-to-maintain site that helps visitors find the information they need.",
    category: "websites",
    technologies: ["Wordpress", "PHP", "MySQL", "SVG"],
    images: [
      "/residence-1.png",
      "/residence-2.png",
      "/residence-3.png",
      "/residence-4.png",
    ],
    websiteUrl: "https://international-residence.com"
  },
  {
    id: "old-gold-racing-app",
    title: "Old Gold Racing",
    description:
      "App for Old Gold Racing owners: MyStables updates, events & benefits, and the full horses library—form, breeding, photos and videos.",
    longDescription:
      "The Old Gold Racing App includes:\n\n**(1) MyStables** — where regular video, photo and text updates about your horse are posted.\n\n**(2) Events & Benefits** — Old Gold Racing frequently sets up stable visits, on-course events and open days; some are free and some require a fee. All are for Old Gold Racing owners only, and owners can apply to attend via the app with one tap. We also run owners-only competitions and benefits where owners can win free tickets and products and enjoy discounts on racing-related items like ticketing at racecourses.\n\n**(3) Horses** — keep abreast of the form and breeding of the Old Gold Racing string, and browse a library of photos and videos of the horses racing, training and horsing around.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase"],
    images: [
      "/ogr-2.png",
      "/ogr-1.png",
    ],
    appStoreUrl: "https://apps.apple.com/al/app/old-gold-racing/id1599057634",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ogr.app&hl=en&gl=US",
  },
  {
    id: "edbuy-app",
    title: "EdBuy",
    description:
      "Operator of the EdBuy Benefit Program: Shopping Points and Cashback for shoppers, and streamlined loyalty programs for partners worldwide.",
    longDescription:
      "The EDBUY app is the operator of the highly acclaimed **EdBuy Benefit Program**, which provides a wide range of appealing benefits for shoppers, retailers, and service providers worldwide.\n\n**Shoppers** can take advantage of Shopping Points and Cashback rewards with every purchase made through EDBUY Partners, whether they prefer online shopping or visiting physical stores.\n\n**Partners** gain advantages from streamlined customer loyalty programs that enhance their visibility and boost sales.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    images: [
      "/edbuy-1.png",
      "/edbuy-tablet.png",
    ],
  },
  {
    id: "forex-trading-app",
    title: "Forex Analytix",
    description:
      "The only financial education service that combines Macro, Technical Analysis, Candlestick, Harmonics and Elliott Wave on one platform—so you can track multiple markets successfully.",
    longDescription:
      "**ForexAnalytix** is the only financial educational service that offers all the popular types of market analysis (Macro, Basic Technical Analysis, Candlestick Analysis, Harmonics, Elliott Wave), seamlessly integrated and combined with several other market tools on a cutting-edge platform that won't ever stop expanding.\n\nTraders need to navigate a plethora of challenges, and one of the biggest is the need to track several concurrent markets successfully and efficiently. Some traders lack the capability and experience, or simply don't have enough time or resources.\n\n**That's where ForexAnalytix can help!**",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    images: [
      "/forex-1.png",
      "/forex-2.png",
    ],
    appStoreUrl: "https://apps.apple.com/al/app/forexanalytix/id1205281870",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.forexanalytix.forexanalytixforex&hl=en&gl=US",
  },
  {
    id: "hosted-app",
    title: "Hosted",
    description:
      "Hosted enables everyone to become an event host easily by making events available to a wider audience, while helping people find the exact event they're looking for.",
    longDescription:
      "**Hosted** enables everyone to become an event host easily, by making events available to a wider audience and enabling the audience to find the exact event they are looking for.\n\n**Users** can scan for events in real-time and request to join open, as well as private events with a single click.\n\n**Event hosts** are able to appeal to new attendees or customize for their specific target audience.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    images: [
      "/hosted-1.png",
      "/hosted-2.png",
    ],
    appStoreUrl: "https://apps.apple.com/al/app/gethosted/id1598820911",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gethosted.app&hl=en&gl=US",
  },
  {
    id: "rm-pos-app",
    title: "RM POS",
    description:
      "App-based point-of-sale system for new and small businesses. Transparent pricing and a powerful free plan. Inventory, staff, sales analytics and multi-store management.",
    longDescription:
      "**RM POS** is a standout app-based point-of-sale system and a great option for new and small businesses. Its wide range of features can be tailored to fit a variety of business types. The pricing is transparent and the free plan is one of the most powerful no-cost POS systems.\n\n**Features:**\n\n**Inventory management** — never run out of stock, track stock levels in real time.\n\n**Employee management** — easily manage your staff and make balanced decisions.\n\n**Sales analytics** — access your reports from smartphone, tablet or computer anytime, anywhere.\n\n**Multi-store management** — manage items, employees and customers across locations with a single account.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    images: [
      "/rmpos-1.png",
      "/rmpos-2.png",
    ],
  },
];
