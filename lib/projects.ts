import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A full-featured admin dashboard for managing products, orders, and analytics. Built with a focus on performance and usability.",
    longDescription:
      "A comprehensive admin dashboard that allows store owners to manage products, view orders, track analytics with charts, and handle inventory. Includes responsive product listings, mobile preview, and data visualizations.",
    category: "websites",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    ],
    websiteUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description:
      "A conversion-optimized landing page with pricing tiers, testimonials, and a modern gradient-based design system.",
    longDescription:
      "Landing page designed for high conversion with clear pricing tiers, social proof via testimonials, and a bold gradient-based visual system. Integrated with Stripe for payments and deployed on Vercel.",
    category: "websites",
    technologies: ["Next.js", "Framer Motion", "Stripe", "Vercel"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    ],
    websiteUrl: "https://example.com/saas",
    githubUrl: "https://github.com/example/saas-landing",
  },
  {
    id: "fitness-app",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and progress with sync across devices.",
    longDescription:
      "Flutter app that lets users log workouts, track calories, set goals, and view progress over time. Supports dark mode and offline access with cloud sync.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      "https://images.unsplash.com/photo-1593079865023-22d3c8b2f0b2?w=800&q=80",
    ],
    websiteUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/example/fitness-app",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Real-time collaborative task board with drag-and-drop, labels, and team channels.",
    longDescription:
      "Web app for teams to manage tasks with boards, lists, and cards. Features real-time updates, drag-and-drop, labels, due dates, and team channels. Built with Next.js and WebSockets.",
    category: "websites",
    technologies: ["Next.js", "React", "Tailwind CSS", "WebSockets", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ],
    websiteUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/task-manager",
  },
];
