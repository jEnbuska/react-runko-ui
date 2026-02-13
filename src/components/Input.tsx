import type { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  /**
   * Input variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Input component - A basic input element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Input({ variant, className, ...props }: InputProps) {
  const classes = [
    'runko-input',
    variant && `runko-input--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <input className={classes} {...props} />;
}

