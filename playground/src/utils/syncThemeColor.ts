/**
 * Sync the browser's theme-color meta tag with the CSS variable.
 * This ensures the mobile address bar matches the UI theme dynamically.
 *
 * Note: OKLCH colors are converted to approximate hex values for
 * better browser compatibility with the theme-color meta tag.
 */
export function syncBrowserThemeColor() {
  const root = document.documentElement;
  const primaryColor = getComputedStyle(root)
    .getPropertyValue("--runko-primary")
    .trim();

  const meta = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );

  if (meta && primaryColor) {
    // For OKLCH colors, we use the CSS variable as-is
    // Modern browsers support it, older browsers fall back to initial value
    meta.content = primaryColor;
  }
}
