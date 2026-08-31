"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/maia/maia.module.css";

type Option = { label: string; correct?: boolean; points?: number };
type Question = { text: string; options: Option[] };

const LETTERS = ["A", "B", "C", "D"];

const GRAMMAR: Question[] = [
  {
    text: '"___ you working on a new branch right now, or are you still pushing to main?"',
    options: [
      { label: "Is" },
      { label: "Are", correct: true, points: 1 },
      { label: "Do" },
      { label: "Were" },
    ],
  },
  {
    text: '"She ___ her part of the report last night, so we can send it to the client first thing tomorrow morning."',
    options: [
      { label: "finish" },
      { label: "is finishing" },
      { label: "finished", correct: true, points: 1 },
      { label: "has finish" },
    ],
  },
  {
    text: '"There ___ a few things we need to go over before the call. Can we meet for ten minutes before it starts?"',
    options: [
      { label: "is" },
      { label: "are", correct: true, points: 1 },
      { label: "be" },
      { label: "were" },
    ],
  },
  {
    text: '"You ___ send the contract to the client until the legal team has reviewed it and given the final approval."',
    options: [
      { label: "don't have to" },
      { label: "mustn't", correct: true, points: 1 },
      { label: "shouldn't have" },
      { label: "might not" },
    ],
  },
  {
    text: '"We ___ to fix this issue since Monday morning, but every time we think we\'ve found the cause, something else comes up."',
    options: [
      { label: "try" },
      { label: "tried" },
      { label: "are trying" },
      { label: "have been trying", correct: true, points: 2 },
    ],
  },
  {
    text: '"By the time the client joins the call on Friday, we ___ the final version of the report and sent it for review."',
    options: [
      { label: "will finish" },
      { label: "finish" },
      { label: "will have finished", correct: true, points: 2 },
      { label: "are finishing" },
    ],
  },
  {
    text: '"The project was delivered two weeks late ___ the team had been working overtime for most of the month and had flagged the risk early."',
    options: [
      { label: "because" },
      { label: "so that" },
      { label: "even though", correct: true, points: 2 },
      { label: "in order to" },
    ],
  },
  {
    text: '"If the team had tested the update before releasing it, the app ___ down on the first day and the client ___ looking for another provider."',
    options: [
      { label: "wouldn't go / would start" },
      { label: "wouldn't have gone / wouldn't have started", correct: true, points: 2 },
      { label: "won't go / will start" },
      { label: "hadn't gone / started" },
    ],
  },
  {
    text: '"The client ___ us three times this week already. I think we need to schedule a call before things get worse."',
    options: [
      { label: "contacts" },
      { label: "contacted" },
      { label: "was contacting" },
      { label: "has contacted", correct: true, points: 2 },
    ],
  },
  {
    text: '"The client loved the final presentation. ___, they decided to extend the contract for another six months and add two new features to the scope."',
    options: [
      { label: "However" },
      { label: "Although" },
      { label: "As a result", correct: true, points: 2 },
      { label: "Nevertheless" },
    ],
  },
  {
    text: '"I ___ the documentation more carefully before the meeting. I didn\'t understand half of what the client was asking."',
    options: [
      { label: "should read" },
      { label: "must have read" },
      { label: "should have read", correct: true, points: 2 },
      { label: "had to read" },
    ],
  },
  {
    text: '"It is essential that every team member ___ the agreed process before making any changes to the shared codebase, especially during a live release."',
    options: [
      { label: "follows" },
      { label: "follow", correct: true, points: 2 },
      { label: "is following" },
      { label: "will follow" },
    ],
  },
  {
    text: '"The only collaboration platform ___ the entire team agreed to use after weeks of debate turned out to be one that none of them had tried before."',
    options: [
      { label: "which" },
      { label: "in which" },
      { label: "that", correct: true, points: 2 },
      { label: "where" },
    ],
  },
  {
    text: '"The report concluded that better communication between teams ___ most of the delays that affected the project during the second half of the year."',
    options: [
      { label: "would prevent" },
      { label: "had prevented" },
      { label: "would have prevented", correct: true, points: 2 },
      { label: "was preventing" },
    ],
  },
];

