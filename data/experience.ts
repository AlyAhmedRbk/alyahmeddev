import type { Certification, Education, Role } from "@/types/content";

export const experience: Role[] = [
  {
    title: "DevOps | Generative AI Engineer",
    company: "Core Elite Experts Pvt Ltd",
    period: "May 2026 – Present",
    location: "Gilgit, Pakistan · On-site",
    points: [
      "Work across DevOps and Generative AI engineering, focused on cloud infrastructure, automation, deployment workflows, and AI-enabled applications.",
      "Apply Docker, CI/CD, AWS, Python, LLM integrations, RAG workflows, and API-based automation in modern application environments.",
      "Support structured troubleshooting, documentation, deployment reliability, and repeatable engineering workflows.",
    ],
  },
  {
    title: "DevOps | Generative AI Engineer",
    company: "Calibreen International",
    period: "Sep 2025 – May 2026",
    location: "Gilgit, Pakistan · On-site",
    points: [
      "Contributed to DevOps and Generative AI initiatives spanning cloud infrastructure, automation, deployment, and AI application workflows.",
      "Worked with containerization, CI/CD, Python, LLM integrations, RAG, vector databases, and API-driven solutions.",
      "Supported debugging, technical documentation, and delivery of maintainable engineering solutions.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Cloudlem",
    period: "Jan 2025 – Sep 2025",
    location: "Gilgit, Pakistan · On-site",
    points: [
      "Built and supported scalable AWS infrastructure with an emphasis on reliability, automation, and repeatable deployments.",
      "Provisioned infrastructure with Terraform and scripting, reducing manual configuration across environments.",
      "Implemented monitoring and logging for operational visibility, troubleshooting, and incident investigation.",
      "Designed Dockerized deployments with GitHub Actions CI/CD and maintained structured deployment workflows.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Max Tech Pvt Ltd",
    period: "Oct 2024 – Dec 2024",
    location: "Islamabad, Pakistan · On-site",
    points: [
      "Developed responsive web applications with Angular, Node.js, and SQL.",
      "Contributed to full-stack development, REST API integration, debugging, documentation, and deployment.",
      "Built maintainable interfaces with attention to responsive design, usability, and performance.",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google · Coursera", date: "Jan 2026" },
  { name: "DevOps Mastery Specialization", issuer: "KodeKloud · Coursera", date: "Aug 2025" },
  { name: "Git and GitHub", issuer: "Google · Coursera", date: "Dec 2023" },
  { name: "Programming with JavaScript", issuer: "Meta · Coursera", date: "Dec 2023" },
];

export const education: Education[] = [
  {
    degree: "BS Computer Science",
    school: "COMSATS University Islamabad",
    location: "Islamabad",
    period: "2020 – 2024",
  },
  {
    degree: "Intermediate in Computer Science",
    school: "Army Public School and College Jutail",
    location: "Gilgit",
    period: "2018 – 2020",
  },
];
