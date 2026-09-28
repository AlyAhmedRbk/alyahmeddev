import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "GitHub", href: profile.social.github },
  { label: "Medium", href: profile.social.medium },
  { label: "Email", href: profile.social.email },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em]">ALI AHMED</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-underline hover:text-ink"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-ink">
            Top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container-page pb-8 text-xs text-muted">© {new Date().getFullYear()} Ali Ahmed</div>
    </footer>
  );
}
