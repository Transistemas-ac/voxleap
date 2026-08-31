"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ phrases }: { phrases: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".phrase"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("active", entry.isIntersecting);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="phrases">
      {phrases.map((phrase) => (
        <p key={phrase} className="phrase">
          {phrase}
        </p>
      ))}
    </div>
  );
}