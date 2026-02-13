import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { syncBrowserThemeColor } from "./utils/syncThemeColor";

// Sync theme-color meta tag on load
window.addEventListener("DOMContentLoaded", syncBrowserThemeColor);

// Also sync immediately if DOM is already loaded
if (document.readyState !== "loading") {
  syncBrowserThemeColor();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
