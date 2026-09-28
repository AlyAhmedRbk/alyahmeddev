export interface SocialLinks {
  github: string;
  linkedin: string;
  medium: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  headline: string;
  current: string;
  social: SocialLinks;
  about: string[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export type ProjectCategory = "Generative AI" | "Cloud & DevOps" | "Security";

export interface ProjectLink {
  label: "GitHub" | "Article" | "Live";
  href: string;
}

export interface Project {
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Article {
  title: string;
  date: string;
  topic: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
}
