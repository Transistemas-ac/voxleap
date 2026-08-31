import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/hero.css";
import "../styles/what.css";
import "../styles/programs.css";
import "../styles/founder.css";
import "../styles/cta.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voxleap.com"),
  title: {
    default: "VOXLEAP — Global English Coaching Studio",
    template: "%s | VOXLEAP",
  },
  description:
    "A communication coaching studio that helps professionals develop their communication skills in English through conversations that matter.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VOXLEAP — Global English Coaching Studio",
    description:
      "A communication coaching studio that helps professionals develop their communication skills in English through conversations that matter.",
    url: "https://voxleap.com",
    siteName: "VOXLEAP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOXLEAP — Global English Coaching Studio",
    description:
      "A communication coaching studio that helps professionals develop their communication skills in English through conversations that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06070c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "VOXLEAP",
      url: "https://voxleap.com",
      logo: "https://voxleap.com/founder.png",
      founder: {
        "@type": "Person",
        name: "Matías Sandoval",
      },
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      name: "VOXLEAP",
      description:
        "Communication coaching studio helping professionals develop their English communication skills through conversations that matter.",
      url: "https://voxleap.com",
      areaServed: ["Argentina", "Brazil", "Chile", "Spain"],
      founder: {
        "@type": "Person",
        name: "Matías Sandoval",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}