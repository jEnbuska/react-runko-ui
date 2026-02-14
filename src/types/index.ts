/**
 * Shared variant type for form components (Input, Select, Textarea)
 * Used to indicate different states like error or success
 */
export type RunkoVariant = "error" | "success";

/**
 * Button-specific variant type for semantic styling
 * Defaults to "secondary"
 */
export type ButtonVariant = "primary" | "secondary" | "text";

/**
 * Direction for form field layout
 */
export type FormFieldDirection = "vertical" | "horizontal";

/**
 * Position for tooltip relative to trigger
 */
export type TooltipPosition = "top" | "bottom" | "left" | "right";
