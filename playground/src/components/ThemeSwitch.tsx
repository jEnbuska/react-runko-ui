import { useEffect, useState } from "react";

/**
 * ThemeSwitch component provides a toggle button to switch between light and dark themes.
 * 
 * Features:
 * - Detects system preference on first load
 * - Persists user selection to localStorage
 * - Applies data-theme attribute to document root
 * - Visual feedback with sun/moon icons
 */
export function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check localStorage first
    const stored = localStorage.getItem("runko-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    
    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute("data-theme", theme);
    
    // Persist to localStorage
    localStorage.setItem("runko-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="theme-switch"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
