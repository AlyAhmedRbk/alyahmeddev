import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppThemeProvider } from "@/components/theme/theme-provider";
import { profile } from "@/data/profile";
import { getSiteUrl, personJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: "400",
  preload: false,
  display: "swap",
});

const siteUrl = getSiteUrl();
const title = `${profile.name} · ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.headline,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.social.linkedin }],
  creator: profile.name,
  keywords: [
    "Ali Ahmed",
    "DevOps engineer",
    "Generative AI engineer",
    "AWS",
    "Terraform",
    "CI/CD",
    "RAG",
    "AI agents",
    "Islamabad",
    "Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: profile.name,
    title,
    description: profile.headline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1320" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [personJsonLd(), websiteJsonLd()];

  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen antialiased">
        <AppThemeProvider>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </AppThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
