import type { ComponentProps } from 'react';

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type'> {}

/**
 * Radio component - A basic radio input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export function Radio({ className, ...props }: RadioProps) {
  const classes = ['runko-radio', className].filter(Boolean).join(' ');

  return <input type="radio" className={classes} {...props} />;
}

