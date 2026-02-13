import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import type { ButtonVariant } from "../../types";
import "./Button.css";

export type ButtonVariantClassNames = Partial<Record<ButtonVariant, string>>;

export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * Button variant for semantic styling
   */
  variant?: ButtonVariant;
  /**
   * Custom class names for each variant state
   */
  variantClassNames?: ButtonVariantClassNames;
}

/**
 * Button component - A basic button element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Button({
  variant,
  variantClassNames,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "runko-button",
        variant &&
          (variantClassNames?.[variant] || `runko-button--${variant}`),
        className,
      )}
      {...props}
    />
  );
}
