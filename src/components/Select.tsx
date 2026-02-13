import type { ComponentProps } from 'react';

export interface SelectProps extends ComponentProps<'select'> {
  /**
   * Select variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Select component - A basic select element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Select({ variant, className, ...props }: SelectProps) {
  const classes = [
    'runko-select',
    variant && `runko-select--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <select className={classes} {...props} />;
}

