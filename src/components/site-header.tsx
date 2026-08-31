"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header>
      <nav className="wrap">
        <div className="logo">VOXLEAP</div>
        <ul
          ref={panelRef}
          id="site-nav"
          className={`nav-links${open ? " open" : ""}`}
        >
          <li>
            <a href="#what-we-do" onClick={close}>
              What We Do
            </a>
          </li>
          <li>
            <a href="#programs" onClick={close}>
              Programs
            </a>
          </li>
          <li>
            <a href="#founder" onClick={close}>
              About
            </a>
          </li>
          <li>
            <a href="#programs" onClick={close}>
              For Companies
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href="https://calendar.app.google/ZeUtVmK3Mih7dZ6a6"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Book
          </a>
          <button
            ref={toggleRef}
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="site-nav"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}