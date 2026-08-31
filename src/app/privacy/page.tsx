import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for VOXLEAP — how we collect, use and protect your personal data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal">
      <div className="wrap legal-inner">
        <Link href="/" className="back">
          ← Back to VOXLEAP
        </Link>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: August 2026</p>

        <h2>Who we are</h2>
        <p>
          VOXLEAP is a communication coaching studio founded by Matías
          Sandoval. This policy explains how personal data is handled on this
          website (the “Site”), including the MAIA Bootcamp English level test
          at /maia.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>MAIA test answers</strong>: when you submit the English
            level test, your answers and open response are sent by email to the
            VOXLEAP team via the third-party service FormSubmit.
          </li>
          <li>
            <strong>No account, payment or browsing data</strong>: the Site
            does not require registration and does not collect analytics,
            cookies or tracking identifiers.
          </li>
        </ul>

        <h2>Why we process it</h2>
        <p>
          Your test answers are used exclusively to evaluate your English level
          and follow up with you about coaching programs that may fit your
          goals. We do not sell, rent or share your data with third parties for
          marketing purposes.
        </p>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <strong>FormSubmit</strong> (formsubmit.co) — receives the test
            submission and forwards it by email. FormSubmit&apos;s own privacy
            terms apply to the transmission of the message.
          </li>
          <li>
            <strong>Google Calendar</strong> — the “Book” buttons link to an
            external Google Calendar booking page; your booking data is handled
            by Google under its own privacy policy.
          </li>
        </ul>

        <h2>Retention</h2>
        <p>
          Submitted answers are kept only as long as needed to follow up on
          your inquiry, and are deleted on request.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to access, correct or delete the personal data we
          hold about you (GDPR Articles 15–21, and Argentina&apos;s Personal
          Data Protection Law No. 25.326). To exercise any of these rights,
          contact us at{" "}
          <a href="mailto:sandovalmatiasezequiel@gmail.com">
            sandovalmatiasezequiel@gmail.com
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          VOXLEAP — Matías Sandoval, Founder. Email:{" "}
          <a href="mailto:sandovalmatiasezequiel@gmail.com">
            sandovalmatiasezequiel@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}