import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import type { TooltipPosition } from "../../types";
import "./TooltipContent.css";

export interface TooltipContentProps extends ComponentProps<"div"> {
  /**
   * Optional ID for ARIA relationship with tooltip trigger
   */
  id?: string;
  /**
   * Position of the tooltip relative to the trigger
   * @default "top"
   */
  position?: TooltipPosition;
}

/**
 * TooltipContent component - Displays tooltip content with positioning
 * Use with aria-describedby on the TooltipTrigger for accessibility
 * Can be used standalone or with the Tooltip wrapper component
 */
export function TooltipContent({
  className,
  position = "top",
  ...props
}: TooltipContentProps) {
  return (
    <div
      className={cn(
        "runko-tooltip-content",
        `runko-tooltip-content--${position}`,
        className
      )}
      role="tooltip"
      {...props}
    />
  );
}
