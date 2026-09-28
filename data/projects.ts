import type { Project } from "@/types/content";

const github = "https://github.com/AlyAhmedRbk";
const medium = "https://medium.com/@alyahmedrbk";

export const projects: Project[] = [
  {
    title: "AI Video Assistant",
    category: "Generative AI",
    summary:
      "Turns a YouTube URL into a searchable knowledge base: local Whisper transcription, smart chunking, map-reduce summaries, and RAG chat with timestamp-aware answers.",
    stack: ["Python", "faster-whisper", "LangChain", "ChromaDB", "Mistral"],
    links: [{ label: "GitHub", href: `${github}/AI-Video-Assistant-` }],
  },
  {
    title: "AI Security Analyst",
    category: "Generative AI",
    summary:
      "Multi-agent SOC assistant. A supervisor coordinates log, threat-intel, detection, response, and reporting agents, grounded in a local security knowledge base and mapped to MITRE ATT&CK.",
    stack: ["LangChain", "Multi-agent", "RAG", "ChromaDB", "Streamlit"],
    links: [{ label: "GitHub", href: `${github}/AI-Security-Analyst` }],
  },
  {
    title: "Knowledge Base Chatbot",
    category: "Generative AI",
    summary:
      "Document-aware chatbot for PDFs. Text is chunked, embedded, and stored in ChromaDB, and answers come back with the source pages they were drawn from.",
    stack: ["Python", "LangChain", "Mistral embeddings", "ChromaDB"],
    links: [{ label: "GitHub", href: `${github}/RAG-Project` }],
  },
  {
    title: "AI Research Assistant",
    category: "Generative AI",
    summary:
      "Tool-using agent that decides when a question needs live web search or weather data, then returns a clean, structured answer instead of guessing from model memory.",
    stack: ["LangChain", "LangGraph", "Mistral", "Tavily", "Streamlit"],
    links: [{ label: "GitHub", href: `${github}/AI-Research-Assistant` }],
  },
  {
    title: "Scalable & Secure Web App on AWS",
    category: "Cloud & DevOps",
    summary:
      "Highly available web tier with an Auto Scaling Group scaling from 2 to 4 instances on CPU, an Application Load Balancer, and AWS WAF. The Terraform version adds private subnets, Multi-AZ RDS, and SSM access.",
    stack: ["Terraform", "EC2", "ALB", "AWS WAF", "RDS"],
    links: [
      { label: "GitHub", href: `${github}/Scalable-Web-Application-Project` },
      {
        label: "Article",
        href: `${medium}/building-a-scalable-and-secure-web-application-on-aws-using-ec2-auto-scaling-group-alb-and-waf-2a4bc920f334`,
      },
    ],
  },
  {
    title: "TaskFlow on AWS",
    category: "Cloud & DevOps",
    summary:
      "Flask task manager on a secure three-tier layout: custom VPC, ALB in front, backend in private subnets behind Gunicorn and Nginx, and MySQL on RDS.",
    stack: ["Flask", "VPC", "ALB", "EC2", "RDS MySQL"],
    links: [
      {
        label: "Article",
        href: `${medium}/how-i-built-deployed-taskflow-a-secure-task-manager-on-aws-using-vpc-alb-ec2-rds-295969c507ca`,
      },
    ],
  },
  {
    title: "Blood Donation Platform",
    category: "Cloud & DevOps",
    summary:
      "React and TypeScript app with donor, hospital, and admin roles. Every push to main builds a Docker image, pushes it to ECR, and rolls out to Amazon ECS through GitHub Actions.",
    stack: ["React", "Docker", "GitHub Actions", "ECR", "ECS"],
    links: [
      { label: "Live", href: "https://blood-donation-app-mocha.vercel.app" },
      { label: "GitHub", href: `${github}/Blood-Donation-App` },
      {
        label: "Article",
        href: `${medium}/building-and-deploying-a-full-stack-react-blood-donation-system-to-aws-ecs-with-github-actions-8e46a5dfd6f3`,
      },
    ],
  },
  {
    title: "ShopSphere",
    category: "Cloud & DevOps",
    summary:
      "SaaS-style e-commerce frontend served by Nginx in Docker, with a GitHub Actions pipeline that deploys the container stack to AWS EC2.",
    stack: ["React", "Tailwind", "Docker", "Nginx", "EC2"],
    links: [
      { label: "GitHub", href: `${github}/ShopSphere-App` },
      { label: "Article", href: `${medium}/building-shopsphere-a-production-ready-devops-e-commerce-app-934e5ee54712` },
    ],
  },
  {
    title: "SecureVault",
    category: "Security",
    summary:
      "Zero-knowledge password manager. Vault entries are encrypted in the browser with AES-256-GCM and PBKDF2-derived keys, so the API only stores ciphertext.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker Compose"],
    links: [{ label: "GitHub", href: `${github}/securevault-app` }],
  },
  {
    title: "SecureBrowse Lite",
    category: "Security",
    summary:
      "Chrome extension and Flask backend that scan URLs and files through the VirusTotal API, with color-coded verdicts, MySQL scan history, and a dashboard.",
    stack: ["Chrome extension", "Flask", "VirusTotal API", "MySQL"],
    links: [{ label: "GitHub", href: `${github}/Secure-Browser-lite` }],
  },
];
