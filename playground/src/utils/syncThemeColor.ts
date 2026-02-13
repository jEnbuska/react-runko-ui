/**
 * Sync the browser's theme-color meta tag with the CSS variable.
 * This ensures the mobile address bar matches the UI theme dynamically.
 *
 * Note: Most modern browsers can handle OKLCH colors in meta theme-color tags,
 * but older browsers may not support it. The initial hex value in the HTML
 * serves as a fallback. For maximum compatibility in production apps, you may
 * want to convert the OKLCH value to hex/RGB format.
 *
 * This is primarily a convenience feature for development and modern browsers.
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
    // Set the computed value directly
    // Modern browsers support OKLCH, older browsers will use the fallback hex value
    meta.content = primaryColor;
  }
}
