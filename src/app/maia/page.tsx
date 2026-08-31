import type { Metadata } from "next";
import MaiaTest from "@/components/maia-test";

export const metadata: Metadata = {
  title: "English Level Check — MAIA Bootcamp",
  description:
    "A 20-minute test to find out where you stand — not to judge you, but to see if you're ready to work, build, and present in English inside a real international team.",
  alternates: {
    canonical: "/maia",
  },
  openGraph: {
    title: "English Level Check — MAIA Bootcamp",
    description:
      "A 20-minute test to find out where your tech English stands. Answer honestly. That's all we need.",
    url: "https://voxleap.com/maia",
    siteName: "VOXLEAP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Level Check — MAIA Bootcamp",
    description:
      "A 20-minute test to find out where your tech English stands. Answer honestly. That's all we need.",
  },
};

export default function MaiaPage() {
  return <MaiaTest />;
}