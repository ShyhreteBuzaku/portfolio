export type ProjectCategory = "websites" | "mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  images: string[];
  websiteUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  otherLinks?: { label: string; url: string }[];
}
