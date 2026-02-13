import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import "./TooltipTrigger.css";

export interface TooltipTriggerProps extends ComponentProps<"button"> {
  /**
   * ID of the tooltip content element for ARIA relationship
   */
  "aria-describedby"?: string;
}

/**
 * TooltipTrigger component - A button element to trigger tooltips
 * Use aria-describedby to link with TooltipContent
 * Layout and spacing should be handled by the parent
 * Note: This is a basic trigger - tooltip visibility logic should be handled by the parent
 */
export function TooltipTrigger({ className, ...props }: TooltipTriggerProps) {
  return (
    <button
      type="button"
      className={cn("runko-tooltip-trigger", className)}
      {...props}
    />
  );
}
