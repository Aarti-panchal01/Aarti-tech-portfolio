"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (document.documentElement.dataset.theme === "light") {
      setTheme("light");
    }
  }, []);

  function flip() {
    const next = theme === "dark" ? "light" : "dark";
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
    <button
      type="button"
      className="theme-btn"
      aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
      title={theme === "dark" ? "Day mode" : "Night mode"}
      aria-pressed={theme === "light"}
      onClick={flip}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
