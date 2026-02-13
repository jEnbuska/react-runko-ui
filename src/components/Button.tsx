import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Button variant for semantic styling
   */
  variant?: 'primary' | 'secondary' | 'danger';
}

/**
 * Button component - A basic button element with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Button({ variant, className, ...props }: ButtonProps) {
  const classes = [
    'runko-button',
    variant && `runko-button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={classes} {...props} />;
}