const READING_PASSAGE = [
  "For most of the twentieth century, the technology industry was dominated by a small number of large corporations that controlled both the tools and the knowledge. If you wanted to build something significant, you needed access to expensive software, proprietary systems, and a network of people who already worked inside those institutions.",
  "That model has changed. Open source software, collaborative development platforms, and artificial intelligence tools that are freely available to anyone with an internet connection have fundamentally shifted the balance of power. Today, a developer in Buenos Aires, Lagos, or Hanoi has access to the same foundational tools as one in San Francisco or Berlin.",
  "But access alone is not enough. The global tech industry operates primarily in English — not because English is superior, but because it became the shared language of collaboration across borders. Documentation is written in English. Pull requests are reviewed in English. International teams hold their stand-ups, retrospectives, and demos in English.",
  "For the bilingual IT professional, this is not a barrier — it is an advantage. The ability to contribute to open source projects, present work to international clients, and participate in global teams is a skill that compounds over time. It opens doors that remain closed to equally talented professionals who never developed that confidence.",
];

const READING: Question[] = [
  {
    text: "According to the text, what changed the balance of power in the tech industry?",
    options: [
      { label: "Large corporations began sharing their proprietary systems with smaller companies" },
      { label: "Governments in developing countries invested heavily in technology education" },
      { label: "Freely available tools and platforms made it possible for anyone to build at a global level", correct: true, points: 2 },
      { label: "English became the official language of international software development" },
    ],
  },
  {
    text: 'The text says that the ability to work in English "compounds over time." What does this suggest?',
    options: [
      { label: "Learning English becomes more difficult the longer a professional waits to start" },
      { label: "The advantages of working in English decrease as more professionals become bilingual" },
      { label: "English proficiency is only valuable in the early stages of an international career" },
      { label: "The professional benefits of working in English grow and accumulate the more it is practised", correct: true, points: 2 },
    ],
  },
  {
    text: "The author mentions developers in Buenos Aires, Lagos, and Hanoi. What is the main point of including these specific locations?",
    options: [
      { label: "To show that English is spoken differently depending on the region where a developer works" },
      { label: "To argue that developers outside the US and Europe produce lower-quality open source software" },
      { label: "To illustrate that geographical location no longer determines access to global technology tools", correct: true, points: 2 },
      { label: "To suggest that open source software was originally designed for developers in the Global South" },
    ],
  },
];

const LISTENING: Question[] = [
  {
    text: "What is the speaker's main purpose in this recording?",
    options: [
      { label: "To compare proprietary and open source software and recommend which one students should use" },
      { label: "To argue that open source software is always a more effective choice than proprietary alternatives" },
      { label: "To explain how companies like Microsoft control their software and why that creates legal risks" },
      { label: "To give listeners a general introduction to open source software and how it differs from proprietary systems", correct: true, points: 3 },
    ],
  },
  {
    text: "Based on what you heard, open source software —",
    options: [
      { label: "is the most reliable option for professionals because experts constantly review the code" },
      { label: "requires the same technical knowledge to use as any proprietary software on the market" },
      { label: "was designed primarily for individual developers rather than collaborative teams or organizations" },
      { label: "offers real opportunities for growth, but how much you get out of it depends on what you put in", correct: true, points: 3 },
    ],
  },
  {
    text: "What does the recording suggest about the relationship between the community model and the quality of open source software?",
    options: [
      { label: "A larger developer community always produces software that is more secure and reliable" },
      { label: "Community-driven development guarantees faster updates than any proprietary software team" },
      { label: "The same community structure that drives innovation also means there are no guarantees of quality or support", correct: true, points: 3 },
      { label: "Open source communities are more motivated than corporate teams because they work without financial pressure" },
    ],
  },
];

const QUESTIONS: Question[] = [...GRAMMAR, ...READING, ...LISTENING];

type Level = { level: string; name: string; below: boolean };

