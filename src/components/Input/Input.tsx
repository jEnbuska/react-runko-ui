import type { ComponentProps } from "react";
import { cn } from "../../utils";
import type { RunkoVariant } from "../../types";
import "./Input.css";

export type InputVariantClassNames = Partial<Record<RunkoVariant, string>>;

export interface InputProps extends ComponentProps<"input"> {
  /**
   * Input variant for different states
   */
  variant?: RunkoVariant;
  /**
   * Custom class names for each variant state
   */
  successClassName: string;
  errorClassName: string;
}

/**
 * Input component - A basic input element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Input({
  variant,
  variantClassNames,
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "runko-input",
        variant && (variantClassNames?.[variant] || `runko-input--${variant}`),
        className,
      )}
      {...props}
    />
  );
}
