import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/legal.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the VOXLEAP website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main id="main" className="legal">
      <div className="wrap legal-inner">
        <Link href="/" className="back">
          ← Back to VOXLEAP
        </Link>
        <h1>Terms of Service</h1>
        <p className="updated">Last updated: August 2026</p>

        <h2>Operator</h2>
        <p>
          This website is operated by VOXLEAP, a communication coaching studio
          founded by Matías Sandoval. Contact:{" "}
          <a href="mailto:sandovalmatiasezequiel@gmail.com">
            sandovalmatiasezequiel@gmail.com
          </a>
          .
        </p>

        <h2>Services</h2>
        <p>
          VOXLEAP provides English communication coaching for professionals and
          teams, including the 1:1 Communication Coaching, Corporate Groups,
          Global Architects and MAIA Bootcamp programs. The MAIA English level
          test is provided free of charge as an evaluation tool and does not
          constitute a formal certification.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this website — including text, design, illustrations
          and brand assets — is the property of VOXLEAP unless otherwise
          stated. You may not reproduce or redistribute it without prior
          written consent.
        </p>

        <h2>Trademarks of third parties</h2>
        <p>
          Company logos displayed in the “Trusted by professionals from”
          section (Microsoft, LVMH, Iron Mountain, Grey, YPF, and others) are
          the property of their respective owners and are shown solely to
          refer to brands whose professionals have been trained by VOXLEAP.
          This is a nominative use and does not imply endorsement or
          affiliation.
        </p>

        <h2>External links</h2>
        <p>
          The site links to external services, including Google Calendar and
          the Global Architects website. VOXLEAP is not responsible for the
          content or practices of third-party websites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          The information on this website is provided for general purposes.
          VOXLEAP makes no warranties about the accuracy of the content and is
          not liable for any loss arising from the use of the site or of the
          MAIA test results.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be updated from time to time. The latest version will
          always be published on this page with its effective date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Write to{" "}
          <a href="mailto:sandovalmatiasezequiel@gmail.com">
            sandovalmatiasezequiel@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}