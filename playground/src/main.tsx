import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { syncBrowserThemeColor } from "./utils/syncThemeColor";

// Sync theme-color meta tag immediately
// Modern browsers running this as a module script will have DOM already loaded
syncBrowserThemeColor();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
