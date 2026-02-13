import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

/**
 * Checkbox component - A basic checkbox input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const classes = ['runko-checkbox', className].filter(Boolean).join(' ');

    return <input ref={ref} type="checkbox" className={classes} {...props} />;
  }
);

Checkbox.displayName = 'Checkbox';
