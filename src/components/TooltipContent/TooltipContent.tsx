import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import "./TooltipContent.css";

export interface TooltipContentProps extends ComponentProps<"div"> {
  /**
   * Optional ID for ARIA relationship with tooltip trigger
   */
  id?: string;
}

/**
 * TooltipContent component - Displays tooltip content
 * Use with aria-describedby on the TooltipTrigger for accessibility
 * Layout, positioning, and visibility should be handled by the parent
 * Note: This is a presentational component - tooltip logic should be handled by the parent
 */
export function TooltipContent({ className, ...props }: TooltipContentProps) {
  return (
    <div
      className={cn("runko-tooltip-content", className)}
      role="tooltip"
      {...props}
    />
  );
}
