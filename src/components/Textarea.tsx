import type { ComponentProps } from "react";
import { cn } from "../utils/cn";
import type { RunkoVariant } from "../types";

export type TextareaVariantClassNames = Partial<Record<RunkoVariant, string>>;

export interface TextareaProps extends ComponentProps<"textarea"> {
  /**
   * Textarea variant for different states
   */
  variant?: RunkoVariant;
  /**
   * Custom class names for each variant state
   */
  variantClassNames?: TextareaVariantClassNames;
}

/**
 * Textarea component - A basic textarea element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Textarea({
  variant,
  variantClassNames,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        "runko-textarea",
        variant &&
          (variantClassNames?.[variant] || `runko-textarea--${variant}`),
        className,
      )}
      {...props}
    />
  );
}
