import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

/**
 * Radio component - A basic radio input with minimal styling
 * Layout and spacing should be handled by the parent
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    const classes = ['runko-radio', className].filter(Boolean).join(' ');

    return <input ref={ref} type="radio" className={classes} {...props} />;
  }
);

Radio.displayName = 'Radio';
