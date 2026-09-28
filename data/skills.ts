import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "DevOps & Cloud",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Generative AI",
    items: [
      "LLM applications",
      "RAG",
      "AI agents",
      "LangChain",
      "Embeddings",
      "Vector databases",
      "Prompt engineering",
      "Whisper",
      "AI automation",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "Node.js", "Flask", "Bash", "REST APIs"],
  },
  {
    title: "Data & Web",
    items: ["PostgreSQL", "MySQL", "MongoDB", "React", "Angular", "Vite", "Tailwind CSS", "Git"],
  },
];
