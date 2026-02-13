import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

export interface TextareaProps extends ComponentProps<"textarea"> {
  /**
   * Textarea variant for different states
   */
  variant?: "error" | "success";
}

/**
 * Textarea component - A basic textarea element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Textarea({ variant, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "runko-textarea",
        variant && `runko-textarea--${variant}`,
        className,
      )}
      {...props}
    />
  );
}
