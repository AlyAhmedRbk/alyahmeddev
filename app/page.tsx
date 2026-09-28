import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { ProjectGrid } from "@/components/work/project-grid";
import { articles } from "@/data/articles";
import { certifications, education, experience } from "@/data/experience";
import { aboutFacts, heroFacts, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { formatDate } from "@/lib/seo";
import portrait from "@/public/images/ali-ahmed.jpg";

const socials = [
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "GitHub", href: profile.social.github },
  { label: "Medium", href: profile.social.medium },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div data-reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.5rem] sm:leading-[1.15]">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{intro}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <RevealObserver />

      <section id="top" className="container-page grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <p className="rise flex items-center gap-2.5 text-sm text-muted">
            <span className="status-dot" aria-hidden="true" />
            {profile.current}
          </p>
          <h1 className="rise mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl" style={{ ["--delay" as string]: "60ms" }}>
            Ali Ahmed
          </h1>
          <p className="rise mt-3 text-xl text-accent sm:text-2xl" style={{ ["--delay" as string]: "120ms" }}>
            {profile.title}
          </p>
          <p className="rise mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg" style={{ ["--delay" as string]: "180ms" }}>
            {profile.headline}
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ ["--delay" as string]: "240ms" }}>
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
          </div>
          <ul className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted" style={{ ["--delay" as string]: "300ms" }}>
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 hover:text-ink">
                  {item.label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </li>
          </ul>
        </div>

        <div className="portrait relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 hidden translate-x-4 translate-y-4 rounded-[20px] border border-accent/40 sm:block" />
          <div className="overflow-hidden rounded-[18px] border border-line bg-muted-bg">
            <Image
              src={portrait}
              alt="Portrait of Ali Ahmed"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <dl
          className="rise grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-3 lg:col-span-2"
          style={{ ["--delay" as string]: "360ms" }}
        >
          {heroFacts.map((fact) => (
            <div key={fact.label} className="bg-bg px-6 py-5">
              <dt className="eyebrow text-muted">{fact.label}</dt>
              <dd className="mt-2 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="about" className="defer-render border-t border-line py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="About" title="Infrastructure first, with AI built on solid ground." />
          <div data-reveal className="space-y-5 text-base leading-8 text-muted sm:text-lg sm:leading-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <dl className="grid gap-5 border-t border-line pt-6 text-base sm:grid-cols-3">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-muted">{fact.label}</dt>
                  <dd className="mt-2 leading-6 text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="experience" className="defer-render border-t border-line bg-elevated/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Experience"
            title="Where I have worked"
            intro="Four on-site roles across DevOps, Generative AI, and frontend engineering."
          />
          <ol className="mt-14 border-l border-line">
            {experience.map((role, index) => (
              <li key={`${role.company}-${role.period}`} data-reveal className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                    index === 0 ? "border-accent bg-accent" : "border-line bg-bg"
                  }`}
                />
                <div className="grid gap-2 lg:grid-cols-[14rem_1fr] lg:gap-10">
                  <div>
                    <p className="font-mono text-sm text-accent">{role.period}</p>
                    <p className="mt-1 text-sm text-muted">{role.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="mt-1 text-muted">{role.company}</p>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-7 text-muted">
                      {role.points.map((point) => (
                        <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.8rem] before:h-px before:w-2.5 before:bg-accent">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="defer-render border-t border-line py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I have built and deployed"
            intro="Each project links to its source code, and most have a written walkthrough of how it was built and deployed."
          />
          <div data-reveal className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
          <p data-reveal className="mt-10 text-sm text-muted">
            More repositories are on{" "}
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <section id="skills" className="defer-render border-t border-line bg-elevated/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Skills" title="Tools I work with" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <div key={group.title} data-reveal style={{ ["--delay" as string]: `${index * 70}ms` }} className="card p-6">
                <h3 className="font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-[0.95rem] text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div data-reveal>
              <h3 className="eyebrow">Certifications</h3>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                    </div>
                    {cert.date ? <p className="shrink-0 font-mono text-xs text-muted">{cert.date}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className="eyebrow">Education</h3>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {education.map((item) => (
                  <li key={item.degree} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <p className="font-medium">{item.degree}</p>
                      <p className="mt-0.5 text-sm text-muted">
                        {item.school}, {item.location}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="defer-render border-t border-line py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Writing"
              title="Notes from the build"
              intro="Step-by-step guides on deploying real applications to AWS and Linux servers."
            />
            <a
              data-reveal
              href={profile.social.medium}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary shrink-0 self-start sm:self-auto"
            >
              All articles on Medium <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ul className="mt-12 border-t border-line">
            {articles.map((article, index) => (
              <li key={article.href} data-reveal style={{ ["--delay" as string]: `${index * 60}ms` }} className="border-b border-line">
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-mono text-xs text-muted">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </span>
                  <span className="text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                    {article.title}
                    <span className="mt-1 block text-sm font-normal text-muted">{article.topic}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="hidden text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="defer-render border-t border-line bg-elevated/40 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s work together"
              intro="For DevOps, cloud, or Generative AI work, or a role on your team, send a short note about what you need."
            />
            <div data-reveal className="mt-8 space-y-4">
              <a href={profile.social.email} className="flex items-center gap-3 text-lg hover:text-accent">
                <Mail size={18} aria-hidden="true" className="text-accent" />
                {profile.email}
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted hover:text-ink">
                <ArrowUpRight size={18} aria-hidden="true" className="text-accent" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
