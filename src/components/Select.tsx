import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

export interface SelectProps extends ComponentProps<"select"> {
  /**
   * Select variant for different states
   */
  variant?: "error" | "success";
}

/**
 * Select component - A basic select element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Select({ variant, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "runko-select",
        variant && `runko-select--${variant}`,
        className,
      )}
      {...props}
    />
  );
}
