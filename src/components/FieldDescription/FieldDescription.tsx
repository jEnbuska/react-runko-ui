import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import "./FieldDescription.css";

export interface FieldDescriptionProps extends ComponentProps<"div"> {
  /**
   * Optional ID for ARIA relationship with form field
   */
  id?: string;
}

/**
 * FieldDescription component - Provides descriptive text for form fields
 * Use with aria-describedby on the associated input for accessibility
 * Layout and spacing should be handled by the parent
 */
export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <div className={cn("runko-field-description", className)} {...props} />
  );
}
