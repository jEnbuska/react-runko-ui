import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

export interface RadioProps extends Omit<ComponentProps<"input">, "type"> {}

/**
 * Radio component - A basic radio input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Radio({ className, ...props }: RadioProps) {
  return (
    <input type="radio" className={cn("runko-radio", className)} {...props} />
  );
}
