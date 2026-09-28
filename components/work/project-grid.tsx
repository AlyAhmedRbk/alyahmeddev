"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/types/content";

const filters: Array<"All" | ProjectCategory> = ["All", "Generative AI", "Cloud & DevOps", "Security"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const count = item === "All" ? projects.length : projects.filter((p) => p.category === item).length;
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`min-h-10 rounded-lg border px-4 text-sm transition-colors ${
                selected
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-line text-muted hover:border-accent/60 hover:text-ink"
              }`}
            >
              {item} <span className="ml-1 font-mono text-xs text-muted">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.title} className="card lift flex flex-col p-6 animate-[rise_0.5s_ease_both]">
            <p className="font-mono text-xs text-accent">{project.category}</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{project.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-muted">{project.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.stack.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="sr-only">for {project.title} (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
