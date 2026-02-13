import type { ComponentProps } from 'react';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {}

/**
 * Checkbox component - A basic checkbox input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Checkbox({ className, ...props }: CheckboxProps) {
  const classes = ['runko-checkbox', className].filter(Boolean).join(' ');

  return <input type="checkbox" className={classes} {...props} />;
}

