import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import "./FieldError.css";

export interface FieldErrorProps extends ComponentProps<"div"> {
  /**
   * Optional ID for ARIA relationship with form field
   */
  id?: string;
}

/**
 * FieldError component - Displays validation error messages for form fields
 * Use with aria-describedby on the associated input for accessibility
 * Layout and spacing should be handled by the parent
 */
export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <div
      className={cn("runko-field-error", className)}
      role="alert"
      {...props}
    />
  );
}
