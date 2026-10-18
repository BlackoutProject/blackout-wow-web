import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "./globals.css";
import "./portal.css";
import "./warcraft.css";
import "./blackout.css";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/components/LanguageProvider";
import { languageCookieName, resolveAppLanguage } from "@/i18n/settings";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  withBaseUrl,
} from "@/lib/seo";

const geistSans = localFont({src: [{path: '../../public/fonts/inter-400.ttf', weight: '400'}, {path: '../../public/fonts/inter-500.ttf', weight: '500'}, {path: '../../public/fonts/inter-600.ttf', weight: '600'}, {path: '../../public/fonts/inter-700.ttf', weight: '700'}], variable: '--font-geist-sans', display: 'swap'});
const cinzel = localFont({src: [{path: '../../public/fonts/cinzel-400.ttf', weight: '400'}, {path: '../../public/fonts/cinzel-600.ttf', weight: '600'}, {path: '../../public/fonts/cinzel-700.ttf', weight: '700'}], variable: '--font-cinzel', display: 'swap'});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  keywords: [...SITE_KEYWORDS],
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: withBaseUrl("/"),
    images: [
      {
        url: withBaseUrl("/logo-transparent.png"),
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [withBaseUrl("/logo-transparent.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: ["es", "en", "pt"],
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
} as const;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = resolveAppLanguage(cookieStore.get(languageCookieName)?.value);

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${cinzel.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <LanguageProvider initialLanguage={lang}>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
