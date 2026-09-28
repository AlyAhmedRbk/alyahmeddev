import type { Fact, NavItem, Profile } from "@/types/content";

export const profile: Profile = {
  name: "Ali Ahmed",
  title: "DevOps & Generative AI Engineer",
  location: "Islamabad, Pakistan",
  email: "alyahmedrbk@gmail.com",
  headline:
    "I build and run cloud infrastructure on AWS, and the AI applications that sit on top of it. Terraform and CI/CD pipelines on one side, RAG systems and agent workflows on the other.",
  current: "DevOps | Generative AI Engineer at Core Elite Experts",
  social: {
    github: "https://github.com/AlyAhmedRbk",
    linkedin: "https://www.linkedin.com/in/ali-ahmed-7b5514276/",
    medium: "https://medium.com/@alyahmedrbk",
    email: "mailto:alyahmedrbk@gmail.com",
  },
  about: [
    "My work sits where infrastructure and AI meet. I provision AWS environments with Terraform, package services with Docker, and ship them through GitHub Actions pipelines with monitoring and logging in place from the start.",
    "On the AI side I build Python applications with LangChain: retrieval over vector databases, local transcription with Whisper, and supervisor-based agents that call tools and APIs to finish a task.",
    "I care about the parts that keep systems dependable. Private subnets instead of public servers, secrets kept out of code, deployments that can be repeated, and documentation the next engineer can follow. I write up much of what I build as step-by-step guides on Medium.",
  ],
};

export const heroFacts: Fact[] = [
  { label: "Experience", value: "4 roles since 2024" },
  { label: "Certified", value: "AWS Cloud Practitioner" },
  { label: "Education", value: "BS Computer Science, COMSATS" },
];

export const aboutFacts: Fact[] = [
  { label: "Based in", value: "Islamabad, Pakistan" },
  { label: "Focus", value: "AWS, Terraform, CI/CD, RAG, AI agents" },
  { label: "Languages", value: "Urdu, English" },
];

export const navigation: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const projectTypes = [
  "DevOps or cloud",
  "Generative AI application",
  "Full-time role",
  "Something else",
] as const;
