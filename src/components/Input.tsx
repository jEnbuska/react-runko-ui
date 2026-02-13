import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

export interface InputProps extends ComponentProps<"input"> {
  /**
   * Input variant for different states
   */
  variant?: "error" | "success";
}

/**
 * Input component - A basic input element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Input({ variant, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "runko-input",
        variant && `runko-input--${variant}`,
        className,
      )}
      {...props}
    />
  );
}
