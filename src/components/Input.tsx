import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input variant for different states
   */
  variant?: 'error' | 'success';
}

/**
 * Input component - A basic input element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, ...props }, ref) => {
    const classes = [
      'runko-input',
      variant && `runko-input--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <input ref={ref} className={classes} {...props} />;
  }
);

Input.displayName = 'Input';
