"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (document.documentElement.dataset.theme === "light") {
      setTheme("light");
    }
  }, []);

  function apply(next: "dark" | "light") {
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode etc. */
    }
  }

  return (
    <span className="inline-flex items-center gap-1 align-middle">
      <button
        type="button"
        className="theme-btn"
        aria-label="Day mode"
        title="Day mode"
        aria-pressed={theme === "light"}
        onClick={() => apply("light")}
      >
        🌞
      </button>
      <button
        type="button"
        className="theme-btn"
        aria-label="Night mode"
        title="Night mode"
        aria-pressed={theme === "dark"}
        onClick={() => apply("dark")}
      >
        🌙
      </button>
    </span>
  );
}
