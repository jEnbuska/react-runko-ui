/**
 * Optional: Sync the browser's theme-color meta tag with the CSS variable.
 * This ensures the mobile address bar matches the UI theme dynamically.
 */
function syncBrowserThemeColor() {
  const root = document.documentElement;
  const primary = getComputedStyle(root).getPropertyValue('--primary').trim();

  let meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    // Note: In a real app, you might need a utility to convert OKLCH to HEX/RGB
    // as some older mobile browsers only support standard color formats in meta tags.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (meta as any).content = primary;
  }
}

// Initialize sync on load
window.addEventListener('DOMContentLoaded', syncBrowserThemeColor);