function getLevel(score: number): Level {
  if (score <= 5) return { level: "A1", name: "Beginner", below: true };
  if (score <= 9) return { level: "A2", name: "Elementary", below: true };
  if (score <= 14) return { level: "A2+", name: "Pre-Intermediate", below: true };
  if (score <= 20) return { level: "B1", name: "Intermediate", below: false };
  if (score <= 26) return { level: "B1+", name: "Upper-Intermediate", below: false };
  if (score <= 32) return { level: "B2", name: "Advanced", below: false };
  if (score <= 37) return { level: "C1", name: "Proficiency", below: false };
  return { level: "C2", name: "Mastery", below: false };
}

const CALENDAR_URL = "https://calendar.app.google/9TKTCVwPwXABpVZW6";

export default function MaiaTest() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [writing, setWriting] = useState("");
  const [error, setError] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<Level | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (result) resultRef.current?.focus();
  }, [result]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const answered = Object.keys(answers).length;
  const progress = (answered / 20) * 100;

  function setSpeedValue(s: number) {
    setSpeed(s);
    if (audioRef.current) audioRef.current.playbackRate = s;
  }

  function calculateScore() {
    let score = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      const sel = answers[i];
      if (sel === undefined) continue;
      const opt = QUESTIONS[i].options[sel];
      if (opt.correct) score += opt.points ?? 1;
    }
    return score;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (answers[i] === undefined) {
        setError(true);
        const el = document.getElementById(`maia-q-${i}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.querySelector("input")?.focus();
        return;
      }
    }
    setError(false);
    setSubmitting(true);

    const score = calculateScore();
    const level = getLevel(score);

    const detail = QUESTIONS.map((q, i) => {
      const sel = answers[i];
      const correct = q.options[sel];
      return `Q${i + 1}: ${LETTERS[sel]} ${correct.correct ? "✓" : "✗ (correct: " + LETTERS[q.options.findIndex((o) => o.correct)] + ")"}`;
    }).join(" | ");

    try {
      const fd = new FormData();
      fd.append("_subject", `[MAIA Test] ${level.level} — ${score}pts`);
      fd.append("_template", "table");
      fd.append("Level", `${level.level} — ${level.name}`);
      fd.append("Score", `${score} / 39`);
      fd.append("Result", level.below ? "Below B1 → VoxLeap" : "B1+ → MAIA qualifies");
      fd.append("Open_Response", writing || "(no response)");
      fd.append("Answer_Detail", detail);
      await fetch("https://formsubmit.co/ajax/sandovalmatiasezequiel@gmail.com", {
        method: "POST",
        body: fd,
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
    setResult(level);
  }

  function shareLinkedIn() {
    window.open(
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
        encodeURIComponent(window.location.href),
      "_blank"
    );
  }

  function shareWhatsApp() {
    const text = result
      ? result.below
        ? `Hice un test de inglés técnico y me dio ${result.level}. Lo estoy trabajando. Hacé el tuyo acá: ${window.location.href}`
        : `I just took a tech English level check and got ${result.level}. If you work in IT and want to know where your English really stands, try it: ${window.location.href}`
      : "";
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  }

  return (
    <div className={styles.maia}>
      <main id="main">
      <div className={styles.progressWrap}>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-label="Test progress"
          aria-valuemin={0}
          aria-valuemax={20}
          aria-valuenow={answered}
          style={{ width: `${result ? 100 : progress}%` }}
        />
      </div>

      {!result && (
        <>
          <nav className={`${styles.nav}${scrolled ? " " + styles.scrolled : ""}`}>
            <div className={styles.navLogo}>
              MAIA <em>BOOTCAMP</em>
            </div>
            <span className={styles.navTag}>English Level Check</span>
          </nav>

          <section className={styles.hero} id="hero">
            <div className={styles.heroGridBg} />
            <div className={styles.heroGlow} />
            <div className={styles.heroInner}>
              <span className={styles.heroEyebrow}>MAIA Bootcamp · English Level Check</span>
              <h1 className={styles.heroTitle}>
                How&apos;s your
                <br />
                <span className={styles.heroLine2}>tech English?</span>
              </h1>
              <p className={styles.heroSub}>
                A 20-minute test to find out where you stand — not to judge you, but to see if
                you&apos;re ready to work, build, and present in English inside a real international
                team. Answer honestly. That&apos;s all we need.
              </p>
              <div className={styles.heroPills}>
                <span className={styles.heroPill}>20 questions + 1 open</span>
                <span className={styles.heroPill}>~20 min</span>
                <span className={styles.heroPill}>CEFR A1 → C2</span>
              </div>
            </div>
          </section>

          <div className={styles.formSection} id="form-section">
            <div className={styles.formInner}>
              <form onSubmit={handleSubmit}>
                {/* 01 GRAMMAR */}
                <div className={styles.sectionBlock}>
                  <div className={styles.sectionEyebrow}>01 · Grammar</div>
                  <h2 className={styles.sectionHeading}>Questions 01 — 14</h2>
                  <div className={styles.taskBox}>
                    <span className={styles.taskLabel}>Task</span>
                    <p className={styles.taskText}>
                      Read each sentence carefully and choose the option that best completes it. All
                      sentences are set in real work contexts. Only one answer is correct.
                    </p>
                  </div>
                  {GRAMMAR.map((q, i) => (
                    <QuestionCard key={i} index={i} question={q} answers={answers} onAnswer={setAnswers} />
                  ))}
                </div>

                <div className={styles.divider} />

                {/* 02 READING */}
                <div className={styles.sectionBlock}>
                  <div className={styles.sectionEyebrow}>02 · Reading</div>
                  <h2 className={styles.sectionHeading}>Questions 15 — 17</h2>
                  <div className={styles.taskBox}>
                    <span className={styles.taskLabel}>Task</span>
                    <p className={styles.taskText}>
                      Read the text carefully. Then answer the three questions below. Pay attention
                      not just to what the text says, but to what it implies.
                    </p>
                  </div>
                  <div className={styles.readingPassage}>
                    <strong>The new rules of the global tech industry</strong>
                    {READING_PASSAGE.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {READING.map((q, i) => (
                    <QuestionCard key={i} index={GRAMMAR.length + i} question={q} answers={answers} onAnswer={setAnswers} />
                  ))}
                </div>

                <div className={styles.divider} />

                {/* 03 LISTENING */}
                <div className={styles.sectionBlock}>
                  <div className={styles.sectionEyebrow}>03 · Listening</div>
                  <h2 className={styles.sectionHeading}>Questions 18 — 20</h2>
                  <div className={styles.taskBox}>
                    <span className={styles.taskLabel}>Task</span>
                    <p className={styles.taskText}>
                      Listen to the recording carefully. You can play it as many times as you need.
                      Then answer the three questions below. Some answers require you to infer
                      meaning — the exact words may not appear in the audio.
                    </p>
                  </div>
                  <div className={styles.audioWrap}>
                    <span className={styles.audioLabel}>Audio — Open Source Software</span>
                    <audio controls ref={audioRef}>
                      <source src="/audio.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <div className={styles.speedControls}>
                      {[0.75, 1, 1.25].map((s) => (
                        <button
                          key={s}
                          type="button"
                          aria-pressed={speed === s}
                          className={`${styles.speedBtn}${speed === s ? " " + styles.speedBtnActive : ""}`}
                          onClick={() => setSpeedValue(s)}
                        >
                          {s}×
                        </button>
                      ))}
                    </div>
                    <p className={styles.audioNote}>
                      You can replay the audio and adjust the speed before answering.
                    </p>
                  </div>
                  {LISTENING.map((q, i) => (
                    <QuestionCard key={i} index={GRAMMAR.length + READING.length + i} question={q} answers={answers} onAnswer={setAnswers} />
                  ))}
                </div>

                <div className={styles.divider} />

                {/* 04 WRITING */}
                <div className={styles.sectionBlock}>
                  <div className={styles.sectionEyebrow}>04 · Writing</div>
                  <h2 className={styles.sectionHeading}>Tell us about yourself</h2>
                  <div className={styles.taskBox}>
                    <span className={styles.taskLabel}>Open Response</span>
                    <p className={styles.taskText}>
                      Describe a technical situation you&apos;ve faced at work — a bug, a failed
                      deployment, an incident, or a challenging code review. What happened? What did
                      you do? What did you learn?
                      <br />
                      <br />
                      Write freely in English. There&apos;s no right or wrong answer. We&apos;re not
                      looking for perfect grammar — we want to understand how you communicate when it
                      matters.
                    </p>
                  </div>
                  <div className={styles.questionCard}>
                    <span className={styles.qNumber}>Question 21 — Open Response</span>
                    <textarea
                      className={styles.writingArea}
                      value={writing}
                      onChange={(e) => setWriting(e.target.value)}
                      placeholder="Write your response here..."
                      aria-label="Open response"
                    />
                  </div>
                  <label className={styles.consentLabel}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span>
                      I accept the{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>{" "}
                      and agree that my answers may be processed by VOXLEAP.
                    </span>
                  </label>
                </div>

                <p
                  className={`${styles.errorMsg}${error ? " " + styles.errorMsgVisible : ""}`}
                  role="alert"
                >
                  ⚠ Please answer all 20 questions before submitting.
                </p>
                <button type="submit" className={styles.submitBtn} disabled={submitting || !consent}>
                  {submitting ? "Sending..." : "Submit my evaluation →"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {result && (
        <>
          <div className={`${styles.resultScreen} ${result.below ? "" : styles.resultGlowHighWrap}`}>
            <div className={result.below ? styles.resultGlowLow : styles.resultGlowHigh} />
            <div className={styles.resultCard}>
              <span className={styles.resultTag}>Your current level</span>
              <h1
                ref={resultRef}
                tabIndex={-1}
                className={`${styles.resultLevel} ${result.below ? styles.resultLevelLow : styles.resultLevelHigh}`}
              >
                {result.level}
              </h1>
              <div className={styles.resultLevelName}>{result.name}</div>
              <div className={styles.resultDivider} />
              {result.below ? (
                <p className={styles.resultBody} lang="es">
                  Tu inglés técnico está en desarrollo, y tiene solución.
                  <br />
                  <br />
                  En <strong>VOXLEAP</strong> trabajamos con profesionales IT que quieren comunicarse
                  en entornos globales. Arrancamos desde tu rol, tu industria y tus objetivos reales.
                  <br />
                  <br />
                  Agendá tu clase gratuita. Te esperamos.
                </p>
              ) : (
                <p className={styles.resultBody}>
                  You&apos;ve got the level. Now let&apos;s talk about what you can build.
                  <br />
                  <br />
                  We&apos;re putting together a small cohort where IT professionals build and ship a
                  real AI-powered open source product, working 100% in English, with the tools global
                  teams actually use.
                  <br />
                  <br />
                  Book a free call with us and let&apos;s get started!
                </p>
              )}
              <a
                className={styles.resultBtn}
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.below ? "Agendá tu clase gratuita →" : "Book your free call →"}
              </a>
              <div className={styles.shareRow}>
                <button className={styles.shareBtn} onClick={shareLinkedIn}>
                  Share on LinkedIn
                </button>
                <button className={styles.shareBtn} onClick={shareWhatsApp}>
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      </main>
    </div>
  );
}

function QuestionCard({
  index,
  question,
  answers,
  onAnswer,
}: {
  index: number;
  question: Question;
  answers: Record<number, number>;
  onAnswer: React.Dispatch<React.SetStateAction<Record<number, number>>>;
}) {
  return (
    <div
      className={styles.questionCard}
      id={`maia-q-${index}`}
      role="radiogroup"
      aria-labelledby={`maia-ql-${index}`}
    >
      <span className={styles.qNumber}>
        Question {String(index + 1).padStart(2, "0")} / 20
      </span>
      <div className={styles.qText} id={`maia-ql-${index}`}>
        {question.text}
      </div>
      <div className={styles.options}>
        {question.options.map((opt, oi) => (
          <label key={oi} className={styles.optionLabel}>
            <input
              type="radio"
              name={`maia-q${index + 1}`}
              checked={answers[index] === oi}
              onChange={() => onAnswer((prev) => ({ ...prev, [index]: oi }))}
            />
            <span className={styles.optionDot} />
            <span className={styles.optionText}>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}