import type { ComponentProps } from "react";
import { cn } from "../utils/cn";
import type { RunkoVariant } from "../types";

export type SelectVariantClassNames = Partial<Record<RunkoVariant, string>>;

export interface SelectProps extends ComponentProps<"select"> {
  /**
   * Select variant for different states
   */
  variant?: RunkoVariant;
  /**
   * Custom class names for each variant state
   */
  variantClassNames?: SelectVariantClassNames;
}

/**
 * Select component - A basic select element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Select({
  variant,
  variantClassNames,
  className,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        "runko-select",
        variant &&
          (variantClassNames?.[variant] || `runko-select--${variant}`),
        className,
      )}
      {...props}
    />
  );
}
