import React, { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Textarea component - A basic textarea element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, ...props }, ref) => {
    const classes = [
      'runko-textarea',
      variant && `runko-textarea--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <textarea ref={ref} className={classes} {...props} />;
  }
);

Textarea.displayName = 'Textarea';
