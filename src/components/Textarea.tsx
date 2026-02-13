import type { ComponentProps } from 'react';

export interface TextareaProps extends ComponentProps<'textarea'> {
  /**
   * Textarea variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Textarea component - A basic textarea element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Textarea({ variant, className, ...props }: TextareaProps) {
  const classes = [
    'runko-textarea',
    variant && `runko-textarea--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <textarea className={classes} {...props} />;
}

