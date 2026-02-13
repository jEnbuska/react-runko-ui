/**
 * Type representing values that are considered falsy in JavaScript
 */
type Falsy = false | 0 | -0 | 0n | "" | null | undefined;

/**
 * Combines class names into a single string, filtering out falsy values.
 * Useful for conditionally applying CSS classes.
 *
 * @param args - Variable number of class names or falsy values
 * @returns A space-separated string of truthy class names
 *
 * @example
 * ```tsx
 * cn('base-class', isActive && 'active', className)
 * // Returns: "base-class active custom-class" (if isActive is true)
 * ```
 */
export function cn(...args: Array<string | Falsy>): string {
  return args.filter(Boolean).join(" ");
}
