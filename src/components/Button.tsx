import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant for semantic styling
   */
  variant?: 'primary' | 'secondary' | 'danger';
}

/**
 * Button component - A basic button element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    const classes = [
      'runko-button',
      variant && `runko-button--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';
