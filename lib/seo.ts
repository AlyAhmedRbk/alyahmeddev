import { education, experience } from "@/data/experience";
import { profile } from "@/data/profile";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return value.replace(/\/$/, "");
}

export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function personJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.headline,
    url,
    image: `${url}/images/ali-ahmed.jpg`,
    email: profile.social.email,
    worksFor: { "@type": "Organization", name: experience[0].company },
    alumniOf: { "@type": "CollegeOrUniversity", name: education[0].school },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.medium],
    knowsAbout: ["DevOps", "Amazon Web Services", "Terraform", "CI/CD", "Docker", "Generative AI", "RAG", "AI agents"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: getSiteUrl(),
    description: profile.headline,
  };
}
