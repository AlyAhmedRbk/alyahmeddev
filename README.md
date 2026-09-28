# Ali Ahmed — Portfolio

Production portfolio for Ali Ahmed, an AI and DevOps engineer based in Islamabad. The site is a Next.js application prepared for Vercel. Content comes from public GitHub repositories, Medium articles, and the public LinkedIn profile. It does not invent employers, metrics, or certifications.

## Features

- Dark-first and light themes, with the choice stored in the browser
- Case studies for the public AI, cloud, and security repositories
- Local article summaries that link to Medium
- Optional live GitHub profile snapshot, with a static fallback
- Contact form with client and server validation, a honeypot, and optional Resend delivery
- Metadata, Open Graph, sitemap, robots, and JSON-LD
- Custom 404 and error states

## Tech stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide icons
- Zod for the contact payload
- next-themes

## Architecture

Pages are server components. Client components are limited to the theme toggle, navigation menus, the system map, and the contact form. Content lives in `data/`, so a new project is a new object rather than a new layout.

GitHub is requested at request time with a 12-hour cache. If the API fails, the page uses the last verified counts. Articles are not fetched from Medium at runtime.

## Project structure

```text
app/                  routes, metadata, sitemap, contact API
components/           header, footer, projects, contact, theme
data/                 profile, projects, experience, skills, articles, services
lib/                  SEO helpers, GitHub snapshot, contact delivery
public/resume.pdf     replaceable resume
types/content.ts      shared content types
```

## Local development

Node.js 20 or newer.

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | For production | Canonical URLs, sitemap, and Open Graph |
| `RESEND_API_KEY` | No | Sends contact-form mail |
| `CONTACT_FROM_EMAIL` | With Resend | Verified sender address |
| `CONTACT_TO_EMAIL` | No | Inbox for form messages |
| `GITHUB_TOKEN` | No | Higher GitHub API rate limit |

Without Resend, the form still validates and tells the visitor to email `alyahmedrbk@gmail.com`. It does not report a successful delivery that did not happen.

## Production build

```bash
npm run build
npm run start
```

## Deployment

Import the repository in Vercel. The framework preset is Next.js. Set `NEXT_PUBLIC_SITE_URL` to the production origin, including `https`. Add the Resend variables only if you want the form to send mail. No `vercel.json` is required.

The downloadable resume is `public/resume.pdf`. Replace that file to publish a new version.

## Content updates

| Change | File |
| --- | --- |
| Name, title, summary, social links | `data/profile.ts` |
| Projects and case studies | `data/projects.ts` |
| Experience and certification | `data/experience.ts` |
| Skills | `data/skills.ts` |
| Services | `data/services.ts` |
| Articles | `data/articles.ts` |
| Resume | replace `public/resume.pdf` |

Project and article pages are generated from those files. Add a `slug` and the route appears on the next build.

## Analytics

Analytics is not installed. Add a provider later behind an environment variable so the page does not wait on a third-party script.
