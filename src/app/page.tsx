import Image from "next/image";
import SiteHeader from "@/components/site-header";
import ScrollReveal from "@/components/scroll-reveal";
import { GreyMark, LvmhMark, MicrosoftMark } from "@/components/brand-marks";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

const phrases = [
  "VOXLEAP is a communication coaching studio that helps professionals develop their communication skills in English through conversations that matter.",
  "No textbooks. We build every session around the conversations, challenges and topics that matter to you. Together, we explore your industry, discover new ideas and develop the English you need to communicate naturally and confidently in real-world situations.",
  "For over 12 years, we've worked with professionals and teams across Argentina, Brazil, Chile and Spain in technology, engineering, healthcare, architecture, science and many other industries.",
  "Every session is conversational, engaging and designed to help you think, communicate and grow with confidence.",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">

      <section className="hero">
        <div className="rays fade-left" aria-hidden="true" />
        <div className="wrap hero-inner">
          <h1>Global English coaching studio</h1>
          <p>Your expertise already exists, now elevate it</p>
          <div className="hero-actions">
            <a href="/maia" className="btn btn-light">
              Take the English Level Test
            </a>
            <a
              href="https://calendar.app.google/ZeUtVmK3Mih7dZ6a6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Book a Demo with the Founder
            </a>
          </div>
        </div>
      </section>

      <section className="what" id="what-we-do">
        <div className="logos-strip">
          <p className="trusted-label">Trusted by professionals from</p>
          <ul className="logos">
            <li>
              <MicrosoftMark className="logo-img logo-img-white" />
            </li>
            <li>
              <Image
                src="/logos/lumina.svg"
                alt="Lumina Americas"
                width={30}
                height={30}
                className="logo-img logo-img-white"
              />
            </li>
            <li>
              <Image
                src="/logos/tec.svg"
                alt="Grupo Tec"
                width={59}
                height={30}
                className="logo-img logo-img-white"
              />
            </li>
            <li>
              <LvmhMark className="logo-img logo-img-white" />
            </li>
            <li>
              <Image
                src="/logos/ironmountain.svg"
                alt="Iron Mountain"
                width={85}
                height={22}
                className="logo-img logo-img-white"
              />
            </li>
            <li>
              <GreyMark className="logo-img logo-img-white" />
            </li>
            <li>
              <Image
                src="/logos/ypf.svg"
                alt="YPF"
                width={118}
                height={30}
                className="logo-img logo-img-white"
              />
            </li>
            <li>
              <Image
                src="/logos/pymnts.svg"
                alt="PYMNTS"
                width={145}
                height={30}
                className="logo-img logo-img-white"
              />
            </li>
          </ul>
        </div>

        <div className="wrap">
          <div className="manifesto">
            <ScrollReveal phrases={phrases} />
            <p className="closing">
              <span>Because learning English isn&apos;t the goal.</span>
              <span>What you do with it is.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="wrap">
          <div className="eyebrow">What we do</div>
          <h2>Communication that moves your career forward</h2>

          <div className="program-grid">
            <div className="program-card">
              <div className="icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                  <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3>1:1 Coaching</h3>
              <p>
                Fully personalized sessions for professionals who want to
                communicate with clarity and confidence in international
                contexts.
              </p>
            </div>

            <div className="program-card">
              <div className="icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="9" cy="8" r="3.2" />
                  <circle cx="17" cy="9" r="2.6" />
                  <path d="M3.5 19c.6-3.4 3-5.2 5.5-5.2s4.9 1.8 5.5 5.2" />
                  <path d="M14.8 14.3c2 .2 3.9 1.8 4.4 4.7" />
                </svg>
              </div>
              <h3>Corporate Groups</h3>
              <p>
                Programs for teams and companies built around the real
                communication of each industry.
              </p>
            </div>

            <a
              className="program-card"
              href="https://globalarchitectswebsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
                  <line x1="3.5" y1="12" x2="20.5" y2="12" />
                </svg>
              </div>
              <h3>Global Architects</h3>
              <p>
                Specialized program for architects ready to develop their
                careers in international studios.
              </p>
            </a>

            <a className="program-card" href="/maia">
              <div className="icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <polyline points="8 6 3 12 8 18" />
                  <polyline points="16 6 21 12 16 18" />
                </svg>
              </div>
              <h3>MAIA Bootcamp</h3>
              <p>
                AI + English communication bootcamp for technical
                professionals.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="wrap founder-inner">
          <div className="founder-text">
            <div className="eyebrow">About the Founder</div>
            <h2>Behind every conversation is a human.</h2>
            <p className="lead-name">
              I&apos;m Matías Sandoval, founder of VOXLEAP.
            </p>
            <p>
              For over 12 years, I&apos;ve coached professionals across
              technology, engineering, architecture, healthcare, science and
              many other industries. That experience shaped a simple belief:
              every session should begin with your world.
            </p>
            <p className="quad">
              <span>Your projects.</span>
              <span>Your industry.</span>
              <span>Your challenges.</span>
              <span>Your ideas.</span>
            </p>
            <p>
              Together, we build the language you need to communicate with
              clarity and confidence in meetings, presentations, interviews and
              everyday professional conversations.
            </p>
            <p className="signoff">
              Communication is human. Excellence is intentional.
            </p>
          </div>
          <div className="founder-photo">
            <div className="founder-photo-frame">
              <Image
                src="/founder.webp"
                alt="Matías Sandoval, founder of VOXLEAP"
                fill
                sizes="320px"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAABQBACdASoQABgAPpE6mEeloyKhMAgAsBIJZQCw7YvW33lDQ3Jghx/WdfQAAP2WTB9XzAAdj3joq9+wi0F/nwKWnQnmLVVIftI/h5s/h36d8hYLoy76V2DudtfxXRnY3XIkhX2Rd+pJ72XjKSJPrKeM846f3liPweJA8fAONF6yJIBNxa+q7MvWNs+fbFL/WM1fDOGAAAA="
              />
            </div>
          </div>
        </div>
      </section>

      <div className="cta-bar" id="book">
        <div className="cta-inner">
          <div>
            <h3>Ready to make your expertise global?</h3>
            <p>Let&apos;s design the right path for you.</p>
          </div>
          <div className="cta-actions">
            <a href="/maia" className="btn btn-cyan">
              Take the English Level Test
              <ArrowIcon />
            </a>
            <a
              href="https://calendar.app.google/ZeUtVmK3Mih7dZ6a6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Book a Demo with the Founder
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      </main>

      <footer className="credit">
        <p>VOXLEAP — Global English Coaching Studio</p>
        <nav className="legal-links" aria-label="Legal">
          <a href="/privacy">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms">Terms of Service</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} VOXLEAP. All rights reserved.</p>
      </footer>
    </>
  );
}