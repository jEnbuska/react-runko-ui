import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type"> {}

/**
 * Checkbox component - A basic checkbox input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn("runko-checkbox", className)}
      {...props}
    />
  );
}
