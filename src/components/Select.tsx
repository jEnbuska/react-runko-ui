import React, { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Select variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Select component - A basic select element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ variant, className, ...props }, ref) => {
    const classes = [
      'runko-select',
      variant && `runko-select--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <select ref={ref} className={classes} {...props} />;
  }
);

Select.displayName = 'Select';
