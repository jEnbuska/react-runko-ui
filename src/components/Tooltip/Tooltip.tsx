import { useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { TooltipContent } from "../TooltipContent/TooltipContent";
import type { TooltipPosition } from "../../types";
import "./Tooltip.css";

export interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: ReactNode;
  /**
   * Position of the tooltip relative to the trigger
   * @default "top"
   */
  position?: TooltipPosition;
  /**
   * The trigger element that shows the tooltip on hover/focus
   */
  children: ReactNode;
  /**
   * Additional CSS class for the wrapper
   */
  className?: string;
}

/**
 * Tooltip component - A wrapper that manages tooltip trigger and content with positioning
 *
 * Features:
 * - Automatic show/hide on hover and focus (keyboard accessible)
 * - 4 position options: top, bottom, left, right
 * - Arrow indicators pointing to trigger
 * - Works with any trigger element
 *
 * Note: For full keyboard accessibility, ensure the trigger element (children)
 * is focusable (e.g., button, link, or has tabIndex)
 *
 * @example
 * ```tsx
 * <Tooltip content="Helpful information" position="top">
 *   <button>?</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  content,
  position = "top",
  children,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={cn("runko-tooltip", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <TooltipContent position={position}>{content}</TooltipContent>
      )}
    </div>
  );
}
