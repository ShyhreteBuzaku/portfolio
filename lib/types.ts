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
  otherLinks?: { label: string; url: string }[];
}
